# Architecture

Technical architecture of **Runtime FeedDownloader Pro** — a desktop podcast
archiver built on Electron + React + TypeScript + Vite. This document is derived
from the source and describes the system as it actually behaves; file paths are
given so each claim can be checked against the code.

## 1. High-level overview

The app is a standard two-process Electron application.

* **Main process** (`electron/main.ts`) — Node.js runtime. Owns the
  `BrowserWindow`, the system tray, the SQLite database, all network I/O (feed
  parsing and downloads), the filesystem, and the auto-updater. This is the only
  process with OS-level privileges.
* **Renderer process** (`src/`) — a React 18 single-page app served by Vite.
  Runs with `nodeIntegration: false` and `contextIsolation: true`, so it has no
  direct access to Node or Electron APIs. Everything it needs is reached through
  a narrow, typed IPC bridge.
* **Preload** (`electron/preload.ts`) — the isolated bridge script that exposes
  a curated `window.api` object to the renderer via `contextBridge`.

All privileged work happens in the main process. The renderer is purely a view
plus local UI state; it never touches the disk, the network, or the database
except by calling `window.api.*`.

Process/module wiring:

* `electron/main.ts` — app lifecycle, window creation, security hardening,
  single-instance lock, tray, CSP, navigation guards. Calls `initServices()` and
  `registerIpcHandlers()` from `electron/ipc.ts`.
* `electron/ipc.ts` — the IPC handler registry and the download orchestration
  logic (queue bookkeeping, batch tracking, path reservation, notifications,
  auto-refresh timer).
* `electron/services/*` — the service layer (database, feeds, downloads, queue,
  batch tracking).
* `electron/utils/*` — leaf helpers (URL validation, SSRF-safe HTTP, XML safety,
  throttling, filename/template helpers, ID3 tagging).
* `shared/types.ts` — the single source of truth for data models and IPC channel
  names, imported by both processes.

## 2. The IPC layer

### contextIsolation + preload bridge

`electron/main.ts` creates the window with `contextIsolation: true`,
`nodeIntegration: false`, and `webSecurity: true`. `sandbox` is intentionally
left `false` because the preload is bundled as ESM (`preload.mjs`) and Electron's
sandboxed preloads must be CommonJS — this is documented inline as a known
tradeoff (B9).

`electron/preload.ts` exposes a single `api` object with `contextBridge.exposeInMainWorld`.
Every method is a thin typed wrapper over either `ipcRenderer.invoke` (request/response)
or `ipcRenderer.on` (subscription). Renderer-facing types (`Feed`, `FeedEntry`,
`DownloadRequest`, `ArchiveEntry`, `UpdateStatus`, etc.) come from `shared/types.ts`,
so the bridge is fully type-checked on both sides.

### The `IPC_CHANNELS` enum

Channel names live in one place — the `IPC_CHANNELS` const object in
`shared/types.ts` — and are imported by `ipc.ts` (registration), `preload.ts`
(invocation), and indirectly the renderer. This prevents string drift between
the two processes. Channels cover feed parsing/library CRUD, the download engine,
folder/path selection, OPML/CSV/M3U export, archive and health-check queries,
and every setting (concurrency, naming template, sidecar JSON, ID3, speed limit,
auto-refresh interval).

### Push events (main → renderer)

Beyond request/response, the main process pushes state changes to the renderer
through `webContents.send`, wrapped in a small `pushEvent()` helper in `ipc.ts`
that guards against a destroyed window. The renderer subscribes in `src/App.tsx`
and routes payloads into the Zustand store. The push channels:

* `DOWNLOAD_PROGRESS` (`download-progress`) — per-episode `{ url, loaded, total,
  completed?, error?, cancelled?, notFound? }` progress ticks.
* `FEEDS_UPDATED` (`feeds-updated`) — the fresh `FeedEntry[]` list (fired after
  add/remove/parse and after each background refresh).
* `DOWNLOADS_UPDATED` (`downloads-updated`) — the current set of downloaded GUIDs.
* `BATCH_COMPLETED` (`batch-completed`) — `{ total, failed: FailedDownload[] }`
  when a batch generation finishes; also drives the OS notification.
* `QUEUE_UPDATED` (`queue-updated`) — the current `QueueItem[]` (pending +
  downloading) so the download panel can render live queue state.
* `MIGRATION_PROGRESS` and `UPDATE_STATUS` — archive-move progress and
  auto-update lifecycle status respectively.

Each subscription wrapper in `preload.ts` returns an unsubscribe function, and
`src/App.tsx` calls it in the `useEffect` cleanup to avoid listener leaks.

## 3. The service layer (`electron/services`)

* **DatabaseService** (`DatabaseService.ts`) — the SQLite persistence layer via
  `better-sqlite3`. Owns the schema, migrations, indexes, and all SQL. Opens the
  DB at `app.getPath('userData')/feeddownloader.sqlite`, enables WAL mode and
  foreign keys, and recovers from a corrupted file by moving the damaged files
  aside as `.corrupt-<timestamp>` and starting fresh (never deletes user data).
* **LibraryService** (`LibraryService.ts`) — the high-level persistence API used
  by the IPC handlers. Delegates all CRUD to `DatabaseService` and additionally
  owns OPML import/export (parsing with `fast-xml-parser`, DOCTYPE guard, URL
  validation, bulk insert, 2000-feed cap). Exposes `wasRecovered` so startup can
  warn the user.
* **FeedService** (`FeedService.ts`) — fetches and parses feeds with `rss-parser`
  over an SSRF-hardened axios config. Handles RFC 5005 pagination, conditional
  requests (304), charset decoding, DOCTYPE rejection, content-type validation,
  and cross-page GUID de-duplication. Maps parsed items to the app's `Episode`
  shape (with a GUID fallback for feeds that omit `<guid>`).
* **DownloadService** (`DownloadService.ts`) — the download engine: streaming
  download with resume, retry/backoff, stall detection, optional throttling, and
  size-based integrity checking. Pure network+disk logic; knows nothing about the
  database or the queue.
* **QueueService** (`QueueService.ts`) — a thin wrapper over `p-queue` providing
  bounded concurrency (`add`, `clear`, `setConcurrency`). The concurrency value
  is persisted in settings and clamped to 1..10.
* **BatchTracker** (`BatchTracker.ts`) — generation-aware batch state. Because
  there is no explicit "batch start" signal, downloads that arrive within a
  200 ms seal window are grouped into one *generation* with its own total,
  completed count, and failure list. A `track()` after the current generation
  seals opens a fresh one, so concurrent bursts never cross-talk. `complete()`
  returns a `BatchResult` only when a sealed generation is fully drained, which
  is what fires `BATCH_COMPLETED` and the summary notification.

The database-backed services are constructed lazily in `initServices()`
(`ipc.ts`), *not* at module load, so a DB-open failure can be surfaced as an
error dialog instead of crashing before any window exists (S4).

## 4. The SQLite schema

Defined in `DatabaseService.init()`. WAL journaling and `foreign_keys = ON` are
set on open. Tables:

* **feeds** — `url` (PK), `title`, `image`, `lastUpdated`, plus columns added
  idempotently via `ALTER TABLE`: `episodeCount`, `httpEtag`, `httpLastModified`
  (the last two are the conditional-refresh validators).
* **downloads** — `(guid, feedUrl)` composite primary key. Records which
  episodes have been downloaded.
* **archive** — `(guid, feedUrl)` composite PK plus `podcastTitle`, `title`,
  `pubDate`, `downloadedAt`, `filename`, and the integrity/metadata columns
  `fileSize`, `checksum` (SHA-256), `bitrate`, `sampleRate`.
* **settings** — a simple `key`/`value` store for all app preferences (download
  path, concurrency, naming template, sidecar/ID3 flags, speed limit,
  auto-refresh interval).
* **known_episodes** — `(guid, feedUrl)` composite PK plus `firstSeen`. The
  per-feed baseline of episode GUIDs used for accurate new-episode detection.

### Why composite `(guid, feedUrl)` keys

RSS GUIDs are only unique *within* a feed — real feeds routinely use values like
`"1"`, `"2"`, or a page URL. The original schema keyed `downloads`/`archive` on
`guid` alone, so two feeds with colliding GUIDs produced false "already
downloaded" states and silently dropped archive rows (S6). Both tables were
rebuilt with a `(guid, feedUrl)` key. `migrateToCompositeKeys()` performs this
migration transactionally; legacy rows keep `feedUrl = ''`, which acts as a
match-any-feed fallback so pre-existing libraries stay recognized. Lookups query
`feedUrl IN (?, '')` to honor that fallback.

Indexes back the hot paths: per-feed download lookups, per-feed archive counts
(run on every `getFeeds`), archive sort/filter by `podcastTitle`/`downloadedAt`,
and the `feedUrl`-only scan on `known_episodes` (which the composite PK can't
serve).

## 5. The download engine

Implemented in `DownloadService` and orchestrated by the `START_DOWNLOAD`
handler in `ipc.ts`.

* **`.part` temp files** — a download streams to `<target>.part` and is renamed
  to the final path only after it completes and passes the size check. This
  makes partial downloads resumable and never exposes a half-written file under
  the real name.
* **Resume via HTTP Range / If-Range** — on retry, if a `.part` exists the
  engine sends `Range: bytes=<n>-`. To avoid splicing bytes of a *changed* remote
  file onto a stale prefix, the validator (ETag or Last-Modified) of the response
  that created the `.part` is persisted in a `<target>.part.meta` sidecar and
  sent back as `If-Range`. A changed file then answers `200` (full body) instead
  of `206`, and the stale partial is discarded and restarted (S1).
* **Retry / backoff** — `downloadFile()` retries up to 3 times. Fatal errors
  (`DOWNLOAD_ABORTED`, `DISK_FULL`/`ENOSPC`, `PERMISSION_DENIED`,
  `EPISODE_NOT_FOUND`) short-circuit without retry. Transient errors (timeouts,
  stalls, 5xx, connection resets) fall through to exponential backoff
  (1s, 2s, 4s), keeping the `.part` so the next attempt resumes. HTTP 429 honors
  the `Retry-After` header, capped at 60 s (L7).
* **Stall detection** — a `STALL_TIMEOUT_MS` (60 s) timer resets on every data
  chunk; if no bytes arrive within the window the transfer is aborted as
  `DOWNLOAD_STALLED` (a retryable, resumable condition). The initial connection
  has its own 30 s timeout.
* **Throttle** — when a speed limit is set, the network stream is piped through
  a `Transform` from `electron/utils/throttleStream.ts` that paces output to the
  configured bytes/second before it reaches the file writer.
* **Integrity check** — on `finish`, `loaded` must match the expected total
  (from `Content-Length`, or the authoritative total in `Content-Range` for
  resumed 206 responses) within a 64-byte absolute tolerance; otherwise the
  `.part` is deleted and the attempt fails as `INTEGRITY_CHECK_FAILED` (M4).
* **Post-download metadata** — after a successful rename, the `START_DOWNLOAD`
  handler stats the file, computes a streaming **SHA-256** checksum, and reads
  `bitrate`/`sampleRate` via `music-metadata`. These are stored on the archive
  row. Then, if enabled, ID3 tags (`electron/utils/writeId3Tags.ts`) and a
  sidecar JSON are written. The download flag and the archive row are committed
  together in one transaction (`recordDownload`) so a crash can't leave an
  episode marked downloaded but absent from the archive (S7).

Concurrency and cancellation are managed in `ipc.ts`: an `AbortController` per
task (keyed by `taskId`), a `queueItems` map that mirrors queue state to the
renderer, a `cancelledTaskIds` set for tasks cancelled before they start, and a
`reservedTargets` set that synchronously claims each resolved output path so two
concurrent downloads can't settle on the same `.part` (M1). `STOP_BATCH` aborts
all in-flight controllers, clears the queue, and resets every one of these maps.

## 6. The feed pipeline

Implemented in `FeedService.parseFeed()` and the `PARSE_FEED` handler.

* **RFC 5005 pagination** — after the first page, `extractNextPageUrl()` looks
  for `<atom:link rel="next" href="...">` (either attribute order), resolves
  relative hrefs against the current page, and re-validates the resulting URL
  through the same SSRF pre-check applied to user input. Pagination follows up to
  `MAX_PAGES` (20), guards against next-link cycles with a `visited` set, and
  keeps already-collected episodes if a later page fails (M7). Items are
  de-duplicated across page boundaries by GUID (falling back to enclosure URL)
  since paginated windows overlap (M8).
* **SSRF / DOCTYPE hardening** — every page fetch (`fetchPage`) runs through
  `SAFE_AXIOS_CONFIG`, caps the body at 15 MB, validates the content-type
  (rejecting HTML that isn't XML), and rejects any document whose prolog declares
  a `DOCTYPE` with an `<!ENTITY>` (XXE / billion-laughs) via
  `electron/utils/xmlSafety.ts`.
* **Conditional 304 refresh** — the background refresh passes the stored
  ETag/Last-Modified as `If-None-Match`/`If-Modified-Since`. A `304` returns
  `null`, so the whole multi-page refetch is skipped and hosts aren't hammered on
  every cycle (M6). Fresh validators are read back off the response and persisted.
* **New-episode detection** — the auto-refresh (`runBackgroundRefresh` in
  `ipc.ts`) compares the feed's current GUIDs against `known_episodes`. This
  GUID-set approach correctly detects new episodes even for rolling-window feeds
  that drop old episodes, which broke the old count-comparison. A feed with no
  baseline is seeded silently so the first refresh doesn't report every existing
  episode as new. When new GUIDs are found across feeds, a localized OS
  notification fires.

An in-memory `feedCache` (5 min TTL, 200-entry cap) and a per-URL 3 s parse
cooldown in `ipc.ts` absorb repeated clicks without re-fetching.

## 7. Security hardening

* **SSRF, double layer** — `electron/utils/validateUrl.ts` is a fast lexical
  pre-check (http/https only, blocks literal private/reserved IPs and known
  internal hostnames). It cannot stop DNS rebinding or redirects to private
  hosts, so the authoritative layer is `electron/utils/safeHttp.ts`: a custom DNS
  `lookup` installed on the http/https agents re-validates the *resolved* IP on
  every connection and every redirect hop (max 5), rejecting private/loopback/
  link-local/CGNAT/ULA/IPv4-mapped addresses at the socket layer. Both layers
  are applied to feed fetches, pagination links, OPML-imported URLs, and
  downloads.
* **XXE / DOCTYPE guard** — `hasDangerousDoctype()` refuses feeds and OPML that
  declare entity definitions, on top of parsers already configured not to expand
  external entities.
* **CSP** — packaged builds get a strict `Content-Security-Policy` via
  `onHeadersReceived` (`default-src 'self'`, `object-src 'none'`,
  `frame-ancestors 'none'`, images over https/data, fonts from Google Fonts).
  The dev server is exempt because Vite HMR needs inline/eval and a websocket.
* **Navigation hardening** — `setWindowOpenHandler` denies all new windows and
  `will-navigate` blocks navigating away from the app document; http(s) links
  (e.g. from feed content) are routed to the system browser via
  `shell.openExternal` (B8). Permission requests (geolocation, notifications,
  etc.) are denied by default.
* **Single-instance lock** — `app.requestSingleInstanceLock()` ensures a second
  launch focuses the existing window instead of opening a second process against
  the same SQLite file (S8).
* **Path / injection guards** — filenames are sanitized (`sanitize-filename`);
  archive-file opens verify the resolved path stays inside the download root
  (`..` traversal defense, M2); CSV export neutralizes formula-injection prefixes
  (M14) and M3U export strips CRLF from untrusted titles (L12).

## 8. The renderer

* **React 18** SPA rooted at `src/App.tsx`, composed of feature components in
  `src/components/` (`Sidebar`, `EpisodeList`, `DownloadPanel`, `ArchiveView`,
  `SettingsModal`, `CommandPalette`, `UrlInput`, `HelpModal`, etc.).
* **Zustand store** (`src/store/useStore.ts`) — the single client-side state
  container: current feed, feed list, per-URL download progress (with computed
  speed/ETA), batch counters, visible queue, failures, download path, view mode,
  and panel visibility. Batch-membership is tracked by a module-level URL set so
  a stray single download can't inflate the batch counter, and cancelled
  downloads are removed immediately rather than shown as completed (M32).
* **react-virtuoso** virtualizes the potentially huge episode and archive lists.
* **i18next** (`src/i18n.ts`) provides 8 languages — `it`, `en`, `fr`, `de`,
  `es`, `pt`, `ru`, `zh` — from `src/locales/*.json`, with browser language
  detection and a `localStorage` cache. On language change the renderer syncs the
  locale to the main process (`SET_LOCALE`) so OS notifications are localized too.
* **framer-motion** handles view/intro transitions.

The renderer holds no authoritative data: it renders what the store contains and
mutates the world only through `window.api.*`.

## 9. Build and CI

* **Vite + vite-plugin-electron** (`vite.config.ts`) builds all three targets.
  The renderer is a normal Vite React build; the Electron main entry
  (`electron/main.ts`) and preload (`electron/preload.ts`) are built by
  `vite-plugin-electron/simple`. `better-sqlite3` is marked `external` (native
  `.node` modules must not be bundled), and the preload is emitted as ESM
  (`preload.mjs`) to match `"type": "module"`. The app version is injected as
  `__APP_VERSION__`.
* **Dual type-check** — the renderer/preload are checked with `tsconfig.json`
  (DOM libs) and the main process with `tsconfig.electron.json` (no DOM libs, so
  `window`/`document` are correctly errors there). Both run under `strict` mode.
* **electron-builder 26** (`build` block in `package.json`) packages NSIS on
  Windows and AppImage + deb on Linux (no macOS). Output goes to
  `builds/${version}`; `artifactName` deliberately avoids spaces so the
  auto-update `latest.yml` asset names line up. `**/*.node` is unpacked from the
  asar.
* **GitHub Actions** (`.github/workflows/build.yml`) — manual `workflow_dispatch`
  only. A blocking `verify` job runs lint + both type-checks + the full Vitest
  suite (and an informational `npm audit`); `build-windows` and `build-linux`
  run only after it passes. `npm ci` produces a `better-sqlite3` binary for the
  CI Node ABI, so Vitest runs directly with no electron-rebuild.
* **Auto-update** — `electron-updater` (`ipc.ts`) checks for updates on startup
  (packaged builds only, after a 3 s delay) but **downloads nothing on its own**:
  `autoDownload` is off, the transfer starts from the in-app button and the
  install from `quitAndInstall`. Since v1.5.0 it publishes to and pulls from the
  project's own public repository, `Pitz72/FeedDownloader` — the release bridge
  repo it used before is being retired (`docs/PIANO-APERTURA.md`). The renderer
  reflects the lifecycle through `UPDATE_STATUS` and the main process also fires
  proactive OS notifications when an update is available and when it is ready.
