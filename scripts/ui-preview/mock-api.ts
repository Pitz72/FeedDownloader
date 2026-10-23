/**
 * `window.api` finto per l'anteprima dell'interfaccia nel browser.
 *
 * Simula una libreria realistica (feed con anni di episodi, archivio, coda che
 * avanza davvero con pause, errori e completamenti) senza rete né Electron.
 * Lo stato vive in memoria e si azzera a ogni ricarica della pagina.
 */
import type { Api } from '../../electron/preload'
import type {
    ArchiveEntry, CompletedDownload, DownloadProgress, DownloadRequest, Episode, FailedDownload, Feed, FeedEntry,
    HealthCheckResult, QueueItem, QueueState, UpdateStatus,
} from '../../shared/types'

const params = new URLSearchParams(location.search)

type Listener = (data: unknown) => void
const listeners = new Map<string, Set<Listener>>()
const on = (ch: string) => (cb: Listener) => {
    if (!listeners.has(ch)) listeners.set(ch, new Set())
    listeners.get(ch)!.add(cb)
    return () => { listeners.get(ch)?.delete(cb) }
}
const emit = (ch: string, data?: unknown) => listeners.get(ch)?.forEach(cb => cb(data))
const wait = (ms: number) => new Promise(r => setTimeout(r, ms))

// ── Dati ───────────────────────────────────────────────────────
function cover(label: string, hue: number): string {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="hsl(${hue} 70% 46%)"/><stop offset="1" stop-color="hsl(${hue + 40} 60% 22%)"/></linearGradient></defs><rect width="120" height="120" fill="url(#g)"/><text x="60" y="72" font-family="Inter,Arial" font-size="38" font-weight="700" fill="white" text-anchor="middle">${label}</text></svg>`
    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}

interface FeedSeed { url: string; title: string; hue: number | null; count: number; everyDays: number; minutes: [number, number]; seasons: boolean; description: string; archivedRatio: number; auto?: boolean }
const SEEDS: FeedSeed[] = [
    { url: 'https://feeds.example.org/storia.xml', title: 'Storia in podcast', hue: 265, count: 236, everyDays: 7, minutes: [38, 64], seasons: true, description: 'Ogni settimana un episodio della storia d’Europa, dalle origini al Novecento, raccontato con le fonti.', archivedRatio: 0.62, auto: true },
    { url: 'https://feeds.example.org/scienza.xml', title: 'Scienza in breve', hue: 190, count: 128, everyDays: 3, minutes: [8, 18], seasons: false, description: 'Notizie dalla ricerca, spiegate in un quarto d’ora.', archivedRatio: 0.25 },
    { url: 'https://feeds.example.org/runtime-news.xml', title: 'Runtime Radio · Notiziario', hue: 290, count: 64, everyDays: 1, minutes: [4, 7], seasons: false, description: 'Il notiziario quotidiano di Runtime Radio.', archivedRatio: 0.0 },
    { url: 'https://feeds.example.org/interviste.xml', title: 'La lunga intervista', hue: 20, count: 18, everyDays: 30, minutes: [90, 180], seasons: true, description: 'Conversazioni di due ore con chi fa cultura.', archivedRatio: 1 },
    { url: 'https://feeds.example.org/caffe.xml', title: 'Il caffè tecnologico', hue: null, count: 41, everyDays: 14, minutes: [25, 40], seasons: false, description: 'Due chiacchiere su software libero e strumenti per lavorare meglio.', archivedRatio: 0.1 },
]

let seed = 42
const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647
const pad = (n: number) => String(n).padStart(2, '0')
const fmtDuration = (min: number) => `${pad(Math.floor(min / 60))}:${pad(min % 60)}:${pad(Math.floor(rnd() * 60))}`

const feeds = new Map<string, Feed & { autoDownload?: boolean }>()
const downloaded = new Map<string, Set<string>>() // feedUrl → guids
const archive: ArchiveEntry[] = []
const now = Date.now()

for (const s of SEEDS) {
    const episodes: Episode[] = []
    for (let i = 0; i < s.count; i++) {
        const date = new Date(now - (i * s.everyDays + 1) * 86_400_000 - rnd() * 3_600_000)
        const n = s.count - i
        const minutes = Math.round(s.minutes[0] + rnd() * (s.minutes[1] - s.minutes[0]))
        const season = s.seasons ? String(Math.ceil(n / 52)) : undefined
        const episode = String(s.seasons ? ((n - 1) % 52) + 1 : n)
        const url = `${s.url.replace('.xml', '')}/ep-${n}.mp3`
        episodes.push({
            title: `${s.title.split(' ')[0]} ${n} — ${['Le origini', 'Il grande cambiamento', 'Voci dal passato', 'Una mappa del presente', 'Domande aperte', 'Il caso dimenticato', 'Dietro le quinte della ricerca'][n % 7]}`,
            guid: `${s.url}#${n}`,
            pubDate: date.toUTCString(),
            isoDate: date.toISOString(),
            link: `https://example.org/${n}`,
            content: `<p>In questo episodio: ${['un’introduzione al tema', 'le fonti e i documenti', 'un’intervista con un ricercatore', 'le domande degli ascoltatori'][n % 4]}.</p><p>Musiche originali di Runtime Radio. Trascrizione disponibile sul sito.</p>`,
            contentSnippet: 'In questo episodio, le fonti e i documenti.',
            enclosure: { url, type: 'audio/mpeg', length: String(Math.round(minutes * 60 * 24_000)) },
            itunes: { duration: fmtDuration(minutes), season, episode, episodeType: n % 25 === 0 ? 'bonus' : 'full' },
        })
    }
    feeds.set(s.url, { url: s.url, title: s.title, image: s.hue === null ? undefined : cover(s.title.split(' ').map(w => w[0]).slice(0, 2).join(''), s.hue), description: s.description, episodes, lastUpdated: new Date(now - 3 * 3_600_000).toISOString(), autoDownload: s.auto })
    const set = new Set<string>()
    if (!params.has('empty')) {
        episodes.forEach((ep, i) => {
            if (rnd() < s.archivedRatio && i > 1) {
                set.add(ep.guid!)
                archive.push({
                    guid: ep.guid!, feedUrl: s.url, podcastTitle: s.title, title: ep.title, pubDate: ep.pubDate!,
                    downloadedAt: new Date(now - rnd() * 200 * 86_400_000).toISOString(),
                    filename: `${ep.title.replace(/[\\/:*?"<>|]/g, '')}.mp3`, fileSize: Number(ep.enclosure!.length),
                    checksum: Array.from({ length: 64 }, () => '0123456789abcdef'[Math.floor(rnd() * 16)]).join(''),
                    bitrate: [128, 192, 96][i % 3], sampleRate: 44100, baseDir: 'D:\\Podcast',
                })
            }
        })
    }
    downloaded.set(s.url, set)
}

const library = (): FeedEntry[] => params.has('empty') ? [] : [...feeds.values()].map(f => {
    const set = downloaded.get(f.url)!
    const mine = archive.filter(a => a.feedUrl === f.url)
    return {
        url: f.url, title: f.title, image: f.image, lastUpdated: f.lastUpdated, newCount: f.episodes.filter(e => !set.has(e.guid!)).length, autoDownload: !!f.autoDownload,
        episodeCount: f.episodes.length, archivedCount: mine.length, archivedBytes: mine.reduce((n, a) => n + (a.fileSize ?? 0), 0),
    }
})

// ── Coda simulata ──────────────────────────────────────────────
interface Task { item: QueueItem; req: DownloadRequest; loaded: number; total: number }
const tasks = new Map<string, Task>()
let paused: QueueState['pauseReason'] = params.has('offline') ? 'offline' : null
const run = { total: 0, completed: 0, failed: 0, cancelled: 0 }
let concurrency = 3
let speedKBps = 0

const queueState = (): QueueState => ({ paused: paused !== null, pauseReason: paused, run: { ...run } })
const pushQueue = () => { emit('queue', [...tasks.values()].map(t => t.item)); emit('queueState', queueState()) }

setInterval(() => {
    if (paused) return
    const all = [...tasks.values()]
    let active = all.filter(t => t.item.status === 'downloading')
    for (const t of all) {
        if (active.length >= concurrency) break
        if (t.item.status === 'pending') { t.item.status = 'downloading'; active = [...active, t]; pushQueue() }
    }
    for (const t of active) {
        const step = speedKBps > 0 ? (speedKBps * 1024 * 0.25) / Math.max(1, active.length) : t.total * (0.04 + rnd() * 0.05)
        t.loaded = Math.min(t.total, t.loaded + step)
        emit('progress', { url: t.req.url, loaded: Math.round(t.loaded), total: t.total } satisfies DownloadProgress)
        if (t.loaded >= t.total) {
            tasks.delete(t.item.taskId)
            if (rnd() < 0.06) {
                run.failed++
                const failure: FailedDownload = { title: t.req.title, podcastTitle: t.req.podcastTitle, errorCode: ['HTTP_503', 'DOWNLOAD_STALLED', 'EPISODE_NOT_FOUND'][Math.floor(rnd() * 3)], request: t.req, failedAt: new Date().toISOString() }
                emit('progress', { url: t.req.url, loaded: 0, total: 0, error: true })
                emit('failed', failure)
            } else {
                run.completed++
                downloaded.get(t.req.feedUrl!)?.add(t.req.guid)
                const filename = `${t.req.title.replace(/[\\/:*?"<>|]/g, '')}.mp3`
                archive.unshift({ guid: t.req.guid, feedUrl: t.req.feedUrl, podcastTitle: t.req.podcastTitle, title: t.req.title, pubDate: t.req.pubDate ?? '', downloadedAt: new Date().toISOString(), filename, fileSize: t.total, bitrate: 192, sampleRate: 44100, baseDir: 'D:\\Podcast', checksum: 'ab'.repeat(32) })
                emit('progress', { url: t.req.url, loaded: 100, total: 100, completed: true })
                emit('completed', { url: t.req.url, guid: t.req.guid, feedUrl: t.req.feedUrl, title: t.req.title, podcastTitle: t.req.podcastTitle, filename, fileSize: t.total, completedAt: new Date().toISOString() } satisfies CompletedDownload)
                emit('downloads')
                emit('feeds', library())
            }
            pushQueue()
        }
    }
}, 250)

let updateStatus: UpdateStatus = { type: 'idle' }
setTimeout(() => { updateStatus = { type: 'available', version: '1.6.1' }; emit('update', updateStatus) }, 2500)

// ── API ────────────────────────────────────────────────────────
export function installMockApi(): void {
    const api: Api = {
        platform: 'win32',
        parseFeed: async (url) => { await wait(350); const f = feeds.get(url); if (!f) throw new Error('FAILED_TO_PARSE: 404'); return { ...f } },
        getFeeds: async () => library(),
        addFeed: async (feed) => { if (!feeds.has(feed.url)) feeds.set(feed.url, { url: feed.url, title: feed.title, image: feed.image, episodes: [] }); const l = library(); emit('feeds', l); return l },
        removeFeed: async (url) => { feeds.delete(url); const l = library(); emit('feeds', l); return l },
        refreshAll: async () => {
            const list = library()
            for (let i = 0; i <= list.length; i++) { emit('refresh', { done: i, total: list.length }); await wait(220) }
            return { checked: list.length, failed: 0, newEpisodes: 2, queued: 1 }
        },
        onRefreshProgress: on('refresh') as Api['onRefreshProgress'],
        setFeedAutoDownload: async (url, enabled) => { const f = feeds.get(url); if (f) f.autoDownload = enabled; emit('feeds', library()); return true },
        getFeedStats: async (url, title) => {
            const rows = archive.filter(a => a.feedUrl === url)
            return { archivedCount: rows.length, archivedBytes: rows.reduce((n, r) => n + (r.fileSize ?? 0), 0), folder: `D:\\Podcast\\${title}` }
        },
        onFeedsUpdated: on('feeds') as Api['onFeedsUpdated'],
        onOpenFeed: on('openFeed') as Api['onOpenFeed'],
        importOPML: async () => ({ count: 0, canceled: true }),
        exportOPML: async () => true,

        startDownload: async (req) => {
            if ([...tasks.values()].some(t => t.req.url === req.url)) return { status: 'duplicate' }
            if (tasks.size === 0) { run.total = 0; run.completed = 0; run.failed = 0; run.cancelled = 0 }
            const taskId = crypto.randomUUID()
            tasks.set(taskId, { item: { taskId, title: req.title, podcastTitle: req.podcastTitle, url: req.url, status: paused ? 'paused' : 'pending' }, req, loaded: 0, total: req.meta?.enclosureLength ?? 30_000_000 })
            run.total++
            pushQueue()
            return { status: 'queued' }
        },
        getDownloadedEpisodes: async (feedUrl) => [...(feedUrl ? downloaded.get(feedUrl) ?? [] : [])],
        onDownloadProgress: on('progress') as Api['onDownloadProgress'],
        onDownloadsUpdated: on('downloads') as Api['onDownloadsUpdated'],
        onDownloadFailed: on('failed') as Api['onDownloadFailed'],
        onDownloadCompleted: on('completed') as Api['onDownloadCompleted'],
        onQueueUpdated: on('queue') as Api['onQueueUpdated'],
        onQueueState: on('queueState') as Api['onQueueState'],
        getQueueState: async () => queueState(),
        stopBatch: async () => { for (const t of tasks.values()) emit('progress', { url: t.req.url, loaded: 0, total: 0, cancelled: true }); tasks.clear(); paused = null; run.total = 0; run.completed = 0; run.failed = 0; run.cancelled = 0; pushQueue(); return true },
        cancelDownload: async (taskId) => { const t = tasks.get(taskId); if (!t) return false; tasks.delete(taskId); run.cancelled++; emit('progress', { url: t.req.url, loaded: 0, total: 0, cancelled: true }); pushQueue(); return true },
        pauseDownload: async (taskId) => { const t = tasks.get(taskId); if (!t) return false; t.item.status = 'paused'; emit('progress', { url: t.req.url, loaded: Math.round(t.loaded), total: t.total, paused: true }); pushQueue(); return true },
        resumeDownload: async (taskId) => { const t = tasks.get(taskId); if (!t) return false; t.item.status = 'pending'; pushQueue(); return true },
        pauseQueue: async () => { paused = 'user'; for (const t of tasks.values()) if (t.item.status !== 'paused') t.item.status = 'paused'; pushQueue(); return true },
        resumeQueue: async () => { paused = null; for (const t of tasks.values()) t.item.status = 'pending'; pushQueue(); return true },
        notifyOnline: async () => { if (paused === 'offline') { paused = null; pushQueue() } return true },
        notifyOffline: async () => { if (!paused) { paused = 'offline'; pushQueue() } return true },
        getPendingDownloads: async () => params.has('pending') ? { count: 14, podcasts: ['Storia in podcast', 'Scienza in breve'] } : { count: 0, podcasts: [] },
        resumePendingDownloads: async () => 14,
        discardPendingDownloads: async () => true,

        getArchive: async () => [...archive],
        getArchiveEntry: async (guid, feedUrl) => archive.find(a => a.guid === guid && (!feedUrl || a.feedUrl === feedUrl)) ?? null,
        getArchiveStats: async () => ({ totalFiles: archive.length, totalPodcasts: new Set(archive.map(a => a.podcastTitle)).size, oldestDate: archive.length ? archive[archive.length - 1].downloadedAt : null, newestDate: archive[0]?.downloadedAt ?? null }),
        showArchivedEpisode: async () => true,
        removeDownloadedEpisode: async (guid, feedUrl) => { downloaded.get(feedUrl ?? '')?.delete(guid); const i = archive.findIndex(a => a.guid === guid); if (i >= 0) archive.splice(i, 1); emit('downloads'); emit('feeds', library()); return true },
        resetDownloadHistory: async () => { archive.length = 0; downloaded.forEach(s => s.clear()); emit('downloads'); emit('feeds', library()); return true },
        exportArchiveCSV: async () => true,
        exportM3U: async () => true,
        runHealthCheck: async (mode = 'full') => {
            const total = archive.length
            for (let i = 0; i <= total; i += Math.max(1, Math.round(total / 20))) { emit('health', { done: i, total }); await wait(mode === 'full' ? 120 : 40) }
            emit('health', { done: total, total })
            const pick = (n: number) => archive.slice(0, n).map(a => ({ guid: a.guid, feedUrl: a.feedUrl, title: a.title, podcast: a.podcastTitle, filename: a.filename ?? '' }))
            return { mode, total, present: total - 3, missing: 3, corrupted: mode === 'full' ? 2 : 1, totalSizeBytes: archive.reduce((n, a) => n + (a.fileSize ?? 0), 0), missingFiles: pick(3), corruptedFiles: pick(mode === 'full' ? 2 : 1) } satisfies HealthCheckResult
        },
        cancelHealthCheck: async () => true,
        onHealthCheckProgress: on('health') as Api['onHealthCheckProgress'],
        markMissingNotDownloaded: async () => true,
        repairArchive: async () => { await wait(600); return { scanned: 12, repaired: 2, repairedFiles: [], unmatched: 1, unrepairable: 0 } },
        rebaselineArchive: async (items) => items.length,
        migrateArchive: async (newPath) => ({ moved: 5, errors: 0, newPath, pathChanged: true }),
        onMigrationProgress: on('migration') as Api['onMigrationProgress'],
        cleanPartFiles: async () => 3,

        chooseFolder: async () => 'E:\\Archivio podcast',
        getDownloadPath: async () => 'D:\\Podcast',
        getEffectiveDownloadPath: async () => 'D:\\Podcast',
        setDownloadPath: async () => true,
        validatePath: async () => ({ ok: true, isNetworkPath: false }),
        openFolder: async () => true,
        checkDiskSpace: async () => ({ freeBytes: 412 * 1024 ** 3, totalBytes: 2000 * 1024 ** 3 }),

        getConcurrency: async () => concurrency,
        setConcurrency: async (n) => { concurrency = n; return true },
        getNamingTemplate: async () => '{date} - {title}',
        setNamingTemplate: async () => true,
        getSidecarEnabled: async () => true,
        setSidecarEnabled: async () => true,
        getId3Enabled: async () => false,
        setId3Enabled: async () => true,
        getSpeedLimit: async () => speedKBps,
        setSpeedLimit: async (k) => { speedKBps = k; return true },
        getFileSizeLimit: async () => 0,
        setFileSizeLimit: async () => true,
        getAutoRefreshInterval: async () => 6,
        setAutoRefreshInterval: async () => true,
        setLocale: async () => true,
        getUiZoom: async () => 1,
        setUiZoom: async (z) => { document.body.style.zoom = String(z); emit('zoom', z); return z },
        onUiZoomChanged: on('zoom') as Api['onUiZoomChanged'],
        getReduceMotion: async () => params.has('reduce'),
        setReduceMotion: async () => true,

        checkForUpdate: async () => { await wait(500); updateStatus = { type: 'not-available' }; emit('update', updateStatus) },
        downloadUpdate: async () => {
            for (let p = 0; p <= 100; p += 10) { updateStatus = { type: 'downloading', percent: p }; emit('update', updateStatus); await wait(150) }
            updateStatus = { type: 'ready' }; emit('update', updateStatus); return true
        },
        installUpdate: async () => { },
        onUpdateStatus: on('update') as Api['onUpdateStatus'],

        getHelpContent: async () => '# Guida\n\nQuesta è l’anteprima dell’interfaccia: la guida vera arriva dal README della lingua scelta.\n\n## Scaricare un periodo\n\n1. Apri un feed.\n2. In **Periodo** scegli le date *Dal* e *Al*.\n3. Premi **Scarica i N filtrati**.',
        getChangelog: async () => '',
        consumeWhatsNew: async () => ({ shouldShow: params.has('whatsnew'), previousVersion: '1.5.1', currentVersion: '1.6.0' }),
        openManualPdf: async () => true,
        openExternal: async () => true,
    }
    ;(window as unknown as { api: Api }).api = api
}
