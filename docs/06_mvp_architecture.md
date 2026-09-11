# 06 — MVP Architecture

## 1. Stack

| Layer | Choice | Why |
|---|---|---|
| Frontend | React 19 + TypeScript + Vite | Fast, no server needed for the demo |
| Styling | Tailwind CSS v4 | Consistent B2B system without a component library |
| Routing | react-router-dom v7 | Six distinct role views |
| State | zustand + `persist` | Attempt history survives reload; stored **only in the learner's browser** |
| AI | Provider interface with two implementations | Demo runs with no API key; live model when configured |
| Data | Typed TS modules | No database needed; all content synthetic |

No backend, no auth, no database. That is deliberate: the demo must run anywhere with `npm install && npm run dev`, and there is no employee data to protect because none leaves the browser.

## 2. Module map

```
src/
├── lib/
│   ├── types.ts              Domain model: Materiality, Defect, Decoy, Scenario, AttemptScore
│   ├── scoring.ts            Materiality-weighted scoring + archetype classification
│   ├── store.ts              Attempt history (localStorage)
│   ├── ai/provider.ts        JudgementProvider interface + deterministic and LLM impls
│   └── data/
│       ├── scenarios.ts      3 authored scenarios with seeded defects and decoys
│       ├── cohort.ts         Synthetic cohort for manager view
│       └── roleEvolution.ts  Task-level role change model for HR view
├── pages/                    Home · Practice · Growth · Manager · HR · Ethics
└── components/ui.tsx         Card, Meter, Stat, MaterialityBadge, SyntheticBadge, Note
```

## 3. The scoring model

```
weights:  critical 10 · major 6 · minor 2 · cosmetic 0.5
          decoy false-flag penalty = trapWeight (2–4)
          clean-element false-flag penalty = 1

gained          = Σ weight(defects correctly flagged)
falseCost       = Σ penalty(elements wrongly flagged)
totalDefect     = Σ weight(all defects)

precision       = gained / (gained + falseCost)
recall          = gained / totalDefect
scrutiny        = harmonic mean of precision and recall
overCorrection  = decoys flagged / decoys present
materialCatch   = critical+major caught / critical+major present
calibrationError= statedConfidence − (70·scrutiny + 30·decisionCorrect)
```

**Why precision and recall rather than a single accuracy figure.** The two documented failure modes are opposite. Delegators have low recall and trivially high precision (they flag nothing). The below-baseline group has reasonable recall and poor precision (they flag everything, including what was right). A single score would rate those two identically. Splitting them is what makes the archetypes fall out of the data.

**Why decoys carry a heavier penalty than clean elements.** Flagging something the AI got right is not neutral noise — it destroys correct work and consumes senior review time. That is the behaviour that put 24.1% of the KPMG sample *below* the AI baseline, so it is priced accordingly.

## 4. The AI-necessity audit

The brief requires that AI be essential. Here is the honest per-feature answer.

| Feature | Needs an LLM? | Justification |
|---|---|---|
| Scenario generation at scale | **Yes** | A static library is finite and memorisable; learners pattern-match instead of judging. Varied, internally consistent artifacts with controlled defect profiles cannot be enumerated by hand. |
| Analysing free-text rationale | **Yes** | The system must assess reasoning it has never seen. No rule set can evaluate an argument written in prose. |
| Adaptive critique (ladder L3) | **Yes** | Must respond to *this* learner's *actual* words. Pre-written hints cannot critique an unseen argument. |
| Exception synthesis | **Yes** | Novel edge cases must be generated or learners learn the list. |
| Difficulty adaptation | **Yes** | Requires inference over a performance history against a capability model. |
| Debrief narrative | **Partly** | Better with a model; degrades gracefully without one. |
| **Materiality scoring** | **No — and must not** | Materiality is authored and practitioner-validated. A model inventing it at runtime would be unreliable and, in a regulated function, indefensible. |
| Aggregation and dashboards | **No** | Deterministic arithmetic. |

> **The honest line for the viva:** remove the LLM and SkillForge degrades to a small fixed case library with a marking scheme — useful once, useless on the fourth scenario, and unable to say anything about *why* a learner reached a conclusion. The product's core claim is that it assesses reasoning and adapts; both are LLM-dependent. What AI must *not* do is decide what matters, and the architecture enforces that boundary in code.

## 5. Deterministic demo mode

With no API key the app uses `deterministicProvider`, which does concept matching over the rationale against authored synonym sets and selects Socratic questions from a bank keyed to missed concepts.

This is **labelled in the UI** with a persistent banner. It is not presented as semantic understanding, because it is not. The reason it ships is that an academic demo must run reliably in a room with no network and no billing account — and the full loop, scoring, dashboards and the wow moment all work without a model.

Enable the live model:

```bash
VITE_AI_ENDPOINT=https://api.openai.com/v1/chat/completions
VITE_AI_API_KEY=sk-...
VITE_AI_MODEL=gpt-4o-mini
```

Any OpenAI-compatible chat-completions endpoint works. The provider falls back to deterministic output if the call fails, so the demo cannot break on stage.

## 6. Scenario authoring contract

Adding a scenario means supplying:
1. `elements[]` — the AI draft, one atomic judgeable statement per element.
2. For each defective element: `kind`, `materiality`, `explanation`, `evidenceRef`.
3. At least one `decoy` — correct but suspicious — with a `trapWeight`.
4. `sources[]` — the data room extracts that prove or disprove each assertion.
5. `ladder[]` — five rungs, hint → worked example, never revealing the answer at L1–L2.
6. `expectedConcepts[]` — reasoning anchors with synonym sets, for deterministic scoring.
7. `expertTrace[]` — the senior analyst's order of operations (cognitive apprenticeship *modelling*).
8. `correctDecision` + `authorityNote` — so escalation can be scored against a stated threshold.

The invariant that makes the whole thing work: **every scenario must contain at least one defect that changes the decision and at least one correct statement that looks like it should.**

## 7. What is deliberately not built

Authentication, multi-tenancy, a scenario-authoring UI, HRIS/LMS integration, mobile apps, a server, and any real data ingestion. Each is ordinary engineering that would consume the time available without demonstrating anything new about the concept.
