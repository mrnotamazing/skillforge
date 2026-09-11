import { useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  ArrowRight,
  Check,
  ChevronRight,
  Clock,
  FileText,
  Flag,
  Lightbulb,
  Lock,
  RotateCcw,
  ShieldAlert,
  Sparkles,
  Target,
  X,
} from 'lucide-react';
import { SCENARIOS, getScenario } from '../lib/data/scenarios';
import { classifyArchetype, scoreAttempt } from '../lib/scoring';
import { provider } from '../lib/ai/provider';
import type { RationaleAnalysis, DebriefOutput } from '../lib/ai/provider';
import { useStore } from '../lib/store';
import type { AttemptScore, DecisionId, Scenario } from '../lib/types';
import { Card, MaterialityBadge, Meter, Note, SectionTitle, Stat } from '../components/ui';

type Stage = 'brief' | 'independent' | 'assisted' | 'debrief';

const MODE_LABEL = {
  baseline: 'Baseline scenario',
  exception: 'Exception Lab',
  transfer: 'Transfer test',
} as const;

/* ---------------------------------------------------------------- */

function ScenarioPicker() {
  const navigate = useNavigate();
  const attempts = useStore((s) => s.attempts);

  return (
    <div>
      <SectionTitle
        eyebrow="Capability journey"
        title="Evaluate an AI-generated credit recommendation"
        sub="Three scenarios, escalating in difficulty. The first teaches where to aim scrutiny. The second tests whether you know when the AI is right. The third removes all assistance to measure what you can do unaided."
      />
      <div className="grid gap-4 lg:grid-cols-3">
        {SCENARIOS.map((s, i) => {
          const done = attempts.filter((a) => a.scenarioId === s.id).length;
          const locked =
            i > 0 && !attempts.some((a) => a.scenarioId === SCENARIOS[i - 1].id);
          return (
            <Card key={s.id} className="flex flex-col p-5">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-semibold uppercase tracking-wide text-brand">
                  {MODE_LABEL[s.mode]}
                </span>
                {done > 0 && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-0.5 text-[10px] font-semibold text-green-700">
                    <Check className="h-3 w-3" /> {done} attempt{done > 1 ? 's' : ''}
                  </span>
                )}
              </div>
              <h3 className="mt-2 text-[15px] font-semibold leading-snug">{s.title}</h3>
              <p className="mt-1 text-[13px] text-slate-600">{s.borrower}</p>
              <p className="mt-2.5 flex-1 text-[13px] leading-relaxed text-slate-600">
                {s.brief}
              </p>
              <div className="mt-3 flex items-center gap-3 text-[11px] text-slate-500">
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3 w-3" /> ~{s.timeboxMinutes} min
                </span>
                <span className="inline-flex items-center gap-1">
                  {s.maxAssistLevel === 0 ? (
                    <>
                      <Lock className="h-3 w-3" /> No assistance
                    </>
                  ) : (
                    <>
                      <Lightbulb className="h-3 w-3" /> Ladder L1–L{s.maxAssistLevel}
                    </>
                  )}
                </span>
              </div>
              <button
                disabled={locked}
                onClick={() => navigate(`/practice/${s.id}`)}
                className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-lg bg-ink px-3 py-2 text-[13px] font-medium text-white transition-colors hover:bg-ink-soft disabled:cursor-not-allowed disabled:bg-slate-300"
              >
                {locked ? 'Complete the previous scenario' : done > 0 ? 'Retry' : 'Begin'}
                {!locked && <ArrowRight className="h-3.5 w-3.5" />}
              </button>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- */

export default function PracticePage() {
  const { scenarioId } = useParams();
  const scenario = scenarioId ? getScenario(scenarioId) : undefined;
  if (!scenario) return <ScenarioPicker />;
  return <Runner key={scenario.id} scenario={scenario} />;
}

function Runner({ scenario }: { scenario: Scenario }) {
  const navigate = useNavigate();
  const addAttempt = useStore((s) => s.addAttempt);

  const [stage, setStage] = useState<Stage>('brief');
  const [flagged, setFlagged] = useState<string[]>([]);
  const [rationale, setRationale] = useState('');
  const [decision, setDecision] = useState<DecisionId | null>(null);
  const [confidence, setConfidence] = useState(60);

  const [ladderOpened, setLadderOpened] = useState<number[]>([]);
  const [critique, setCritique] = useState<RationaleAnalysis | null>(null);
  const [critiqueLoading, setCritiqueLoading] = useState(false);
  const [openSources, setOpenSources] = useState(false);

  const [independent, setIndependent] = useState<AttemptScore | null>(null);
  const [finalScore, setFinalScore] = useState<AttemptScore | null>(null);
  const [debrief, setDebrief] = useState<DebriefOutput | null>(null);

  const toggle = (id: string) =>
    setFlagged((f) => (f.includes(id) ? f.filter((x) => x !== id) : [...f, id]));

  const maxLadder = ladderOpened.length ? Math.max(...ladderOpened) : 0;
  const canCommit = decision !== null && rationale.trim().length > 0;

  /* ---- commit the independent judgement (the cognitive forcing step) ---- */
  async function commitIndependent() {
    const s = scoreAttempt({
      scenario,
      flaggedIds: flagged,
      decision,
      confidence,
      rationale,
      maxLadderUsed: 0,
    });
    setIndependent(s);

    if (scenario.maxAssistLevel === 0) {
      await finalise(s, 0);
    } else {
      setStage('assisted');
    }
  }

  async function finalise(score: AttemptScore, ladderUsed: number) {
    setFinalScore(score);
    const d = await provider.debrief(scenario, score, rationale);
    setDebrief(d);
    addAttempt({
      scenarioId: scenario.id,
      mode: scenario.mode,
      flaggedIds: flagged,
      decision,
      confidence,
      rationale,
      maxLadderUsed: ladderUsed,
      ladderUsed: ladderOpened,
      completedAt: Date.now(),
      score,
    });
    setStage('debrief');
  }

  async function submitFinal() {
    const s = scoreAttempt({
      scenario,
      flaggedIds: flagged,
      decision,
      confidence,
      rationale,
      maxLadderUsed: maxLadder,
    });
    await finalise(s, maxLadder);
  }

  async function openRung(level: number) {
    if (!ladderOpened.includes(level)) setLadderOpened((l) => [...l, level]);
    if (level === 2) setOpenSources(true);
    if (level === 3 && !critique) {
      setCritiqueLoading(true);
      try {
        const r = await provider.analyseRationale(scenario, rationale, flagged);
        setCritique(r);
      } finally {
        setCritiqueLoading(false);
      }
    }
  }

  /* ------------------------------- brief ------------------------------- */
  if (stage === 'brief') {
    return (
      <div className="mx-auto max-w-3xl animate-rise">
        <button
          onClick={() => navigate('/practice')}
          className="mb-4 text-[13px] text-slate-500 hover:text-ink"
        >
          ← All scenarios
        </button>
        <Card className="p-6 sm:p-8">
          <span className="text-[11px] font-semibold uppercase tracking-wide text-brand">
            {MODE_LABEL[scenario.mode]}
          </span>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight">{scenario.title}</h1>
          <p className="mt-1 text-[15px] text-slate-600">
            {scenario.borrower} · {scenario.sector}
          </p>

          <div className="mt-5 rounded-lg bg-slate-50 p-4 text-[14px] leading-relaxed text-slate-700">
            {scenario.situation}
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-line p-3">
              <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                Facility
              </div>
              <div className="mt-1 text-[13px] text-slate-700">{scenario.facility}</div>
            </div>
            <div className="rounded-lg border border-line p-3">
              <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                Your authority
              </div>
              <div className="mt-1 text-[13px] leading-relaxed text-slate-700">
                {scenario.authorityNote}
              </div>
            </div>
          </div>

          <div className="mt-5">
            <Note icon="warn">
              <strong>You will work unaided first.</strong> Assistance is locked until you
              commit a decision and a written rationale.{' '}
              {scenario.maxAssistLevel === 0
                ? 'In this transfer test, assistance never unlocks at all.'
                : 'This is deliberate: committing before seeing help is what makes the practice count.'}
            </Note>
          </div>

          <button
            onClick={() => setStage('independent')}
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-ink px-4 py-2.5 text-sm font-medium text-white hover:bg-ink-soft"
          >
            Open the AI draft <ArrowRight className="h-4 w-4" />
          </button>
        </Card>
      </div>
    );
  }

  /* --------------------------- debrief ------------------------------- */
  if (stage === 'debrief' && finalScore) {
    return (
      <Debrief
        scenario={scenario}
        independent={independent}
        finalScore={finalScore}
        debrief={debrief}
        flagged={flagged}
        confidence={confidence}
        decision={decision}
        onRetry={() => {
          setStage('brief');
          setFlagged([]);
          setRationale('');
          setDecision(null);
          setConfidence(60);
          setLadderOpened([]);
          setCritique(null);
          setIndependent(null);
          setFinalScore(null);
          setDebrief(null);
        }}
      />
    );
  }

  /* ------------------- independent + assisted working view ------------------- */
  const assisted = stage === 'assisted';

  return (
    <div className="animate-rise">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-wide text-brand">
            {MODE_LABEL[scenario.mode]}
          </span>
          <h1 className="text-xl font-semibold tracking-tight">{scenario.borrower}</h1>
        </div>
        <div
          className={`rounded-lg border px-3 py-1.5 text-[12px] font-medium ${
            assisted
              ? 'border-brand/30 bg-brand-soft text-brand'
              : 'border-amber-300 bg-amber-50 text-amber-900'
          }`}
        >
          {assisted ? 'Stage 2 · Assistance unlocked' : 'Stage 1 · Unassisted — assistance locked'}
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1.55fr_1fr]">
        {/* ---------------- memo ---------------- */}
        <div>
          <Card className="overflow-hidden">
            <div className="flex items-center gap-2 border-b border-line bg-slate-50 px-4 py-2.5">
              <Sparkles className="h-3.5 w-3.5 text-brand" />
              <span className="text-[12px] font-medium text-slate-700">
                AI-drafted credit review
              </span>
              <span className="ml-auto text-[11px] italic text-slate-500">
                “{scenario.aiConfidenceStatement}”
              </span>
            </div>

            <div className="divide-y divide-slate-100">
              {scenario.elements.map((el) => {
                const on = flagged.includes(el.id);
                return (
                  <button
                    key={el.id}
                    onClick={() => toggle(el.id)}
                    className={`memo-el flex w-full gap-3 px-4 py-3 text-left hover:bg-slate-50 ${
                      on ? 'bg-red-50/70 hover:bg-red-50' : ''
                    }`}
                  >
                    <span
                      className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border ${
                        on
                          ? 'border-red-600 bg-red-600 text-white'
                          : 'border-slate-300 bg-white'
                      }`}
                    >
                      {on && <Flag className="h-2.5 w-2.5" />}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                        {el.section}
                      </span>
                      <span className="mt-0.5 block text-[13.5px] leading-relaxed text-slate-800">
                        {el.text}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
            <div className="border-t border-line bg-slate-50 px-4 py-2 text-[11px] text-slate-500">
              Click any statement you believe is defective. {flagged.length} flagged.
            </div>
          </Card>

          {openSources && (
            <Card className="mt-4 p-4 animate-rise">
              <div className="mb-2.5 flex items-center gap-2">
                <FileText className="h-4 w-4 text-brand" />
                <h3 className="text-[13px] font-semibold">Data room — evidence trail</h3>
              </div>
              <div className="space-y-2.5">
                {scenario.sources.map((s) => (
                  <div key={s.id} className="rounded-lg border border-line p-3">
                    <div className="text-[12px] font-semibold text-ink">{s.title}</div>
                    <p className="mt-1 text-[12.5px] leading-relaxed text-slate-600">
                      {s.excerpt}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          )}
        </div>

        {/* ---------------- decision panel ---------------- */}
        <div className="space-y-4">
          <Card className="p-4">
            <h3 className="text-[13px] font-semibold">Your rationale</h3>
            <p className="mt-1 text-[11.5px] leading-snug text-slate-500">
              Write it before you see any assistance. This is what gets assessed — not
              just the boxes you ticked.
            </p>
            <textarea
              value={rationale}
              onChange={(e) => setRationale(e.target.value)}
              rows={6}
              placeholder="What is wrong with this draft, what would you verify, and what makes you confident?"
              className="mt-2.5 w-full resize-y rounded-lg border border-line bg-white p-2.5 text-[13px] leading-relaxed outline-none focus:border-brand focus:ring-2 focus:ring-brand/15"
            />
          </Card>

          <Card className="p-4">
            <h3 className="text-[13px] font-semibold">Your decision</h3>
            <div className="mt-2.5 space-y-1.5">
              {scenario.decisionOptions.map((o) => (
                <button
                  key={o.id}
                  onClick={() => setDecision(o.id)}
                  className={`w-full rounded-lg border p-2.5 text-left transition-colors ${
                    decision === o.id
                      ? 'border-brand bg-brand-soft'
                      : 'border-line hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <div className="text-[13px] font-medium text-ink">{o.label}</div>
                  <div className="text-[11.5px] text-slate-500">{o.description}</div>
                </button>
              ))}
            </div>

            <div className="mt-4">
              <div className="flex items-baseline justify-between">
                <label className="text-[12px] font-medium text-slate-700">
                  How confident are you?
                </label>
                <span className="text-[13px] font-semibold tabular-nums">{confidence}%</span>
              </div>
              <input
                type="range"
                min={0}
                max={100}
                step={5}
                value={confidence}
                onChange={(e) => setConfidence(Number(e.target.value))}
                className="mt-1.5 w-full accent-[#1d4ed8]"
              />
              <p className="mt-1 text-[11px] text-slate-500">
                Compared against your actual accuracy to measure calibration.
              </p>
            </div>
          </Card>

          {/* ladder */}
          <Card className="p-4">
            <div className="flex items-center gap-2">
              <Lightbulb className="h-4 w-4 text-brand" />
              <h3 className="text-[13px] font-semibold">Assistance ladder</h3>
            </div>

            {!assisted ? (
              <div className="mt-2.5 rounded-lg border border-dashed border-slate-300 bg-slate-50 p-3">
                <div className="flex items-center gap-2 text-[12px] font-medium text-slate-600">
                  <Lock className="h-3.5 w-3.5" /> Locked until you commit
                </div>
                <p className="mt-1 text-[11.5px] leading-relaxed text-slate-500">
                  {scenario.maxAssistLevel === 0
                    ? 'This is a transfer test. Assistance stays locked for the whole scenario.'
                    : 'Commit a decision and rationale first. Every rung you then open is recorded — using help is never penalised, but it is never hidden either.'}
                </p>
              </div>
            ) : (
              <div className="mt-2.5 space-y-1.5">
                {scenario.ladder.map((rung) => {
                  const open = ladderOpened.includes(rung.level);
                  return (
                    <div key={rung.level}>
                      <button
                        onClick={() => openRung(rung.level)}
                        className={`flex w-full items-center gap-2 rounded-lg border px-2.5 py-2 text-left text-[12.5px] transition-colors ${
                          open
                            ? 'border-brand/30 bg-brand-soft'
                            : 'border-line hover:bg-slate-50'
                        }`}
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-ink text-[10px] font-bold text-white">
                          L{rung.level}
                        </span>
                        <span className="font-medium text-ink">{rung.label}</span>
                        {!open && <ChevronRight className="ml-auto h-3.5 w-3.5 text-slate-400" />}
                      </button>
                      {open && (
                        <div className="mt-1 rounded-lg bg-slate-50 p-2.5 text-[12.5px] leading-relaxed text-slate-700 animate-rise">
                          {rung.level === 3 ? (
                            critiqueLoading ? (
                              <span className="text-slate-500">Analysing your reasoning…</span>
                            ) : critique ? (
                              <div className="space-y-2">
                                {critique.strengths.length > 0 && (
                                  <div>
                                    <div className="text-[11px] font-semibold uppercase tracking-wide text-green-700">
                                      Addressed
                                    </div>
                                    <ul className="mt-0.5 list-disc pl-4">
                                      {critique.strengths.map((s) => (
                                        <li key={s}>{s}</li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                                {critique.openQuestions.length > 0 && (
                                  <div>
                                    <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                                      Open questions
                                    </div>
                                    <ul className="mt-0.5 list-disc space-y-1 pl-4">
                                      {critique.openQuestions.map((q) => (
                                        <li key={q}>{q}</li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                                <p className="text-[11px] italic text-slate-500">
                                  Questions only. The system does not tell you the answer.
                                </p>
                              </div>
                            ) : null
                          ) : (
                            rung.content
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </Card>

          {!assisted ? (
            <button
              disabled={!canCommit}
              onClick={commitIndependent}
              className="w-full rounded-lg bg-ink px-4 py-3 text-sm font-medium text-white hover:bg-ink-soft disabled:cursor-not-allowed disabled:bg-slate-300"
            >
              {canCommit
                ? 'Commit my independent judgement'
                : 'Choose a decision and write a rationale'}
            </button>
          ) : (
            <button
              onClick={submitFinal}
              className="w-full rounded-lg bg-ink px-4 py-3 text-sm font-medium text-white hover:bg-ink-soft"
            >
              Submit final review
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

/* ---------------------------- debrief view ---------------------------- */

function Debrief({
  scenario,
  independent,
  finalScore,
  debrief,
  flagged,
  confidence,
  decision,
  onRetry,
}: {
  scenario: Scenario;
  independent: AttemptScore | null;
  finalScore: AttemptScore;
  debrief: DebriefOutput | null;
  flagged: string[];
  confidence: number;
  decision: DecisionId | null;
  onRetry: () => void;
}) {
  const navigate = useNavigate();
  const archetype = useMemo(() => classifyArchetype(finalScore), [finalScore]);
  const gap = independent ? finalScore.scrutiny - independent.scrutiny : 0;

  const decoysTaken = scenario.elements.filter(
    (e) => e.decoy && flagged.includes(e.id),
  );

  return (
    <div className="animate-rise space-y-5">
      <SectionTitle
        eyebrow="Debrief"
        title={debrief?.headline ?? 'Review complete'}
        sub={debrief?.reasoningNote}
      />

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Stat
          label="Scrutiny (materiality-weighted)"
          value={`${Math.round(finalScore.scrutiny * 100)}%`}
          sub="Precision and recall combined"
          tone={finalScore.scrutiny > 0.65 ? 'good' : finalScore.scrutiny < 0.4 ? 'bad' : 'neutral'}
        />
        <Stat
          label="Material defects caught"
          value={`${Math.round(finalScore.materialCatchRate * 100)}%`}
          sub="Critical and major only"
          tone={finalScore.materialCatchRate > 0.65 ? 'good' : 'bad'}
        />
        <Stat
          label="Over-correction"
          value={`${Math.round(finalScore.overCorrection * 100)}%`}
          sub="Correct statements you challenged"
          tone={finalScore.overCorrection > 0.4 ? 'bad' : 'good'}
        />
        <Stat
          label="Calibration"
          value={`${finalScore.calibrationError > 0 ? '+' : ''}${Math.round(finalScore.calibrationError)}`}
          sub={
            finalScore.calibrationError > 15
              ? 'Overconfident'
              : finalScore.calibrationError < -15
                ? 'Underconfident'
                : 'Well calibrated'
          }
          tone={Math.abs(finalScore.calibrationError) > 15 ? 'bad' : 'good'}
        />
      </div>

      <Card className="p-5">
        <div className="flex items-start gap-3">
          <Target className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
          <div>
            <h3 className="text-[15px] font-semibold">{archetype.label}</h3>
            <p className="mt-1 text-[13.5px] leading-relaxed text-slate-600">
              {archetype.explanation}
            </p>
            <p className="mt-2 text-[11.5px] leading-relaxed text-slate-500">
              Pattern names follow the three profiles found in the KPMG / UT Austin field
              study of 523 early-career professionals (HBR, July 2026). They describe this
              attempt, not you.
            </p>
          </div>
        </div>
      </Card>

      {independent && scenario.maxAssistLevel > 0 && (
        <Card className="p-5">
          <h3 className="text-[15px] font-semibold">Unassisted vs assisted</h3>
          <p className="mt-1 text-[13px] text-slate-600">
            The difference between these two numbers is the part of your performance that
            belongs to the scaffolding rather than to you. Closing it is the point of the
            programme.
          </p>
          <div className="mt-3 grid gap-4 sm:grid-cols-3">
            <Meter
              label="Before assistance"
              value={independent.scrutiny}
              hint="Your own judgement, unaided"
            />
            <Meter label="After assistance" value={finalScore.scrutiny} tone="brand" />
            <div>
              <div className="text-[13px] font-medium text-slate-700">Scaffolding gap</div>
              <div
                className={`mt-1 text-2xl font-semibold tabular-nums ${
                  gap > 0.25 ? 'text-red-700' : 'text-green-700'
                }`}
              >
                {gap > 0 ? '+' : ''}
                {Math.round(gap * 100)} pts
              </div>
              <p className="mt-1 text-[11px] leading-snug text-slate-500">
                A large gap is the operationalisation of “synthetic readiness” — competent
                only while the support is there.
              </p>
            </div>
          </div>
        </Card>
      )}

      {/* element-by-element reveal */}
      <Card className="overflow-hidden">
        <div className="border-b border-line bg-slate-50 px-4 py-2.5 text-[13px] font-semibold">
          What mattered, and what you did with it
        </div>
        <div className="divide-y divide-slate-100">
          {scenario.elements.map((el) => {
            const wasFlagged = flagged.includes(el.id);
            const isDefect = Boolean(el.defect);
            const isDecoy = Boolean(el.decoy);

            let tone = 'border-l-slate-200';
            let icon = null;
            let verdict = '';
            if (isDefect && wasFlagged) {
              tone = 'border-l-green-500 bg-green-50/40';
              icon = <Check className="h-3.5 w-3.5 text-green-700" />;
              verdict = 'Caught';
            } else if (isDefect && !wasFlagged) {
              tone = 'border-l-red-500 bg-red-50/40';
              icon = <X className="h-3.5 w-3.5 text-red-700" />;
              verdict = 'Missed';
            } else if (isDecoy && wasFlagged) {
              tone = 'border-l-orange-500 bg-orange-50/40';
              icon = <ShieldAlert className="h-3.5 w-3.5 text-orange-700" />;
              verdict = 'Over-corrected — the AI was right';
            } else if (isDecoy) {
              tone = 'border-l-green-500 bg-green-50/30';
              icon = <Check className="h-3.5 w-3.5 text-green-700" />;
              verdict = 'Correctly left alone';
            } else if (wasFlagged) {
              tone = 'border-l-slate-400 bg-slate-50';
              verdict = 'Flagged, but nothing wrong here';
            }

            return (
              <div key={el.id} className={`border-l-4 px-4 py-3 ${tone}`}>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                    {el.section}
                  </span>
                  {el.defect && <MaterialityBadge m={el.defect.materiality} />}
                  {el.decoy && (
                    <span className="rounded border border-orange-200 bg-orange-50 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-orange-700">
                      Correct — decoy
                    </span>
                  )}
                  {verdict && (
                    <span className="ml-auto inline-flex items-center gap-1 text-[11px] font-medium text-slate-600">
                      {icon}
                      {verdict}
                    </span>
                  )}
                </div>
                <p className="mt-1.5 text-[13px] leading-relaxed text-slate-800">{el.text}</p>
                {(el.defect || el.decoy) && (
                  <p className="mt-1.5 rounded bg-white/70 p-2 text-[12.5px] leading-relaxed text-slate-600">
                    {el.defect?.explanation ?? el.decoy?.explanation}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </Card>

      {decoysTaken.length > 0 && (
        <Note icon="warn">
          <strong>This is the pattern to watch.</strong> You challenged{' '}
          {decoysTaken.length} statement{decoysTaken.length > 1 ? 's' : ''} the AI had
          right. In the KPMG study, the group that performed <em>below</em> the AI-only
          baseline was not the group that trusted it too much — it was the group that
          questioned it in the wrong places. Restraint backed by evidence is part of the
          skill.
        </Note>
      )}

      <div className="grid items-start gap-4 lg:grid-cols-2">
        <Card className="p-5">
          <h3 className="text-[15px] font-semibold">Your decision</h3>
          <div className="mt-2 flex items-center gap-2">
            <span
              className={`rounded px-2 py-1 text-[12px] font-semibold ${
                finalScore.decisionCorrect
                  ? 'bg-green-50 text-green-700'
                  : 'bg-red-50 text-red-700'
              }`}
            >
              {scenario.decisionOptions.find((o) => o.id === decision)?.label ?? '—'}
            </span>
            <span className="text-[12px] text-slate-500">
              You were {confidence}% confident
            </span>
          </div>
          <p className="mt-3 text-[13px] leading-relaxed text-slate-600">
            {scenario.decisionRationale}
          </p>
        </Card>

        <Card className="p-5">
          <h3 className="text-[15px] font-semibold">How a senior analyst reads this</h3>
          <ol className="mt-2.5 space-y-2.5">
            {scenario.expertTrace.map((t, i) => (
              <li key={t.step} className="flex gap-2.5">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ink text-[10px] font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <div className="text-[13px] font-medium text-ink">{t.step}</div>
                  <p className="text-[12.5px] leading-relaxed text-slate-600">{t.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </Card>
      </div>

      {debrief && (
        <Card className="p-5">
          <h3 className="text-[13px] font-semibold uppercase tracking-wide text-brand">
            Recommended next practice
          </h3>
          <p className="mt-1.5 text-[14px] leading-relaxed text-slate-700">
            {debrief.nextPractice}
          </p>
        </Card>
      )}

      <div className="flex flex-wrap gap-3">
        <button
          onClick={onRetry}
          className="inline-flex items-center gap-2 rounded-lg border border-line bg-white px-4 py-2.5 text-sm font-medium hover:bg-slate-50"
        >
          <RotateCcw className="h-4 w-4" /> Retry this scenario
        </button>
        <button
          onClick={() => navigate('/practice')}
          className="inline-flex items-center gap-2 rounded-lg bg-ink px-4 py-2.5 text-sm font-medium text-white hover:bg-ink-soft"
        >
          Next scenario <ArrowRight className="h-4 w-4" />
        </button>
        <button
          onClick={() => navigate('/growth')}
          className="inline-flex items-center gap-2 rounded-lg border border-line bg-white px-4 py-2.5 text-sm font-medium hover:bg-slate-50"
        >
          See my growth profile
        </button>
      </div>
    </div>
  );
}
