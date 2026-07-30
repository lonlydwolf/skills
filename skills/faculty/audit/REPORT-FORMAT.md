# Audit-report Format

`.audit/NN-<slug>.md`, at the course root — one report per unit, named for the unit's folder. `/audit` writes it; `/advisor` reads it and quotes failed findings verbatim into `unit.md`'s `## Remediation` — **teachers never read `.audit/`**, so every finding must survive being pasted somewhere else, alone.

The file is append-only across passes: a re-audit appends a new pass section, newest last; the advisor reads the last pass. Finding IDs number continuously across passes — `## Remediation` and re-audit scopes cite them, so an ID never means two things.

## Template

```md
# Audit — units/NN-<slug>

## Pass {N} — {YYYY-MM-DD} — {verified | verified-with-findings | not-verified} — {full | re-audit of F2, F4}

Coverage map: {outcomes ↔ lessons in one breath — "5 outcomes, 4 lessons, mapped both ways" — or "see F3"}
Checked: {what this pass examined — lessons read, claims fact-checked and against which sources, work/ chain, Observed}

### F{N} — {correctness | coverage | drift | retention} — {short title}

{Self-contained: lesson/file named, claim quoted or missing outcome named, what is wrong,
the evidence.}

Recommendation: {one concrete cure, phrased for the advisor to accept or reject — never an order.}
```

## Rules

- **Verdict in the pass heading, nowhere else.** The advisor's exists-and-verdict check is one glance at the last pass line.
- **Findings are quotable or they are rewritten.** No "see above", no bare file pointers standing in for the problem — the quote and the evidence travel inside the block.
- **A re-audit pass re-examines only the findings in its scope.** Each gets a one-line disposition — `F2 — resolved: {how the remediation answered it}` — or a fresh finding continuing the numbering when the cure fell short. Findings outside the scope stand without comment.
- **A verified pass with zero findings still writes its pass section.** The coverage map and Checked lines are the evidence the audit happened; the advisor's checkpoint requires them.
- **Retention findings recommend re-retrieval** — a seat in a coming unit's retrieval pool — never reopening the earlier unit.
- **Findings are the payload.** Keep the pass preamble to its two lines; analysis that produced no finding doesn't belong in the report.
