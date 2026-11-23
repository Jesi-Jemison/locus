# Locus asset inventory and audit checkpoint

**Reviewed:** 2026-11-23  
**Repository:** `Jesi-Jemison/locus`  
**Review scope:** committed file inventory, deployment manifest, workbook download assembly, and source/method notes. No deployed preview or live-site behaviour was tested in this checkpoint.

## Repository and deployment shape

- The repo is a static site. `vercel.json` sets `framework: null`, no build command, and `outputDirectory: dist`.
- The site entry is `dist/index.html`, with `app.js`, `profiles.js`, `theme.js`, stylesheet files, vendored Leaflet and SheetJS, and browser-loaded assets using relative paths.
- The recursive Git tree contains **79 files** (**142,110,386 bytes**). `dist/` contains **73 files** (**142,103,391 bytes**).
- `dist/data/` contains **49 files** (**102,568,083 bytes**), including compressed locality/geography layers, demographic records, and recommendations.
- `dist/downloads/` contains **13 files** (**38,295,882 bytes**): source/method notes, provenance and validation files, business and overlay templates, the NSW workbook, and a split national workbook.

## Download behaviour confirmed from code and manifest

- The Australia master workbook is assembled in the browser from four sequential `.bin` chunks listed in `dist/downloads/national-download.json`. The manifest declares `Australia_Master_Geographic_Reference.xlsx`, **27,024,583 bytes**, SHA-256 `053bcbf3d4e4eaa0a3295a9fe3372d42101bbdbd388d4dbd20c4e99d6f5fd597`.
- The click handler checks that the reconstructed workbook has the expected byte length before creating the browser download. A checksum comparison is not performed in the observed handler.
- The NSW workbook is a direct relative-path download, **11,251,365 bytes**.
- `index.html` describes uploaded business and overlay files as processed in the browser tab and not uploaded. This is confirmed by the visible copy and client-side file inputs; it still needs network/runtime verification before the privacy claim is treated as proven.

## Source and vintage notes present in the bundle

- Demographic profiles are documented as ABS 2021 Census General Community Profile, using SAL and SA4, with 2021 / ASGS Edition 3 boundaries. The source inventory records ABS source and download URLs, SHA-256 values, and retrieval date 2026-11-05.
- The demographic validation file reports 15,459 profiles, 2,148,801 unique published cells verified, 0 mismatches, and 0 unverified references. It reports 15,352 SAL and 107 SA4 profiles.
- The Australia master methodology identifies SAL Edition 4 (2026), common-mesh-block relationships, cross-vintage polygon intersections, and supplied Locus segmentation data whose vintage may be unknown.
- The NSW master methodology identifies a 2026-11-03 snapshot, 4,607 NSW locality polygons, many-to-many geographic mappings, and pending Edition 4 urban/remoteness releases at that snapshot.
- Methodology files state ABS data is used with permission and DataPacks are supplied under CC BY 4.0. The full licences and terms for every other bundled geography source still need checking against the cited source pages and workbook source registers.

## Findings and remaining Phase 0 work

1. **Bundle inventory: completed as a repository-level pass.** The existing bundle is real, large, and should be preserved; this confirms the project plan's warning against replacing it with a starter.
2. **Data and licence audit: still open.** Compare the workbook source registers and acquisition notes to the delivered files, confirm licences/terms for each source, and review the limits recorded in each workbook.
3. **Screenshots and outstanding UX issues: still open.** Capture a Vercel preview after one exists; record loading, failure, and responsive issues.
4. **Runtime checks: still open.** Verify map/layer/profile interactions, the four-part workbook download and its digest, direct NSW workbook download, and the client-side-only upload claim in browser network logs.
5. **Performance/accessibility: still open.** Review initial requests and geography payload sizes, desktop/mobile behaviour, keyboard operation, labels, contrast, and fallback states.

## Scope boundary

This checkpoint documents what is in Git and what the source says. It does not change site code, data, deployment configuration, DNS, or the current published site. Continue with the remaining Phase 0 checks before treating the Vercel preview or domain migration as ready.
