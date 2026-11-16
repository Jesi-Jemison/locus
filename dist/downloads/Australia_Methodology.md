# Australia Master Geographic Reference

Prepared 4 November 2026.

**Geographic basis.** ASGS Edition 4 Suburbs and Localities (SAL) 2026, covering all Australian states and territories. SAL is a statistical approximation to gazetted localities. The separately delivered NSW workbook uses NSW official administrative locality geometry.

**Record grain.** Localities: one SAL code. Geography mapping: one SAL code/geography type/geography code relationship. Geographic codes are text. Names are labels, not keys.

**Versions.** 2026: SAL, SA1–SA4, GCCSA, state, LGA, SED, POA and Indigenous geography. 2021: RA, SUA, UCL, tourism regions. Federal: latest determined by state/territory, with dates and election application in Federal details.

**2026 relationships.** Join official allocations through shared mesh blocks (ILOC via SA1). Sum published mesh-block areas for each SAL/geography pair. Share = shared MB area / sum of MB area in SAL. Published area rounding differs from full polygon area.

**Cross-vintage relationships.** Intersect full unsimplified polygons in an Australian Albers equal-area projection. Share = positive intersection area / full SAL polygon area. Keep every positive intersection including tiny slivers. Do not normalize gaps or overlaps to 100%.

**Primary association.** Largest area/share within SAL and geography type, with lexical code tie-break. This is a convenient display label. Use all rows in Geography mapping for complete relationships.

**Tiny overlaps.** Spatial intersections below 1 square metre OR below 0.01% of the locality are marked Tiny_Overlap. They remain in the mapping. Exact common-MB allocations do not receive a sliver flag.

**Special codes.** 19 nonspatial SAL records remain in the workbook, with null coordinates/areas/shares. Their official shared-MB special-code allocation associations are retained separately from spatial rows using Spatial_Relationship=False.

**Coordinates.** WGS84 longitude/latitude of an interior representative point from full SAL geometry. A representative point is not a street address, population centre or business location. Website geometry alone is simplified by 25 m for display.

**Postal areas.** POA is an ABS approximation using mesh blocks, not an Australia Post delivery boundary. A locality may overlap multiple POAs. Supplied Locus overlays are exact state:postcode matches associated through the versioned POA crosswalk. They are not exact household attribution.

**Locus overlays.** Primary/secondary/tertiary Mosaic labels come from the supplied Census sheet. Helix persona/group and SEIFA score/decile remain user-supplied. Commercial segmentation and SEIFA years are unknown. Source CensusVersion is preserved per row, including 2016 and 2021 records.

**Excluded Locus assumptions.** Nearest-postcode substitutions and hand-built range rollups are not used. Raw Mosaic numeric columns have unknown units and are not treated as counts or shares. Quarantined source rows remain visible in Locus review.

**Business directories.** Import branch-level records, retain source URL and verification date, and use validated address coordinates for point-in-polygon enrichment. Name/locality matches are approximate. ABNs identify entities and must not collapse separate branches. A supplied list is not automatically all demolishers in Australia.

**Update method.** Refresh versioned source files, retain hashes and releases, rebuild common-MB and spatial crosswalks, compare key/count inventories, and review coverage exceptions before replacing the published assets.

**Static reference.** This workbook is a verified geographic reference snapshot prepared 2026-11-04. Spatial computation occurs before export; cells are not a live geocoding engine.

## Sources

- [ABS Edition 4 boundary files](https://www.abs.gov.au/statistics/standards/australian-statistical-geography-standard-asgs/edition-4-july-2026-june-2031/access-and-downloads/digital-boundary-files)
- [ABS Edition 4 allocations](https://www.abs.gov.au/statistics/standards/australian-statistical-geography-standard-asgs/edition-4-july-2026-june-2031/access-and-downloads/allocation-files)
- [ABS Edition 3 boundary files](https://www.abs.gov.au/statistics/standards/australian-statistical-geography-standard-asgs/edition-3-july-2021-june-2026/access-and-downloads/digital-boundary-files)
- [AEC federal division boundaries](https://www.aec.gov.au/Electorates/gis/gis_datadownload.htm)
- User-supplied locus.xlsx. Selected values and source row references are retained; uncertain vintages remain unknown.
