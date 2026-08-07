# Planning Ticket Format

`.roadmap/issues/NN-<slug>.md` — one file per planning decision, numbered from `01`. Tickets are heaviest at the mission run (territory questions, destination research) and occasional afterward.

Ticket `01` is always the mission ticket — its `## Answer` **is** the mission record; there is no separate mission file.

## Template

```md
# {NN} — {Ticket title}

Type: {research | grilling}
Status: {open | claimed | resolved}
Blocked by: {NN, NN — or omit the line if none}

## Question

{The decision or investigation this ticket resolves — sized so one session can resolve it. For research: what fact the plan is waiting on, and where the findings file should focus.}

## Answer

{Appended on resolution: the decision and its reasoning, or the research gist with a link to .roadmap/research/{file}.md.}
```

## Rules

- **Decisions are tickets; units are not.** A unit is a fog theme, then a frontier line, then a stamped `unit.md` — it never passes through `issues/`. If you're drafting a ticket titled like a unit, you're pre-slicing the fog.
- **Ticket when the question is sharp; fog when it isn't.** The test is whether you can state the question precisely now — not whether you can answer it now.
- **Claim before work, resolve with an answer.** Set `Status: claimed` before working a ticket; on resolution, append `## Answer`, set `Status: resolved`, and add the one-line gist to `roadmap.md` Decisions-so-far.
- **Research findings live in `.roadmap/research/`, linked from the ticket.** The ticket holds the gist and the pointer; the findings file holds the detail. Pasting findings into the ticket makes two copies to drift.
- **A ticket with no `Blocked by:` line is claimable now.**
- **Two types only.** `research` (a fact outside the course folder, resolvable by a `/research` subagent) or `grilling` (a decision worked through the `/grilling` skill with the user). Planning has no prototype or task tickets — if manual work is blocking the plan, that's a Notes line in `roadmap.md`, not a ticket type.
