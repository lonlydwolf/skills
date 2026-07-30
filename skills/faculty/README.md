# Faculty

Skills I use daily for learning.

A course-agnostic teaching suite: an AI faculty that plans, teaches, audits, and mentors a course — built on one iron rule: **the AI never writes what the learner couldn't write from scratch.**

> **Status: under construction.** The skills are being authored one by one — `setup-faculty-skills`, `ask-lonlydwolf`, `advisor`, and `teach-unit` are written; the rest are placeholders whose descriptions are final intent.

**User-invoked**

- `/setup-faculty-skills` — configures a course folder: scaffolding, minimal course `CLAUDE.md`, seeded learner profile, theme. Checks Matt's composed skills are installed. Run once per course; re-runs repair, never reset.
- `/ask-lonlydwolf` — the router: tells you which skill fits your situation, so the course `CLAUDE.md` stays minimal.
- `/advisor` — rolling curriculum planner: redraws the course roadmap after every taught unit and stamps the next `unit.md` in full. Sole curriculum decision-maker.
- `/teach-unit` — teaches the current unit one lesson cycle per session from its stamped `unit.md`, fresh-context, from the course root. Ends **done** or **suspended** (`gap` or `over-budget`).
- `/audit` — adversarial, fresh-context check of a taught unit against its sources: correct, complete, no drift. Recommends, never re-plans.
- `/mentor` — reviews the learner's own implementation via a hint ladder. Never writes it.
- `/office-hours` — one door for questions about course material, past or current, answered in the owning unit's teacher voice. Never implementation help.

**Model-invoked**

- None yet — faculty sessions are entered deliberately, one skill per session.

## The pipeline

```
Small subject:   Matt's /teach, alone.
                 (If the mission talk sprawls into "six subjects" → /advisor.)

Big subject:     /advisor ──▶ /teach-unit ──▶ /audit ──▶ /advisor ──▶ …
                 (alternating until the course map says: arrived)

On call:         /mentor (implementation) · /office-hours (material questions)
                 /ask-lonlydwolf (routing)
```

## Depends on Matt Pocock's skills

These skills compose with [Matt Pocock's skills](https://github.com/mattpocock/skills) rather than reinvent them — install his suite first:

```bash
npx skills@latest add mattpocock/skills
```

| Matt's skill | Used for |
|---|---|
| `teach` | The small-subject route — one nameable subject needs no course machinery |
| `grilling` | The advisor's mission and planning interviews |
| `research` | Gathering course resources; the audit's source-checking |
| `domain-modeling` | The course glossary (ubiquitous language) |
| `prototype` | Teacher-built lesson widgets and demos |

`/setup-faculty-skills` checks these five are present and stops with the install command if not — it never runs Matt's own setup. The rest of his suite installs harmlessly alongside and plays no role in a course folder.
