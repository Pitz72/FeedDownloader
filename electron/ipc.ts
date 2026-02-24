import { ipcMain, dialog, Notification, BrowserWindow, app } from 'electron';
import { FeedService } from './services/FeedService';
import { LibraryService } from './services/LibraryService';
import { DownloadService } from './services/DownloadService';
import { QueueService } from './services/QueueService';
import path from 'path';
import sanitize from 'sanitize-filename';
import fs from 'fs-extra';

// IPC Channel constants — single source of truth
const CH = {
    PARSE_FEED: 'parse-feed',
    GET_FEEDS: 'get-feeds',
    ADD_FEED: 'add-feed',
    REMOVE_FEED: 'remove-feed',
    START_DOWNLOAD: 'start-download',
    DOWNLOAD_PROGRESS: 'download-progress',
    CHOOSE_FOLDER: 'choose-folder',
    GET_DOWNLOAD_PATH: 'get-download-path',
    SET_DOWNLOAD_PATH: 'set-download-path',
    GET_DOWNLOADED_EPISODES: 'get-downloaded-episodes',
    IMPORT_OPML: 'import-opml',
    EXPORT_OPML: 'export-opml',
    EXPORT_ARCHIVE_CSV: 'export-archive-csv',
    STOP_BATCH: 'stop-batch',
    REMOVE_HISTORY_ITEM: 'remove-history-item',
    RESET_HISTORY: 'reset-history',
    SHOW_IN_FOLDER: 'show-in-folder',
    GET_HELP_CONTENT: 'get-help-content',
    // Push events (main → renderer)
    FEEDS_UPDATED: 'feeds-updated',
    DOWNLOADS_UPDATED: 'downloads-updated',
    BATCH_COMPLETED: 'batch-completed',
    // v0.4.0 new
    GET_CONCURRENCY: 'get-concurrency',
    SET_CONCURRENCY: 'set-concurrency',
    GET_ARCHIVE_STATS: 'get-archive-stats',
} as const;

const feedService = new FeedService();
const libraryService = new LibraryService();
const downloadService = new DownloadService();
const initialConcurrency = libraryService.getConcurrency();
const queueService = new QueueService(initialConcurrency);

// Helper: send push event to renderer safely
function pushEvent(win: BrowserWindow, channel: string, data?: any) {
    if (win && !win.isDestroyed()) {
        win.webContents.send(channel, data);
    }
}

// Track batch for OS notification
let batchTracker = { total: 0, completed: 0, active: false };

export function registerIpcHandlers(mainWindow: BrowserWindow) {

    // ── Feed Parsing ──────────────────────────────────────
    ipcMain.handle(CH.PARSE_FEED, async (_, url: string) => {
        return await feedService.parseFeed(url);
    });

    // ── Feed Library ──────────────────────────────────────
    ipcMain.handle(CH.GET_FEEDS, async () => {
        return libraryService.getFeeds();
    });

    ipcMain.handle(CH.ADD_FEED, async (_, feed: any) => {
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
    ipcMain.handle(CH.START_DOWNLOAD, async (_, { url, title, podcastTitle, guid, pubDate }: { url: string; title: string; podcastTitle: string; guid: string; pubDate?: string }) => {
        let baseDir = libraryService.getDownloadPath();
        if (!baseDir) {
            baseDir = path.join(app.getPath('documents'), 'FeedDownloader', 'downloads');
        }

        const targetFile = getSafePath(baseDir, podcastTitle, title);
        const targetDir = path.dirname(targetFile);

        await fs.ensureDir(targetDir);

        // Track batch
        batchTracker.total++;
        batchTracker.active = true;

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
                pushEvent(mainWindow, CH.DOWNLOAD_PROGRESS, { url, error: true });
            } finally {
                batchTracker.completed++;
                if (batchTracker.completed >= batchTracker.total && batchTracker.active) {
                    batchTracker.active = false;
                    const total = batchTracker.total;
                    batchTracker = { total: 0, completed: 0, active: false };

                    // OS Notification
                    if (Notification.isSupported()) {
                        new Notification({
                            title: 'Runtime FeedDownloader Pro',
                            body: `Download completato: ${total} file scaricati.`,
                            icon: path.join(process.env.VITE_PUBLIC || '', 'logo.png'),
                        }).show();
                    }
                    pushEvent(mainWindow, CH.BATCH_COMPLETED, { total });
                }
            }
        });

        return { status: 'queued' };
    });

    ipcMain.handle(CH.STOP_BATCH, async () => {
        queueService.clear();
        batchTracker = { total: 0, completed: 0, active: false };
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
    ipcMain.handle(CH.SHOW_IN_FOLDER, async (_, { podcastTitle, title }) => {
        let baseDir = libraryService.getDownloadPath();
        if (!baseDir) {
            baseDir = path.join(app.getPath('documents'), 'FeedDownloader', 'downloads');
        }
        const safePath = getSafePath(baseDir, podcastTitle, title);

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
}

function getSafePath(baseDir: string, podcastTitle: string, episodeTitle: string): string {
    const sanitizedPodcast = sanitize(podcastTitle);
    let sanitizedTitle = sanitize(episodeTitle);

    const MAX_PATH = 250;
    const ext = '.mp3';

    const folderPath = path.join(baseDir, sanitizedPodcast);
    const separators = 1;

    const occupied = folderPath.length + separators + ext.length;
    const available = MAX_PATH - occupied;

    if (available < 1) {
        sanitizedTitle = sanitizedTitle.substring(0, 5);
    } else if (sanitizedTitle.length > available) {
        sanitizedTitle = sanitizedTitle.substring(0, available);
    }

    return path.join(folderPath, `${sanitizedTitle}${ext}`);
}
