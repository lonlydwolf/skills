# HANDOFF.md Format

The teacher-to-teacher briefing at the course root — **rewritten in full** as the last exit step of every session; a briefing, not a diary. Hard cap ~2K tokens; content the rewrite displaces goes to the current unit's `.records/handoff-archive.md`. Read by every incoming teacher in the fixed orientation set, and by the advisor to cover the suspended-unit window.

## Content — soft context only

Tone, wobbles, momentum: what landed shakily, what the learner was enjoying, where the last session's energy was. **Never "what's next"** — that is the frontier's job, and prose plans drift from ticket truth. Never a restatement of `unit.md` or the roadmap.

A **wobble flag** is a named line — `Wobble: {topic} — {what shook}` — a topic whose retrieval shook this session, flagged formally for the next. (How the incoming teacher responds is SKILL.md's business.)

## The suspension block

Written only when a session suspends the unit. The roadmap header is **not** changed — it stays the advisor's write; this block is what covers the window until the advisor's pass.

```md
## Suspended

Unit: units/NN-<slug>
Reason: {gap | over-budget}
Gap: {the named gap, verbatim from the blocked ticket — gap suspensions only}
```

## The completion block

Written only at the unit-completion session, alongside the transcript session line's `unit complete` tail. The roadmap header is likewise **not** changed — this block covers the window until `/audit` and the advisor's pass.

```md
## Complete

Unit: units/NN-<slug>
```

## Rules

- **Rewritten, never appended.** Each session's rewrite is total; the cap forces curation. Over-cap is a checklist violation by the writer.
- **Soft context only.** Anything durable belongs in `learner.md` (triage, exit step 3); anything topic-bound in `.records/`; anything plan-shaped in the frontier. HANDOFF holds what none of those can: how it *felt*.
- **The suspension and completion blocks are load-bearing** — the advisor relies on HANDOFF being in every teacher's fixed reads to stop claims into a parked or finished unit. Never omit the right block on a suspended or completing exit; never leave one standing after the advisor re-plans (removal of both is the advisor's, at the stamp).
