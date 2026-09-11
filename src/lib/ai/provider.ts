import { matchConcepts } from '../scoring';
import type { AttemptScore, Scenario } from '../types';

/**
 * AI PROVIDER LAYER
 *
 * SkillForge separates two things that are often conflated:
 *
 *   1. What MUST be an LLM - analysing free-text reasoning, adapting critique
 *      to what this learner actually wrote, generating novel exceptions.
 *      A rule-based system cannot critique reasoning it has never seen.
 *
 *   2. What MUST NOT be an LLM - deciding what is material.  Materiality is
 *      authored and practitioner-validated per scenario.  Letting a model
 *      invent it at runtime would be unreliable and indefensible in a
 *      regulated function.
 *
 * The deterministic provider keeps the whole demo working with no API key.
 * It is clearly labelled in the UI so nobody mistakes concept matching for
 * semantic understanding.  See docs/06_mvp_architecture.md
 */

export interface RationaleAnalysis {
  /** Concepts the learner demonstrably engaged with. */
  strengths: string[];
  /** Expected concepts absent from the rationale. */
  gaps: string[];
  /** Socratic prompts - questions, never answers. */
  openQuestions: string[];
  /** Provider that produced this analysis. */
  providerId: string;
}

export interface DebriefOutput {
  headline: string;
  reasoningNote: string;
  nextPractice: string;
  providerId: string;
}

export interface JudgementProvider {
  id: string;
  label: string;
  /** True when a real model is answering. */
  live: boolean;
  analyseRationale(scenario: Scenario, rationale: string, flaggedIds: string[]): Promise<RationaleAnalysis>;
  debrief(scenario: Scenario, score: AttemptScore, rationale: string): Promise<DebriefOutput>;
}

/* ------------------------------------------------------------------ */
/* Deterministic provider - default, no API key required               */
/* ------------------------------------------------------------------ */

const QUESTION_BANK: Record<string, string> = {
  'non-recurring':
    'The memo discloses a one-off item in its own financial summary. Does any ratio in the memo depend on that number?',
  'covenant-breach':
    'You have a covenant minimum and a reported ratio. Did you recompute the ratio, or read it?',
  'group-exposure':
    'Exposure is stated for the borrower. Is the borrower the only entity in this relationship?',
  'stale-data':
    'What is the date of the most recent figure in this memo, and what is the date of the most recent figure in the data room?',
  authority:
    'Assume everything in the memo is true. Would clearing it still be inside your authority?',
  'wrong-premise':
    'What did the AI have to assume about this business before it could choose a comparison set?',
  'metric-confusion':
    'The operations pack reports two similar percentages. Which one did the memo use, and which one did it need?',
  restraint:
    'Which statements did you challenge? For each one, what evidence did you have that it was wrong, as opposed to surprising?',
  'proportionate-action':
    'Does anything here require a change to facility terms, or an exception? If not, whose file is this to fix?',
  hallucination:
    'The memo states a specific event on a specific date. Which document in the data room records it?',
  definition:
    'Where is the ratio you are checking actually defined, and does the memo use that definition?',
  'funded-debt':
    'Rebuild funded debt from the debt schedule rather than the summary. Do you get the same total?',
};

function conceptLabel(scenario: Scenario, id: string) {
  return scenario.expectedConcepts.find((c) => c.id === id)?.label ?? id;
}

export const deterministicProvider: JudgementProvider = {
  id: 'deterministic',
  label: 'Deterministic demo evaluator',
  live: false,

  async analyseRationale(scenario, rationale, flaggedIds) {
    const { hit, missedConcepts } = matchConcepts(scenario, rationale);
    const challengedDecoys = scenario.elements.filter(
      (e) => e.decoy && flaggedIds.includes(e.id),
    );

    const openQuestions = missedConcepts
      .map((id) => QUESTION_BANK[id])
      .filter(Boolean)
      .slice(0, 3);

    if (challengedDecoys.length > 0) {
      openQuestions.push(
        `You challenged ${challengedDecoys.length} statement${challengedDecoys.length > 1 ? 's' : ''} in this draft. For each, what evidence did you have that it was wrong — rather than merely unexpected?`,
      );
    }
    if (rationale.trim().length < 40) {
      openQuestions.unshift(
        'Your rationale is very short. State the single fact that most changes the decision, and how you would verify it.',
      );
    }

    return {
      strengths: hit.map((id) => conceptLabel(scenario, id)),
      gaps: missedConcepts.map((id) => conceptLabel(scenario, id)),
      openQuestions,
      providerId: 'deterministic',
    };
  },

  async debrief(scenario, score, rationale) {
    const missedCritical = score.missed.filter((m) => m.materiality === 'critical').length;
    const decoysTaken = score.falseFlags.filter((f) => f.isDecoy).length;

    let headline: string;
    if (missedCritical > 0) {
      headline = `You missed ${missedCritical} critical defect${missedCritical > 1 ? 's' : ''} — the element that changes the lending decision.`;
    } else if (decoysTaken > 0) {
      headline = `You caught the material issues, but spent scrutiny challenging ${decoysTaken} statement${decoysTaken > 1 ? 's' : ''} the AI had right.`;
    } else if (score.recall > 0.8) {
      headline = 'You found the defects that mattered and left the correct material alone.';
    } else {
      headline = 'Partial catch. The material defects are where your scrutiny needs to go first.';
    }

    const gapNote =
      score.conceptsMissed.length > 0
        ? `Your written rationale did not address: ${score.conceptsMissed
            .map((id) => conceptLabel(scenario, id))
            .join('; ')}.`
        : 'Your written rationale addressed every element of the expert reasoning path.';

    const lengthNote =
      rationale.trim().length < 40
        ? ' A short rationale makes it hard to distinguish a judgement from a guess.'
        : '';

    const nextPractice =
      missedCritical > 0
        ? 'Practise recomputation: scenarios where the headline ratio is derived from a figure disclosed elsewhere in the same document.'
        : decoysTaken > 0
          ? 'Practise restraint: exception cases where the AI is correct and the correct action is to leave it alone.'
          : score.calibrationError > 20
            ? 'Practise calibration: your confidence is running ahead of your accuracy.'
            : 'Move up in difficulty: unfamiliar sector, assistance withdrawn.';

    return {
      headline,
      reasoningNote: gapNote + lengthNote,
      nextPractice,
      providerId: 'deterministic',
    };
  },
};

/* ------------------------------------------------------------------ */
/* LLM provider - used when an API key is configured                   */
/* ------------------------------------------------------------------ */

const endpoint = import.meta.env.VITE_AI_ENDPOINT as string | undefined;
const apiKey = import.meta.env.VITE_AI_API_KEY as string | undefined;
const model = (import.meta.env.VITE_AI_MODEL as string | undefined) ?? 'gpt-4o-mini';

async function chat(system: string, user: string): Promise<string> {
  const res = await fetch(endpoint!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      temperature: 0.2,
      messages: [
        { role: 'system', content: system },
        { role: 'user', content: user },
      ],
    }),
  });
  if (!res.ok) throw new Error(`AI provider returned ${res.status}`);
  const json = await res.json();
  return json.choices?.[0]?.message?.content ?? '';
}

function safeParse<T>(raw: string, fallback: T): T {
  try {
    const cleaned = raw.replace(/^```(?:json)?/i, '').replace(/```$/, '').trim();
    return JSON.parse(cleaned) as T;
  } catch {
    return fallback;
  }
}

const COACH_SYSTEM = `You are a senior credit risk analyst coaching a first-year analyst who is reviewing an AI-drafted credit memo.

Hard rules:
- You NEVER state which specific elements are defective. You ask questions that make the analyst look in the right place.
- You never reveal the correct decision.
- You assess only the reasoning you are given, against the expected reasoning path supplied.
- You are concise, specific and professional. No praise inflation, no filler.
Respond with JSON only.`;

export const llmProvider: JudgementProvider = {
  id: 'llm',
  label: `Live model (${model})`,
  live: true,

  async analyseRationale(scenario, rationale, flaggedIds) {
    const flagged = scenario.elements
      .filter((e) => flaggedIds.includes(e.id))
      .map((e) => `- [${e.section}] ${e.text}`)
      .join('\n');

    const user = `EXPECTED REASONING PATH (do not reveal directly):
${scenario.expectedConcepts.map((c) => `- ${c.id}: ${c.label}`).join('\n')}

THE ANALYST FLAGGED THESE STATEMENTS AS DEFECTIVE:
${flagged || '(none)'}

THE ANALYST'S WRITTEN RATIONALE:
"""${rationale || '(blank)'}"""

Return JSON:
{"strengths": ["reasoning elements genuinely demonstrated"],
 "gaps": ["expected reasoning elements absent"],
 "openQuestions": ["2-4 Socratic questions, no answers"]}`;

    const raw = await chat(COACH_SYSTEM, user);
    const parsed = safeParse(raw, { strengths: [], gaps: [], openQuestions: [] });
    return { ...parsed, providerId: 'llm' };
  },

  async debrief(scenario, score, rationale) {
    const user = `The analyst reviewed an AI-drafted credit memo for ${scenario.borrower}.

Materiality-weighted result (computed deterministically, treat as ground truth):
- scrutiny precision ${(score.precision * 100).toFixed(0)}%, recall ${(score.recall * 100).toFixed(0)}%
- critical defects missed: ${score.missed.filter((m) => m.materiality === 'critical').length}
- correct statements wrongly challenged: ${score.falseFlags.filter((f) => f.isDecoy).length}
- decision correct: ${score.decisionCorrect}
- confidence minus actual: ${score.calibrationError.toFixed(0)} points

Their rationale:
"""${rationale || '(blank)'}"""

Return JSON:
{"headline": "one sentence naming the single most important pattern",
 "reasoningNote": "two sentences on the reasoning, referencing what they actually wrote",
 "nextPractice": "one sentence recommending the next practice type"}`;

    const raw = await chat(COACH_SYSTEM, user);
    const parsed = safeParse(raw, {
      headline: '',
      reasoningNote: '',
      nextPractice: '',
    });
    if (!parsed.headline) return deterministicProvider.debrief(scenario, score, rationale);
    return { ...parsed, providerId: 'llm' };
  },
};

/** Live model when configured, deterministic otherwise. */
export const provider: JudgementProvider =
  endpoint && apiKey ? llmProvider : deterministicProvider;

export const providerIsLive = Boolean(endpoint && apiKey);
