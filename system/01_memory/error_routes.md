# Error Routes

Error routes record failed paths so future agents do not repeat them.

## Template

```yaml
route_id:
wrong_path:
why_failed:
evidence:
corrected_path:
next_prevention:
status:
source_trace:
```

## Example

```yaml
route_id: error.skip_project_memory_recall
wrong_path: "Continue a long-running project using only the active chat context."
why_failed: "Important project state, previous decisions, and failed routes can be missed after context changes."
evidence: "The agent repeated an already rejected approach."
corrected_path: "Read project_handoff.md, immediate_task_memory_index.md, error_routes.md, and the relevant project card before execution."
next_prevention: "Use L1 recall for all project_handoff tasks."
status: active
source_trace: docs/proof-case.md
```
