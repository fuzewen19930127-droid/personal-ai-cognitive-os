# One-Page Overview

Personal AI Cognitive OS is a local-file operating layer for AI-assisted work.

## Purpose

Keep projects, rules, external knowledge, failed routes, and validation evidence outside the chat context so future AI sessions can continue work without starting over.

## Core Principles

1. Local files are the primary memory layer.
2. Current chat context is temporary working memory.
3. Stable rules, project facts, and failed routes must be written back.
4. External knowledge is evidence, not automatic policy.
5. High-change facts require current verification.
6. Traceability matters more than sounding smart.
7. Sensitive data must not be stored in public memory.

## Main Components

| Component | Directory | Role |
|---|---|---|
| Control | `system/00_control` | Routing, rules, safety, writeback policy |
| Memory | `system/01_memory` | Project memory, task memory, error routes, knowledge cards |
| Projects | `system/02_projects` | Project cards, specs, acceptance, evidence |
| External knowledge | `system/03_external_knowledge` | Local docs, repos, manifests, indexes, digests |
| Output assets | `system/04_output_assets` | Reusable deliverables |
| Audit | `system/05_audit` | Validation and sensitive-content checks |
| Evolution | `system/06_evolution` | Rule upgrades, SOP upgrades, cleanup |
| Real-time verification | `system/07_realtime_research` | Current facts and source checks |

## Default Loop

```text
classify
-> recall
-> execute
-> verify
-> write back
-> audit
-> evolve
```
