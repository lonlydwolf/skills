# Assignment Format

`task.md` is the authoritative assignment contract. Assignments live in the unit's `assignments/NN-<dash-case-name>/` directories, created when work is assigned.

Use **TILT — Purpose, Task, Criteria for Success** to make the assignment's learning value, work, and completion evidence clear.

## Classification

- **PRACTICE:** Retrieval, explanation, drills, or temporary experiments; no formal Editor gate.
- **BUILD:** A persistent, inspectable learner artifact; requires Editor review.
- **Related Milestone:** `None` for ordinary assignments; the stable milestone ID when a BUILD supplies that milestone's applied evidence.

## Status

- **Preview:** The destination is visible so lessons can point toward it. The learner does not start the independent work, and logistics may still change.
- **Released:** Starting materials, links, and logistics have been refreshed against what was taught. Independent work starts once the gate recorded in `AGENTS.md` allows it.

PRACTICE is usually Released when created. Releasing never changes the criteria. Assignments created before this field existed carry no Status; follow their recorded route and add Status the next time Teacher changes them.

## Template

```markdown
# Assignment: `[Title]`

**Type:** `[PRACTICE | BUILD]`
**Status:** `[Preview | Released]`
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

## Evidence Locations

A BUILD's Artifact Location identifies the independent submission, including its branch or revision when relevant. Teacher-guided lesson work may happen in the same project, but in a separately named practice branch or directory. Never overwrite the designated submission or previously collected independent evidence.

When the learner may build on guided work, Starting Materials identify it and its origin, and Permitted Aids state its limits. Assisted work is not independent evidence. If the criteria require an independent demonstration of something rehearsed under guidance, the Task asks for a fresh demonstration after release, such as a new input, operation, or change.

## Numbering and Ownership

Use the next two-digit sequence after the highest existing assignment number, starting at `01`. Updates retain the assignment directory. Teacher maintains the contract and supplied materials; learner-created artifacts remain unchanged by assignment edits.

Use course-root-relative paths for local artifact references and canonical URLs for external sources.

## Completion

Read back `task.md`. Confirm the TILT sections and task fields are populated, Status is set, provided local inputs are readable, guided work is distinguishable from the designated independent submission, and any milestone criterion reference resolves without changing its requirements.
