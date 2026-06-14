# Routing Rules

Use this file to decide where a task should read from and write to.

## Lightweight Tasks

Use current context only when the task is a one-off question, translation, formatting change, or small command.

## Standard Tasks

Read:

1. `AGENTS.md`
2. `system/00_control/rule_cards.json`
3. `system/01_memory/project_handoff.md`
4. `system/01_memory/immediate_task_memory_index.md`
5. `system/01_memory/error_routes.md`
6. Relevant project card

Write back when the task changes project state, rules, error routes, or reusable process.

## Enhanced Tasks

Use standard recall, then read relevant files in `system/03_external_knowledge`.

Enhanced tasks include tool selection, architecture decisions, automation design, and research.

## High-Change Tasks

Use enhanced recall, then verify current facts with official or primary sources.

High-change facts include:

- API behavior
- model availability
- software versions
- pricing
- laws and policies
- platform rules
- security guidance
- current news or market data

Record current facts separately from stable local rules.
