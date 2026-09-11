import { ArrowRight, Building2, TrendingUp } from 'lucide-react';
import { ROLE_TASKS, STATUS_LABEL, type TaskStatus } from '../lib/data/roleEvolution';
import { DEFECT_PATTERNS, cohortAverage } from '../lib/data/cohort';
import { Card, Note, SectionTitle, Stat, SyntheticBadge } from '../components/ui';

const STATUS_STYLE: Record<TaskStatus, string> = {
  automated: 'bg-red-50 text-red-700 border-red-200',
  accelerated: 'bg-orange-50 text-orange-700 border-orange-200',
  'human-judgement': 'bg-blue-50 text-blue-700 border-blue-200',
  emerging: 'bg-green-50 text-green-700 border-green-200',
};

export default function HRPage() {
  const repsLost = ROLE_TASKS.filter((t) => t.repsLost).length;
  const automated = ROLE_TASKS.filter(
    (t) => t.status === 'automated' || t.status === 'accelerated',
  ).length;
  const emerging = ROLE_TASKS.filter((t) => t.status === 'emerging').length;

  return (
    <div className="space-y-6 animate-rise">
      <SectionTitle
        eyebrow="HR & workforce view"
        title="Role evolution — Credit Risk Analyst I"
        sub="The column no HR system currently holds is the fourth one: which developmental repetitions disappeared when the task was automated."
      />

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Stat label="Tasks in role model" value={String(ROLE_TASKS.length)} />
        <Stat
          label="Automated or accelerated"
          value={String(automated)}
          sub="Of which 3 were the primary learning loop"
          tone="bad"
        />
        <Stat
          label="Developmental reps lost"
          value={String(repsLost)}
          sub="Learning that used to happen for free"
          tone="bad"
        />
        <Stat
          label="Newly required capabilities"
          value={String(emerging)}
          sub="Did not exist in the role two years ago"
          tone="good"
        />
      </div>

      <Note icon="warn">
        <strong>The structural finding.</strong> Every task that was automated was also a
        task through which the analyst learned something. Automation did not remove work
        evenly — it removed the <em>production</em> work, which is exactly the work that
        carried the apprenticeship. What remains is judgement, which was previously acquired
        as a by-product of the work that is now gone.
      </Note>

      <Card className="overflow-hidden">
        <div className="border-b border-line bg-slate-50 px-4 py-2.5 text-[13px] font-semibold">
          Task-by-task: before AI · now · what learning disappeared · what the role now needs
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] text-left text-[12.5px]">
            <thead className="bg-white text-[11px] uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-2 font-semibold">Task</th>
                <th className="px-4 py-2 font-semibold">Before AI</th>
                <th className="px-4 py-2 font-semibold">Now</th>
                <th className="px-4 py-2 font-semibold">Developmental reps lost</th>
                <th className="px-4 py-2 font-semibold">Capability now required</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {ROLE_TASKS.map((t) => (
                <tr key={t.task} className="align-top hover:bg-slate-50">
                  <td className="px-4 py-3">
                    <div className="font-medium text-ink">{t.task}</div>
                    <span
                      className={`mt-1 inline-block rounded border px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${STATUS_STYLE[t.status]}`}
                    >
                      {STATUS_LABEL[t.status]}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-slate-600">{t.before}</td>
                  <td className="px-4 py-3 text-slate-600">{t.now}</td>
                  <td className="px-4 py-3">
                    {t.repsLost ? (
                      <span className="text-red-700">{t.repsLost}</span>
                    ) : (
                      <span className="text-slate-400">—</span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    {t.nowRequires ? (
                      <span className="text-slate-700">{t.nowRequires}</span>
                    ) : (
                      <span className="text-slate-400">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <div className="grid gap-5 lg:grid-cols-2">
        <Card className="p-5">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-brand" />
            <h3 className="text-[14px] font-semibold">Where existing training no longer matches the work</h3>
          </div>
          <div className="mt-3 space-y-3">
            {[
              {
                t: 'Credit fundamentals curriculum',
                s: 'Still valid — but insufficient',
                d: 'Teaches how to build the analysis. The analyst no longer builds it. The KPMG study found foundational skills did not predict who adds value with AI.',
                tone: 'text-amber-700',
              },
              {
                t: 'AI literacy / prompting workshop',
                s: 'Falsified as a solution',
                d: 'AI literacy did not separate the group that beat the AI from the group that fell below it. This is the clearest evidence that the standard response does not address the gap.',
                tone: 'text-red-700',
              },
              {
                t: 'Shadowing and on-desk mentoring',
                s: 'Right mechanism, wrong capacity',
                d: 'Only 53% of entry-level workers strongly agree their manager supports capability building (WEF/PwC, n=9,394). The mechanism works; the bandwidth does not exist.',
                tone: 'text-amber-700',
              },
              {
                t: 'Structured judgement practice',
                s: 'Missing entirely',
                d: 'No current programme gives an analyst repeated, graded practice at reviewing AI output with feedback on the review itself.',
                tone: 'text-red-700',
              },
            ].map((x) => (
              <div key={x.t} className="rounded-lg border border-line p-3">
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="text-[13px] font-medium text-ink">{x.t}</span>
                  <span className={`text-[11px] font-semibold ${x.tone}`}>{x.s}</span>
                </div>
                <p className="mt-1 text-[12px] leading-relaxed text-slate-600">{x.d}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-5">
          <div className="flex items-center gap-2">
            <Building2 className="h-4 w-4 text-brand" />
            <h3 className="text-[14px] font-semibold">Recommended journey redesign</h3>
          </div>
          <ol className="mt-3 space-y-3">
            {[
              {
                t: 'Months 0–3 · Provenance discipline',
                d: 'Practice on stale-data and omission classes. Target: a source for every specific claim.',
              },
              {
                t: 'Months 3–6 · Recomputation discipline',
                d: `Practice on derived-ratio defects — currently the cohort's most-missed critical class at ${Math.round(DEFECT_PATTERNS[0].missRate * 100)}%.`,
              },
              {
                t: 'Months 6–9 · Restraint and premise checking',
                d: 'Exception Lab: wrong-template cases and cases where the AI is right. Targets the mis-targeted-scrutiny pattern.',
              },
              {
                t: 'Months 9–12 · Unassisted certification',
                d: 'Transfer tests in unfamiliar sectors with assistance withdrawn. Sign-off authority follows demonstrated unassisted capability, not tenure.',
              },
            ].map((s) => (
              <li key={s.t} className="rounded-lg border border-line p-3">
                <div className="text-[13px] font-medium text-ink">{s.t}</div>
                <p className="mt-0.5 text-[12px] leading-relaxed text-slate-600">{s.d}</p>
              </li>
            ))}
          </ol>
          <div className="mt-4 rounded-lg bg-brand-soft p-3">
            <div className="flex items-center gap-2 text-[12.5px] font-medium text-brand">
              <ArrowRight className="h-3.5 w-3.5" />
              Proposed gate for independent sign-off authority
            </div>
            <p className="mt-1 text-[12px] leading-relaxed text-slate-700">
              Scaffolding gap below 10 points across two consecutive transfer tests. The
              cohort mean today is{' '}
              {Math.round(cohortAverage('assistedScore') - cohortAverage('unassistedScore'))}{' '}
              points.
            </p>
          </div>
        </Card>
      </div>

      <Note>
        <strong>How HR should read these numbers.</strong> They describe the{' '}
        <em>role</em> and the <em>cohort</em>, not individuals. The intended use is role
        redesign, curriculum redesign and capacity planning for coaching — not assessment
        of any named employee.
      </Note>

      <SyntheticBadge />
    </div>
  );
}
