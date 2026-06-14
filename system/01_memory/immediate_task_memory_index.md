# Immediate Task Memory Index

Complex tasks should write one compact memory entry at the end. Future agents can recall entries by `project_id`, `system_id`, `topic_tags`, and `keywords`.

## Entry Template

```yaml
task_memory_id:
created_at:
user_intent:
system_id:
project_id:
item_type:
memory_type:
status:
sensitivity:
topic_tags:
keywords:
summary:
outputs:
verification:
decisions:
next_actions:
source_trace:
```

## Example

```yaml
task_memory_id: 2026-06-14_public_template_v0_1
created_at: 2026-06-14
user_intent: Prepare a public v0.1 template for Personal AI Cognitive OS.
system_id: system_control_system
project_id: sample_personal_ai_os
item_type: release_preparation
memory_type: episodic_memory
status: completed
sensitivity: public_example
topic_tags:
  - ai-agent-memory
  - local-first
  - project-handoff
keywords:
  - rule_cards
  - error_routes
  - dashboard
summary:
  - Replaced private context with sample data.
  - Added rule cards, memory files, project card, dashboard generator, validator, and sensitive scan.
verification:
  - npm run check passed.
decisions:
  - Keep the MVP local-file-first.
next_actions:
  - Add screenshots and more proof cases.
source_trace: local_template_example
```
