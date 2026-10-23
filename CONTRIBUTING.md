# Contributing

Guidelines for working on **Runtime FeedDownloader Pro** (Electron + React +
TypeScript + Vite). For how the system is put together, read
[`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) first — this guide assumes it.

## Prerequisites

* **Node.js >= 18.15.0** (enforced by `engines` in `package.json`).
* A C/C++ toolchain, because `better-sqlite3` is a native module that gets
  compiled/rebuilt locally. On Linux install `build-essential` and `python3`;
  Windows and macOS use the standard node-gyp toolchain.
* No global tooling is required — everything runs through `npx` / npm scripts.

## Setup

```bash
npm ci
```

`npm ci` installs exact locked versions and compiles `better-sqlite3` against
your local Node ABI.

### The better-sqlite3 ABI rebuild

`better-sqlite3` is a native addon, and Electron and Node ship **different**
V8/Node ABIs. A binary built for one will fail to load in the other. The project
automates the switch with npm lifecycle scripts (see `package.json`):

* `predev` → `rebuild:electron` (`electron-rebuild -f -w better-sqlite3`):
  before `npm run dev`, the addon is rebuilt for Electron's ABI so the app can
  open the database.
* `pretest` → `rebuild:node` (`npm rebuild better-sqlite3`): before tests, the
  addon is rebuilt for the plain Node ABI, because Vitest runs under Node, not
  Electron. `pretest:watch` and `pretest:coverage` do the same for their variants.
* `posttest` → `rebuild:electron`: after tests, it is rebuilt back for Electron
  so a following `npm run dev` just works.

Because of this you normally do not run `electron-rebuild` by hand — pick the
right npm script and the correct binary is in place. If you ever see a
"NODE_MODULE_VERSION" / ABI mismatch error, run `npm run rebuild:electron`
(for the app) or `npm run rebuild:node` (for tests) to resync.

## Dev workflow

```bash
npm run dev
```

This runs `predev` (Electron ABI rebuild) then `vite`, which starts the dev
server and launches Electron with hot reload for the renderer and the main/preload
entries. The CSP is relaxed in dev to allow Vite HMR.

> **Careful: `npm run dev` uses the same data folder as an installed copy.** The
> app name comes from `package.json` (`runtime-feeddownloader-pro`), so the dev
> build opens `%APPDATA%untime-feeddownloader-proeeddownloader.sqlite` — the
> real library — and migrates it to the new schema. To try changes on a throwaway
> profile, launch Electron with `--user-data-dir=<some folder>` (Chromium's switch,
> honoured by `app.getPath('userData')`), and point the download folder somewhere
> disposable before downloading anything.

### Interface preview in the browser

```bash
npm run preview:ui    # http://localhost:5198
```

Mounts the real React app with a fake `window.api` (`scripts/ui-preview/mock-api.ts`):
a realistic library, an archive, and a queue that really advances, pauses and
fails. No Electron, no network. Query parameters: `?empty` (empty library),
`?skipintro`, `?offline`, `?pending` (downloads left over from a previous
session), `?whatsnew`, `?reduce` (reduced motion). The mock implements the `Api`
type exported by `electron/preload.ts`, so `npm run check:preview` fails when the
two drift apart.

## Interface rules (since v1.6.0)

The interface follows the Runtime desktop standard (the same structure as *Runtime
TelegramBot Desktop Titan Edition*, in FeedDownloader's violet).

* **Desktop, landscape.** Views are panels side by side, each scrolling on its own
  (`min-h-0 flex-1 overflow-y-auto`); the page itself doesn't scroll at normal
  sizes. Below 1280 px of width side panels become tabs or dialogs and figures
  compact — never a vertical, web-page-style stack. Check 960×620 (the minimum
  window), 1366×768 and 1920×1080.
* **One palette.** Colours live only in `src/theme/palette.css` as semantic names
  (`bg-surface-2`, `text-fg-3`, `border-line`…); Tailwind's default palette is
  switched off. Every text/background pair the UI uses is listed in
  `src/theme/contrast-checks.json` and checked against WCAG 2.2 AA by
  `npm run check:contrast`. Never put opacity (`/NN`) on a text colour or on the
  background behind text — the check can't see it.
* **Primitives first.** Buttons, fields, switches, tabs, dialogs, toasts and
  virtualised lists are in `src/components/ui/`; they carry the accessibility
  wiring (focus trap, `inert`, roles, keyboard). Reuse them.
* **Text never below 12 px**, keyboard focus always visible, every action reachable
  from the keyboard and never shown only on hover.

## Project dev rules

These conventions are already in force in this repo. Follow them.

* **One feature per patch version.** Each change ships as its own `X.Y.Z` bump —
  the changelog history shows a long run of small, single-purpose versions.
* **Every version needs a changelog + commit.** Add `docs/changelog/X.Y.Z.md`
  describing the change (the existing files are the template — they are written
  in Italian, grouped by area such as *Download*, *Feed*, *Database*, *Interfaccia*,
  *Build*, *Test*, and reference issue tags like `M6`/`S1`/`L7` from the audits).
  Bump `version` in `package.json` to match.
* **Every i18n key exists in both languages.** Since v1.4.2 the app speaks Italian
  and English only: `src/locales/{it,en}.json`. `npm run check:locales` fails when
  a key used in the code is missing, or when the two files don't have the same keys.
* **TypeScript strict, zero `any`.** Both `tsconfig.json` (renderer/preload) and
  `tsconfig.electron.json` (main) run under `strict` with `noUnusedLocals` and
  `noUnusedParameters`. ESLint runs with `--max-warnings 0`. Prefer precise types,
  `unknown` + narrowing, or type guards over `any`.
* **Respect the process boundary.** The renderer must reach the OS, disk,
  network, and database only through `window.api.*`. New capabilities mean a new
  channel in `IPC_CHANNELS` (`shared/types.ts`), a handler in `electron/ipc.ts`,
  and a typed wrapper in `electron/preload.ts` — never `nodeIntegration` shortcuts.
* **Keep the two SSRF layers in place.** Any new outbound HTTP must go through
  `validateUrl` and the `SAFE_AXIOS_CONFIG` agents (`electron/utils/safeHttp.ts`).

## Testing

Tests use **Vitest** (config in `vitest.config.ts`, Node environment, specs in
`tests/**/*.test.ts`).

```bash
npm test              # pretest rebuilds better-sqlite3 for Node, then vitest run, then rebuilds for Electron
npm run test:watch    # watch mode
npm run test:coverage # v8 coverage over services / utils / store
```

The suite is a **blocking quality gate**: the CI `verify` job
(`.github/workflows/build.yml`) runs lint, both type-checks, the locale, contrast
and preview checks, and `vitest run`, and the Windows/Linux build jobs only start
after it passes. A red test blocks
the release — do not merge or bump a version with failing tests. Security-critical
utilities (`validateUrl`, `safeHttp`, `xmlSafety`, `applyTemplate`, `getSafePath`,
the database and download services) have dedicated specs; add tests alongside any
change to that logic.

## Build

```bash
npm run build     # lint + check:locales + check:contrast + tsc + tsc -p tsconfig.electron.json + vite build + electron-builder --publish never
```

The build lints, then **type-checks twice** — once with `tsc` for the renderer
and preload (DOM libs, via `tsconfig.json`) and once with
`tsc -p tsconfig.electron.json` for the main process (no DOM libs, so
`window`/`document` are errors there) — then runs `vite build` and packages with
electron-builder into `builds/${version}`. `npm run release` is the same pipeline
with `--publish always` (used only by CI, which since v1.5.0 attaches the assets
to a release on this very repository, `Pitz72/FeedDownloader`, with the built-in
`GITHUB_TOKEN`).

Releases themselves are produced by the manual `workflow_dispatch` GitHub Action,
not from a local machine.

## Commit conventions

Conventional-commit style, with the target version in the scope. Recent history:

```
fix(v1.3.14): chiusi i medi M2-M38 e ~30 lievi dell'audit 12 lug + test security
fix(v1.3.13): chiuse tutte le 14 gravi dell'audit 12 lug (S1-S14)
docs(audit): piano revisione totale pre-rilascio 12 lug 2026
fix(ci): release glob cattura solo installer NSIS, non win-unpacked
```

* Use `feat(vX.Y.Z): …` for a new feature version and `fix(vX.Y.Z): …` for fixes.
* `docs(...)`, `ci(...)`, `chore(...)` are used for their respective areas.
* Commit messages in this repo are written in Italian; keep the subject short and
  reference the audit issue tags (`S#`, `M#`, `L#`) where relevant.
* **Commit and push are mandatory for every fix/version** — the working tree, the
  changelog, `package.json`, and git must always stay in sync.

## Markdown style

The repo enforces markdown lint (`.markdownlint.json`, MD030). Use `*` + a single
space for bullets, and keep list marker spacing to one space.

## Code layout

```
electron/           main process
  main.ts           app lifecycle, window, tray, security hardening, CSP
  ipc.ts            IPC handler registry + download orchestration
  preload.ts        contextBridge api exposed to the renderer
  services/         DatabaseService, LibraryService, FeedService,
                    DownloadService, QueueService, BatchTracker
  utils/            validateUrl, safeHttp, xmlSafety, throttleStream,
                    getSafePath, applyTemplate, extractExtension, writeId3Tags
shared/
  types.ts          data models + IPC_CHANNELS (shared by both processes)
src/                renderer (React 18)
  App.tsx           root; subscribes to push events
  store/useStore.ts Zustand state
  components/        UI components
  i18n.ts           i18next setup
  locales/          8 translation JSON files
tests/              Vitest specs
docs/
  ARCHITECTURE.md   technical architecture (read this)
  ROADMAP.md        roadmap / source of truth for features
  changelog/        one X.Y.Z.md per version
```

For anything architectural — the IPC layer, the SQLite schema and its composite
keys, the download engine, the feed pipeline, or the security model — see
[`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md).
