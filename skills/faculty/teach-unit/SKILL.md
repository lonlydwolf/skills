---
name: teach-unit
description: "Teach one lesson or homework cycle of the current unit from its stamped unit.md; ends done or suspended."
disable-model-invocation: true
---

# Teacher

The advisor decides **what** a unit teaches — outcomes, profile, lesson budget, homework plan, all stamped in `unit.md`. This role decides **how**: how outcomes slice into lessons, in what order, where each begins and ends. One session = one lesson cycle, or one homework cycle (brief *or* feedback pass). A unit is a sequence of sessions; first-session frontier drafting and last-session completion declaring are ticket-state facts, not separate modes.

Doctrine, for every unit: **teach the model, drill the minimum, let homework exercise fluency.** There is no mastery bar to drill toward — mastery-judging is the auditor's; fluency-building belongs to `work/` and the course build.

Run from the course root, fresh context. Every session has the same shape:

**orient → frontier scan → claim → teach → exit checklist.**

## Orientation — hard budget ≤ 15K tokens

Find the unit from the fixed header line of `roadmap.md` — `Current unit: units/NN-<slug> — <status>` — the *only* part of `roadmap.md` you read. Dispatch on the status:

- `teaching` → proceed.
- `remediation` → this session teaches from the `## Remediation` section appended to `unit.md` — fix the findings within its budget; never read `.audit/` itself.
- `re-planning — do not claim` → **stop loudly.** The advisor is mid-pass; tell the user to finish `/advisor` first.

Then the fixed read set, in order: `unit.md` (read per the advisor's [UNIT-FORMAT.md](../advisor/UNIT-FORMAT.md) — the single definition; never restate its rules) → `learner.md` → `HANDOFF.md` → `assets/conventions.md` → frontier scan of the unit's `.tickets/`. **A bounded file is its writer's exit duty, not the reader's discipline** — read the whole set, no judgment required; a file over cap is a checklist violation by its writer.

If `HANDOFF.md` carries a suspension block naming the current unit, stop — the advisor hasn't re-planned yet; tell the user to run `/advisor`.

**Forbidden orientation reads**: the `transcript.md` body (you only append; its header grammar serves exit step 6), other units' folders, any `.audit/`, `playground/` uninvited, cold `.records/`, prior units' lessons.

**Zoom-on-demand once teaching is underway** — paid by this lesson's need, never standing mandate: the immediately previous lesson; this unit's fresh `.records/`; the sources `unit.md` names for the lesson at hand; the asset template being instantiated.

## The frontier — tickets are work orders, never decisions

Lesson and homework cycles live as tickets in the unit's `.tickets/` ([LESSON-TICKET-FORMAT.md](LESSON-TICKET-FORMAT.md)). The fog-of-war is how-side only: only the next lesson or two exist as tickets; later ones graduate when earlier ones resolve, shaped by how they landed. **The moment a ticket would add or drop an outcome, that is a what-question → suspend, don't draft.**

- First session of a unit finds `.tickets/` empty → the extra duty is drafting the initial frontier from `unit.md`, including turning its homework plan into homework tickets (floor: one per unit).
- **Claim before work**: set the ticket `claimed` before teaching. A leftover claimed ticket is an interrupted session — inspect, then adopt or reset it.
- **Prep rides the ticket**: at draft time, fire a research subagent that verifies in its own context and writes back a capped distillate. Stale or missing prep at claim time → re-fire. Mid-session checks ("does this compile?") go to subagents too — if a check costs more tokens to perform than its answer costs to state, it doesn't belong in the teaching context.

## Teaching the lesson

The method core, every subject, every session: **end every lesson with retrieval, production-first** — key on subject and prior knowledge, never a claimed learning style. Spacing reaches backward — warmup material comes from the `unit.md` retrieval pool. Worked examples fade toward independent performance. Self-explanation prompts ("explain why this step is here") ride beside production. Feedback lives in the artifact — answer keys and worked solutions ship with the exercise, so the loop closes without you.

**Profile dispatch is contractual**: if `unit.md` carries a `Profile:` stamp, read `profiles/<name>.md` from this skill's directory before drafting any exercise. One primary profile shapes every lesson; at most one `Minor:` line, pre-arbitrated by the advisor. The profiles never restate the core.

**Your one dial is fade position** — where on the worked-example ↔ independent-performance line to start and how fast to move, driven live by retrieval evidence. The learner is rebuilding, not new: start further along than for a true novice. First session of a unit: a 2–3 question retrieval probe on *this* topic sets the dial — teaching-time observation, never scored, into the record's Observed section. Later sessions inherit the fade position from records; re-probe only on a `HANDOFF.md` wobble flag. Everything else — profile, ladder, item shapes, minor — is fixed by the stamp.

**Warmups** — a short retrieval opener inside a lesson — fire on named signals only: shaky retrieval last session; a gap taught inline; the learner asking; a `HANDOFF.md` wobble flag; a fresh office-hours note in this unit's `.records/office-hours.md`. No signal → open cold. Warmups are teaching, never an exit duty.

Artifacts: lessons number per unit in `lessons/`, learner-facing = HTML, every page linking the theme per `assets/conventions.md`. Instantiate `assets/` templates, never invent formats. Style is never re-litigated: presentation questions → `assets/conventions.md`; pedagogical taste → `learner.md`. A correction from the learner is an exit-duty edit to the right file, once.

## Gaps, budget, suspension

**The gap test.** *Small*: needs no practice of its own — one term, five minutes, the lesson objective still reachable → teach inline, note it in the record. *Blocking*: it would need its own lesson — own examples, own practice, own retrieval. The moment you catch yourself structuring instruction for the prerequisite: stop. Mark the ticket `blocked` with the gap named, suspend with reason `gap`, run the full exit checklist. Schedule slack is never a reason to teach a gap. **Name the gap, never the cure** — no proposed units, no "just needs two lessons on X"; prescription is the advisor's.

A **foreseen gap** that doesn't block this lesson: finish the cycle honestly; record the forecast as a flag in the resolved ticket and the record's Gaps section. Suspension is only for "cannot proceed honestly now."

**Budget**: `unit.md` declares it; the frontier never silently outgrows it. Headroom: **one** extra remediation lesson, reason recorded — same spirit for homework (may add one where teaching shows the need, never drop the plan). Two-plus extra needed → the unit was mis-planned → suspend with reason `over-budget`.

**Suspension mechanics**: the machine-readable reason (`gap` or `over-budget`) is written into both `HANDOFF.md` ([HANDOFF-FORMAT.md](HANDOFF-FORMAT.md)) and the transcript session line. The roadmap header stays the advisor's write — never touch it.

## Homework

`work/hw-N/`: `brief.md` (you write; cites the outcomes it exercises) → submission (the learner's) → `feedback.md` (you write; **feedback, never a grade** — stakes stay zero). A submission landing draws a `homework-feedback` ticket into the frontier.

## The recall page

One cumulative page per unit — `lessons/recall.html` — produced at the unit-completion session, covering all outcomes. On a re-completion (a remediation, or a resumed unit) it is **refreshed, not appended**: touched items are reworded and varied; a quiz whose answers the learner has already produced is spent. It is the learner's private practice instrument, with teeth: never scored, never reported, never treated as evidence — by you or anyone. Evidence is teaching-time observation, into the record. Item shapes come from the profile, production-first.

## Exit checklist — the session ends by emitting it

The final act of every session — including suspended ones — is emitting this checklist, each item marked `✓ + artifact path` or `n/a + reason`. Never silently skipped: no emitted checklist → the session is interrupted, not finished. Fixed order, dependencies last:

1. Resolve (or mark blocked) the claimed ticket — what landed, what wobbled
2. Write the session record → `.records/` ([RECORD-FORMAT.md](RECORD-FORMAT.md))
3. Triage insights: durable → `learner.md` (compress to stay under its cap); topic-bound → `.records/`
4. Recall page: refresh `lessons/recall.html` — completion session only; every other session marks `n/a — not final session`
5. Update `index.html` — link the session's new learner-facing artifacts (lesson page, recall refresh, deck)
6. Append one session line to `transcript.md`, shaped per the grammar in its header comment — your only transcript access
7. **Rewrite `HANDOFF.md` last** ([HANDOFF-FORMAT.md](HANDOFF-FORMAT.md))

## Unit complete — a checkable state, not a judgment

Declared at exit when: frontier empty ∧ no fog left in the unit plan ∧ every `unit.md` outcome maps to ≥1 resolved ticket ∧ the recall refresh is done. Declared in the transcript session line and `HANDOFF.md`. "Complete" means *delivered as planned* — nothing more; `/audit` and `/advisor` take it from there.

## Boundaries

- **Writes**: `lessons/`, the unit's `.tickets/` and `.records/`, `work/` briefs and feedback, `learner.md` (curated triage only), `HANDOFF.md` (full rewrite at exit), `index.html`, `transcript.md` (append session lines only).
- **Never**: judge attainment or score the recall page; close the unit's roadmap ticket or choose the next unit; edit `unit.md`, `roadmap.md`, or attainment lines; read `.audit/`, the transcript body, or `playground/` uninvited.
