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

## Phase 1: [Name]

### Unit [ID]: [Title]

**Summary:** `[Concise capability and scope]`
**Status:** `[Planned | Active | Closed | Superseded]`
**Prerequisites:** `[Unit IDs | None]`
**Path:** `[Units/NN-dash-case-name/ | Pending generation]`
```

Repeat the unit node for each planned or published unit, grouped by phase.

## Prerequisite network

Unit IDs are unique and stable. Prerequisites are the sole canonical dependency data; derive outgoing connections and visual edges from them.

The network is an acyclic graph that supports branching and convergence. Every prerequisite references an existing node; roots explicitly record `None`. Phase grouping organizes the view rather than adding dependency gates.

Several units may become available together, but an ongoing course has exactly one Active unit. A completed course has zero Active units once all required units are Closed; Superseded nodes preserve history rather than count as completed prerequisites.

## Lifecycle and rolling horizon

- **Planned:** A concise future node; its unit contract has not been published.
- **Active:** The selected unit with a published, immutable `unit.md`.
- **Closed:** A completed unit whose required conceptual and applied gates have been verified.
- **Superseded:** A defective unit replaced by a newly validated contract. Its original directory preserves the contract, evidence, and `supersession.md`.

Fully generate only the selected active unit. Future nodes retain summaries and prerequisites; previously published units retain their paths and history.

A supersession transition marks the old node Superseded and its replacement Active together. The old unit's `supersession.md` records the replacement link and prior-evidence disposition.

## Generated view

`roadmap.html` reflects the current Markdown after every roadmap change. It preserves the destination, cut list, phases, units, lifecycle statuses, and derived prerequisite edges.

Availability and outgoing connections are derived views, not independently maintained state.

## Completion check

Read back `roadmap.md` and verify unique IDs, valid prerequisite references, acyclicity, lifecycle/path consistency, and accessible contracts for published nodes. Verify exactly one Active unit for an ongoing course, or zero Active units with all required units Closed for a completed course.
