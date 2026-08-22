# Review Format

Save each completed review as an immutable report in the active unit's `reviews/` directory:

`NNNN-assignment-<assignment-id>.md`

Create the directory when first needed. Increment its highest sequence number for each new report. Count attempts per assignment and link resubmissions to their prior review.

## Plus/Delta

Derive Scope Coverage from the authoritative `task.md`, using its referenced `unit.md` criteria for milestone builds. Each required completion criterion receives inspected evidence and `MET | NOT MET`. Every `NOT MET` links to a blocking delta.

Plus records demonstrated strengths. Delta records improvements, each with Diagnosis, Implication, Recommendation, and severity:

- **BLOCKING:** a material consequence for correctness, safety, security, reliability, accessibility, maintainability, argument validity, or intended use.
- **NON-BLOCKING:** a worthwhile improvement without a material consequence.

Judge materiality proportionately to the artifact and intended context. Any blocking delta means `REJECTED`; otherwise, `APPROVED`.

## Template

```markdown
# Performance Review: [Assignment name]

**Date:** `[YYYY-MM-DD]`
**Task:** `[Authoritative task.md path]`
**Artifacts Inspected:** `[Exact paths]`
**Attempt:** `[Number for this assignment]`
**Prior Review:** `[Path | None]`

## Scope Coverage

| Required criterion     | Evidence inspected     | Status        | Blocking delta  |
| ---------------------- | ---------------------- | ------------- | --------------- |
| [Criterion and source] | [Location and finding] | MET / NOT MET | [Delta ID or —] |

## [+] Plus

`[Evidence-grounded strengths, or None.]`

## [Δ] Delta

`[Repeat for each improvement, or None.]`

### D01 — [Issue]

**Severity:** `[BLOCKING | NON-BLOCKING]`
**Diagnosis:** `[Finding and location]`
**Implication:** `[Consequence in the intended context]`
**Recommendation:** `[Actionable learner revision]`

## Verdict & Route

**Outcome:** `[APPROVED | REJECTED]`
**Next Route:** `[From the table below]`
**Required Action:** `[Action and completion condition; supporting delta for foundational remediation]`
```

## Report route

For a rejection, default to `Learner revision → Editor`. Use `Teacher → Tutor → Editor` only when a blocking delta cites evidence of conceptual misunderstanding—not merely a defective artifact or a serious consequence.

| Condition                                                        | Next Route                |
| ---------------------------------------------------------------- | ------------------------- |
| REJECTED: execution issue                                        | Learner revision → Editor |
| REJECTED: blocking delta evidences a foundational conceptual gap | Teacher → Tutor → Editor  |
| APPROVED: ordinary or non-final milestone BUILD                  | Teacher                   |
| APPROVED: final milestone BUILD                                  | Tutor UNIT evaluation     |

## Completion check

Read back the saved report. Verify task/artifact linkage, sequence and attempt metadata, complete criterion coverage, delta fields, and consistency among coverage, severity, verdict, and route. Confirm prior reports remain unchanged.
