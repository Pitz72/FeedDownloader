import { ipcMain, dialog, Notification, BrowserWindow, app, shell } from 'electron';
import crypto from 'crypto';
import { FeedService } from './services/FeedService';
import { LibraryService } from './services/LibraryService';
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
import type { FeedEntry, DownloadRequest, HealthCheckResult, DiskSpaceInfo, MigrationResult, MigrationProgress, PathValidationResult, UpdateStatus } from '../shared/types';
import path from 'path';
import fs from 'fs-extra';
import { statfs } from 'fs/promises';
import { parseFile as parseAudioMetadata } from 'music-metadata';
import sanitize from 'sanitize-filename';

const feedService = new FeedService();
const libraryService = new LibraryService();
const downloadService = new DownloadService();
const initialConcurrency = libraryService.getConcurrency();
const queueService = new QueueService(initialConcurrency);

// Helper: send push event to renderer safely
function pushEvent(win: BrowserWindow, channel: string, data?: unknown) {
    if (win && !win.isDestroyed()) {
        win.webContents.send(channel, data);
    }
}

// Track batch for OS notification (v0.4.2 — race-condition-safe)
const batchTracker = new BatchTracker();

// Track AbortControllers for in-flight downloads — keyed by target file path
const activeDownloads = new Map<string, AbortController>();

// max 1 parse request per URL every 3 seconds
const parseFeedLastCall = new Map<string, number>();
const PARSE_FEED_COOLDOWN_MS = 3000;

// in-memory feed cache: avoids re-fetching on repeated clicks
const feedCache = new Map<string, { feed: unknown; timestamp: number }>();
const FEED_CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes

// UI locale synced from renderer for localized OS notifications
let uiLocale = 'en';

export function registerIpcHandlers(mainWindow: BrowserWindow) {

    // ── Feed Parsing ──────────────────────────────────────
    ipcMain.handle(CH.PARSE_FEED, async (_, url: string) => {
        const check = validateUrl(url);
        if (!check.valid) {
            throw new Error(check.error);
        }

        const now = Date.now();

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

        const feed = await feedService.parseFeed(url);
        feedCache.set(url, { feed, timestamp: now });
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
        const feeds = libraryService.getFeeds();
        pushEvent(mainWindow, CH.FEEDS_UPDATED, feeds);
        return feeds;
    });

    // ── Download Status ──────────────────────────────────
    ipcMain.handle(CH.GET_DOWNLOADED_EPISODES, async () => {
        return libraryService.getDownloadedEpisodes();
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
    ipcMain.handle(CH.START_DOWNLOAD, async (_, { url, title, podcastTitle, guid, pubDate, feedImageUrl }: DownloadRequest) => {
        const check = validateUrl(url);
        if (!check.valid) {
            throw new Error(check.error);
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

        // Collision check: if a completed file already exists, add _2, _3 suffix
        let targetFile = baseSafePath;
        if (await fs.pathExists(targetFile)) {
            const { dir, name, ext: fileExt } = path.parse(baseSafePath);
            let i = 2;
            do {
                targetFile = path.join(dir, `${name}_${i++}${fileExt}`);
            } while (await fs.pathExists(targetFile));
        }

        // Track batch (v0.4.2 — atomic via BatchTracker)
        batchTracker.track();

        const controller = new AbortController();
        activeDownloads.set(targetFile, controller);

        queueService.add(async () => {
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

                if (guid) {
                    libraryService.markAsDownloaded(guid);
                    libraryService.addArchiveEntry({
                        guid,
                        title,
                        podcastTitle,
                        pubDate: pubDate || new Date().toISOString(),
                        downloadedAt: new Date().toISOString(),
                        filename: path.basename(targetFile),
                        fileSize,
                        checksum,
                        bitrate,
                        sampleRate,
                    });
                }

                if (libraryService.getId3Enabled()) {
                    await writeId3Tags(targetFile, {
                        title,
                        podcastTitle,
                        pubDate,
                        feedImageUrl: feedImageUrl,
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
                        guid: guid || null,
                        pubDate: pubDate || null,
                        downloadedAt: new Date().toISOString(),
                        sourceUrl: url,
                        filename: path.basename(targetFile),
                    };
                    await fs.writeJSON(sidecarPath, sidecar, { spaces: 2 }).catch(() => { });
                }

                pushEvent(mainWindow, CH.DOWNLOAD_PROGRESS, { url, loaded: 100, total: 100, completed: true });
                pushEvent(mainWindow, CH.DOWNLOADS_UPDATED, libraryService.getDownloadedEpisodes());
            } catch (error) {
                const isAborted = (error as Error).message === 'DOWNLOAD_ABORTED';
                if (!isAborted) {
                    console.error("Download error:", error);
                    const isNotFound = (error as Error).message === 'EPISODE_NOT_FOUND';
                    pushEvent(mainWindow, CH.DOWNLOAD_PROGRESS, {
                        url, loaded: 0, total: 0, error: true,
                        ...(isNotFound ? { notFound: true } : {})
                    });
                }
            } finally {
                activeDownloads.delete(targetFile);
                const finishedTotal = batchTracker.complete();
                if (finishedTotal !== null) {
                    if (Notification.isSupported()) {
                        const notificationBodies: Record<string, string> = {
                            en: `Download complete: ${finishedTotal} files downloaded.`,
                            it: `Download completato: ${finishedTotal} file scaricati.`,
                            fr: `Téléchargement terminé : ${finishedTotal} fichiers téléchargés.`,
                            de: `Download abgeschlossen: ${finishedTotal} Dateien heruntergeladen.`,
                            es: `Descarga completada: ${finishedTotal} archivos descargados.`,
                            pt: `Download concluído: ${finishedTotal} ficheiros descarregados.`,
                            ru: `Загрузка завершена: ${finishedTotal} файлов скачано.`,
                            zh: `下载完成：已下载 ${finishedTotal} 个文件。`,
                        };
                        new Notification({
                            title: 'Runtime FeedDownloader Pro',
                            body: notificationBodies[uiLocale] ?? notificationBodies['en'],
                            icon: path.join(process.env.VITE_PUBLIC || '', 'logo.png'),
                        }).show();
                    }
                    pushEvent(mainWindow, CH.BATCH_COMPLETED, { total: finishedTotal });
                }
            }
        });

        return { status: 'queued' };
    });

    ipcMain.handle(CH.STOP_BATCH, async () => {
        queueService.clear();
        for (const controller of activeDownloads.values()) {
            controller.abort();
        }
        activeDownloads.clear();
        batchTracker.reset();
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

    // ── Concurrency ───────────────────────────────────────
    ipcMain.handle(CH.GET_CONCURRENCY, async () => {
        return libraryService.getConcurrency();
    });

    ipcMain.handle(CH.SET_CONCURRENCY, async (_, n: number) => {
        libraryService.setConcurrency(n);
        queueService.setConcurrency(n);
        return true;
    });

    // ── Archive Stats ─────────────────────────────────────
    ipcMain.handle(CH.GET_ARCHIVE_STATS, async () => {
        return libraryService.getArchiveStats();
    });

    // ── Locale Sync ──────────────────────────────────────
    ipcMain.handle(CH.SET_LOCALE, async (_, locale: string) => {
        uiLocale = locale;
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
    ipcMain.handle(CH.MARK_MISSING_NOT_DOWNLOADED, async (_, guids: string[]): Promise<boolean> => {
        libraryService.removeMissingFiles(guids);
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

        autoUpdater.on('checking-for-update', () => pushUpdateStatus({ type: 'checking' }));
        autoUpdater.on('update-available', (info: { version: string }) => pushUpdateStatus({ type: 'available', version: info.version }));
        autoUpdater.on('update-not-available', () => pushUpdateStatus({ type: 'not-available' }));
        autoUpdater.on('download-progress', (progress: { percent: number }) => pushUpdateStatus({ type: 'downloading', percent: Math.round(progress.percent) }));
        autoUpdater.on('update-downloaded', () => pushUpdateStatus({ type: 'ready' }));
        autoUpdater.on('error', (err: Error) => pushUpdateStatus({ type: 'error', message: err.message }));

        // Auto-check on startup (packaged only), with 3-second delay
        if (app.isPackaged) {
            setTimeout(() => {
                autoUpdater.checkForUpdates().catch(console.error);
            }, 3000);
        }

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
