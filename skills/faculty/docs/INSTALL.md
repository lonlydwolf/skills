# Install Faculty

Install all seven Faculty skills in the tool you prefer. The [Faculty guide](../README.md) explains how they work together.

## Before you start

You need:

- Node.js with `npm` and `npx`. The current skills CLI requires Node.js 22.20.0 or newer; its [published package metadata](https://registry.npmjs.org/skills/latest) records the requirement.
- Git, for downloading this repository.
- A tool supported by the [skills installer](https://github.com/vercel-labs/skills#supported-agents), with access to read and write your course folder and support for separate Librarian research work.

## Install

Run this command in your terminal:

```sh
npx skills@latest add lonlydwolf/skills
```

In the installer:

1. Select all seven skills in the **Faculty** group: `init-course`, `academic-advisor`, `teacher`, `tutor`, `editor`, `librarian` and `roommate`.
2. Choose the tool or tools you want to use.
3. Choose **Global** to make Faculty available across course folders, or **Project** for the current workspace. Global is convenient when maintaining several courses, where your tool supports it.
4. Choose the installation method and confirm. The installer offers symlinks or copies; use copies when your setup cannot follow symlinks.

If you choose Project scope, make sure the installed skills are available when your tool opens the course folder.

You can also select Faculty explicitly:

```sh
npx skills@latest add lonlydwolf/skills \
  --skill init-course academic-advisor teacher tutor editor librarian roommate
```

`@latest` selects the installer version. The repository argument identifies the skill source. Installing Faculty requires initialization and all six roles, even though you invoke most of them separately.

## Start your first course

1. Open a new course folder in your chosen tool and confirm the Faculty skills are available there.
2. Select `init-course` and ask it to initialize the current folder. It checks the required roles before creating course files.
3. Start a fresh session in the same folder, select `academic-advisor` and describe your goal, starting point and available time.
4. Follow the saved next action and choose the named role in a fresh session at each handoff.

For formal sessions, make sure your tool loads the course's saved routing state and shared rules. If that is not automatic, include: “Before acting, read `.course-rules.md` and the current course state.”

## Update Faculty

To update the installed Faculty skills:

```sh
npx skills@latest update \
  init-course academic-advisor teacher tutor editor librarian roommate
```

Use the same Project or Global scope as the installation. The installer supports `-p` for Project and `-g` for Global when you want to choose explicitly. Restart the session after an update so your tool loads the current instructions.

Your course folder holds existing rules, contracts and results. A skill update leaves those course records in place; follow any migration instructions supplied with a change that affects an existing course.

## If setup fails

- **`npx` is missing or Node is too old:** install a supported Node.js version and reopen your terminal.
- **The repository cannot be downloaded:** check Git availability, network access and the reported repository-access error.
- **A role is missing:** install all seven Faculty skills in the same scope and confirm your tool loads that location.
- **Files install but the workflow cannot run:** check the tool's workspace, research and inspection capabilities. [Known limitations](CHECKS.md) describes what the existing evidence establishes.

Report a problem through [issues](https://github.com/lonlydwolf/skills/issues) with your tool/version, selected skill, last installation or update, expected behavior and the visible error. Remove personal or work information from examples. See [Contributing](../../../CONTRIBUTING.md) for reporting or proposing a fix.

See the [installer reference](https://github.com/vercel-labs/skills) for its full set of commands and options.
