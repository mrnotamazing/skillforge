# 05 — Product Specification

**SkillForge — the Judgement Layer for AI-Enabled Work**

> One line: *SkillForge is an apprenticeship layer that teaches early-career analysts where to aim their scrutiny when an AI has already done the work — and measures whether they can still do the job when the AI is taken away.*

---

## 1. What SkillForge is not

Stated first, because every one of these is a way this project could fail:

| Not a… | Because |
|---|---|
| AI tutor | An answer engine is the offloading mechanism (B2) and produces fluency illusions (C3) |
| LMS / course catalogue | Completion is not capability; B1 shows knowledge was never the gap |
| Chatbot | The unit of work is a decision on a document, not a conversation |
| Quiz generator | Multiple choice cannot measure where attention was directed |
| Career coach | Wrong altitude, wrong evidence, wrong buyer |
| Generic simulation library | One role, one capability, materiality-graded |

## 2. Product thesis

AI now handles routine production. What remains human is **verification, exception handling, escalation, problem framing and decision ownership** (B2, A2). Those capabilities were previously acquired as a *by-product* of production work that no longer exists.

SkillForge does **not** recreate the obsolete production work. It recreates its **developmental function** — deliberately, around the new workflow, at the point where the junior now sits: reviewing the machine.

---

## 3. Module architecture

### M1 · Role Evolution Map *(HR-facing)*
Decomposes the target role into: routine AI-automatable tasks · human judgement tasks · exception tasks · emerging skills · **developmental reps lost**. That last column is the artefact HR has never had — it names, task by task, what learning disappeared when the task was automated.
**AI necessity:** Moderate. Synthesises role/task descriptions into a structured map. A consultant could hand-build this once; AI makes it maintainable as workflows change.

### M2 · Practice Engine
Generates realistic work situations from the role model: a borrower, a data room, an AI-drafted deliverable **with defects seeded at known materiality**, and a decision to make under time pressure. Not multiple choice — a real document and a real call.
**AI necessity:** **High.** Requires contextually varied, internally consistent artifacts with controlled defect profiles. A static library is finite and memorisable; learners would pattern-match rather than judge.

### M3 · Assistance Ladder (L0 → L5)
| Level | Support | Purpose |
|---|---|---|
| **L0** | **None — independent attempt, mandatory** | Cognitive forcing function (B3) |
| L1 | Contextual hint — *where* to look, not what is wrong | Scaffolding (C1) |
| L2 | Evidence prompt — surfaces the source document to check | Verification behaviour (B2) |
| L3 | Critique — challenges the learner's own reasoning | Articulation (C1) |
| L4 | Co-pilot — works the problem jointly | Coaching (C1) |
| L5 | Worked example — full expert reasoning trace | Modelling (C1) |

Every level used is recorded. **Ladder depth is itself a measure** — needing L4 on a scenario you previously cleared at L1 is a signal; the reverse is progress.
**AI necessity:** **High.** Each rung must respond to *this* learner's *actual* rationale. Pre-written hints cannot critique reasoning they have not seen.

### M4 · Judgement & Calibration Engine
Scores the reasoning, not just the answer:
- **Scrutiny precision** — of the things you flagged, how many mattered?
- **Scrutiny recall** — of the things that mattered, how many did you catch?
- **Materiality weighting** — a missed covenant breach is not a missed typo
- **Over-correction** — did you "fix" something that was already right? *(the Apprentice failure mode, B1)*
- **Calibration** — stated confidence vs. actual materiality-weighted accuracy
- **Escalation** — did you escalate what exceeded your authority, and not what didn't?
**AI necessity:** **High for free-text reasoning analysis** (mapping an analyst's prose to evidence anchors and defect concepts). **Deliberately rule-based for materiality scoring** — materiality is defined by the scenario author and practitioner-validated; inventing it at runtime would be both unreliable and indefensible. See `06` §AI-necessity audit.

### M5 · Exception Lab
Cases where the routine breaks: conflicting sources, stale data, a confident hallucination, an ambiguous instruction, a policy exception, conflicting stakeholders — **and, critically, cases where the AI is right and the learner's instinct is wrong.** That last class directly trains the 24.1% failure mode.
**AI necessity:** **High.** Novel exceptions must be generated, not enumerated, or the learner learns the list.

### M6 · Structured Debrief
After every decision: what did you notice? what did the AI miss? why did you trust or doubt it? what evidence actually mattered? what would you do differently? Then the reveal — **your reasoning vs. the expert trace vs. what the AI asserted**, side by side.
**AI necessity:** **High.** Must reference what the learner actually wrote.

### M7 · Growth Profile *(employee-facing)*
Longitudinal evidence across scrutiny precision/recall, calibration, exception handling, escalation, and **unassisted** performance. Shows **evidence, not verdicts**: every score opens into the specific decisions behind it. Employee sees their own profile first and always.
**AI necessity:** Low–Moderate. Aggregation is deterministic; AI recommends what to practise next.

### M8 · Manager / Mentor View
Cohort capability patterns, common mis-targeting, recurring exception failures, where human coaching is needed, **which tasks the cohort over-trusts the AI on**. Explicitly **no individual ranking** — an evidence-based decision (C5), not only an ethical one.
**AI necessity:** Moderate. Pattern detection across free-text reasoning.

### M9 · HR / Workforce View
Which developmental reps are disappearing; which capabilities are becoming critical; where existing training no longer matches the redesigned workflow; apprenticeship gaps; recommended journey redesign.
**AI necessity:** Moderate.

---

## 4. The workflow story

**BEFORE AI**
Junior receives raw financials → spreads them → drafts the memo → VP marks it up → junior learns from the correction → gradually owns more complexity.
*Learning happened as a by-product of production, and the markup made expert reasoning visible.*

**AFTER AI**
AI spreads financials and drafts the memo in ~90 seconds → junior reviews → AVP sees a polished document → feedback lands **on the document**.
*The junior's review is never evaluated. Production reps are gone; expert reasoning is invisible; the junior owns the signature without the mastery.*

**WITH SKILLFORGE**
AI still drafts the memo (we do not restore obsolete work) → the junior enters a deliberately designed judgement task → **independent attempt, no assistance** → calibrated scaffolds on request → decision + confidence → materiality-weighted feedback on **the review itself** → exception case → structured debrief against the expert trace → repeat at higher complexity → **transfer test with assistance withdrawn** → evidence of unassisted capability.

---

## 5. Learning loop design

| Step | Mechanism | Theory |
|---|---|---|
| 1 Target capability | Scrutiny allocation on AI-drafted credit memo | — |
| 2 Initial task | Realistic AI-drafted deliverable, defects seeded by materiality | Situated learning (C7) |
| 3 **Independent attempt** | Decision + written rationale **before any help** | Cognitive forcing (B3), productive failure (C2) |
| 4 Scaffolding | Ladder L1–L5, learner-requested, recorded | Cognitive apprenticeship (C1) |
| 5 Decision | Approve / revise / escalate + confidence rating | Calibration (B5, B6) |
| 6 Feedback | Materiality-weighted, task-level, evidence-linked | FIT (C5) |
| 7 Reflection | Structured debrief vs. expert trace | Articulation & reflection (C1) |
| 8 Retry | Same capability, new context, adjusted difficulty | Varied practice (C3, C4) |
| 9 **Transfer test** | Unseen scenario, **assistance withdrawn** | Fading (C1), desirable difficulties (C3) |
| 10 Evidence of mastery | Unassisted + transfer performance only | (C3) |

**The system explicitly distinguishes** assisted performance · unassisted performance · ability to critique AI · transfer to novel context. Only the last three count as evidence of learning.

---

## 6. Value exchange

| Stakeholder | Gets |
|---|---|
| **Employee** | A safe place to be wrong; practice on exceptions they'd meet twice a year; feedback on their *review* for the first time; visible evidence of unassisted capability; a defensible answer to "can you actually do this?" |
| **Manager** | Sees what the cohort actually struggles with; targeted coaching instead of re-reviewing; capability evidence rather than document output; less repetitive teaching |
| **HR / L&D** | Structured early-career development that matches the redesigned workflow; capability visibility; evidence for role redesign; scalable apprenticeship not dependent on manager bandwidth (53%, A2) |
| **Organisation** | Fewer material defects reaching decisions; better-calibrated AI adoption; a promotion pipeline with demonstrable judgement |

## 7. Guardrails (summary — full text in `README` and in-product)

**The system must not:** covertly monitor; ingest private communications; infer mental health; predict attrition; rank employees; drive promotion or termination decisions; present AI scores as objective truth; punish AI use; or push unsafe struggle.

**Employees are told:** what is measured (decisions, rationales, ladder use, confidence — inside SkillForge scenarios only), why, what is stored, who sees what (**managers see cohort patterns, never individual scores**), and what HR may and may not use it for (**development only — never promotion, performance rating or termination**).

**Design defaults:** employee sees their own data first; practice data is developmental and excluded from performance management by policy; every score links to the evidence behind it; high-stakes decisions require human review. Scores are labelled *evidence*, never verdicts.

## 8. Business model

- **Buyer:** CHRO / Head of Early Careers / Head of L&D; co-sponsored by AI Transformation. Influencers: HRBPs, BU leads, Risk.
- **Land:** paid pilot — one role family, one cohort (~40–60 analysts), one quarter, fixed fee.
- **Expand:** per-seat annual licence per role family; scenario library extensions billed per role.
- **Why they pay:** manager review time is the scarcest resource in a GCC; undetected material defects carry regulatory cost; fresher intake is growing (A6) and existing AI-literacy training is falsified by B1.
- **ROI logic:** stated as an **assumption-driven scenario model, not a forecast** — inputs are analyst cohort size, manager review hours per memo, defect escape rate, and time-to-independent-sign-off. We do **not** publish an ROI number we cannot evidence.

## 9. MVP scope

**In:** one role (credit analyst) · one capability journey (evaluate an AI-generated credit recommendation) · 3 scenarios (baseline → exception → transfer) · full assistance ladder · reasoning capture · materiality-weighted feedback · calibration · debrief · growth profile · manager view · HR view · role evolution · synthetic seeded data · guardrail copy.

**Out:** authentication/SSO · multi-tenant · scenario authoring UI · integrations · mobile app · real customer data.
