# Locus — Architecture Notes

## Verified from repository README
- Static website; output assets committed under `dist/`.
- `vercel.json` points hosting at `dist/`.
- No build command or environment variable required for the described deployment.
- The complete mapping assets, demographic data, vendor scripts and downloads live under `dist/` and should retain their relative paths.
- Visitor-uploaded business lists are kept within browser session according to the README. This behaviour must be verified as part of privacy testing.
- The website's methodology and data provenance appear in `dist/downloads/`.

## Core architecture decisions
1. Prefer the existing deployable static bundle until a rebuild is justified.
2. Keep user-uploaded business/location files client-side by default.
3. Never commit credentials or visitor-uploaded datasets.
4. Version geographic reference data with source, vintage and licence notes.
5. Treat custom-domain DNS changes as a separate, reversible release step.

## Verification tasks
- Inspect `vercel.json` and all asset references.
- Verify data downloads and any licensing requirements.
- Test upload handling using synthetic data.
- Document any network requests from the live browser.
