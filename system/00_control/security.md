# Security Policy

Do not store secrets or private raw data in this repository.

## Never Store

- passwords
- API keys
- tokens
- cookies
- verification codes
- private keys
- seed phrases
- full private chat transcripts
- customer private data

## Safe Pattern

If a secret-related fact must be recorded, store only a reference:

```yaml
sensitivity: secret_excluded
secret_ref: "stored outside this repository"
reason:
action_required:
source_trace:
```

## Public Release Rule

Run `npm run scan` before publishing.
