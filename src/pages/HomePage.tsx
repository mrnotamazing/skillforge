import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Eye,
  GitCompareArrows,
  Lock,
  ShieldCheck,
  Target,
  TrendingDown,
} from 'lucide-react';
import { Card, Note, SectionTitle } from '../components/ui';

const ARCHETYPES = [
  {
    pct: '50.1%',
    name: 'AI Amplifiers',
    desc: 'Beat the AI-only baseline. They framed the problem, anchored in domain frameworks and refined across rounds.',
    tone: 'text-green-700',
  },
  {
    pct: '25.8%',
    name: 'AI Delegators',
    desc: 'Matched the AI working alone. They accepted output with minimal scrutiny and added nothing.',
    tone: 'text-amber-700',
  },
  {
    pct: '24.1%',
    name: '“AI Apprentices”',
    desc: 'Performed below the AI on its own. They scrutinised actively — but aimed at irrelevant issues.',
    tone: 'text-red-700',
  },
];

const BEFORE_AFTER = [
  {
    label: 'Before AI',
    steps: [
      'Junior receives raw financials',
      'Spreads them and drafts the memo',
      'VP marks up the draft',
      'Junior learns from the correction',
      'Gradually owns more complexity',
    ],
    note: 'Learning was a by-product of production, and the markup made expert reasoning visible.',
    tone: 'border-slate-200',
  },
  {
    label: 'After AI',
    steps: [
      'AI spreads financials and drafts the memo in ~90 seconds',
      'Junior reviews it',
      'AVP sees a polished document',
      'Feedback lands on the document',
      'The junior’s review is never evaluated',
    ],
    note: 'Production reps are gone, expert reasoning is invisible, and the junior owns the signature without the mastery.',
    tone: 'border-red-200 bg-red-50/40',
  },
  {
    label: 'With SkillForge',
    steps: [
      'AI still drafts the memo — obsolete work is not restored',
      'Junior enters a designed judgement task',
      'Independent attempt, no assistance',
      'Graded scaffolds, then withdrawn',
      'Feedback on the review itself',
    ],
    note: 'The developmental function of the old job, rebuilt around the new one.',
    tone: 'border-brand/30 bg-brand-soft',
  },
];

export default function HomePage() {
  return (
    <div className="space-y-10 animate-rise">
      {/* hero */}
      <section>
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-2.5 py-1 text-[11px] font-medium text-slate-600">
            <Target className="h-3 w-3 text-brand" />
            Organisational Behaviour / HR project prototype
          </span>
          <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            AI didn’t take the junior analyst’s job.
            <br />
            <span className="text-brand">It took her practice — and promoted her straight to reviewer.</span>
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
            SkillForge is an apprenticeship layer that teaches early-career analysts{' '}
            <strong className="text-ink">where to aim their scrutiny</strong> when an AI has
            already done the work — and measures whether they can still do the job when the
            AI is taken away.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/practice"
              className="inline-flex items-center gap-2 rounded-lg bg-ink px-4 py-2.5 text-sm font-medium text-white hover:bg-ink-soft"
            >
              Start the capability journey <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/manager"
              className="inline-flex items-center gap-2 rounded-lg border border-line bg-white px-4 py-2.5 text-sm font-medium hover:bg-slate-50"
            >
              See the manager view
            </Link>
          </div>
        </div>
      </section>

      {/* evidence */}
      <section>
        <SectionTitle
          eyebrow="The evidence"
          title="Half of early-career professionals add nothing — or worse than nothing — on top of an AI"
          sub="A field study of 523 early-career professionals at KPMG, run with the McCombs School of Business at UT Austin, measured each person against an AI-only baseline (HBR, July 2026)."
        />
        <div className="grid gap-4 sm:grid-cols-3">
          {ARCHETYPES.map((a) => (
            <Card key={a.name} className="p-5">
              <div className={`text-3xl font-semibold tabular-nums ${a.tone}`}>{a.pct}</div>
              <div className="mt-1 text-[14px] font-semibold">{a.name}</div>
              <p className="mt-1.5 text-[13px] leading-relaxed text-slate-600">{a.desc}</p>
            </Card>
          ))}
        </div>
        <div className="mt-4">
          <Note icon="warn">
            <strong>The finding that kills “just train them more”.</strong> The group that
            performed <em>below</em> the AI scored equal to or higher than the top group on
            every foundational skill measured — domain knowledge, critical thinking and AI
            literacy. They were not short of knowledge. They scrutinised the wrong things.
          </Note>
        </div>
      </section>

      {/* the mechanism */}
      <section>
        <SectionTitle
          eyebrow="The mechanism"
          title="What changed in the work"
          sub="The entry-level job did not disappear. Its task mix moved from producing to reviewing — while the feedback loop stayed pointed at the document."
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {BEFORE_AFTER.map((c) => (
            <Card key={c.label} className={`p-5 ${c.tone}`}>
              <div className="text-[13px] font-semibold uppercase tracking-wide text-slate-700">
                {c.label}
              </div>
              <ol className="mt-3 space-y-2">
                {c.steps.map((s, i) => (
                  <li key={s} className="flex gap-2.5 text-[13px] leading-relaxed text-slate-700">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                    <span>
                      {i === c.steps.length - 1 ? <strong>{s}</strong> : s}
                    </span>
                  </li>
                ))}
              </ol>
              <p className="mt-3 border-t border-slate-200/70 pt-3 text-[12px] italic leading-relaxed text-slate-600">
                {c.note}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* the construct */}
      <section>
        <SectionTitle
          eyebrow="The capability"
          title="Scrutiny allocation"
          sub="Not scepticism, not domain knowledge, not prompting skill. An allocation decision made under time pressure — and the one variable that explains all three archetypes."
        />
        <Card className="p-6">
          <blockquote className="border-l-3 border-brand pl-4 text-[15px] leading-relaxed text-ink">
            The ability to direct finite verification effort toward the elements of an
            AI-generated work product where{' '}
            <strong>probability of error × consequence of error</strong> is highest.
          </blockquote>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {[
              {
                icon: TrendingDown,
                t: 'Delegator',
                d: 'Allocates almost no scrutiny. Automation bias. Matches the AI.',
              },
              {
                icon: Eye,
                t: 'Mis-targeted',
                d: 'Allocates plenty, aimed badly. Degrades work that was already right.',
              },
              {
                icon: Target,
                t: 'Amplifier',
                d: 'Allocates moderately, aimed well. Beats the AI.',
              },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="rounded-lg border border-line p-4">
                <Icon className="h-4 w-4 text-brand" />
                <div className="mt-2 text-[13px] font-semibold">{t}</div>
                <p className="mt-1 text-[12.5px] leading-relaxed text-slate-600">{d}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[13px] leading-relaxed text-slate-600">
            It is measurable without self-report: present a work product with defects of
            known materiality, observe which ones get flagged, and score precision and
            recall <strong>weighted by materiality</strong>.
          </p>
        </Card>
      </section>

      {/* how it works */}
      <section>
        <SectionTitle eyebrow="How it works" title="The loop" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Lock,
              t: '1 · Commit first',
              d: 'Assistance is locked until you commit a decision and a written rationale. A cognitive forcing function — the one intervention shown to reduce overreliance.',
            },
            {
              icon: GitCompareArrows,
              t: '2 · Scaffold, then fade',
              d: 'Five rungs from a hint to a worked example. Every rung you open is recorded. Then the ladder is taken away.',
            },
            {
              icon: Target,
              t: '3 · Score the review',
              d: 'Materiality-weighted precision and recall, over-correction, calibration and escalation — feedback on your review, not on the document.',
            },
            {
              icon: ShieldCheck,
              t: '4 · Prove it unaided',
              d: 'A transfer test in an unfamiliar sector with no assistance. The gap between assisted and unassisted is the number that matters.',
            },
          ].map(({ icon: Icon, t, d }) => (
            <Card key={t} className="p-5">
              <Icon className="h-4.5 w-4.5 text-brand" />
              <div className="mt-2.5 text-[13px] font-semibold">{t}</div>
              <p className="mt-1.5 text-[12.5px] leading-relaxed text-slate-600">{d}</p>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <Card className="flex flex-col items-start justify-between gap-4 p-6 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-[15px] font-semibold">
              The wow moment is scenario three
            </h3>
            <p className="mt-1 max-w-2xl text-[13px] leading-relaxed text-slate-600">
              New sector, no hints, no evidence prompts, no co-pilot — and an AI draft that
              cites a covenant waiver which does not exist. Fluent, formatted, precisely
              dated, and entirely fabricated.
            </p>
          </div>
          <Link
            to="/practice/northbridge-transfer"
            className="shrink-0 inline-flex items-center gap-2 rounded-lg bg-ink px-4 py-2.5 text-sm font-medium text-white hover:bg-ink-soft"
          >
            Jump to the transfer test <ArrowRight className="h-4 w-4" />
          </Link>
        </Card>
      </section>
    </div>
  );
}
