# Locus

An interactive Australian geography and demographic atlas. Explore localities, compare geography layers, inspect Census area profiles, bring your own business locations, and download reference workbooks.

## Vercel deployment

This is a static site. Import `Jesi-Jemison/locus` into Vercel with the repository root as the root directory. `vercel.json` points Vercel at `dist`; there is no build command or environment variable required. Connect `locus.jesicat.online` after the first preview is checked. Each new commit to `main` will then publish through the Git integration.

## Files and data

`dist/` is the complete deployable site, including its map layers, demographic data, vendor scripts and downloads. Keep the folder structure intact: the browser loads assets through relative paths. The bundled data and its source/method notes are in `dist/downloads/`. The interface keeps visitors' uploaded business lists in their own browser session.

The former Sites deployment is still available during migration. Publishing this repository to Vercel does not switch the custom domain until its DNS and Vercel domain settings are changed.

No license is granted by this repository. Data sources and usage caveats are described in the downloadable methodology and source inventory.
