# Checks and known limitations

Faculty has been checked for instruction consistency, saved artifacts, role boundaries and representative course workflows. These results describe the conditions exercised; they do not establish reliability percentages or measured learning outcomes.

## Existing coverage

The final instruction and format review passed 88 checks, including 47 resolving instruction links. Shared course-state coverage exercised all four roles that write routing state, with 8 cases, 72 mechanical/runtime/preservation checks and 32 manual criteria passing after a correction.

Focused follow-ups covered these paths:

| Workflow | Mechanical/runtime/preservation checks | Manual criteria |
|---|---:|---:|
| Advisor research correction and acceptance | 19/19 | 5/5 |
| Editor using replacement-unit evidence | 16/16 | 5/5 |
| Editor reviewing a live event-handling defect | 20/20 | 5/5 |
| Editor → Teacher → Tutor → Editor with persistent memory disabled | 45/45 | 6/6 |

The last workflow used fresh sessions and synthetic learner replies. It exercised the handoffs without measuring a real person's understanding or retention. A separate controlled routing correction demonstrated recovery after an introduced faulty write; it does not establish autonomous recovery in every session.

## Earlier problems and corrections

- **Routing state:** Earlier sessions recorded stale timestamps or included instructional detail in the routing record. Shared rules now require fresh tool-observed UTC, workflow-only content and read-back of the saved record. Focused follow-ups passed; the earlier failures remain part of the validation history.
- **Analogy fidelity:** Roommate initially failed one of five conversations. A targeted follow-up passed four conversations after its analogy-checking instruction was clarified. This supports the exercised examples, not universal analogy correctness or proof that the wording caused the improvement.
- **Unexpected prior context:** Earlier Roommate use with ordinary memory exposed unwanted history. Some memory-off coverage used independent replacement conversations, and a representative course workflow also passed with memory disabled. Neither establishes universal isolation across hosts.
- **Research correction:** One Advisor session directly changed a research entry. A follow-up used a dedicated research worker to append a correction while preserving the original. Final acceptance followed completed research, but some preliminary draft writes occurred earlier.
- **Validation-tool compatibility:** A generic validator accepted Librarian but rejected six required manual-invocation skills because it did not recognize `disable-model-invocation`. Removing the field from disposable copies isolated that incompatibility. The maintained policy remains; those original validator results are not relabeled as passes.
- **Browser and procedure limits:** Editor reproduced an event-handling defect and rejected the artifact. Programmatic events and Tab traversal do not establish physical typing, native dropdown behavior, screen-reader usability or visual quality. Other sessions encountered browser/snapshot problems, and an earlier terminal-status procedure failed. One Teacher handoff disclosed saved notes as unrendered after browser access was denied. Later rendering cannot establish that inspection occurred before publication.

## Beta limitations

Long-term retention, transfer and real learner outcomes remain unmeasured. Teacher-commissioned research in real use and all combinations of practice, remediation, contract replacement and recovery are not exhaustively covered.

No installer compatibility result is claimed for the beta. Role discovery, saved-state loading, research-worker availability and HTML inspection depend on the app, account and available tools. Installing the skills does not establish those capabilities.

Report unexpected behavior through [issues](https://github.com/lonlydwolf/skills/issues), with the affected skill, last installation or update, tool/version, expected result and a small redacted example. See [Contributing](../../../CONTRIBUTING.md) and [maintenance](MAINTENANCE.md) for preparing a useful report or fix.
