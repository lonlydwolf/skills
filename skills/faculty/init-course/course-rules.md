# Course State Format

Course state lives in `./AGENTS.md` . It acts as a dynamic save-state and shared context for all roles, containing ONLY the exact context needed to resume the course after a period of inactivity.

## Template

```markdown
# Course State

Advisor, Teacher, Tutor, and Editor: before acting on course state, read [.course-rules.md](./.course-rules.md) for ledger ownership, state semantics, and handoff and recovery rules.

**Last Active:** `[YYYY-MM-DD HH:MM]`
**Active Unit:** `[unit path | None]`
**Last Transition:** `[Role + completed workflow event + verdict when applicable]`
**Workflow Status:** `[Ready | Waiting | Blocked | Complete]`

## Operational Blocker

`[None or a workspace/workflow problem]`

## Next Action

- **Next Formal Role:** `[Advisor | Teacher | Tutor | Editor | None]`
- **Required Action:** `[Next workflow step and its completion condition; Complete: None — course complete]`
```

## Rules to edit the course state

- **Ready:** the next formal role can act immediately
- **Waiting:** the learner completes the required action, then invokes that role.
- **Blocked:** a workspace or contract problem prevents progression; Advisor handles recovery.
- **Complete:** Advisor has verified closure of all required units and recorded course completion. Set Active Unit and Next Formal Role to `None`, Operational Blocker to `None`, and Required Action to `None — course complete`. Last Transition records course completion; the roadmap has zero Active units. Next Formal Role may be `None` only in this terminal state.
- Completed formal handoffs replace the ledger using the exact template above, preserving the rules pointer and recording one current state. Nonterminal handoffs contain exactly one next route; Complete has no pending formal action.
- A formal role invoked before it is ready preserves state and directs the learner to the recorded action.
- Missing or contradictory workspace state prevents new course evidence; record an operational blocker, set Workflow Status to Blocked, and route to Advisor for recovery.
- Advisor, Teacher, Tutor, and Editor maintain this ledger. Roommate and Librarian leave it unchanged.

`AGENTS.md` records workflow state. Describe transitions and next actions
using roles, unit/lesson/milestone identifiers, gate types, and verdicts.
The receiving role discovers instructional details from the relevant
course artifacts.

For example: `Teacher remediation, then Tutor UNIT reevaluation` belongs
in the ledger; the specific misconception and teaching method belong in
role-owned records. Keep learner observations, feedback, instructional
methods, curriculum content, and exact evidence-file paths in those records.

Before saving, check Last Transition, Operational Blocker, and Required
Action. Retain only information needed to identify the workflow state,
any impediment to valid progression, and the next action.
