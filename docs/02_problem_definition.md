# 02 — Problem Definition

> Every claim here traces to a graded source in `01_research_review.md` (references shown as A1, B1, C3 …).

---

## 1. Disproving the obvious version first

We began with the standard formulation and tried to break it.

| Proposition | Verdict | Evidence |
|---|---|---|
| "AI removes entry-level work" | **Partly true, not a safe foundation** | Young-worker employment in AI-exposed occupations is ~19% below counterfactual — but **only where AI substitutes**; flat or rising where it complements (A3). Observed usage is majority *augmentation* (A4). Indian GCC fresher hiring is **growing** (A6). |
| "The removed work was the training" | **Directionally supported, mechanism unproven** | WEF's own language: AI "removes the structured, repetitive tasks that traditionally helped them build confidence" (A2). But no study demonstrates the causal learning loss (D4 is conceptual). |
| "Juniors are becoming worse at judgement" | **Cannot be claimed** | Requires longitudinal data that does not exist. |
| "Juniors can't yet add value on top of AI" | **Established, present tense** | 25.8% matched the AI-only baseline; **24.1% performed below it** (B1, n=523). |
| "The cause is weak fundamentals — so train them" | **Falsified** | The below-baseline group matched the top group on domain knowledge and critical thinking, and **beat** the middle group on every foundational skill. AI literacy did not predict either (B1). |
| "The cause is blind trust in AI" | **Only half the story** | True for *Delegators* (accept with minimal scrutiny). But *Apprentices* **did** critique — they "identified irrelevant issues or misdirected the system" (B1). |

**What survives.** Not a story about disappearing jobs, and not a story about skill decay. A story about a **job description that changed without the training changing with it** — and a specific, measurable capability that nobody is building.

---

## 2. Naming the capability precisely

The brief demands we not say "skill erosion" casually. So here is the decomposition. Of the candidate capabilities, we asked of each: *is it actually missing, per B1?*

| Candidate capability | Missing? | Evidence |
|---|---|---|
| Task skill (produce the artifact) | Partly — but AI now does it | Not the binding constraint |
| Domain knowledge | **No** | Below-baseline group scored equal/higher (B1) |
| Critical thinking (general) | **No** | Did not predict group membership (B1) |
| AI literacy / prompting | **No** | Did not predict group membership (B1) |
| Willingness to question AI | **No** | Apprentices *did* critique (B1) |
| Communication | Not tested | Out of scope |
| **Knowing *what* to question** | **YES — this is the gap** | Apprentices critiqued "irrelevant issues"; Amplifiers "anchored the work in real domain frameworks" (B1) |
| Calibrated confidence | **Yes, secondary** | Confidence tracks AI agreement, not correctness (B6); 43pp calibration error (B5) |
| Exception handling / escalation | **Yes, secondary** | Shift to "verification, integration, task stewardship" (B2) |

### The construct

> **Scrutiny allocation** *(n.)* — the ability to direct finite verification effort toward the elements of an AI-generated work product where **probability of error × consequence of error** is highest.

This is not scepticism (a disposition), not domain knowledge (a stock), and not AI literacy (a tool skill). It is an **allocation decision under time pressure**, and it is the one thing B1 shows separates people who add value from people who subtract it.

It explains all three archetypes in one variable:

| Archetype | Scrutiny allocated | Targeting | Result |
|---|---|---|---|
| **Delegator** (25.8%) | ~None | n/a | Matches AI. Adds nothing. |
| **"AI Apprentice"** (24.1%) | High | **Mis-aimed** | **Below AI.** Actively degrades good output. |
| **Amplifier** (50.1%) | Moderate | **Well-aimed** | Beats AI. |

It is also **directly measurable**: present a work product with defects of known materiality, observe which ones the person flags, and score precision and recall *weighted by materiality*. No self-report required — which matters, because self-report is unreliable here (B5).

### Two secondary capabilities we also target
- **Confidence calibration** — the alignment between stated confidence and actual correctness (B5, B6).
- **Escalation judgement** — knowing when a defect exceeds your authority, which is where psychological safety becomes the binding constraint (D3).

---

## 3. Choosing the wedge

Five candidates were evaluated. Weights reflect the project's evaluation criteria (employee need, HR ownership, AI necessity, prototype feasibility, novelty, commercial plausibility).

### Candidate profiles

**W1 — Junior credit/risk analyst, BFSI Global Capability Centre (India)**
- *Entry tasks historically:* spreading financials, drafting credit memos, covenant checks, peer comps, KYC file prep.
- *Now automated/accelerated:* first-draft memo generation, financial spreading, ratio computation, comparable selection, document summarisation.
- *Developmental reps lost:* building the memo from raw statements — the act that taught which numbers move a decision.
- *Judgement that remains:* materiality, covenant interpretation, sanity of assumptions, related-party and data-vintage checks, escalation.
- *How trained today:* senior review of the junior's draft — a loop that breaks when the draft is the AI's.
- *Consequence:* material misstatement reaching a credit committee; regulatory and audit exposure.

**W2 — Junior consultant / business analyst (professional services)**
- Strong AI exposure and a vivid narrative, but "good judgement" is contested and rubric-defining is subjective; materiality is not a native professional concept. Harder to score defensibly.

**W3 — Junior software engineer reviewing AI-generated code**
- Excellent problem fit and real materiality. But the grader risks becoming "can you spot the bug," the buyer is Engineering rather than HR, and it reads as a developer tool — weakening the HR-buyer requirement.

**W4 — Customer operations analyst**
- High volume and easy scenarios, but low decision consequence per case and thin judgement content. Risks looking like a quiz.

**W5 — Junior auditor**
- *Best theoretical fit* — materiality is literally professional doctrine. But the buyer is narrower (audit firms only) and it collides with regulated methodology (ISA standards), raising feasibility risk for a student prototype.

### Weighted decision table

Scores 1–5. Weighted total out of 5.00.

| Criterion | Weight | W1 BFSI GCC credit | W2 Consulting | W3 Software | W4 Cust. Ops | W5 Audit |
|---|---|---|---|---|---|---|
| Severity of employee problem | 15% | 5 | 4 | 4 | 2 | 5 |
| Strength of supporting evidence | 15% | 5 | 4 | 3 | 2 | 4 |
| HR ownership & buyer clarity | 20% | 5 | 4 | 2 | 3 | 3 |
| **Objectively definable materiality** | 15% | **5** | 2 | 4 | 3 | **5** |
| Prototype feasibility (synthetic data) | 10% | 4 | 4 | 3 | 5 | 3 |
| AI necessity | 10% | 4 | 5 | 4 | 3 | 4 |
| Novelty / CV value | 10% | 4 | 3 | 3 | 2 | 4 |
| Commercial plausibility | 5% | 5 | 5 | 3 | 3 | 3 |
| **Weighted total** | 100% | **4.70** | **3.75** | **3.25** | **2.80** | **4.00** |

**Selected: W1 — entry-level credit & risk analysts (0–24 months) in banking/financial-services Global Capability Centres in India.**

Why it wins on the criterion that matters most — *objectively definable materiality*. In credit risk, "what matters" is not a matter of taste. A covenant headroom error changes a lending decision; an awkward sentence does not. That property is what makes scrutiny allocation **scoreable without hand-waving**, and it is precisely what W2 lacks. It also inherits a real HR buyer (GCC talent development functions hiring freshers at volume, A6) and a live regulatory reason to care.

**Deliberately out of scope for MVP:** every other role. The engine generalises to audit, consulting and legal, but the MVP ships one role, one capability, one complete loop.

---

## 4. The persona

> **Ananya R. — Analyst I, Credit Risk, mid-size US commercial-banking portfolio**
> Bengaluru GCC of a global bank · 11 months in role · MBA/M.Com, CFA L1 · reports to a VP in Charlotte, coordinates with an AVP in Bengaluru
>
> **Her day now:** the bank's AI assistant spreads the borrower's financials and produces a first-draft credit review memo in ~90 seconds. Ananya's job is to review it, adjust it, and put her name on it before it reaches the AVP.
>
> **What she says:** *"I'm signing off on work I didn't do and couldn't have produced from scratch. I mark things up — but nobody has ever told me whether the things I flag are the things that matter. When the AVP sends it back, the comment is on the memo. It's never on my review."*
>
> **What she is afraid of:** being the person who let a bad memo through, and being found out as someone whose competence is really the model's.

That last line is Sarala's **synthetic readiness** (D4) in the first person — and note that it is *proposed*, not demonstrated.

---

## 5. The problem statement

### Version A — academic (one sentence)

> Entry-level credit analysts in AI-enabled banking workflows have been repositioned from producers of analytical work to reviewers of AI-generated analytical work, a transition that removes the production repetitions through which evaluative expertise was historically acquired while requiring that expertise immediately; because the workflow returns feedback on the *document* but never on the *quality of the analyst's review*, analysts cannot learn where to direct scrutiny, producing measurable failures of scrutiny allocation — under-scrutiny in some and mis-targeted scrutiny in others — and work whose apparent quality is contingent on AI scaffolding rather than on the analyst's own judgement.

### Version B — employee-centric

> "AI writes my first draft now. My job is to catch what's wrong with it before it goes to committee. Nobody ever taught me how to do that, nobody tells me whether I'm catching the right things, and I'm the one who signs it."

### Version C — presentation-ready

> **AI didn't take the junior analyst's job. It took her practice — and promoted her straight to reviewer.**
>
> Half of early-career professionals add nothing, or worse than nothing, on top of an AI agent. The ones who fail aren't the ones who know less. They're the ones who scrutinise the wrong things — and no one has ever told them.

### Structural form required by the brief

| Element | Content |
|---|---|
| **Specific employee population** | Entry-level credit & risk analysts (0–24 months) in BFSI Global Capability Centres |
| **Specific developmental consequence** | Failure to develop *scrutiny allocation* — knowing where verification effort should go |
| **Specific AI/work-design mechanism** | Task composition shifted production → review, while the feedback loop still returns signal on the document, not on the review |
| **Employee consequence** | Accountability without demonstrable competence; miscalibrated confidence; performance contingent on AI scaffolding; low confidence that current learning builds a career (57%, A2) |
| **Organisational consequence** | Material defects passing undetected into credit decisions; manager review bandwidth consumed re-doing juniors' reviews (only 53% of juniors say their manager supports capability building, A2); a promotion pipeline of reviewers who have never produced |

---

## 6. Why this is HR's problem, not the business unit's

| Test | Answer |
|---|---|
| Does the employee genuinely experience it? | Yes — 57% / 53% / 51% on learning value, manager support and autonomy (A2), and the felt experience of unearned accountability. |
| Is HR the function that can solve it? | Yes. The lever is **role design, structured early-career development and capability assessment** — HR/L&D property. WEF explicitly frames the response as job design and capability-based development (A1). |
| Would the business unit solve it alone? | No. The VP's incentive is this memo being right today; building Ananya's judgement is next year's benefit and someone else's budget. This is a classic externality that HR exists to internalise (human capital theory). |
| Is it big enough to own? | Yes — it is the design of the entire early-career pipeline in an AI-enabled function, not a training course. |
| Is it a real budget line? | Yes — early-career/graduate development, capability assessment, and AI-transformation enablement all already hold budget (D5: 77% of employers plan upskilling). |

---

## 7. Falsification tests

We state in advance what would show us to be wrong:

1. If materiality-weighted scrutiny scores show **no variance** across a junior cohort, the construct is not discriminating — the problem is elsewhere.
2. If scrutiny scores correlate ~1.0 with existing domain assessments, we have built a redundant test — B1 predicts they will not, and this is the sharpest test of our thesis.
3. If assisted and unassisted performance are indistinguishable, "synthetic readiness" has no empirical referent and our headline metric is void.
4. If practice produces gains on our own scenarios but none on a **held-out transfer scenario**, we have taught the test, not the capability.

These are the primary endpoints of the pilot in `07_validation_plan.md`.
