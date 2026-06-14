# Architecture

## One Sentence

Personal AI Cognitive OS is a local-file memory and governance layer for long-running AI work.

It uses Markdown, JSON, project cards, rule cards, error routes, external knowledge indexes, real-time verification records, audit logs, and a static dashboard to reduce context loss and memory drift.

## Main Flow

```text
task intake
-> classify task
-> recall L1 project memory
-> recall L2 local external knowledge
-> verify L3 real-time sources when needed
-> execute
-> verify
-> write back facts
-> record wrong paths
-> promote stable patterns
-> retire stale memory
```

## Three Information Layers

| Layer | Directory | Purpose |
|---|---|---|
| L1 project memory and rules | `system/01_memory`, `system/02_projects`, `system/00_control` | Projects, preferences, rules, decisions, task memory, error routes |
| L2 local external knowledge | `system/03_external_knowledge` | Downloaded or distilled docs, repos, papers, digests, and indexes |
| L3 real-time verification | `system/07_realtime_research` | Current APIs, prices, versions, laws, platform rules, and security guidance |

## Module Map

```text
AGENTS.md
-> system/00_control            # control, routing, rules, classification, security
-> system/01_memory             # project memory, task memory, error routes, knowledge cards
-> system/02_projects           # project cards, specs, acceptance
-> system/03_external_knowledge # local external knowledge store
-> system/04_output_assets      # reusable outputs
-> system/05_audit              # audit, sensitive scan, verification records
-> system/06_evolution          # controlled evolution, rule convergence, SOP upgrades
-> system/07_realtime_research  # real-time verification policy and records
-> scripts                      # dashboard, scan, validation
-> public                       # generated dashboard
```

## Cognitive Mapping

| Cognitive capability | System implementation |
|---|---|
| Attention | Current task and current project context |
| Long-term episodic memory | Task memory, progress logs, `source_trace` |
| Long-term semantic memory | Rule cards, knowledge cards, stable conclusions |
| Procedural memory | SOPs, scripts, automations |
| Error suppression | `error_routes.md`, deprecated rules, routes to avoid |
| Consolidation | Task-end writeback |
| Cleanup | Audit, archive, deprecation, replacement |
| Self-evolution | Error routes become rules; repeated flows become SOPs or scripts |

## Why Local Files First

The MVP uses Markdown and JSON because:

- It is easy to migrate by copying a folder.
- Both humans and AI agents can read it.
- Git can track changes to rules and memory.
- No database service is required.
- System complexity stays low in the first version.

Databases, vector search, and graph stores can be added later. They are not required for the MVP.

## Controlled Evolution

Controlled evolution means:

- Write back new facts at the end of tasks.
- Record failed routes.
- Promote repeated successful flows into SOPs.
- Promote stable SOPs into scripts or automations.
- Demote stale rules to `review`, `deprecated`, or `archived`.
- Require human confirmation for high-risk changes.

## Extension Points

- Local full-text search or vector retrieval.
- Automated external knowledge collection and digest generation.
- GitHub Issues as a task queue.
- n8n, Make, Zapier, or other workflow engines.
- Web dashboard editor.
- Multi-agent task division and validation pipelines.
