import { ipcMain, dialog, Notification, BrowserWindow, app } from 'electron';
import { FeedService } from './services/FeedService';
import { LibraryService } from './services/LibraryService';
import { DownloadService } from './services/DownloadService';
import { QueueService } from './services/QueueService';
import { BatchTracker } from './services/BatchTracker';
import { getSafePath } from './utils/getSafePath';
import { extractExtension } from './utils/extractExtension';
import { validateUrl } from './utils/validateUrl';
import { IPC_CHANNELS as CH } from '../shared/types';
import type { FeedEntry, DownloadRequest } from '../shared/types';
import path from 'path';
import fs from 'fs-extra';

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

// v0.5.1 — Rate limiting for PARSE_FEED: max 1 request per URL every 3 seconds
const parseFeedLastCall = new Map<string, number>();
const PARSE_FEED_COOLDOWN_MS = 3000;

// UI locale synced from Renderer (v0.4.10 — OS notification localization)
let uiLocale = 'en';

export function registerIpcHandlers(mainWindow: BrowserWindow) {

    // ── Feed Parsing ──────────────────────────────────────
    ipcMain.handle(CH.PARSE_FEED, async (_, url: string) => {
        // v0.4.4 — validate URL before fetching
        const check = validateUrl(url);
        if (!check.valid) {
            throw new Error(check.error);
        }

        // v0.5.1 — rate limit: reject duplicate requests for the same URL within cooldown window
        const now = Date.now();
        const lastCall = parseFeedLastCall.get(url);
        if (lastCall !== undefined && (now - lastCall) < PARSE_FEED_COOLDOWN_MS) {
            throw new Error('RATE_LIMITED');
        }
        parseFeedLastCall.set(url, now);

        return await feedService.parseFeed(url);
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
    ipcMain.handle(CH.START_DOWNLOAD, async (_, { url, title, podcastTitle, guid, pubDate }: DownloadRequest) => {
        // v0.4.4 — validate download URL
        const check = validateUrl(url);
        if (!check.valid) {
            throw new Error(check.error);
        }

        let baseDir = libraryService.getDownloadPath();
        if (!baseDir) {
            baseDir = path.join(app.getPath('documents'), 'FeedDownloader', 'downloads');
        }

        // v0.4.3 — detect real extension from enclosure URL
        const ext = extractExtension(url);
        const targetFile = getSafePath(baseDir, podcastTitle, title, ext);
        const targetDir = path.dirname(targetFile);

        await fs.ensureDir(targetDir);

        // Track batch (v0.4.2 — atomic via BatchTracker)
        batchTracker.track();

        queueService.add(async () => {
            try {
                await downloadService.downloadFile(url, targetFile, (loaded, total) => {
                    pushEvent(mainWindow, CH.DOWNLOAD_PROGRESS, { url, loaded, total });
                });

                if (guid) {
                    libraryService.markAsDownloaded(guid);
                    libraryService.addArchiveEntry({
                        guid,
                        title,
                        podcastTitle,
                        pubDate: pubDate || new Date().toISOString(),
                        downloadedAt: new Date().toISOString(),
                        filename: path.basename(targetFile)
                    });
                }

                pushEvent(mainWindow, CH.DOWNLOAD_PROGRESS, { url, loaded: 100, total: 100, completed: true });
                pushEvent(mainWindow, CH.DOWNLOADS_UPDATED, libraryService.getDownloadedEpisodes());
            } catch (error) {
                console.error("Download error:", error);
                // v0.5.0 — propagate notFound flag for ghost episodes (404)
                const isNotFound = (error as Error).message === 'EPISODE_NOT_FOUND';
                pushEvent(mainWindow, CH.DOWNLOAD_PROGRESS, {
                    url, loaded: 0, total: 0, error: true,
                    ...(isNotFound ? { notFound: true } : {})
                });
            } finally {
                const finishedTotal = batchTracker.complete();
                if (finishedTotal !== null) {
                    // OS Notification — localized (v0.4.10)
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
    ipcMain.handle(CH.SHOW_IN_FOLDER, async (_, { podcastTitle, title, enclosureUrl }: { podcastTitle: string; title: string; enclosureUrl?: string }) => {
        let baseDir = libraryService.getDownloadPath();
        if (!baseDir) {
            baseDir = path.join(app.getPath('documents'), 'FeedDownloader', 'downloads');
        }
        // v0.4.3 — use real extension to find the correct file on disk
        const ext = enclosureUrl ? extractExtension(enclosureUrl) : '.mp3';
        const safePath = getSafePath(baseDir, podcastTitle, title, ext);

        const { shell } = await import('electron');
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

    // ── Concurrency (v0.4.0) ─────────────────────────────
    ipcMain.handle(CH.GET_CONCURRENCY, async () => {
        return libraryService.getConcurrency();
    });

    ipcMain.handle(CH.SET_CONCURRENCY, async (_, n: number) => {
        libraryService.setConcurrency(n);
        queueService.setConcurrency(n);
        return true;
    });

    // ── Archive Stats (v0.4.0) ───────────────────────────
    ipcMain.handle(CH.GET_ARCHIVE_STATS, async () => {
        return libraryService.getArchiveStats();
    });

    // ── Locale Sync (v0.4.10) ────────────────────────────
    ipcMain.handle(CH.SET_LOCALE, async (_, locale: string) => {
        uiLocale = locale;
        return true;
    });
}
