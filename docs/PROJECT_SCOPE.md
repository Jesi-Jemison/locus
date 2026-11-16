# Locus — Project Scope

**Planning baseline:** 2026-11-16. This document supplements the existing published code and README; it does not replace them.

## Purpose
An interactive Australian geographic and demographic atlas for exploring localities, geographic layers and Census area profiles, comparing areas, optionally visualising visitor-supplied business locations, and downloading reference workbooks.

## Existing implementation to preserve
The repository already contains a static deployable site in `dist/`, including map layers, demographic files, vendor assets and downloadable methodology/source notes. Its relative asset paths and directory layout must remain intact. Visitors' uploaded business lists are described as session-local in the README.

## Next useful release
- Verify the complete site loads from `dist/` under a Vercel preview.
- Confirm map navigation, localities search, geographic layer selection and Census profiles work.
- Check reference workbooks and source methodology downloads.
- Confirm uploaded business lists are not inadvertently transmitted or persisted.
- Review mobile layout, keyboard navigation, colour contrast and performance.
- Link the deployment with `locus.jesicat.online` only after preview QA and DNS verification.

## Conceptual entities
Locality, GeographyLayer, CensusArea, CensusProfile, UserUploadedBusinessLocation (session-local), ReferenceWorkbook, SourceMethodology.

## Accuracy and provenance
Retain Australian Bureau of Statistics/Census source labels and territorial geographies as documented in the bundled source notes; verify data licences and census vintage before adding or changing data. Never label historic figures as current.

## Explicitly not part of this planning update
No redevelopment, rescoping, live domain switch or change to `dist/` is authorised by these docs.
