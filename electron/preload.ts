import { ipcRenderer, contextBridge } from 'electron'
import type {
  Feed, FeedEntry, FeedStats, DownloadProgress, DownloadRequest, DownloadResult, ArchiveEntry, ArchiveStats,
  HealthCheckResult, HealthCheckMode, HealthCheckProgress, ArchiveRepairResult, DiskSpaceInfo, MigrationResult,
  MigrationProgress, PathValidationResult, UpdateStatus, QueueItem, QueueState, FailedDownload, CompletedDownload,
  PendingDownloads,
} from '../shared/types'
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

/** Subscribe to a main → renderer push; returns the unsubscribe function. */
function on<T>(channel: string, callback: (data: T) => void): () => void {
  const subscription = (_event: Electron.IpcRendererEvent, data: T) => callback(data);
  ipcRenderer.on(channel, subscription);
  return () => ipcRenderer.removeListener(channel, subscription);
}

// --------- Expose API to the Renderer process ---------
// v1.6.0: push subscriptions receive the payload only (no IpcRendererEvent), and
// the renderer's `window.api` type is derived from this object (see Api below),
// so preload and renderer can no longer drift apart.
const api = {
  // Synchronous platform tag. The renderer used to read
  // document.documentElement.dataset.platform, which the async ESM preload only
  // sets at DOMContentLoaded — module-level reads in the renderer could run first
  // and see undefined (wrong ⌘/Ctrl labels, missing macOS traffic-light padding).
  platform: process.platform as NodeJS.Platform,

  // ── Feeds ──
  parseFeed: (url: string, opts?: { force?: boolean }): Promise<Feed> => ipcRenderer.invoke(CH.PARSE_FEED, url, opts),
  getFeeds: (): Promise<FeedEntry[]> => ipcRenderer.invoke(CH.GET_FEEDS),
  addFeed: (feed: FeedEntry): Promise<FeedEntry[]> => ipcRenderer.invoke(CH.ADD_FEED, feed),
  removeFeed: (url: string): Promise<FeedEntry[]> => ipcRenderer.invoke(CH.REMOVE_FEED, url),
  refreshAll: (): Promise<{ checked: number; failed: number; newEpisodes: number; queued: number }> => ipcRenderer.invoke(CH.REFRESH_ALL),
  onRefreshProgress: (cb: (p: { done: number; total: number }) => void) => on(CH.REFRESH_PROGRESS, cb),
  setFeedAutoDownload: (url: string, enabled: boolean): Promise<boolean> => ipcRenderer.invoke(CH.SET_FEED_AUTO_DOWNLOAD, url, enabled),
  getFeedStats: (url: string, title: string): Promise<FeedStats> => ipcRenderer.invoke(CH.GET_FEED_STATS, url, title),
  onFeedsUpdated: (cb: (feeds: FeedEntry[]) => void) => on(CH.FEEDS_UPDATED, cb),
  // v1.5.0 — clicking the new-episodes OS notification asks the renderer to open a feed
  onOpenFeed: (cb: (feedUrl: string) => void) => on(CH.OPEN_FEED, cb),
  importOPML: (): Promise<{ count: number; canceled?: boolean }> => ipcRenderer.invoke(CH.IMPORT_OPML),
  exportOPML: (): Promise<boolean> => ipcRenderer.invoke(CH.EXPORT_OPML),

  // ── Downloads & queue ──
  startDownload: (data: DownloadRequest): Promise<DownloadResult> => ipcRenderer.invoke(CH.START_DOWNLOAD, data),
  getDownloadedEpisodes: (feedUrl?: string): Promise<string[]> => ipcRenderer.invoke(CH.GET_DOWNLOADED_EPISODES, feedUrl),
  onDownloadProgress: (cb: (data: DownloadProgress) => void) => on(CH.DOWNLOAD_PROGRESS, cb),
  // L14: a bare notification — the renderer re-fetches what it shows itself.
  onDownloadsUpdated: (cb: () => void) => on(CH.DOWNLOADS_UPDATED, cb),
  onDownloadFailed: (cb: (failure: FailedDownload) => void) => on(CH.DOWNLOAD_FAILED, cb),
  onDownloadCompleted: (cb: (done: CompletedDownload) => void) => on(CH.DOWNLOAD_COMPLETED, cb),
  onQueueUpdated: (cb: (items: QueueItem[]) => void) => on(CH.QUEUE_UPDATED, cb),
  onQueueState: (cb: (state: QueueState) => void) => on(CH.QUEUE_STATE, cb),
  getQueueState: (): Promise<QueueState> => ipcRenderer.invoke(CH.GET_QUEUE_STATE),
  stopBatch: (): Promise<boolean> => ipcRenderer.invoke(CH.STOP_BATCH),
  cancelDownload: (taskId: string): Promise<boolean> => ipcRenderer.invoke(CH.CANCEL_DOWNLOAD, taskId),
  // Pause/Resume (v1.5.0)
  pauseDownload: (taskId: string): Promise<boolean> => ipcRenderer.invoke(CH.PAUSE_DOWNLOAD, taskId),
  resumeDownload: (taskId: string): Promise<boolean> => ipcRenderer.invoke(CH.RESUME_DOWNLOAD, taskId),
  pauseQueue: (): Promise<boolean> => ipcRenderer.invoke(CH.PAUSE_QUEUE),
  resumeQueue: (): Promise<boolean> => ipcRenderer.invoke(CH.RESUME_QUEUE),
  // Connectivity: offline auto-pauses the queue; online lifts that pause and re-checks feeds
  notifyOnline: (): Promise<boolean> => ipcRenderer.invoke(CH.NOTIFY_ONLINE),
  notifyOffline: (): Promise<boolean> => ipcRenderer.invoke(CH.NOTIFY_OFFLINE),
  // Downloads interrupted by the last quit
  getPendingDownloads: (): Promise<PendingDownloads> => ipcRenderer.invoke(CH.GET_PENDING_DOWNLOADS),
  resumePendingDownloads: (): Promise<number> => ipcRenderer.invoke(CH.RESUME_PENDING_DOWNLOADS),
  discardPendingDownloads: (): Promise<boolean> => ipcRenderer.invoke(CH.DISCARD_PENDING_DOWNLOADS),

  // ── Archive ──
  getArchive: (): Promise<ArchiveEntry[]> => ipcRenderer.invoke(CH.GET_ARCHIVE),
  getArchiveEntry: (guid: string, feedUrl?: string): Promise<ArchiveEntry | null> => ipcRenderer.invoke(CH.GET_ARCHIVE_ENTRY, guid, feedUrl),
  getArchiveStats: (): Promise<ArchiveStats> => ipcRenderer.invoke(CH.GET_ARCHIVE_STATS),
  showArchivedEpisode: (guid: string, feedUrl?: string): Promise<boolean> => ipcRenderer.invoke(CH.SHOW_ARCHIVED_EPISODE, guid, feedUrl),
  removeDownloadedEpisode: (guid: string, feedUrl?: string): Promise<boolean> => ipcRenderer.invoke(CH.REMOVE_HISTORY_ITEM, { guid, feedUrl }),
  resetDownloadHistory: (): Promise<boolean> => ipcRenderer.invoke(CH.RESET_HISTORY),
  exportArchiveCSV: (): Promise<boolean> => ipcRenderer.invoke(CH.EXPORT_ARCHIVE_CSV),
  exportM3U: (podcastTitle: string): Promise<boolean | null> => ipcRenderer.invoke(CH.EXPORT_M3U, podcastTitle),
  // Health Check (quick = presence + size, full = SHA-256), with progress and stop
  runHealthCheck: (mode: HealthCheckMode = 'full'): Promise<HealthCheckResult> => ipcRenderer.invoke(CH.RUN_HEALTH_CHECK, mode),
  cancelHealthCheck: (): Promise<boolean> => ipcRenderer.invoke(CH.CANCEL_HEALTH_CHECK),
  onHealthCheckProgress: (cb: (p: HealthCheckProgress) => void) => on(CH.HEALTH_CHECK_PROGRESS, cb),
  markMissingNotDownloaded: (items: Array<string | { guid: string; feedUrl?: string }>): Promise<boolean> => ipcRenderer.invoke(CH.MARK_MISSING_NOT_DOWNLOADED, items),
  repairArchive: (): Promise<ArchiveRepairResult> => ipcRenderer.invoke(CH.REPAIR_ARCHIVE),
  rebaselineArchive: (items: Array<{ guid: string; feedUrl?: string }>): Promise<number> => ipcRenderer.invoke(CH.REBASELINE_ARCHIVE, items),
  migrateArchive: (newPath: string): Promise<MigrationResult> => ipcRenderer.invoke(CH.MIGRATE_ARCHIVE, newPath),
  onMigrationProgress: (cb: (data: MigrationProgress) => void) => on(CH.MIGRATION_PROGRESS, cb),
  // Maintenance — delete orphaned .part temp files, returns how many were removed (-1 = busy)
  cleanPartFiles: (): Promise<number> => ipcRenderer.invoke(CH.CLEAN_PART_FILES),

  // ── Folders ──
  chooseFolder: (): Promise<string | null> => ipcRenderer.invoke(CH.CHOOSE_FOLDER),
  getDownloadPath: (): Promise<string> => ipcRenderer.invoke(CH.GET_DOWNLOAD_PATH),
  getEffectiveDownloadPath: (): Promise<string> => ipcRenderer.invoke(CH.GET_EFFECTIVE_DOWNLOAD_PATH),
  setDownloadPath: (path: string): Promise<boolean> => ipcRenderer.invoke(CH.SET_DOWNLOAD_PATH, path),
  validatePath: (dirPath: string): Promise<PathValidationResult> => ipcRenderer.invoke(CH.VALIDATE_PATH, dirPath),
  openFolder: (dirPath: string): Promise<boolean> => ipcRenderer.invoke(CH.OPEN_FOLDER, dirPath),
  checkDiskSpace: (dirPath: string): Promise<DiskSpaceInfo | null> => ipcRenderer.invoke(CH.CHECK_DISK_SPACE, dirPath),

  // ── Settings ──
  getConcurrency: (): Promise<number> => ipcRenderer.invoke(CH.GET_CONCURRENCY),
  setConcurrency: (n: number): Promise<boolean> => ipcRenderer.invoke(CH.SET_CONCURRENCY, n),
  getNamingTemplate: (): Promise<string> => ipcRenderer.invoke(CH.GET_NAMING_TEMPLATE),
  setNamingTemplate: (template: string): Promise<boolean> => ipcRenderer.invoke(CH.SET_NAMING_TEMPLATE, template),
  getSidecarEnabled: (): Promise<boolean> => ipcRenderer.invoke(CH.GET_SIDECAR_ENABLED),
  setSidecarEnabled: (enabled: boolean): Promise<boolean> => ipcRenderer.invoke(CH.SET_SIDECAR_ENABLED, enabled),
  getId3Enabled: (): Promise<boolean> => ipcRenderer.invoke(CH.GET_ID3_ENABLED),
  setId3Enabled: (enabled: boolean): Promise<boolean> => ipcRenderer.invoke(CH.SET_ID3_ENABLED, enabled),
  getSpeedLimit: (): Promise<number> => ipcRenderer.invoke(CH.GET_SPEED_LIMIT),
  setSpeedLimit: (kbps: number): Promise<boolean> => ipcRenderer.invoke(CH.SET_SPEED_LIMIT, kbps),
  // File Size Cap (v1.5.0) — MB, 0 = unlimited
  getFileSizeLimit: (): Promise<number> => ipcRenderer.invoke(CH.GET_FILE_SIZE_LIMIT),
  setFileSizeLimit: (mb: number): Promise<boolean> => ipcRenderer.invoke(CH.SET_FILE_SIZE_LIMIT, mb),
  getAutoRefreshInterval: (): Promise<number> => ipcRenderer.invoke(CH.GET_AUTO_REFRESH_INTERVAL),
  setAutoRefreshInterval: (hours: number): Promise<boolean> => ipcRenderer.invoke(CH.SET_AUTO_REFRESH_INTERVAL, hours),
  // Locale sync (renderer → main, for OS notifications)
  setLocale: (locale: string): Promise<boolean> => ipcRenderer.invoke(CH.SET_LOCALE, locale),
  // Accessibility (v1.6.0)
  getUiZoom: (): Promise<number> => ipcRenderer.invoke(CH.GET_UI_ZOOM),
  setUiZoom: (zoom: number): Promise<number> => ipcRenderer.invoke(CH.SET_UI_ZOOM, zoom),
  onUiZoomChanged: (cb: (zoom: number) => void) => on(CH.UI_ZOOM_CHANGED, cb),
  getReduceMotion: (): Promise<boolean> => ipcRenderer.invoke(CH.GET_REDUCE_MOTION),
  setReduceMotion: (enabled: boolean): Promise<boolean> => ipcRenderer.invoke(CH.SET_REDUCE_MOTION, enabled),

  // ── Updates ──
  checkForUpdate: (): Promise<void> => ipcRenderer.invoke(CH.CHECK_FOR_UPDATE),
  downloadUpdate: (): Promise<boolean> => ipcRenderer.invoke(CH.DOWNLOAD_UPDATE),
  installUpdate: (): Promise<void> => ipcRenderer.invoke(CH.INSTALL_UPDATE),
  onUpdateStatus: (cb: (status: UpdateStatus) => void) => on(CH.UPDATE_STATUS, cb),

  // ── Help, changelog, links ──
  getHelpContent: (lang: string): Promise<string> => ipcRenderer.invoke(CH.GET_HELP_CONTENT, lang),
  getChangelog: (version?: string): Promise<string> => ipcRenderer.invoke(CH.GET_CHANGELOG, version),
  // v1.5.0 — Titan pattern: main decides once whether to auto-open the changelog
  consumeWhatsNew: (): Promise<{ shouldShow: boolean; previousVersion: string | null; currentVersion: string }> =>
    ipcRenderer.invoke(CH.CONSUME_WHATS_NEW),
  // B1 — open the bundled PDF manual for a language
  openManualPdf: (lang: string): Promise<boolean> => ipcRenderer.invoke(CH.OPEN_MANUAL_PDF, lang),
  // v1.5.0 — apre un indirizzo del progetto nel browser (host consentiti nel main)
  openExternal: (url: string): Promise<boolean> => ipcRenderer.invoke(CH.OPEN_EXTERNAL, url),
}

contextBridge.exposeInMainWorld('api', api)

/** The renderer's `window.api` (declared in src/vite-env.d.ts from this type). */
export type Api = typeof api
