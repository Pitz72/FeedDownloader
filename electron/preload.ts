import { ipcRenderer, contextBridge } from 'electron'
import type { Feed, FeedEntry, DownloadProgress, DownloadRequest, DownloadResult, ArchiveStats, HealthCheckResult, DiskSpaceInfo, MigrationResult, MigrationProgress, PathValidationResult, UpdateStatus } from '../shared/types'
import { IPC_CHANNELS as CH } from '../shared/types'

// Set platform data-attribute on <html> for macOS traffic-light CSS.
// ESM preloads in Electron load asynchronously; documentElement may be null at module
// evaluation time, so we defer to DOMContentLoaded when needed.
const applyPlatform = () => { document.documentElement.dataset.platform = process.platform; };
if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', applyPlatform);
} else {
    applyPlatform();
}

// --------- Expose API to the Renderer process ---------
contextBridge.exposeInMainWorld('api', {
  parseFeed: (url: string): Promise<Feed> => ipcRenderer.invoke(CH.PARSE_FEED, url),
  getFeeds: (): Promise<FeedEntry[]> => ipcRenderer.invoke(CH.GET_FEEDS),
  addFeed: (feed: FeedEntry): Promise<FeedEntry[]> => ipcRenderer.invoke(CH.ADD_FEED, feed),
  removeFeed: (url: string): Promise<FeedEntry[]> => ipcRenderer.invoke(CH.REMOVE_FEED, url),
  startDownload: (data: DownloadRequest): Promise<DownloadResult> => ipcRenderer.invoke(CH.START_DOWNLOAD, data),
  getDownloadedEpisodes: (): Promise<string[]> => ipcRenderer.invoke(CH.GET_DOWNLOADED_EPISODES),
  chooseFolder: (): Promise<string | null> => ipcRenderer.invoke(CH.CHOOSE_FOLDER),
  getDownloadPath: (): Promise<string> => ipcRenderer.invoke(CH.GET_DOWNLOAD_PATH),
  setDownloadPath: (path: string): Promise<boolean> => ipcRenderer.invoke(CH.SET_DOWNLOAD_PATH, path),
  onDownloadProgress: (callback: (event: Electron.IpcRendererEvent, data: DownloadProgress) => void) => {
    const subscription = (_event: Electron.IpcRendererEvent, data: DownloadProgress) => callback(_event, data);
    ipcRenderer.on(CH.DOWNLOAD_PROGRESS, subscription);
    return () => ipcRenderer.removeListener(CH.DOWNLOAD_PROGRESS, subscription);
  },
  stopBatch: (): Promise<boolean> => ipcRenderer.invoke(CH.STOP_BATCH),
  cancelDownload: (taskId: string): Promise<boolean> => ipcRenderer.invoke(CH.CANCEL_DOWNLOAD, taskId),
  showInFolder: (podcastTitle: string, title: string, enclosureUrl?: string, pubDate?: string): Promise<void> =>
    ipcRenderer.invoke(CH.SHOW_IN_FOLDER, { podcastTitle, title, enclosureUrl, pubDate }),
  removeDownloadedEpisode: (guid: string): Promise<boolean> => ipcRenderer.invoke(CH.REMOVE_HISTORY_ITEM, guid),
  resetDownloadHistory: (): Promise<boolean> => ipcRenderer.invoke(CH.RESET_HISTORY),
  getHelpContent: (lang: string): Promise<string> => ipcRenderer.invoke(CH.GET_HELP_CONTENT, lang),
  importOPML: (): Promise<{ count: number }> => ipcRenderer.invoke(CH.IMPORT_OPML),
  exportOPML: (): Promise<boolean> => ipcRenderer.invoke(CH.EXPORT_OPML),
  exportArchiveCSV: (): Promise<boolean> => ipcRenderer.invoke(CH.EXPORT_ARCHIVE_CSV),

  // Push events
  onFeedsUpdated: (callback: (event: Electron.IpcRendererEvent, feeds: FeedEntry[]) => void) => {
    const subscription = (_event: Electron.IpcRendererEvent, feeds: FeedEntry[]) => callback(_event, feeds);
    ipcRenderer.on(CH.FEEDS_UPDATED, subscription);
    return () => ipcRenderer.removeListener(CH.FEEDS_UPDATED, subscription);
  },
  onDownloadsUpdated: (callback: (event: Electron.IpcRendererEvent, guids: string[]) => void) => {
    const subscription = (_event: Electron.IpcRendererEvent, guids: string[]) => callback(_event, guids);
    ipcRenderer.on(CH.DOWNLOADS_UPDATED, subscription);
    return () => ipcRenderer.removeListener(CH.DOWNLOADS_UPDATED, subscription);
  },
  onBatchCompleted: (callback: (event: Electron.IpcRendererEvent, data: { total: number; failed: import('../shared/types').FailedDownload[] }) => void) => {
    const subscription = (_event: Electron.IpcRendererEvent, data: { total: number; failed: import('../shared/types').FailedDownload[] }) => callback(_event, data);
    ipcRenderer.on(CH.BATCH_COMPLETED, subscription);
    return () => ipcRenderer.removeListener(CH.BATCH_COMPLETED, subscription);
  },
  onQueueUpdated: (callback: (event: Electron.IpcRendererEvent, items: import('../shared/types').QueueItem[]) => void) => {
    const subscription = (_event: Electron.IpcRendererEvent, items: import('../shared/types').QueueItem[]) => callback(_event, items);
    ipcRenderer.on(CH.QUEUE_UPDATED, subscription);
    return () => ipcRenderer.removeListener(CH.QUEUE_UPDATED, subscription);
  },

  // Concurrency
  getConcurrency: (): Promise<number> => ipcRenderer.invoke(CH.GET_CONCURRENCY),
  setConcurrency: (n: number): Promise<boolean> => ipcRenderer.invoke(CH.SET_CONCURRENCY, n),

  // Archive Stats
  getArchiveStats: (): Promise<ArchiveStats> => ipcRenderer.invoke(CH.GET_ARCHIVE_STATS),

  // Locale Sync
  setLocale: (locale: string): Promise<boolean> => ipcRenderer.invoke(CH.SET_LOCALE, locale),

  // Naming Template
  getNamingTemplate: (): Promise<string> => ipcRenderer.invoke(CH.GET_NAMING_TEMPLATE),
  setNamingTemplate: (template: string): Promise<boolean> => ipcRenderer.invoke(CH.SET_NAMING_TEMPLATE, template),

  // Sidecar JSON
  getSidecarEnabled: (): Promise<boolean> => ipcRenderer.invoke(CH.GET_SIDECAR_ENABLED),
  setSidecarEnabled: (enabled: boolean): Promise<boolean> => ipcRenderer.invoke(CH.SET_SIDECAR_ENABLED, enabled),

  // Health Check
  runHealthCheck: (): Promise<HealthCheckResult> => ipcRenderer.invoke(CH.RUN_HEALTH_CHECK),
  // Mark missing files as not downloaded
  markMissingNotDownloaded: (guids: string[]): Promise<boolean> => ipcRenderer.invoke(CH.MARK_MISSING_NOT_DOWNLOADED, guids),

  // ID3 Tagging
  getId3Enabled: (): Promise<boolean> => ipcRenderer.invoke(CH.GET_ID3_ENABLED),
  setId3Enabled: (enabled: boolean): Promise<boolean> => ipcRenderer.invoke(CH.SET_ID3_ENABLED, enabled),

  // Speed Throttle
  getSpeedLimit: (): Promise<number> => ipcRenderer.invoke(CH.GET_SPEED_LIMIT),
  setSpeedLimit: (kbps: number): Promise<boolean> => ipcRenderer.invoke(CH.SET_SPEED_LIMIT, kbps),

  // Disk Space
  checkDiskSpace: (dirPath: string): Promise<DiskSpaceInfo | null> => ipcRenderer.invoke(CH.CHECK_DISK_SPACE, dirPath),

  // Archive Migration
  migrateArchive: (newPath: string): Promise<MigrationResult> => ipcRenderer.invoke(CH.MIGRATE_ARCHIVE, newPath),
  onMigrationProgress: (callback: (event: Electron.IpcRendererEvent, data: MigrationProgress) => void) => {
    const subscription = (_event: Electron.IpcRendererEvent, data: MigrationProgress) => callback(_event, data);
    ipcRenderer.on(CH.MIGRATION_PROGRESS, subscription);
    return () => ipcRenderer.removeListener(CH.MIGRATION_PROGRESS, subscription);
  },

  // Network Path Validation
  validatePath: (dirPath: string): Promise<PathValidationResult> => ipcRenderer.invoke(CH.VALIDATE_PATH, dirPath),

  // Open folder in file manager
  openFolder: (dirPath: string): Promise<void> => ipcRenderer.invoke(CH.OPEN_FOLDER, dirPath),

  // M3U Export
  exportM3U: (podcastTitle: string): Promise<boolean | null> => ipcRenderer.invoke(CH.EXPORT_M3U, podcastTitle),

  // Auto-Update
  checkForUpdate: (): Promise<void> => ipcRenderer.invoke(CH.CHECK_FOR_UPDATE),
  installUpdate: (): Promise<void> => ipcRenderer.invoke(CH.INSTALL_UPDATE),
  onUpdateStatus: (callback: (event: Electron.IpcRendererEvent, status: UpdateStatus) => void) => {
    const subscription = (_event: Electron.IpcRendererEvent, status: UpdateStatus) => callback(_event, status);
    ipcRenderer.on(CH.UPDATE_STATUS, subscription);
    return () => ipcRenderer.removeListener(CH.UPDATE_STATUS, subscription);
  },
})
