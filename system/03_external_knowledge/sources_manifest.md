# External Source Manifest

Use this file to record local external knowledge sources.

## Template

```yaml
source_id:
title:
type:
url:
local_path:
collected_at:
last_verified_at:
review_after:
trust_level:
summary:
```

## Example

```yaml
source_id: source.example_docs
title: Example Official Documentation
type: official_docs
url: https://docs.example.invalid
local_path: external/example_docs
collected_at: 2026-06-14
last_verified_at: 2026-06-14
review_after: 2026-09-14
trust_level: primary
summary: Example source used only to demonstrate manifest structure.
```
