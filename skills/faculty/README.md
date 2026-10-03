# Faculty

This folder contains seven skills and their shared documentation. Each skill owns a specific part of a course. The course folder stores the plan, notes, assignments and results so you can continue across sessions.

## Start a course

1. [Install Faculty](docs/INSTALL.md) in your preferred tool, then open an empty course folder as your workspace.
2. Select `init-course` to set up that folder.
3. In a fresh session, select `academic-advisor` and describe your learning goal, starting point and available time.
4. Follow the saved next action. Start a fresh session with the selected role at each handoff.

For example: “I know spreadsheets and want to clean CSV datasets in Python. I have three hours a week and want to build a script I can use.”

## How the roles work together

| Skill | Responsibility |
|---|---|
| `init-course` | Set up a new course folder. |
| `academic-advisor` | Plan the course, define units, resolve curriculum blockers and close completed units. |
| `teacher` | Teach, guide practice and assign work within the current unit. |
| `tutor` | Evaluate understanding against the unit's requirements. |
| `editor` | Review completed builds and revisions. |
| `librarian` | Research sources when commissioned by Advisor or Teacher. |
| `roommate` | Explore questions and analogies using the context you supply. |

You choose the learner-facing roles explicitly. Advisor or Teacher arranges Librarian's research. Roommate is available for exploration alongside the course.

Each unit defines what you must demonstrate. Teacher helps you prepare, Tutor evaluates understanding, and Editor reviews builds when required. A failed evaluation or review leads to further practice or revision. Advisor closes the unit once its requirements are met.

See [Usage](docs/USAGE.md) for examples of lessons, handoffs, submissions and resuming a course.

## Find the right document

- **Setup or installation trouble:** [Installation](docs/INSTALL.md) and [Troubleshooting](docs/TROUBLESHOOTING.md).
- **Course behavior:** [Design](docs/DESIGN.md) and [Role rationale](docs/ROLE-RATIONALE.md).
- **Proposing a fix:** [Maintenance](docs/MAINTENANCE.md) and [Contributing](../../CONTRIBUTING.md).
- **Coverage and limitations:** [Checks](docs/CHECKS.md).
- **Ideas behind the design:** [Education sources](docs/sources/README.md).
- **Preparing a release:** [Releasing](docs/RELEASING.md).

The role directories contain the maintained skill instructions and artifact formats. Keep changes there aligned with the design and relevant documentation; the maintenance guide explains ownership and course-record compatibility.
