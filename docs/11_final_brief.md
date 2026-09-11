# 11 — Final Product Brief

| # | Item | |
|---|---|---|
| **1** | **Product name** | **SkillForge** — *the Judgement Layer for AI-Enabled Work* |
| **2** | **One line** | An apprenticeship layer that teaches early-career analysts where to aim their scrutiny when an AI has already done the work — and measures whether they can still do the job when the AI is taken away. |
| **3** | **Target industry** | Banking & financial services, specifically Global Capability Centres in India (1,700+ centres; ~510k roles in 2026; 64% of new roles requiring AI/data skills; fresher intake growing) |
| **4** | **Target employee** | Credit & risk analysts, 0–24 months in role, who review AI-drafted credit memos |
| **5** | **Exact problem** | They have been moved from *producing* analysis to *reviewing* AI-generated analysis, and nothing in the workflow ever tells them whether the things they flag are the things that matter |
| **6** | **Root cause** | Task composition shifted production → review, but the feedback loop still returns signal on the **document**, never on the **review**. So scrutiny allocation cannot be learned on the job |
| **7** | **Why now** | 24.1% of early-career professionals perform *below* an AI-only baseline and 25.8% merely match it (n=523, KPMG/UT Austin, HBR 2026) — and foundational skills do not predict which group you land in, so existing training cannot fix it |
| **8** | **Employee impact** | Accountability without demonstrable competence; confidence uncoupled from correctness; competence contingent on scaffolding. Entry-level workers are the cohort least convinced their recent learning is advancing their career (57%) |
| **9** | **HR impact** | Early-career development no longer matches the redesigned role; AI-literacy training is falsified as the fix; manager coaching bandwidth is the binding constraint (only 53% of juniors feel supported in building capability) |
| **10** | **Organisational impact** | Material defects reaching credit decisions; senior review time consumed re-reviewing juniors' reviews; a promotion pipeline of reviewers who have never produced |
| **11** | **Core OB theories** | Cognitive Apprenticeship (Collins, Brown & Newman) · Social Cognitive Theory / Self-Efficacy (Bandura; Stajkovic & Luthans) · Feedback Intervention Theory (Kluger & DeNisi) · Automation Bias & Cognitive Offloading (Parasuraman & Manzey; Buçinca et al.). Supporting: Situated Learning, JCM/SDT, Human Capital Theory. **Deliberate Practice explicitly rejected** (<1% of variance in professions) |
| **12** | **Why existing solutions fail** | LMS measures completion, and knowledge was never the gap. AI role-play simulates a *human* counterpart, not an AI work product. AI tutors *are* the offloading mechanism. Coaching lacks volume and specificity. Explanations do not reduce overreliance (Buçinca) |
| **13** | **AI moat** | The defensible asset is the **materiality-graded scenario library** and the **norming data** to interpret a score — not the interaction pattern, which is published and copyable in a sprint. Stated plainly in `04` |
| **14** | **Product modules** | Role Evolution Map · Practice Engine · Assistance Ladder L0–L5 · Judgement & Calibration Engine · Exception Lab · Structured Debrief · Growth Profile · Manager View · HR/Workforce View |
| **15** | **MVP scope** | One role, one capability journey, three scenarios (baseline → exception → transfer), full ladder, reasoning capture, materiality-weighted feedback, calibration, debrief, growth profile, manager view, HR view, ethics page. Built and verified end to end |
| **16** | **Main user journey** | Brief → **forced independent attempt (assistance locked)** → commit decision + rationale + confidence → ladder unlocks L1–L5 → final submission → materiality-weighted debrief vs expert trace → exception case → **transfer test with assistance withdrawn** → growth profile showing the assisted/unassisted gap |
| **17** | **HR & manager journey** | Manager: cohort defect-class miss rates → over-trust vs over-challenge map → ranked coaching agenda. **No individual scores, no ranking.** HR: task-level role evolution incl. developmental reps lost → where training no longer matches the work → journey redesign and a proposed capability gate for sign-off authority |
| **18** | **Guardrails** | No covert monitoring, no communications ingestion, no wellbeing inference, no attrition prediction, no employee ranking, no promotion/termination use, no AI score presented as truth, no penalty for using AI. Employee sees own data first; managers see aggregates; every score opens onto its evidence |
| **19** | **Business model** | Paid pilot (one role family, one cohort of 40–60, one quarter, fixed fee) → per-seat annual licence per role family → scenario library extensions per role. Buyer: CHRO / Head of Early Careers / L&D, co-sponsored by AI Transformation. ROI presented as an **assumption-driven scenario model, never a forecast** |
| **20** | **Success metrics** | *Employee:* unassisted scrutiny precision & recall, material catch rate, over-correction, escalation accuracy, calibration error, scaffolding gap, delayed transfer performance. *Organisational:* rework rate, defect escape rate, manager review hours, time to independent sign-off |
| **21** | **CV line** | "Designed and built an AI apprenticeship system that measures whether junior analysts can evaluate AI-generated work — grounded in a 523-person field study, red-teamed against 12 objections, with a pre-registered validation design." |

---

## 22. The 30-second pitch

> AI didn't take the junior analyst's job. It took her practice — and promoted her straight to reviewer.
>
> A study of 523 early-career professionals found that a quarter of them performed *worse* than the AI working on its own. And the ones who failed weren't the ones who knew less — they scored the same or higher on domain knowledge and AI literacy. They scrutinised the wrong things, and nobody ever told them.
>
> SkillForge is the practice layer for that. It gives analysts real AI-drafted work with defects seeded at known materiality, makes them commit a judgement before any help unlocks, and then scores something no system currently scores: **the quality of their review.**

## 23. The 2-minute pitch

**The shift.** Entry-level work didn't disappear — it changed shape. Your junior analyst used to spread the financials and draft the memo, and her VP's markup taught her what mattered. Now the AI drafts it in ninety seconds and she reviews it. She has been promoted to reviewer on day one, without ever having been a producer.

**The failure.** The KPMG/UT Austin field study measured 523 early-career professionals against an AI-only baseline. Half beat it. A quarter merely matched it. And a quarter came in *below* it — actively making the AI's work worse. The finding that should worry every CHRO: those people scored equal or higher than the top group on every foundational skill measured. More training is not the answer, because knowledge was never the gap.

**The capability.** What separates them is a single thing: **scrutiny allocation** — directing limited verification effort to where probability of error times consequence of error is highest. Delegators allocate none. The below-baseline group allocates plenty, aimed badly. Amplifiers aim well. It is learnable, and it is measurable — but only if someone gives feedback on the *review*, which no workflow does.

**The product.** SkillForge presents a realistic AI-drafted credit memo with defects seeded at known materiality — plus statements that look wrong and are right. Assistance is locked until the analyst commits a decision and a written rationale; that forcing function is the one intervention experimentally shown to reduce overreliance. Then scaffolds release in graded steps, and in the transfer test they are withdrawn entirely.

**The measure.** We score materiality-weighted precision and recall, over-correction, calibration and escalation. The headline number is the gap between assisted and unassisted performance — because fluent assisted output is not evidence of learning.

**The guardrail.** Managers never see an individual score. That is not squeamishness: a third of feedback interventions make performance *worse*, and the harm concentrates exactly where feedback points at the person instead of the task. Ranking would break the thing we are trying to build.

## 24. The 5-minute demo storyline

| # | Beat | What you show | The line |
|---|---|---|---|
| 1 | **The hook** (0:00) | Landing page | "AI didn't take her job. It took her practice." |
| 2 | **The evidence** (0:30) | 50.1 / 25.8 / 24.1 cards | "A quarter performed *below* the AI. And they weren't the ones who knew less." |
| 3 | **The shift** (1:00) | Before / After / With SkillForge | "Feedback still lands on the document. Nobody ever evaluates her review." |
| 4 | **The forced attempt** (1:30) | Kestrel memo; try to open the ladder — it's locked | "You commit first. This is the only intervention shown to reduce overreliance." |
| 5 | **The trap** (2:15) | Flag the covenant line **and** the inventory-days line | "That second one is the trap — and it's the one everyone takes." |
| 6 | **The reveal** (2:45) | Debrief: Caught / Missed / **Over-corrected — the AI was right** | "You caught the breach. You also destroyed something that was correct. That's the 24.1%." |
| 7 | **The expert trace** (3:15) | How a senior analyst reads it | "This is what the markup used to teach — made visible again." |
| 8 | **The wow** (3:45) | Transfer test: no hints, new sector, fabricated waiver | "No assistance at all. And this memo cites a covenant waiver that does not exist — precisely dated, perfectly formatted, entirely invented." |
| 9 | **The number** (4:15) | Growth profile: scaffolding gap | "The gap between assisted and unassisted is the part of her competence that belongs to the tool." |
| 10 | **The buyer** (4:35) | Manager view, then HR role evolution | "No rankings — by design. Managers get a coaching agenda. HR gets the one column no HR system holds: which developmental reps disappeared." |
| 11 | **The close** (4:55) | Ethics page | "Developmental, never disciplinary. And every number in here is synthetic — we're showing you an instrument, not results we don't have." |
