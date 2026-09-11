import {
  MATERIALITY_WEIGHT,
  type AttemptScore,
  type DecisionId,
  type Materiality,
  type Scenario,
} from './types';

/** Weight charged for flagging a clean, non-decoy element (ordinary noise). */
const NOISE_PENALTY = 1;

export interface ScoreInput {
  scenario: Scenario;
  flaggedIds: string[];
  decision: DecisionId | null;
  confidence: number;
  rationale: string;
  maxLadderUsed: number;
}

/**
 * Materiality-weighted scoring of scrutiny allocation.
 *
 * Deliberately deterministic and rule-based: materiality is defined by the
 * scenario author and practitioner-validated, so inventing it at runtime
 * would be unreliable and indefensible.  The LLM layer analyses free-text
 * REASONING; it never decides what matters.  See docs/06_mvp_architecture.md
 */
export function scoreAttempt({
  scenario,
  flaggedIds,
  decision,
  confidence,
  rationale,
  maxLadderUsed,
}: ScoreInput): AttemptScore {
  const flagged = new Set(flaggedIds);

  const caught: { id: string; materiality: Materiality }[] = [];
  const missed: { id: string; materiality: Materiality }[] = [];
  const falseFlags: { id: string; isDecoy: boolean }[] = [];

  let gained = 0;
  let totalDefectWeight = 0;
  let falseCost = 0;
  let decoysFlagged = 0;
  let decoyTotal = 0;

  let materialTotal = 0;
  let materialCaught = 0;

  for (const el of scenario.elements) {
    if (el.defect) {
      const w = MATERIALITY_WEIGHT[el.defect.materiality];
      totalDefectWeight += w;
      const isMaterial =
        el.defect.materiality === 'critical' || el.defect.materiality === 'major';
      if (isMaterial) materialTotal += 1;

      if (flagged.has(el.id)) {
        gained += w;
        caught.push({ id: el.id, materiality: el.defect.materiality });
        if (isMaterial) materialCaught += 1;
      } else {
        missed.push({ id: el.id, materiality: el.defect.materiality });
      }
      continue;
    }

    if (el.decoy) {
      decoyTotal += 1;
      if (flagged.has(el.id)) {
        decoysFlagged += 1;
        falseCost += el.decoy.trapWeight;
        falseFlags.push({ id: el.id, isDecoy: true });
      }
      continue;
    }

    if (flagged.has(el.id)) {
      falseCost += NOISE_PENALTY;
      falseFlags.push({ id: el.id, isDecoy: false });
    }
  }

  const precision = gained + falseCost > 0 ? gained / (gained + falseCost) : 0;
  const recall = totalDefectWeight > 0 ? gained / totalDefectWeight : 0;
  const scrutiny =
    precision + recall > 0 ? (2 * precision * recall) / (precision + recall) : 0;

  const overCorrection = decoyTotal > 0 ? decoysFlagged / decoyTotal : 0;
  const materialCatchRate = materialTotal > 0 ? materialCaught / materialTotal : 0;
  const decisionCorrect = decision === scenario.correctDecision;

  const { hit, missedConcepts } = matchConcepts(scenario, rationale);

  // Actual performance blends what they caught with whether the call was right.
  const actual = 100 * (0.7 * scrutiny + 0.3 * (decisionCorrect ? 1 : 0));
  const calibrationError = confidence - actual;

  return {
    precision,
    recall,
    scrutiny,
    overCorrection,
    materialCatchRate,
    decisionCorrect,
    calibrationError,
    conceptsHit: hit,
    conceptsMissed: missedConcepts,
    unassisted: maxLadderUsed === 0,
    caught,
    missed,
    falseFlags,
  };
}

/**
 * Concept matching over the learner's free-text rationale.
 *
 * This is the deterministic fallback for reasoning analysis.  When an LLM
 * provider is configured it replaces this with semantic analysis; the
 * deterministic path keeps the demo fully functional with no API key.
 */
export function matchConcepts(scenario: Scenario, rationale: string) {
  const text = rationale.toLowerCase();
  const hit: string[] = [];
  const missedConcepts: string[] = [];

  for (const concept of scenario.expectedConcepts) {
    const found = concept.synonyms.some((s) => text.includes(s.toLowerCase()));
    if (found) hit.push(concept.id);
    else missedConcepts.push(concept.id);
  }
  return { hit, missedConcepts };
}

/** Archetype assignment mirroring the HBR/KPMG (2026) three-group finding. */
export type Archetype = 'amplifier' | 'delegator' | 'apprentice';

export function classifyArchetype(score: AttemptScore): {
  archetype: Archetype;
  label: string;
  explanation: string;
} {
  const lowScrutiny = score.recall < 0.35;
  const misTargeted = score.overCorrection >= 0.5 || score.precision < 0.5;

  if (lowScrutiny && !misTargeted) {
    return {
      archetype: 'delegator',
      label: 'Delegator pattern',
      explanation:
        'You accepted most of the AI draft without challenge. That avoids adding errors, but it also adds no value over the AI working alone.',
    };
  }
  if (misTargeted) {
    return {
      archetype: 'apprentice',
      label: 'Mis-targeted scrutiny',
      explanation:
        'You scrutinised actively, but a large share of your effort went to elements that were already correct or did not affect the decision. This is the pattern that performs below the AI baseline.',
    };
  }
  return {
    archetype: 'amplifier',
    label: 'Amplifier pattern',
    explanation:
      'You directed scrutiny at the elements that actually moved the credit decision, and left correct material alone.',
  };
}

export const pct = (n: number) => `${Math.round(n * 100)}%`;
