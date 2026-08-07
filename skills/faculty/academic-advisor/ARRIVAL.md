# Arrival

The final stamp — taken only when the checklist below passes.

## The arrival checklist

Four items, mechanical by design. The arrival log entry enumerates them pair-by-pair — each item beside the artifact that satisfied it — so a later checker can re-run the list against the same artifacts:

1. **Every taught unit accounted for** — an attainment line in `transcript.md`, or a logged accepted-risk entry. No third state.
2. **Frontier and fog empty.**
3. **Every destination capability backed** — each capability named in the destination sentence maps to at least one verified outcome, and that outcome to at least one `independent`-rung homework brief, submitted and audit-verified. Check stamps and audit reports, never `work/` itself.
4. **The handover written and confirmed** at the arrival exchange (below).

Any item failing means the course isn't done: another unit, not an arrival.

## The handover

Write `HANDOVER.md` per [HANDOVER-FORMAT.md](HANDOVER-FORMAT.md). Ask the user where it should land: if they name a project directory, write it at that directory's root, creating the directory if needed; with no project directory, write it at the course root (the format doc says what the fallback adds to the document). Present it at the confirm/adjust exchange: the learner reads it and may annotate before anything consumes it.

## The final stamp

Arrival is a checkpoint like any other: present it as the plan delta and let the user confirm — then the **final stamp**: set the header status to `arrived`, regenerate `roadmap.html` as the arrival render ([ROADMAP-PAGE.md](ROADMAP-PAGE.md#arrival)), clear the `now` tag from `index.html` (the last unit is no longer current, and a finished course showing a `now` is the one place positional language turns into a claim — the teacher cannot do this, having already stopped), delete the standing completion block from `HANDOFF.md` (no block outlives a pass — the archive retires clean), and log the pass as `arrival`, checklist enumerated. No next unit is stamped; this is the one pass that ends without one. The folder retires as the archive `/office-hours` serves; a next journey is a new folder, starting from `learner.md` carried forward.
