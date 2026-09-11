# 01 — Research Review and Evidence Base

**Project:** SkillForge — the Judgement Layer for AI-Enabled Work
**Purpose:** Establish, from primary and authoritative sources, whether the problem SkillForge addresses is real, what exactly is at risk, and what the evidence does *not* support.
**Evidence cut-off:** September 2026.

> **Reading note.** This document is deliberately written to be falsifiable. Section 6 lists what we must **not** claim. Several of our own initial assumptions did not survive contact with the evidence; Section 5 records what changed and why.

---

## 1. How to read the evidence grades

Every source is graded on two axes.

**Evidence type**
| Code | Meaning |
|---|---|
| **CAUSAL** | Randomised or quasi-experimental design supporting a causal claim |
| **CORR** | Observational / survey / correlational |
| **META** | Meta-analysis or systematic review |
| **CONCEPT** | Theoretical or conceptual paper; no new data |
| **INDUSTRY** | Institutional or consultancy research; method partially disclosed |
| **ANEC** | Journalism, single cases, practitioner commentary |

**Strength** — `High` / `Moderate` / `Low`, reflecting design quality, sample, transparency of method, and directness to our claim. An INDUSTRY source with 9,394 respondents can outrank a CAUSAL source with n=16 *for population-level claims*, and vice versa for mechanism claims.

---

## 2. The evidence matrix

### Block A — Is entry-level work actually changing?

| # | Source | Year | Finding (exact) | Method / sample | Type | Strength | Relevance to SkillForge |
|---|---|---|---|---|---|---|---|
| A1 | [WEF & PwC, *AI and the Future of Entry-Level Work: A Framework for Safeguarding and Reinventing Early Career Pathways*](https://www.weforum.org/publications/artificial-intelligence-and-the-future-of-entry-level-work-a-framework-for-safeguarding-and-reinventing-early-career-pathways/) | 2026 | More than **1 in 3 young workers** are in occupations with medium-to-high exposure to AI-driven task change. Framework spans four dimensions: job access, job design, talent pipelines, education alignment. Calls for a shift to **capability-based models of development**. | Global data + senior leader interviews + 9,000+ entry-level workers, 48 countries | INDUSTRY | High | Establishes scale and legitimises *job design* (not training) as the lever. Our product is a job-design intervention. |
| A2 | [WEF, *How AI is Changing Early Careers: A View from Entry-Level Workers* (Executive Briefing)](https://reports.weforum.org/docs/WEF_Briefing_AI_and_Entry-Level_Jobs_January_2026.pdf) | Jan 2026 | Entry-level workers are the cohort **least** likely to strongly believe the skills they learned in the past year are helping their career (**57%**, vs 63% managers, 69% senior executives). Only **53%** strongly agree their **manager supports them in building new capabilities**. Only **51%** agree their job gives them freedom to use their own initiative and judgement. AI "removes the structured, repetitive tasks that traditionally helped them build confidence and understand workplace culture." Work is shifting "from fixed processes to applying **judgment**, creativity and collaboration alongside technology." | PwC Global Workforce Hopes & Fears 2025, **n=9,394 entry-level employees**, 28 sectors, 48 countries + WEF Global Dialogue (200+ experts) | INDUSTRY | High | **The single most useful source.** Gives us (a) employee-felt pain, (b) the manager-bandwidth gap that makes this HR's problem, (c) WEF's own language that AI removes confidence-building reps. |
| A3 | [Brynjolfsson, Chandar & Chen, *Canaries in the Coal Mine?*](https://digitaleconomy.stanford.edu/publication/canaries-in-the-coal-mine-six-facts-about-the-recent-employment-effects-of-artificial-intelligence/) (Stanford Digital Economy Lab) | 2025–26 | Employment of **22–25 year-olds in AI-exposed occupations is ~19% below** its counterfactual path; no comparable gap for experienced workers. Operates through **reduced hiring**, not separations. Declines concentrate where AI **substitutes**; where it **complements**, employment is flat or rising. **No evidence of economy-wide displacement.** | High-frequency individual payroll records, ADP (largest US payroll provider) | CORR (strong quasi-exp.) | High | Confirms the effect is real, *young-specific*, and **conditional on substitution vs complementation**. This nuance forced a change to our thesis (§5). |
| A4 | [Anthropic Economic Index](https://www.anthropic.com/research/economic-index-june-2026-report) | 2025–26 | Augmentation exceeds automation in observed usage (~**52% augmented vs 45% automated**); at task level one analysis reports **78.7% augmentation vs 21.3% automation**, with **feedback loops (32.5%)** the dominant augmentation mode. | Privacy-preserving analysis of large-scale usage | INDUSTRY | Moderate | Counter-evidence to naive displacement. Most AI work is **iterative human–AI refinement** — i.e. reviewing and redirecting. That *is* the new junior job. |
| A5 | [Axios, *AI threatens Big Law's talent pipeline*](https://www.axios.com/2026/05/02/ai-lawyers-law-firms-artificial-intelligence) + sector reporting | 2026 | First-pass document review, contract analysis and legal research now run on AI at major firms. Quoted concern: "If more and more of that work that trains junior associates is being automated, then there's no real material anymore for them to train on." Reports of entry-level postings in law/consulting/IB down ~35% since 2023. | Journalism; interviews | ANEC | Low–Moderate | Useful colour and executive quotes. The 35% figure is **secondary and not independently verified — do not present as fact.** |
| A6 | India GCC market reporting (FirstMeridian, NASSCOM-linked trackers) | 2026 | 1,700+ GCCs in India; ~**510,000 GCC roles in 2026**; **64%** of new GCC roles require AI/data/automation skills; **64% of GCCs forecast up to a 20% increase in fresher hiring**. | Industry surveys; methodology partially disclosed | INDUSTRY | Low–Moderate | **Critical for wedge selection.** In Indian GCCs fresher intake is *growing* — so the problem there is not job loss but **capability formation at volume**. Better commercial story, avoids contested doom narrative. |

### Block B — What actually goes wrong when juniors work with AI?

| # | Source | Year | Finding (exact) | Method / sample | Type | Strength | Relevance |
|---|---|---|---|---|---|---|---|
| **B1** | [Agarwal, Barua, Wen, Song (McCombs/UT Austin) & Puvvada (KPMG), *Research: Why Some Junior Employees Work Well with AI — and Others Don't*, HBR](https://hbr.org/2026/07/research-why-some-junior-employees-work-well-with-ai-and-others-dont) · [McCombs summary](https://news.mccombs.utexas.edu/research/shaping-early-career-success-in-the-age-of-ai/) · [KPMG release](https://kpmg.com/us/en/media/news/shaping-early-career-success-in-the-age-of-ai.html) | Jul 2026 | Against an **AI-only baseline**: **AI Amplifiers 50.1%** (beat AI), **AI Delegators 25.8%** (matched AI), **AI Apprentices 24.1%** (performed **below** AI alone). Amplifiers orchestrated workflow, **framed problems**, anchored in **domain frameworks**, refined across rounds. Delegators scored *lowest* on foundational skills but avoided harm by accepting output with minimal scrutiny. **Apprentices matched Amplifiers on foundational skills and scored higher than Delegators — yet landed below baseline, because they "critiqued AI output ineffectively, often identifying irrelevant issues or misdirecting the system."** Traditional capability measures **did not** explain the gap. | **Field study, n=523** early-career professionals at KPMG LLP, domain-realistic client-type task with a purpose-built AI agent, AI-only baseline comparison | CAUSAL-ish (field study w/ baseline) | **High** | **The keystone source.** It (a) proves a present-tense performance problem, (b) **falsifies "more training / more AI literacy" as the fix**, (c) identifies the true discriminator as *how scrutiny is directed*, and (d) gives us the exact failure mode to design against. |
| B2 | [Lee, Tankelevitch et al. (Microsoft Research & Carnegie Mellon), *The Impact of Generative AI on Critical Thinking*](https://www.microsoft.com/en-us/research/publication/the-impact-of-generative-ai-on-critical-thinking-self-reported-reductions-in-cognitive-effort-and-confidence-effects-from-a-survey-of-knowledge-workers/) | 2025 | **Higher confidence in GenAI → less critical thinking; higher self-confidence → more critical thinking.** GenAI **shifts** critical thinking from problem-solving toward **information verification, response integration and task stewardship**. Reduced reported effort across knowledge, comprehension, application, analysis, synthesis, evaluation. | Survey, **n=319** weekly GenAI users at work; **self-report** | CORR | Moderate | Names the new job precisely — *verification and stewardship*. The self-efficacy link is a direct OB bridge. **Self-report is a real limitation.** |
| B3 | [Buçinca, Malaya & Gajos, *To Trust or to Think: Cognitive Forcing Functions Can Reduce Overreliance on AI*, ACM CSCW](https://dl.acm.org/doi/10.1145/3449287) | 2021 | **Adding explanations to AI decisions does not reduce overreliance** (may increase it). Three **cognitive forcing** interventions **significantly reduced overreliance** vs. explainable-AI baselines. Benefit was larger for people **higher in Need for Cognition**. **Trade-off: participants gave the *least favourable* subjective ratings to the designs that reduced overreliance the most.** | Controlled experiment, **n=199** | CAUSAL | High | **Direct experimental warrant for our core mechanic** (commit to an independent judgement *before* AI assistance unlocks). Also a blunt warning: the effective design is the disliked design — adoption must be engineered. |
| B4 | [Parasuraman & Manzey, *Complacency and Bias in Human Use of Automation: An Attentional Integration*, Human Factors](https://journals.sagepub.com/doi/10.1177/0018720810376055) | 2010 | Automation bias yields both **omission** errors (missing what automation missed) and **commission** errors (following wrong automated recommendations). Complacency emerges under multi-task load, appears in **both novices and experts**, and **"cannot be overcome with simple practice."** | Integrative review + model | META/CONCEPT | High | Establishes the risk mechanism as robust and **not** fixable by awareness alone — justifying designed feedback on scrutiny behaviour rather than a warning slide. |
| B5 | [METR, *Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity*](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) | 2025 | Developers were **19% slower** with AI tools, yet **believed they were 20% faster** (forecast +24%) — a ~**43 percentage-point calibration error**, direction reversed. | **RCT**, 16 experienced OSS developers, 246 real tasks in their own large repositories | CAUSAL | Moderate (High internal, Low external) | **Self-reports of AI benefit are unreliable.** Justifies measuring *behaviour*, not confidence surveys. **n=16 experienced devs — must not be generalised to juniors.** |
| B6 | HCI literature on reliance & calibration (e.g. [*Knowing About Knowing*, CHI 2023](https://dl.acm.org/doi/fullHtml/10.1145/3544548.3581025); [*Cognitive Offloading Impairs Confidence Calibration in Human-AI Teams*, CHI 2026](https://dl.acm.org/doi/10.1145/3772363.3798384)) | 2023–26 | Users often lack the **metacognitive sensitivity** to judge their own competence, producing inconsistent advice-taking. **AI agreement inflates confidence; disagreement deflates it — independent of actual team performance.** Logic-unit explanations failed to improve calibration. | Controlled HCI experiments | CAUSAL | Moderate | Confidence tracks *agreement with AI*, not correctness. Therefore confidence must be **measured against outcomes**, never self-reported alone. |

### Block C — How is professional judgement actually built?

| # | Source | Year | Finding (exact) | Method / sample | Type | Strength | Relevance |
|---|---|---|---|---|---|---|---|
| C1 | [Collins, Brown & Newman, *Cognitive Apprenticeship: Making Thinking Visible*](https://www.psy.lmu.de/isls-naples/intro/all-webinars/collins/cognitive-apprenticeship.pdf) | 1989/1991 | Six methods: **modelling, coaching, scaffolding (with fading), articulation, reflection, exploration.** Core premise: expertise transfers only when **expert thinking is made visible**. | Instructional design framework | CONCEPT | High (as design theory) | **The product's architecture.** AI produces the artifact *silently* — it removes exactly the visible reasoning this model requires. SkillForge re-inserts it. |
| C2 | [Sinha & Kapur, *When Problem Solving Followed by Instruction Works: Evidence for Productive Failure*, Review of Educational Research](https://journals.sagepub.com/doi/10.3102/00346543211019105) | 2021 | Problem-solving **before** instruction beat instruction-first on **conceptual understanding and transfer, d = 0.36** (95% CI 0.20–0.51), without harming procedural knowledge. Effect **increases with fidelity** to PF design principles. | **META**: 53 studies, 166 comparisons, **12,000+ participants** | META | High | Warrants "attempt first, help second." **Caveat: evidence is strongest in STEM and weaker for domain-general skills and non-STEM — flagged in §6.** |
| C3 | [Bjork & Bjork, *Introducing Desirable Difficulties into Practice and Instruction*](https://www.unh.edu/teaching-learning-resource-hub/sites/default/files/media/2023-06/itow-introducing-desirable-difficulties-into-practice-and-instruction-bjork-and-bjork.pdf) | 1994–2011 | **Performance during learning and learning itself are dissociable, even inversely related.** Spacing, interleaving, retrieval practice, generation and varied practice depress immediate performance but raise delayed retention. Fluency produces an **illusion of mastery**. | Programmatic experimental research | CAUSAL/META | High | **The theoretical heart of our measurement claim:** smooth AI-assisted output is *not* evidence of learning. Justifies assessing unassisted and delayed transfer performance. |
| C4 | [Cook et al., *Technology-Enhanced Simulation for Health Professions Education*, JAMA](https://med.virginia.edu/medical-simulation-center/wp-content/uploads/sites/254/2016/01/2011JAMA_Cook_Meta-analysis.pdf) 306(9):978–88 | 2011 | Simulation vs. no intervention produced large effects on knowledge, skills and behaviours, with **effects on downstream patient outcomes (CI 0.34–0.66)**. Associated instructional-design features: **feedback, repetitive practice, mastery learning, distributed practice, range of difficulty, curricular integration.** | **META**: 92 eligible studies from 10,903 screened | META | High | **Feasibility evidence that simulated practice transfers to real performance** — and a ready-made design specification. |
| C5 | [Kluger & DeNisi, *The Effects of Feedback Interventions on Performance*, Psychological Bulletin 119(2)](https://www.researchgate.net/publication/232458848_The_Effects_of_Feedback_Interventions_on_Performance_A_Historical_Review_a_Meta-Analysis_and_a_Preliminary_Feedback_Intervention_Theory) | 1996 | Mean effect **d = .41**, but **over one-third of feedback interventions *decreased* performance.** Feedback that directs attention to the **self** rather than the **task** is where harm concentrates. | **META**: 607 effect sizes, 23,663 observations | META | High | **Turns our ethics guardrail into a design requirement.** Person-level scores and rankings are not merely creepy — they are the documented failure mode of feedback. Feedback must stay task- and process-level. |
| C6 | [Macnamara, Hambrick & Oswald, *Deliberate Practice and Performance*, Psychological Science](https://journals.sagepub.com/doi/abs/10.1177/0956797614535810) | 2014 | Deliberate practice explained **26% of variance in games, 21% music, 18% sports, 4% education, and <1% in professions**. Log-based (more valid) studies: ~5%. | **META** across domains | META | High | **Disconfirming evidence we are obliged to honour.** We therefore **do not** build the argument on deliberate practice. See §5.3. |
| C7 | Lave & Wenger, *Situated Learning: Legitimate Peripheral Participation* | 1991 | Learning is participation in a community of practice; newcomers move from periphery to centre by doing consequential work. | CONCEPT | CONCEPT | Moderate | Explains *why* removing the periphery task is costly — and why simulation must be **work-shaped**, not course-shaped. |

### Block D — Organisational Behaviour mechanisms

| # | Source | Year | Finding (exact) | Method / sample | Type | Strength | Relevance |
|---|---|---|---|---|---|---|---|
| D1 | [Bandura, *Social Foundations of Thought and Action* / Self-efficacy theory](https://psycnet.apa.org/record/1985-98423-000) | 1986/1997 | Self-efficacy derives from four sources, of which **enactive mastery experience** is the most powerful; efficacy shapes effort, persistence and goal choice. | CONCEPT (extensive support) | CONCEPT | High | If AI performs the enactive mastery, the junior does not acquire the efficacy. Core mechanism in our model. |
| D2 | [Stajkovic & Luthans, *Self-Efficacy and Work-Related Performance: A Meta-Analysis*, Psychological Bulletin 124](https://www.semanticscholar.org/paper/Self-efficacy-and-work-related-performance:-A-Stajkovic-Luthans/8b1a6a4fde431c561236402ab4788409a7fabe9d) | 1998 | Weighted average correlation **r = .38** between self-efficacy and work performance (**114 studies, k=157, N=21,616**). Concordance of measures was the key moderator. | META | High | Quantifies the efficacy→performance link that our mastery-experience argument depends on. |
| D3 | [Edmondson, *Psychological Safety and Learning Behavior in Work Teams*, ASQ](https://web.mit.edu/curhan/www/docs/Articles/15341_Readings/Organizational_Learning_and_Change/Edmondson_1999_Psychological_safety.pdf) + [Frazier et al. meta-analysis](https://www.sciencedirect.com/science/article/abs/pii/S1053482217300013) | 1999 / 2017 | Psychological safety predicts speaking up, error reporting, **feedback-seeking** and learning behaviour; meta-analysis across **117 studies** confirms links to information sharing and learning behaviour. | Field study + META | High | **Key moderator.** A junior who spots an AI error but fears looking incompetent for escalating produces the same outcome as one who missed it. |
| D4 | [Sarala, *The apprenticeship void: AI augmentation and entry-level displacement in knowledge work*, VILAKSHAN — XIMB Journal of Management 23(2)](https://doi.org/10.1108/XJM-05-2026-0030) | 2026 | Defines **apprenticeship void** = "the systematic absence of learning-rich task engagement that results when AI augmentation displaces the foundational work through which early-career knowledge workers have historically developed expertise." Three downstream constructs: **synthetic readiness** (competent performance contingent on AI scaffolding; inability to explain process or detect errors), **promotion fragility** (1–3 yrs), **pipeline thinning** (5–10 yrs). Four propositions P1–P4; moderators = task redesign, mentorship, learning culture. | **Conceptual paper — explicitly untested** | CONCEPT | Moderate (as framework) / **None (as evidence)** | Gives us precise academic vocabulary and an Indian-journal anchor. **"Synthetic readiness" is directly operationalisable as the assisted-minus-unassisted performance gap — this became our core metric.** Must be cited as *proposed*, never as demonstrated. |
| D5 | [WEF, *Future of Jobs Report 2025*](https://reports.weforum.org/docs/WEF_Future_of_Jobs_Report_2025.pdf) | 2025 | **39%** of workers' core skills will change by 2030 (down from 44% in 2023). **Analytical thinking** is the top core skill (7 in 10 employers). 77% of employers plan upskilling. | Employer survey, large global sample | INDUSTRY | Moderate–High | Buyer context: HR budget and mandate already exist; analytical thinking is the named priority. |
| D6 | Hackman & Oldham (Job Characteristics Model); Deci & Ryan (Self-Determination Theory) | 1976 / 2000 | Skill variety, task identity, autonomy and feedback drive internal motivation; competence, autonomy and relatedness drive intrinsic motivation. | CONCEPT | CONCEPT | High | Explains the *motivational* cost of pure review work: low task identity ("I didn't make this"), low autonomy, degraded feedback. |

### Block E — Existing solutions

| # | Source | Year | Finding | Type | Strength | Relevance |
|---|---|---|---|---|---|---|
| E1 | AI role-play/simulation vendor landscape (Retorio, Hyperbound, Second Nature, Zenarate, Quantified; LXP/LMS: Degreed, Docebo, Cornerstone; Workday's acquisition of Sana) | 2026 | The category simulates **human counterparts** — sales calls, cold calls, coaching conversations, contact-centre interactions — and scores **behavioural/communication** signals (tone, pace, word choice). | INDUSTRY | Moderate | **The gap is structural, not incremental.** Every incumbent simulates *talking to a person*. None simulates *auditing a machine's work product*. See `04_competitor_analysis.md`. |
| E2 | KPMG "You Can with AI: Next Level Learning" (B1 release) | 2026 | Response to their own study: skills assessments, personalised pathways, **real client scenario simulations**, on-the-job practice, AI champions network. | INDUSTRY | Moderate | A Big-4 firm building this internally is **market validation** — and evidence that buyers will pay. Also our most credible competitor archetype. |

---

## 3. What we know (high confidence)

1. **Entry-level task composition has shifted from production to review.** Juniors increasingly verify, integrate and steward AI output rather than produce first drafts (A1, A2, A4, B2).
2. **A large minority of juniors add zero or negative value in AI-enabled workflows *today*.** 25.8% matched the AI-only baseline; 24.1% fell below it (B1). This is measured, present-tense, and not a forecast.
3. **Foundational skills do not predict who succeeds with AI.** Domain knowledge, critical-thinking ability and AI literacy failed to separate the groups; the below-baseline group scored *equal or higher* than the top group (B1).
4. **The discriminator is how scrutiny is directed.** High performers frame problems, anchor in domain frameworks and critique iteratively; the below-baseline group critiqued but "identified irrelevant issues or misdirected the system" (B1).
5. **Overreliance on AI is robust, and explanations do not cure it.** Cognitive forcing functions do reduce it — but are disliked by the people they help (B3, B4).
6. **Self-reported AI benefit is unreliable.** A 43-percentage-point calibration error, with the sign reversed, in a controlled trial (B5). Confidence tracks agreement with AI rather than correctness (B6).
7. **Fluent performance is not learning.** Performance during acquisition and durable learning are dissociable and can be inversely related (C3).
8. **Simulated practice with feedback transfers to real performance**, given specific design features: feedback, repetitive practice, mastery learning, distributed practice, range of difficulty (C4).
9. **Feedback is not automatically good.** Over a third of feedback interventions reduce performance; harm concentrates when attention is directed at the self rather than the task (C5).
10. **Employees feel the developmental gap and managers are not closing it.** Entry-level workers are the least confident cohort that their recent learning is helping their career (57%); only 53% strongly agree their manager supports capability building (A2).
11. **Psychological safety gates the behaviour we care about** — speaking up, error reporting, feedback-seeking (D3).

## 4. What is plausible but not established

| Claim | Status | Why we cannot assert it |
|---|---|---|
| AI is causing a *longitudinal decline* in junior judgement | **Plausible, untested** | No longitudinal study tracks judgement in AI-exposed cohorts over time. B1 is cross-sectional. Sarala (D4) is explicitly conceptual. |
| "Synthetic readiness" exists as a measurable condition | **Plausible, proposed only** | D4 proposes it and calls for validated instruments; none exist. Our index is an *operationalisation proposal*, not a validated scale. |
| Promotion fragility and pipeline thinning | **Plausible, forecast** | Time horizons of 1–3 and 5–10 years (D4). No confirming data can exist yet. |
| Practising scrutiny allocation improves real on-the-job error detection | **Plausible by analogy** | Supported by C4 (simulation transfers in health professions) but never tested for AI-output review in financial services. **This is our pilot's primary hypothesis** (`07_validation_plan.md`). |
| Productive-failure effects hold for professional judgement tasks | **Uncertain** | C2's d=0.36 is strongest in STEM; explicitly weaker for domain-general skills and scarce for non-STEM. |
| Entry-level postings fell 35% in law/consulting/IB | **Unverified** | Secondary reporting only (A5). Cite the Stanford payroll analysis (A3) instead. |

## 5. Where the evidence changed our mind

### 5.1 We dropped the displacement framing
Our starting thesis leaned on "AI absorbs entry-level work." The evidence makes this **conditional, not general**: declines concentrate where AI substitutes and *disappear or reverse where it complements* (A3); observed usage is majority augmentation (A4); and in Indian GCCs fresher hiring is **growing** (A6).

> **Revised claim:** the entry-level job largely still exists — **its task mix moved from producing to reviewing.** This is better evidenced, present-tense, commercially safer, and directly actionable by HR.

### 5.2 We replaced "juniors lose judgement" with a measured, present-tense failure
"Juniors are becoming worse at judgement" is unproven and, given cross-sectional data, unprovable today. We replace it with B1's measured fact: **roughly half of early-career professionals add no value, or negative value, on top of an AI agent right now** — and the reason is *mis-targeted scrutiny*, not missing knowledge.

### 5.3 We demoted deliberate practice
Deliberate practice is the obvious theory to reach for and we intended to headline it. Macnamara et al. (C6) report it explains **<1% of performance variance in professions**. Although the estimate is contested on measurement grounds, we cannot responsibly headline it. **We anchor instead on cognitive apprenticeship, feedback intervention theory, self-efficacy and the automation-bias literature.** Deliberate practice appears only in limitations.

### 5.4 Our core guardrail became a design requirement
We expected "no employee ranking" to be an ethics concession. Kluger & DeNisi (C5) show self-directed feedback is where feedback *actively harms* performance. The guardrail is therefore **load-bearing engineering**, not compliance decoration.

### 5.5 We learned our core mechanic will be disliked
Buçinca et al. (B3) found users rated the overreliance-reducing designs **least favourably**. Effectiveness and likeability diverge. This is designed around explicitly (short forced steps, visible payoff, scores framed as evidence) rather than wished away.

## 6. What we must NOT claim

1. ❌ "AI is eroding junior employees' skills." — No causal or longitudinal evidence. Say: *juniors are being placed in review roles they have not been trained for.*
2. ❌ "AI is destroying entry-level jobs." — Contradicted in complementary occupations (A3) and in Indian GCCs (A6).
3. ❌ "SkillForge improves judgement by X%." — **No outcome data exists. All dashboard figures in the prototype are synthetic.**
4. ❌ "Synthetic readiness / promotion fragility are established phenomena." — Proposed constructs from a conceptual paper (D4).
5. ❌ "Our AI can measure judgement objectively." — LLM assessment of reasoning is noisy and unvalidated. We present evidence and let humans decide.
6. ❌ "Deliberate practice produces expertise in professional work." — Contradicted by C6.
7. ❌ "AI literacy training solves this." — Directly falsified by B1.
8. ❌ Any claim that simulation replaces real work. C4 supports simulation as a *complement* with specific design features.
9. ❌ Presenting the 35%-decline figure, or any vendor-marketing statistic, as established fact.

## 7. The gap this evidence opens

Putting the blocks together:

- The junior's job is now **reviewing AI output** (A1, A2, A4, B2).
- Success at that job depends on **where scrutiny is directed** (B1).
- **Nothing in the workflow teaches this.** Review work generates no feedback about whether *your critique* was well aimed — you see the outcome of the document, never the quality of your review of it.
- **Foundational training does not fix it** (B1), **explanations do not fix it** (B3), and **awareness does not fix it** (B4).
- What does work is **practice with targeted, task-level feedback, at graded difficulty, with support faded** (C1, C4) and **an independent attempt before assistance** (B3, C2, C3).
- And it must be **measured on unassisted and transfer performance**, because assisted fluency is not learning (C3, C5, B5).

No existing product occupies this space: incumbents simulate *conversations with humans* (E1), while the one organisation building something adjacent is a Big-4 firm doing it for itself (E2).

**That gap is SkillForge.**

---

### Source list
All URLs verified accessible September 2026. Where a source sits behind a paywall (HBR, ACM, JAMA, Emerald, Psychological Bulletin), findings were taken from the publisher abstract page and from the primary institution's own release (McCombs, KPMG, Microsoft Research, METR, Stanford Digital Economy Lab), which are cited alongside. Paraphrase throughout; no extended quotation.
