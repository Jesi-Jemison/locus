# NSW Master Geographic Reference
Snapshot: 2026-11-03

1. **Localities:** All 4,607 polygon records in the NSW Spatial Services Suburb service. NSW `cadid` is the locality key; official names, polygon UUIDs and feature IDs are retained. Repeated names are not merged.
2. **ASGS:** Edition 4 (2026) supplies SA1–SA4, GCCSA and Indigenous Structure. Edition 3 (2021) supplies the latest available urban and remoteness polygons and optional tourism regions. Versions are explicit in the source register.
3. **Statistical areas:** Each locality is intersected with official SA1, SA2, SA3 and SA4 polygons. The separate hierarchy table preserves official SA1 → SA2 → SA3 → SA4 → GCCSA → State relationships.
4. **LGAs:** Relationships use official NSW LGA polygon intersections. Council and unincorporated areas remain separate. Published council codes are crosschecked against the ABS 2026 LGA reference.
5. **GCCSA:** Calculated directly from 2026 GCCSA polygons. Greater Sydney means any positive-area overlap with code `1GSYD`; partial coverage and small overlaps remain visible.
6. **Coordinates:** Areas and centroids are calculated in an Australian Albers equal-area projection. A centroid outside its locality is replaced by an internal representative point. Coordinates are delivered in WGS84 decimal degrees (EPSG:4326).
7. **Federal divisions:** Intersections use AEC October 2024 NSW final boundaries and AEC division numbers. Determination and first-election dates are recorded separately.
8. **NSW districts:** Intersections use NSWEC 2021 redistribution polygons, applicable to the 2023 and 2027 state elections. NSWEC polygon IDs and a separate ABS 2026 code crosswalk are retained. The Legislative Council is statewide.
9. **Many-to-many model:** Geography Mapping has one row per locality × geography type × geography code. All positive-area overlaps remain. Primary geography means largest overlap. Small overlaps below 1 m² or 0.01% are flagged, not deleted. Percentages use the entire locality polygon, including any water; they are not population weights.
10. **Updates:** Refresh locality, LGA and postcode source attributes regularly; electoral boundaries after redistributions; ABS structures when new editions or annual administrative updates publish. Recompute overlaps after geometry changes. Edition 4 urban and remoteness releases are still pending at this snapshot.

## Use and limitations
Join by official codes, with geography type and source version. In Power BI, filter the long mapping table by geography type before relating its codes to the corresponding reference table. Count distinct locality codes, not mapping rows. Do not sum overlap percentages across different geography types.
The Postcodes table uses the single postcode attribute supplied for each NSW locality polygon. Twenty localities have no supplied postcode. It is not an exhaustive Australia Post delivery association and does not establish every possible locality–postcode combination. No postcode boundary approximation is used.
Review Mapping Coverage and Data Issues before allocating data by area. Coastal waters, islands and differing boundary vintages can leave coverage below 100%. No gaps are filled using guesses or nearest polygons. Optional NSW planning and RDA regions are not included.
Full URLs, publication dates, versions, transformation notes and source-file checksums are in the workbook Sources table. Detailed rules are in Sources & Methodology and Data Dictionary.