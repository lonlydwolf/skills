# Evaluation Format

Save completed evaluations under the active unit's `evaluations/` directory using the SBAR format below.

## Records

Filename: `NNNN-<lesson|milestone|unit>-<target-id>.md`. Increment the four-digit sequence across the entire directory.

Completed reports are immutable. A reevaluation creates a new report with the same evaluation type, target, and criteria, the next target-specific attempt number, and a pointer to the preceding evaluation.

## Template

```markdown
# Conceptual Evaluation: [Target title]

**Date:** `[YYYY-MM-DD]`
**Evaluation Type:** `[LESSON | MILESTONE | UNIT]`
**Target:** `[Lesson path | milestone ID | unit ID]`
**Criteria Source:** `[LESSON: learning-record path with Lesson Outcomes IDs, or the legacy sources used | MILESTONE: unit.md milestone ID | UNIT: unit.md objectives and milestone IDs]`
**Attempt:** `[Number for this evaluation type and target, starting at 1]`
**Prior Evaluation:** `[Previous report path | None]`

## S — Situation

[Evaluated capability, scope, and conditions, including permitted aids and the learner's aid disclosure at the start.]

## B — Background

### Criteria Coverage

| Critical criterion | Directly observed evidence | Status |
|---|---|---|
| [Outcome ID when recorded; capability and required conditions] | [Independent demonstration, observed gap, or specific missing evidence] | [MET | NOT MET | NOT ASSESSED] |

## A — Assessment

**Outcome:** `[PASS | FAIL]`

**Gaps:** [The observed gap for each NOT MET criterion and the missing demonstration for each NOT ASSESSED criterion, or None.]

## R — Recommendation

**Next Route:** `[One route selected below]`
**Required Action:** `[Immediate action with its target and completion condition, then any retained obligations in order]`
```

## Criteria Coverage

Include every critical criterion from the declared criteria source, using its stable outcome ID when one exists. Supporting outcomes may be recorded but do not affect the outcome. Track essential capabilities rather than individual prompts or superficial slips.

Evidence records what the learner independently demonstrated during this attempt. Earlier reports are context, not current evidence.

| Status | Meaning |
|---|---|
| `MET` | This attempt produced an independent demonstration under the criterion's conditions. |
| `NOT MET` | This attempt directly observed a material gap, such as a misconception that persisted after neutral clarification. |
| `NOT ASSESSED` | No adequate independent demonstration was obtained: the attempt ended first, the prompt was discarded or supplied the reasoning, or independence was uncertain and no fresh demonstration followed. |

- **PASS:** every critical criterion is `MET`.
- **FAIL:** at least one critical criterion is `NOT MET`. Remaining `NOT ASSESSED` criteria stay listed for the reevaluation.
- **No report:** a critical criterion is `NOT ASSESSED` and none is `NOT MET`. The attempt is unfinished and returns to Tutor for a fresh attempt.

Reports written before `NOT ASSESSED` existed remain unchanged. When one is the prior evaluation, a `NOT MET` whose evidence records a demonstration that was not obtained guides the reevaluation as missing evidence rather than an observed gap.

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

Read back the saved report. Verify complete metadata, criteria that match the target's agreed set and earlier attempts, a status for every critical criterion, recorded aid disclosure, agreement between statuses and outcome, one route selected by the precedence rules with retained obligations in Required Action, and correct sequence and prior-report linkage. Preserve earlier reports.
