# Local, Verifiable Podcast Archiving: The Design and Engineering of Runtime FeedDownloader Pro

**Author:** Simone Pizzi (Runtime Radio)
**Note:** developed with LLM assistance (Claude, Anthropic)
**Date:** August 2026
**Reference software version:** v1.5.0-dev

---

## 1. Abstract

Podcasts are distributed over ephemeral infrastructure: rolling-window RSS feeds, CDNs that change addresses, hosting platforms that shut down. An episode not downloaded in time can become unrecoverable. This paper describes the design and engineering of **Runtime FeedDownloader Pro**, a desktop application (Electron, React, TypeScript, SQLite) for local, bulk, verifiable podcast archiving. The contribution lies not in a single algorithm but in the systematic composition of known techniques — transfer resumption with HTTP `If-Range` validators, end-to-end SHA-256 checksums, composite keys for deduplication, a two-layer anti-SSRF defense, guided recovery of corrupted databases — into a real product, developed through an audit-driven iterative process and protected by a suite of roughly 390 test cases used as a blocking release gate. Every claim in the text can be traced back to files and functions in the source code, so it can be verified.

## 2. Introduction and Motivation

Podcasting was born open: an audio file reachable over HTTP, described by an RSS feed. That openness, however, does not imply permanence. In practice one can observe at least four ways an episode disappears:

1. **Rolling-window feeds.** Many publishers expose only the latest N episodes; whatever falls out of the window is no longer announced by the feed, even when the file temporarily remains online.
2. **Link rot.** CDN migrations and hosting changes invalidate enclosure URLs; the feed keeps existing but points at dead resources.
3. **Platform shutdowns.** When a hosting service ceases operation, entire catalogs vanish simultaneously.
4. **Editorial withdrawal.** Episodes removed by choice or by legal obligation.

Anyone who wants to preserve an archive — a listener, a radio newsroom, a researcher — needs a **local** copy: under their own physical control. But a local copy is only valuable if it is also **verifiable**: one must be able to prove, years later, that the file on disk is intact, byte for byte, relative to what was downloaded. And bulk archiving brings problems of its own: unstable networks over files of hundreds of megabytes, feeds with tens of thousands of items, identifiers that are not unique across feeds, misconfigured servers.

Runtime FeedDownloader Pro tackles this set of problems as a desktop product aimed at end users, not as a script for specialists. The choices described below derive from three design constraints:

* **no silent loss** — every anomalous condition (truncation, corruption, collision) must produce an explicit error or a recovery, never a wrong file archived as good;
* **a hostile network by assumption** — timeouts, stalls, redirects and unexpected content are the normal case, not the exception;
* **remote content is untrusted input** — a feed can be hostile just as easily as malformed, and must be treated as an attack vector (SSRF, XXE, injection).

The rest of the paper follows the architecture top-down: process structure (§3), download engine (§4), data integrity (§5), concurrent robustness (§6), defensive security (§7), evaluation (§8), related work and limitations (§9).

## 3. System Architecture

### 3.1 Two Processes, One Narrow Bridge

The application is a classic two-process Electron application, with a deliberately strict privilege separation (`electron/main.ts`, `docs/ARCHITECTURE.md`):

* the **main process** (Node.js) exclusively owns the window, the SQLite database, all network and filesystem I/O, and the auto-updater;
* the **renderer** (React 18) runs with `contextIsolation: true` and `nodeIntegration: false`: it is pure view plus interface state, with no direct access to Node whatsoever;
* the **preload** (`electron/preload.ts`) exposes via `contextBridge` a single `window.api` object, whose methods are typed wrappers over `ipcRenderer.invoke` (request/response) or `ipcRenderer.on` (subscription).

IPC channel names live in a single place — the `IPC_CHANNELS` object in `shared/types.ts` — imported by both sides. Together with the shared types (`Feed`, `DownloadRequest`, `ArchiveEntry`, …) this eliminates at the root any drift between channel strings and payload shapes: the TypeScript compiler checks the IPC contract in both processes (dual type-check: `tsconfig.json` with DOM libraries for the renderer, `tsconfig.electron.json` without DOM for the main process, both in `strict` mode).

Beyond the request/response model, the main process pushes events to the renderer (`pushEvent()` in `electron/ipc.ts`): download progress, queue updates, batch completion, auto-update status. Every subscription in the preload returns an unsubscribe function, called in the `useEffect` cleanup to avoid listener accumulation.

### 3.2 The Service Layer

The main process logic is decomposed into services with clear-cut responsibilities (`electron/services/`):

* **DatabaseService** — SQLite persistence via `better-sqlite3`: schema, migrations, indexes, corruption recovery;
* **LibraryService** — high-level persistence API, OPML import/export;
* **FeedService** — feed fetching and parsing (RFC 5005 pagination, conditional `304` requests, cross-page GUID deduplication);
* **DownloadService** — the pure download engine (network and disk), which knows nothing of the database or the queue;
* **QueueService** — a wrapper over `p-queue` with bounded, configurable concurrency (1–10, value sanitized in `DatabaseService.getConcurrency()`);
* **BatchTracker** — batch download state, organized by generations (§6.3).

The database-dependent services are constructed lazily in `initServices()`, not at module load: a database-open failure thus becomes an error dialog instead of a crash before any window exists.

### 3.3 SQLite in WAL Mode and Composite Keys

The schema (defined in `DatabaseService.init()`) is opened in WAL mode with `foreign_keys = ON`. The main tables are `feeds`, `downloads`, `archive`, `settings` and `known_episodes` (the per-feed baseline of GUIDs used for new-episode detection).

An empirical lesson of the project concerns episode identity. The RSS GUID is unique **only within a feed**: real feeds use values like `"1"`, `"2"` or a page URL. The original schema, keyed on `guid` alone, produced false "already downloaded" states and silently lost archive rows when two feeds collided. The `downloads` and `archive` tables were rebuilt with a composite primary key `(guid, feedUrl)`; the migration (`migrateToCompositeKeys()`) is transactional and legacy rows keep `feedUrl = ''`, which acts as a wildcard: lookups query `feedUrl IN (?, '')` so existing libraries stay recognized without any user intervention.

### 3.4 Feed Parsing off the Main Thread

A paginated feed can weigh up to 15 MB per page across 20 pages. Since v1.4.0, fetching and XML parsing run in a dedicated utility process (`electron/workers/feedWorker.ts`, coordinated by `FeedParserPool`), so the main thread stays responsive. The safety net is explicit: if the worker fails to start, exits or times out, parsing transparently falls back in-process — a worker defect cannot render the application unusable.

## 4. Resilient Downloading

The engine (`electron/services/DownloadService.ts`, ~360 lines) concentrates most of the project's robustness engineering. The path of a transfer is as follows.

### 4.1 Temporary Files and Verified Resumption

Every download writes to `<target>.part` and is renamed to the final path only after completion and the size check: a half-written file is never visible under the real name.

On resumption, if a `.part` exists, the engine sends `Range: bytes=<n>-`. Resuming blindly, however, is dangerous: if the remote file has **changed** since the last attempt, new bytes would be stitched onto a stale prefix — silent audio corruption, the worst possible outcome for an archive. The defense (labeled S1 in the internal audits) is the HTTP validator: the `ETag` or `Last-Modified` of the response that created the `.part` is persisted in a companion file `<target>.part.meta` and sent back as `If-Range`. A changed file then answers `200` (full body) instead of `206`, and the stale partial is discarded and restarted. If the validator is missing (a server that does not send one, `.part` files from older versions), the resumption cannot be verified and the transfer starts from scratch: correctness takes precedence over bandwidth. A `416` (range not satisfiable) likewise resets the partial and retries fresh.

### 4.2 Retries, Backoff and `Retry-After`

`downloadFile()` performs up to 3 attempts. Error classification is explicit:

* **permanent verdicts**, which short-circuit without retrying: user cancellation, disk full (`ENOSPC`), permission denied, `404` (`EPISODE_NOT_FOUND`), invalid content type, file over the configured cap — retrying cannot change the outcome;
* **transient errors** (timeouts, stalls, `5xx`, connection resets): these go through the retry loop with exponential backoff (1 s, 2 s, 4 s), keeping the `.part` so the next attempt **resumes** instead of restarting;
* **`429`**: the server's `Retry-After` header is honored, capped at 60 seconds — courtesy toward the host without blocking the queue indefinitely.

### 4.3 A Watchdog Against Stalls

Two distinct timeouts govern the transfer: 30 s for the initial connection and a **stall watchdog** at 60 s that re-arms on every chunk of data on the raw network stream. A connection that stops producing bytes without closing — the typical failure mode of Wi-Fi networks and NAS devices — is aborted as `DOWNLOAD_STALLED`, a transient and resumable condition. The watchdog observes the network stream, not the post-throttle one: a slow bandwidth limiter must never be mistaken for a stall.

### 4.4 Bandwidth Throttling and Honest Progress

When the user sets a speed limit, the network stream passes through a `Transform` (`electron/utils/throttleStream.ts`) that paces output to the configured rate. An interface detail with technical substance: progress counts bytes **leaving the throttle** (i.e. those reaching the disk), not the faster network arrival — otherwise the bar would read 100 % while the throttle is still draining its buffer.

### 4.5 Content Guards

Two guards protect against archiving garbage:

* **Content type.** An enclosure that serves an HTML page (an error page, a consent wall, a dead link behind a CDN) must never be saved as audio. Only clearly textual types are rejected (`text/html`, `application/xhtml`, `text/xml`, `application/xml`): many hosts legitimately serve audio as `application/octet-stream` or with no type at all, and an allowlist filter would produce false negatives in bulk.
* **Configurable maximum size.** If the server declares the size, an over-limit file is rejected before a single byte is written; without a declaration, a streaming counter aborts the transfer as soon as the threshold is crossed.

The integrity check at the end (`finish`) requires the received bytes to match the expected total — from `Content-Length`, or from the authoritative total in `Content-Range` for resumed `206` responses — within an **absolute** tolerance of 64 bytes. The previous version used a relative 0.1 % tolerance: on a 100 MB file it let ~100 KB go missing, i.e. seconds of audio. A correct transfer matches to the byte; the tolerance absorbs only end-of-stream quirks. Related is the `Accept-Encoding: identity` request header: a server compressing the audio in transit would make the decompressed byte count inconsistent with `Content-Length`, failing the check on every attempt.

### 4.6 Pause and Resume

v1.5.0-dev introduces pause and resume, per download and for the whole queue, reusing the existing resumption infrastructure. The mechanism distinguishes *intent* inside the same abort signal: the reasons `PAUSE`/`PAUSE_QUEUE` (the `PAUSE_REASONS` set) mark a **non-destructive** abort, which preserves the `.part`/`.part.meta` pair; any other reason is a genuine cancel, which cleans up the temporary files. A paused task keeps all of its claims (URL, reserved path, batch generation — §6): it is suspended work, not finished work, and resuming re-queues it with a fresh `AbortController`, continuing via `Range` + `If-Range` from the exact point it stopped.

## 5. Data Integrity and Provenance

### 5.1 End-to-End SHA-256

At the end of every successful download, the handler in `ipc.ts` computes a **streaming SHA-256** checksum of the file on disk (`sha256File()`, constant memory) together with size, bitrate and sample rate (via `music-metadata`). These values are written to the archive row. The qualifying point is transactional (S7): the "downloaded" flag and the archive row are written in **a single transaction** (`DatabaseService.recordDownload()`) — a crash between the two writes cannot leave an episode marked as downloaded yet invisible to the archive and to the integrity check.

### 5.2 Health Check with Re-Hashing

The health check (`RUN_HEALTH_CHECK` in `ipc.ts`) walks the entire archive and classifies every entry: **present**, **missing** or **corrupted**. For entries with a recorded checksum, the file on disk is re-hashed and compared: this surfaces silent bit rot, copy truncations and tampering — not merely the file's absence. Legacy entries without a checksum are counted but not verifiable, and marked as such (the CSV export labels them `LEGACY`).

### 5.3 Guided Repair by Checksum

The checksum also enables repair (`REPAIR_ARCHIVE`, v1.5.0-dev): for every entry whose file is missing, the system searches **within the podcast's folder** for a file with the same SHA-256 — the covered case is a file renamed by hand or by a change of naming template — and re-links the database row to the found name. Three measures make the operation safe and efficient: (a) names already claimed by entries whose file exists are never candidates, so a repair cannot "steal" another entry's file; (b) size acts as a cheap pre-filter — an equal hash implies an equal size, so only files of the expected size get hashed; (c) per-folder and per-file caches avoid re-reading directories or re-hashing candidates across multiple entries. The disk is opened read-only: the repair touches nothing but the database row.

### 5.4 Metadata That Outlives the Application

An archive that depends on its own management software is fragile. Two optional mechanisms make the metadata readable by any future tool:

* the **JSON sidecar** next to each audio file, with title, podcast, GUID, publication date, download date and source URL — provenance in textual, self-describing form;
* the **ID3 tags** written into the file itself (`electron/utils/writeId3Tags.ts`), episode cover art included.

The picture is completed by the archive's CSV export, which reports checksum and validation status for every entry, with neutralization of formula-injection prefixes (§7.3).

## 6. Concurrent Robustness

With 1–10 parallel downloads in a single process, the most insidious bugs are not network bugs: they are races between local operations.

### 6.1 Deduplication Without a TOCTOU Window

Two rapid invocations of the same download (a double click, overlapping batches) must produce only one. The duplicate check, however, if followed by an `await` before registration, opens a classic *time-of-check/time-of-use* window: both calls pass the check and register afterwards, producing a duplicate `_2` file and a second archive row. The solution (S3) is to claim the URL **synchronously, before the first `await`**: the `inFlightUrls` set is updated in the same event-loop turn as the check, so the second call finds the URL already claimed and returns `duplicate`. Since Electron's main process is single-threaded, synchronicity is here a zero-cost atomicity guarantee.

### 6.2 Reservation of Target Paths

Symmetrically, two concurrent downloads could resolve to the **same target path** (identical titles from different feeds, coinciding naming templates) and write the same `.part`, corrupting each other. The collision check considers both files already on disk (`fs.existsSync`, deliberately synchronous to keep the selection atomic) and the `reservedTargets` set of paths claimed by in-flight downloads; the chosen path is reserved before the task is queued (M1). A portability detail: on NTFS and APFS name comparison is case-insensitive, so the reservation key is folded to lowercase on Windows and macOS — "Intro.mp3" and "INTRO.mp3" really do collide, and the reservation must know it.

Claim ownership is tracked per task (`taskTargets`): cancelling a pending task releases its URL and path immediately (so an instant re-download is neither deduplicated away nor suffixed `_2`), while the task's own `finally` block frees only what it still owns — guarded by an identity comparison, so it cannot free a claim a later re-download has already taken over.

### 6.3 Generation-Based Batches

The renderer sends no "batch start" signal: only a burst of `START_DOWNLOAD` calls arrives. `BatchTracker` (`electron/services/BatchTracker.ts`) infers batches with a 200 ms **seal window**: every `track()` re-arms the timer, and the batch seals 200 ms after the last registration. The delicate point, uncovered by a real defect (B3), is that a `track()` arriving while an **already sealed** batch is still draining must not reopen it — that would merge two logically distinct batches, with wrong totals and mixed failure lists. Each burst is therefore an independent **generation**, with its own identifier, counters and failure list; every download captures the identifier from `track()` and hands it back to `recordFailure()`/`complete()`, so concurrent batches cannot interfere. A seal-time completion callback covers the edge case of a batch finishing entirely within the window: without it, that batch would never emit its completion event.

## 7. Defensive Security

The threat model treats every URL and every remote document as hostile input: a feed can be crafted to make the application issue requests toward the user's internal network, to exhaust its memory, or to inject content into downstream tools.

### 7.1 SSRF: Two Layers, One of Them Authoritative

The defense against server-side request forgery is deliberately twofold, and the internal documentation insists on why both layers must remain.

The first layer (`electron/utils/validateUrl.ts`) is a fast, **lexical** pre-check on URLs coming from the renderer: only `http`/`https` protocols, blocking of literal private or reserved IPs, blocking of well-known internal hostnames (`localhost` and kin). It is useful for failing early with clear errors, but it is structurally bypassable in two ways: an HTTP redirect toward an internal host, and *DNS rebinding* — a public name that resolves to a private IP.

The authoritative layer (`electron/utils/safeHttp.ts`) closes both holes **at the socket layer**: a custom `lookup` function, installed on the `http`/`https` agents, re-validates the **resolved** IP on every connection and every redirect hop (maximum 5). The private-address classification covers IPv4 (RFC 1918, loopback, link-local, CGNAT, benchmarking ranges, multicast), IPv6 (loopback, ULA `fc00::/7`, link-local) and — an addition of v1.4.2 — the **IPv6 schemes that embed IPv4**: mapped (`::ffff:a.b.c.d`), compatible (`::a.b.c.d`), 6to4 (`2002::/16`) and NAT64 (`64:ff9b::/96`), each of which could otherwise tunnel an internal address. The same configuration (`SAFE_AXIOS_CONFIG`) is applied to every feed fetch, every pagination link, OPML-imported URLs and every download.

### 7.2 Hostile XML

Feeds and OPML files pass through `electron/utils/xmlSafety.ts`, which rejects documents whose prolog declares a `DOCTYPE` with `<!ENTITY>` (XXE and *billion laughs* attacks), on top of parsers already configured not to expand external entities. v1.4.2 closed a bypass of the check via comments or CDATA sections in the prolog and added protection against decompression bombs; each feed page is in any case capped at 15 MB.

### 7.3 Renderer Input Validation and Output Hygiene

Although the renderer is first-party code, the main process does not trust its payloads — the IPC boundary is treated as public surface. A concrete example (M15): the list of episodes to mark "not downloaded" is validated element by element, and deletions are split into chunks of 500 placeholders, under SQLite's variable limit. On the output side, the CSV export neutralizes prefixes executable by Excel/Calc (`=`, `+`, `-`, `@`, tab) in untrusted titles (M14), and the M3U export strips CRLF from titles to prevent line injection. The window process is hardened with a strict CSP in packaged builds, denial of every new window, blocking of navigation away from the application document, and a single-instance lock (two processes on the same SQLite file are a corruption risk before they are a nuisance).

### 7.4 Database Corruption: Recovery and Salvage

A corrupted SQLite file would render the application permanently unable to start. On open, `DatabaseService` carefully distinguishes **genuine corruption** (`SQLITE_CORRUPT`/`SQLITE_NOTADB`, "malformed"/"not a database" messages) from transient failures — disk full during an `ALTER`, a WAL locked by an antivirus scan, momentarily denied permissions. Only genuine corruption triggers recovery: the damaged files are **moved aside** as `.corrupt-<timestamp>` (never deleted — user data is not erased) and a fresh database is started. A transient error, by contrast, propagates untouched: renaming a healthy database would have silently reset the user's entire library at the next reopening.

On the fresh database, the **guided salvage** then steps in (`salvageFromCorrupt()`, v1.5.0-dev): SQLite corruption is typically local, so the damaged file is opened read-only and each table read independently; every recoverable row is re-inserted with `INSERT OR IGNORE`, **outside** any overall transaction — a poisoned row costs only itself, not the whole table. A failed restore attempt never compromises startup: the application continues on the new database.

## 8. Evaluation

### 8.1 The Test Suite as a Blocking Gate

The project is covered by a Vitest suite of **roughly 390 cases** spread across some twenty modules (`tests/`), targeting the components this paper describes: the download engine (resumption, validators, error classification, watchdog), the generation tracker, schema migrations and composite keys, the two SSRF defenses (with explicit cases for the IPv6 embedding schemes), XML safety, the throttle stream, safe paths and filename sanitization.

The suite is not decorative: in the release flow (`.github/workflows/build.yml`) a blocking `verify` job runs the linter, the dual type-check and the entire suite **before** the Windows and Linux build jobs may start. No binary is ever produced from a tree that does not pass the tests. A documented operational detail: `better-sqlite3` is a native module, and Electron's ABI differs from Node's — locally, the `pretest`/`predev` scripts automatically rebuild the module for the right environment, while in CI `npm ci` produces the binary for the Node ABI Vitest runs on.

### 8.2 An Audit-Driven Process

The project's trajectory is measurable through its internal audit cycles, each with findings classified by severity and closed in dedicated releases:

* **audit of 29 May 2026** — critical SSRF findings fixed in v1.3.1; severe B1–B9 in v1.3.2–v1.3.6; medium M1–M7 in v1.3.7–v1.3.8; minor findings in v1.3.9;
* **audit of 12 July 2026** — severe findings in v1.3.13, medium and minor in v1.3.14; v1.4.0 (13 July, 312 green tests) closed the feature section (notifications, worker-based parsing, badges, 301 redirects);
* **full audit of 18 August 2026** — 4 severe, ~20 medium and ~25 minor findings, all resolved in v1.4.2 (367 green tests, zero vulnerabilities in production dependencies).

The identifiers scattered through this paper (S1, S3, S6, S7, M1, M4, L7, L10, …) are the actual codes of those findings, still readable in the source comments: the code documents not only *what* it does, but *which defect* each guard closed.

### 8.3 System Numbers

For scale, some indicative figures: pagination up to 20 pages of 15 MB per feed; libraries of thousands of episodes with indexed lookups; 3 attempts per transfer with resumption; concurrency 1–10; a 200 ms batch seal window; a 64-byte integrity tolerance; a 2000-feed cap on OPML import; a feed cache with a 5-minute TTL and 200 entries. The interface virtualizes its lists (react-virtuoso) and system notifications are localized (Italian and English since v1.4.2).

## 9. Related Work and Limitations

### 9.1 Related Work

The podcast-archiving problem is served by a range of tools with different trade-offs. Classic clients such as **gPodder** manage subscriptions and downloads but were born for listening, not for verifiable archiving: they offer neither end-to-end checksums nor subsequent integrity verification. Command-line tools such as **podcast-archiver**, or hand-rolled pipelines over `wget`/`curl`, cover bulk downloading well but leave resilience (verified resumption, error classification) and integrity to the operator, and remain out of reach for non-technical users. General web-archiving systems such as **ArchiveBox** share the philosophy of the verifiable local copy, but do not address feed specifics (RFC 5005 pagination, rolling windows, GUID-based identity, audio metadata). FeedDownloader's position is the combination: the rigor of an archiving tool, packaged as a desktop application for end users.

### 9.2 Limitations

These should be stated with equal frankness:

* **Provenance is not cryptographically signed.** SHA-256 proves the file has not changed *after* download; it proves nothing about origin, nor does it provide a defensible timestamp. A signing chain or external anchoring of digests is outside the current scope.
* **Trust in server validators.** Verified resumption depends on the honesty of `ETag`/`Last-Modified`; a server handling them incorrectly could in theory make an inconsistent resumption be accepted. The size check and the downstream checksum mitigate, but do not eliminate, the case.
* **No code signing.** The distributed binaries are unsigned (known limitation L6 from the May audit): a distribution cost for an independent project, not a technical choice.
* **macOS not distributed.** CI produces Windows and Linux; macOS is excluded from official distribution (self-compilation remains possible).
* **No end-to-end tests.** The suite is unit- and integration-level over the services; testing of the full interface remains manual.
* **A single-machine archive.** SQLite in WAL mode serves a personal archive well; multi-machine or multi-user synchronization is out of scope.

## 10. Conclusions and Future Work

Runtime FeedDownloader Pro shows that a desktop application for end users can offer guarantees worthy of a professional archiving tool: transfers that resume only when it is demonstrably safe to do so, an archive whose contents are verifiable byte for byte over time, concurrency without races over identities and paths, and a defensive posture that treats all remote content as hostile. None of these techniques is new in itself; the engineering value lies in their coherent composition and in the process — recurring audits, findings tracked in the code, a test suite as a blocking gate — that has preserved their correctness across more than thirty releases.

The ongoing work on the v1.5.0 line extends the system along the natural directions of this design: pause and resume of the queue (already present in v1.5.0-dev, built on the existing `If-Range` infrastructure), targeted retry of failed downloads (the tracker already preserves the original request of every failure), guided archive repair and guided database salvage (both described above), and the configurable per-file size cap. Further out: code signing for distribution, and a possible export of the archive into a documented interchange format — because an archive worthy of the name must be able to outlive even the tool that created it.

---

*Code references: the paths cited (`electron/services/DownloadService.ts`, `electron/services/DatabaseService.ts`, `electron/services/BatchTracker.ts`, `electron/ipc.ts`, `electron/utils/safeHttp.ts`, `electron/utils/validateUrl.ts`, `electron/utils/xmlSafety.ts`, `docs/ARCHITECTURE.md`) are relative to the repository root, at the v1.5.0-dev state.*
