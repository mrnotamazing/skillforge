# 13 — Self-Evaluation

Scored honestly. A self-assessment that returns straight 9s is evidence of nothing.

## 1. Raw scores (1–10)

| Dimension | Score | Justification |
|---|---|---|
| **Desirability** | **8** | Employee pain is documented at scale (57% / 53% / 51%, n=9,394) and the failure is measured, not forecast (n=523). Held back from 9 because we have not interviewed a single real analyst — all persona detail is synthesised from published research. |
| **Feasibility** | **9** | Built and verified end to end: forced attempt, ladder, materiality scoring, debrief, transfer test, three dashboards, no console errors, runs offline. Not a mockup. Short of 10 because scenario authoring is expensive and unautomated. |
| **Viability** | **7** | Clear buyer, real budget line, and a Big-4 firm building the same thing internally is strong willingness-to-pay evidence. But the moat is the scenario library, not the interaction, and an incumbent could enter in two quarters. Honest 7. |
| **AI necessity** | **8** | Reasoning analysis, adaptive critique, scenario and exception generation all genuinely require a model. Deducted because the shipped demo runs deterministically, and because the highest-integrity part of the system — materiality scoring — is deliberately *not* AI. |
| **OB theoretical fit** | **9** | A causal model with named constructs, specified mechanisms and moderators; four theories each mapped to a specific module; one theory rejected on meta-analytic grounds; a guardrail derived from feedback theory. |
| **Novelty** | **8** | "Practise auditing an AI's work product, scored by materiality" is genuinely unoccupied — every competitor simulates a human counterpart. The construct *scrutiny allocation* is our formulation. Not 9+ because the components (forcing functions, scaffolding, transfer tests) are all published. |
| **CV value** | **9** | Research depth, a falsification posture, a written red-team, and a working build. Rare combination at student level. |
| **Prototype quality** | **8** | Polished, responsive, coherent B2B design; real interaction depth. Deducted for no persistence beyond localStorage, no authoring UI, and only three scenarios. |
| **Ethical defensibility** | **9** | Guardrails are evidence-derived rather than asserted; limitations are declared in-product, not just in docs; no fabricated results anywhere. |
| **Presentation WOW** | **8** | The over-correction reveal and the fabricated-waiver transfer test are genuinely memorable. Not 9 because the wow is intellectual rather than visual — there is no single arresting image. |

## 2. Weighted score

| Criterion | Weight | Score | Weighted |
|---|---|---|---|
| Desirability | 25% | 8 | 20.0 |
| Feasibility | 20% | 9 | 18.0 |
| Viability | 20% | 7 | 14.0 |
| Theory fit | 20% | 9 | 18.0 |
| Novelty / CV value | 15% | 8.5 | 12.75 |
| **Total** | **100%** | | **82.75 / 100** |

## 3. What most limits the score

**Viability (7) is the binding constraint**, and it is dragged down by one specific gap: *we have no evidence a buyer would pay, from a buyer*. Everything else in the project is grounded in primary sources; the commercial case is grounded in inference.

The second limiter is **Desirability's missing primary data** — the persona is well-evidenced but entirely synthesised.

## 4. The single change that would most improve this

> **Interview five real early-career analysts and one L&D lead in a BFSI GCC, and put verbatim quotes into slide 7 and the desirability case.**

Why this and not more product: a further module raises Feasibility (already 9) and does nothing for Viability (7) or Desirability (8) — the two weakest weighted contributors, together carrying 45% of the score. Six conversations would plausibly move Desirability to 9 and Viability to 8, lifting the total to roughly **86**. No amount of additional code does that.

**Second-best change:** run the H2 test on 15 analysts — correlate scrutiny scores against an existing domain assessment. If the correlation is low, that is the single most persuasive slide in the deck, because it empirically demonstrates the capability is *not* what current training measures.

## 5. Status of that change

**Not done, and honestly out of reach here.** It requires access to real employees in a real GCC, which is a fieldwork task, not a build task. It is recorded as the top recommendation rather than quietly omitted, and slide 7 is designed so verbatim quotes can be dropped straight in.

What *was* done instead, within reach: the desirability argument was rebuilt on the strongest available published primary data (n=9,394 employee survey; n=523 field study) rather than on assertion, and the persona is explicitly labelled as synthesised from those sources rather than presented as a real interview.

## 6. Against the three evaluator tests

| Evaluator | Test | Where it is met |
|---|---|---|
| **Professor** | "This is clearly an Organisational Behaviour problem" | `03` — causal model, constructs, moderators, four theories mapped to mechanisms, one rejected on meta-analytic grounds |
| **Industry expert** | "I can see why HR would pay for this" | The alternative is falsified (AI literacy didn't predict performance), manager bandwidth is the constraint (53%), and a Big-4 firm built it internally |
| **Technical evaluator** | "AI is genuinely necessary here" | `06` §4 — per-feature audit, plus the stronger signal that we deliberately *excluded* AI from materiality scoring and enforced that in code |

## 7. Remaining weaknesses, stated plainly

1. No outcome data. None. The validation plan is a design, not a result.
2. No primary user research.
3. Three scenarios — enough to demo, nowhere near enough to deploy.
4. Scenario authoring is manual and expensive; the generation capability is architected but not built.
5. Transfer to real files is untested and is the concept's main empirical risk.
6. A checklist would capture some of the value more cheaply for the easiest defect classes (see `10` R11).
