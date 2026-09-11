import { AlertTriangle, ShieldOff, Users } from 'lucide-react';
import {
  COHORT,
  DEFECT_PATTERNS,
  TRUST_PATTERNS,
  archetypeSplit,
  cohortAverage,
} from '../lib/data/cohort';
import { Card, MaterialityBadge, Note, SectionTitle, Stat, SyntheticBadge } from '../components/ui';

export default function ManagerPage() {
  const split = archetypeSplit();

  const coachingPriorities = [...DEFECT_PATTERNS]
    .filter((d) => d.materiality !== 'minor')
    .sort((a, b) => b.missRate - a.missRate)
    .slice(0, 3);

  return (
    <div className="space-y-6 animate-rise">
      <SectionTitle
        eyebrow="Manager view"
        title={COHORT.name}
        sub={`${COHORT.location} · ${COHORT.size} analysts. This view shows you where the cohort's judgement is failing — never who is failing.`}
      />

      <Card className="border-l-4 border-l-brand p-4">
        <div className="flex items-start gap-3">
          <ShieldOff className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand" />
          <div>
            <h3 className="text-[14px] font-semibold">There is no leaderboard here, by design</h3>
            <p className="mt-1 text-[13px] leading-relaxed text-slate-600">
              Kluger &amp; DeNisi's meta-analysis of 607 effect sizes found that more than a
              third of feedback interventions <em>reduce</em> performance — and the harm
              concentrates precisely where feedback directs attention at the person rather
              than the task. Ranking your analysts on a judgement score is the documented
              failure mode, not merely a privacy concern. So this view is built around
              defect classes and coaching actions.
            </p>
          </div>
        </div>
      </Card>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Stat
          label="Amplifier pattern"
          value={`${Math.round(split.amplifier * 100)}%`}
          sub="Well-aimed scrutiny"
          tone="good"
        />
        <Stat
          label="Delegator pattern"
          value={`${Math.round(split.delegator * 100)}%`}
          sub="Accepting output with little challenge"
          tone="bad"
        />
        <Stat
          label="Mis-targeted pattern"
          value={`${Math.round(split.apprentice * 100)}%`}
          sub="Challenging the wrong things"
          tone="bad"
        />
        <Stat
          label="Mean scaffolding gap"
          value={`${Math.round(
            (cohortAverage('assistedScore') - cohortAverage('unassistedScore')),
          )} pts`}
          sub="Assisted minus unassisted"
          tone="bad"
        />
      </div>

      <div className="grid gap-5 lg:grid-cols-[1.3fr_1fr]">
        <Card className="overflow-hidden">
          <div className="border-b border-line bg-slate-50 px-4 py-2.5">
            <h3 className="text-[13px] font-semibold">Most-missed defect classes</h3>
            <p className="text-[11.5px] text-slate-500">
              Ranked by cohort miss rate. This is your coaching agenda.
            </p>
          </div>
          <div className="divide-y divide-slate-100">
            {[...DEFECT_PATTERNS]
              .sort((a, b) => b.missRate - a.missRate)
              .map((d) => (
                <div key={d.label} className="px-4 py-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <MaterialityBadge m={d.materiality} />
                    <span className="text-[13px] font-medium text-ink">{d.label}</span>
                    <span className="ml-auto text-[13px] font-semibold tabular-nums text-red-700">
                      {Math.round(d.missRate * 100)}% missed
                    </span>
                  </div>
                  <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-red-500"
                      style={{ width: `${d.missRate * 100}%` }}
                    />
                  </div>
                  <p className="mt-1.5 text-[12px] leading-relaxed text-slate-600">{d.note}</p>
                </div>
              ))}
          </div>
        </Card>

        <div className="space-y-5">
          <Card className="p-5">
            <h3 className="text-[13px] font-semibold">Where the cohort over-trusts vs over-challenges</h3>
            <p className="mt-1 text-[11.5px] leading-relaxed text-slate-500">
              Both columns are errors. The right-hand column is the one nobody currently
              measures.
            </p>
            <div className="mt-3 space-y-3">
              {TRUST_PATTERNS.map((t) => (
                <div key={t.area}>
                  <div className="text-[12.5px] font-medium text-slate-700">{t.area}</div>
                  <div className="mt-1 flex gap-1">
                    <div
                      className="h-4 rounded-l bg-amber-400/80"
                      style={{ width: `${t.overTrust * 50}%` }}
                      title={`Over-trusts ${Math.round(t.overTrust * 100)}%`}
                    />
                    <div
                      className="h-4 rounded-r bg-orange-600/80"
                      style={{ width: `${t.overChallenge * 50}%` }}
                      title={`Over-challenges ${Math.round(t.overChallenge * 100)}%`}
                    />
                  </div>
                  <div className="mt-0.5 flex justify-between text-[10.5px] text-slate-500">
                    <span>over-trusts {Math.round(t.overTrust * 100)}%</span>
                    <span>over-challenges {Math.round(t.overChallenge * 100)}%</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-5">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-brand" />
              <h3 className="text-[13px] font-semibold">Recommended coaching focus</h3>
            </div>
            <ol className="mt-3 space-y-2.5">
              {coachingPriorities.map((d, i) => (
                <li key={d.label} className="flex gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ink text-[10px] font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <div className="text-[12.5px] font-medium text-ink">{d.label}</div>
                    <p className="text-[11.5px] leading-relaxed text-slate-600">
                      Run a live walkthrough on one real file. {Math.round(d.missRate * 100)}%
                      of the cohort missed this class.
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </Card>
        </div>
      </div>

      <Card className="overflow-hidden">
        <div className="flex items-center gap-2 border-b border-line bg-slate-50 px-4 py-2.5">
          <Users className="h-4 w-4 text-slate-500" />
          <h3 className="text-[13px] font-semibold">Cohort distribution</h3>
          <span className="ml-auto text-[11px] text-slate-500">
            Pseudonymous. Sorted by handle, never by score.
          </span>
        </div>
        <div className="grid grid-cols-4 gap-1.5 p-4 sm:grid-cols-8 lg:grid-cols-12">
          {[...COHORT.members]
            .sort((a, b) => a.handle.localeCompare(b.handle))
            .map((m) => {
              const tone =
                m.archetype === 'amplifier'
                  ? 'bg-green-100 text-green-800 border-green-200'
                  : m.archetype === 'delegator'
                    ? 'bg-amber-100 text-amber-800 border-amber-200'
                    : 'bg-orange-100 text-orange-800 border-orange-200';
              return (
                <div
                  key={m.handle}
                  className={`rounded border px-1.5 py-2 text-center text-[10.5px] font-medium ${tone}`}
                  title={`${m.handle} — ${m.attempts} attempts`}
                >
                  {m.handle}
                </div>
              );
            })}
        </div>
        <div className="flex flex-wrap gap-4 border-t border-line px-4 py-2.5 text-[11px] text-slate-600">
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-sm bg-green-200" /> Amplifier pattern
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-sm bg-amber-200" /> Delegator pattern
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-sm bg-orange-200" /> Mis-targeted pattern
          </span>
        </div>
      </Card>

      <Note icon="warn">
        <strong>What this view deliberately does not give you.</strong> No individual
        scores, no ranking, no comparison of one analyst against another, and no export of
        person-level results into performance management. Patterns describe attempts in
        practice scenarios — not people, and not job performance.
      </Note>

      <SyntheticBadge />
    </div>
  );
}
