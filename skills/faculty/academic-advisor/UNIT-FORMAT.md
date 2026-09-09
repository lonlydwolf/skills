# Unit Contract Format

`Units/NN-dash-case-name/unit.md` is the published Instructional Charter: objectives, core sources, scope, milestone evidence, and sequence.

## Template

```markdown
# Unit Contract: [Title]

**Unit ID:** `[Stable roadmap unit ID]`

## Intent

[Target capability, intended context, and observable learning objectives.]

## Core Sources

- [Approved source title, relevant coverage, and accessible URL or local path.]

## Scaffolding and Friction

**Possible Scaffolds:** [Evidence-grounded options from Learner.md.]
**Known Friction:** [Relevant unresolved gaps or repeatedly unhelpful approaches.]
**Constraints:** [Relevant learner or environment constraints.]

## Scope and Cut List

**In Scope:** [Topics and capabilities included.]
**Cut List:** [Related topics deferred beyond this unit.]

## Milestones

### M01: [Title]

**Position:** `[NON-FINAL | FINAL]`
**Evidence Type:** `[CONCEPTUAL | BUILD | COMBINED]`
**Target Capability:** `[Capability this milestone demonstrates]`
**Conceptual Evidence:** `[Observable outcome and conditions | N/A]`
**Applied Evidence:** `[Observable artifact outcome and conditions | N/A]`
```

Repeat milestone blocks in the required sequence. Use `None established` for unsupported scaffolding or friction rather than inventing learner characteristics.

## Milestone contract

A unit contains at most five milestones, including at least one FINAL milestone. Capability structure determines the count; a single final milestone is sufficient when appropriate.

Milestone IDs are stable within the unit and are the references used by assignments, evaluations, and reviews.

- **CONCEPTUAL:** Conceptual Evidence is required; Applied Evidence is `N/A`.
- **BUILD:** Applied Evidence is required; Conceptual Evidence is `N/A`.
- **COMBINED:** Both evidence fields are required.

Evidence states what demonstrates completion and under which conditions. It defines observable criteria rather than exact evaluation prompts, review procedures, or lesson micro-tasks.

FINAL identifies the final gate, not a mandatory artifact. Position and Evidence Type determine routing through the shared course rules. Evaluation and review reports carry verdicts; the contract carries criteria.

## Scope and instructional guidance

Core sources define the approved curriculum basis. Tactical sources may support instruction within the unchanged contract.

Scaffolds are options grounded in the learner profile; Teacher selects suitable instructional approaches. The cut list defines curriculum boundaries while leaving room for bounded clarification and immediate safety or correctness responses.

## Publication and preservation

Planning drafts may be refined. Once activated, the published contract is immutable, including objectives, boundaries, sources, milestones, criteria, and sequence.

Lifecycle status belongs in `roadmap.md`. Progress and verdicts remain in evaluation and review records.

A replacement contract includes a pointer to the old unit's immutable `supersession.md`. When recording a unit replacement, use [SUPERSESSION-FORMAT.md](./SUPERSESSION-FORMAT.md) for the immutable supersession record and prior-evidence disposition. Preserve the original contract and evidence.

## Completion check

Read back the contract and verify its roadmap identity, accessible core-source references, objective-to-milestone alignment, milestone count and stable IDs, sequence, evidence-type consistency, and observable criteria.

For a replacement, also verify the supersession-record pointer resolves.
