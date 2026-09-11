import { Check, Eye, Lock, ShieldCheck, X } from 'lucide-react';
import { Card, Note, SectionTitle } from '../components/ui';

const NEVER = [
  'Covertly monitor employees or observe work outside SkillForge scenarios',
  'Ingest private communications, email, chat or documents',
  'Infer mental health, wellbeing or personality',
  'Predict attrition or flight risk',
  'Rank employees against one another',
  'Drive promotion, performance-rating or termination decisions',
  'Present AI-generated capability scores as objective truth',
  'Penalise an employee for using AI assistance',
  'Push an employee into unsafe or humiliating struggle',
];

const ALWAYS = [
  'The employee sees their own profile first, and always',
  'Managers see cohort-level patterns only — never a named individual against a score',
  'Every score opens onto the specific decisions that produced it',
  'Assistance use is recorded but never penalised',
  'Practice data is developmental and excluded by policy from performance management',
  'A human makes every consequential decision about a person',
];

export default function EthicsPage() {
  return (
    <div className="space-y-6 animate-rise">
      <SectionTitle
        eyebrow="Data & ethics"
        title="A developmental system, not a disciplinary one"
        sub="This page is written for the employee, not for a compliance file. If any of it is not true of the product, the product is wrong."
      />

      <Card className="border-l-4 border-l-brand p-5">
        <div className="flex items-start gap-3">
          <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
          <div>
            <h3 className="text-[15px] font-semibold">
              The no-ranking rule is an evidence-based design decision
            </h3>
            <p className="mt-1.5 text-[13.5px] leading-relaxed text-slate-600">
              Kluger &amp; DeNisi's meta-analysis (607 effect sizes, 23,663 observations)
              found feedback improves performance on average — but that{' '}
              <strong>more than a third of feedback interventions make performance worse</strong>,
              and the damage concentrates where feedback directs attention at the self
              rather than the task. A per-employee judgement score shown to a manager is
              that failure mode exactly. We do not ship it — not primarily because it is
              intrusive, but because the evidence says it would stop the product working.
            </p>
          </div>
        </div>
      </Card>

      <div className="grid gap-5 lg:grid-cols-2">
        <Card className="p-5">
          <div className="mb-3 flex items-center gap-2">
            <X className="h-4 w-4 text-red-600" />
            <h3 className="text-[14px] font-semibold">What this system will never do</h3>
          </div>
          <ul className="space-y-2">
            {NEVER.map((n) => (
              <li key={n} className="flex gap-2.5 text-[13px] leading-relaxed text-slate-700">
                <X className="mt-0.5 h-3.5 w-3.5 shrink-0 text-red-500" />
                {n}
              </li>
            ))}
          </ul>
        </Card>

        <Card className="p-5">
          <div className="mb-3 flex items-center gap-2">
            <Check className="h-4 w-4 text-green-600" />
            <h3 className="text-[14px] font-semibold">What it always does</h3>
          </div>
          <ul className="space-y-2">
            {ALWAYS.map((n) => (
              <li key={n} className="flex gap-2.5 text-[13px] leading-relaxed text-slate-700">
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-green-600" />
                {n}
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <Card className="p-5">
        <div className="mb-3 flex items-center gap-2">
          <Eye className="h-4 w-4 text-brand" />
          <h3 className="text-[14px] font-semibold">Exactly what is measured, and who can see it</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-[12.5px]">
            <thead className="text-[11px] uppercase tracking-wide text-slate-500">
              <tr className="border-b border-line">
                <th className="py-2 pr-4 font-semibold">Data</th>
                <th className="py-2 pr-4 font-semibold">Why it is collected</th>
                <th className="py-2 pr-4 font-semibold">You</th>
                <th className="py-2 pr-4 font-semibold">Your manager</th>
                <th className="py-2 font-semibold">HR</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                ['Elements you flagged in a scenario', 'To score scrutiny precision and recall', 'Full', 'Aggregated only', 'Aggregated only'],
                ['Your written rationale', 'To assess reasoning, not just the answer', 'Full', 'No access', 'No access'],
                ['Decision and confidence rating', 'To measure calibration against outcomes', 'Full', 'Aggregated only', 'Aggregated only'],
                ['Assistance rungs opened', 'To measure the scaffolding gap', 'Full', 'Aggregated only', 'Aggregated only'],
                ['Anything outside SkillForge scenarios', 'Not collected', '—', '—', '—'],
              ].map((row) => (
                <tr key={row[0]}>
                  <td className="py-2.5 pr-4 font-medium text-ink">{row[0]}</td>
                  <td className="py-2.5 pr-4 text-slate-600">{row[1]}</td>
                  <td className="py-2.5 pr-4 text-green-700">{row[2]}</td>
                  <td className="py-2.5 pr-4 text-slate-600">{row[3]}</td>
                  <td className="py-2.5 text-slate-600">{row[4]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Card className="p-5">
        <div className="mb-2 flex items-center gap-2">
          <Lock className="h-4 w-4 text-brand" />
          <h3 className="text-[14px] font-semibold">Honest limitations</h3>
        </div>
        <ul className="space-y-2 text-[13px] leading-relaxed text-slate-700">
          <li className="flex gap-2.5">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
            <span>
              <strong>These scores are not validated instruments.</strong> "Scrutiny
              allocation" and the scaffolding gap are operationalisations we propose. They
              have not been psychometrically validated, and we do not claim they measure
              judgement in general.
            </span>
          </li>
          <li className="flex gap-2.5">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
            <span>
              <strong>Performance in a scenario is not performance on the job.</strong>{' '}
              Simulation transfers to real performance under specific design conditions
              (Cook et al., 92 studies) — but transfer for this capability, in this
              function, is a hypothesis we have not yet tested.
            </span>
          </li>
          <li className="flex gap-2.5">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
            <span>
              <strong>Model assessment of free-text reasoning is noisy.</strong> That is why
              materiality is authored and rule-scored, and why the model never decides what
              matters — only how to question what you wrote.
            </span>
          </li>
          <li className="flex gap-2.5">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
            <span>
              <strong>The forcing step is deliberately unpopular.</strong> In Buçinca et
              al.'s experiment the designs that most reduced overreliance were rated{' '}
              <em>least</em> favourably by users. We expect lower satisfaction than a
              frictionless tutor, and we accept that trade.
            </span>
          </li>
        </ul>
      </Card>

      <Note>
        All data in this prototype is <strong>synthetic</strong> and stored only in your own
        browser. There is no server, no account and no transmission of practice data
        anywhere. Clearing your browser storage erases it completely.
      </Note>
    </div>
  );
}
