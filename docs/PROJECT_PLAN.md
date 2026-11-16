# Locus — Initial Project Plan

**Baseline:** 2026-11-16. The code and README already describe a complete static site; this is a verification and migration plan, not a greenfield build.

## Phase 0 — Existing site audit
- [ ] Inventory `dist/`, downloads, source notes and current workflows.
- [ ] Verify intended sources and data vintages; identify any dataset limitations.
- [ ] Record screenshots and outstanding UX issues.

## Phase 1 — Preview deployment
- [ ] Import existing `Jesi-Jemison/locus` repository into Vercel.
- [ ] Confirm deployment serves `dist/` with no build command as documented in README.
- [ ] Run a smoke test: map loads; area search and profile interactions work; references download; optional business-list upload stays in browser session.

## Phase 2 — Polish and compliance
- [ ] Test desktop/mobile, keyboard, screen-reader labels, contrast and fallback states.
- [ ] Review performance and size of bundled geographical files.
- [ ] Validate source/methodology citations and licences.

## Phase 3 — Domain migration and release
- [ ] Attach `locus.jesicat.online` after preview approval.
- [ ] Update DNS only after verifying Vercel project settings.
- [ ] Document rollback to prior deployment and monitor broken paths.

## Definition of done
Reliable map and profiles, intact downloads, clear data provenance, no unexpected upload retention, working custom domain and rollback instructions.

## Current cautions
The existing repo contains real site files. Preserve and review them; do not replace it with the generic starter bundle.
