# 10 — Red Team: trying to kill SkillForge

> Each criticism is stated in its strongest form, then answered with evidence, a severity rating, a mitigation, and — where warranted — an actual change to the product. Four criticisms **did** change the design. Two remain unresolved and are declared as risks.

---

### R1. "Entry-level tasks were never actually a good way to learn. You are romanticising drudgery."
**Severity: High — this attacks the premise.**

**Steel-manned.** Much junior work was repetitive, low-feedback and inefficient. Nobody learned judgement from re-keying numbers. If the old apprenticeship were effective, seniors would not complain about juniors' judgement, which they always have.

**Response.** Partly correct, and we concede it. Our claim is *not* that the old tasks were good pedagogy. Cook et al. (92 studies) show that what makes practice work is a specific feature set — feedback, repetitive practice, mastery learning, range of difficulty — most of which the old apprenticeship supplied *accidentally and unevenly*. The defensible claim is narrower: the old model delivered volume of exposure plus a senior's markup, and AI removed the volume while leaving the markup pointed at the document.

**Change made.** We stopped arguing "restore the old reps." The product explicitly does **not** recreate obsolete production work, and `05_product_spec.md` says so. We claim to recreate the *developmental function*, more deliberately than the original ever did.

---

### R2. "Simulation cannot replace real work."
**Severity: Medium.**

**Response.** Agreed, and we never claim it does. Cook et al. found simulation effective versus no intervention and with transfer to patient outcomes — as a *complement* under specific design conditions. SkillForge is positioned as practice around real work, not instead of it. Its own transfer test is explicitly a proxy, and `07` treats real-file rework as a separate, weaker-inference measure.

**Unresolved residue.** Whether scrutiny practised on authored artifacts transfers to live files under real time pressure is untested. It is H4, our primary endpoint.

---

### R3. "AI cannot reliably evaluate judgement. Your scores are noise dressed as measurement."
**Severity: High — this attacks the core claim.**

**Response, and the most important design decision in the project.** We agree that an LLM judging "good judgement" from prose is unreliable. That is exactly why **the model never decides what matters.** Materiality is authored per scenario, practitioner-validated, and scored by deterministic arithmetic. The LLM only analyses *reasoning* and generates questions. The scoring architecture enforces this split in code (`06` §4).

**Change made.** The whole scoring model was restructured around this objection. What is measured is not "judgement" in the abstract but a narrow, checkable behaviour: *did you flag the elements that change the decision, and did you leave alone the ones that don't?*

---

### R4. "Managers will not trust AI-generated skill evaluations."
**Severity: Medium.**

**Response.** They should not, and the product does not ask them to. The manager view contains **no individual scores at all** — only cohort defect-class patterns. Managers are given a coaching agenda, not a verdict on a person. Every learner-facing score opens onto the specific decisions behind it, so it is auditable rather than oracular.

---

### R5. "Employees will experience this as surveillance."
**Severity: High — and it would be fatal.**

**Response.** The risk is real. Mitigations are structural, not cosmetic: nothing outside SkillForge scenarios is observed; no communications are ingested; the employee sees their own profile first and always; managers get aggregates only; practice data is excluded by policy from promotion, rating and termination; in the prototype data never leaves the browser.

**Change made.** The "no ranking" rule was promoted from an ethics statement to a **design requirement with an evidence base**: Kluger & DeNisi show self-directed feedback is where feedback actively harms performance. Ranking would not merely feel bad, it would break the intervention.

**Residual risk.** A customer could demand person-level export. Refusing that is a commercial decision the product has to be willing to make, and it should be contractual.

---

### R6. "This is just an LMS with better copy."
**Severity: Medium-High — the category-death objection.**

**Response.** Three structural differences an LMS cannot copy without becoming a different product: (a) the unit of practice is *an AI's flawed work product*, not content; (b) the measure is *materiality-weighted scrutiny*, not completion or quiz score; (c) the headline metric is *unassisted and transfer* performance, because assisted fluency is not learning (Bjork). An LMS optimises completion, which B1 shows is orthogonal to the capability.

---

### R7. "Why not just give juniors better mentorship?"
**Severity: Medium — and it is the right question.**

**Response.** Mentorship is the better intervention where it exists. It does not exist at the required volume: only **53%** of entry-level workers strongly agree their manager supports capability building (WEF/PwC, n=9,394). Senior time is the scarcest resource in a GCC, and AI increased senior throughput without increasing senior review capacity. SkillForge is explicitly positioned as **making scarce mentorship better targeted** — the manager view is a coaching agenda — not as replacing it.

---

### R8. "The problem is not severe enough to fund."
**Severity: Medium.**

**Response.** The strongest counter is B1: a quarter of early-career professionals performing *below* an AI-only baseline is a present-tense productivity and risk fact, not a 2030 forecast. In a regulated credit function, a missed covenant breach has a named cost. And KPMG — having run the study — built an internal programme in response, which is the clearest available evidence of willingness to pay.

---

### R9. "Could SkillForge make things worse?"
**Severity: Medium. Taken seriously.**

Three mechanisms by which it could backfire:
1. **Over-correction training.** Teaching people to challenge AI could raise false-flag rates and destroy correct work. → Mitigated by scoring decoys and penalising over-correction; the Exception Lab explicitly trains restraint.
2. **Feedback harm.** >⅓ of feedback interventions reduce performance (C5). → Mitigated by task-level, evidence-linked feedback and no person-level comparison.
3. **Gaming.** Learners learn the scenario library rather than the skill. → Mitigated by held-out transfer scenarios and generated variation; this is H4.

---

### R10. "Financial services is too regulated for a student prototype."
**Severity: Low-Medium.**

**Response.** Regulation is why the wedge works — materiality is professionally defined, so scoring is defensible. The prototype uses entirely synthetic borrowers and touches no customer data, no model-risk-managed system and no production decision. A real deployment would need model-risk sign-off for the LLM components, which is precisely why materiality scoring is deterministic.

---

### R11. "There is a simpler non-AI solution: a checklist."
**Severity: Medium — the most uncomfortable objection.**

**Response.** A checklist is a genuinely good partial solution and we should say so rather than pretend otherwise. But it fails on three counts. (a) Checklists teach *compliance*, not *allocation* — the skill is deciding where to look when the list does not cover the case. (b) Checklists cannot handle the wrong-premise case, which is invisible to any item-by-item check (Meridian scenario). (c) A checklist gives no feedback on the quality of your review, which is the actual missing loop. **Honest concession:** for the easiest defect classes — stale data, missing affiliate — a checklist would capture much of the value at a fraction of the cost, and a serious pilot should include a checklist arm.

---

### R12. "Your core mechanic is disliked."
**Severity: Medium. Established fact, not speculation.**

Buçinca et al. found users rated the overreliance-reducing designs *least* favourably. We cannot design this away.

**Change made.** The forcing step is kept to one decision plus one rationale; the payoff is made visible immediately in the debrief; the Growth Profile rewards unassisted wins so the friction visibly buys something; and `07` commits to reporting satisfaction **even if it is worse than the control arm**.

---

## Verdict

| Criticism | Survived? | Product changed? |
|---|---|---|
| R1 Romanticising drudgery | Yes, with concession | **Yes — reframed around developmental function** |
| R2 Simulation ≠ real work | Yes, scoped | No (already scoped) |
| R3 AI can't judge judgement | Yes | **Yes — deterministic materiality, LLM restricted to reasoning** |
| R4 Manager trust | Yes | **Yes — no individual scores in manager view** |
| R5 Surveillance | Yes | **Yes — no-ranking promoted to design requirement** |
| R6 Just an LMS | Yes | No |
| R7 Just mentor better | Yes, repositioned | Positioned as targeting scarce mentorship |
| R8 Not severe enough | Yes | No |
| R9 Could backfire | Yes, mitigated | Decoy scoring already central |
| R10 Regulation | Yes | No |
| R11 Checklist | **Partially — concede overlap** | Pilot should add a checklist arm |
| R12 Disliked mechanic | Yes, with cost | Friction minimised; satisfaction reported honestly |

**The idea survives red-teaming, but not unchanged.** The two objections that still have force are R2/H4 (transfer is unproven) and R11 (a checklist captures some of the value more cheaply). Both are empirical questions with a stated test, not hand-waves — and the concept should be judged on whether it answers them, not on whether it dodged them.
