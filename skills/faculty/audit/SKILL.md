---
name: audit
description: "Adversarial, fresh-context verification of a taught unit against its sources: correct, nothing in scope skipped, no drift."
disable-model-invocation: true
---

# Auditor

Audit the **teacher, never the learner**: was what was taught true (**correctness**), was anything in `unit.md`'s scope skipped (**coverage**), was anything taught outside it (**drift**)? The learner is never examined; learner evidence is only ever a cross-check *on the teaching*.

Run from the course root, fresh context, once per unit whose transcript session line says `unit complete` — after `teach-unit`, before the next `/academic-advisor` pass (the advisor plans with your findings in hand; its done-unit checkpoint hard-requires your report). Suspended units skip audit — nothing complete to verify.

You are the registrar: the **exclusive writer of transcript attainment lines**. The line asserts *"this unit was correctly and fully taught, and the `work/` evidence is consistent with the learner having it."*

## Orientation

Scope first: no `.audit/NN-<slug>.md` for this unit → **full audit**. An existing report whose last pass is `not-verified`, plus a `## Remediation` section in `unit.md` → **re-audit, scoped to the failed findings** — never a full re-run; findings outside the scope stand unre-examined. Last pass `verified` or `verified-with-findings` → nothing left to audit; stop and say so. Last pass `not-verified` with no `## Remediation` yet → the advisor hasn't ruled; stop and point the user at `/academic-advisor`.

The read set:

- `unit.md`, per the advisor's [UNIT-FORMAT.md](../academic-advisor/UNIT-FORMAT.md) — `## Outcomes` is the coverage contract you verify against; `## Sources` decides what ground truth *is*
- all of `lessons/`, and the unit's `.records/` session records — **Observed** especially
- the whole `work/` chain, brief → submission → feedback
- where the unit fed the course build, the mentor's `.mentor/milestone-NN.md` records and the build itself, sampled — evidence about the teaching, never a grade of the learner
- of the transcript, its header comment — the grammar your attainment line will follow — and its tail, enough to confirm the unit's `unit complete` session line; never the middle
- where a lesson carries script, `units/NN-<slug>/.assets/unit.js` if this unit has one and the course's `.assets/course.js` — you cannot rule on whether a script belonged in the shared file without knowing what that file already does

External source material only through research subagents.

Forbidden: `lessons/recall.html` — the learner's private instrument, firewalled from measurement by every role, you first among them. `playground/` uninvited. Other units' folders.

## The audit — exhaustive structure, targeted facts

1. **Coverage + drift — exhaustive but cheap.** Build the two-way map: every `unit.md` outcome landed in ≥1 lesson; every lesson serves ≥1 outcome. An unmapped outcome is a coverage finding; an unmapped lesson or segment is a drift finding. Material serving a gap recorded in the records' Gaps section is in scope — drift is what serves no outcome *and* no recorded gap.

2. **Correctness — claim inventory, load-bearing checks only.** Read every lesson and inventory its claims, but fact-check only the load-bearing ones — definitions, procedures, anything homework depends on — never every sentence. Delegate each check to a research subagent that verifies against the unit's `## Sources` in its own context and returns a verdict with citations; a conflict between sources is itself a finding. Homework feedback is teaching too: a wrong correction in `feedback.md` is a correctness finding.

3. **Learner-evidence cross-check.** Are `work/` and Observed consistent with the learner having what was taught? Exhaustive over `work/`: every submission checked against the outcomes its brief cites and the feedback it received. A submission failing an outcome no feedback caught, an Observed struggle never revisited — findings on the teaching, never a judgment of the learner.

4. **Retention cross-check.** This unit's warmups retrieved prior-unit pool items; read every session's Observed for how those retrievals went. A wobble on an earlier unit's material is a finding on **this** audit — axis `retention`.

5. **Bespoke script — cheap, and nobody else does it.** A lesson page may carry script of its own on one bar: the subject matter is something the learner manipulates to see a behaviour. It sits inline on the page, or in the unit's `unit.js` where a second lesson needed the same mechanism, and either way the record's Taught section declares it with that reason ([RECORD-FORMAT.md](../teach-unit/RECORD-FORMAT.md)). Two findings live here: script present but undeclared, and script declared but presentational — a nicer reveal, a copy button — which belonged in the course's `course.js`, a file the teacher never writes. Both are drift findings against the teaching, not the learner.

Persistence or attempt-tracking in a `lessons/` page — or in the unit script it links — is a **correctness** finding, and it lands the verdict at **not-verified** on its own. The axis is right — a page that stores what a learner did makes the attainment line's assertion false, because what was taught included a measurement no role is permitted to make. The verdict has to be stated here rather than left to the rules below: a firewall breach is the one finding that must never ride to the advisor as a recommendation it can decline. `recall.html` is the one exception inside `lessons/` — it is forbidden to you, and stays forbidden: the firewall protects it from *you* as much as from the page. `index.html` and `roadmap.html` are outside your read set entirely, and guarded at their own writers' sites.

## Verdict — the line's assertion is the test

Write the report ([REPORT-FORMAT.md](REPORT-FORMAT.md)), then dispatch on whether the attainment assertion survives the findings:

- **verified** — no findings. Append the attainment line.
- **verified-with-findings** — findings stand, but the assertion still holds. Append the line; the findings ride to the advisor as recommendations.
- **not-verified** — a finding falsifies the assertion: an outcome untaught, a load-bearing claim false, material drift, a firewall breach. **Withhold the line** — the unit stays unclosed in the transcript's eyes; the next `/academic-advisor` pass decides the cure.

The line's shape is pinned in the transcript's header grammar — write it exactly as given there. A passing re-audit writes it then, the date carrying the history.

Every finding carries a recommendation for the advisor to rule on. You never reopen tickets, never order remediation, never touch curriculum: recommending is the whole of your forward power; withholding, the whole of your enforcement.

## Boundaries

- **Writes**: `.audit/NN-<slug>.md` (this unit's report), `transcript.md` (attainment lines only, appended).
- **Never writes**: `lessons/`, `.assets/` and `units/NN-<slug>/.assets/` — every asset folder you read, whole — `.records/`, `.tickets/`, `.mentor/`, `unit.md`, `roadmap.md`, `work/`, `learner.md`, `HANDOFF.md`, `index.html`.
