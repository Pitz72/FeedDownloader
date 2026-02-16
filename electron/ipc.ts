import { ipcMain, dialog } from 'electron';
import { FeedService } from './services/FeedService';
import { LibraryService } from './services/LibraryService';
import { DownloadService } from './services/DownloadService';
import { QueueService } from './services/QueueService';
import { BrowserWindow } from 'electron';
import path from 'path';
import { app } from 'electron';
import sanitize from 'sanitize-filename';
import fs from 'fs-extra';

// ... existing imports

export const IPC_CHANNELS = {
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
};

const feedService = new FeedService();
const libraryService = new LibraryService();
const downloadService = new DownloadService();
const queueService = new QueueService(3); // 3 concurrent downloads

export function registerIpcHandlers(mainWindow: BrowserWindow) {
    ipcMain.handle(IPC_CHANNELS.PARSE_FEED, async (_, url: string) => {
        return await feedService.parseFeed(url);
    });

    ipcMain.handle(IPC_CHANNELS.GET_FEEDS, async () => {
        return libraryService.getFeeds();
    });

    ipcMain.handle(IPC_CHANNELS.ADD_FEED, async (_, feed: any) => {
        libraryService.addFeed(feed);
        return libraryService.getFeeds();
    });

    ipcMain.handle(IPC_CHANNELS.REMOVE_FEED, async (_, url: string) => {
        libraryService.removeFeed(url);
        return libraryService.getFeeds();
    });

    ipcMain.handle(IPC_CHANNELS.GET_DOWNLOADED_EPISODES, async () => {
        return libraryService.getDownloadedEpisodes();
    });

    ipcMain.handle(IPC_CHANNELS.START_DOWNLOAD, async (_, { url, title, podcastTitle, guid, pubDate }: { url: string; title: string; podcastTitle: string; guid: string; pubDate?: string }) => {
        // Determine download path
        let baseDir = libraryService.getDownloadPath();
        if (!baseDir) {
            baseDir = path.join(app.getPath('documents'), 'FeedDownloader', 'downloads');
        }

        const targetFile = getSafePath(baseDir, podcastTitle, title);
        const targetDir = path.dirname(targetFile);

        // Ensure directory exists
        await fs.ensureDir(targetDir);

        // Add to queue
        queueService.add(async () => {
            try {
                // Check if already downloaded (physically) could be added here

                await downloadService.downloadFile(url, targetFile, (loaded, total) => {
                    // Send progress to UI
                    if (mainWindow && !mainWindow.isDestroyed()) {
                        mainWindow.webContents.send(IPC_CHANNELS.DOWNLOAD_PROGRESS, {
                            url,
                            loaded,
                            total
                        });
                    }
                });

                // Mark as downloaded in library
                if (guid) {
                    libraryService.markAsDownloaded(guid);

                    // Add to Archive (Details)
                    libraryService.addArchiveEntry({
                        guid,
                        title,
                        podcastTitle,
                        pubDate: pubDate || new Date().toISOString(),
                        downloadedAt: new Date().toISOString(),
                        filename: path.basename(targetFile)
                    });
                }

                // Send complete event
                if (mainWindow && !mainWindow.isDestroyed()) {
                    mainWindow.webContents.send(IPC_CHANNELS.DOWNLOAD_PROGRESS, {
                        url,
                        loaded: 100,
                        total: 100,
                        completed: true
                    });
                }
            } catch (error) {
                console.error("Download error:", error);
                if (mainWindow && !mainWindow.isDestroyed()) {
                    mainWindow.webContents.send(IPC_CHANNELS.DOWNLOAD_PROGRESS, {
                        url,
                        error: true
                    });
                }
            }
        });

        return { status: 'queued' };
    });

    ipcMain.handle('import-opml', async () => {
        const result = await dialog.showOpenDialog(mainWindow, {
            properties: ['openFile'],
            filters: [{ name: 'OPML/XML', extensions: ['opml', 'xml'] }]
        });
        if (result.canceled || result.filePaths.length === 0) return { count: 0 };

        try {
            const content = await fs.readFile(result.filePaths[0], 'utf-8');
            const count = await libraryService.importOPML(content);
            return { count };
        } catch (error) {
            console.error('Import failed', error);
            throw error;
        }
    });

    ipcMain.handle('export-opml', async () => {
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

    ipcMain.handle('export-archive-csv', async () => {
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

    ipcMain.handle(IPC_CHANNELS.CHOOSE_FOLDER, async () => {
        const result = await dialog.showOpenDialog(mainWindow, {
            properties: ['openDirectory']
        });
        if (result.canceled) return null;
        return result.filePaths[0];
    });

    ipcMain.handle(IPC_CHANNELS.GET_DOWNLOAD_PATH, async () => {
        return libraryService.getDownloadPath();
    });

    ipcMain.handle(IPC_CHANNELS.SET_DOWNLOAD_PATH, async (_, path: string) => {
        libraryService.setDownloadPath(path);
        return true;
    });

    ipcMain.handle('stop-batch', async () => {
        queueService.clear();
        return true;
    });

    ipcMain.handle('remove-history-item', async (_, guid: string) => {
        libraryService.removeDownloadedEpisode(guid);
        return true;
    });

    ipcMain.handle('reset-history', async () => {
        libraryService.resetDownloadHistory();
        return true;
    });

    ipcMain.handle('show-in-folder', async (_, { podcastTitle, title }) => {
        let baseDir = libraryService.getDownloadPath();
        if (!baseDir) {
            baseDir = path.join(app.getPath('documents'), 'FeedDownloader', 'downloads');
        }
        const safePath = getSafePath(baseDir, podcastTitle, title);

        // Use verify logic: if file doesn't exist, maybe try to open folder?
        // But requested is showItemInFolder
        import('electron').then(({ shell }) => {
            shell.showItemInFolder(safePath);
        });
    });

    ipcMain.handle('get-help-content', async (_, lang: string) => {
        const langMap: { [key: string]: string } = {
            'it': 'README_MASTER.md', // Master is Italian
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
            // In dev, usually root is 2 levels up from dist-electron/main.js? 
            // We need project root.
            resourcePath = path.join(app.getAppPath(), fileName);
        }

        try {
            if (await fs.pathExists(resourcePath)) {
                return await fs.readFile(resourcePath, 'utf-8');
            } else {
                // Fallback to EN if specific lang file missing
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
}

function getSafePath(baseDir: string, podcastTitle: string, episodeTitle: string): string {
    const sanitizedPodcast = sanitize(podcastTitle);
    let sanitizedTitle = sanitize(episodeTitle);

    // Windows MAX_PATH safe limit
    const MAX_PATH = 250;
    const ext = '.mp3';

    // Calculate current length: baseDir + \ + podcast + \ + title + .mp3
    // We assume 2 separators
    const folderPath = path.join(baseDir, sanitizedPodcast);
    const separators = 1; // backslash before title

    const occupied = folderPath.length + separators + ext.length;
    const available = MAX_PATH - occupied;

    if (available < 1) {
        // Extreme edge case: path is too long even for 1 char title. 
        // We truncate podcast title? For now just truncate title to minimal.
        sanitizedTitle = sanitizedTitle.substring(0, 5);
    } else if (sanitizedTitle.length > available) {
        sanitizedTitle = sanitizedTitle.substring(0, available);
    }

    return path.join(folderPath, `${sanitizedTitle}${ext}`);
}
