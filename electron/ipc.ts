import { ipcMain, dialog, Notification, BrowserWindow, app, shell } from 'electron';
import crypto from 'crypto';
import { FeedService } from './services/FeedService';
import { FeedParserPool } from './services/FeedParserPool';
import { LibraryService } from './services/LibraryService';
import { fileURLToPath } from 'node:url';
import { DownloadService } from './services/DownloadService';
import { QueueService } from './services/QueueService';
import { BatchTracker, type BatchResult } from './services/BatchTracker';
import { getSafePath } from './utils/getSafePath';
import { writeId3Tags } from './utils/writeId3Tags';
import { extractExtension } from './utils/extractExtension';
import { applyTemplate } from './utils/applyTemplate';
import { validateUrl } from './utils/validateUrl';
import { evaluateWhatsNew } from './utils/whatsNew';
import { validateNetworkPath } from './utils/validateNetworkPath';
import { SharedRateLimiter } from './utils/throttleStream';
import { SAFE_AXIOS_CONFIG, USER_AGENT } from './utils/safeHttp';
import { autoUpdater } from 'electron-updater';
import axios from 'axios';
import { IPC_CHANNELS as CH } from '../shared/types';
import type {
    FeedEntry, DownloadRequest, HealthCheckResult, HealthCheckMode, HealthCheckFile, DiskSpaceInfo, MigrationResult,
    MigrationProgress, PathValidationResult, UpdateStatus, QueueItem, QueueState, ArchiveEntry, FailedDownload,
    CompletedDownload, Episode, FeedStats, PendingDownloads, ArchiveRepairResult, DownloadResult,
} from '../shared/types';
import { buildDownloadRequest, feedImageUrl } from '../shared/buildDownloadRequest';
import path from 'path';
import fs from 'fs-extra';
import { statfs } from 'fs/promises';
import { parseFile as parseAudioMetadata } from 'music-metadata';
import sanitize from 'sanitize-filename';

const feedService = new FeedService();
// M9: feed parsing runs in a utility process (feedWorker.js sits next to the
// bundled main.js in dist-electron). The pool falls back to in-process parsing
// if the worker can't spawn, so this is safe even if packaging misses the file.
const feedParser = new FeedParserPool(
    path.join(path.dirname(fileURLToPath(import.meta.url)), 'feedWorker.js')
);
const downloadService = new DownloadService();

// S4: created in initServices(), NOT at module scope — opening the DB can throw
// (corrupted file, unwritable userData) and an import-time crash would kill the
// app before any window or error dialog exists.
let libraryService: LibraryService;
let queueService: QueueService;

/**
 * Open the database and build the services that depend on it. Must be called
 * before registerIpcHandlers. Throws if the DB can't be opened even after the
 * built-in corruption recovery; the caller decides how to surface the failure.
 */
export function initServices(): { recovered: boolean } {
    libraryService = new LibraryService();
    queueService = new QueueService(libraryService.getConcurrency());
    bandwidth.setRate(libraryService.getSpeedLimit() * 1024);
    // v1.6.0: pin archive rows written before baseDir existed to the folder in
    // use now — from here on, changing the download folder no longer "loses"
    // the files already archived (they stay resolved where they are).
    try {
        const pinned = libraryService.backfillArchiveBaseDir(effectiveBaseDir());
        if (pinned > 0) console.log(`[Archive] Recorded the folder of ${pinned} existing archive rows.`);
    } catch (e) {
        console.error('[Archive] baseDir backfill failed:', e);
    }
    // Snapshot of the downloads interrupted last time, offered for resume.
    bootPending = libraryService.getPendingDownloads();
    return { recovered: libraryService.wasRecovered };
}

// ── Paths (v1.6.0) ───────────────────────────────────────────

/** The folder new downloads go to: the configured one, or the default. */
function effectiveBaseDir(): string {
    return libraryService.getDownloadPath() || path.join(app.getPath('documents'), 'FeedDownloader', 'downloads');
}

/** Every base folder an archived file can live in: its own first, then the current one. */
function baseCandidates(entry: Pick<ArchiveEntry, 'baseDir'>): string[] {
    const current = effectiveBaseDir();
    const list = entry.baseDir ? [entry.baseDir, current] : [current];
    return list.filter((b, i) => list.findIndex(x => path.resolve(x) === path.resolve(b)) === i);
}

/**
 * v1.6.0 — where an archived file is on disk. Tries the folder it was written
 * to, then the current download folder (the user may have moved the files by
 * hand and pointed the app at the new place). When neither exists, returns the
 * expected location so callers can report it.
 */
async function resolveArchivedPath(entry: Pick<ArchiveEntry, 'baseDir' | 'podcastTitle' | 'filename'>): Promise<{ path: string; exists: boolean }> {
    const candidates = baseCandidates(entry).map(b => path.join(b, sanitize(entry.podcastTitle), entry.filename ?? ''));
    for (const c of candidates) {
        if (entry.filename && await fs.pathExists(c)) return { path: c, exists: true };
    }
    return { path: candidates[0], exists: false };
}

/** All folders the app may legitimately open: the current base and every base an archive row uses. */
function knownBaseDirs(): string[] {
    const set = new Map<string, string>();
    const add = (p?: string) => { if (p) set.set(path.resolve(p).toLowerCase(), path.resolve(p)); };
    add(effectiveBaseDir());
    for (const e of libraryService.getArchive()) add(e.baseDir);
    return [...set.values()];
}

/** True when `target` is `base` or inside it. */
function isWithin(base: string, target: string): boolean {
    const rel = path.relative(path.resolve(base), path.resolve(target));
    return rel === '' || (!rel.startsWith('..') && !path.isAbsolute(rel));
}

/**
 * v1.5.0 — Guided DB restore. If a `.corrupt-<timestamp>` backup exists next to
 * the database AND the active database is empty (the state the silent recovery
 * leaves behind), offer to salvage feeds/archive/history from the newest backup.
 * Called once per boot, after the window is ready; a no-op in every other state.
 */
export async function maybeOfferDbRestore(win: BrowserWindow): Promise<void> {
    try {
        const userData = app.getPath('userData');
        const dbBase = 'feeddownloader.sqlite';
        const backups = (await fs.readdir(userData).catch(() => [] as string[]))
            .filter(f => f.startsWith(`${dbBase}.corrupt-`) && !f.endsWith('-wal') && !f.endsWith('-shm'))
            .sort()   // ISO timestamp in the name → lexicographic = chronological
            .reverse();
        if (backups.length === 0) return;
        if (!libraryService.isEmpty()) return;

        const it = app.getLocale().toLowerCase().startsWith('it');
        const { response } = await dialog.showMessageBox(win, {
            type: 'question',
            buttons: it ? ['Tenta ripristino', 'Ignora'] : ['Attempt restore', 'Ignore'],
            defaultId: 0,
            cancelId: 1,
            title: 'Runtime FeedDownloader Pro',
            message: it
                ? 'Trovato un backup del database danneggiato.'
                : 'A backup of a damaged database was found.',
            detail: it
                ? `Il database attuale è vuoto ed esiste un backup salvato durante un recupero precedente (${backups[0]}). Vuoi tentare di recuperare feed, archivio e cronologia? I file audio non vengono toccati e il backup non viene modificato.`
                : `The current database is empty and a backup saved during a previous recovery exists (${backups[0]}). Attempt to recover feeds, archive and history? Audio files are untouched and the backup is not modified.`,
        });
        if (response !== 0) return;

        const result = libraryService.salvageFromCorrupt(path.join(userData, backups[0]));
        const recoveredAny = result.feeds + result.archive + result.downloads > 0;
        if (recoveredAny) {
            pushEvent(win, CH.FEEDS_UPDATED, libraryService.getFeeds());
            pushEvent(win, CH.DOWNLOADS_UPDATED);
        }
        await dialog.showMessageBox(win, {
            type: recoveredAny ? 'info' : 'warning',
            title: 'Runtime FeedDownloader Pro',
            message: recoveredAny
                ? (it
                    ? `Ripristino completato: ${result.feeds} feed, ${result.archive} episodi in archivio, ${result.downloads} download registrati.`
                    : `Restore complete: ${result.feeds} feeds, ${result.archive} archive entries, ${result.downloads} recorded downloads.`)
                : (it
                    ? 'Nessun dato recuperabile dal backup danneggiato.'
                    : 'No recoverable data was found in the damaged backup.'),
        });
    } catch (e) {
        // A failed restore attempt must never break the boot — the app keeps
        // running on the fresh (empty) database exactly as before.
        console.error('[DB-Restore] Guided restore failed:', e);
    }
}

// Stream a file through SHA-256 (constant memory) and return the hex digest.
// Shared by the download-time integrity capture and the Health Check re-check (L10).
function sha256File(filePath: string): Promise<string> {
    return new Promise((resolve, reject) => {
        const hash = crypto.createHash('sha256');
        const stream = fs.createReadStream(filePath);
        stream.on('data', (chunk) => hash.update(chunk as Buffer));
        stream.on('end', () => resolve(hash.digest('hex')));
        stream.on('error', reject);
    });
}

// Helper: send push event to renderer safely
function pushEvent(win: BrowserWindow, channel: string, data?: unknown) {
    if (win && !win.isDestroyed()) {
        win.webContents.send(channel, data);
    }
}

// The active window, so the batch-completion emitter (which can also fire from
// BatchTracker's seal timer, outside any handler) can reach the renderer.
let mainWindowRef: BrowserWindow | null = null;

/**
 * Emit the end-of-batch OS notification + BATCH_COMPLETED event. Called both from
 * a download's finally (normal path) and from BatchTracker's seal timer when the
 * whole batch finished within the seal window (otherwise that batch would never
 * be reported — the seal-completion bug).
 */
function emitBatchComplete(result: BatchResult): void {
    if (!mainWindowRef) return;
    const finishedTotal = result.total;
    const failed = result.failed;
    const failedCount = failed.length;
    const okCount = finishedTotal - failedCount;
    if (Notification.isSupported()) {
        const notificationBodies: Record<string, string> = {
            en: failedCount > 0 ? `Download complete: ${okCount} downloaded, ${failedCount} failed.` : `Download complete: ${finishedTotal} files downloaded.`,
            it: failedCount > 0 ? `Download completato: ${okCount} scaricati, ${failedCount} errori.` : `Download completato: ${finishedTotal} file scaricati.`,
        };
        new Notification({
            title: 'Runtime FeedDownloader Pro',
            body: notificationBodies[uiLocale] ?? notificationBodies['en'],
            icon: path.join(process.env.VITE_PUBLIC || '', 'logo.png'),
        }).show();
    }
    pushEvent(mainWindowRef, CH.BATCH_COMPLETED, { total: finishedTotal, failed: [...failed] });
}

// Track batch for OS notification (race-condition-safe via debounce seal).
// The callback closes a batch that completes entirely within the seal window.
const batchTracker = new BatchTracker(emitBatchComplete);

// Track AbortControllers for in-flight downloads — keyed by taskId
const activeDownloads = new Map<string, AbortController>();

// Queue state: visible to renderer via QUEUE_UPDATED push events
const queueItems = new Map<string, QueueItem>();
// taskIds cancelled while still pending (task not yet executing)
const cancelledTaskIds = new Set<string>();
// M1: absolute target paths claimed by in-flight downloads. The completed-file
// collision check only sees files on disk, so two concurrent downloads resolving
// to the same name would both write the same `.part` and corrupt each other.
// Reserving the chosen path here (synchronously) makes every in-flight target —
// and therefore its `.part` — unique. Released in the task's finally / cancel path.
const reservedTargets = new Set<string>();

// M1 (case-folding): NTFS/APFS default to case-insensitive matching, so two
// targets differing only in case ("Intro" vs "INTRO") resolve to the same file.
// Fold the reservation key on those platforms so the collision check still fires.
const foldTargetKey = (p: string): string =>
    (process.platform === 'win32' || process.platform === 'darwin') ? p.toLowerCase() : p;
const isTargetReserved = (p: string): boolean => reservedTargets.has(foldTargetKey(p));
const reserveTarget = (p: string): void => { reservedTargets.add(foldTargetKey(p)); };
const releaseTarget = (p: string): void => { reservedTargets.delete(foldTargetKey(p)); };
// v1.6.0: a download also claims its sidecar name ("Ep.json"), see enqueueDownload.
const sidecarOf = (p: string): string => path.join(path.dirname(p), path.parse(p).name + '.json');
const releaseTargetAndSidecar = (p: string): void => { releaseTarget(p); releaseTarget(sidecarOf(p)); };

// S3 / TOCTOU: enclosure URLs claimed synchronously the moment a download is
// accepted — before the first await — so two rapid invocations (double click,
// overlapping batches) can't both slip past the duplicate check while the task
// is still being set up. Released alongside the reserved path.
const inFlightUrls = new Set<string>();

// taskId → the target path (and url) that task reserved. Lets CANCEL_DOWNLOAD
// release a pending task's claims immediately (so an instant re-download isn't
// spuriously deduped or suffixed `_2`), while the task's own finally only frees
// what it still owns — guarded by identity so it can't free a claim a later
// re-download has already taken over.
const taskTargets = new Map<string, { url: string; target: string }>();

// ── Pause/Resume (v1.5.0) ────────────────────────────────────
// A paused download keeps ALL its claims (URL, target path, batch generation):
// it is still "owned" work — only its transfer is suspended. The .part/.part.meta
// pair stays on disk so the resume continues via Range + If-Range.
//
// Two flavours:
//  - pausedTaskIds: tasks paused while still *pending* (their queue slot hasn't
//    opened yet). When the slot opens, the task parks itself instead of running.
//  - pausedTasks: tasks parked with a re-runnable closure. RESUME re-queues it
//    with a fresh AbortController.
const pausedTaskIds = new Set<string>();
interface PausedTask { run: () => Promise<void>; url: string; target: string; batchGen: number }
const pausedTasks = new Map<string, PausedTask>();
// Queue-level pause — also consulted by the task pause path to detect a
// resume-all that raced with an in-flight PAUSE_QUEUE abort.
// v1.6.0: it carries WHY the queue is paused. 'offline' is set automatically
// when the connection drops and lifted when it returns; 'user' is only lifted
// by the user. Before, the offline banner promised "downloads are paused" but
// nothing paused them: a dropped connection drained a whole batch into
// failures in about a minute (each episode burning its retries).
let queuePauseReason: 'user' | 'offline' | null = null;
const isQueuePaused = () => queuePauseReason !== null;

// v1.6.0 — one bandwidth budget for every download (the limit used to be per file).
const bandwidth = new SharedRateLimiter(0);

// v1.6.0 — counters of the current "run" (queue idle → work → queue drained).
const run = { total: 0, completed: 0, failed: 0, cancelled: 0 };

// v1.6.0 — downloads left in the queue when the app last quit, snapshotted at boot.
let bootPending: DownloadRequest[] = [];

// v1.6.0 — podcast folders whose podcast.json/cover were written this session.
const podcastMetaWritten = new Set<string>();

async function removePartials(target: string): Promise<void> {
    await fs.remove(`${target}.part`).catch(() => { });
    await fs.remove(`${target}.part.meta`).catch(() => { });
}

function pushQueueUpdated(win: BrowserWindow) {
    pushEvent(win, CH.QUEUE_UPDATED, Array.from(queueItems.values()));
    pushQueueState(win);
}

function queueState(): QueueState {
    return { paused: isQueuePaused(), pauseReason: queuePauseReason, run: { ...run } };
}

function pushQueueState(win: BrowserWindow) {
    pushEvent(win, CH.QUEUE_STATE, queueState());
}

// L17: the autoUpdater emitter is a process-global singleton. Binding its
// listeners lives inside registerIpcHandlers, so if the window were ever
// recreated (a lifecycle M18's tray behaviour makes more plausible) they would
// stack up — duplicate notifications and a leak. Bind them at most once.
let autoUpdaterListenersBound = false;

// max 1 parse request per URL every 3 seconds
const parseFeedLastCall = new Map<string, number>();
const PARSE_FEED_COOLDOWN_MS = 3000;

// L3: feeds whose canonical URL we've already probed for a permanent redirect
// this session — bounds the extra request to at most once per feed per run of
// the app, rather than on every background-refresh cycle.
const redirectChecked = new Set<string>();

// in-memory feed cache: avoids re-fetching on repeated clicks
const feedCache = new Map<string, { feed: unknown; timestamp: number }>();
const FEED_CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes
const FEED_CACHE_MAX = 200; // hard cap so a long session / OPML import can't grow it unbounded (B7)

/** Evict expired cache/cooldown entries and enforce the size cap. */
function pruneFeedCaches(now: number): void {
    for (const [u, v] of feedCache) {
        if (now - v.timestamp >= FEED_CACHE_TTL_MS) feedCache.delete(u);
    }
    for (const [u, t] of parseFeedLastCall) {
        if (now - t >= PARSE_FEED_COOLDOWN_MS) parseFeedLastCall.delete(u);
    }
    if (feedCache.size > FEED_CACHE_MAX) {
        const oldestFirst = [...feedCache.entries()].sort((a, b) => a[1].timestamp - b[1].timestamp);
        const excess = feedCache.size - FEED_CACHE_MAX;
        for (let i = 0; i < excess; i++) feedCache.delete(oldestFirst[i][0]);
    }
}

/** Run `worker` over `items` with at most `limit` in flight at once (bounded
 *  fan-out). Never rejects — mirrors Promise.allSettled semantics per item. */
async function runWithConcurrency<T>(items: T[], limit: number, worker: (item: T) => Promise<void>): Promise<void> {
    let cursor = 0;
    const runners = Array.from({ length: Math.min(limit, items.length) }, async () => {
        while (cursor < items.length) {
            const item = items[cursor++];
            try { await worker(item); } catch { /* per-item failure is swallowed */ }
        }
    });
    await Promise.all(runners);
}

// UI locale synced from renderer for localized OS notifications
let uiLocale = 'en';

// ── Auto-Refresh (F3) ────────────────────────────────────────
let autoRefreshTimer: ReturnType<typeof setInterval> | null = null;
// N2: debounce for the "regained connectivity" refresh trigger
let onlineRefreshDebounce: ReturnType<typeof setTimeout> | null = null;

function clearAutoRefresh() {
    if (autoRefreshTimer) {
        clearInterval(autoRefreshTimer);
        autoRefreshTimer = null;
    }
}

// M17: set on shutdown so a timer tick can't touch a closed database
let isShuttingDown = false;

/** v1.6.0 — outcome of a refresh pass, returned to "Check all" in the UI. */
interface RefreshSummary { checked: number; failed: number; newEpisodes: number; queued: number }

// A refresh already running is joined, not started twice (timer + button + reconnect).
let refreshInFlight: Promise<RefreshSummary> | null = null;

function runBackgroundRefresh(win: BrowserWindow, opts: { manual?: boolean } = {}): Promise<RefreshSummary> {
    if (refreshInFlight) return refreshInFlight;
    refreshInFlight = doBackgroundRefresh(win, opts).finally(() => { refreshInFlight = null; });
    return refreshInFlight;
}

async function doBackgroundRefresh(win: BrowserWindow, opts: { manual?: boolean }): Promise<RefreshSummary> {
    const summary: RefreshSummary = { checked: 0, failed: 0, newEpisodes: 0, queued: 0 };
    if (isShuttingDown) return summary;
    const feeds = libraryService.getFeeds();
    if (feeds.length === 0) return summary;

    let totalNew = 0;
    const feedsWithNew: { title: string; url: string }[] = [];
    let done = 0;
    const progress = () => pushEvent(win, CH.REFRESH_PROGRESS, { done, total: feeds.length });
    progress();

    // Bound the fan-out: a large (OPML-imported) library would otherwise open
    // hundreds/thousands of simultaneous fetches on the single feed-parser worker,
    // spiking memory/sockets and overflowing the worker's request timeout — which
    // then dumps every overflowed parse back onto the main thread in-process,
    // recreating exactly the stall M9 removed.
    const REFRESH_CONCURRENCY = 5;
    await runWithConcurrency(feeds, REFRESH_CONCURRENCY, async (feedEntry) => {
        try {
            // Invalidate cache to force a fresh HTTP fetch
            feedCache.delete(feedEntry.url);
            parseFeedLastCall.delete(feedEntry.url);

            // M6: conditional request with the stored validators — a 304 means
            // nothing changed, so the full multi-page refetch is skipped and
            // podcast hosts aren't hammered on every cycle.
            const validators = libraryService.getFeedValidators(feedEntry.url) ?? undefined;
            const feed = await feedParser.parse(feedEntry.url, validators); // M9: off the main thread
            if (isShuttingDown) return;
            summary.checked++;
            if (feed === null) {
                libraryService.touchFeed(feedEntry.url, new Date().toISOString());
                return; // 304 Not Modified
            }
            const parsed = (feed as unknown) as ParsedFeed;
            const episodes = parsed.episodes ?? [];
            const currentGuids = episodes.map(e => e.guid).filter((g): g is string => !!g);

            feedCache.set(feedEntry.url, { feed, timestamp: Date.now() });
            libraryService.touchFeed(feedEntry.url, new Date().toISOString());
            libraryService.setFeedValidators(feedEntry.url, parsed.httpEtag, parsed.httpLastModified);
            libraryService.setCurrentEpisodeGuids(feedEntry.url, currentGuids); // M10: badge source
            syncFeedIdentity(feedEntry.url, parsed);

            // F3-fix: GUID-based detection — correctly detects new episodes even when
            // the feed removes old ones (rolling window), which broke the old
            // count-comparison approach.
            const known = libraryService.getKnownGuids(feedEntry.url);
            if (known.size === 0) {
                // No baseline yet: feed added before this feature shipped (existing
                // installs after upgrade) or imported via OPML and never opened.
                // Seed silently — without this the first refresh would report every
                // pre-existing episode as "new" and fire one huge false notification.
                libraryService.markGuidsAsKnown(feedEntry.url, currentGuids);
            } else {
                // L5: a GUID repeated inside the same feed must count once
                const newGuids = new Set(currentGuids.filter(g => !known.has(g)));
                if (newGuids.size > 0) {
                    totalNew += newGuids.size;
                    feedsWithNew.push({ title: feedEntry.title, url: feedEntry.url });
                    // v1.6.0 — automatic archiving: the new episodes of a feed with
                    // "archivio automatico" on are queued right away, no prompt.
                    if (feedEntry.autoDownload) {
                        const fresh = episodes.filter(e => e.guid && newGuids.has(e.guid));
                        summary.queued += await enqueueEpisodes(win, { url: feedEntry.url, title: parsed.title || feedEntry.title, image: parsed.image, itunes: parsed.itunes }, fresh);
                    }
                }
                // Record all current GUIDs as known for future comparisons
                libraryService.markGuidsAsKnown(feedEntry.url, currentGuids);
            }
            libraryService.updateEpisodeCount(feedEntry.url, episodes.length);

            // L3: once per feed per session, check whether the URL has permanently
            // moved (301/308) and, if so, re-point the feed and carry its history
            // to the new URL so future fetches go direct instead of redirecting
            // on every poll. Runs last, after this feed's DB writes, so the
            // migration moves the freshly-written rows too.
            if (!redirectChecked.has(feedEntry.url)) {
                redirectChecked.add(feedEntry.url);
                const movedTo = await feedService.checkPermanentRedirect(feedEntry.url);
                if (!isShuttingDown && movedTo && !libraryService.hasFeed(movedTo)) {
                    if (libraryService.updateFeedUrl(feedEntry.url, movedTo)) {
                        feedCache.delete(feedEntry.url);
                        parseFeedLastCall.delete(feedEntry.url);
                        redirectChecked.add(movedTo); // don't immediately re-probe the new URL
                    }
                }
            }
        } catch {
            // silently skip feeds that fail in background
            summary.failed++;
        } finally {
            done++;
            progress();
        }
    });

    // Keep the in-memory feed cache bounded — the refresh populates it for every
    // feed, but only PARSE_FEED used to prune, so a large library grew it past the
    // B7 cap on every cycle.
    pruneFeedCaches(Date.now());

    summary.newEpisodes = totalNew;
    if (isShuttingDown) return summary;

    pushEvent(win, CH.FEEDS_UPDATED, libraryService.getFeeds());

    // A refresh the user started gets its answer in the app (toast); the OS
    // notification is for the unattended background passes.
    if (!opts.manual && totalNew > 0 && Notification.isSupported()) {
        const fp = feedsWithNew.length;
        const q = summary.queued;
        const notifBodies: Record<string, string> = {
            en: `${totalNew} new episode${totalNew !== 1 ? 's' : ''} found in ${fp} podcast${fp !== 1 ? 's' : ''}.`
                + (q > 0 ? ` ${q} being archived automatically.` : ''),
            it: (totalNew === 1
                ? `1 nuovo episodio trovato in ${fp} podcast.`
                : `${totalNew} nuovi episodi trovati in ${fp} podcast.`)
                + (q > 0 ? ` ${q} in archiviazione automatica.` : ''),
        };
        const notification = new Notification({
            title: 'Runtime FeedDownloader Pro',
            body: notifBodies[uiLocale] ?? notifBodies['en'],
            icon: path.join(process.env.VITE_PUBLIC || '', 'logo.png'),
        });
        // v1.5.0: the notification is actionable — clicking it brings the app to
        // the front and, when the news is about a single podcast, opens that feed.
        const singleFeedUrl = feedsWithNew.length === 1 ? feedsWithNew[0].url : null;
        notification.on('click', () => {
            if (!win || win.isDestroyed()) return;
            if (!win.isVisible()) win.show();
            if (win.isMinimized()) win.restore();
            win.focus();
            if (singleFeedUrl) pushEvent(win, CH.OPEN_FEED, singleFeedUrl);
        });
        notification.show();
    }
    return summary;
}

/** The parsed-feed shape the main process reads (FeedService.parseFeed output). */
interface ParsedFeed {
    title?: string;
    image?: string | { url?: string };
    itunes?: { image?: string };
    episodes?: Episode[];
    httpEtag?: string;
    httpLastModified?: string;
}

/**
 * v1.6.0 — keep the library row in step with the feed itself. Feeds imported by
 * OPML kept the OPML text as title and no cover forever; a successful parse now
 * stores the feed's real title and cover (never blanking either).
 */
function syncFeedIdentity(url: string, parsed: ParsedFeed): void {
    if (!libraryService.hasFeed(url)) return;
    const title = typeof parsed.title === 'string' ? parsed.title.trim() : '';
    const image = feedImageUrl({ image: parsed.image as string | { url: string } | undefined, itunes: parsed.itunes });
    libraryService.updateFeedIdentity(url, title || undefined, image || undefined);
}

/**
 * v1.6.0 — queue the given episodes of a feed (skipping those already archived).
 * Shared by automatic archiving and "resume interrupted downloads".
 * Returns how many were actually queued.
 */
async function enqueueEpisodes(win: BrowserWindow, feed: { url: string; title: string; image?: string | { url?: string }; itunes?: { image?: string } }, episodes: Episode[]): Promise<number> {
    let queued = 0;
    for (const ep of episodes) {
        const request = buildDownloadRequest({ url: feed.url, title: feed.title, image: feed.image as string | { url: string } | undefined, itunes: feed.itunes }, ep);
        if (!request) continue;
        if (libraryService.isDownloaded(request.guid, request.feedUrl ?? '')) continue;
        try {
            const res = await enqueueDownload(win, request);
            if (res.status === 'queued') queued++;
        } catch (e) {
            console.warn('[Queue] Could not queue', request.url, (e as Error).message);
        }
    }
    return queued;
}

/**
 * v1.4.0: lightweight archive ↔ filesystem reconciliation at startup. Non-blocking
 * (deferred, async stat loop). If archived files have disappeared from disk since
 * last run, notify the user once — pointing them at Settings → Health Check —
 * instead of silently reporting them as still downloaded. Extends M15.
 */
async function reconcileArchive() {
    if (isShuttingDown) return;
    try {
        const entries = libraryService.getArchive();
        if (entries.length === 0) return;

        let missing = 0;
        for (const entry of entries) {
            if (isShuttingDown) return;
            if (!entry.filename) { missing++; continue; }
            if (!(await resolveArchivedPath(entry)).exists) missing++;
        }
        if (missing > 0 && Notification.isSupported()) {
            const bodies: Record<string, string> = {
                en: `${missing} archived file${missing !== 1 ? 's are' : ' is'} missing from disk. Open Archive → Verify archive to review.`,
                it: missing === 1
                    ? '1 file archiviato risulta mancante su disco. Apri Archivio → Verifica archivio per controllare.'
                    : `${missing} file archiviati risultano mancanti su disco. Apri Archivio → Verifica archivio per controllare.`,
            };
            new Notification({
                title: 'Runtime FeedDownloader Pro',
                body: bodies[uiLocale] ?? bodies['en'],
                icon: path.join(process.env.VITE_PUBLIC || '', 'logo.png'),
            }).show();
        }
    } catch (err) {
        console.error('[Reconcile]', err);
    }
}

function startAutoRefreshTimer(win: BrowserWindow, hours: number) {
    clearAutoRefresh();
    if (hours === 0) return;
    const ms = hours * 60 * 60 * 1000;
    // M17: an unhandled rejection here (DB closed during shutdown, transient
    // error) would surface as unhandledRejection on every tick.
    autoRefreshTimer = setInterval(() => {
        runBackgroundRefresh(win).catch(err => console.error('[AutoRefresh]', err));
    }, ms);
}

/** v1.6.0 — longest show notes kept in a queued request / sidecar (chars). */
const MAX_DESCRIPTION_CHARS = 200_000;

/** L13: the renderer is trusted, but a malformed field must fail with a clear
 *  error instead of a TypeError deep inside sanitize()/template. */
function cleanRequest(request: DownloadRequest): DownloadRequest {
    const str = (v: unknown): string | undefined => (typeof v === 'string' && v ? v : undefined);
    const m = (request?.meta ?? {}) as Record<string, unknown>;
    const description = str(m.description);
    const length = typeof m.enclosureLength === 'number' && Number.isFinite(m.enclosureLength) && m.enclosureLength > 0
        ? Math.floor(m.enclosureLength) : undefined;
    return {
        url: String(request?.url ?? ''),
        title: String(request?.title ?? ''),
        podcastTitle: String(request?.podcastTitle ?? ''),
        guid: typeof request?.guid === 'string' ? request.guid : '',
        pubDate: str(request?.pubDate),
        feedImageUrl: str(request?.feedImageUrl),
        episodeImageUrl: str(request?.episodeImageUrl),
        feedUrl: str(request?.feedUrl),
        enclosureType: str(request?.enclosureType),
        meta: {
            description: description && description.length > MAX_DESCRIPTION_CHARS ? description.slice(0, MAX_DESCRIPTION_CHARS) : description,
            link: str(m.link),
            duration: str(m.duration),
            season: str(m.season),
            episode: str(m.episode),
            episodeType: str(m.episodeType),
            enclosureLength: length,
        },
    };
}

/**
 * v1.6.0 — write podcast.json and the show's cover into its folder, once per
 * folder per session, when "metadata beside the files" is on. An archive
 * outlives the feed: without these, the show's description and artwork are
 * gone the day the publisher takes the feed down.
 */
async function writePodcastMetadata(folder: string, request: DownloadRequest): Promise<void> {
    const key = path.resolve(folder).toLowerCase();
    if (podcastMetaWritten.has(key)) return;
    podcastMetaWritten.add(key);
    const cached = request.feedUrl ? feedCache.get(request.feedUrl)?.feed as (Record<string, unknown> & { itunes?: Record<string, unknown> }) | undefined : undefined;
    const meta = {
        schema: 'feeddownloader.podcast/1',
        title: request.podcastTitle,
        feedUrl: request.feedUrl ?? null,
        link: (cached?.link as string | undefined) ?? null,
        description: (cached?.description as string | undefined) ?? null,
        author: (cached?.itunes?.author as string | undefined) ?? (cached?.creator as string | undefined) ?? null,
        language: (cached?.language as string | undefined) ?? null,
        copyright: (cached?.copyright as string | undefined) ?? null,
        categories: (cached?.itunes?.categories as string[] | undefined) ?? [],
        image: request.feedImageUrl ?? null,
        savedAt: new Date().toISOString(),
        savedBy: `Runtime FeedDownloader Pro ${app.getVersion()}`,
    };
    await fs.writeJSON(path.join(folder, 'podcast.json'), meta, { spaces: 2 }).catch(() => { });

    if (!request.feedImageUrl || !validateUrl(request.feedImageUrl).valid) return;
    const existing = (await fs.readdir(folder).catch(() => [] as string[])).find(n => /^cover\.(jpe?g|png|webp|gif)$/i.test(n));
    if (existing) return;
    try {
        const res = await axios.get(request.feedImageUrl, {
            responseType: 'arraybuffer',
            timeout: 15000,
            maxContentLength: 15 * 1024 * 1024,
            ...SAFE_AXIOS_CONFIG,
            headers: { 'User-Agent': USER_AGENT },
        });
        const type = String(res.headers['content-type'] ?? '').split(';')[0].toLowerCase();
        const ext = type === 'image/png' ? '.png' : type === 'image/webp' ? '.webp' : type === 'image/gif' ? '.gif' : '.jpg';
        if (!type.startsWith('image/') && type !== '') return;
        await fs.writeFile(path.join(folder, `cover${ext}`), Buffer.from(res.data));
    } catch {
        // a missing cover is not worth failing anything for
    }
}

/**
 * Accept one download into the queue. Used by START_DOWNLOAD (the renderer),
 * by automatic archiving after a refresh, by "resume interrupted downloads"
 * and by "retry failed" — every path goes through the same claims, naming,
 * persistence and post-processing.
 */
async function enqueueDownload(win: BrowserWindow, rawRequest: DownloadRequest): Promise<DownloadResult> {
    const request = cleanRequest(rawRequest);
    const { url, title, podcastTitle, guid, pubDate, feedImageUrl, episodeImageUrl, feedUrl } = request;

    const check = validateUrl(url);
    if (!check.valid) {
        throw new Error(check.error);
    }

    // S2: feeds without <guid> exist in the wild — fall back to the
    // enclosure URL so the download is still recorded in history/archive.
    const effectiveGuid = guid || url;

    // S3 / TOCTOU: reject a second copy of the same enclosure URL. The claim
    // MUST be taken synchronously — before the first `await` below — otherwise
    // two rapid calls both pass the check and register only afterwards (once
    // via `fs.ensureDir` yields), producing a duplicate `_2` file and a second
    // archive row. `inFlightUrls` closes that window; `queueItems` still covers
    // tasks already executing.
    if (inFlightUrls.has(url)) {
        return { status: 'duplicate' };
    }
    for (const item of queueItems.values()) {
        if (item.url === url) {
            return { status: 'duplicate' };
        }
    }
    inFlightUrls.add(url);

    // v1.6.0: a new run starts when work arrives on an idle queue.
    if (queueItems.size === 0) {
        run.total = 0; run.completed = 0; run.failed = 0; run.cancelled = 0;
    }

    const taskId = crypto.randomUUID();
    const controller = new AbortController();
    let targetFile = '';
    let batchGen = -1;
    const baseDir = effectiveBaseDir();
    try {
        // v1.6.0: the feed's declared MIME type decides when the URL has no extension.
        const ext = extractExtension(url, request.enclosureType);
        const namingTemplate = libraryService.getNamingTemplate();
        const resolvedName = applyTemplate(namingTemplate, {
            title,
            podcast: podcastTitle,
            pubDate: pubDate,
            season: request.meta?.season,
            episode: request.meta?.episode,
        });
        const baseSafePath = getSafePath(baseDir, podcastTitle, resolvedName, ext);
        const targetDir = path.dirname(baseSafePath);
        await fs.ensureDir(targetDir);

        // Collision check: avoid both a completed file already on disk AND a path
        // already claimed by another in-flight download (M1). existsSync keeps the
        // whole selection synchronous, so reserving the result is atomic — no two
        // concurrent handlers can settle on the same path.
        // v1.6.0: the sidecar counts too — "Ep.mp3" and "Ep.m4a" would otherwise
        // share (and overwrite) the same "Ep.json".
        targetFile = baseSafePath;
        {
            const { dir, name, ext: fileExt } = path.parse(baseSafePath);
            const taken = (candidate: string) => {
                const sidecar = sidecarOf(candidate);
                return isTargetReserved(candidate) || fs.existsSync(candidate) || isTargetReserved(sidecar) || fs.existsSync(sidecar);
            };
            let i = 1;
            while (taken(targetFile)) {
                i++;
                targetFile = path.join(dir, `${name}_${i}${fileExt}`);
            }
        }
        reserveTarget(targetFile);
        reserveTarget(sidecarOf(targetFile));
        taskTargets.set(taskId, { url, target: targetFile });

        batchGen = batchTracker.track();
        activeDownloads.set(taskId, controller);

        // Register task as pending in the queue
        queueItems.set(taskId, { taskId, title, podcastTitle, url, status: 'pending' });
        run.total++;
        // v1.6.0: survives a quit/crash until the task ends
        try { libraryService.addPendingDownload(request); } catch (e) { console.warn('[Queue] persist failed', e); }
        pushQueueUpdated(win);
    } catch (setupErr) {
        // Setup failed before the task was queued (e.g. ensureDir on an
        // unwritable path). Release every claim taken so far so nothing leaks.
        inFlightUrls.delete(url);
        if (targetFile) releaseTargetAndSidecar(targetFile);
        taskTargets.delete(taskId);
        activeDownloads.delete(taskId);
        queueItems.delete(taskId);
        throw setupErr;
    }

    const releaseClaims = () => {
        inFlightUrls.delete(url);               // S3: release the URL claim
        releaseTargetAndSidecar(targetFile);    // M1: release the claimed path (+ sidecar)
    };

    const runTask = async () => {
        // A paused task is "parked": it returns early but must NOT release its
        // claims nor settle the batch — the resume re-queues this same closure.
        let parkedForResume = false;
        // Last progress seen — echoed in the `paused` push so the renderer can
        // freeze the bar at the right spot.
        let lastLoaded = 0;
        let lastTotal = 0;
        // Resolve the controller at run time: a RESUME re-queues this closure
        // with a *fresh* AbortController under the same taskId.
        const signal = activeDownloads.get(taskId)?.signal;
        try {
            // Task was cancelled before its queue slot opened. Returning here
            // still runs the finally below (release claims + settle the batch),
            // which the old early-return-before-try did NOT — leaving the batch
            // counter and the AbortController leaked forever.
            if (cancelledTaskIds.has(taskId)) {
                cancelledTaskIds.delete(taskId);
                queueItems.delete(taskId);
                run.cancelled++;
                pushQueueUpdated(win);
                // M32: `cancelled` advances the batch counter in the renderer
                // without painting the row as completed/archived
                pushEvent(win, CH.DOWNLOAD_PROGRESS, { url, loaded: 0, total: 0, cancelled: true });
                return;
            }

            // Paused while still pending: don't run — park for RESUME.
            if (pausedTaskIds.has(taskId)) {
                pausedTaskIds.delete(taskId);
                parkedForResume = true;
                pausedTasks.set(taskId, { run: runTask, url, target: targetFile, batchGen });
                const pausedItem = queueItems.get(taskId);
                if (pausedItem) queueItems.set(taskId, { ...pausedItem, status: 'paused' });
                pushQueueUpdated(win);
                return;
            }

            // Mark as downloading
            const item = queueItems.get(taskId);
            if (item) {
                queueItems.set(taskId, { ...item, status: 'downloading' });
                pushQueueUpdated(win);
            }

            // v1.5.0 — configurable per-file cap, same infrastructure as the speed limit
            const maxSizeBytes = libraryService.getFileSizeLimitMB() * 1024 * 1024;
            // Throttle progress pushes to ~10 Hz: on a fast link the raw
            // per-chunk rate is hundreds of IPC messages/sec, each triggering a
            // store write in the renderer. The terminal states below are always
            // sent in full.
            let lastProgressTs = 0;
            // v1.6.0: one shared bandwidth budget (Settings → Download → speed
            // limit), and 5 attempts — a mass download meets more transient errors.
            await downloadService.downloadFile(url, targetFile, (loaded, total) => {
                lastLoaded = loaded;
                lastTotal = total;
                const now = Date.now();
                if (now - lastProgressTs >= 100 || (total > 0 && loaded >= total)) {
                    lastProgressTs = now;
                    pushEvent(win, CH.DOWNLOAD_PROGRESS, { url, loaded, total });
                }
            }, bandwidth, 5, signal, maxSizeBytes);

            // v1.6.0 — tags first, THEN the integrity data. The SHA-256 and the
            // size used to be taken before the ID3 writer rewrote the file, so
            // every tagged MP3 was later reported as corrupted.
            if (libraryService.getId3Enabled()) {
                await writeId3Tags(targetFile, {
                    title,
                    podcastTitle,
                    pubDate,
                    feedImageUrl,
                    episodeImageUrl, // v1.3.10 — cover episodio (priorità sul feed)
                }).catch((e) => console.error('[ID3] Failed to write tags:', e));
            }

            let fileSize: number | undefined;
            let checksum: string | undefined;
            let bitrate: number | undefined;
            let sampleRate: number | undefined;
            try {
                const stat = await fs.stat(targetFile);
                fileSize = stat.size;

                checksum = await sha256File(targetFile);

                const meta = await parseAudioMetadata(targetFile, { duration: false });
                bitrate = meta.format.bitrate ? Math.round(meta.format.bitrate / 1000) : undefined;
                sampleRate = meta.format.sampleRate ?? undefined;
            } catch (e) {
                console.warn('[Integrity] Failed to compute metadata:', e);
            }

            const downloadedAt = new Date().toISOString();
            // S7: single transaction — a crash between the two writes left
            // an episode marked downloaded but missing from the archive.
            libraryService.recordDownload({
                guid: effectiveGuid,
                title,
                podcastTitle,
                pubDate: pubDate || downloadedAt,
                downloadedAt,
                filename: path.basename(targetFile),
                fileSize,
                checksum,
                bitrate,
                sampleRate,
                feedUrl: feedUrl ?? '',
                baseDir,
            });

            if (libraryService.getSidecarEnabled()) {
                const sidecarPath = path.join(
                    path.dirname(targetFile),
                    path.parse(targetFile).name + '.json'
                );
                const m = request.meta ?? {};
                const sidecar = {
                    schema: 'feeddownloader.episode/1',
                    title,
                    podcast: podcastTitle,
                    feedUrl: feedUrl ?? null,
                    guid: effectiveGuid,
                    pubDate: pubDate || null,
                    link: m.link ?? null,
                    description: m.description ?? null,
                    duration: m.duration ?? null,
                    season: m.season ?? null,
                    episode: m.episode ?? null,
                    episodeType: m.episodeType ?? null,
                    enclosure: { url, type: request.enclosureType ?? null, length: m.enclosureLength ?? null },
                    file: { name: path.basename(targetFile), size: fileSize ?? null, sha256: checksum ?? null, bitrateKbps: bitrate ?? null, sampleRateHz: sampleRate ?? null },
                    downloadedAt,
                    savedBy: `Runtime FeedDownloader Pro ${app.getVersion()}`,
                    // pre-1.6 keys, kept for scripts that read them
                    sourceUrl: url,
                    filename: path.basename(targetFile),
                };
                await fs.writeJSON(sidecarPath, sidecar, { spaces: 2 }).catch(() => { });
                await writePodcastMetadata(path.dirname(targetFile), request);
            }

            // Success: remove from queue
            queueItems.delete(taskId);
            run.completed++;
            pushQueueUpdated(win);
            pushEvent(win, CH.DOWNLOAD_PROGRESS, { url, loaded: 100, total: 100, completed: true });
            const done: CompletedDownload = {
                url, guid: effectiveGuid, feedUrl, title, podcastTitle,
                filename: path.basename(targetFile), fileSize, completedAt: downloadedAt,
            };
            pushEvent(win, CH.DOWNLOAD_COMPLETED, done);
            pushEvent(win, CH.DOWNLOADS_UPDATED);
            pushEvent(win, CH.FEEDS_UPDATED, libraryService.getFeeds());
        } catch (error) {
            const errMsg = (error as Error).message || 'UNKNOWN';
            const isAborted = errMsg === 'DOWNLOAD_ABORTED';
            const isPaused = errMsg === 'DOWNLOAD_PAUSED';

            if (isShuttingDown) {
                // The app is quitting: whatever happened, the request stays in
                // pending_downloads and is offered again at the next start.
                parkedForResume = true;
            } else if (isPaused) {
                parkedForResume = true;
                if (signal?.reason === 'PAUSE_QUEUE' && !isQueuePaused()) {
                    // The queue-wide pause aborted this transfer, but a
                    // RESUME_QUEUE landed before the abort settled — rejoin
                    // the queue immediately instead of parking.
                    activeDownloads.set(taskId, new AbortController());
                    const item = queueItems.get(taskId);
                    if (item) queueItems.set(taskId, { ...item, status: 'pending' });
                    pushQueueUpdated(win);
                    queueService.add(runTask);
                } else {
                    pausedTasks.set(taskId, { run: runTask, url, target: targetFile, batchGen });
                    const item = queueItems.get(taskId);
                    if (item) queueItems.set(taskId, { ...item, status: 'paused' });
                    pushQueueUpdated(win);
                    pushEvent(win, CH.DOWNLOAD_PROGRESS, { url, loaded: lastLoaded, total: lastTotal, paused: true });
                }
            } else if (isAborted) {
                // Always emit the terminal `cancelled` event — for individual
                // cancels it advances the batch counter (M32), and for STOP_BATCH
                // it is what clears the row. The old `if (batchTracker.active)`
                // guard suppressed it after STOP_BATCH called reset(), leaving the
                // aborted rows stuck on a frozen spinner (the S11 race). IPC
                // ordering guarantees it arrives after the last progress tick.
                queueItems.delete(taskId);
                run.cancelled++;
                pushQueueUpdated(win);
                pushEvent(win, CH.DOWNLOAD_PROGRESS, { url, loaded: 0, total: 0, cancelled: true });
            } else {
                console.error('Download error:', error);
                queueItems.delete(taskId);
                run.failed++;
                // v1.5.0: snapshot the original request so the renderer can
                // offer "Retry failed" with the exact same parameters.
                const failure: FailedDownload = {
                    title, podcastTitle, errorCode: errMsg.split(':')[0],
                    request, failedAt: new Date().toISOString(),
                };
                batchTracker.recordFailure(batchGen, failure);
                pushQueueUpdated(win);
                pushEvent(win, CH.DOWNLOAD_FAILED, failure);
                const isNotFound = errMsg === 'EPISODE_NOT_FOUND';
                pushEvent(win, CH.DOWNLOAD_PROGRESS, {
                    url, loaded: 0, total: 0, error: true,
                    ...(isNotFound ? { notFound: true } : {})
                });
            }
        } finally {
            if (!parkedForResume) {
                activeDownloads.delete(taskId);
                // Release the URL/path claims only if this task still owns them — a
                // CANCEL of a pending task may have already released and handed them
                // to a re-download (same url/path, different taskId).
                const owned = taskTargets.get(taskId);
                if (owned && owned.target === targetFile) {
                    taskTargets.delete(taskId);
                    releaseClaims();
                    try { libraryService.removePendingDownload(url); } catch { /* DB closing */ }
                }
                const batchResult = batchTracker.complete(batchGen);
                if (batchResult !== null) {
                    emitBatchComplete(batchResult);
                }
            }
            // Parked (paused) tasks keep every claim and their batch slot:
            // the download is suspended, not finished. RESUME re-queues
            // runTask; CANCEL of a paused task settles everything instead.
        }
    };
    queueService.add(runTask);

    return { status: 'queued' };
}

/** v1.6.0 — pause the whole queue: pending tasks are held, active ones parked (keeping their .part). */
function pauseQueueInternal(win: BrowserWindow, reason: 'user' | 'offline'): void {
    queuePauseReason = reason;
    queueService.pause();
    // Pending tasks won't start while the queue is paused; mark them so the
    // UI shows them as paused (and so a queue resume knows to unmark them).
    for (const [taskId, item] of queueItems) {
        if (item.status === 'pending' && !cancelledTaskIds.has(taskId)) {
            pausedTaskIds.add(taskId);
            queueItems.set(taskId, { ...item, status: 'paused' });
        }
    }
    // Active transfers park themselves via the task's pause path.
    for (const [taskId, controller] of activeDownloads) {
        if (queueItems.get(taskId)?.status === 'downloading') controller.abort('PAUSE_QUEUE');
    }
    pushQueueUpdated(win);
}

function resumeQueueInternal(win: BrowserWindow): void {
    queuePauseReason = null;
    // Unmark items paused while pending — their original tasks are still queued.
    for (const [taskId, item] of queueItems) {
        if (item.status === 'paused' && pausedTaskIds.has(taskId)) {
            pausedTaskIds.delete(taskId);
            queueItems.set(taskId, { ...item, status: 'pending' });
        }
    }
    // Re-queue parked tasks with fresh controllers.
    for (const [taskId, parked] of [...pausedTasks]) {
        pausedTasks.delete(taskId);
        activeDownloads.set(taskId, new AbortController());
        const item = queueItems.get(taskId);
        if (item) queueItems.set(taskId, { ...item, status: 'pending' });
        queueService.add(parked.run);
    }
    queueService.start();
    pushQueueUpdated(win);
}

/**
 * L4: release resources on app shutdown — stop the background auto-refresh timer
 * and close the SQLite handle so WAL is flushed cleanly.
 */
export function cleanup() {
    isShuttingDown = true;
    clearAutoRefresh();
    if (onlineRefreshDebounce) { clearTimeout(onlineRefreshDebounce); onlineRefreshDebounce = null; }
    feedParser.dispose(); // M9: terminate the feed-parsing utility process
    if (libraryService) libraryService.close();
}

export function registerIpcHandlers(mainWindow: BrowserWindow) {
    // Expose the window to the module-scope batch-completion emitter (which can
    // also fire from BatchTracker's seal timer, outside any handler).
    mainWindowRef = mainWindow;

    // N1: assigned by the auto-update block below; invoked when the renderer
    // first reports its UI locale, so the boot update check (and any OS
    // notification it produces) is localized rather than racing on the 'en'
    // default. Safe no-op until then.
    let triggerInitialUpdateCheck = () => {};

    // ── Feed Parsing ──────────────────────────────────────
    ipcMain.handle(CH.PARSE_FEED, async (_, url: string, opts?: { force?: boolean }) => {
        const check = validateUrl(url);
        if (!check.valid) {
            throw new Error(check.error);
        }

        const now = Date.now();
        pruneFeedCaches(now); // B7: keep the in-memory maps bounded

        // return cached feed if fresh (avoids double HTTP round-trip on repeat clicks)
        // v1.6.0: `force` ("Aggiorna" on a feed) always goes to the network.
        const cached = feedCache.get(url);
        if (!opts?.force && cached && (now - cached.timestamp) < FEED_CACHE_TTL_MS) {
            return cached.feed;
        }

        // reject duplicate requests within cooldown window
        const lastCall = parseFeedLastCall.get(url);
        if (lastCall !== undefined && (now - lastCall) < PARSE_FEED_COOLDOWN_MS) {
            throw new Error('RATE_LIMITED');
        }
        parseFeedLastCall.set(url, now);

        const feed = await feedParser.parse(url); // M9: off the main thread
        if (feed === null) throw new Error('FAILED_TO_PARSE'); // unreachable: no conditional passed
        feedCache.set(url, { feed, timestamp: now });

        // Update lastUpdated + episodeCount in DB (fresh network fetch only, not cache hits)
        libraryService.touchFeed(url, new Date().toISOString());
        const parsedFeed = feed as ParsedFeed;
        // v1.6.0: opening a feed marks its episodes as "known" (below). For a feed
        // with automatic archiving that would silently swallow the new episodes
        // the next background refresh was supposed to download — queue them here.
        if (libraryService.hasFeed(url) && libraryService.getFeedAutoDownload(url)) {
            const known = libraryService.getKnownGuids(url);
            if (known.size > 0) {
                const fresh = (parsedFeed.episodes ?? []).filter(e => e.guid && !known.has(e.guid));
                if (fresh.length > 0) {
                    void enqueueEpisodes(mainWindow, { url, title: parsedFeed.title || libraryService.getFeeds().find(f => f.url === url)?.title || '', image: parsedFeed.image, itunes: parsedFeed.itunes }, fresh);
                }
            }
        }
        seedFeedBaseline(url, parsedFeed);
        syncFeedIdentity(url, parsedFeed);

        pushEvent(mainWindow, CH.FEEDS_UPDATED, libraryService.getFeeds());

        return feed;
    });

    /**
     * Update the per-feed counters from a fresh parse. F3-fix: seed known_episodes
     * so the background refresh has a baseline — without it, the first refresh
     * would report every existing episode as "new". M11: only for feeds actually
     * in the library (a URL parsed and never saved must not grow known_episodes).
     */
    function seedFeedBaseline(url: string, parsed: ParsedFeed): void {
        if (!libraryService.hasFeed(url)) return;
        const episodes = parsed.episodes ?? [];
        libraryService.updateEpisodeCount(url, episodes.length);
        libraryService.setFeedValidators(url, parsed.httpEtag, parsed.httpLastModified); // M6
        const guids = episodes.map(e => e.guid).filter((g): g is string => !!g);
        libraryService.markGuidsAsKnown(url, guids);
        libraryService.setCurrentEpisodeGuids(url, guids); // M10: badge source
    }

    // ── Feed Library ──────────────────────────────────────
    ipcMain.handle(CH.GET_FEEDS, async () => {
        return libraryService.getFeeds();
    });

    ipcMain.handle(CH.ADD_FEED, async (_, feed: FeedEntry) => {
        // Defense-in-depth: reject a feed whose URL fails the same SSRF/protocol
        // pre-check applied everywhere else, so a bad URL can't be persisted (and
        // later fetched) even if the renderer skipped its own validation.
        if (!feed || typeof feed.url !== 'string' || !validateUrl(feed.url).valid) {
            throw new Error('INVALID_FEED_URL');
        }
        libraryService.addFeed({ url: feed.url, title: String(feed.title ?? ''), image: feed.image, lastUpdated: feed.lastUpdated });
        // v1.6.0: the feed was parsed just before being added (the parse ran
        // while it wasn't in the library yet, so nothing was recorded). Seed its
        // counters and new-episode baseline now, from the cached parse — the
        // badge used to stay blank and episodes published before the first
        // refresh were never announced.
        const cached = feedCache.get(feed.url);
        if (cached) seedFeedBaseline(feed.url, cached.feed as ParsedFeed);
        const feeds = libraryService.getFeeds();
        pushEvent(mainWindow, CH.FEEDS_UPDATED, feeds);
        return feeds;
    });

    // v1.6.0 — automatic archiving of new episodes, per feed
    ipcMain.handle(CH.SET_FEED_AUTO_DOWNLOAD, async (_, url: string, enabled: boolean) => {
        if (typeof url !== 'string' || !libraryService.hasFeed(url)) return false;
        libraryService.setFeedAutoDownload(url, !!enabled);
        pushEvent(mainWindow, CH.FEEDS_UPDATED, libraryService.getFeeds());
        return true;
    });

    // v1.6.0 — archive figures + folder for the feed header
    ipcMain.handle(CH.GET_FEED_STATS, async (_, url: string, title: string): Promise<FeedStats> => {
        const rows = typeof url === 'string' ? libraryService.getArchiveByFeed(url, String(title ?? '')) : [];
        return {
            archivedCount: rows.length,
            archivedBytes: rows.reduce((n, r) => n + (r.fileSize ?? 0), 0),
            folder: path.join(rows[0]?.baseDir || effectiveBaseDir(), sanitize(String(title ?? ''))),
        };
    });

    // v1.6.0 — "Check all": the background refresh, on demand, with progress
    ipcMain.handle(CH.REFRESH_ALL, async () => runBackgroundRefresh(mainWindow, { manual: true }));

    ipcMain.handle(CH.REMOVE_FEED, async (_, url: string) => {
        libraryService.removeFeed(url);
        libraryService.removeKnownEpisodes(url); // F3-fix: clean up known_episodes
        feedCache.delete(url);          // B7: don't keep a removed feed cached
        parseFeedLastCall.delete(url);
        const feeds = libraryService.getFeeds();
        pushEvent(mainWindow, CH.FEEDS_UPDATED, feeds);
        return feeds;
    });

    // ── Download Status ──────────────────────────────────
    ipcMain.handle(CH.GET_DOWNLOADED_EPISODES, async (_, feedUrl?: string) => {
        return libraryService.getDownloadedEpisodes(feedUrl);
    });

    ipcMain.handle(CH.REMOVE_HISTORY_ITEM, async (_, payload: string | { guid: string; feedUrl?: string }) => {
        // Back-compat: older callers pass a bare guid string; the current renderer
        // passes { guid, feedUrl } so the delete is scoped to the right feed (S6).
        const guid = typeof payload === 'string' ? payload : String(payload?.guid ?? '');
        const feedUrl = typeof payload === 'object' && typeof payload?.feedUrl === 'string' ? payload.feedUrl : undefined;
        if (!guid) return false;
        libraryService.removeDownloadedEpisode(guid, feedUrl);
        pushEvent(mainWindow, CH.DOWNLOADS_UPDATED);
        return true;
    });

    ipcMain.handle(CH.RESET_HISTORY, async () => {
        libraryService.resetDownloadHistory();
        pushEvent(mainWindow, CH.DOWNLOADS_UPDATED);
        return true;
    });

    // ── Download Engine ──────────────────────────────────
    ipcMain.handle(CH.START_DOWNLOAD, async (_, request: DownloadRequest) => enqueueDownload(mainWindow, request));

    // ── Pause / Resume (v1.5.0) ───────────────────────────
    ipcMain.handle(CH.PAUSE_DOWNLOAD, async (_, taskId: string) => {
        const item = queueItems.get(taskId);
        if (!item) return false;
        if (item.status === 'downloading') {
            const controller = activeDownloads.get(taskId);
            if (!controller) return false;
            // The task's catch parks it and pushes the queue/progress updates.
            controller.abort('PAUSE');
            return true;
        }
        if (item.status === 'pending') {
            pausedTaskIds.add(taskId);
            queueItems.set(taskId, { ...item, status: 'paused' });
            pushQueueUpdated(mainWindow);
            return true;
        }
        return false; // already paused
    });

    ipcMain.handle(CH.RESUME_DOWNLOAD, async (_, taskId: string) => {
        // Paused before its queue slot opened: the original task is still in the
        // queue — just unmark it.
        if (pausedTaskIds.has(taskId)) {
            pausedTaskIds.delete(taskId);
            const item = queueItems.get(taskId);
            if (item) queueItems.set(taskId, { ...item, status: 'pending' });
            pushQueueUpdated(mainWindow);
            return true;
        }
        const parked = pausedTasks.get(taskId);
        if (!parked) return false;
        pausedTasks.delete(taskId);
        activeDownloads.set(taskId, new AbortController());
        const item = queueItems.get(taskId);
        if (item) queueItems.set(taskId, { ...item, status: 'pending' });
        pushQueueUpdated(mainWindow);
        queueService.add(parked.run);
        return true;
    });

    ipcMain.handle(CH.PAUSE_QUEUE, async () => {
        pauseQueueInternal(mainWindow, 'user');
        return true;
    });

    ipcMain.handle(CH.RESUME_QUEUE, async () => {
        resumeQueueInternal(mainWindow);
        return true;
    });

    ipcMain.handle(CH.GET_QUEUE_STATE, async () => queueState());

    // v1.6.0 — connectivity drives an automatic pause. A pause the user chose
    // is never lifted by the network coming back.
    ipcMain.handle(CH.NOTIFY_OFFLINE, async () => {
        if (queuePauseReason === null) pauseQueueInternal(mainWindow, 'offline');
        return true;
    });

    // ── Cancel Single Download ────────────────────────────
    ipcMain.handle(CH.CANCEL_DOWNLOAD, async (_, taskId: string) => {
        const item = queueItems.get(taskId);
        if (!item) return false;

        // Remove from queue immediately for instant UI update
        queueItems.delete(taskId);
        pushQueueUpdated(mainWindow);

        if (item.status === 'pending') {
            // Mark for skipping when the task's queue slot opens, and release its
            // URL/path claims NOW so an immediate re-download of the same episode
            // isn't rejected as a duplicate or forced into a spurious `_2` suffix.
            // The skipped task's finally will find the claim already gone and leave
            // it alone.
            cancelledTaskIds.add(taskId);
            const owned = taskTargets.get(taskId);
            if (owned) {
                taskTargets.delete(taskId);
                inFlightUrls.delete(owned.url);
                releaseTargetAndSidecar(owned.target);
                try { libraryService.removePendingDownload(owned.url); } catch { /* ignore */ }
            }
        } else if (item.status === 'downloading') {
            const controller = activeDownloads.get(taskId);
            if (controller) controller.abort();
        } else if (item.status === 'paused') {
            if (pausedTaskIds.has(taskId)) {
                // Paused while still pending: same as cancelling a pending task —
                // the queued closure will see cancelledTaskIds and settle the batch.
                pausedTaskIds.delete(taskId);
                cancelledTaskIds.add(taskId);
                const owned = taskTargets.get(taskId);
                if (owned) {
                    taskTargets.delete(taskId);
                    inFlightUrls.delete(owned.url);
                    releaseTargetAndSidecar(owned.target);
                    try { libraryService.removePendingDownload(owned.url); } catch { /* ignore */ }
                }
            } else {
                const parked = pausedTasks.get(taskId);
                if (parked) {
                    // Cancelling a parked download is destructive (M2): drop the
                    // partial, release the claims and settle its batch slot here —
                    // no task will ever run again for it.
                    pausedTasks.delete(taskId);
                    activeDownloads.delete(taskId);
                    void removePartials(parked.target);
                    const owned = taskTargets.get(taskId);
                    if (owned && owned.target === parked.target) {
                        taskTargets.delete(taskId);
                        inFlightUrls.delete(parked.url);
                        releaseTargetAndSidecar(parked.target);
                    }
                    try { libraryService.removePendingDownload(parked.url); } catch { /* ignore */ }
                    run.cancelled++;
                    pushQueueState(mainWindow);
                    pushEvent(mainWindow, CH.DOWNLOAD_PROGRESS, { url: parked.url, loaded: 0, total: 0, cancelled: true });
                    const batchResult = batchTracker.complete(parked.batchGen);
                    if (batchResult !== null) emitBatchComplete(batchResult);
                }
            }
        }
        return true;
    });

    ipcMain.handle(CH.STOP_BATCH, async () => {
        queueService.clear();
        // A stop while paused must leave the queue runnable for future batches.
        // v1.6.0: an offline pause is lifted too — there is nothing left to hold.
        queuePauseReason = null;
        queueService.start();
        for (const controller of activeDownloads.values()) {
            controller.abort();
        }
        activeDownloads.clear();
        // Parked (paused) tasks are dropped: a stop is destructive, so their
        // partial files go too — otherwise CLEAN_PART_FILES would find orphans.
        for (const parked of pausedTasks.values()) {
            void removePartials(parked.target);
        }
        pausedTasks.clear();
        pausedTaskIds.clear();
        batchTracker.reset();
        queueItems.clear();
        cancelledTaskIds.clear();
        // Pending tasks discarded by queueService.clear() never run their
        // finally block, so their reserved paths/URLs would leak and force spurious
        // `_2` suffixes (and false duplicates) on every future download.
        reservedTargets.clear();
        inFlightUrls.clear();
        taskTargets.clear();
        // v1.6.0: a stop empties the queue for good — nothing to resume at next boot.
        try { libraryService.clearPendingDownloads(); } catch { /* ignore */ }
        run.total = 0; run.completed = 0; run.failed = 0; run.cancelled = 0;
        pushQueueUpdated(mainWindow);
        return true;
    });

    // ── OPML / CSV ───────────────────────────────────────
    ipcMain.handle(CH.IMPORT_OPML, async () => {
        const result = await dialog.showOpenDialog(mainWindow, {
            properties: ['openFile'],
            filters: [{ name: 'OPML/XML', extensions: ['opml', 'xml'] }]
        });
        // Distinguish "user cancelled the dialog" from "imported 0 feeds" so the
        // renderer doesn't show an error toast for a plain cancel.
        if (result.canceled || result.filePaths.length === 0) return { count: 0, canceled: true };

        try {
            // L7: cap the OPML size before reading it into memory. A feed list is
            // small; anything past a few MB is malformed or hostile.
            const OPML_MAX_BYTES = 5 * 1024 * 1024;
            const { size } = await fs.stat(result.filePaths[0]);
            if (size > OPML_MAX_BYTES) {
                throw new Error('OPML_TOO_LARGE');
            }
            const content = await fs.readFile(result.filePaths[0], 'utf-8');
            const count = await libraryService.importOPML(content);
            pushEvent(mainWindow, CH.FEEDS_UPDATED, libraryService.getFeeds());
            // v1.6.0: fetch the new feeds right away — real titles, covers and
            // badges instead of the OPML text until the next 6-hour cycle.
            if (count > 0) void runBackgroundRefresh(mainWindow, { manual: true }).catch(() => { });
            return { count };
        } catch (error) {
            console.error('Import failed', error);
            throw error;
        }
    });

    ipcMain.handle(CH.EXPORT_OPML, async () => {
        const result = await dialog.showSaveDialog(mainWindow, {
            defaultPath: 'feeds.opml',
            filters: [{ name: 'OPML', extensions: ['opml'] }]
        });
        if (result.canceled || !result.filePath) return false;

        try {
            const content = libraryService.exportOPML();
            await fs.writeFile(result.filePath, content, 'utf-8');
            return true;
        } catch (error) {
            console.error('Export failed', error);
            throw error;
        }
    });

    ipcMain.handle(CH.EXPORT_ARCHIVE_CSV, async () => {
        const result = await dialog.showSaveDialog(mainWindow, {
            defaultPath: 'archive_report.csv',
            filters: [{ name: 'CSV', extensions: ['csv'] }]
        });
        if (result.canceled || !result.filePath) return false;

        try {
            const content = libraryService.exportArchiveCSV();
            await fs.writeFile(result.filePath, content, 'utf-8');
            return true;
        } catch (error) {
            console.error('Export CSV failed', error);
            throw error;
        }
    });

    // ── Folder / Path ────────────────────────────────────
    ipcMain.handle(CH.CHOOSE_FOLDER, async () => {
        const result = await dialog.showOpenDialog(mainWindow, {
            properties: ['openDirectory']
        });
        if (result.canceled) return null;
        return result.filePaths[0];
    });

    ipcMain.handle(CH.GET_DOWNLOAD_PATH, async () => {
        return libraryService.getDownloadPath();
    });

    ipcMain.handle(CH.SET_DOWNLOAD_PATH, async (_, downloadPath: string) => {
        // Defense-in-depth (L18): only accept a non-empty ABSOLUTE path. The
        // download folder is normally chosen via the native dialog; refusing
        // relative/garbage input stops a compromised renderer from repointing it
        // (and, through OPEN_FOLDER's "within base" check, widening that reach).
        if (typeof downloadPath !== 'string' || !downloadPath.trim() || !path.isAbsolute(downloadPath)) {
            return false;
        }
        libraryService.setDownloadPath(downloadPath);
        return true;
    });

    // ── Open folder in file manager ──────────────────────
    ipcMain.handle(CH.OPEN_FOLDER, async (_, dirPath: string) => {
        // M2: only ever open a real, existing directory — never an arbitrary file
        // path handed in from the renderer.
        if (!dirPath || typeof dirPath !== 'string') return false;
        const resolved = path.resolve(dirPath);

        // L18: constrain to the download folders (their only legitimate
        // argument). A compromised renderer can't coax the shell into opening an
        // arbitrary directory on disk. v1.6.0: every folder the archive uses
        // counts, not only the current one — older files may live elsewhere.
        if (!knownBaseDirs().some(base => isWithin(base, resolved))) return false;

        const stat = await fs.stat(resolved).catch(() => null);
        if (!stat || !stat.isDirectory()) return false;
        await shell.openPath(resolved);
        return true;
    });

    ipcMain.handle(CH.GET_EFFECTIVE_DOWNLOAD_PATH, async () => effectiveBaseDir());

    // ── Reveal an archived episode (v1.6.0) ──────────────
    // By identity (guid + feed), resolved through the folder it was written to.
    // The old SHOW_IN_FOLDER matched podcast + episode TITLE, which picked the
    // wrong file whenever two episodes shared a title, and recomputed paths
    // against the current folder only.
    ipcMain.handle(CH.SHOW_ARCHIVED_EPISODE, async (_, guid: string, feedUrl?: string): Promise<boolean> => {
        if (typeof guid !== 'string' || !guid) return false;
        const entry = libraryService.getArchiveEntry(guid, typeof feedUrl === 'string' ? feedUrl : undefined);
        if (!entry?.filename) return false;
        const { path: filePath, exists } = await resolveArchivedPath(entry);
        if (exists) {
            shell.showItemInFolder(filePath);
            return true;
        }
        // The file is gone: at least open its podcast folder, if that still exists.
        const dir = path.dirname(filePath);
        if (await fs.pathExists(dir)) { await shell.openPath(dir); }
        return false;
    });

    ipcMain.handle(CH.GET_ARCHIVE_ENTRY, async (_, guid: string, feedUrl?: string) => {
        if (typeof guid !== 'string' || !guid) return null;
        return libraryService.getArchiveEntry(guid, typeof feedUrl === 'string' ? feedUrl : undefined);
    });

    // ── Help ──────────────────────────────────────────────
    ipcMain.handle(CH.GET_HELP_CONTENT, async (_, lang: string) => {
        const langMap: { [key: string]: string } = {
            'it': 'README_MASTER.md',
            'en': 'README_EN.md',
        };

        const fileName = langMap[lang] || 'README_EN.md';

        let resourcePath;
        if (app.isPackaged) {
            resourcePath = path.join(process.resourcesPath, fileName);
        } else {
            resourcePath = path.join(app.getAppPath(), fileName);
        }

        try {
            if (await fs.pathExists(resourcePath)) {
                return await fs.readFile(resourcePath, 'utf-8');
            } else {
                const fallbackPath = app.isPackaged
                    ? path.join(process.resourcesPath, 'README_EN.md')
                    : path.join(app.getAppPath(), 'README_EN.md');

                if (await fs.pathExists(fallbackPath)) {
                    return await fs.readFile(fallbackPath, 'utf-8');
                }
                return "# Error\nHelp file not found.";
            }
        } catch (error) {
            console.error("Failed to read help file", error);
            return "# Error\nFailed to load help documentation.";
        }
    });

    // ── Changelog (in-app, v1.4.0) ────────────────────────
    ipcMain.handle(CH.GET_CHANGELOG, async (_, version?: string) => {
        // Only ever read a versioned changelog file by its exact name — never an
        // arbitrary path from the renderer. Default to the running version.
        const requested = (typeof version === 'string' && /^\d+\.\d+\.\d+$/.test(version))
            ? version
            : app.getVersion();
        const fileName = `${requested}.md`;
        const candidate = app.isPackaged
            ? path.join(process.resourcesPath, 'changelog', fileName)
            : path.join(app.getAppPath(), 'docs', 'changelog', fileName);
        try {
            if (await fs.pathExists(candidate)) {
                return await fs.readFile(candidate, 'utf-8');
            }
            return '';
        } catch (err) {
            console.error('[Changelog] read failed', err);
            return '';
        }
    });

    // ── "What's new" decision (v1.5.0, Titan pattern) ─────
    // Called once by the renderer after mount. Decides in the MAIN process
    // whether the changelog should auto-open (existing user, version changed),
    // then records the current version. Fixes the 1.3.x→1.4.x gap where the
    // renderer's localStorage had no previous version and stayed silent.
    ipcMain.handle(CH.CONSUME_WHATS_NEW, async () => {
        const current = app.getVersion();
        const previous = libraryService.getLastSeenVersion();
        const shouldShow = evaluateWhatsNew(previous, current, libraryService.isEmpty());
        libraryService.setLastSeenVersion(current);
        return { shouldShow, previousVersion: previous, currentVersion: current };
    });

    // ── Open PDF manual (B1) ──────────────────────────────
    // The full PDF manuals are versioned in the public repository next to their
    // Markdown sources (so PDF and source can't drift) and opened in the system
    // browser rather than bundled in the installer — same scheme as Titan. The
    // GitHub URL stays hidden behind the in-app button ("link occultato").
    // Until v1.5.0 these were served from `manuals/` on the release bridge repo,
    // which is being retired: see docs/PIANO-APERTURA.md.
    ipcMain.handle(CH.OPEN_MANUAL_PDF, async (_, lang: string): Promise<boolean> => {
        const base = 'https://github.com/Pitz72/FeedDownloader/raw/master/docs/user/';
        const paths: Record<string, string> = {
            it: 'manual-it/Manuale_FeedDownloader_Pro_Box.pdf',
            en: 'en-GB/FeedDownloader_Pro_Manual_en-GB.pdf',
        };
        const relative = paths[lang] || paths['en'];
        const encoded = relative.split('/').map(encodeURIComponent).join('/');
        try {
            await shell.openExternal(base + encoded);
            return true;
        } catch (e) {
            console.error('[Manual] open failed', e);
            return false;
        }
    });

    // ── Open a project link in the browser (v1.5.0) ───────
    // Deliberately not a generic "open this URL": the renderer passes a URL, but
    // only https on a closed list of project hosts is honoured. Anything else is
    // refused, so a compromised renderer can't turn this into a launcher.
    ipcMain.handle(CH.OPEN_EXTERNAL, async (_, rawUrl: unknown): Promise<boolean> => {
        const ALLOWED_HOSTS = new Set([
            'simonepizzi.runtimeradio.it',
            'runtimeradio.com',
            'www.paypal.com',
            'github.com',
        ]);
        if (typeof rawUrl !== 'string') return false;
        let parsed: URL;
        try {
            parsed = new URL(rawUrl);
        } catch {
            return false;
        }
        if (parsed.protocol !== 'https:' || !ALLOWED_HOSTS.has(parsed.hostname)) {
            console.warn('[OpenExternal] refused:', rawUrl);
            return false;
        }
        try {
            await shell.openExternal(parsed.toString());
            return true;
        } catch (e) {
            console.error('[OpenExternal] failed', e);
            return false;
        }
    });

    // ── Maintenance: clean orphaned .part temp files ──────
    ipcMain.handle(CH.CLEAN_PART_FILES, async (): Promise<number> => {
        // Refuse while downloads are in flight — a live .part would be deleted
        // out from under the writer. -1 signals "busy" to the renderer.
        if (activeDownloads.size > 0 || queueItems.size > 0) return -1;

        let removed = 0;
        const MAX_DEPTH = 4;
        const walk = async (dir: string, depth: number): Promise<void> => {
            let entries: import('fs').Dirent[];
            try {
                entries = await fs.readdir(dir, { withFileTypes: true });
            } catch {
                return;
            }
            for (const e of entries) {
                const full = path.join(dir, e.name);
                if (e.isDirectory()) {
                    if (depth < MAX_DEPTH) await walk(full, depth + 1);
                } else if (e.isFile() && (e.name.endsWith('.part') || e.name.endsWith('.part.meta'))) {
                    try { await fs.remove(full); removed++; } catch { /* skip locked/inaccessible */ }
                }
            }
        };
        // v1.6.0: every folder the archive uses, not only the current one.
        for (const baseDir of knownBaseDirs()) {
            if (await fs.pathExists(baseDir)) await walk(baseDir, 0);
        }
        return removed;
    });

    // ── Concurrency ───────────────────────────────────────
    ipcMain.handle(CH.GET_CONCURRENCY, async () => {
        return libraryService.getConcurrency();
    });

    ipcMain.handle(CH.SET_CONCURRENCY, async (_, n: number) => {
        // M16: clamp ONCE and give the same value to both — the raw value went
        // straight to PQueue, and concurrency 0 froze the queue for good.
        const clamped = Math.max(1, Math.min(Math.floor(Number(n) || 3), 10));
        libraryService.setConcurrency(clamped);
        queueService.setConcurrency(clamped);
        return true;
    });

    // ── Archive Stats ─────────────────────────────────────
    ipcMain.handle(CH.GET_ARCHIVE_STATS, async () => {
        return libraryService.getArchiveStats();
    });

    // ── Archive List (F1) ─────────────────────────────────
    ipcMain.handle(CH.GET_ARCHIVE, async () => {
        return libraryService.getArchive();
    });

    // ── Locale Sync ──────────────────────────────────────
    ipcMain.handle(CH.SET_LOCALE, async (_, locale: string) => {
        // "it-IT" → "it": notification texts are keyed by language only, and a
        // regional tag silently fell back to English.
        uiLocale = String(locale || 'en').split('-')[0].toLowerCase();
        // N1: the UI locale is now known — safe to fire the boot update check.
        triggerInitialUpdateCheck();
        return true;
    });

    // ── Naming Template ──────────────────────────────────────
    ipcMain.handle(CH.GET_NAMING_TEMPLATE, async () => {
        return libraryService.getNamingTemplate();
    });

    ipcMain.handle(CH.SET_NAMING_TEMPLATE, async (_, template: string) => {
        // L13-style guard: a template is a short line of text.
        if (typeof template !== 'string') return false;
        libraryService.setNamingTemplate(template.slice(0, 300));
        return true;
    });

    // ── Sidecar JSON ──────────────────────────────────────────
    ipcMain.handle(CH.GET_SIDECAR_ENABLED, async () => {
        return libraryService.getSidecarEnabled();
    });

    ipcMain.handle(CH.SET_SIDECAR_ENABLED, async (_, enabled: boolean) => {
        libraryService.setSidecarEnabled(enabled);
        return true;
    });

    // ── ID3 Tagging ────────────────────────────────────────
    ipcMain.handle(CH.GET_ID3_ENABLED, async () => {
        return libraryService.getId3Enabled();
    });

    ipcMain.handle(CH.SET_ID3_ENABLED, async (_, enabled: boolean) => {
        libraryService.setId3Enabled(enabled);
        return true;
    });

    // ── Speed Throttle ────────────────────────────────────────
    ipcMain.handle(CH.GET_SPEED_LIMIT, async () => {
        return libraryService.getSpeedLimit();
    });

    ipcMain.handle(CH.SET_SPEED_LIMIT, async (_, kbps: number) => {
        const clean = Number.isFinite(kbps) && kbps >= 0 ? Math.floor(kbps) : 0;
        libraryService.setSpeedLimit(clean);
        // v1.6.0: applies at once, to the budget every running download shares.
        bandwidth.setRate(clean * 1024);
        return true;
    });

    // ── File Size Cap (v1.5.0) ────────────────────────────────
    ipcMain.handle(CH.GET_FILE_SIZE_LIMIT, async () => {
        return libraryService.getFileSizeLimitMB();
    });

    ipcMain.handle(CH.SET_FILE_SIZE_LIMIT, async (_, mb: number) => {
        // L13-style guard: a malformed value must clamp, not poison the setting
        const clean = Number.isFinite(mb) && mb >= 0 ? Math.floor(mb) : 0;
        libraryService.setFileSizeLimitMB(clean);
        return true;
    });

    // ── Disk Space ────────────────────────────────────────────
    ipcMain.handle(CH.CHECK_DISK_SPACE, async (_, dirPath: string): Promise<DiskSpaceInfo | null> => {
        try {
            // Walk up to find the first existing ancestor directory
            let checkPath = dirPath || app.getPath('documents');
            while (checkPath && !(await fs.pathExists(checkPath))) {
                const parent = path.dirname(checkPath);
                if (parent === checkPath) break; // reached filesystem root
                checkPath = parent;
            }
            const stats = await statfs(checkPath);
            return {
                freeBytes: stats.bavail * stats.bsize,
                totalBytes: stats.blocks * stats.bsize,
            };
        } catch (e) {
            console.error('[DiskSpace] Failed to check disk space:', e);
            return null;
        }
    });

    // ── Health Check ────────────────────────────────────────
    // v1.6.0: two depths. "quick" checks presence and byte size (seconds even on
    // a big archive); "full" also re-hashes every file (hours on a large NAS
    // archive, which is why it now reports progress and can be stopped).
    let healthCheckCancel = false;
    let healthCheckRunning = false;

    ipcMain.handle(CH.CANCEL_HEALTH_CHECK, async () => {
        healthCheckCancel = true;
        return true;
    });

    ipcMain.handle(CH.RUN_HEALTH_CHECK, async (_, rawMode?: HealthCheckMode): Promise<HealthCheckResult> => {
        const mode: HealthCheckMode = rawMode === 'quick' ? 'quick' : 'full';
        if (healthCheckRunning) throw new Error('HEALTH_CHECK_BUSY');
        healthCheckRunning = true;
        healthCheckCancel = false;
        try {
            const entries = libraryService.getArchive();
            let present = 0;
            let missing = 0;
            let corrupted = 0;
            let totalSizeBytes = 0;
            let examined = 0;
            const missingFiles: HealthCheckFile[] = [];
            const corruptedFiles: HealthCheckFile[] = [];
            const describe = (e: ArchiveEntry, filename = e.filename ?? '(no filename)'): HealthCheckFile =>
                ({ guid: e.guid, feedUrl: e.feedUrl, title: e.title, podcast: e.podcastTitle, filename });

            let lastPush = 0;
            const progress = (force = false) => {
                const now = Date.now();
                if (force || now - lastPush > 150) {
                    lastPush = now;
                    pushEvent(mainWindow, CH.HEALTH_CHECK_PROGRESS, { done: examined, total: entries.length });
                }
            };
            progress(true);

            for (const entry of entries) {
                if (healthCheckCancel || isShuttingDown) break;
                examined++;
                if (!entry.filename) {
                    missing++;
                    missingFiles.push(describe(entry));
                    progress();
                    continue;
                }
                const { path: fullPath, exists } = await resolveArchivedPath(entry);
                if (!exists) {
                    missing++;
                    missingFiles.push(describe(entry));
                    progress();
                    continue;
                }
                try {
                    const stat = await fs.stat(fullPath);
                    present++;
                    totalSizeBytes += stat.size;
                    if (mode === 'quick') {
                        if (entry.fileSize != null && entry.fileSize !== stat.size) {
                            corrupted++;
                            corruptedFiles.push(describe(entry));
                        }
                    } else if (entry.checksum) {
                        // L10: the SHA-256 stored at download time is put to use.
                        // Re-hash the file on disk and compare — surfacing silent
                        // bit-rot or tampering. Legacy entries without a stored
                        // checksum are skipped.
                        const actual = await sha256File(fullPath).catch(() => null);
                        if (actual && actual !== entry.checksum) {
                            corrupted++;
                            corruptedFiles.push(describe(entry));
                        }
                    }
                } catch {
                    missing++;
                    missingFiles.push(describe(entry));
                }
                progress();
            }
            progress(true);

            return {
                mode,
                cancelled: healthCheckCancel || undefined,
                total: examined,
                present,
                missing,
                corrupted,
                totalSizeBytes,
                missingFiles,
                corruptedFiles,
            };
        } finally {
            healthCheckRunning = false;
            healthCheckCancel = false;
        }
    });

    // v1.6.0 — "this file is fine, make it the reference": store the size and
    // SHA-256 of what is on disk now. For files the user has checked (typically
    // MP3s tagged by v1.5.x and earlier, which hashed BEFORE writing ID3 tags).
    ipcMain.handle(CH.REBASELINE_ARCHIVE, async (_, items: unknown): Promise<number> => {
        if (!Array.isArray(items)) return 0;
        let done = 0;
        for (const it of items) {
            if (!it || typeof it !== 'object' || typeof (it as { guid?: unknown }).guid !== 'string') continue;
            const { guid, feedUrl } = it as { guid: string; feedUrl?: string };
            const entry = libraryService.getArchiveEntry(guid, typeof feedUrl === 'string' ? feedUrl : undefined);
            if (!entry?.filename) continue;
            const { path: filePath, exists } = await resolveArchivedPath(entry);
            if (!exists) continue;
            try {
                const stat = await fs.stat(filePath);
                const checksum = await sha256File(filePath);
                libraryService.rebaselineArchiveEntry(entry.guid, entry.feedUrl, stat.size, checksum);
                done++;
            } catch { /* unreadable — leave it reported */ }
        }
        if (done > 0) pushEvent(mainWindow, CH.DOWNLOADS_UPDATED);
        return done;
    });

    // ── Mark Missing as Not Downloaded ──────────────────────
    ipcMain.handle(CH.MARK_MISSING_NOT_DOWNLOADED, async (_, items: unknown): Promise<boolean> => {
        // M15: never hand an unvalidated payload to a DELETE. Accept either bare
        // guid strings (legacy) or { guid, feedUrl } objects (S6: feed-scoped).
        if (!Array.isArray(items)) return false;
        const cleaned = items.filter((it): it is string | { guid: string; feedUrl?: string } =>
            typeof it === 'string' || (!!it && typeof it === 'object' && typeof (it as { guid?: unknown }).guid === 'string'));
        libraryService.removeMissingFiles(cleaned);
        pushEvent(mainWindow, CH.DOWNLOADS_UPDATED);
        return true;
    });

    // ── Guided Archive Repair (v1.5.0) ──────────────────────
    // For archive entries whose file is missing, look for a file with the same
    // SHA-256 inside the podcast's folder (covers manual renames and naming-
    // template changes) and re-link the row to the found filename. Disk is only
    // read — the repair touches nothing but the DB row.
    ipcMain.handle(CH.REPAIR_ARCHIVE, async (): Promise<ArchiveRepairResult> => {
        const entries = libraryService.getArchive();

        // Filenames still claimed by entries whose file exists — a repair must
        // never re-link to a file another entry legitimately points to.
        const claimed = new Map<string, Set<string>>(); // podcast dir → lowercased names
        const missingWithChecksum: typeof entries = [];
        let unrepairable = 0;

        for (const entry of entries) {
            if (!entry.filename) { unrepairable++; continue; }
            const { path: filePath, exists } = await resolveArchivedPath(entry);
            if (exists) {
                const dir = path.dirname(filePath);
                let set = claimed.get(dir);
                if (!set) { set = new Set(); claimed.set(dir, set); }
                set.add(entry.filename.toLowerCase());
            } else if (entry.checksum) {
                missingWithChecksum.push(entry);
            } else {
                unrepairable++;
            }
        }

        // Per-folder listing and per-file hash caches: two missing entries in the
        // same folder must not re-read the directory or re-hash a candidate.
        const dirCache = new Map<string, { name: string; size: number }[]>();
        const hashCache = new Map<string, string | null>();
        const takenNow = new Set<string>(); // full paths matched in this run

        let scanned = 0;
        let repaired = 0;
        let unmatched = 0;
        const repairedFiles: { guid: string; title: string; podcast: string; oldFilename: string; newFilename: string }[] = [];

        for (const entry of missingWithChecksum) {
            // v1.6.0: look in the podcast folder under every base the entry may
            // live in (its own, then the current download folder).
            let found: string | null = null;
            let foundBase: string | null = null;
            for (const base of baseCandidates(entry)) {
                const dir = path.join(base, sanitize(entry.podcastTitle));
                let files = dirCache.get(dir);
                if (!files) {
                    files = [];
                    try {
                        for (const name of await fs.readdir(dir)) {
                            // temp/sidecar files can never be the audio we're looking for
                            if (name.endsWith('.part') || name.endsWith('.part.meta') || name.endsWith('.json')) continue;
                            try {
                                const st = await fs.stat(path.join(dir, name));
                                if (st.isFile()) files.push({ name, size: st.size });
                            } catch { /* unreadable candidate — skip */ }
                        }
                    } catch { /* folder itself is gone — no candidates */ }
                    dirCache.set(dir, files);
                }

                const claimedSet = claimed.get(dir);
                // Size is a cheap pre-filter: a SHA-256 match implies an identical
                // byte count, so when the size is known only equal-sized files
                // need hashing. Legacy entries without fileSize hash everything.
                const candidates = files.filter(f =>
                    !claimedSet?.has(f.name.toLowerCase()) &&
                    !takenNow.has(path.join(dir, f.name)) &&
                    (entry.fileSize == null || f.size === entry.fileSize));

                for (const cand of candidates) {
                    const full = path.join(dir, cand.name);
                    let hash = hashCache.get(full);
                    if (hash === undefined) {
                        scanned++;
                        hash = await sha256File(full).catch(() => null);
                        hashCache.set(full, hash);
                    }
                    if (hash && hash === entry.checksum) { found = cand.name; foundBase = base; break; }
                }
                if (found) break;
            }

            if (found && foundBase) {
                libraryService.updateArchiveFilename(entry.guid, entry.feedUrl, found);
                if (!entry.baseDir || path.resolve(entry.baseDir) !== path.resolve(foundBase)) {
                    libraryService.setArchiveBaseDir([{ guid: entry.guid, feedUrl: entry.feedUrl }], foundBase);
                }
                takenNow.add(path.join(foundBase, sanitize(entry.podcastTitle), found));
                repaired++;
                repairedFiles.push({ guid: entry.guid, title: entry.title, podcast: entry.podcastTitle, oldFilename: entry.filename ?? '', newFilename: found });
            } else {
                unmatched++;
            }
        }

        if (repaired > 0) pushEvent(mainWindow, CH.DOWNLOADS_UPDATED);
        return { scanned, repaired, repairedFiles, unmatched, unrepairable };
    });

    // ── Network Path Validation ──────────────────────────────
    ipcMain.handle(CH.VALIDATE_PATH, async (_, dirPath: string): Promise<PathValidationResult> => {
        return validateNetworkPath(dirPath);
    });

    // ── Auto-Update ───────────────────────────────────────────
    {
        const pushUpdateStatus = (status: UpdateStatus) => pushEvent(mainWindow, CH.UPDATE_STATUS, status);

        // Proactive OS notification — the in-app status only shows inside Settings,
        // so notify the user when an update is found and when it's ready to install.
        const notifyUpdate = (kind: 'available' | 'ready', version?: string) => {
            if (!Notification.isSupported()) return;
            const bodies: Record<'available' | 'ready', Record<string, string>> = {
                available: {
                    // v1.5.0: nothing downloads without consent — point at the in-app banner
                    en: `Version ${version} is available — open the app and press Download to get it.`,
                    it: `La versione ${version} è disponibile — apri l'app e premi Scarica per ottenerla.`,
                },
                ready: {
                    en: 'Update ready. Restart the app from Settings to install it.',
                    it: "Aggiornamento pronto. Riavvia l'app dalle Impostazioni per installarlo.",
                },
            };
            const body = bodies[kind][uiLocale] ?? bodies[kind]['en'];
            new Notification({
                title: 'Runtime FeedDownloader Pro',
                body,
                icon: path.join(process.env.VITE_PUBLIC || '', 'logo.png'),
            }).show();
        };

        // Set once an update is fully downloaded, so INSTALL_UPDATE can't quit and
        // relaunch into a half-downloaded (or absent) package if the renderer asks
        // out of turn.
        let updateDownloaded = false;

        // v1.5.0 (standard Titan): l'aggiornamento si scarica SOLO col consenso
        // dell'utente. Il check segnala la disponibilità; il download parte dal
        // pulsante "Scarica" del banner N1 (DOWNLOAD_UPDATE), l'installazione da
        // "Riavvia e installa" (INSTALL_UPDATE). Niente download né install
        // impliciti alla chiusura.
        autoUpdater.autoDownload = false;
        autoUpdater.autoInstallOnAppQuit = false;

        if (!autoUpdaterListenersBound) {
            autoUpdaterListenersBound = true;
            autoUpdater.on('checking-for-update', () => pushUpdateStatus({ type: 'checking' }));
            autoUpdater.on('update-available', (info: { version: string }) => {
                pushUpdateStatus({ type: 'available', version: info.version });
                notifyUpdate('available', info.version);
            });
            autoUpdater.on('update-not-available', () => pushUpdateStatus({ type: 'not-available' }));
            autoUpdater.on('download-progress', (progress: { percent: number }) => pushUpdateStatus({ type: 'downloading', percent: Math.round(progress.percent) }));
            autoUpdater.on('update-downloaded', () => {
                updateDownloaded = true;
                pushUpdateStatus({ type: 'ready' });
                notifyUpdate('ready');
            });
            autoUpdater.on('error', (err: Error) => pushUpdateStatus({ type: 'error', message: err.message }));
        }

        // N1: the boot check used to fire on a blind 3s timer — before the
        // renderer had synced its locale (so notifications could come out in
        // English) and with no retry if the network wasn't up yet. Now it's
        // triggered when SET_LOCALE arrives (localized), retries a few times on
        // failure, and still runs on a fallback timer if the locale never syncs.
        let initialCheckDone = false;
        const doInitialCheck = () => {
            if (initialCheckDone || !app.isPackaged) return;
            initialCheckDone = true;
            const attempt = (remaining: number) => {
                autoUpdater.checkForUpdates().catch((err) => {
                    console.error('[AutoUpdate] boot check failed:', err);
                    if (remaining > 0) setTimeout(() => attempt(remaining - 1), 15000);
                });
            };
            attempt(2); // up to 3 tries, 15s apart
        };
        triggerInitialUpdateCheck = doInitialCheck;
        // Fallback: if the renderer never sends SET_LOCALE (unexpected), still check.
        if (app.isPackaged) setTimeout(doInitialCheck, 12000);

        ipcMain.handle(CH.CHECK_FOR_UPDATE, async () => {
            if (!app.isPackaged) {
                pushUpdateStatus({ type: 'not-available' });
                return;
            }
            await autoUpdater.checkForUpdates();
        });

        // v1.5.0 — consent step: the user explicitly asks to download the update
        ipcMain.handle(CH.DOWNLOAD_UPDATE, async () => {
            if (!app.isPackaged) return false;
            try {
                await autoUpdater.downloadUpdate();
                return true;
            } catch (err) {
                pushUpdateStatus({ type: 'error', message: (err as Error).message });
                return false;
            }
        });

        ipcMain.handle(CH.INSTALL_UPDATE, () => {
            // Only install when a package has actually been downloaded — guards
            // against an out-of-order renderer call quitting into nothing.
            if (!updateDownloaded) return false;
            autoUpdater.quitAndInstall();
            return true;
        });
    }

    // ── N2: startup + periodic new-episode check ──────────────
    // Seed a sensible default the first time only: new installs poll every 6h
    // without the user having to enable it. An explicit "Off" (0) the user chose
    // in Settings is preserved (the key then exists).
    if (!libraryService.isAutoRefreshConfigured()) {
        libraryService.setAutoRefreshInterval(6);
    }

    // Check every feed once shortly after launch, then on the recurring interval.
    // Deferred so the window, network stack and DB have settled first; the first
    // refresh seeds known_episodes silently, so no false "new episode" flood.
    setTimeout(() => {
        runBackgroundRefresh(mainWindow).catch(err => console.error('[StartupRefresh]', err));
    }, 8000);

    // Reconcile the archive against the filesystem a bit later, off the refresh path.
    setTimeout(() => {
        reconcileArchive().catch(err => console.error('[Reconcile]', err));
    }, 15000);

    startAutoRefreshTimer(mainWindow, libraryService.getAutoRefreshInterval());

    // Re-check when the renderer reports it regained connectivity (debounced so a
    // flapping connection can't trigger a storm of refreshes).
    ipcMain.handle(CH.NOTIFY_ONLINE, async () => {
        // v1.6.0: lift the automatic offline pause (never a pause the user chose).
        if (queuePauseReason === 'offline') resumeQueueInternal(mainWindow);
        if (onlineRefreshDebounce) clearTimeout(onlineRefreshDebounce);
        onlineRefreshDebounce = setTimeout(() => {
            onlineRefreshDebounce = null;
            runBackgroundRefresh(mainWindow).catch(err => console.error('[OnlineRefresh]', err));
        }, 5000);
        return true;
    });

    // ── M3U Playlist Export ──────────────────────────────────
    ipcMain.handle(CH.EXPORT_M3U, async (_, podcastTitle: string): Promise<boolean | null> => {
        const entries = libraryService.getArchiveByPodcast(podcastTitle).filter(e => e.filename);
        if (entries.length === 0) return false;

        const result = await dialog.showSaveDialog(mainWindow, {
            defaultPath: `${sanitize(podcastTitle)}.m3u`,
            filters: [{ name: 'M3U Playlist', extensions: ['m3u'] }]
        });
        if (result.canceled || !result.filePath) return null;

        let content = '#EXTM3U\n';
        for (const entry of entries) {
            // v1.6.0: the file's real location (its own folder first)
            const { path: filePath } = await resolveArchivedPath(entry);
            // L12: feed titles are untrusted — a newline would inject M3U lines
            const safeTitle = entry.title.replace(/[\r\n]+/g, ' ');
            content += `#EXTINF:-1,${safeTitle}\n${filePath}\n`;
        }

        await fs.writeFile(result.filePath, content, 'utf-8');
        return true;
    });

    // ── Auto-Refresh (F3) ────────────────────────────────────
    ipcMain.handle(CH.GET_AUTO_REFRESH_INTERVAL, async () => {
        return libraryService.getAutoRefreshInterval();
    });

    ipcMain.handle(CH.SET_AUTO_REFRESH_INTERVAL, async (_, hours: number) => {
        libraryService.setAutoRefreshInterval(hours);
        // L11: use the persisted (whitelisted) value — a raw out-of-set value
        // would run a timer this session that silently dies on restart
        startAutoRefreshTimer(mainWindow, libraryService.getAutoRefreshInterval());
        return true;
    });

    // ── Archive Migration ────────────────────────────────────
    ipcMain.handle(CH.MIGRATE_ARCHIVE, async (_, newPath: string): Promise<MigrationResult> => {
        // v1.6.0: the default folder can be migrated too (it used to refuse
        // with "no path set" until a folder had been chosen explicitly).
        const currentPath = effectiveBaseDir();

        if (typeof newPath !== 'string' || !path.isAbsolute(newPath)) {
            return { moved: 0, errors: 0, newPath: newPath || '', pathChanged: false };
        }
        if (currentPath === newPath) {
            return { moved: 0, errors: 0, newPath, pathChanged: false };
        }

        // Refuse while downloads are in flight: their `.part` writers point into
        // the old folder, so moving it mid-write produces partial/failed moves.
        if (activeDownloads.size > 0 || queueItems.size > 0) {
            return { moved: 0, errors: 0, newPath, pathChanged: false, refused: 'busy' };
        }

        // Refuse when one path is nested inside the other: `fs.move` of
        // currentPath/folder into newPath (a descendant of currentPath, or the
        // reverse) fails with "cannot move into itself" and would leave the DB
        // pointing at a half-migrated tree.
        const resolvedCurrent = path.resolve(currentPath);
        const resolvedNew = path.resolve(newPath);
        const relToCurrent = path.relative(resolvedCurrent, resolvedNew);
        const relToNew = path.relative(resolvedNew, resolvedCurrent);
        const isNested = (rel: string) => rel === '' || (!rel.startsWith('..') && !path.isAbsolute(rel));
        if (isNested(relToCurrent) || isNested(relToNew)) {
            return { moved: 0, errors: 0, newPath, pathChanged: false, refused: 'nested-path' };
        }

        if (!(await fs.pathExists(currentPath))) {
            // Nothing on disk to move — just re-point.
            libraryService.setDownloadPath(newPath);
            return { moved: 0, errors: 0, newPath, pathChanged: true };
        }

        await fs.ensureDir(newPath);

        // Collect all podcast subdirectories
        const dirEntries = await fs.readdir(currentPath, { withFileTypes: true });
        const folders = dirEntries.filter(e => e.isDirectory()).map(e => e.name);
        const total = folders.length;

        let moved = 0;
        let errors = 0;
        // v1.6.0: archive rows follow the folder they moved with. A partial
        // migration used to re-point the whole library to the new folder,
        // turning every podcast that failed to move into "missing" files.
        const archive = libraryService.getArchive();

        for (let i = 0; i < folders.length; i++) {
            const folder = folders[i];
            pushEvent(mainWindow, CH.MIGRATION_PROGRESS, {
                moved: i,
                total,
                currentFolder: folder,
            } as MigrationProgress);

            try {
                await fs.move(
                    path.join(currentPath, folder),
                    path.join(newPath, folder),
                    { overwrite: false }
                );
                moved++;
                const rows = archive.filter(e =>
                    sanitize(e.podcastTitle) === folder &&
                    (!e.baseDir || path.resolve(e.baseDir) === path.resolve(currentPath)));
                if (rows.length > 0) libraryService.setArchiveBaseDir(rows, newPath);
            } catch (e) {
                console.error(`[Migration] Failed to move "${folder}":`, e);
                errors++;
            }
        }

        // Only re-point the download path if the move actually got somewhere.
        // If every folder failed (unwritable destination, disk full), leaving the
        // path on currentPath keeps the still-present files valid instead of
        // reporting the whole library as "missing".
        const pathChanged = moved > 0 || total === 0;
        if (pathChanged) {
            libraryService.setDownloadPath(newPath);
            pushEvent(mainWindow, CH.DOWNLOADS_UPDATED);
        }

        // Final progress signal
        pushEvent(mainWindow, CH.MIGRATION_PROGRESS, {
            moved: total,
            total,
            currentFolder: '',
        } as MigrationProgress);

        return { moved, errors, newPath, pathChanged };
    });

    // ── Interrupted downloads (v1.6.0) ───────────────────────
    // What was still queued when the app last closed. Offered, never resumed
    // behind the user's back: the network, the folder or the wish may have changed.
    const pendingNotQueued = (): DownloadRequest[] => bootPending.filter(r =>
        !inFlightUrls.has(r.url) && !libraryService.isDownloaded(r.guid || r.url, r.feedUrl ?? ''));

    ipcMain.handle(CH.GET_PENDING_DOWNLOADS, async (): Promise<PendingDownloads> => {
        const list = pendingNotQueued();
        return { count: list.length, podcasts: [...new Set(list.map(r => r.podcastTitle).filter(Boolean))] };
    });

    ipcMain.handle(CH.RESUME_PENDING_DOWNLOADS, async (): Promise<number> => {
        const list = pendingNotQueued();
        bootPending = [];
        let queued = 0;
        for (const request of list) {
            try {
                if ((await enqueueDownload(mainWindow, request)).status === 'queued') queued++;
            } catch (e) {
                console.warn('[Pending] could not resume', request.url, (e as Error).message);
                try { libraryService.removePendingDownload(request.url); } catch { /* ignore */ }
            }
        }
        return queued;
    });

    ipcMain.handle(CH.DISCARD_PENDING_DOWNLOADS, async (): Promise<boolean> => {
        for (const r of bootPending) {
            if (!inFlightUrls.has(r.url)) {
                try { libraryService.removePendingDownload(r.url); } catch { /* ignore */ }
            }
        }
        bootPending = [];
        return true;
    });

    // ── Accessibility (v1.6.0, Titan standard) ───────────────
    // Interface zoom lives in the main process (Chromium zoom factor) and is
    // persisted; Ctrl + / Ctrl − / Ctrl 0 step through the same values as the
    // selector in Settings. There is no application menu in packaged builds,
    // so the shortcuts are handled here.
    const ZOOM_STEPS = [0.8, 0.9, 1, 1.1, 1.25, 1.4, 1.6, 1.8];
    const applyZoom = (zoom: number) => {
        if (!mainWindow.isDestroyed()) mainWindow.webContents.setZoomFactor(zoom);
    };
    const setZoom = (zoom: number): number => {
        const clean = ZOOM_STEPS.reduce((best, z) => Math.abs(z - zoom) < Math.abs(best - zoom) ? z : best, 1);
        libraryService.setUiZoom(clean);
        applyZoom(clean);
        pushEvent(mainWindow, CH.UI_ZOOM_CHANGED, clean);
        return clean;
    };
    mainWindow.webContents.on('did-finish-load', () => applyZoom(libraryService.getUiZoom()));
    mainWindow.webContents.on('before-input-event', (event, input) => {
        if (input.type !== 'keyDown' || !(input.control || input.meta) || input.alt) return;
        const current = libraryService.getUiZoom();
        const at = ZOOM_STEPS.indexOf(current);
        const i = at === -1 ? ZOOM_STEPS.indexOf(1) : at;
        if (input.key === '+' || input.key === '=' || input.code === 'NumpadAdd') {
            event.preventDefault();
            setZoom(ZOOM_STEPS[Math.min(ZOOM_STEPS.length - 1, i + 1)]);
        } else if (input.key === '-' || input.code === 'NumpadSubtract') {
            event.preventDefault();
            setZoom(ZOOM_STEPS[Math.max(0, i - 1)]);
        } else if (input.key === '0' || input.code === 'Numpad0') {
            event.preventDefault();
            setZoom(1);
        }
    });
    ipcMain.handle(CH.GET_UI_ZOOM, async () => libraryService.getUiZoom());
    ipcMain.handle(CH.SET_UI_ZOOM, async (_, zoom: number) => setZoom(Number(zoom) || 1));
    ipcMain.handle(CH.GET_REDUCE_MOTION, async () => libraryService.getReduceMotion());
    ipcMain.handle(CH.SET_REDUCE_MOTION, async (_, enabled: boolean) => {
        libraryService.setReduceMotion(!!enabled);
        return true;
    });
}
