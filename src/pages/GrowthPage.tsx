import { Link } from 'react-router-dom';
import { ArrowRight, Info, Trash2 } from 'lucide-react';
import { useStore } from '../lib/store';
import { SCENARIOS } from '../lib/data/scenarios';
import { Card, Meter, Note, SectionTitle, Stat, SyntheticBadge } from '../components/ui';
import type { AttemptRecord } from '../lib/types';

const avg = (xs: number[]) => (xs.length ? xs.reduce((a, b) => a + b, 0) / xs.length : 0);

function Sparkline({ values }: { values: number[] }) {
  if (values.length < 2) return null;
  const w = 160;
  const h = 36;
  const max = Math.max(...values, 1);
  const pts = values
    .map((v, i) => {
      const x = (i / (values.length - 1)) * w;
      const y = h - (v / max) * h;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(' ');
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="mt-2 h-9 w-full" preserveAspectRatio="none">
      <polyline points={pts} fill="none" stroke="#1d4ed8" strokeWidth="2" />
    </svg>
  );
}

export default function GrowthPage() {
  const attempts = useStore((s) => s.attempts);
  const reset = useStore((s) => s.resetProgress);

  if (attempts.length === 0) {
    return (
      <div className="mx-auto max-w-2xl">
        <SectionTitle
          eyebrow="My growth"
          title="No evidence yet"
          sub="Your growth profile is built from what you actually do in scenarios — not from a self-assessment questionnaire."
        />
        <Card className="p-6">
          <p className="text-[14px] leading-relaxed text-slate-600">
            Complete a scenario and this page will show your scrutiny precision and recall,
            your over-correction rate, your confidence calibration, and — most importantly
            — the gap between what you can do with assistance and what you can do without
            it.
          </p>
          <Link
            to="/practice"
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-ink px-4 py-2.5 text-sm font-medium text-white hover:bg-ink-soft"
          >
            Start a scenario <ArrowRight className="h-4 w-4" />
          </Link>
        </Card>
      </div>
    );
  }

  const unassisted = attempts.filter((a) => a.score.unassisted);
  const assisted = attempts.filter((a) => !a.score.unassisted);

  const uAvg = avg(unassisted.map((a) => a.score.scrutiny));
  const aAvg = avg(assisted.map((a) => a.score.scrutiny));
  const gap = assisted.length && unassisted.length ? aAvg - uAvg : 0;

  const latest = attempts[attempts.length - 1];

  return (
    <div className="space-y-6 animate-rise">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <SectionTitle
          eyebrow="My growth"
          title="Evidence of capability, not a verdict on you"
          sub="Every figure here opens onto the specific decisions behind it. You see your own profile first and always."
        />
        <button
          onClick={reset}
          className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-white px-3 py-1.5 text-[12px] text-slate-600 hover:bg-slate-50"
        >
          <Trash2 className="h-3.5 w-3.5" /> Clear my practice data
        </button>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Stat label="Scenarios completed" value={String(attempts.length)} />
        <Stat
          label="Scrutiny — unassisted"
          value={unassisted.length ? `${Math.round(uAvg * 100)}%` : '—'}
          sub={`${unassisted.length} unaided attempt${unassisted.length === 1 ? '' : 's'}`}
          tone={uAvg > 0.6 ? 'good' : 'neutral'}
        />
        <Stat
          label="Scrutiny — assisted"
          value={assisted.length ? `${Math.round(aAvg * 100)}%` : '—'}
          sub={`${assisted.length} scaffolded attempt${assisted.length === 1 ? '' : 's'}`}
        />
        <Stat
          label="Scaffolding gap"
          value={gap ? `${gap > 0 ? '+' : ''}${Math.round(gap * 100)} pts` : '—'}
          sub="Performance that belongs to the support"
          tone={gap > 0.25 ? 'bad' : gap ? 'good' : 'neutral'}
        />
      </div>

      <Note>
        <strong>Why the gap is the headline number.</strong> Performance during learning and
        learning itself are dissociable — fluent assisted output is not evidence that you
        have acquired anything (Bjork &amp; Bjork). A large gap is what the literature calls{' '}
        <em>synthetic readiness</em>: competent while the scaffolding is there. This is a
        proposed construct, not a validated scale, and is presented as such.
      </Note>

      <div className="grid gap-5 lg:grid-cols-2">
        <Card className="p-5">
          <h3 className="text-[15px] font-semibold">Capability breakdown</h3>
          <p className="mt-1 text-[12.5px] text-slate-500">
            Averaged across all {attempts.length} attempt{attempts.length === 1 ? '' : 's'}.
          </p>
          <div className="mt-4 space-y-4">
            <Meter
              label="Scrutiny precision"
              value={avg(attempts.map((a) => a.score.precision))}
              hint="Of what you flagged, how much genuinely mattered"
            />
            <Meter
              label="Scrutiny recall"
              value={avg(attempts.map((a) => a.score.recall))}
              hint="Of what mattered, how much you caught"
            />
            <Meter
              label="Material defect catch rate"
              value={avg(attempts.map((a) => a.score.materialCatchRate))}
              hint="Critical and major defects only"
              tone="good"
            />
            <Meter
              label="Over-correction"
              value={avg(attempts.map((a) => a.score.overCorrection))}
              hint="Correct statements you challenged anyway — lower is better"
              tone="warn"
            />
            <Meter
              label="Escalation accuracy"
              value={avg(attempts.map((a) => (a.score.decisionCorrect ? 1 : 0)))}
              hint="Right call on approve / revise / escalate"
            />
          </div>
        </Card>

        <Card className="p-5">
          <h3 className="text-[15px] font-semibold">Confidence calibration</h3>
          <p className="mt-1 text-[12.5px] leading-relaxed text-slate-500">
            Self-reported confidence is an unreliable guide to AI-assisted performance — in
            a controlled trial, developers believed AI made them 20% faster while measuring
            19% slower. So confidence here is scored against outcomes, never taken at face
            value.
          </p>
          <div className="mt-4 space-y-2.5">
            {attempts.map((a, i) => {
              const over = a.score.calibrationError > 0;
              const mag = Math.min(100, Math.abs(a.score.calibrationError));
              return (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-28 shrink-0 truncate text-[11.5px] text-slate-500">
                    {SCENARIOS.find((s) => s.id === a.scenarioId)?.borrower.split(' ')[0] ??
                      a.scenarioId}
                  </span>
                  <div className="relative h-2 flex-1 rounded-full bg-slate-100">
                    <div className="absolute left-1/2 top-[-3px] h-3.5 w-px bg-slate-300" />
                    <div
                      className={`absolute top-0 h-2 rounded-full ${over ? 'bg-red-500' : 'bg-blue-500'}`}
                      style={{
                        width: `${mag / 2}%`,
                        left: over ? '50%' : `${50 - mag / 2}%`,
                      }}
                    />
                  </div>
                  <span className="w-24 shrink-0 text-right text-[11px] font-medium text-slate-600">
                    {over ? 'over' : 'under'} by {Math.round(Math.abs(a.score.calibrationError))}
                  </span>
                </div>
              );
            })}
          </div>
          <Sparkline values={attempts.map((a) => a.score.scrutiny * 100)} />
          <p className="text-[11px] text-slate-500">Scrutiny score across attempts, in order.</p>
        </Card>
      </div>

      <Card className="overflow-hidden">
        <div className="border-b border-line bg-slate-50 px-4 py-2.5 text-[13px] font-semibold">
          Attempt history — the evidence behind every number above
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] text-left text-[12.5px]">
            <thead className="bg-white text-[11px] uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-2 font-semibold">Scenario</th>
                <th className="px-4 py-2 font-semibold">Mode</th>
                <th className="px-4 py-2 font-semibold">Scrutiny</th>
                <th className="px-4 py-2 font-semibold">Material caught</th>
                <th className="px-4 py-2 font-semibold">Over-correction</th>
                <th className="px-4 py-2 font-semibold">Decision</th>
                <th className="px-4 py-2 font-semibold">Assistance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {attempts.map((a: AttemptRecord, i) => (
                <tr key={i} className="hover:bg-slate-50">
                  <td className="px-4 py-2.5 font-medium text-ink">
                    {SCENARIOS.find((s) => s.id === a.scenarioId)?.borrower ?? a.scenarioId}
                  </td>
                  <td className="px-4 py-2.5 text-slate-600 capitalize">{a.mode}</td>
                  <td className="px-4 py-2.5 tabular-nums">
                    {Math.round(a.score.scrutiny * 100)}%
                  </td>
                  <td className="px-4 py-2.5 tabular-nums">
                    {Math.round(a.score.materialCatchRate * 100)}%
                  </td>
                  <td className="px-4 py-2.5 tabular-nums">
                    {Math.round(a.score.overCorrection * 100)}%
                  </td>
                  <td className="px-4 py-2.5">
                    <span
                      className={
                        a.score.decisionCorrect ? 'text-green-700' : 'text-red-700'
                      }
                    >
                      {a.score.decisionCorrect ? 'Correct' : 'Incorrect'}
                    </span>
                  </td>
                  <td className="px-4 py-2.5 text-slate-600">
                    {a.maxLadderUsed === 0 ? (
                      <span className="font-medium text-green-700">Unassisted</span>
                    ) : (
                      `up to L${a.maxLadderUsed}`
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Card className="p-5">
        <div className="flex items-start gap-3">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
          <div>
            <h3 className="text-[14px] font-semibold">What happens to this data</h3>
            <p className="mt-1 text-[13px] leading-relaxed text-slate-600">
              Your individual scores are visible to you alone. Your manager sees{' '}
              <strong>cohort-level patterns only</strong> — never your name against a
              number, and never a ranking. This practice data is developmental and is
              excluded by policy from promotion, performance rating and termination
              decisions. In this prototype it is stored only in your own browser.
            </p>
            <Link to="/ethics" className="mt-2 inline-block text-[12.5px] font-medium text-brand hover:underline">
              Read the full data and ethics notice →
            </Link>
          </div>
        </div>
      </Card>

      {latest && <SyntheticBadge />}
    </div>
  );
}
