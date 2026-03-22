import { ipcRenderer, contextBridge } from 'electron'
import type { Feed, FeedEntry, DownloadProgress, DownloadRequest, DownloadResult, ArchiveStats } from '../shared/types'
import { IPC_CHANNELS as CH } from '../shared/types'

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
  showInFolder: (podcastTitle: string, title: string, enclosureUrl?: string): Promise<void> =>
    ipcRenderer.invoke(CH.SHOW_IN_FOLDER, { podcastTitle, title, enclosureUrl }),
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
  onBatchCompleted: (callback: (event: Electron.IpcRendererEvent, data: { total: number }) => void) => {
    const subscription = (_event: Electron.IpcRendererEvent, data: { total: number }) => callback(_event, data);
    ipcRenderer.on(CH.BATCH_COMPLETED, subscription);
    return () => ipcRenderer.removeListener(CH.BATCH_COMPLETED, subscription);
  },

  // Concurrency
  getConcurrency: (): Promise<number> => ipcRenderer.invoke(CH.GET_CONCURRENCY),
  setConcurrency: (n: number): Promise<boolean> => ipcRenderer.invoke(CH.SET_CONCURRENCY, n),

  // Archive Stats
  getArchiveStats: (): Promise<ArchiveStats> => ipcRenderer.invoke(CH.GET_ARCHIVE_STATS),

  // Locale Sync (v0.4.10)
  setLocale: (locale: string): Promise<boolean> => ipcRenderer.invoke(CH.SET_LOCALE, locale),
})
