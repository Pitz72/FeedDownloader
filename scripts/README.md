# `scripts/`

Build-time helper scripts. None of these run automatically as part of `npm run build`;
invoke them explicitly when regenerating the manuals or the Linux icon set.

## Linux icon set

| Script | npm alias | What it does |
| --- | --- | --- |
| `generate-linux-icons.cjs` | `npm run icons:linux` | Regenerates the PNG set under `build/icons/` (16→512 px) from `public/logo.png`, using ImageMagick (`magick` on v7, `convert` on v6). electron-builder's `build.linux.icon` points at that directory. The PNGs are committed, so a local Linux build works out of the box; rerun this only when the logo changes. CI runs the same script. |

## User-manual PDFs (Vivliostyle)

These render the Markdown manuals under `docs/user/**` into print-ready PDFs. They shell
out to `npx vivliostyle build`, so [Vivliostyle CLI](https://vivliostyle.org/) (a devDependency,
`@vivliostyle/cli`) must be installed (`npm ci`). Brand assets are read from `brand/`.

| Script | What it does |
| --- | --- |
| `generate-pdf.cjs` | Concatenates the Italian manual (`docs/user/manual-it/*.md`) into a single styled document and builds one PDF. |
| `build-book.cjs` | Builds the Italian manual as an editorial "book" (cover + chapters) into `docs/user/manual-it/book/`. |
| `build-all-books.cjs` | Runs the book build for every localized manual folder under `docs/user/`. |

Run them with plain `node`, e.g.:

```powershell
node scripts/generate-pdf.cjs
node scripts/build-all-books.cjs
```

> **Windows note:** run these from **PowerShell**, not Git Bash. Under Git Bash on Windows
> `npx vivliostyle build` exits immediately without producing a PDF; the same command works
> correctly from PowerShell.
