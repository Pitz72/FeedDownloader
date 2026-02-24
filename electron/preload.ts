import { ipcRenderer, contextBridge } from 'electron'

// --------- Expose API to the Renderer process ---------
contextBridge.exposeInMainWorld('api', {
  parseFeed: (url: string) => ipcRenderer.invoke('parse-feed', url),
  getFeeds: () => ipcRenderer.invoke('get-feeds'),
  addFeed: (feed: any) => ipcRenderer.invoke('add-feed', feed),
  removeFeed: (url: string) => ipcRenderer.invoke('remove-feed', url),
  startDownload: (data: any) => ipcRenderer.invoke('start-download', data),
  getDownloadedEpisodes: () => ipcRenderer.invoke('get-downloaded-episodes'),
  chooseFolder: () => ipcRenderer.invoke('choose-folder'),
  getDownloadPath: () => ipcRenderer.invoke('get-download-path'),
  setDownloadPath: (path: string) => ipcRenderer.invoke('set-download-path', path),
  onDownloadProgress: (callback: (event: any, data: any) => void) => {
    const subscription = (_event: any, data: any) => callback(_event, data);
    ipcRenderer.on('download-progress', subscription);
    return () => ipcRenderer.removeListener('download-progress', subscription);
  },
  stopBatch: () => ipcRenderer.invoke('stop-batch'),
  showInFolder: (podcastTitle: string, title: string) => ipcRenderer.invoke('show-in-folder', { podcastTitle, title }),
  removeDownloadedEpisode: (guid: string) => ipcRenderer.invoke('remove-history-item', guid),
  resetDownloadHistory: () => ipcRenderer.invoke('reset-history'),
  getHelpContent: (lang: string) => ipcRenderer.invoke('get-help-content', lang),
  importOPML: () => ipcRenderer.invoke('import-opml'),
  exportOPML: () => ipcRenderer.invoke('export-opml'),
  exportArchiveCSV: () => ipcRenderer.invoke('export-archive-csv'),

  // v0.4.0 — Push events
  onFeedsUpdated: (callback: (event: any, feeds: any[]) => void) => {
    const subscription = (_event: any, feeds: any[]) => callback(_event, feeds);
    ipcRenderer.on('feeds-updated', subscription);
    return () => ipcRenderer.removeListener('feeds-updated', subscription);
  },
  onDownloadsUpdated: (callback: (event: any, guids: string[]) => void) => {
    const subscription = (_event: any, guids: string[]) => callback(_event, guids);
    ipcRenderer.on('downloads-updated', subscription);
    return () => ipcRenderer.removeListener('downloads-updated', subscription);
  },
  onBatchCompleted: (callback: (event: any, data: { total: number }) => void) => {
    const subscription = (_event: any, data: { total: number }) => callback(_event, data);
    ipcRenderer.on('batch-completed', subscription);
    return () => ipcRenderer.removeListener('batch-completed', subscription);
  },

  // v0.4.0 — Concurrency
  getConcurrency: () => ipcRenderer.invoke('get-concurrency'),
  setConcurrency: (n: number) => ipcRenderer.invoke('set-concurrency', n),

  // v0.4.0 — Archive Stats
  getArchiveStats: () => ipcRenderer.invoke('get-archive-stats'),
})
