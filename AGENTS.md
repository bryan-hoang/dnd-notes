# dnd-notes Agent Instructions

## Toolchain

- This is one Astro 7/Starlight package. `pnpm-workspace.yaml` holds dependency
  policy and catalogs; it does not define additional workspace packages.
- Use Vite+ (`vp`) for package operations: `vp install`, `vp add`, and
  `vp remove`. The README's direct `pnpm` examples are stale.
- Run Astro scripts through `vp run`: `vp run dev`, `vp run build`, and
  `vp run preview`. `vp dev` and `vp build` invoke Vite+ built-ins instead of
  the Astro scripts.
- Match CI verification in this order: `vp run build`, `vp check`, then
  `vp run markdownlint`.
- `vp check` covers formatting, linting, and type-aware TypeScript checks. No
  test suite is configured; do not treat `vp test` as required verification.
- Check one Markdown file with `vp exec markdownlint path/to/file.md`; add
  `--fix` before the path to apply safe fixes.

## Content And Wiring

- Starlight loads site content from `src/content/docs/`. Root-level `private/`
  contains unpublished notes and is not part of the site.
- The sidebar autogenerates `current/` and `previous/` from content paths;
  `_category_.json` supplies campaign labels and collapsed state.
- Preserve the Vite+/Rolldown compatibility shim in `astro.config.js`; removing
  `optimizeDeps.esbuildOptions` prevents Astro builds from failing.
- `src/css/custom.css` is unreferenced Docusaurus residue. Editing it does not
  affect this site.

## Conventions

- Vite+ formatting uses tabs, an 80-column width, and always-wrapped prose.
- Husky runs lint-staged checks before commits and commitlint afterward. Commit
  messages must follow Conventional Commits.
