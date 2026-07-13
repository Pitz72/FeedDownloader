import { ipcMain, dialog, Notification, BrowserWindow, app, shell } from 'electron';
import crypto from 'crypto';
import { FeedService } from './services/FeedService';
import { FeedParserPool } from './services/FeedParserPool';
import { LibraryService } from './services/LibraryService';
import { fileURLToPath } from 'node:url';
import { DownloadService } from './services/DownloadService';
import { QueueService } from './services/QueueService';
import { BatchTracker } from './services/BatchTracker';
import { getSafePath } from './utils/getSafePath';
import { writeId3Tags } from './utils/writeId3Tags';
import { extractExtension } from './utils/extractExtension';
import { applyTemplate } from './utils/applyTemplate';
import { validateUrl } from './utils/validateUrl';
import { validateNetworkPath } from './utils/validateNetworkPath';
import { autoUpdater } from 'electron-updater';
import { IPC_CHANNELS as CH } from '../shared/types';
import type { FeedEntry, DownloadRequest, HealthCheckResult, DiskSpaceInfo, MigrationResult, MigrationProgress, PathValidationResult, UpdateStatus, QueueItem } from '../shared/types';
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
    return { recovered: libraryService.wasRecovered };
}

// Helper: send push event to renderer safely
function pushEvent(win: BrowserWindow, channel: string, data?: unknown) {
    if (win && !win.isDestroyed()) {
        win.webContents.send(channel, data);
    }
}

// Track batch for OS notification (race-condition-safe via debounce seal)
const batchTracker = new BatchTracker();

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

function pushQueueUpdated(win: BrowserWindow) {
    pushEvent(win, CH.QUEUE_UPDATED, Array.from(queueItems.values()));
}

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

async function runBackgroundRefresh(win: BrowserWindow) {
    if (isShuttingDown) return;
    const feeds = libraryService.getFeeds();
    if (feeds.length === 0) return;

    let totalNew = 0;
    const feedsWithNew: string[] = [];

    await Promise.allSettled(feeds.map(async (feedEntry) => {
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
            if (feed === null) {
                libraryService.touchFeed(feedEntry.url, new Date().toISOString());
                return; // 304 Not Modified
            }
            const parsed = (feed as unknown) as { episodes?: { guid?: string }[]; httpEtag?: string; httpLastModified?: string };
            const episodes = parsed.episodes ?? [];
            const currentGuids = episodes.map(e => e.guid).filter((g): g is string => !!g);

            feedCache.set(feedEntry.url, { feed, timestamp: Date.now() });
            libraryService.touchFeed(feedEntry.url, new Date().toISOString());
            libraryService.setFeedValidators(feedEntry.url, parsed.httpEtag, parsed.httpLastModified);
            libraryService.setCurrentEpisodeGuids(feedEntry.url, currentGuids); // M10: badge source

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
                    feedsWithNew.push(feedEntry.title);
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
        }
    }));

    if (isShuttingDown) return;

    pushEvent(win, CH.FEEDS_UPDATED, libraryService.getFeeds());

    if (totalNew > 0 && Notification.isSupported()) {
        const fp = feedsWithNew.length;
        const notifBodies: Record<string, string> = {
            en: `${totalNew} new episode${totalNew !== 1 ? 's' : ''} found in ${fp} podcast${fp !== 1 ? 's' : ''}.`,
            it: totalNew === 1
                ? `1 nuovo episodio trovato in ${fp} podcast.`
                : `${totalNew} nuovi episodi trovati in ${fp} podcast.`,
            fr: `${totalNew} nouvel${totalNew !== 1 ? 'les' : ''} épisode${totalNew !== 1 ? 's' : ''} trouvé${totalNew !== 1 ? 's' : ''} dans ${fp} podcast${fp !== 1 ? 's' : ''}.`,
            de: `${totalNew} neue Episode${totalNew !== 1 ? 'n' : ''} in ${fp} Feed${fp !== 1 ? 's' : ''} gefunden.`,
            es: `${totalNew} nuevo${totalNew !== 1 ? 's' : ''} episodio${totalNew !== 1 ? 's' : ''} encontrado${totalNew !== 1 ? 's' : ''} en ${fp} podcast${fp !== 1 ? 's' : ''}.`,
            pt: `${totalNew} novo${totalNew !== 1 ? 's' : ''} episódio${totalNew !== 1 ? 's' : ''} encontrado${totalNew !== 1 ? 's' : ''} em ${fp} podcast${fp !== 1 ? 's' : ''}.`,
            ru: `Найдено ${totalNew} нов${totalNew !== 1 ? 'ых эпизодов' : 'ый эпизод'} в ${fp} подкаст${fp !== 1 ? 'ах' : 'е'}.`,
            zh: `在 ${fp} 个播客中发现 ${totalNew} 个新节目。`,
        };
        new Notification({
            title: 'Runtime FeedDownloader Pro',
            body: notifBodies[uiLocale] ?? notifBodies['en'],
            icon: path.join(process.env.VITE_PUBLIC || '', 'logo.png'),
        }).show();
    }
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
        let baseDir = libraryService.getDownloadPath();
        if (!baseDir) baseDir = path.join(app.getPath('documents'), 'FeedDownloader', 'downloads');

        let missing = 0;
        for (const entry of entries) {
            if (isShuttingDown) return;
            if (!entry.filename) { missing++; continue; }
            const full = path.join(baseDir, sanitize(entry.podcastTitle), entry.filename);
            try { await fs.access(full); } catch { missing++; }
        }
        if (missing > 0 && Notification.isSupported()) {
            const bodies: Record<string, string> = {
                en: `${missing} archived file${missing !== 1 ? 's are' : ' is'} missing from disk. Open Settings → Health Check to review.`,
                it: missing === 1
                    ? '1 file archiviato risulta mancante su disco. Apri Impostazioni → Verifica Integrità per controllare.'
                    : `${missing} file archiviati risultano mancanti su disco. Apri Impostazioni → Verifica Integrità per controllare.`,
                fr: `${missing} fichier${missing !== 1 ? 's' : ''} archivé${missing !== 1 ? 's' : ''} manquant${missing !== 1 ? 's' : ''} sur le disque. Ouvrez Réglages → Vérification.`,
                de: `${missing} archivierte Datei${missing !== 1 ? 'en fehlen' : ' fehlt'} auf der Festplatte. Einstellungen → Integritätsprüfung öffnen.`,
                es: `${missing} archivo${missing !== 1 ? 's' : ''} archivado${missing !== 1 ? 's' : ''} no está${missing !== 1 ? 'n' : ''} en el disco. Abre Ajustes → Verificación.`,
                pt: `${missing} ficheiro${missing !== 1 ? 's' : ''} arquivado${missing !== 1 ? 's' : ''} em falta no disco. Abra Definições → Verificação.`,
                ru: `Отсутствует файлов на диске: ${missing}. Откройте Настройки → Проверка целостности.`,
                zh: `磁盘上缺少 ${missing} 个已归档文件。请打开 设置 → 完整性检查。`,
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

    // N1: assigned by the auto-update block below; invoked when the renderer
    // first reports its UI locale, so the boot update check (and any OS
    // notification it produces) is localized rather than racing on the 'en'
    // default. Safe no-op until then.
    let triggerInitialUpdateCheck = () => {};

    // ── Feed Parsing ──────────────────────────────────────
    ipcMain.handle(CH.PARSE_FEED, async (_, url: string) => {
        const check = validateUrl(url);
        if (!check.valid) {
            throw new Error(check.error);
        }

        const now = Date.now();
        pruneFeedCaches(now); // B7: keep the in-memory maps bounded

        // return cached feed if fresh (avoids double HTTP round-trip on repeat clicks)
        const cached = feedCache.get(url);
        if (cached && (now - cached.timestamp) < FEED_CACHE_TTL_MS) {
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
        const parsed = (feed as unknown) as { episodes?: { guid?: string }[]; httpEtag?: string; httpLastModified?: string };
        const episodes = parsed.episodes ?? [];
        libraryService.updateEpisodeCount(url, episodes.length);
        libraryService.setFeedValidators(url, parsed.httpEtag, parsed.httpLastModified); // M6

        // F3-fix: seed known_episodes on first parse so that the background refresh
        // has a baseline — without this, the first auto-refresh would report every
        // existing episode as "new".
        // M11: only for feeds actually in the library — parsing an URL the user
        // never saves must not grow known_episodes forever. Feeds added right
        // after this parse get their baseline from the refresh's silent seeding.
        if (libraryService.hasFeed(url)) {
            const guids = episodes.map(e => e.guid).filter((g): g is string => !!g);
            libraryService.markGuidsAsKnown(url, guids);
            libraryService.setCurrentEpisodeGuids(url, guids); // M10: badge source
        }

        pushEvent(mainWindow, CH.FEEDS_UPDATED, libraryService.getFeeds());

        return feed;
    });

    // ── Feed Library ──────────────────────────────────────
    ipcMain.handle(CH.GET_FEEDS, async () => {
        return libraryService.getFeeds();
    });

    ipcMain.handle(CH.ADD_FEED, async (_, feed: FeedEntry) => {
        libraryService.addFeed(feed);
        const feeds = libraryService.getFeeds();
        pushEvent(mainWindow, CH.FEEDS_UPDATED, feeds);
        return feeds;
    });

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

    ipcMain.handle(CH.REMOVE_HISTORY_ITEM, async (_, guid: string) => {
        libraryService.removeDownloadedEpisode(guid);
        pushEvent(mainWindow, CH.DOWNLOADS_UPDATED, libraryService.getDownloadedEpisodes());
        return true;
    });

    ipcMain.handle(CH.RESET_HISTORY, async () => {
        libraryService.resetDownloadHistory();
        pushEvent(mainWindow, CH.DOWNLOADS_UPDATED, []);
        return true;
    });

    // ── Download Engine ──────────────────────────────────
    ipcMain.handle(CH.START_DOWNLOAD, async (_, request: DownloadRequest) => {
        // L13: the renderer is trusted, but a malformed field must fail with a
        // clear error instead of a TypeError deep inside sanitize()/template.
        const url = String(request?.url ?? '');
        const title = String(request?.title ?? '');
        const podcastTitle = String(request?.podcastTitle ?? '');
        const guid = typeof request?.guid === 'string' ? request.guid : '';
        const pubDate = typeof request?.pubDate === 'string' ? request.pubDate : undefined;
        const feedImageUrl = typeof request?.feedImageUrl === 'string' ? request.feedImageUrl : undefined;
        const episodeImageUrl = typeof request?.episodeImageUrl === 'string' ? request.episodeImageUrl : undefined;
        const feedUrl = typeof request?.feedUrl === 'string' ? request.feedUrl : undefined;

        const check = validateUrl(url);
        if (!check.valid) {
            throw new Error(check.error);
        }

        // S2: feeds without <guid> exist in the wild — fall back to the
        // enclosure URL so the download is still recorded in history/archive.
        const effectiveGuid = guid || url;

        // S3: the same episode queued twice (double click, overlapping batches)
        // would produce a duplicate file with a `_2` suffix and a second archive
        // row. One in-flight task per enclosure URL.
        for (const item of queueItems.values()) {
            if (item.url === url) {
                return { status: 'duplicate' };
            }
        }

        let baseDir = libraryService.getDownloadPath();
        if (!baseDir) {
            baseDir = path.join(app.getPath('documents'), 'FeedDownloader', 'downloads');
        }

        const ext = extractExtension(url);
        const namingTemplate = libraryService.getNamingTemplate();
        const resolvedName = applyTemplate(namingTemplate, {
            title,
            podcast: podcastTitle,
            pubDate: pubDate,
        });
        const baseSafePath = getSafePath(baseDir, podcastTitle, resolvedName, ext);
        const targetDir = path.dirname(baseSafePath);
        await fs.ensureDir(targetDir);

        // Collision check: avoid both a completed file already on disk AND a path
        // already claimed by another in-flight download (M1). existsSync keeps the
        // whole selection synchronous, so reserving the result is atomic — no two
        // concurrent handlers can settle on the same path.
        let targetFile = baseSafePath;
        {
            const { dir, name, ext: fileExt } = path.parse(baseSafePath);
            let i = 1;
            while (reservedTargets.has(targetFile) || fs.existsSync(targetFile)) {
                i++;
                targetFile = path.join(dir, `${name}_${i}${fileExt}`);
            }
        }
        reservedTargets.add(targetFile);

        const batchGen = batchTracker.track();

        const taskId = crypto.randomUUID();
        const controller = new AbortController();
        activeDownloads.set(taskId, controller);

        // Register task as pending in the queue
        queueItems.set(taskId, { taskId, title, podcastTitle, url, status: 'pending' });
        pushQueueUpdated(mainWindow);

        queueService.add(async () => {
            // Task was cancelled before its queue slot opened
            if (cancelledTaskIds.has(taskId)) {
                cancelledTaskIds.delete(taskId);
                queueItems.delete(taskId);
                reservedTargets.delete(targetFile); // M1: release the claimed path
                pushQueueUpdated(mainWindow);
                // M32: `cancelled` advances the batch counter in the renderer
                // without painting the row as completed/archived
                pushEvent(mainWindow, CH.DOWNLOAD_PROGRESS, { url, loaded: 0, total: 0, cancelled: true });
                return; // finally still runs → batchTracker.complete()
            }

            // Mark as downloading
            const item = queueItems.get(taskId);
            if (item) {
                queueItems.set(taskId, { ...item, status: 'downloading' });
                pushQueueUpdated(mainWindow);
            }

            try {
                const speedLimitKBps = libraryService.getSpeedLimit();
                await downloadService.downloadFile(url, targetFile, (loaded, total) => {
                    pushEvent(mainWindow, CH.DOWNLOAD_PROGRESS, { url, loaded, total });
                }, speedLimitKBps, 3, controller.signal);

                let fileSize: number | undefined;
                let checksum: string | undefined;
                let bitrate: number | undefined;
                let sampleRate: number | undefined;
                try {
                    const stat = await fs.stat(targetFile);
                    fileSize = stat.size;

                    const hash = crypto.createHash('sha256');
                    const fileStream = fs.createReadStream(targetFile);
                    await new Promise<void>((resolve, reject) => {
                        fileStream.on('data', (chunk) => hash.update(chunk as Buffer));
                        fileStream.on('end', resolve);
                        fileStream.on('error', reject);
                    });
                    checksum = hash.digest('hex');

                    const meta = await parseAudioMetadata(targetFile, { duration: false });
                    bitrate = meta.format.bitrate ? Math.round(meta.format.bitrate / 1000) : undefined;
                    sampleRate = meta.format.sampleRate ?? undefined;
                } catch (e) {
                    console.warn('[Integrity] Failed to compute metadata:', e);
                }

                // S7: single transaction — a crash between the two writes left
                // an episode marked downloaded but missing from the archive.
                libraryService.recordDownload({
                    guid: effectiveGuid,
                    title,
                    podcastTitle,
                    pubDate: pubDate || new Date().toISOString(),
                    downloadedAt: new Date().toISOString(),
                    filename: path.basename(targetFile),
                    fileSize,
                    checksum,
                    bitrate,
                    sampleRate,
                    feedUrl: feedUrl ?? '',
                });

                if (libraryService.getId3Enabled()) {
                    await writeId3Tags(targetFile, {
                        title,
                        podcastTitle,
                        pubDate,
                        feedImageUrl,
                        episodeImageUrl, // v1.3.10 — cover episodio (priorità sul feed)
                    }).catch((e) => console.error('[ID3] Failed to write tags:', e));
                }

                if (libraryService.getSidecarEnabled()) {
                    const sidecarPath = path.join(
                        path.dirname(targetFile),
                        path.parse(targetFile).name + '.json'
                    );
                    const sidecar = {
                        title,
                        podcast: podcastTitle,
                        guid: effectiveGuid,
                        pubDate: pubDate || null,
                        downloadedAt: new Date().toISOString(),
                        sourceUrl: url,
                        filename: path.basename(targetFile),
                    };
                    await fs.writeJSON(sidecarPath, sidecar, { spaces: 2 }).catch(() => { });
                }

                // Success: remove from queue
                queueItems.delete(taskId);
                pushQueueUpdated(mainWindow);
                pushEvent(mainWindow, CH.DOWNLOAD_PROGRESS, { url, loaded: 100, total: 100, completed: true });
                pushEvent(mainWindow, CH.DOWNLOADS_UPDATED, libraryService.getDownloadedEpisodes());
                pushEvent(mainWindow, CH.FEEDS_UPDATED, libraryService.getFeeds());
            } catch (error) {
                const errMsg = (error as Error).message || 'UNKNOWN';
                const isAborted = errMsg === 'DOWNLOAD_ABORTED';

                if (isAborted) {
                    // For individual cancels (not STOP_BATCH) trigger incrementBatch in renderer
                    if (batchTracker.active) {
                        pushEvent(mainWindow, CH.DOWNLOAD_PROGRESS, { url, loaded: 0, total: 0, cancelled: true }); // M32
                    }
                } else {
                    console.error('Download error:', error);
                    queueItems.delete(taskId);
                    batchTracker.recordFailure(batchGen, { title, podcastTitle, errorCode: errMsg });
                    pushQueueUpdated(mainWindow);
                    const isNotFound = errMsg === 'EPISODE_NOT_FOUND';
                    pushEvent(mainWindow, CH.DOWNLOAD_PROGRESS, {
                        url, loaded: 0, total: 0, error: true,
                        ...(isNotFound ? { notFound: true } : {})
                    });
                }
            } finally {
                activeDownloads.delete(taskId);
                reservedTargets.delete(targetFile); // M1: release the claimed path
                const batchResult = batchTracker.complete(batchGen);
                if (batchResult !== null) {
                    const finishedTotal = batchResult.total;
                    const failed = batchResult.failed;
                    const failedCount = failed.length;
                    const okCount = finishedTotal - failedCount;
                    if (Notification.isSupported()) {
                        const notificationBodies: Record<string, string> = {
                            en: failedCount > 0 ? `Download complete: ${okCount} downloaded, ${failedCount} failed.` : `Download complete: ${finishedTotal} files downloaded.`,
                            it: failedCount > 0 ? `Download completato: ${okCount} scaricati, ${failedCount} errori.` : `Download completato: ${finishedTotal} file scaricati.`,
                            fr: failedCount > 0 ? `Téléchargement terminé : ${okCount} téléchargés, ${failedCount} erreurs.` : `Téléchargement terminé : ${finishedTotal} fichiers téléchargés.`,
                            de: failedCount > 0 ? `Download abgeschlossen: ${okCount} geladen, ${failedCount} Fehler.` : `Download abgeschlossen: ${finishedTotal} Dateien heruntergeladen.`,
                            es: failedCount > 0 ? `Descarga completa: ${okCount} descargados, ${failedCount} errores.` : `Descarga completada: ${finishedTotal} archivos descargados.`,
                            pt: failedCount > 0 ? `Download concluído: ${okCount} descarregados, ${failedCount} erros.` : `Download concluído: ${finishedTotal} ficheiros descarregados.`,
                            ru: failedCount > 0 ? `Загрузка завершена: ${okCount} скачано, ${failedCount} ошибок.` : `Загрузка завершена: ${finishedTotal} файлов скачано.`,
                            zh: failedCount > 0 ? `下载完成：${okCount} 个成功，${failedCount} 个失败。` : `下载完成：已下载 ${finishedTotal} 个文件。`,
                        };
                        new Notification({
                            title: 'Runtime FeedDownloader Pro',
                            body: notificationBodies[uiLocale] ?? notificationBodies['en'],
                            icon: path.join(process.env.VITE_PUBLIC || '', 'logo.png'),
                        }).show();
                    }
                    pushEvent(mainWindow, CH.BATCH_COMPLETED, { total: finishedTotal, failed: [...failed] });
                }
            }
        });

        return { status: 'queued' };
    });

    // ── Cancel Single Download ────────────────────────────
    ipcMain.handle(CH.CANCEL_DOWNLOAD, async (_, taskId: string) => {
        const item = queueItems.get(taskId);
        if (!item) return false;

        // Remove from queue immediately for instant UI update
        queueItems.delete(taskId);
        pushQueueUpdated(mainWindow);

        if (item.status === 'pending') {
            // Mark for skipping when the task's queue slot opens
            cancelledTaskIds.add(taskId);
        } else if (item.status === 'downloading') {
            const controller = activeDownloads.get(taskId);
            if (controller) controller.abort();
        }
        return true;
    });

    ipcMain.handle(CH.STOP_BATCH, async () => {
        queueService.clear();
        for (const controller of activeDownloads.values()) {
            controller.abort();
        }
        activeDownloads.clear();
        batchTracker.reset();
        queueItems.clear();
        cancelledTaskIds.clear();
        // Pending tasks discarded by queueService.clear() never run their
        // finally block, so their reserved paths would leak and force spurious
        // `_2` suffixes on every future download of the same episodes.
        reservedTargets.clear();
        pushQueueUpdated(mainWindow);
        return true;
    });

    // ── OPML / CSV ───────────────────────────────────────
    ipcMain.handle(CH.IMPORT_OPML, async () => {
        const result = await dialog.showOpenDialog(mainWindow, {
            properties: ['openFile'],
            filters: [{ name: 'OPML/XML', extensions: ['opml', 'xml'] }]
        });
        if (result.canceled || result.filePaths.length === 0) return { count: 0 };

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
        libraryService.setDownloadPath(downloadPath);
        return true;
    });

    // ── Open folder in file manager ──────────────────────
    ipcMain.handle(CH.OPEN_FOLDER, async (_, dirPath: string) => {
        // M2: only ever open a real, existing directory — never an arbitrary file
        // path handed in from the renderer.
        if (!dirPath || typeof dirPath !== 'string') return;
        const resolved = path.resolve(dirPath);
        const stat = await fs.stat(resolved).catch(() => null);
        if (!stat || !stat.isDirectory()) return;
        await shell.openPath(resolved);
    });

    // ── Show in folder ───────────────────────────────────
    ipcMain.handle(CH.SHOW_IN_FOLDER, async (_, { podcastTitle, title, enclosureUrl, pubDate }: { podcastTitle: string; title: string; enclosureUrl?: string; pubDate?: string }) => {
        let baseDir = libraryService.getDownloadPath();
        if (!baseDir) {
            baseDir = path.join(app.getPath('documents'), 'FeedDownloader', 'downloads');
        }
        const ext = enclosureUrl ? extractExtension(enclosureUrl) : '.mp3';
        const namingTemplate = libraryService.getNamingTemplate();
        const resolvedName = applyTemplate(namingTemplate, { title, podcast: podcastTitle, pubDate });
        const safePath = getSafePath(baseDir, podcastTitle, resolvedName, ext);

        shell.showItemInFolder(safePath);
    });

    // ── Help ──────────────────────────────────────────────
    ipcMain.handle(CH.GET_HELP_CONTENT, async (_, lang: string) => {
        const langMap: { [key: string]: string } = {
            'it': 'README_MASTER.md',
            'en': 'README_EN.md',
            'fr': 'README_FR.md',
            'de': 'README_DE.md',
            'es': 'README_ES.md',
            'pt': 'README_PT.md',
            'ru': 'README_RU.md',
            'zh': 'README_CN.md'
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

    // ── Open PDF manual (B1) ──────────────────────────────
    // The full PDF manuals are hosted on the public releases repo (not bundled in
    // the installer) and opened in the system browser — same scheme as Titan. The
    // GitHub URL stays hidden behind the in-app button ("link occultato").
    ipcMain.handle(CH.OPEN_MANUAL_PDF, async (_, lang: string): Promise<boolean> => {
        const base = 'https://github.com/Ecosystem-Runtime/FeedDownloader-Releases/raw/main/manuals/';
        const files: Record<string, string> = {
            it: 'Manuale_FeedDownloader_Pro_Box.pdf',
            en: 'FeedDownloader_Pro_Manual_en-GB.pdf',
            fr: 'FeedDownloader_Pro_Manual_fr-FR.pdf',
            de: 'FeedDownloader_Pro_Manual_de-DE.pdf',
            es: 'FeedDownloader_Pro_Manual_es-ES.pdf',
            pt: 'FeedDownloader_Pro_Manual_pt-PT.pdf',
            ru: 'FeedDownloader_Pro_Manual_ru-RU.pdf',
            zh: 'FeedDownloader_Pro_Manual_zh-CN.pdf',
        };
        const file = files[lang] || files['en'];
        try {
            await shell.openExternal(base + encodeURIComponent(file));
            return true;
        } catch (e) {
            console.error('[Manual] open failed', e);
            return false;
        }
    });

    // ── Maintenance: clean orphaned .part temp files ──────
    ipcMain.handle(CH.CLEAN_PART_FILES, async (): Promise<number> => {
        // Refuse while downloads are in flight — a live .part would be deleted
        // out from under the writer. -1 signals "busy" to the renderer.
        if (activeDownloads.size > 0 || queueItems.size > 0) return -1;
        let baseDir = libraryService.getDownloadPath();
        if (!baseDir) baseDir = path.join(app.getPath('documents'), 'FeedDownloader', 'downloads');
        if (!(await fs.pathExists(baseDir))) return 0;

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
        await walk(baseDir, 0);
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

    ipcMain.handle(CH.OPEN_ARCHIVE_FILE, async (_, { podcastTitle, filename }: { podcastTitle: string; filename: string }) => {
        let baseDir = libraryService.getDownloadPath();
        if (!baseDir) baseDir = path.join(app.getPath('documents'), 'FeedDownloader', 'downloads');
        // M2: sanitize the filename too (not just the podcast title) and confirm the
        // resolved path stays inside baseDir — defends against `..` traversal in a
        // crafted archive entry.
        const rootDir = path.resolve(baseDir);
        const filePath = path.resolve(rootDir, sanitize(podcastTitle), sanitize(filename));
        if (filePath !== rootDir && !filePath.startsWith(rootDir + path.sep)) {
            return false;
        }
        shell.showItemInFolder(filePath);
        return true;
    });

    // ── Locale Sync ──────────────────────────────────────
    ipcMain.handle(CH.SET_LOCALE, async (_, locale: string) => {
        uiLocale = locale;
        // N1: the UI locale is now known — safe to fire the boot update check.
        triggerInitialUpdateCheck();
        return true;
    });

    // ── Naming Template ──────────────────────────────────────
    ipcMain.handle(CH.GET_NAMING_TEMPLATE, async () => {
        return libraryService.getNamingTemplate();
    });

    ipcMain.handle(CH.SET_NAMING_TEMPLATE, async (_, template: string) => {
        libraryService.setNamingTemplate(template);
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
        libraryService.setSpeedLimit(kbps);
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
    ipcMain.handle(CH.RUN_HEALTH_CHECK, async () => {
        const entries = libraryService.getArchive();
        let baseDir = libraryService.getDownloadPath();
        if (!baseDir) {
            baseDir = path.join(app.getPath('documents'), 'FeedDownloader', 'downloads');
        }

        let present = 0;
        let missing = 0;
        let totalSizeBytes = 0;
        const missingFiles: { guid: string; title: string; podcast: string; filename: string }[] = [];

        for (const entry of entries) {
            if (!entry.filename) {
                missing++;
                missingFiles.push({ guid: entry.guid, title: entry.title, podcast: entry.podcastTitle, filename: '(no filename)' });
                continue;
            }
            const fullPath = path.join(baseDir, sanitize(entry.podcastTitle), entry.filename);
            try {
                const stat = await fs.stat(fullPath);
                present++;
                totalSizeBytes += stat.size;
            } catch {
                missing++;
                missingFiles.push({ guid: entry.guid, title: entry.title, podcast: entry.podcastTitle, filename: entry.filename });
            }
        }

        const result: HealthCheckResult = {
            total: entries.length,
            present,
            missing,
            totalSizeBytes,
            missingFiles,
        };
        return result;
    });

    // ── Mark Missing as Not Downloaded ──────────────────────
    ipcMain.handle(CH.MARK_MISSING_NOT_DOWNLOADED, async (_, guids: unknown): Promise<boolean> => {
        // M15: never hand an unvalidated payload to a DELETE
        if (!Array.isArray(guids)) return false;
        libraryService.removeMissingFiles(guids.filter((g): g is string => typeof g === 'string'));
        pushEvent(mainWindow, CH.DOWNLOADS_UPDATED, libraryService.getDownloadedEpisodes());
        return true;
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
                    en: `Version ${version} is available — it's downloading in the background.`,
                    it: `La versione ${version} è disponibile — il download è in corso in background.`,
                    fr: `La version ${version} est disponible — téléchargement en arrière-plan.`,
                    de: `Version ${version} ist verfügbar — wird im Hintergrund heruntergeladen.`,
                    es: `La versión ${version} está disponible — se descarga en segundo plano.`,
                    pt: `A versão ${version} está disponível — a descarregar em segundo plano.`,
                    ru: `Доступна версия ${version} — загрузка в фоне.`,
                    zh: `版本 ${version} 可用 — 正在后台下载。`,
                },
                ready: {
                    en: 'Update ready. Restart the app from Settings to install it.',
                    it: "Aggiornamento pronto. Riavvia l'app dalle Impostazioni per installarlo.",
                    fr: "Mise à jour prête. Redémarrez l'app depuis les Réglages pour l'installer.",
                    de: 'Update bereit. Starten Sie die App in den Einstellungen neu, um es zu installieren.',
                    es: 'Actualización lista. Reinicia la app desde Ajustes para instalarla.',
                    pt: 'Atualização pronta. Reinicie a app nas Definições para a instalar.',
                    ru: 'Обновление готово. Перезапустите приложение в настройках для установки.',
                    zh: '更新已就绪。请在设置中重启应用以安装。',
                },
            };
            const body = bodies[kind][uiLocale] ?? bodies[kind]['en'];
            new Notification({
                title: 'Runtime FeedDownloader Pro',
                body,
                icon: path.join(process.env.VITE_PUBLIC || '', 'logo.png'),
            }).show();
        };

        autoUpdater.on('checking-for-update', () => pushUpdateStatus({ type: 'checking' }));
        autoUpdater.on('update-available', (info: { version: string }) => {
            pushUpdateStatus({ type: 'available', version: info.version });
            notifyUpdate('available', info.version);
        });
        autoUpdater.on('update-not-available', () => pushUpdateStatus({ type: 'not-available' }));
        autoUpdater.on('download-progress', (progress: { percent: number }) => pushUpdateStatus({ type: 'downloading', percent: Math.round(progress.percent) }));
        autoUpdater.on('update-downloaded', () => {
            pushUpdateStatus({ type: 'ready' });
            notifyUpdate('ready');
        });
        autoUpdater.on('error', (err: Error) => pushUpdateStatus({ type: 'error', message: err.message }));

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

        ipcMain.handle(CH.INSTALL_UPDATE, () => {
            autoUpdater.quitAndInstall();
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

        let baseDir = libraryService.getDownloadPath();
        if (!baseDir) baseDir = path.join(app.getPath('documents'), 'FeedDownloader', 'downloads');

        let content = '#EXTM3U\n';
        for (const entry of entries) {
            const filePath = path.join(baseDir, sanitize(entry.podcastTitle), entry.filename!);
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
        const currentPath = libraryService.getDownloadPath();

        if (!currentPath || !newPath) {
            return { moved: 0, errors: 0, newPath: newPath || '' };
        }
        if (currentPath === newPath) {
            return { moved: 0, errors: 0, newPath };
        }
        if (!(await fs.pathExists(currentPath))) {
            libraryService.setDownloadPath(newPath);
            return { moved: 0, errors: 0, newPath };
        }

        await fs.ensureDir(newPath);

        // Collect all podcast subdirectories
        const dirEntries = await fs.readdir(currentPath, { withFileTypes: true });
        const folders = dirEntries.filter(e => e.isDirectory()).map(e => e.name);
        const total = folders.length;

        let moved = 0;
        let errors = 0;

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
            } catch (e) {
                console.error(`[Migration] Failed to move "${folder}":`, e);
                errors++;
            }
        }

        // Update download path in DB
        libraryService.setDownloadPath(newPath);

        // Final progress signal
        pushEvent(mainWindow, CH.MIGRATION_PROGRESS, {
            moved: total,
            total,
            currentFolder: '',
        } as MigrationProgress);

        return { moved, errors, newPath };
    });
}
