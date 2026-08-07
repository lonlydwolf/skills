---
name: ask-lonlydwolf
description: Ask which skill or flow fits your learning situation. A router over the faculty skills.
disable-model-invocation: true
---

# Ask lonlydwolf

## The door test

**Is this one subject, or a journey through several?**

- **One subject** — nameable in one breath ("Rust lifetimes", "how DNS works") → **Matt's `/teach`**, right where you are. No course folder, no `/setup-faculty-skills`; its mission step does the scoping.
- **A journey** — a field, a curriculum-sized ambition, anything you'd describe with a syllabus → the main flow below.

**When unsure, pick `/teach`** — mis-picking small is safe (the tripwire below catches it); mis-picking big buys planning overhead a single subject never repays.

`/teach` is Matt Pocock's and nothing here installs it: `npx skills@latest add mattpocock/skills`.

## The main flow: subject → course

1. **Make a folder** — one course per folder; every session runs from its root.
2. **`/setup-faculty-skills`** — once: scaffolds the workspace and the learner profile, settles the theme.
3. **`/academic-advisor`** — the mission run; creates the roadmap.
4. **The loop**: `/academic-advisor` plans a unit ⟷ `/teach-unit` teaches it → `/audit` checks it → back to `/academic-advisor`, until the roadmap says *arrived*.

A `/teach-unit` that ends suspended (`gap` or `over-budget`) goes back to `/academic-advisor` — the advisor owns the reroute.

The goal itself moved? → `/academic-advisor` — the goal-shift run. Only you can fire it; no role ever infers a new destination.

**The tripwire.** If `/teach`'s mission conversation sprawls into "this is really six subjects", exit: start the main flow and carry what the conversation surfaced into the advisor's mission grilling. The exit is your act — nothing fires automatically.

## On call throughout

- **A question about the material** — a concept from any unit, current or past, even after the course ends → **`/office-hours`**. Explains in the teaching's own terms; never quizzes or assesses you.
- **A message that didn't land** → **`/wait-what`**, mid-session in any role: stop, and the last explanation is re-pitched plainer.

**Something you made — the course build, `playground/`, a homework draft — has no review door during the journey**, and deliberately so: your own work is never a question door's evidence. It is the leg you walk alone. What consolidates it is the teacher's homework loop — submit, and `feedback.md` comes back through `/teach-unit`; nobody looks at a draft — and, for the build, the journey's end: the handover written at arrival travels with your work to whoever picks it up next.

Mis-picking is still safe: bring a build question to `/office-hours` and it declines it whole and names the material question inside it that it can take. You lose nothing but the detour.

## Building software, not learning?

→ `/ask-matt` — Matt Pocock's too: `npx skills@latest add mattpocock/skills`.
