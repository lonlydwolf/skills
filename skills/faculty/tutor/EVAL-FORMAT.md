# Evaluation Format

Save completed evaluations under the active unit's `evaluations/` directory using the SBAR format below.

## Records

Filename: `NNNN-<lesson|milestone|unit>-<target-id>.md`. Increment the four-digit sequence across the entire directory.

Completed reports are immutable. A reevaluation creates a new report with the same evaluation type and target, the next target-specific attempt number, and a pointer to the preceding evaluation.

## Template

```markdown
# Conceptual Evaluation: [Target title]

**Date:** `[YYYY-MM-DD]`
**Evaluation Type:** `[LESSON | MILESTONE | UNIT]`
**Target:** `[Lesson path | milestone ID | unit ID]`
**Criteria Source:** `[Exact source paths and section or milestone identifiers]`
**Attempt:** `[Number for this evaluation type and target, starting at 1]`
**Prior Evaluation:** `[Previous report path | None]`

## S — Situation

[Evaluated capability, scope, and conditions, including permitted aids.]

## B — Background

### Criteria Coverage

| Critical criterion | Directly observed evidence | Status |
|---|---|---|
| [Capability and required conditions] | [Independent demonstration or specific missing evidence] | [MET | NOT MET] |

## A — Assessment

**Outcome:** `[PASS | FAIL]`

**Gaps:** [Specific gap for each NOT MET criterion, or None.]

## R — Recommendation

**Next Route:** `[One route selected below]`
**Required Action:** `[One concise action with its target and completion condition]`
```

## Criteria Coverage

Include every critical criterion from the declared criteria source. Track essential capabilities rather than individual prompts or inconsequential mistakes.

Evidence records what the learner independently demonstrated during this attempt. Identify missing demonstrations explicitly.

Every criterion `MET` produces `PASS`. Any criterion `NOT MET` produces `FAIL` and a corresponding remediation gap in Assessment.

## Recommendation

Select one Next Route. A FAIL routes to `Teacher remediation → Tutor reevaluation` of the same type and target. A UNIT PASS routes to `Advisor`. For a LESSON or MILESTONE PASS, apply the first rule that matches the course evidence:

1. **Outstanding reevaluation.** A MILESTONE or UNIT target has a FAIL and no later PASS. When the latest remediation learning record shows that remediation complete, route `Tutor reevaluation`. Otherwise route released remediation PRACTICE as `Learner completes practice → Teacher`, or route `Teacher`. Other pending work waits for the reevaluation.
2. **Editor return.** The latest review of a BUILD routed `Teacher → Tutor → Editor` and has no later review. When the remediation is complete, route `Learner revision → Editor`; otherwise route as in rule 1.
3. **Released pending work.** Route work whose prerequisites are satisfied:

   | Pending work | Next Route |
   |---|---|
   | PRACTICE | `Learner completes practice → Teacher` |
   | Ordinary BUILD, or BUILD for a non-final BUILD milestone | `Learner completes build → Editor` |
   | BUILD for a non-final COMBINED milestone with a MILESTONE PASS | `Learner completes build → Editor` |
   | BUILD for a final BUILD or COMBINED milestone | `Learner completes build → Editor` |

   A non-final COMBINED build without its MILESTONE PASS stays pending; continue to rule 4. A final milestone build's Required Action names Editor approval followed by Tutor UNIT evaluation.
4. **Conceptual gate due.** The latest learning record shows the supporting instruction complete for the next non-final CONCEPTUAL or COMBINED milestone: `Tutor MILESTONE evaluation`. For a final CONCEPTUAL milestone: `Tutor UNIT evaluation`.
5. **Otherwise:** `Teacher`.

Work is released when Teacher's latest applicable learning record names it as pending without deferring its start, and no later review or record shows it completed. A `task.md` that exists, including one shown early as a preview, does not by itself make work pending or ready.

Required Action names the immediate action, its target and completion condition, then each retained obligation in the order it becomes due.

### Route examples

| Course evidence at a LESSON PASS | Next Route | Required Action |
|---|---|---|
| Lesson 04 supports non-final COMBINED M02. Its record releases `assignments/02` (M02) and shows M02 instruction complete. No M02 evaluation exists. | `Tutor MILESTONE evaluation` | Tutor MILESTONE evaluation of M02; `assignments/02` stays pending until M02 PASS, then Editor. |
| Same, but lesson 04's record plans lesson 05 before M02. | `Teacher` | Teacher continues M02 instruction; `assignments/02` waits for M02 PASS. |
| Final COMBINED M03. Lesson 06's record releases `assignments/03`. | `Learner completes build → Editor` | Complete `assignments/03`; Editor approval, then Tutor UNIT evaluation. No final MILESTONE evaluation. |
| Final BUILD `task.md` was shown as a preview after lesson 02. Lesson 03's record defers its start until lessons 04 and 05. | `Teacher` | Teacher continues preparation for the final build. |
| M02 MILESTONE attempt 1 failed. Remediation lesson 05 released remediation PRACTICE `assignments/04`. | `Learner completes practice → Teacher` | Complete `assignments/04` and return to Teacher; Tutor MILESTONE reevaluation of M02 remains due; `assignments/02` waits for M02 PASS. |
| Review 0003 rejected ordinary BUILD `assignments/01` with `Teacher → Tutor → Editor`. Remediation lesson 06's record shows remediation complete. | `Learner revision → Editor` | Revise `assignments/01` against review 0003, then request Editor attempt 2. |
| UNIT attempt 1 failed after final build approval. Remediation lesson 08's record shows remediation complete. | `Tutor reevaluation` | Tutor UNIT reevaluation, attempt 2. |

## Completion

Read back the saved report. Verify complete metadata and criteria coverage, agreement between coverage and outcome, one route selected by the precedence rules with retained obligations in Required Action, and correct sequence and prior-report linkage. Preserve earlier reports.
