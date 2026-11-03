# Review Format

Save each completed review as an immutable report in the active unit's `reviews/` directory:

`NNNN-assignment-<assignment-id>.md`

Create the directory when first needed. Increment its highest sequence number for each new report. Count attempts per assignment and link resubmissions to their prior review.

## Plus/Delta

Derive Scope Coverage from the authoritative `task.md`, using its referenced `unit.md` criteria for milestone builds. Each required completion criterion receives inspected evidence and `MET | NOT MET`. Every `NOT MET` links to a blocking delta.

Record whether a `NOT MET` criterion's evidence is absent from the submission (for example, no output at the stated location) or present and failing. Evidence Editor cannot open or run because of tool or access limits is not a learner finding: it creates no report and follows Editor's shared recovery.

Plus records demonstrated strengths. Delta records improvements, each with Diagnosis, Implication, Recommendation, and severity:

- **BLOCKING:** a material consequence for correctness, safety, security, reliability, accessibility, maintainability, argument validity, or intended use.
- **NON-BLOCKING:** a worthwhile improvement without a material consequence.

Judge materiality proportionately to the artifact and intended context. Any blocking delta means `REJECTED`; otherwise, `APPROVED`.

A resubmission accounts for every blocking delta of the prior review in Prior Blocking Findings. A blocking delta first raised on resubmission states in its Diagnosis whether the revision introduced it or it was present in work an earlier review inspected, and in the latter case what the earlier review missed. This shows the learner that the standard is unchanged. A prior finding the current evidence does not support is `NOT REPRODUCED`, with the reason.

### Blockers beyond the required criteria

A BLOCKING delta that no required criterion establishes carries three elements in its fields:

1. **Evidence** (Diagnosis): an inspectable location, reproduction, or observed behavior. An expected pattern that was not observed is a hypothesis to verify.
2. **Consequence** (Implication): what goes wrong for the audience, intended use, and scope that `task.md` and `unit.md` establish.
3. **Materiality** (Implication): why that consequence prevents the artifact from acceptably serving that use, as distinct from making it less polished, less general, or less like production work.

When an element cannot be established, verify further or record the delta as NON-BLOCKING. Every quality dimension above can block when the intended use makes it consequential; none is blocking or non-blocking by category.

Synthetic calibration examples:

| Artifact and intended use | NON-BLOCKING | BLOCKING |
| --- | --- | --- |
| One-off script that cleans a provided CSV for the learner's own analysis | No retries, logging, or packaging; input path hard-coded as the task allows. | Rows containing a quoted comma are silently dropped; reproduced with the provided input, so the cleaned data the analysis relies on is wrong. |
| Signup form the task says keyboard-only users must complete | Field spacing is uneven. | The submit control never receives focus during Tab traversal, so a keyboard-only user cannot finish. |
| Analytical report supporting a stated decision | A chart lacks a source caption that the text already supplies. | The recommendation rests on a figure contradicted by the report's own cited table. |
| Module the task says teammates will extend | A helper name could be clearer. | The two configuration files the extension point reads already disagree, so a documented extension behaves differently depending on load order. |

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

## Prior Blocking Findings

`[None for a first attempt; otherwise one row per blocking delta in the prior review.]`

| Prior delta          | Status in this attempt                    | Current evidence       |
| -------------------- | ----------------------------------------- | ---------------------- |
| [Prior review + DNN] | RESOLVED / PERSISTS as DNN / NOT REPRODUCED | [Location and finding] |

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

For a rejection, default to `Learner revision → Editor`. Use `Teacher → Tutor → Editor` only when a blocking delta cites evidence of conceptual misunderstanding—not merely a defective artifact, a serious consequence, or a persistent blocker. A requirement defect that prevents valid review creates no report; Editor's Persistent Blockers guidance routes it to Advisor.

| Condition                                                        | Next Route                |
| ---------------------------------------------------------------- | ------------------------- |
| REJECTED: execution issue                                        | Learner revision → Editor |
| REJECTED: blocking delta evidences a foundational conceptual gap | Teacher → Tutor → Editor  |
| APPROVED: ordinary or non-final milestone BUILD                  | Teacher                   |
| APPROVED: final milestone BUILD                                  | Tutor UNIT evaluation     |

## Completion check

Read back the saved report. Verify task/artifact linkage, sequence and attempt metadata, complete criterion coverage, delta fields, and consistency among coverage, severity, verdict, and route. Confirm each blocker beyond the required criteria states its evidence, consequence, and materiality, and that a resubmission accounts for every prior blocking delta. Confirm prior reports remain unchanged.
