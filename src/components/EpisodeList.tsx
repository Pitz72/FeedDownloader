import React, { useEffect, useState, useMemo, useCallback, useRef } from 'react';
import { useStore, AppState } from '../store/useStore';
import { Icon } from './Icon';
import { useToast } from '../context/ToastContext';
import { useTranslation } from 'react-i18next';
import { Virtuoso } from 'react-virtuoso';
import { ConfirmModal } from './ConfirmModal';
import { EpisodeDetailPanel } from './EpisodeDetailPanel';
import type { Episode, ArchiveEntry } from '../../shared/types';
import { getEnclosureUrl } from '../../shared/getEnclosureUrl';
import { useOnlineStatus } from '../hooks/useOnlineStatus';
import type { TFunction } from 'i18next';
import { parseDurationMinutes, formatDuration } from '../utils/duration';

function formatBytes(bytes: number): string {
    if (bytes >= 1024 ** 3) return `${(bytes / 1024 ** 3).toFixed(1)} GB`;
    if (bytes >= 1024 ** 2) return `${Math.round(bytes / 1024 ** 2)} MB`;
    return `${Math.round(bytes / 1024)} KB`;
}

function formatSpeed(bytesPerSec: number): string {
    if (bytesPerSec >= 1024 ** 2) return `${(bytesPerSec / 1024 ** 2).toFixed(1)} MB/s`;
    if (bytesPerSec >= 1024) return `${Math.round(bytesPerSec / 1024)} KB/s`;
    return `${Math.round(bytesPerSec)} B/s`;
}

function formatEta(seconds: number): string {
    if (seconds >= 3600) {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        return `${h}h ${m}m`;
    }
    if (seconds >= 60) {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}m ${s}s`;
    }
    return `${seconds}s`;
}

// ── Memoized episode row (B4) ────────────────────────────────────────────────
// Each row subscribes ONLY to its own download slice (downloads[url]) via Zustand,
// so a progress tick re-renders just that one row instead of the whole list.
interface EpisodeRowProps {
    episode: Episode;
    index: number;
    isSelected: boolean;
    isDownloadedByGuid: boolean;
    currentFeedTitle: string;
    isOnline: boolean;
    t: TFunction;
    onRowClick: (episode: Episode, index: number, e: React.MouseEvent) => void;
    onDownload: (episode: Episode) => void;
    onResetStatus: (guid: string) => void;
    onCopyTitle: (title: string) => void;
}

const EpisodeRow = React.memo(function EpisodeRow({
    episode, index, isSelected, isDownloadedByGuid, currentFeedTitle, isOnline, t,
    onRowClick, onDownload, onResetStatus, onCopyTitle,
}: EpisodeRowProps) {
    const url = getEnclosureUrl(episode);
    const guid = episode.guid || url || '';
    const status = useStore((s: AppState) => (url ? s.downloads[url] : undefined));
    const isDownloading = !!(status && !status.completed && !status.error);
    const isCompleted = !!(status?.completed || isDownloadedByGuid);
    const progressPercent = (status && status.total && status.total > 0)
        ? Math.round((status.loaded / status.total) * 100)
        : null;

    const pubDate = episode.pubDate
        ? new Date(episode.pubDate).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })
        : '';
    const dur = formatDuration(episode.itunes?.duration)?.short ?? null;

    const stateClass = isDownloading ? 'downloading' : isCompleted ? 'downloaded' : isSelected ? 'selected' : '';

    return (
        <div
            className={`ep-row ${stateClass}`}
            onClick={(e) => onRowClick(episode, index, e)}
        >
            <div
                className="ep-check"
                onClick={(e) => { e.stopPropagation(); onRowClick(episode, index, { ...e, ctrlKey: true } as unknown as React.MouseEvent); }}
                role="checkbox"
                aria-checked={isSelected}
            >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"/>
                </svg>
            </div>

            <span className="ep-num">#{String(index + 1).padStart(2, '0')}</span>

            <div className="ep-icon" aria-hidden="true">
                {isDownloading ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                        <polyline points="7 10 12 15 17 10"/>
                        <line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                ) : isCompleted ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                    </svg>
                ) : (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="5 3 19 12 5 21 5 3"/>
                    </svg>
                )}
            </div>

            <div className="ep-main">
                <p className="ep-title">{episode.title}</p>
                <div className="ep-meta">
                    {pubDate && <span>{pubDate}</span>}
                    {pubDate && dur && <span className="sep">·</span>}
                    {dur && <span>{dur}</span>}
                    {isCompleted && <span className="tag archived">{t('episodes.tag_archived', 'ARCHIVIATO')}</span>}
                    {!isDownloading && !isCompleted && isSelected && <span className="tag new">{t('episodes.tag_new', 'NUOVO')}</span>}
                </div>
            </div>

            {isDownloading ? (
                <div className="ep-progress" onClick={(e) => e.stopPropagation()}>
                    <div className="ep-progress-bar">
                        <i style={{ width: `${progressPercent ?? 0}%` }} />
                    </div>
                    <div className="ep-progress-meta">
                        <span className="pct">{progressPercent !== null ? `${progressPercent}%` : '…'}</span>
                        {status?.speed !== undefined && status.speed > 0 && (
                            <span>
                                {formatSpeed(status.speed)}
                                {status.eta !== undefined && status.eta > 0 && ` · ${formatEta(status.eta)}`}
                            </span>
                        )}
                    </div>
                </div>
            ) : (
                <div className="ep-actions" onClick={(e) => e.stopPropagation()}>
                    <button
                        type="button"
                        className="ep-action"
                        onClick={() => onCopyTitle(episode.title)}
                        title={t('episodes.copy_title')}
                        aria-label={t('episodes.copy_title')}
                    >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <rect x="9" y="9" width="13" height="13" rx="2"/>
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                        </svg>
                    </button>
                    {isCompleted ? (
                        <>
                            <button
                                type="button"
                                className="ep-action"
                                onClick={() => onResetStatus(guid)}
                                title={t('episodes.reset_status')}
                                aria-label={t('episodes.reset_status')}
                            >
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M3 12a9 9 0 1 0 9-9"/><polyline points="3 4 3 12 11 12"/>
                                </svg>
                            </button>
                            <button
                                type="button"
                                className="ep-action"
                                onClick={() => window.api.showInFolder(currentFeedTitle, episode.title, url, episode.pubDate || episode.isoDate)}
                                title={t('episodes.open_folder')}
                                aria-label={t('episodes.open_folder')}
                            >
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                                </svg>
                            </button>
                        </>
                    ) : (
                        <button
                            type="button"
                            className="ep-action download"
                            onClick={() => onDownload(episode)}
                            disabled={!isOnline}
                            title={isOnline ? t('episodes.download') : t('toast.offline_error')}
                            aria-label={t('episodes.download')}
                        >
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                <polyline points="7 10 12 15 17 10"/>
                                <line x1="12" y1="15" x2="12" y2="3"/>
                            </svg>
                        </button>
                    )}
                </div>
            )}
        </div>
    );
});

export const EpisodeList: React.FC = () => {
    const currentFeed = useStore((state: AppState) => state.currentFeed);
    // B4: subscribe to the SET OF KEYS, not the whole downloads object. The key
    // signature only changes when a download starts/ends — not on every progress
    // tick — so the list/filter don't recompute while bytes stream in.
    const downloadingKeys = useStore((state: AppState) => Object.keys(state.downloads).sort().join('\n'));
    const startBatch = useStore((state: AppState) => state.startBatch);
    const setDownloadPath = useStore((state: AppState) => state.setDownloadPath);
    const toast = useToast();
    const [downloadedGuids, setDownloadedGuids] = useState<string[]>([]);
    const { t } = useTranslation();
    const [searchQuery, setSearchQuery] = useState('');

    const [dateFrom, setDateFrom] = useState('');
    const [dateTo, setDateTo] = useState('');
    const [showDateFilter, setShowDateFilter] = useState(false);

    type StatusFilter = 'all' | 'new' | 'downloaded';
    const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');

    const [minDuration, setMinDuration] = useState<number>(0);
    const [maxDuration, setMaxDuration] = useState<number>(0);
    const [showDurationFilter, setShowDurationFilter] = useState(false);

    type SortOrder = 'default' | 'date-desc' | 'date-asc' | 'dur-desc' | 'dur-asc';
    const [sortOrder, setSortOrder] = useState<SortOrder>('default');
    const [showSortPanel, setShowSortPanel] = useState(false);

    // F4 — Multi-selection
    const [selectedGuids, setSelectedGuids] = useState<Set<string>>(new Set());
    const lastSelectedGuidRef = useRef<string | null>(null);
    const filteredEpisodesRef = useRef<Episode[]>([]);

    // Reset all filters and detail panel when switching feed (D1)
    useEffect(() => {
        setSearchQuery('');
        setDateFrom('');
        setDateTo('');
        setShowDateFilter(false);
        setStatusFilter('all');
        setMinDuration(0);
        setMaxDuration(0);
        setShowDurationFilter(false);
        setSortOrder('default');
        setShowSortPanel(false);
        setSelectedGuids(new Set());
        lastSelectedGuidRef.current = null;
        setDetailEpisode(null);
    }, [currentFeed?.url]);

    const [isSyncing, setIsSyncing] = useState(false);

    // G4 — Episode detail panel
    const [detailEpisode, setDetailEpisode] = useState<Episode | null>(null);
    const detailUrl = detailEpisode ? getEnclosureUrl(detailEpisode) : null;
    const detailStatus = useStore((st: AppState) => (detailUrl ? st.downloads[detailUrl] : undefined));
    const [detailArchiveEntry, setDetailArchiveEntry] = useState<ArchiveEntry | null>(null);

    useEffect(() => {
        if (!detailEpisode) { setDetailArchiveEntry(null); return; }
        const url = getEnclosureUrl(detailEpisode);
        const guid = detailEpisode.guid || url || '';
        if (!guid || !downloadedGuids.includes(guid)) { setDetailArchiveEntry(null); return; }
        window.api.getArchive().then(entries => {
            setDetailArchiveEntry(entries.find(e => e.guid === guid) ?? null);
        }).catch(() => setDetailArchiveEntry(null));
    }, [detailEpisode, downloadedGuids]);

    // Virtuoso scroll container — punta al <main id="main-scroll"> in App.tsx
    const [scrollParent, setScrollParent] = useState<HTMLElement | null>(null);
    useEffect(() => {
        setScrollParent(document.getElementById('main-scroll'));
    }, []);

    // ConfirmModal state
    const [confirmState, setConfirmState] = useState<{ isOpen: boolean; title: string; message: string; onConfirm: () => void }>({
        isOpen: false, title: '', message: '', onConfirm: () => { }
    });

    // Initial fetch + push event listener
    const fetchDownloaded = async () => {
        try {
            const guids = await window.api.getDownloadedEpisodes();
            setDownloadedGuids(guids);
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        fetchDownloaded();
        const removeListener = window.api.onDownloadsUpdated((_event, guids) => {
            try { setDownloadedGuids(guids); }
            catch (err) { console.error('Error in onDownloadsUpdated:', err); }
        });
        return () => removeListener();
    }, []);


    const estimateDownloadBytes = (episodes: Episode[]): number => {
        const BYTES_PER_SECOND = 24_000; // 192 kbps — more realistic default for modern podcasts
        const DEFAULT_DURATION_SEC = 45 * 60;
        return episodes.reduce((total, ep) => {
            const mins = parseDurationMinutes(ep.itunes?.duration);
            const secs = mins !== null ? mins * 60 : DEFAULT_DURATION_SEC;
            return total + secs * BYTES_PER_SECOND;
        }, 0);
    };

    // Filtered episodes: search + date range + status + duration
    const filteredEpisodes = useMemo(() => {
        if (!currentFeed) return [];
        let episodes = currentFeed.episodes;

        if (searchQuery) {
            const words = searchQuery.toLowerCase().split(/\s+/).filter(Boolean);
            episodes = episodes.filter((ep: Episode) => {
                const text = [ep.title, ep.contentSnippet].filter(Boolean).join(' ').toLowerCase();
                return words.every(word => text.includes(word));
            });
        }

        if (dateFrom) {
            const from = new Date(dateFrom).getTime();
            episodes = episodes.filter((ep: Episode) => {
                const d = new Date(ep.pubDate || ep.isoDate || '').getTime();
                return !isNaN(d) && d >= from;
            });
        }
        if (dateTo) {
            const to = new Date(dateTo).getTime() + 86400000;
            episodes = episodes.filter((ep: Episode) => {
                const d = new Date(ep.pubDate || ep.isoDate || '').getTime();
                return !isNaN(d) && d <= to;
            });
        }

        if (statusFilter !== 'all') {
            const inProgress = downloadingKeys ? new Set(downloadingKeys.split('\n')) : new Set<string>();
            episodes = episodes.filter((ep: Episode) => {
                const url = getEnclosureUrl(ep);
                const guid = ep.guid || url || '';
                const isDownloaded = guid ? downloadedGuids.includes(guid) : false;
                const isInProgress = url ? inProgress.has(url) : false;
                if (statusFilter === 'downloaded') return isDownloaded;
                return !isDownloaded && !isInProgress;
            });
        }

        if (minDuration > 0 || maxDuration > 0) {
            episodes = episodes.filter((ep: Episode) => {
                const mins = parseDurationMinutes(ep.itunes?.duration);
                if (mins === null) return true;
                if (minDuration > 0 && mins < minDuration) return false;
                if (maxDuration > 0 && mins > maxDuration) return false;
                return true;
            });
        }

        if (sortOrder !== 'default') {
            episodes = [...episodes];
            if (sortOrder === 'date-desc') {
                episodes.sort((a, b) => new Date(b.pubDate || b.isoDate || '').getTime() - new Date(a.pubDate || a.isoDate || '').getTime());
            } else if (sortOrder === 'date-asc') {
                episodes.sort((a, b) => new Date(a.pubDate || a.isoDate || '').getTime() - new Date(b.pubDate || b.isoDate || '').getTime());
            } else if (sortOrder === 'dur-desc') {
                episodes.sort((a, b) => (parseDurationMinutes(b.itunes?.duration) ?? 0) - (parseDurationMinutes(a.itunes?.duration) ?? 0));
            } else if (sortOrder === 'dur-asc') {
                episodes.sort((a, b) => (parseDurationMinutes(a.itunes?.duration) ?? 0) - (parseDurationMinutes(b.itunes?.duration) ?? 0));
            }
        }

        return episodes;
    }, [currentFeed, searchQuery, dateFrom, dateTo, downloadedGuids, downloadingKeys, statusFilter, minDuration, maxDuration, sortOrder]);

    // Keep ref in sync so handleRowClick can read current list without being recreated
    filteredEpisodesRef.current = filteredEpisodes;

    const isOnline = useOnlineStatus();

    const handleDownload = useCallback((episode: Episode, silent = false) => {
        const url = getEnclosureUrl(episode);
        if (!url) { if (!silent) toast.show(t('toast.no_audio'), 'error'); return; }
        const guid = episode.guid || url;
        const imageUrl = typeof currentFeed?.image === 'string' ? currentFeed?.image : currentFeed?.image?.url;
        window.api.startDownload({
            url,
            title: episode.title,
            podcastTitle: currentFeed?.title || '',
            guid,
            pubDate: episode.pubDate || episode.isoDate,
            feedImageUrl: imageUrl,
            feedUrl: currentFeed?.url,
        });
        if (!silent) toast.show(t('toast.download_started'), 'info');
    }, [currentFeed, t, toast]);

    const handleResetStatus = useCallback(async (guid: string) => {
        setConfirmState({
            isOpen: true,
            title: t('episodes.reset_status'),
            message: t('confirm.reset_status'),
            onConfirm: async () => {
                setConfirmState(prev => ({ ...prev, isOpen: false }));
                await window.api.removeDownloadedEpisode(guid);
                toast.show(t('toast.status_reset'), 'success');
            }
        });
    }, [t, toast]);

    // Row click: simple click → detail panel (G4); Ctrl/Shift → multi-selection (F4)
    const handleRowClick = useCallback((episode: Episode, index: number, e: React.MouseEvent) => {
        const url = getEnclosureUrl(episode);
        const guid = episode.guid || url || '';
        if (!guid) return;

        if (e.shiftKey) {
            setSelectedGuids(prev => {
                const next = new Set(prev);
                const lastGuid = lastSelectedGuidRef.current;
                const episodes = filteredEpisodesRef.current;
                const lastIdx = lastGuid
                    ? episodes.findIndex(ep => (ep.guid || getEnclosureUrl(ep) || '') === lastGuid)
                    : -1;
                if (lastIdx !== -1) {
                    const start = Math.min(lastIdx, index);
                    const end = Math.max(lastIdx, index);
                    for (let i = start; i <= end; i++) {
                        const g = episodes[i]?.guid || getEnclosureUrl(episodes[i]) || '';
                        if (g) next.add(g);
                    }
                }
                return next;
            });
            lastSelectedGuidRef.current = guid;
            return;
        }

        if (e.ctrlKey || e.metaKey) {
            setSelectedGuids(prev => {
                const next = new Set(prev);
                if (next.has(guid)) next.delete(guid); else next.add(guid);
                return next;
            });
            lastSelectedGuidRef.current = guid;
            return;
        }

        // Simple click → open detail panel, clear multi-selection
        setSelectedGuids(new Set());
        lastSelectedGuidRef.current = null;
        setDetailEpisode(episode);
    }, []); // stable — reads only refs

    const handleDownloadSelected = useCallback(() => {
        const toDownload = filteredEpisodesRef.current.filter(ep => {
            const url = getEnclosureUrl(ep);
            const guid = ep.guid || url || '';
            return guid && selectedGuids.has(guid) && !downloadedGuids.includes(guid);
        });
        if (toDownload.length === 0) { toast.show(t('toast.all_downloaded'), 'info'); return; }
        const urls = toDownload.map(ep => getEnclosureUrl(ep)).filter((u): u is string => !!u);
        startBatch(urls.length, urls);
        toast.show(t('toast.mass_download_started'), 'success');
        toDownload.forEach(ep => handleDownload(ep, true));
        setSelectedGuids(new Set());
        lastSelectedGuidRef.current = null;
    }, [selectedGuids, downloadedGuids, startBatch, handleDownload, toast, t]);

    // ── Episode row renderer (thin wrapper around the memoized EpisodeRow, B4) ──
    const handleCopyTitle = useCallback((title: string) => {
        navigator.clipboard.writeText(title);
        toast.show(t('toast.title_copied'), 'success');
    }, [toast, t]);

    const renderEpisodeRow = useCallback((index: number, episode: Episode) => {
        const url = getEnclosureUrl(episode);
        const guid = episode.guid || url || '';
        return (
            <EpisodeRow
                episode={episode}
                index={index}
                isSelected={selectedGuids.has(guid)}
                isDownloadedByGuid={downloadedGuids.includes(guid)}
                currentFeedTitle={currentFeed?.title || ''}
                isOnline={isOnline}
                t={t}
                onRowClick={handleRowClick}
                onDownload={handleDownload}
                onResetStatus={handleResetStatus}
                onCopyTitle={handleCopyTitle}
            />
        );
    }, [selectedGuids, downloadedGuids, currentFeed, isOnline, t, handleRowClick, handleDownload, handleResetStatus, handleCopyTitle]);

    if (!currentFeed) return null;

    const handleSyncNew = async () => {
        if (!currentFeed || !isOnline || isSyncing) return;
        setIsSyncing(true);
        try {
            const freshFeed = await window.api.parseFeed(currentFeed.url);
            const newEpisodes = freshFeed.episodes.filter((ep: Episode) => {
                const url = getEnclosureUrl(ep);
                const guid = ep.guid || url || '';
                return guid ? !downloadedGuids.includes(guid) : false;
            });
            if (newEpisodes.length === 0) { toast.show(t('toast.sync_none'), 'info'); return; }

            const CRITICAL_BYTES = 200 * 1024 * 1024;
            const downloadPath = await window.api.getDownloadPath().catch(() => '');
            const diskInfo = await window.api.checkDiskSpace(downloadPath).catch(() => null);
            if (diskInfo && diskInfo.freeBytes < CRITICAL_BYTES) { toast.show(t('diskspace.critical'), 'error'); return; }
            if (diskInfo) {
                const estimatedBytes = estimateDownloadBytes(newEpisodes);
                if (diskInfo.freeBytes < estimatedBytes * 1.2) {
                    toast.show(t('diskspace.low_warning', { free: formatBytes(diskInfo.freeBytes), needed: formatBytes(estimatedBytes) }), 'error');
                }
            }

            const urls = newEpisodes.map((ep: Episode) => getEnclosureUrl(ep)).filter((u): u is string => !!u);
            startBatch(urls.length, urls);
            toast.show(t('toast.sync_queued', { count: newEpisodes.length }), 'success');
            newEpisodes.forEach((ep: Episode) => handleDownload(ep, true));
        } catch {
            toast.show(t('toast.feed_error'), 'error');
        } finally {
            setIsSyncing(false);
        }
    };

    const handleDownloadAll = async () => {
        const episodesToDownload = filteredEpisodes.filter((episode: Episode) => {
            const url = getEnclosureUrl(episode);
            const guid = episode.guid || url;
            return guid && !downloadedGuids.includes(guid);
        });
        if (episodesToDownload.length === 0) { toast.show(t('toast.all_downloaded'), 'info'); return; }

        const downloadPath = await window.api.getDownloadPath().catch(() => '');
        const diskInfo = await window.api.checkDiskSpace(downloadPath).catch(() => null);
        const CRITICAL_BYTES = 200 * 1024 * 1024;
        if (diskInfo && diskInfo.freeBytes < CRITICAL_BYTES) { toast.show(t('diskspace.critical'), 'error'); return; }
        let diskWarning = '';
        if (diskInfo) {
            const estimatedBytes = estimateDownloadBytes(episodesToDownload);
            if (diskInfo.freeBytes < estimatedBytes * 1.2) {
                diskWarning = ' ' + t('diskspace.low_warning', { free: formatBytes(diskInfo.freeBytes), needed: formatBytes(estimatedBytes) });
            }
        }

        setConfirmState({
            isOpen: true,
            title: t('confirm.mass_download_title', 'Batch Download'),
            message: t('confirm.mass_download', { count: episodesToDownload.length }) + diskWarning,
            onConfirm: () => {
                setConfirmState(prev => ({ ...prev, isOpen: false }));
                const urls = episodesToDownload.map((ep: Episode) => getEnclosureUrl(ep)).filter((u): u is string => !!u);
                startBatch(urls.length, urls);
                toast.show(t('toast.mass_download_started'), 'success');
                episodesToDownload.forEach((episode: Episode) => handleDownload(episode, true));
            }
        });
    };

    const handleChangeFolder = async () => {
        const path = await window.api.chooseFolder();
        if (path) {
            await window.api.setDownloadPath(path);
            setDownloadPath(path);
            toast.show(t('toast.folder_selected', { path }), 'success');
        }
    };

    const handleExportM3U = async () => {
        if (!currentFeed) return;
        const result = await window.api.exportM3U(currentFeed.title);
        if (result === true) toast.show(t('toast.m3u_exported'), 'success');
        else if (result === false) toast.show(t('toast.m3u_empty'), 'info');
    };

    const imageUrl = typeof currentFeed.image === 'string' ? currentFeed.image : currentFeed.image?.url;

    // ── Render ────────────────────────────────────────────────────────────────
    const totalEpisodes = currentFeed.episodes.length;
    const archivedCount = currentFeed.episodes.reduce((n, ep) => {
        const u = getEnclosureUrl(ep);
        const g = ep.guid || u || '';
        return g && downloadedGuids.includes(g) ? n + 1 : n;
    }, 0);
    const lastUpdatedStr = currentFeed.lastUpdated
        ? new Date(currentFeed.lastUpdated).toLocaleDateString(undefined, { day: 'numeric', month: 'long', year: 'numeric' })
        : null;

    return (
        <div className="space-y-4 pb-8">

            {/* ── Feed header ───────────────────────────────────────── */}
            <section className="feed-header">
                <div className="feed-header-thumb" aria-hidden="true">
                    {imageUrl ? <img src={imageUrl} alt={currentFeed.title} /> : <span>{(currentFeed.title || '?').slice(0, 2).toUpperCase()}</span>}
                </div>
                <div className="feed-header-info">
                    <p className="feed-header-kicker">{t('episodes.current_feed_kicker', 'Runtime · Feed corrente')}</p>
                    <h2>{currentFeed.title}</h2>
                    <div className="feed-header-meta">
                        <span>{t('episodes.episode_count', { defaultValue: '{{count}} episodi', count: totalEpisodes })}</span>
                        {lastUpdatedStr && (<><span className="sep">·</span><span>{t('episodes.last_update', { defaultValue: 'Ultimo aggiornamento {{date}}', date: lastUpdatedStr })}</span></>)}
                    </div>
                </div>
                <div className="feed-header-actions">
                    <button type="button" className="feed-action" onClick={handleSyncNew} disabled={!isOnline || isSyncing}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={isSyncing ? { animation: 'feedSyncSpin 1s linear infinite' } : undefined}>
                            <path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/>
                        </svg>
                        {t('episodes.sync_new', 'Sincronizza')}
                    </button>
                    <button type="button" className="feed-action" onClick={handleExportM3U}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M3 9h18"/><path d="M3 15h18"/><path d="M9 3v18"/><path d="M15 3v18"/>
                        </svg>
                        {t('episodes.export_m3u', 'Esporta M3U')}
                    </button>
                    <button type="button" className="feed-action" onClick={handleChangeFolder}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                        </svg>
                        {t('episodes.change_folder', 'Cartella')}
                    </button>
                </div>
            </section>

            {/* ── Stats / Download All / Selected ──────────────────── */}
            <div className="flex flex-wrap items-center gap-3" style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--fg-3)' }}>
                <span><strong style={{ color: 'var(--azure-soft)', fontWeight: 600 }}>{totalEpisodes}</strong> {t('episodes.totals', 'totali')}</span>
                <span style={{ color: 'var(--fg-4)' }}>·</span>
                <span><strong style={{ color: 'var(--azure-soft)', fontWeight: 600 }}>{archivedCount}</strong> {t('episodes.archived', 'archiviati')}</span>
                {selectedGuids.size > 0 && (<>
                    <span style={{ color: 'var(--fg-4)' }}>·</span>
                    <span><strong style={{ color: 'var(--azure-soft)', fontWeight: 600 }}>{selectedGuids.size}</strong> {t('episodes.selected', 'selezionati')}</span>
                </>)}
                <div style={{ flex: 1 }} />
                <button type="button" className="feed-action" onClick={handleDownloadAll} disabled={!isOnline}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                    {t('episodes.download_all', 'Scarica tutti')}
                </button>
                {selectedGuids.size > 0 && (
                    <button type="button" className="btn-download-selected" onClick={handleDownloadSelected} disabled={!isOnline}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                        </svg>
                        {t('episodes.download_selected', { defaultValue: 'Scarica · {{count}}', count: selectedGuids.size })}
                    </button>
                )}
            </div>

            {/* ── Filter bar ────────────────────────────────────────────── */}
            <div className="flex flex-col gap-3">
                <div className="flex flex-wrap items-center justify-between gap-4">

                    {/* Status pills */}
                    <div
                        className="flex items-center p-1 rounded-full"
                        style={{ background: 'var(--color-surface-container-low)' }}
                    >
                        {(['all', 'new', 'downloaded'] as const).map(s => (
                            <button
                                key={s}
                                onClick={() => setStatusFilter(s)}
                                className="px-4 py-1.5 rounded-full text-xs font-bold transition-colors"
                                style={statusFilter === s
                                    ? { fontFamily: 'var(--font-label)', background: 'var(--color-primary)', color: 'var(--color-on-primary-fixed)' }
                                    : { fontFamily: 'var(--font-label)', color: 'var(--color-on-surface-variant)' }
                                }
                            >
                                {t(`episodes.filter_${s}`)}
                            </button>
                        ))}
                    </div>

                    {/* Right controls */}
                    <div className="flex items-center gap-4">
                        {/* Search — v0.7.4: multi-word AND + clear button */}
                        <div className="relative flex items-center">
                            <Icon name="search" size={16} style={{ position: 'absolute', left: '0.625rem', color: 'var(--color-on-surface-variant)', pointerEvents: 'none' } as React.CSSProperties} />
                            <input
                                id="episode-filter-input"
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder={t('episodes.filter', 'Cerca...')}
                                className="bg-transparent border-none outline-none text-sm pl-8 py-1"
                                style={{ color: 'var(--color-on-surface)', fontFamily: 'var(--font-body)', paddingRight: searchQuery ? '1.5rem' : '0.75rem' }}
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery('')}
                                    className="hover-text-surface absolute right-1 p-0.5 rounded-full transition-colors"
                                    style={{ color: 'var(--color-on-surface-variant)' }}
                                    title={t('common.clear', 'Pulisci')}
                                >
                                    <Icon name="close" size={14} />
                                </button>
                            )}
                        </div>

                        {/* Date filter toggle */}
                        <button
                            onClick={() => setShowDateFilter(!showDateFilter)}
                            className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full transition-all"
                            style={showDateFilter
                                ? { fontFamily: 'var(--font-label)', color: 'var(--color-primary)', background: 'rgba(173,198,255,0.12)', border: '1px solid var(--color-primary)' }
                                : { fontFamily: 'var(--font-label)', color: 'var(--color-on-surface-variant)', background: 'transparent', border: '1px solid rgba(65,71,85,0.3)' }
                            }
                        >
                            <Icon name="calendar_month" size={14} />
                            {t('episodes.date_filter', 'Data')}
                            {(dateFrom || dateTo) && <span className="w-1.5 h-1.5 rounded-full bg-current ml-0.5" />}
                        </button>

                        {/* Duration filter toggle */}
                        <button
                            onClick={() => setShowDurationFilter(!showDurationFilter)}
                            className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full transition-all"
                            style={showDurationFilter
                                ? { fontFamily: 'var(--font-label)', color: 'var(--color-primary)', background: 'rgba(173,198,255,0.12)', border: '1px solid var(--color-primary)' }
                                : { fontFamily: 'var(--font-label)', color: 'var(--color-on-surface-variant)', background: 'transparent', border: '1px solid rgba(65,71,85,0.3)' }
                            }
                        >
                            <Icon name="schedule" size={14} />
                            {t('episodes.duration_filter', 'Durata')}
                            {(minDuration > 0 || maxDuration > 0) && <span className="w-1.5 h-1.5 rounded-full bg-current ml-0.5" />}
                        </button>

                        {/* Sort toggle */}
                        <button
                            onClick={() => setShowSortPanel(!showSortPanel)}
                            className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full transition-all"
                            style={showSortPanel || sortOrder !== 'default'
                                ? { fontFamily: 'var(--font-label)', color: 'var(--color-primary)', background: 'rgba(173,198,255,0.12)', border: '1px solid var(--color-primary)' }
                                : { fontFamily: 'var(--font-label)', color: 'var(--color-on-surface-variant)', background: 'transparent', border: '1px solid rgba(65,71,85,0.3)' }
                            }
                        >
                            <Icon name="swap_vert" size={14} />
                            {t('episodes.sort_label', 'Ordina')}
                            {sortOrder !== 'default' && <span className="w-1.5 h-1.5 rounded-full bg-current ml-0.5" />}
                        </button>

                        {/* Episode count */}
                        <div className="text-sm" style={{ fontFamily: 'var(--font-label)' }}>
                            <span style={{ color: 'var(--color-primary)', fontWeight: 700 }}>{filteredEpisodes.length}</span>
                            {' '}
                            <span style={{ color: 'var(--color-on-surface-variant)', fontWeight: 400 }}>{t('episodes.count_label', 'episodi')}</span>
                        </div>
                    </div>
                </div>

                {/* Date Filter Panel */}
                {showDateFilter && (
                    <div
                        className="flex flex-wrap items-center gap-3 p-3 rounded-lg"
                        style={{ background: 'var(--color-surface-container)', border: '1px solid rgba(65,71,85,0.2)' }}
                    >
                        <div className="flex items-center gap-2">
                            <label className="text-xs" style={{ color: 'var(--color-on-surface-variant)' }}>{t('episodes.from', 'Da')}</label>
                            <input type="date" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)}
                                className="rounded px-2 py-1 text-sm border-none outline-none"
                                style={{ background: 'var(--color-surface-container-high)', color: 'var(--color-on-surface)' }} />
                        </div>
                        <div className="flex items-center gap-2">
                            <label className="text-xs" style={{ color: 'var(--color-on-surface-variant)' }}>{t('episodes.to', 'A')}</label>
                            <input type="date" value={dateTo} onChange={(e) => setDateTo(e.target.value)}
                                className="rounded px-2 py-1 text-sm border-none outline-none"
                                style={{ background: 'var(--color-surface-container-high)', color: 'var(--color-on-surface)' }} />
                        </div>
                        {(dateFrom || dateTo) && (
                            <button onClick={() => { setDateFrom(''); setDateTo(''); }}
                                className="hover-text-surface text-xs px-2 py-1 rounded transition-colors"
                                style={{ color: 'var(--color-on-surface-variant)' }}
                            >
                                {t('common.clear', 'Cancella')}
                            </button>
                        )}
                    </div>
                )}

                {/* Duration Filter Panel */}
                {showDurationFilter && (
                    <div
                        className="flex flex-wrap items-center gap-3 p-3 rounded-lg"
                        style={{ background: 'var(--color-surface-container)', border: '1px solid rgba(65,71,85,0.2)' }}
                    >
                        <div className="flex items-center gap-2">
                            <label className="text-xs" style={{ color: 'var(--color-on-surface-variant)' }}>{t('episodes.min_duration', 'Min (min)')}</label>
                            <input type="number" min={0} value={minDuration || ''}
                                onChange={(e) => setMinDuration(e.target.value === '' ? 0 : Math.max(0, parseInt(e.target.value, 10) || 0))}
                                className="rounded px-2 py-1 text-sm border-none outline-none w-20"
                                style={{ background: 'var(--color-surface-container-high)', color: 'var(--color-on-surface)' }}
                                placeholder="0" />
                        </div>
                        <div className="flex items-center gap-2">
                            <label className="text-xs" style={{ color: 'var(--color-on-surface-variant)' }}>{t('episodes.max_duration', 'Max (min)')}</label>
                            <input type="number" min={0} value={maxDuration || ''}
                                onChange={(e) => setMaxDuration(e.target.value === '' ? 0 : Math.max(0, parseInt(e.target.value, 10) || 0))}
                                className="rounded px-2 py-1 text-sm border-none outline-none w-20"
                                style={{ background: 'var(--color-surface-container-high)', color: 'var(--color-on-surface)' }}
                                placeholder="0" />
                        </div>
                        {(minDuration > 0 || maxDuration > 0) && (
                            <button onClick={() => { setMinDuration(0); setMaxDuration(0); }}
                                className="hover-text-surface text-xs px-2 py-1 rounded transition-colors"
                                style={{ color: 'var(--color-on-surface-variant)' }}
                            >
                                {t('common.clear', 'Cancella')}
                            </button>
                        )}
                    </div>
                )}
                {/* Sort Panel */}
                {showSortPanel && (
                    <div
                        className="flex flex-wrap items-center gap-2 p-3 rounded-lg"
                        style={{ background: 'var(--color-surface-container)', border: '1px solid rgba(65,71,85,0.2)' }}
                    >
                        {(['default', 'date-desc', 'date-asc', 'dur-desc', 'dur-asc'] as const).map(opt => (
                            <button
                                key={opt}
                                onClick={() => setSortOrder(opt)}
                                className="text-xs px-3 py-1.5 rounded-full transition-colors"
                                style={sortOrder === opt
                                    ? { fontFamily: 'var(--font-label)', background: 'var(--color-primary)', color: 'var(--color-on-primary-fixed)' }
                                    : { fontFamily: 'var(--font-label)', background: 'var(--color-surface-container-high)', color: 'var(--color-on-surface-variant)' }
                                }
                            >
                                {t(`episodes.sort_${opt.replace('-', '_')}`, opt)}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* ── Episode list ──────────────────────────────────────────── */}
            <div className="ep-list">
                <Virtuoso
                    customScrollParent={scrollParent ?? undefined}
                    data={filteredEpisodes}
                    itemContent={renderEpisodeRow}
                />
            </div>

            <ConfirmModal
                isOpen={confirmState.isOpen}
                title={confirmState.title}
                message={confirmState.message}
                variant="warning"
                onConfirm={confirmState.onConfirm}
                onCancel={() => setConfirmState(prev => ({ ...prev, isOpen: false }))}
            />

            {/* G4 — Episode detail panel */}
            {detailEpisode && (() => {
                const url = getEnclosureUrl(detailEpisode);
                const guid = detailEpisode.guid || url || '';
                const status = detailStatus ?? null;
                const isDownloading = !!(status && !status.completed && !status.error);
                const isDownloaded = !!(status?.completed || (guid && downloadedGuids.includes(guid)));
                return (
                    <EpisodeDetailPanel
                        episode={detailEpisode}
                        archiveEntry={detailArchiveEntry}
                        isDownloaded={isDownloaded}
                        isDownloading={isDownloading}
                        isOnline={isOnline}
                        onClose={() => setDetailEpisode(null)}
                        onDownload={() => handleDownload(detailEpisode)}
                        onResetStatus={() => handleResetStatus(guid)}
                        onShowInFolder={() => window.api.showInFolder(currentFeed?.title || '', detailEpisode.title, url, detailEpisode.pubDate || detailEpisode.isoDate)}
                    />
                );
            })()}
        </div>
    );
};
