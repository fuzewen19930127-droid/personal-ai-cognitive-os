# AGENTS.md

This file defines how AI agents should work inside this repository.

This repository is not a normal notes folder. It is a local-file AI cognitive memory system. The goal is to help agents continue long-running projects without relying only on the current chat context.

## Language Rule

Public documentation in this template is written in English. Machine-readable fields stay in English, including JSON keys, variable names, environment variables, command names, package names, and API fields.

If you adapt this template for a different language, keep machine fields stable and translate only human-facing text.

## Task Start Rule

Classify every new task before deciding what to read.

| `task_type` | Read scope |
|---|---|
| `simple_qa` | Current context only |
| `project_handoff` | `system/01_memory`, project card, audit logs |
| `code_implementation` | Relevant files, project card, acceptance checklist |
| `automation_design` | Rule cards, project card, audit logs |
| `content_production` | Project card, output assets, publication checklist |
| `technical_selection` | External knowledge index, project goal, validation criteria |
| `system_governance` | `system/00_control`, memory layer, audit layer |

## Three-Layer Recall

Standard and higher-complexity tasks use three-layer recall.

| Layer | Entry points | Purpose |
|---|---|---|
| L1 project memory and rules | `system/01_memory`, `system/02_projects`, `system/00_control` | Project state, stable rules, task memory, decisions, error routes |
| L2 local external knowledge | `system/03_external_knowledge` | Downloaded or distilled external knowledge |
| L3 real-time verification | `system/07_realtime_research` | Current APIs, prices, laws, platform rules, software versions, security guidance |

## Default Read Order

For standard and higher-complexity tasks, read in this order:

1. `AGENTS.md`
2. `system/00_control/one_page_overview.md`
3. `system/00_control/rule_cards.json`
4. `system/01_memory/project_handoff.md`
5. `system/01_memory/immediate_task_memory_index.md`
6. `system/01_memory/error_routes.md`
7. Relevant project cards or external knowledge indexes
8. Real-time verification records when the task depends on changing facts

## Writeback Rule

Long-lived information must be classified before it is written back.

```yaml
system_id:
item_type:
memory_type:
status:
sensitivity:
source_trace:
updated_at:
next_action:
```

At the end of complex tasks, update the relevant files:

- `system/01_memory/immediate_task_memory_index.md`
- Relevant project `progress_log.md`
- `system/01_memory/error_routes.md` when a failed path was found
- `system/01_memory/project_handoff.md` when project state changed
- `system/06_evolution/evolution_log.md` when a stable rule or SOP changed

## Sensitive Information Rule

Do not write:

- passwords
- API keys
- tokens
- cookies
- verification codes
- private keys
- seed phrases
- complete private chat transcripts
- customer private data

If a related fact must be recorded, use a sanitized reference:

```yaml
sensitivity: secret_excluded
secret_ref:
reason:
action_required:
source_trace:
```

## Acceptance Rule

Do not say "verified" when something was only created.

Important deliveries must state:

- what was created
- what was run
- how it was verified
- what was not verified
- risks and next steps

## Controlled Evolution Boundary

Agents may record:

- facts completed in the current task
- verified project state
- failed routes
- repeated successful process candidates

Agents must not automatically:

- delete the only copy of evidence
- publish or send external messages
- change payments or account permissions
- read or output secrets
- promote a one-off guess into a long-term rule
