# Contributing

You can help by reporting a problem, suggesting an improvement, correcting documentation or opening a pull request. Start with the smallest change that addresses the issue.

## Report a problem

Open an [issue](https://github.com/lonlydwolf/skills/issues) with:

- The skill involved and when you last installed or updated it (include a source revision if known).
- Your app, app version and task environment.
- What you expected and what happened.
- Steps to reproduce the problem, with a small example when possible.
- Relevant file excerpts or screenshots with personal and work information removed.

For a course-workflow problem, include the selected role and current next action. For an installation problem, include the installation route and visible error. You do not need to understand the implementation to report a useful issue.

## Propose a change

For a substantial change to role responsibilities, assessment, course progression or installation, open an issue explaining the problem and proposed behavior before investing in a large implementation. Small corrections and focused fixes can be proposed directly in a pull request.

Faculty contributors should read [the design](skills/faculty/docs/DESIGN.md) and [role rationale](skills/faculty/docs/ROLE-RATIONALE.md). The [maintenance guide](skills/faculty/docs/MAINTENANCE.md) explains which files to change and the boundaries to preserve. [Checks and known limitations](skills/faculty/docs/CHECKS.md) describes the scope of existing validation.

## Prepare a pull request

1. Work from the current source and keep unrelated changes separate.
2. Update the maintained skill files and relevant documentation together.
3. Explain the concrete problem, resulting behavior and any effect on existing courses.
4. Describe what you checked and what remains unverified. Include a small before/after example when useful.
5. Link the issue when one exists.

Keep commits focused on one logical change. Follow the existing title convention, such as `fix(faculty): correct the review route` or `docs(faculty): clarify course setup`, with concise body bullets when explanation is needed.

Write documentation for readers discovering the repository for the first time. Explain necessary product concepts and use direct links to the relevant files. Use commas, colons, parentheses or separate sentences instead of em dashes.

Maintainers publish accepted source updates. Explain how your change affects installation or existing courses, and include migration instructions when needed.
