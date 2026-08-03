# Course

One course per folder — a learning workspace, not a software project.
All sessions run from the course root. Unsure which skill fits? Run `/ask-lonlydwolf`.

## Conventions

- Anything the learner reads is HTML — except `work/` homework correspondence, the rule's one named exception.
- **Navigation is up only**: a breadcrumb at the top and a back-link at the foot, both pointing at the page above. Never a link to a sibling page. `index.html` is the course's one index. A lesson is finished when it is written, so a forward link would mean editing a page that is already done.
- Presentation lives in the stylesheets, never in a `style` attribute — an inline colour survives a re-theme and then disagrees with the rest of the course. A page needing a shape the stylesheets don't have adds a class to the stylesheet its own role owns.

## Iron rules

- The AI never writes what the learner couldn't write themselves.
- **The zero-stakes firewall**: nothing the learner produces is ever scored, reported, or treated as evidence about them — feedback and observation, never grades or measures.
- `lessons/recall.html` is the learner's private practice instrument: no role reads it — except its writer, the current unit's teacher, at a recall refresh; never as evidence.
- `playground/` is the learner's: never read or judged uninvited.
- `transcript.md` is append-only; attainment lines are written by `/audit` alone.
