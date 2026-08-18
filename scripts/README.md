# `scripts/`

Build-time helper scripts. None of these run automatically as part of `npm run build`;
invoke them explicitly when regenerating the manuals.

> **Icons (v1.5.0, Titan standard):** the app icon is a single square PNG,
> `resources/icon.png` (1024²). electron-builder generates the platform formats
> (ICO for Windows, PNG set for Linux) by itself — no ImageMagick, no committed
> icon set. The runtime assets `public/logo.png` (window/notifications) and
> `public/icon.ico` (Windows tray) are derived from the same source
> (`npx png-to-ico resources/icon.png > public/icon.ico`).

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
