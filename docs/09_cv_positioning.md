# 09 — CV & Portfolio Positioning

## The one-line CV entry

> **SkillForge — AI apprenticeship system for early-career judgement.** Designed and built a working product that measures whether junior analysts can evaluate AI-generated work, grounded in a 523-person field study, mapped to four OB theories, red-teamed against 12 objections, and specified with a pre-registered validation design.

## Longer version (for a portfolio page)

> Built an end-to-end prototype addressing a measured failure in AI-enabled knowledge work: in a field study of 523 early-career professionals, a quarter performed *below* an AI-only baseline, and foundational skills did not predict who. Identified the discriminating capability as **scrutiny allocation** — where limited verification effort is directed — and made it measurable through materiality-weighted scoring over defect-seeded work artifacts.
>
> Implemented a cognitive forcing function (independent judgement committed before assistance unlocks), a five-rung scaffolding ladder with enforced fading, and a transfer test that operationalises "synthetic readiness" as the assisted-minus-unassisted performance gap.
>
> Drove four design changes directly from disconfirming evidence — including rejecting deliberate practice as a framing theory after a meta-analysis showed it explains <1% of performance variance in professions, and converting a no-ranking privacy guardrail into an engineering requirement on feedback-theory grounds.

## What makes this CV-worthy rather than a class project

| Signal | Evidence in this repo |
|---|---|
| **Changed its mind on evidence** | `01` §5 documents five findings that altered the concept, including dropping the displacement framing and demoting a theory we had planned to headline |
| **States what it cannot claim** | `01` §6 — nine explicit non-claims. Most student projects have none |
| **Falsifiable** | `02` §7 and `07` §6 pre-state the conditions under which the concept should be abandoned |
| **Red-teamed in writing** | `10` — 12 objections steel-manned; four changed the product; two declared unresolved |
| **Architecture encodes an argument** | `06` §4 — materiality is deterministic *by design*, because LLM judgement scoring is unreliable. The critique is answered in code, not in prose |
| **Working, not mocked** | Full loop verified in a real browser: forced attempt → ladder → scoring → debrief → transfer test → dashboards |
| **Honest about its own data** | Every dashboard is labelled synthetic; no fabricated results anywhere |

## Interview talking points

**If asked "what's the hardest problem you solved?"**
> Making judgement measurable without pretending an LLM can grade judgement. The answer was to split the problem: materiality is authored and practitioner-validated and scored deterministically; the model only analyses reasoning and generates questions. That boundary is enforced in the code, and it's what makes the scores defensible in a regulated function.

**If asked "what did you get wrong?"**
> My starting thesis was that AI is eroding junior judgement. It isn't a claim the evidence supports — there's no longitudinal data, and the paper that names the phenomenon is explicitly conceptual and untested. What *is* established is a present-tense performance fact from a 523-person study. Swapping a speculative decay story for a measured one made the project both more honest and more persuasive.

**If asked "why would anyone buy this?"**
> Because the obvious alternative is falsified. The standard response to this problem is AI-literacy training, and the study shows AI literacy didn't separate the people who added value from the people who subtracted it. That's an unusually clean argument: the incumbent solution provably doesn't address the mechanism.

**If asked "what would you do next?"**
> Run the pilot in `07` — specifically H2, whether scrutiny scores are only weakly correlated with existing domain assessments. If they correlate highly, I've built an expensive knowledge quiz and should stop. That's the test I'd want to run first precisely because it's the one that could kill it.

## Skills this demonstrates

**Research** — primary-source review across OB, learning science and human-factors literature; evidence grading; falsification.
**Product** — narrow wedge selection by weighted decision table; module architecture; competitive positioning with an honest moat assessment.
**Engineering** — React/TypeScript app, provider abstraction with graceful degradation, deterministic scoring engine, browser-verified.
**Ethics** — guardrails derived from evidence rather than asserted; declared limitations.
