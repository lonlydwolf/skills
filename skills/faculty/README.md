# Faculty

Skills I use daily for learning.

A course-agnostic teaching suite: an AI faculty that plans, teaches, audits, and holds office hours for a course — built on one iron rule: **the AI never writes what the learner couldn't write themselves.**

**User-invoked**

- `/setup-faculty-skills` — configures a course folder for the faculty skills: scaffolding, minimal course `AGENTS.md` (with a `CLAUDE.md` pointer), scaffolded learner profile, theme, and the course's generated stylesheets and script. Run once per folder; re-runs converge on the day-zero tree, never reset.
- `/ask-lonlydwolf` — the router: tells you which skill fits your situation, so the course instructions file stays minimal.
- `/academic-advisor` — rolling curriculum planner: redraws the course roadmap after every taught unit and stamps the next `unit.md` in full. Sole curriculum decision-maker.
- `/teach-unit` — teaches the current unit one lesson or homework cycle per session from its stamped `unit.md`, fresh-context, from the course root. Ends **complete** or **suspended** (`gap` or `over-budget`).
- `/audit` — skeptical, fresh-context verification of a taught unit against its sources: correct, nothing in scope skipped, no drift. Recommends, never re-plans.
- `/office-hours` — one door for questions about course material, past or current, answered in the owning unit's teacher voice. Never implementation help.

**Model-invoked**

- None — by design. Faculty sessions are entered deliberately, one skill per session.

## The pipeline

```
Small subject:   Matt's /teach, alone.
                 (If the mission talk sprawls into "six subjects"
                  → the main flow: /setup-faculty-skills, then /academic-advisor.)

Big subject:     /academic-advisor ──▶ /teach-unit ──▶ /audit ──▶ /academic-advisor ──▶ …
                 (alternating until the course map says: arrived)

On call:         /office-hours (material questions) · /wait-what (re-pitch)
                 /ask-lonlydwolf (routing)
```

## Depends on Matt Pocock's skills

These skills compose with [Matt Pocock's skills](https://github.com/mattpocock/skills) rather than reinvent them.

| Matt's skill | Used for |
|---|---|
| `grilling` | The advisor's mission and planning interviews |
| `research` | Gathering course resources; the audit's source-checking |
| `wait-what` | The learner's own re-pitch command — "that last message did not land" — on call in any session |
| `teach` | The small-subject route — one nameable subject needs no course machinery |
| `ask-matt` | Building software rather than learning — where `/ask-lonlydwolf` sends you |

`/setup-faculty-skills` installs `grilling`, `research` and `wait-what` for you — the first two are what the roles themselves invoke; `wait-what` is the learner's own — narrowed with `-s`, and offered as a declinable gap item rather than a stop. `teach` and `ask-matt` are called only from outside a course, so nothing installs them: `/ask-lonlydwolf` names the command where it hands off to them.

To take the whole suite in one line instead:

```bash
npx skills@latest add mattpocock/skills
```

The rest installs harmlessly alongside and plays no role in a course folder.
