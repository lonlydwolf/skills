# log.md Format

`.roadmap/log.md` is the advisor's append-only journal: one entry per pass, newest last. It is the ledger of what the advisor **decided** — the counterpart to the attainment lines in `transcript.md`, which record what the auditor **verified**. **The two-ledger rule**: the two never mix — a waiver line in the transcript would fork "verified" into two meanings.

## Template

```md
## {YYYY-MM-DD} — {mission | checkpoint: units/NN-<slug> landed | suspension: units/NN-<slug> | goal-shift | arrival}

Evidence: {what this pass read — audit report, records §3–4 of the landed unit, transcript tail}

Audit recommendations:
- {recommendation} — accepted: {what changes} | rejected: {why}

Plan delta:
- {promoted / demoted / struck / inserted / re-ordered — one line each, with the why for anything demoted or struck}

{Optional — only when taken:}
Accepted risk: {finding declined, why; the transcript line stays withheld}
```

## Rules

- **Append-only.** Entries are never edited or deleted — a corrected decision is a new entry that says so. The journal's value is that it can't be rewritten.
- **One entry per pass, every pass.** A pass that changed nothing still logs — "no delta; frontier re-tested, holds" is evidence the test ran.
- **Entry types map to triggers.** A pass triggered by a suspension logs as `suspension:` even though it runs as a checkpoint; `checkpoint:` is reserved for a landed, audited unit.
- **Every audit recommendation gets a verdict with a reason.** Accepted or rejected, never silently dropped — this is where "recommendations flow to the advisor" becomes checkable.
- **Every demotion or strike says why.** "No longer closes a gap: {the evidence}" — nothing leaves the plan on inertia, and nothing leaves it unexplained.
- **Accept-the-risk lives here, permanently.** Ordering the once-declined remediation later is a new entry, not an edit.
- **Gist-length lines.** The log indexes decisions; the full reasoning lives in the pass's planning tickets when there was one. A paragraph-long line wants to be a ticket.
