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

| Result and context | Next Route |
|---|---|
| Any FAIL | `Teacher remediation → Tutor reevaluation` |
| LESSON PASS, pending BUILD | `Learner completes build → Editor` |
| LESSON PASS, pending PRACTICE | `Learner completes practice → Teacher` |
| LESSON PASS, no pending action | `Teacher` |
| MILESTONE PASS, CONCEPTUAL | `Teacher` |
| MILESTONE PASS, COMBINED | `Learner completes build → Editor` |
| UNIT PASS | `Advisor` |

Required Action identifies the same evaluation type and target for remediation and reevaluation, the assignment path for pending work, or the next instructional or unit-closure action.

## Completion

Read back the saved report. Verify complete metadata and criteria coverage, agreement between coverage and outcome, one applicable route, and correct sequence and prior-report linkage. Preserve earlier reports.
