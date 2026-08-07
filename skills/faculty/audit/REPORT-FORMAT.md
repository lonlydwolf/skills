# Audit-report Format

`.audit/NN-<slug>.md`, at the course root — one report per unit, named for the unit's folder. `/audit` writes it; `/academic-advisor` reads it and quotes failed findings verbatim into `unit.md`'s `## Remediation` — **teachers never read `.audit/`**, so every finding must survive being pasted somewhere else, alone.

The file is append-only across passes: a re-audit appends a new pass section, newest last; the advisor reads the last pass. Finding IDs number continuously across passes — `## Remediation` and re-audit scopes cite them, so an ID never means two things.

## Template

```md
# Audit — units/NN-<slug>

## Pass {N} — {YYYY-MM-DD} — {verified | verified-with-findings | not-verified} — {full | re-audit of F2, F4}

Coverage map: {per outcome, where it landed and the offered feedback-bearing opportunities — "O1 ×3 (L01, L02, hw-1) · O2 ×1 (L03)" — the advisor's thin-outcome check reads off this line; "see F3" where a finding carries the detail}
Checked: {what this pass examined — lessons read, claims fact-checked and against which sources, work/ chain, Observed}
Tally: {one count per axis, worst finding named beside any nonzero count — "correctness 0 · coverage 2 (F3 worst) · drift 0 · retention 1 (F5) · evidence 0"}

{re-audit passes only: one disposition line per scoped finding, before any fresh finding —
`F2 — resolved: {how the remediation answered it}`}

### F{N} — {correctness | coverage | drift | retention | evidence}{ · divergence} — {short title}

{Self-contained: lesson/file named, claim quoted or missing outcome named, what is wrong,
the evidence.}

Recommendation: {one concrete cure when in hand, phrased for the advisor to accept or reject — never an order; none in hand → "cure for the advisor to design", plainly.}
```

## Rules

- **Verdict in the pass heading, nowhere else.** The advisor's exists-and-verdict check is one glance at the last pass line.
- **Findings are quotable or they are rewritten.** No "see above", no bare file pointers standing in for the problem — the quote and the evidence travel inside the block.
- **A re-audit pass re-examines only the findings in its scope.** Each gets a one-line disposition — `F2 — resolved: {how the remediation answered it}` — or a fresh finding continuing the numbering when the cure fell short. Findings outside the scope stand without comment.
- **A verified pass with zero findings still writes its pass section.** The coverage map and Checked lines are the evidence the audit happened; the advisor's checkpoint requires them.
- **Retention findings recommend a pool move** — a seat in a coming unit's retrieval pool, or retirement from it — never reopening the earlier unit.
- **Findings first, cures at writing time.** Inventory every finding before drafting any recommendation; recommendations are written with the report. A cure is stated only when already in hand — most are obvious and cost a line — never searched for: solution-hunting mid-audit pads reports and bends findings toward their cures.
- **A divergence between two evidence sources is a finding in its own right**, filed on the axis of the artifact that would be wrong if the divergence resolves against it — in practice, the axis of the check that surfaced it — and marked in the heading — `F{N} — {axis} · divergence — {title}`. Its recommendation may be purely interpretive, no cure: agreement between one author's documents is reliability, not validity; divergence is the informative outcome, not a defect in the audit.
- **A record-based finding cites its session** — `session NN`, never just "the records".
- **Confidence travels inside the finding block.** A finding whose evidence is record-only says so — that is the low-confidence class; page- and `work/`-visible evidence is the high. A finding pasted somewhere else, alone, must carry its confidence with it.
- **The tally guards against masking.** One axis's findings must not read as the whole pass's health; the per-axis counts make a quiet axis visible at the same glance as the verdict.
- **Findings are the payload.** Keep the pass preamble to its three lines; analysis that produced no finding doesn't belong in the report.
