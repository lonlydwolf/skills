---
name: ask-lonlydwolf
description: Ask which skill or flow fits your learning situation. A router over the faculty skills.
disable-model-invocation: true
---

# Ask lonlydwolf

You don't remember every skill, so ask.

## The door test

**Is this one subject, or a journey through several?**

- **One subject** — nameable in one breath ("Rust lifetimes", "how DNS works") → **Matt's `/teach`**, right where you are. No course folder, no installer; its mission step does the scoping.
- **A journey** — a field, a curriculum-sized ambition, anything you'd describe with a syllabus → the main flow below.

**When unsure, pick `/teach`** — mis-picking small is safe (the tripwire below catches it); mis-picking big buys planning overhead a single subject never repays.

## The main flow: subject → course

1. **Make a folder** — one course per folder; every session runs from its root.
2. **`/setup-faculty-skills`** — once: scaffolds the workspace, seeds the learner profile, settles the theme.
3. **`/academic-advisor`** — the mission run; creates the roadmap.
4. **The loop**: `/academic-advisor` plans a unit ⟷ `/teach-unit` teaches it → `/audit` checks it → back to `/academic-advisor`, until the roadmap says *arrived*.

A `/teach-unit` that ends suspended (`gap` or `over-budget`) goes back to `/academic-advisor` — the advisor owns the reroute.

The goal itself moved? → `/academic-advisor` — the goal-shift run. Only you can fire it; no role ever infers a new destination.

**The tripwire.** If `/teach`'s mission conversation sprawls into "this is really six subjects", exit: start the main flow and carry what the conversation surfaced into the advisor's mission grilling. The exit is your act — nothing fires automatically.

## On call throughout

**Is this about something you made, or about the material?**

- **Something you made** — homework, the course build, anything you want eyes on → **`/mentor`**. Reviews and guides your work; never writes it, never grades it.
- **The material** — a concept from any unit, current or past, even after the course ends → **`/office-hours`**. Explains in the teaching's own terms; never quizzes or assesses you.

Mis-picking is safe: `/office-hours` hard-redirects questions about your artifacts to `/mentor`; `/mentor` answers small material questions inside its hint ladder and sends only wholesale gaps to `/office-hours`.

## Standalone

Want a senior reviewing a project of your own, no course? Run **`/mentor`** from the project root. Its first run interviews you and scaffolds its own records — no installer, no course folder.

## Building software, not learning?

→ `/ask-matt`.
