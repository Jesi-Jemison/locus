# Locus — Initial Project Plan

**Baseline:** 2026-11-16. The code and README already describe a complete static site; this is a verification and migration plan, not a greenfield build.

## Phase 0 — Existing site audit
- [x] Inventory `dist/`, downloads, source notes and current workflows (repository-level pass; see [ASSET_INVENTORY.md](ASSET_INVENTORY.md)).
- [x] Review documented source families, vintages, and public provider terms; see [ASSET_INVENTORY.md](ASSET_INVENTORY.md). File-level workbook source rows and unresolved licence evidence remain release gates.
- [ ] Record screenshots and outstanding UX issues.

## Phase 1 — Preview deployment
- [ ] Import existing `Jesi-Jemison/locus` repository into Vercel.
- [ ] Confirm deployment serves `dist/` with no build command as documented in README.
- [ ] Run a smoke test: map loads; area search and profile interactions work; references download; optional business-list upload stays in browser session.

## Phase 2 — Polish and compliance
- [ ] Test desktop/mobile, keyboard, screen-reader labels, contrast and fallback states.
- [ ] Review performance and size of bundled geographical files.
- [ ] Close the licence gates documented in [ASSET_INVENTORY.md](ASSET_INVENTORY.md), including AEC notice/acceptance, supplied-segment rights, file-level workbook sources, exact NSW terms, and third-party notices.

## Phase 3 — Domain migration and release
- [ ] Attach `locus.jesicat.online` after preview approval and licence gates are closed.
- [ ] Update DNS only after verifying Vercel project settings.
- [ ] Document rollback to prior deployment and monitor broken paths.

## Definition of done
Reliable map and profiles, intact downloads, clear data provenance, no unexpected upload retention, working custom domain and rollback instructions, and resolved source/licence gates.

## Current cautions
The existing repo contains real site files. Preserve and review them; do not replace them with a generic starter bundle. The site bundle is large and includes user-supplied segment outputs whose redistribution rights are unverified. Do not treat the preview or public release as licence-cleared until the recorded gates are closed.
