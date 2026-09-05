# Assignment Format

`task.md` is the authoritative assignment contract. Assignments live in the unit's `assignments/NN-<dash-case-name>/` directories, created when work is assigned.

Use **TILT — Purpose, Task, Criteria for Success** to make the assignment's learning value, work, and completion evidence clear.

## Classification

- **PRACTICE:** Retrieval, explanation, drills, or temporary experiments; no formal Editor gate.
- **BUILD:** A persistent, inspectable learner artifact; requires Editor review.
- **Related Milestone:** `None` for ordinary assignments; the stable milestone ID when a BUILD supplies that milestone's applied evidence.

## Template

```markdown
# Assignment: `[Title]`

**Type:** `[PRACTICE | BUILD]`
**Related Milestone:** `[None | M01…]`

## Purpose

`[Target capability, why it matters, and the intended context of use.]`

## Task

`[What the learner must do or produce.]`

- **Constraints:** `[Required boundaries and environment | None]`
- **Permitted Aids:** `[Allowed resources, tools, and assistance, with their limits | None]`
- **Starting Materials:** `[Provided inputs and required setup | None]`
- **Artifact Location:** `[Output paths or where a non-file practice response is delivered]`
- **Completion Signal:** `[What the learner supplies to request inspection]`

## Criteria for Success

`[Observable completion evidence and conditions, or the exact authoritative milestone criterion reference.]`
```

## Criteria Authority

Teacher defines ordinary assignment criteria within the active unit contract. For milestone BUILDs, reference the related milestone's **Applied Evidence** in the containing unit's `unit.md`; Teacher supplies execution logistics while preserving that criterion. Tutor evaluates `CONCEPTUAL` milestone evidence without an assignment `task.md`. Seperate lesson practice uses `PRACTICE` with `Related Milestone: None` and does not serve as the milestone gate.

## Numbering and Ownership

Use the next two-digit sequence after the highest existing assignment number, starting at `01`. Updates retain the assignment directory. Teacher maintains the contract and supplied materials; learner-created artifacts remain unchanged by assignment edits.

Use course-root-relative paths for local artifact references and canonical URLs for external sources.

## Completion

Read back `task.md`. Confirm the TILT sections and task fields are populated, provided local inputs are readable, and any milestone criterion reference resolves without changing its requirements.
