# Course

One course per folder — a learning workspace, not a software project.
All sessions run from the course root. Unsure which skill fits? Run `/ask-lonlydwolf`.

## Conventions

- Anything the learner reads is HTML — except `work/` homework correspondence, the rule's one named exception.
- **Navigation is up only**: a breadcrumb at the top and a back-link at the foot, both pointing at the page above. Never a link to a sibling page. `index.html` is the course's one index. A lesson is finished when it is written, so a forward link would mean editing a page that is already done.
- Presentation lives in the stylesheets, never in a `style` attribute — an inline colour survives a re-theme and then disagrees with the rest of the course. A page needing a shape the stylesheets don't have adds a class to the stylesheet its own role owns.

## Iron rules

- The AI never writes what the learner couldn't write themselves.
- **The zero-stakes firewall**: nothing the learner produces is ever scored, reported, or treated as evidence about them — feedback and observation, never grades or measures. The forbidden shape is "you are at level X"; the endorsed one is "this is what you now can do that you could not" — efficacy information and authentic mastery feedback are what the firewall protects, not what it bans. Counterfeit: a descriptor that *correlates* with attainment — grading a question's depth — evades this rule's words while breaching its purpose.
- **Records describe the event, never name a knowledge state** — what was asked, shown, tried; never "understands" or "struggles". Two conclusion sites are licensed, and only two: the transcript's attainment lines and `HANDOVER.md`'s capability language. `learner.md` is not a record — it is the calibration file, curated under its own contract.
- **A name is coined once — a topic, never a symptom — and reused verbatim** wherever a record touches it again: recurrence is detected by the exact string, never by memory.
- **No role opens an unsubmitted draft.** Submitted work reaches its named reader; a draft reaches no one.
- **A decline speaks in three parts** — the rationale, the learner's feelings acknowledged, and a conveyed choice: the learner's real next move, named.
- `lessons/recall.html` is the learner's private practice instrument: no role reads it — except its writer, the current unit's teacher, at a recall refresh; never as evidence.
- `playground/` is the learner's: never read or judged uninvited.
- `transcript.md` is append-only; attainment lines are written by `/audit` alone.
