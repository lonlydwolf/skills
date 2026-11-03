# Source Research Format

Research lives at the exact `resources/<dash-case-topic>.md` destination supplied by Advisor or Teacher. Downloaded sources live under that resource directory's `source-files/`.

## Entry conventions

A new topic file starts with the `# [Topic]` heading and Research Entry 1. Follow-up research to an existing topic file preserves prior content and appends the next numbered entry. Corrections are follow-up research: they append an entry and leave the corrected entry unchanged.

Identify duplicate sources by canonical URL, DOI, or existing local path. Reference existing records and files rather than duplicating them.

A source's full record is the `####` source block where it was first recorded, inside a topic file. That topic file and heading are its stable reference. Give each full record a heading that is unique within its topic file; add the publisher or year when two sources share a title.

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

Use the full source block for newly recorded sources. For an existing source, link its full record and include only the fields relevant to this entry.

```markdown
#### [Source title] (reused)

- **Existing Record:** [Source title](other-topic.md#source-title), Research Entry N
- **Coverage:** [...]
- **Key Evidence:** [...]
- **Limitations:** [...]
- **Correction:** [Earlier field, its recorded value, and the corrected value; or None]
```

The Existing Record link is relative to the topic file being written: `other-topic.md#source-title` for a record in another topic file (with `../` segments when it is outside this resource directory), or `#source-title` alone for a record earlier in the same file. The fragment is the full record heading's anchor: the heading text lowercased, with punctuation other than hyphens and underscores removed and each space replaced by a hyphen. Name the Research Entry that holds that record. Always link the full record, never another reused block, so attribution, canonical URL, and local path stay with the original source.

Record a correction to an earlier source record in the Correction field of a reused block, and to earlier synthesis under Conflicts and Uncertainty. When reusing a source, carry forward any earlier Correction recorded for it.

Distinguish attributed source claims from research synthesis. Record unavailable metadata and inaccessible material explicitly rather than inferring their contents.

## Completion check

Read back the saved topic file and verify:

- Every requested scope item is supported or explicitly unresolved.
- Sources are traceable, with evidence locators where available.
- Conflicts, access limitations, and uncertainty are disclosed.
- Every recorded local file exists, is readable, and has passed the role's download-safety gate.
- Every Existing Record link opens the named topic file at the full record heading in the named Research Entry.
- Prior entries and existing source files remain unchanged.

Report unmet requirements as incomplete.
