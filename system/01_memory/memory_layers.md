# Memory Layers

| Layer | Name | Stored in | Purpose |
|---|---|---|---|
| L1 | Project memory and rules | `system/01_memory`, `system/02_projects`, `system/00_control` | Personal project state, rules, preferences, error routes, decisions |
| L2 | Local external knowledge | `system/03_external_knowledge` | Local source manifests, indexes, digests, and candidate rules |
| L3 | Real-time verification | `system/07_realtime_research` | Current facts that may change |

## Layer Rules

- L1 is the default memory for long-running project work.
- L2 is evidence and background knowledge.
- L3 is for facts that may be stale.
- L3 can update current facts, but it does not automatically rewrite L1 rules.
