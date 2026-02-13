import { ipcRenderer, contextBridge } from 'electron'

// --------- Expose some API to the Renderer process ---------
// --------- Expose some API to the Renderer process ---------
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
  getHelpContent: (lang: string) => ipcRenderer.invoke('get-help-content', lang)
})
