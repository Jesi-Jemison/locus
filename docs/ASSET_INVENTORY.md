# Locus asset inventory and source/licence audit

**Reviewed:** 2026-11-23  
**Repository:** `Jesi-Jemison/locus`  
**Review scope:** committed file inventory, deployment manifest, browser source references, documented source/vintage notes, and publicly available source-provider terms. The binary master workbooks and their embedded Sources sheets could not be read through the connected GitHub file interface; no live browser or Vercel preview was tested.

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

## Source and vintage audit

| Source family | What the repository says or shows | Audit result |
| --- | --- | --- |
| ABS ASGS Edition 4 (2026) boundaries and allocations | Australia master methodology identifies SAL Edition 4 (2026), common-mesh-block relationships, and spatial cross-vintage intersections. | **Source and broad terms confirmed.** ABS’s Edition 4 boundary page says CC BY 4.0 applies unless otherwise noted. This is a modern geography vintage; preserve the distinct 2021 Census vintage in demographic profiles. |
| ABS 2021 Census General Community Profile | SAL and SA4 source URLs, download URLs, source checksums and 2026-11-05 access date are recorded. The data manifest identifies 2021 / ASGS Edition 3. The validation report records 15,459 profiles, 2,148,801 unique published cells verified, 0 mismatches and 0 unverified references. | **Provenance is documented and internal validation is strong.** The ABS general copyright page licenses most ABS website material CC BY 4.0, subject to exceptions. The DataPacks page itself does not identify the product-specific licence in its visible text, so the original DataPack README/licensing file still needs to be retained and reconciled to the claim in the Locus methodology. Keep attribution, source, Census year and boundary vintage with each profile. |
| NSW Spatial Services Suburb/locality layer | NSW master methodology identifies 4,607 locality polygons and the feature layer URL used for source material. The matching Data.NSW resource record currently reports its licence as “License Not Specified.” Spatial Services’ general copyright page says its material is CC BY 4.0 unless otherwise stated and requests the attribution shown below. | **Provisionally reusable, exact item terms need confirmation.** The general provider policy supports CC BY 4.0, but the exact resource record is silent. The visible Locus map attribution omits the NSW Spatial Services credit. Confirm the layer’s item terms and add the provider attribution to the map/workbook notices. |
| NSW Electoral Commission 2021 district boundaries | The NSW methodology says intersections use NSWEC 2021 redistribution polygons. | **General terms found; workbook-level notice remains unverified.** NSWEC’s site copyright says covered material is CC BY 4.0 and requires attribution, a licence link and indication of changes; exclusions may require permission. The site’s visible source-link list does not link the NSWEC page, and the map attribution string does not include NSWEC. Check the workbook source row and any exclusions, then include the required notice where the derived data is distributed. |
| Australian Electoral Commission federal boundaries | Australia methodology describes federal divisions and the site links to AEC boundary downloads. The visible map code currently shows only “ABS · AEC · Locus supplied” in its map attribution. | **Release blocker.** AEC’s download licence permits creating and distributing derivative products subject to its conditions. For a digital derivative product, it requires the AEC copyright statement and a fuller notice describing the incorporation, permission and accuracy disclaimer; it also requires retaining notices and supplying the derivative/distribution information if requested. The current map credit is not that notice. The workbook notice and evidence that the downloader accepted the AEC terms are not accessible in this audit. Add the required digital-product notice to the site and relevant workbook, preserve acceptance/source records, and recheck the exact federal boundary edition/date before release. |
| Supplied Locus segmentation / SEIFA context | Australia methodology says Mosaic labels and Helix persona/group values came from a supplied `locus.xlsx`; it says commercial segmentation and SEIFA years are unknown. The public bundle includes `dist/data/locus.json.gz`. | **Release blocker until rights and vintage are evidenced.** The public repo contains outputs derived from a supplied workbook, but the repo contains no licence/permission record for the Mosaic/Helix fields and does not identify their vintage. ABS SEIFA may be separately reusable under ABS terms, but it must not be conflated with the commercial segments. Obtain evidence covering public redistribution of the supplied data and identify each vintage, or remove those fields from the public bundle. |
| OpenStreetMap basemap | `app.js` uses the standard HTTPS `tile.openstreetmap.org` URL and Leaflet attribution includes a clickable OpenStreetMap copyright link. No prefetch/offline tile code was found in the reviewed path. | **Source attribution appears compliant in code.** OSM data is ODbL; the tile server is subject to a separate use policy. Runtime verification still needs to confirm the attribution remains visible and that browser requests follow the tile policy. |
| Bundled software | `dist/vendor/leaflet.js` identifies Leaflet 1.9.4. `dist/vendor/xlsx.js` identifies SheetJS. The repository contains no root licence or third-party notices file; the README says no licence is granted by the repository. | **Third-party notices are missing from the repo inventory.** Leaflet 1.9.4 uses BSD-2-Clause; SheetJS Community Edition uses Apache 2.0. Add a readable third-party notices file and the applicable licence texts/copyright notices before distributing the bundle. Confirm the bundled SheetJS build is Community Edition and preserve any upstream notices. |

### Required credits and evidence

- **NSW Spatial Services:** `© State of New South Wales (Spatial Services, a business unit of the Department of Customer Service NSW). For current information go to spatial.nsw.gov.au.` Indicate changes where required by the licence.
- **NSW Electoral Commission:** `© State of New South Wales through the NSW Electoral Commission`, link the CC BY 4.0 licence and indicate modifications for covered material.
- **AEC:** follow the current [AEC Data Download Licence](https://www.aec.gov.au/Electorates/gis/GIS_Data_Download_Data_Licence.htm) derivative-product notice for digital products; preserve the actual accepted terms and source version.
- **ABS:** retain “Based on Australian Bureau of Statistics data” (or “Based on ABS data”) for derived material, with a link to the source and the applicable licence. Confirm the DataPack-specific readme for the files actually used.
- **OpenStreetMap:** retain visible “© OpenStreetMap contributors” linked to its copyright/licence page, as the current map code does.

## Release gates from this audit

1. Record exact source rows, source file names, release dates and licences from both embedded workbook Sources sheets. Those sheets could not be inspected using the connected GitHub file reader because it does not return binary workbook contents.
2. Verify and record acceptance of the AEC download licence, exact boundary dataset/date, and the required notices in the public digital product and workbook.
3. Resolve distribution rights and vintages for the supplied Mosaic/Helix material; keep it out of the public bundle unless rights are documented.
4. Confirm the exact NSW Suburb layer’s item-level terms and add attribution for NSW Spatial Services and NSW Electoral Commission where applicable.
5. Add a third-party software notice for Leaflet and SheetJS, including applicable licence texts and notices.
6. Retain the DataPack licensing README/acquisition record and confirm its licence matches the methodology’s CC BY 4.0 statement.
7. After the Vercel preview exists, test dataset links, the reconstructed national workbook and digest, direct NSW workbook download, live map attribution, and upload privacy/network behaviour.

## Audit disposition

The repository-level source review is complete for the files and provider terms available here. **Licence sign-off is not complete** because the AEC notice/acceptance record, supplied commercial-segmentation rights, DataPack package licence record, exact NSW layer terms, and workbook source sheets remain unresolved. Do not treat the Vercel preview or custom-domain release as licence-cleared until those gates are closed.

## Scope boundary

This checkpoint documents what is in Git and what public source-provider terms say. It does not change site code, data, deployment configuration, DNS, or the current published site.