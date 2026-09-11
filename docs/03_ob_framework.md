# 03 — Organisational Behaviour Framework

> This is the academic spine of the project. The test it must pass: an OB examiner should see a **causal model with named constructs, specified mechanisms, moderators and outcomes** — not a feature list with theory labels stapled on afterwards.

---

## 1. The causal model

```
                    ANTECEDENT (work design)
        ┌───────────────────────────────────────────────┐
        │  AI-enabled workflow redesign in the junior   │
        │  role: task composition shifts from           │
        │  PRODUCING the analysis → REVIEWING the       │
        │  AI's analysis                        (A1,A2,A4,B2)
        └───────────────────────┬───────────────────────┘
                                │
        ┌───────────────────────┼───────────────────────┐
        │                       │                       │
        ▼                       ▼                       ▼
┌───────────────┐   ┌───────────────────────┐   ┌──────────────────┐
│ M1 LOSS OF    │   │ M2 FEEDBACK           │   │ M3 COGNITIVE     │
│ ENACTIVE      │   │ MISDIRECTION          │   │ OFFLOADING       │
│ MASTERY       │   │                       │   │                  │
│ Junior no     │   │ Review returns signal │   │ Fluent, confident│
│ longer builds │   │ on the DOCUMENT,      │   │ AI output lowers │
│ the artifact  │   │ never on the QUALITY  │   │ expended effort  │
│               │   │ OF THE REVIEW         │   │ and scrutiny     │
│ (D1, C1, C7)  │   │ (C5, C1-articulation) │   │ (B2, B4, B3)     │
└───────┬───────┘   └───────────┬───────────┘   └────────┬─────────┘
        │                       │                        │
        └───────────────────────┼────────────────────────┘
                                ▼
        ┌───────────────────────────────────────────────┐
        │        PROXIMAL OUTCOME (individual)          │
        │  Miscalibrated SCRUTINY ALLOCATION            │
        │   • under-allocation  → Delegator  (25.8%)    │
        │   • mis-targeted      → "Apprentice" (24.1%)  │
        │  + miscalibrated confidence          (B1,B5,B6)│
        └───────────────────────┬───────────────────────┘
                                ▼
        ┌───────────────────────────────────────────────┐
        │        DISTAL OUTCOMES                        │
        │  Individual: synthetic readiness — competence │
        │    contingent on AI scaffolding; low          │
        │    self-efficacy; weak role identity  (D4,D1,D6)│
        │  Organisational: undetected material defects; │
        │    manager review burden; promotion fragility;│
        │    pipeline thinning                     (D4,A2)│
        └───────────────────────────────────────────────┘

   MODERATORS (attenuate or amplify every path above)
   ├── Psychological safety ......... dare they flag/escalate?      (D3)
   ├── Manager support .............. only 53% agree                (A2)
   ├── Autonomy / task identity ..... only 51% agree                (A2, D6)
   ├── Task ambiguity & consequence .. materiality of the decision  (B4)
   ├── Need for Cognition ........... who benefits from forcing     (B3)
   └── AI literacy .................. ⚠ NON-moderator — see §4      (B1)
```

## 2. Construct definitions

| Construct | Definition | Level | Measurement in SkillForge |
|---|---|---|---|
| **Scrutiny allocation** | Direction of finite verification effort toward elements where P(error) × consequence(error) is highest | Individual, behavioural | Materiality-weighted precision & recall of flags raised on a seeded work product |
| **Confidence calibration** | Correspondence between stated confidence and actual correctness | Individual, metacognitive | Stated confidence at decision time vs. materiality-weighted accuracy |
| **Escalation judgement** | Correct identification of defects exceeding one's decision authority | Individual, behavioural | Decision choice (approve / revise / escalate) vs. scenario-defined authority threshold |
| **Synthetic readiness** *(proposed, D4)* | Competent performance contingent on AI scaffolding; inability to explain process or detect errors unaided | Individual | **Assisted score − unassisted score** on matched-difficulty scenarios |
| **Apprenticeship void** *(proposed, D4)* | Systematic absence of learning-rich task engagement following AI displacement of foundational work | Organisational | Role Evolution module: developmental reps lost per task |

> **Discipline note.** Synthetic readiness and apprenticeship void come from a **conceptual paper that explicitly calls for empirical validation** (D4). Our operationalisations are *proposals*, presented as such throughout the product and the deck.

---

## 3. The four theories we retain

We were prepared to use eight. We retain four, because each one (a) explains a specific arrow in the model and (b) prescribes a specific product mechanism. Anything that failed both tests was cut.

### 3.1 Cognitive Apprenticeship — Collins, Brown & Newman (C1)
**Mechanism.** Occupational expertise transfers when expert *thinking* is made visible, then practised under coaching, with scaffolds progressively **faded** until the learner performs unaided. The six methods: modelling, coaching, scaffolding+fading, articulation, reflection, exploration.

**Connection to the problem.** This is the theory the AI workflow breaks most precisely. Previously, a junior produced a draft and a senior's markup *made expert reasoning visible*. Now the AI produces the draft — **silently, with no reasoning exposed** — and the senior reviews the AI's work, not the junior's thinking. Modelling and articulation both vanish in one step.

**Product mechanism.** The entire loop is built on the six methods:
| Method | SkillForge mechanism |
|---|---|
| Modelling | Expert Reasoning Trace — what a senior analyst would check, in what order, and *why* |
| Coaching | Staged assistance ladder responding to the learner's actual attempt |
| Scaffolding + **fading** | Ladder levels 1→5, then **forcibly withdrawn** in the Transfer Test |
| Articulation | Mandatory free-text rationale *before* any assistance unlocks |
| Reflection | Structured debrief comparing learner reasoning vs. expert trace vs. AI's claim |
| Exploration | Exception Lab — novel cases with no procedural answer |

### 3.2 Social Cognitive Theory / Self-Efficacy — Bandura; Stajkovic & Luthans (D1, D2)
**Mechanism.** Self-efficacy derives principally from **enactive mastery experience**; efficacy predicts effort, persistence and goal choice, and correlates with work performance at **r = .38** across 114 studies (D2).

**Connection.** When AI performs the enactive task, the junior gets the *output* without the *mastery experience*. The efficacy that should accompany competence never forms — consistent with entry-level workers being the cohort least convinced their learning is advancing their career (57%, A2). Lee et al. sharpen it: **higher confidence in AI → less critical thinking; higher confidence in self → more** (B2). Self-efficacy is therefore not a soft outcome here; it is *upstream of the scrutiny behaviour we care about*.

**Product mechanism.** Graded mastery experiences the learner genuinely owns: an unassisted attempt is always first, difficulty escalates only after demonstrated mastery, and the Growth Profile shows **unassisted** wins — because an assisted win is not a mastery experience.

### 3.3 Feedback Intervention Theory — Kluger & DeNisi (C5)
**Mechanism.** Feedback averages d = .41 but **over one-third of interventions reduce performance** (607 effect sizes, 23,663 observations). Harm concentrates when feedback directs attention **to the self** rather than to the **task**; attention drawn to self-evaluation consumes resources that should go to the task.

**Connection.** Twice relevant. (a) It explains the *current* failure: today's feedback arrives as a marked-up document — task-level for the document, but **silent about the review**, so it cannot teach scrutiny. (b) It constrains our own design: an AI system emitting "judgement scores" per employee is precisely the self-directed feedback that FIT predicts will backfire.

**Product mechanism.** All feedback is **task- and process-level**: *"the covenant headroom figure was stale — here is the evidence trail you did not open,"* never *"your judgement score is 62."* No employee is ever ranked against another. This is why the manager view shows **cohort patterns, not a leaderboard** — a decision made on evidence (C5), not only on ethics.

### 3.4 Automation Bias, Complacency & Cognitive Offloading — Parasuraman & Manzey; Buçinca et al.; Lee et al. (B4, B3, B2)
**Mechanism.** Automation induces omission and commission errors; complacency appears in experts as well as novices and **cannot be overcome by simple practice** (B4). Explanations do **not** reduce overreliance; **cognitive forcing functions do** (B3).

**Connection.** This is the Delegator failure mode (25.8%), and it is why "tell them to be careful" is not an intervention.

**Product mechanism.** A literal cognitive forcing function: **the learner must commit to an independent judgement and a written rationale before any AI assistance is available.** Assistance is then released in graded steps, each one recorded. This is B3's intervention implemented as the product's core interaction — with B3's warning honoured (§5).

### Supporting frames (used, not headlined)
- **Situated Learning** (C7) — why scenarios are work-shaped, not course-shaped.
- **Job Characteristics Model / Self-Determination Theory** (D6) — explains the motivational cost of pure review work: **low task identity** ("I didn't make this"), reduced autonomy, degraded feedback. Informs why the product returns *ownership* to the learner.
- **Human Capital Theory** — the viability argument: firm-specific capability formation is an investment with an externality no single manager will fund (see `02`, §6).

### Explicitly rejected
| Theory | Why rejected |
|---|---|
| **Deliberate Practice** (Ericsson) | Macnamara et al. (C6): explains **<1% of variance in professions**. Too weak to headline; appears only in limitations. |
| Technology Acceptance / UTAUT | Explains adoption of a tool, not formation of a capability. Wrong dependent variable. |
| Kirkpatrick levels | An evaluation taxonomy, not an OB theory. Used implicitly in the validation plan only. |

---

## 4. The non-moderator that matters most

The most interesting finding in B1 is a **null**: domain knowledge, critical-thinking ability and AI literacy **did not** predict who added value. The below-baseline group scored equal to or higher than the top group.

This is theoretically important. It means the capability is not a *stock* (knowledge you possess) but a *situated practice* (how you deploy attention in a specific task context) — exactly what Situated Learning and Cognitive Apprenticeship predict and what classroom-style training cannot deliver.

**It is also the project's single strongest commercial argument:** it is direct evidence that the incumbent response — an AI-literacy curriculum — cannot work, because the thing it teaches is not the thing that is missing.

---

## 5. Designing against our own evidence

Honest theory use means honouring findings that are inconvenient.

| Inconvenient finding | Design consequence |
|---|---|
| Users rate overreliance-reducing designs **least favourably** (B3) | Forcing step is kept short (one decision + one rationale), its payoff is made immediately visible in the debrief, and the Growth Profile rewards unassisted wins so the friction buys something the learner can see. We expect satisfaction scores below a frictionless tutor and we say so. |
| >⅓ of feedback interventions **harm** performance (C5) | No person-level scores surfaced to managers; no rankings; feedback phrased against the task and the evidence trail. |
| Complacency **isn't fixed by simple practice** (B4) | Practice alone is insufficient — hence *materiality-weighted* feedback plus calibration scoring, not repetition. |
| Productive failure is weaker outside STEM (C2) | We claim "attempt-first" is *supported*, not proven, for professional judgement, and make it a pilot hypothesis. |
| Fluent performance ≠ learning (C3) | Headline metric is **unassisted and transfer** performance, never assisted completion. |

---

## 6. Module → theory map

| Module | Primary theory | Mechanism addressed |
|---|---|---|
| Independent Attempt (forced) | Automation bias / cognitive forcing (B3, B4) | M3 cognitive offloading |
| Written rationale before assist | Cognitive apprenticeship — *articulation* (C1) | M2 feedback misdirection |
| Assistance Ladder L0→L5 | Cognitive apprenticeship — *scaffolding* (C1) | M1 loss of guided mastery |
| Materiality-weighted scoring | Feedback Intervention Theory (C5) | M2 — makes review quality visible for the first time |
| Expert Reasoning Trace | Cognitive apprenticeship — *modelling* (C1) | M1 restores visible expert thinking |
| Exception Lab | Adaptive expertise; *exploration* (C1) | M1 loss of exception exposure |
| Structured Debrief | *Reflection* (C1) | M2 |
| Transfer Test (assistance withdrawn) | *Fading* (C1); desirable difficulties (C3) | Measures synthetic readiness |
| Growth Profile (unassisted wins) | Self-efficacy — mastery experience (D1, D2) | M1 |
| Manager view (cohort patterns only) | FIT — task-level not self-level (C5); psych. safety (D3) | Avoids iatrogenic feedback |
| Role Evolution | Human capital theory; job design (A1) | Antecedent — the work design itself |

Every module traces to an arrow in §1. Any module that did not was cut.
