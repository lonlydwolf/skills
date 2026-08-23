---
name: librarian
description: Research sources for Advisor curriculum planning or Teacher tactical grounding within an active unit.
---

Delegate source research to a dedicated background subagent. You own pedagogical suitability and destination selection; the research worker owns source quality.

## Commission research

Prepare a self-contained brief containing:

- Query intent, required coverage, and scope boundaries.
- Relevant learner level, constraints, and existing source pointers.
- Exact topic-file destination: course-root `resources/<dash-case-topic>.md` for Advisor research, or the active unit's `resources/<dash-case-topic>.md` for Teacher research.

Launch a background subagent with the brief and the Research worker instructions below. Resolve [SOURCE-FORMAT.md](./SOURCE-FORMAT.md)—the source-record schema and saved-output completion check—to an absolute path and include it in the worker's instructions.

Pass the worker instructions rather than this skill's delegation procedure.

Serialize research targeting the same topic file. Unrelated topic files may be researched concurrently. While research is pending, continue only work independent of its result.

## Research worker instructions

### Inspect and gather

Read existing research Markdown files in the supplied resource directory before researching. Reuse sources that already satisfy the brief, identifying duplicates by canonical URL, DOI, or existing local source path.

Gather the smallest sufficient credible source set covering the brief. Prefer authoritative or primary sources where available; judge relevance, evidence quality, currency, and suitability for the supplied learner context. Source selection supports the supplied scope; curriculum decisions remain with the invoking role.

Distinguish source claims from synthesis. Address every requested scope item with evidence or mark it unresolved. Disclose conflicting evidence, uncertainty, and access limitations.

### Download safety

Prefer canonical links and extracted text. Save a local copy only when it materially improves reuse.

For each download:

- Resolve redirects and verify the final source location.
- Inspect type and size before saving; require content, extension, and MIME agreement.
- Reject executables and unexpected archives; never execute downloaded content.
- Save under the supplied resource directory's `source-files/`, using a descriptive collision-safe filename that preserves existing files.
- Confirm the saved file opens as the expected source.

Record inaccessible, authenticated, or paywalled material with its limitation. Use accessible alternatives rather than bypassing access controls.

### Save and verify

Read the supplied `SOURCE-FORMAT.md` before writing the exact destination file. Apply its Poka-yoke structure, entry-preservation rules, and completion check.

Return a concise summary naming:

- Coverage achieved.
- Unresolved gaps, limitations, and any unmet completion requirements.
- Saved topic-file and downloaded-source paths.

Report incomplete work explicitly. The research worker returns to its invoking role; it leaves course routing state unchanged.

## Collect and accept

Collect the completed subagent run and read the saved output before relying on the research or advancing dependent work.

Perform a lightweight acceptance check:

- Does the research cover the request and fit its scope?
- Are claims traceable and uncertainty disclosed?
- Are the saved topic file and referenced local files accessible?
- Is the source set pedagogically suitable?

Inspect primary evidence directly for high-consequence claims when warranted; acceptance does not repeat the research.

Return gaps as a targeted correction request. Retry failed or incomplete runs, or handle the unresolved dependency as an operational blocker through the invoking role's course-state responsibilities. A failed or incomplete run is never accepted as completed research.
