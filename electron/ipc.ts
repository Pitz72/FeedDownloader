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

    ipcMain.handle(IPC_CHANNELS.START_DOWNLOAD, async (_, { url, title, podcastTitle, guid }: { url: string; title: string; podcastTitle: string; guid: string }) => {
        // Determine download path
        let baseDir = libraryService.getDownloadPath();
        if (!baseDir) {
            baseDir = path.join(app.getPath('documents'), 'FeedDownloader', 'downloads');
        }

        // Sanitize using proper library
        const sanitizedPodcast = sanitize(podcastTitle);
        const sanitizedTitle = sanitize(title);

        const targetDir = path.join(baseDir, sanitizedPodcast);
        const targetFile = path.join(targetDir, `${sanitizedTitle}.mp3`);

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
}
