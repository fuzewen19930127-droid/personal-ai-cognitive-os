# Publication Checklist

Run this checklist before publishing the repository.

## Required

- [x] Replace the draft license with a final license.
- [ ] Run `npm run check`.
- [ ] Confirm `scripts/scan_sensitive.mjs` reports no high-risk findings.
- [ ] Confirm there are no API keys, tokens, cookies, verification codes, private keys, or seed phrases.
- [ ] Confirm there are no full private chat transcripts.
- [ ] Confirm there is no customer, family, payment, identity, address, or phone data.
- [ ] Confirm there are no private local paths that expose a real user name.
- [ ] Confirm the README explains the project in under 3 minutes.
- [ ] Confirm a new user can run `npm run dashboard` in under 10 minutes.
- [ ] Confirm sample data is fictional.
- [ ] Confirm `public/index.html` is generated from sample data.

## Recommended

- [ ] Add a screenshot or GIF.
- [ ] Add a sanitized proof case.
- [ ] Add GitHub Topics.
- [ ] Add release notes.
- [ ] Create a `v0.1.0` release.

## Do Not Publish

- Raw private memory stores.
- Chat export files.
- Full automation logs.
- Customer project files.
- Media files that may contain private information.
- Large numbers of private local paths.
