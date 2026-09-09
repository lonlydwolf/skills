# Supersession Record Format

`Units/<old-unit>/supersession.md` is the immutable record of a defective contract's replacement and the applicability of prior evidence.

## Template

```markdown
# Unit Supersession

**Date:** `[YYYY-MM-DD]`
**Replacement Contract:** `[Relative path to replacement unit.md]`

## Contract Defect

[Material defect, supporting evidence, and why repair requires changing
the published contract rather than adapting within it.]

## Evidence Disposition

| Replacement Criterion | Prior Evidence | Disposition | Reason |
|---|---|---|---|
| [Exact criterion reference] | [Tutor/Editor report path or None] | RECOGNIZED / REPEAT | [Applicability justification or reason to repeat] |
```

The containing directory identifies the superseded unit. Its original contract and evidence remain unchanged. The replacement contract points back to this record.

## Criterion coverage

Include every replacement completion criterion. Identify each by its milestone ID, evidence field, and criterion text or other unambiguous locator.

Before assigning dispositions, break each evidence field into its independently required outcomes and conditions. Create one row per requirement, including any unit-wide completion criteria declared outside milestone fields. Requirements receive separate rows even when they share the same prior evidence, disposition, and reason.

For example, “filter inclusively, preserve input order, and report the correct count” requires three rows, even when all three are REPEAT.

## Evidence applicability

**RECOGNIZED** requires all of the following:

- The replacement criterion is identical to the prior criterion.
- Prior evaluation conditions were equal to or stricter than the replacement conditions.
- The applicable passing Tutor evaluation or APPROVED Editor review remains accessible.
- The contract defect did not affect that evidence.

The reason records how those conditions are satisfied. Recognition preserves the original verdict's type, target scope, and evidence domain; it does not create a new verdict or broaden what was demonstrated.

**REPEAT** applies when evidence is absent, criteria changed, conditions are insufficient, or applicability is uncertain. Cite relevant prior evidence when available and explain why the gate must be repeated.

## Completion check

Read back the record alongside the replacement contract. Check each independently required outcome and condition against its own disposition row, then verify the replacement path, resolving evidence references, and each disposition against its applicability conditions.

Confirm the replacement contract links back to this record and the superseded contract and prior evidence remain unchanged.
