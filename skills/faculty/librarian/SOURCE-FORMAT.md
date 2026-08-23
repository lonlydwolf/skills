# Source Research Format

Research lives at the exact `resources/<dash-case-topic>.md` destination supplied by Advisor or Teacher. Downloaded sources live under that resource directory's `source-files/`.

## Entry conventions

Create a topic heading for new research. Follow-up research preserves prior content and appends the next numbered entry.

Identify duplicate sources by canonical URL, DOI, or existing local path. Reference existing records and files rather than duplicating them.

## Template

```markdown
# [Topic]

## Research Entry 1

- **Date:** [YYYY-MM-DD]
- **Query Intent:** [Requested research]
- **Scope:** [Included questions and boundaries]

### Sources

#### [Source title]

- **Creator / Publisher:** [...]
- **Published / Updated:** [Date or Unknown]
- **Type:** [Documentation, paper, book, video, podcast, etc.]
- **Curriculum Role:** [Primary / Supporting / Optional]
- **Coverage:** [Requested scope items supported]
- **Canonical URL:** [...]
- **Local Path:** [Relative path or None]
- **Selection Rationale:** [Credibility, relevance, and fit to the brief]
- **Key Evidence:**
  - [Source claim or finding, with page, section, heading, or timestamp when available]
- **Limitations:** [Access restrictions, evidence weaknesses, applicability limits, or None]

### Conflicts and Uncertainty

[Disagreements between sources, qualified synthesis, and unresolved scope items;
or None.]
```

Use the full source block for newly recorded sources. For an existing source, link its exact record and include only relevant Coverage, Key Evidence, and Limitations.

```markdown
#### [Source title] (reused)

- **Existing Record:** [Source record](catalog.md#source-heading)
- **Coverage:** [...]
- **Key Evidence:** [...]
- **Limitations:** [...]
```

Distinguish attributed source claims from research synthesis. Record unavailable metadata and inaccessible material explicitly rather than inferring their contents.

## Completion check

Read back the saved topic file and verify:

- Every requested scope item is supported or explicitly unresolved.
- Sources are traceable, with evidence locators where available.
- Conflicts, access limitations, and uncertainty are disclosed.
- Every recorded local file exists, is readable, and has passed the role's download-safety gate.
- Prior entries and existing source files remain unchanged.

Report unmet requirements as incomplete.
