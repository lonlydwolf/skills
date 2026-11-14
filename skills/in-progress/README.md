# In progress

Skills that are still being tried out on real work. Each one is independent: install any of them alone. They may change or be removed. A skill that proves itself moves into a collection of its own.

| Skill | What it does |
|---|---|
| [audit](audit/SKILL.md) | Reads a repository or one area of it and reports how it works, what is wrong (with evidence) and what to do about each problem. It changes nothing. |
| [request-review](request-review/SKILL.md) | A second model reviews a finished task or a whole change and only reports. Each author, you included, answers the findings on their own part (fixed, intentional or declined), and you get a report of what is still open. |
| [file-pr](file-pr/SKILL.md) | Writes a pull request that says why the change exists, shows what changed, lists what was and was not verified, and states the merge risk. |
| [jj-commit-message](jj-commit-message/SKILL.md) | Writes the description for one jj change from its diff: a title in the repository's convention and a body only when the reason is not obvious. It says when a change should be split. |

## Install

```sh
npx skills@latest add lonlydwolf/skills --skill audit --skill request-review --skill file-pr --skill jj-commit-message
```

Choose the tools you use when prompted. Add `-g` to install for every project instead of the current one.

`audit`, `request-review` and `jj-commit-message` run only when you invoke them by name. How you do that depends on the tool: for example `/request-review` in Claude Code and `/skill:request-review` in Pi. `file-pr` can also be started by the agent when you ask it to file a pull request.

## jj-commit-message from the terminal

The skill can draft a description without an agent session. Send the recent titles and the change's diff to a headless agent, invoke the skill by name, and hand the result to `jj describe --stdin --editor`. That opens the draft in your editor, and jj drops the `JJ:` notes when you save. Capture the draft first, so that a failed call never reaches `jj describe`. With Claude Code, for example:

```sh
draft="$({
  echo "Recent titles in this repository:"
  jj log --no-graph -r 'ancestors(@, 12) ~ @' -T 'description.first_line() ++ "\n"'
  echo "The diff:"
  jj diff -r @ --git
} | claude -p --tools "" --no-session-persistence "/jj-commit-message I wrote this change myself. The titles and the diff are on standard input.")" \
  && [ -n "$draft" ] \
  && printf '%s\n' "$draft" | jj describe --stdin --editor
```

Wrap this in a jj alias or a shell function of your own. The skill must be installed where the agent looks for skills.

## What these skills assume

They hold procedure for one kind of task. They do not hold personal preferences, such as which version-control tool you use or which model reviews: say those in your prompt or in your own instruction files. A repository's own conventions, such as its title format or pull request template, outrank the defaults in these skills.

In `request-review` the reviewer needs no skill of its own: the brief it receives carries its rules. Authors fix, the reviewer only reports, and anything still disputed after one follow-up goes to you. It stops after its report, so filing the pull request stays your decision.

## What has and has not been tried

Each skill has been run on test repositories built for the purpose. None has been used on real work yet, and that is what this collection is waiting for.

## Rules for a skill in this collection

- One job, written for any agent tool. Name no tool-specific command where a plain description works.
- About 100 lines or fewer. Remove an instruction if agents already behave that way without it.
- It exists because the same instruction was being typed by hand repeatedly, or because one mistake was costly enough to prevent.
- Unique name across the repository, registered in the [skill catalog](../../.claude-plugin/README.md).

## Sources

These skills adapt ideas from [t3dotgg/tstack](https://github.com/t3dotgg/tstack) (`sol-loop`, `file-pr`), [mattpocock/skills](https://github.com/mattpocock/skills) (`pr`, `code-review`) and [pstack](https://github.com/cursor/plugins/tree/main/pstack) (`interrogate`, `orchestrate`). The text is written for this collection.
