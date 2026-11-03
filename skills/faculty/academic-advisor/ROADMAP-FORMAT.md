# Curriculum Roadmap Format

Course-root `roadmap.md` is the authoritative Rolling-Wave Prerequisite Network (RWPN) and unit lifecycle state. `roadmap.html` is its generated learner-facing projection.

## Template

```markdown
# Curriculum Roadmap: [Course Title]

**Terminal Objective:** `[Target capability and intended context]`
**Current Phase:** `[Phase name]`
**Last Updated:** `[YYYY-MM-DD]`

## Global Cut List

- `[Related topic excluded from this course]`

## Review Plan

- `[Reviewed unit ID and capability] — [Agreed timing] — [Planned | Activated: review unit ID | Cancelled]`

## Phase 1: [Name]

### Unit [ID]: [Title]

**Summary:** `[Concise capability and scope]`
**Status:** `[Planned | Active | Closed | Superseded | Withdrawn]`
**Prerequisites:** `[Unit IDs | None]`
**Path:** `[Units/NN-dash-case-name/ | Pending generation]`
```

Use `None agreed` when the learner has agreed to no review; a roadmap without this section has none. Repeat the unit node for each planned or published unit, grouped by phase. A Withdrawn node adds `**Withdrawal:** \`[YYYY-MM-DD and the learner's stated reason]\``, which it keeps as history if reactivated.

## Prerequisite network

Unit IDs are unique and stable. Prerequisites are the sole canonical dependency data; derive outgoing connections and visual edges from them.

The network is an acyclic graph that supports branching and convergence. Every prerequisite references an existing node; roots explicitly record `None`. Phase grouping organizes the view rather than adding dependency gates.

Several units may become available together, but an ongoing course has exactly one Active unit. A completed course has zero Active units once all required units are Closed. A stopped course has zero Active units with required work remaining. Superseded and Withdrawn nodes preserve history; they never count as completed prerequisites or required units.

## Lifecycle and rolling horizon

- **Planned:** A concise future node; its unit contract has not been published.
- **Active:** The selected unit with a published, immutable `unit.md`.
- **Closed:** A completed unit whose required conceptual and applied gates have been verified.
- **Superseded:** A defective unit replaced by a newly validated contract. Its original directory preserves the contract, evidence, and `supersession.md`.
- **Withdrawn:** A published unit the learner chose to leave before closure. Its directory preserves the contract and evidence unchanged. Withdrawal records a decision, not a verdict or a defect.

Fully generate only the selected active unit. Future nodes retain summaries and prerequisites; previously published units retain their paths and history.

A supersession transition marks the old node Superseded and its replacement Active together. The old unit's `supersession.md` records the replacement link and prior-evidence disposition.

A withdrawal transition marks the Active node Withdrawn and, when the learner switches direction, the newly selected unit Active in the same update. A stop leaves zero Active units. Reactivation returns a Withdrawn node to Active with its unchanged contract and path.

## Review plan

Review Plan entries record delayed reviews the learner agreed to. They are not nodes and never gate progression or completion. Add, change, or cancel entries only with the learner. When the learner takes a review, it becomes a review unit: an ordinary node whose prerequisite is the reviewed unit, linked from its entry as `Activated`. Review units are optional and never count as required units.

## Generated view

`roadmap.html` reflects the current Markdown after every roadmap change. It preserves the destination, cut list, review plan, phases, units, lifecycle statuses, and derived prerequisite edges.

Availability and outgoing connections are derived views, not independently maintained state.

## Completion check

Read back `roadmap.md` and verify unique IDs, valid prerequisite references, acyclicity, lifecycle/path consistency, and accessible contracts for published nodes. Verify exactly one Active unit for an ongoing course, zero Active units with all required units Closed for a completed course, or zero Active units with required work remaining for a stopped course. Confirm each Withdrawn node has its Withdrawal field and an unchanged published path, and each Review Plan entry references a Closed unit and, when Activated, an existing review node.
