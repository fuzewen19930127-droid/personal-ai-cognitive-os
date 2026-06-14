# Proof Case: Error Route To Rule Evolution

This example shows the smallest useful loop in the system.

## Situation

An agent tries to update project memory only from the current chat context.

## Wrong Path

```yaml
wrong_path: "Continue the project using only the current chat context."
why_failed: "The agent missed previous decisions, repeated a failed approach, and produced stale project state."
evidence: "The acceptance checklist did not match the latest project status."
```

## Error Memory

The failed path is recorded in `system/01_memory/error_routes.md`:

```yaml
route_id: error.skip_project_memory_recall
wrong_path: "Skip project memory and rely on the active chat only."
why_failed: "Long-running projects lose state when the context window changes."
corrected_path: "Read project handoff, immediate task memory, and relevant project cards first."
next_prevention: "For project handoff tasks, run L1 recall before execution."
status: active
```

## Rule Promotion

If the same error happens more than once, it becomes a rule card:

```yaml
rule_id: rule.project_memory_before_project_work
title: "Read project memory before project work"
applies_when: "A task continues a long-running project."
do:
  - "Read project handoff."
  - "Read immediate task memory."
  - "Read the relevant project card."
dont:
  - "Do not continue only from the active chat context."
```

## Result

The next time a project task starts, the agent recalls:

- project handoff
- immediate task memory
- error routes
- rule cards

The system has evolved from a one-off failure into a reusable prevention rule.
