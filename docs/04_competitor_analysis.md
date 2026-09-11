# 04 — Competitor and Existing-Solution Analysis

> The goal is **not** to claim "nobody does this." Several players do adjacent things well, and one of them is a Big-4 firm. The goal is to identify precisely which part of the problem is **underserved**, and whether that gap is defensible.

---

## 1. The landscape in five categories

| # | Category | Representative players | Core job-to-be-done |
|---|---|---|---|
| 1 | Corporate LMS / LXP | Cornerstone, Docebo, Degreed, Workday Learning (+ Sana) | Deliver, track and recommend content at scale |
| 2 | AI role-play / conversation simulation | Retorio, Hyperbound, Second Nature, Zenarate, Quantified | Practise **talking to a human** — sales calls, coaching, service |
| 3 | AI tutors / copilot-for-learning | ChatGPT Edu, Sana, in-house GPTs | Answer questions, explain, generate practice |
| 4 | Digital coaching | CoachHub, BetterUp | Human coach at scale, behavioural/leadership goals |
| 5 | Firm-internal AI capability programmes | **KPMG "You Can with AI: Next Level Learning"**, Big-4 equivalents | Build AI-collaboration capability in their own staff |

## 2. Comparison matrix

| Dimension | LMS / LXP | AI role-play | AI tutor | Digital coaching | KPMG internal | **SkillForge** |
|---|---|---|---|---|---|---|
| **Target user** | All employees | Sales, service, managers | All | Managers, HiPos | Own early-career staff | Entry-level analysts (0–24 mo) in AI-enabled BFSI workflows |
| **What is simulated** | Nothing (content) | **A human counterpart** | Nothing (dialogue) | Nothing (real coach) | Client scenarios | **An AI colleague's flawed work product** |
| **Core job** | Complete courses | Rehearse conversations | Get answers | Behaviour change | Become AI-effective | **Learn where to aim scrutiny at AI output** |
| **AI's role** | Recommend / summarise | Play a persona; score delivery | Generate answers | Matching, nudges | Mixed | Generate defect-seeded artifacts; analyse reasoning; adapt difficulty; synthesise exceptions |
| **Practice mechanism** | Quiz / video | Live conversation | Q&A | Conversation | Coursework + simulation + OTJ | **Attempt-first forced judgement → graded scaffolds → exception → transfer** |
| **Scores…** | Completion, quiz score | Tone, pace, word choice, persona handling | Nothing | Self-reported goals | Skills assessment | **Materiality-weighted scrutiny precision/recall, calibration, escalation** |
| **Measures unassisted ability** | ✗ | ✗ | ✗ | ✗ | Partially | **✓ — assisted vs unassisted gap is the headline metric** |
| **Exception / edge-case handling** | ✗ | Limited (objections) | ✗ | ✗ | Unknown | **✓ — dedicated module incl. "don't overrule the AI" cases** |
| **Teaches when *not* to challenge AI** | ✗ | ✗ | ✗ | ✗ | ✗ | **✓ — over-correction is scored as an error** |
| **Manager view** | Completion reports | Rep scorecards (**ranked**) | ✗ | Aggregate | Internal | **Cohort capability patterns — deliberately no ranking** |
| **HR / workforce view** | Skills taxonomy | ✗ | ✗ | Engagement | ✗ | **Developmental reps lost per task; role evolution; where AI is over-trusted** |
| **Differentiator** | Scale, compliance | Persona realism | Flexibility | Human depth | Domain realism, real client work | **Judgement on AI output as the unit of practice** |
| **Weakness** | Completion ≠ capability | Wrong counterpart — no AI artifact to audit | Fluency illusion (C3); increases offloading | Cost; not task-specific | Single-firm; not a product; not for sale | Unvalidated; scenario authoring cost; friction is disliked (B3) |

## 3. Where each category structurally fails

**LMS / LXP.** Measures completion, not capability. B1 is fatal to this model: the people who failed had the knowledge. Content delivery cannot fix an allocation-of-attention problem.

**AI role-play — the closest and most instructive comparison.** This category has solved the hard engineering (realistic scenario generation, free-response scoring, enterprise deployment). But it simulates **the wrong counterpart.** Every product in it puts a *human* on the other side — a prospect, an angry customer, a direct report — and scores how you *communicate*. Not one puts an **AI's work product** on the other side and scores how you *evaluate* it. The junior analyst's actual daily risk is not a difficult conversation; it is a plausible, fluent, confidently wrong memo.

**AI tutors.** Actively counterproductive for this capability. An always-available answer engine is the cognitive offloading mechanism itself (B2), and its fluency produces exactly the illusion of mastery Bjork warns about (C3). Buçinca (B3) shows explanation-rich AI does not reduce overreliance.

**Digital coaching.** Right on psychological safety and reflection; wrong on economics and specificity. Cannot deliver repeated, materiality-graded practice on credit memos at fresher-intake volume.

**KPMG internal programme.** Our most serious competitor archetype — and our best market validation. A Big-4 firm ran the study, found the problem, and built a response: skills assessments, personalised pathways, **real client scenario simulations**, on-the-job practice, champion networks. Two observations: (1) it proves large professional-services buyers will fund this; (2) it is **a single firm's internal programme, not a product**, and its published design targets "effective AI use" broadly rather than scrutiny allocation specifically.

## 4. The underserved gap

Every incumbent optimises one of:
- **content** (LMS), **conversation** (role-play), **answers** (tutors), or **the person** (coaching).

Nobody optimises **the quality of a junior's evaluation of machine-produced work** — despite that being, per B2, the job knowledge work is converging on ("verification, response integration, task stewardship").

> **The wedge:** SkillForge is the only system where the thing being practised is *auditing an AI*, and the thing being measured is *whether you scrutinised the things that mattered*.

## 5. Is the wedge defensible?

| Moat candidate | Strength | Honest assessment |
|---|---|---|
| **Materiality-graded scenario library** (defects tagged by consequence, validated by practitioners) | **Strong** | The real asset. Slow and expensive to build; requires domain practitioners. Not reproducible by prompt engineering. |
| **Measurement model** (materiality-weighted scrutiny, assisted−unassisted gap) | Moderate–Strong | Conceptually copyable, but the norming data to interpret a score accrues only with usage. |
| Attempt-first forced interaction | Weak | Published design pattern (B3). Copyable in a sprint. |
| Longitudinal capability data per role | Strong over time | Classic data network effect; zero at launch. |
| Brand / distribution | Weak | We have none. |

**Conclusion.** The defensibility is in the **scenario library and the norming data**, not the interaction design. A category incumbent — most plausibly an AI role-play vendor extending from "simulate a human" to "simulate an AI deliverable," or a Big-4 firm productising an internal programme — could enter within roughly two quarters. That is stated plainly rather than hidden; see `05_product_spec.md` §Business model for how a pilot-first wedge builds the library faster than a generalist would.
