# SkillForge

**The Judgement Layer for AI-Enabled Work**

An apprenticeship layer that teaches early-career analysts *where to aim their scrutiny* when an AI has already done the work — and measures whether they can still do the job when the AI is taken away.

Built as an Organisational Behaviour / HR project. Working prototype, not a mockup.

---

## The problem

Entry-level work did not disappear. It changed shape. A junior credit analyst used to spread the financials and draft the memo, and her VP's markup taught her what mattered. Now the AI drafts it in ninety seconds and she reviews it — promoted to reviewer on day one without ever having been a producer.

In a field study of **523 early-career professionals** at KPMG with the McCombs School of Business (*HBR*, July 2026), participants were measured against an AI-only baseline:

| | Share | Result |
|---|---|---|
| AI Amplifiers | 50.1% | Beat the AI |
| AI Delegators | 25.8% | Matched the AI — added nothing |
| "AI Apprentices" | **24.1%** | **Performed below the AI working alone** |

The finding that matters most: **the below-baseline group scored equal to or higher than the top group on every foundational skill measured** — domain knowledge, critical thinking, AI literacy. They were not short of knowledge. They critiqued the AI and aimed at the wrong things.

So "train them more" is not the answer. The missing capability is what we call **scrutiny allocation**: directing finite verification effort toward the elements of an AI-generated work product where *probability of error × consequence of error* is highest. Nothing in the workflow teaches it, because feedback comes back on the **document** and never on the **review**.

## What SkillForge does

1. **Forces an independent judgement first.** Assistance stays locked until the analyst commits a decision and a written rationale — a cognitive forcing function, the one intervention experimentally shown to reduce overreliance on AI (Buçinca et al., CSCW 2021).
2. **Releases scaffolding in graded rungs** (L1 hint → L5 worked example), records every rung used, and never penalises using them.
3. **Scores the review, not the document** — materiality-weighted precision and recall, over-correction, confidence calibration, escalation accuracy.
4. **Trains restraint.** Scenarios contain statements that look wrong and are right. Flagging them is scored as over-correction — the documented below-baseline failure mode.
5. **Withdraws assistance entirely** in a transfer test in an unfamiliar sector. The **assisted-minus-unassisted gap** is the headline metric, because fluent assisted output is not evidence of learning (Bjork & Bjork).

## Running it

```bash
npm install
npm run dev        # http://localhost:5173
```

```bash
npm run build      # production build
npm run typecheck  # tsc --noEmit
```

No account, no database, no server. Practice data is stored only in your own browser.

### Environment variables (all optional)

The app runs fully without any configuration, in **deterministic demo mode** — labelled with a banner in the UI.

| Variable | Purpose |
|---|---|
| `VITE_AI_ENDPOINT` | OpenAI-compatible chat-completions URL |
| `VITE_AI_API_KEY` | API key |
| `VITE_AI_MODEL` | Model id (default `gpt-4o-mini`) |

```bash
# .env.local
VITE_AI_ENDPOINT=https://api.openai.com/v1/chat/completions
VITE_AI_API_KEY=sk-...
VITE_AI_MODEL=gpt-4o-mini
```

With a key configured, free-text rationale analysis and the L3 critique are handled by the model. Without one, they fall back to deterministic concept matching. The provider also falls back automatically if a live call fails, so a demo cannot break mid-presentation.

### Demo path

`/` → `/practice` → **Kestrel** (baseline) → **Meridian** (Exception Lab) → **Northbridge** (transfer test) → `/growth` → `/manager` → `/hr` → `/ethics`.

Full walkthrough with spoken script: [`docs/08_demo_script.md`](docs/08_demo_script.md).

## Architecture

```
src/
├── lib/
│   ├── types.ts              Materiality, Defect, Decoy, Scenario, AttemptScore
│   ├── scoring.ts            Materiality-weighted scoring + archetype classification
│   ├── store.ts              Attempt history (localStorage only)
│   ├── ai/provider.ts        JudgementProvider: deterministic + LLM implementations
│   └── data/                 scenarios · cohort · roleEvolution   (all synthetic)
├── pages/                    Home · Practice · Growth · Manager · HR · Ethics
└── components/ui.tsx         Shared design system primitives
```

React 19 · TypeScript · Vite · Tailwind v4 · zustand · react-router.

**The most important design decision:** the LLM analyses *reasoning* and generates *questions*. It never decides what is material. Materiality is authored per scenario, practitioner-checkable, and scored by deterministic arithmetic — because letting a model invent materiality at runtime would be unreliable and, in a regulated function, indefensible. That boundary is enforced in code, not policy. See [`docs/06_mvp_architecture.md`](docs/06_mvp_architecture.md) §4.

## Research basis

Thirty graded sources across AI + entry-level work, learning science, human-factors research on automation bias, and OB. Full matrix with methods, sample sizes and strength-of-evidence grades: [`docs/01_research_review.md`](docs/01_research_review.md).

Load-bearing sources:

- **Agarwal, Barua, Wen, Song & Puvvada (2026)** — *Why Some Junior Employees Work Well with AI — and Others Don't*, HBR. n=523 field study; the three archetypes; foundational skills failed to predict.
- **WEF & PwC (2026)** — *AI and the Future of Entry-Level Work*, and the January 2026 briefing (n=9,394 entry-level employees, 48 countries).
- **Buçinca, Malaya & Gajos (2021)** — cognitive forcing functions reduce overreliance; explanations do not. n=199.
- **Kluger & DeNisi (1996)** — 607 effect sizes; over a third of feedback interventions *reduce* performance, concentrated where feedback targets the self.
- **Bjork & Bjork** — performance during learning and learning itself are dissociable.
- **Cook et al. (2011), JAMA** — 92 studies; simulation transfers under specific design conditions.
- **Sarala (2026)** — *The apprenticeship void*, XIMB Journal of Management. Source of *synthetic readiness*; **conceptual and explicitly untested**.

Four theories are retained and mapped to specific product mechanisms; **deliberate practice was deliberately rejected** after Macnamara et al. (2014) found it explains <1% of performance variance in professions. See [`docs/03_ob_framework.md`](docs/03_ob_framework.md).

## Documentation

| Doc | Contents |
|---|---|
| [01 Research review](docs/01_research_review.md) | 30-source evidence matrix; what we know / what is plausible / **what we must not claim** |
| [02 Problem definition](docs/02_problem_definition.md) | Falsification of the obvious thesis; wedge selection table; three problem statements |
| [03 OB framework](docs/03_ob_framework.md) | Causal model, constructs, moderators, theory→mechanism map |
| [04 Competitor analysis](docs/04_competitor_analysis.md) | Five categories; the underserved gap; honest moat assessment |
| [05 Product spec](docs/05_product_spec.md) | Modules, learning loop, value exchange, business model |
| [06 MVP architecture](docs/06_mvp_architecture.md) | Stack, scoring model, **AI-necessity audit** |
| [07 Validation plan](docs/07_validation_plan.md) | Randomised pilot design; and what would make us abandon the concept |
| [08 Demo script](docs/08_demo_script.md) | Five-minute walkthrough with spoken lines |
| [09 CV positioning](docs/09_cv_positioning.md) | Portfolio framing and interview talking points |
| [10 Red team](docs/10_red_team.md) | 12 objections steel-manned; four changed the product |
| [11 Final brief](docs/11_final_brief.md) | 24-point product definition; 30-second, 2-minute and demo pitches |
| [12 Presentation outline](docs/12_presentation_outline.md) | 21-slide deck structure |
| [13 Self-evaluation](docs/13_self_evaluation.md) | Weighted score, and the single change that would most improve it |

## Limitations

Stated plainly, because the project's posture depends on it.

1. **No outcome data exists.** SkillForge has never been tested with real learners. `docs/07` is a design for obtaining evidence, not evidence.
2. **Scrutiny allocation and the scaffolding gap are proposed operationalisations**, not psychometrically validated instruments.
3. **"Synthetic readiness" and "apprenticeship void" come from a conceptual paper** that explicitly calls for empirical validation. Cited as proposed throughout.
4. **No primary user research.** The persona is synthesised from published survey data, not from interviews. This is the top-ranked gap in `docs/13`.
5. **Transfer to real files is untested** and is the concept's main empirical risk.
6. **Three scenarios** — enough to demonstrate the loop, nowhere near enough to deploy.
7. **The core mechanic is disliked.** Buçinca et al. found the most effective overreliance-reducing designs were rated least favourably. We expect a satisfaction cost and commit to reporting it.
8. **A checklist would capture some of this value more cheaply** for the simplest defect classes. See `docs/10` R11.

## Synthetic data disclaimer

**Every borrower, financial figure, source document, cohort member and dashboard number in this repository is synthetic and invented for demonstration.** Kestrel Precision Components, Meridian Cold Chain Holdings and Northbridge Logistics Group do not exist. No real company, customer, employee or confidential information is used anywhere. The cohort distribution is shaped to match the published KPMG/UT Austin split so the demo is plausible rather than arbitrary — it is not a measurement of real people, and the UI labels it as synthetic wherever it appears.

## Ethics

Developmental, never disciplinary. The system does not monitor work outside its own scenarios, ingest communications, infer wellbeing, predict attrition, rank employees, or feed promotion, performance-rating or termination decisions. Employees see their own profile first and always; managers see cohort-level patterns only.

The no-ranking rule is an **evidence-based design requirement**, not a compliance gesture: Kluger & DeNisi show that feedback directing attention at the person rather than the task is where feedback actively harms performance. Ranking would break the intervention. Full notice: [`/ethics`](src/pages/EthicsPage.tsx) in the app, and `docs/05` §7.
