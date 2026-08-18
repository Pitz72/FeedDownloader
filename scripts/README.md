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
`@vivliostyle/cli`) must be installed (`npm ci`).

The cover mark is `branding/feeddownloader-cover.svg`, embedded as a data URI: it is the app icon
without its background squircle, which on the night-blue cover read as a stamp. It is deliberately
vector — sharp in print, and with the transparency `resources/icon.png` lost (that file is RGB with
no alpha channel: fine as an icon, wrong on a coloured ground). Until August 2026 both scripts still
pointed at `brand/RFDP_trasp.png`, the February mark the app had stopped using in July.

| Script | What it does |
| --- | --- |
| `build-book.cjs` | Builds the **Italian** manual as an editorial "book" (cover + chapters) into `docs/user/manual-it/book/`, producing `Manuale_FeedDownloader_Pro_Box.pdf`. |
| `build-all-books.cjs` | Builds the **other** localized manuals under `docs/user/` — today only `en-GB/`, producing `FeedDownloader_Pro_Manual_en-GB.pdf`. It does *not* rebuild the Italian one. |

Both are needed to refresh the full set:

```powershell
node scripts/build-book.cjs
node scripts/build-all-books.cjs
```

Cover metadata (subtitle, version, edition, licence, epigraph) is parsed from each manual's
`00-copertina.md`, so a version bump only has to be made there. The cover title is broken by hand
(`Runtime<br>FeedDownloader<br>Pro`) and `section.cover h1` sets `hyphens: none`, because the
inherited `hyphens: auto` used to split the product name across lines. Body text is set ragged
right: justified copy on a narrow A5 column opened rivers and forced hyphenation. The output filenames are the ones
`OPEN_MANUAL_PDF` (`electron/ipc.ts`) fetches from `manuals/` on the public releases repo: renaming
a PDF means updating the script, the IPC handler and the bridge together.

The PDF build pulls its fonts from Google Fonts at render time, so it needs a working internet
connection; offline it still produces a PDF, but with fallback typefaces.

> **Windows note:** run these from **PowerShell**, not Git Bash. Under Git Bash on Windows
> `npx vivliostyle build` exits immediately without producing a PDF; the same command works
> correctly from PowerShell.
