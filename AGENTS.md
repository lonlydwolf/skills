# lonlydwolf/skills

Agent skills, grouped into collections: `skills/<collection>/<skill>/SKILL.md`.

- [CONTRIBUTING.md](CONTRIBUTING.md) owns commit titles, pull request expectations and prose style. Maintained documentation uses no em dashes.
- [.claude-plugin/README.md](.claude-plugin/README.md) owns how collections and skills are registered. Never add `skills/<collection>/SKILL.md`: a parent skill hides the skills beneath it.
- Faculty: read [MAINTENANCE.md](skills/faculty/docs/MAINTENANCE.md) before changing anything under `skills/faculty/`. Its roles depend on each other and its invocation policy fields stay as they are.
- In progress: skills still being tried out, each independent. [skills/in-progress/README.md](skills/in-progress/README.md) lists the rules they follow. A skill moves to a collection of its own once it has proved itself in real use.
- A skill's text is behavior. Say in the pull request how a change affects people who already installed the skill.
- There is no build or test suite. The available checks are: frontmatter parses, every path in `.claude-plugin/marketplace.json` resolves, and relative links resolve. Report which of these you ran, and anything about agent behavior that you did not observe in a real session.
