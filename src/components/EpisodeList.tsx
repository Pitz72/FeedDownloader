import React, { useEffect, useState, useMemo, useCallback, useRef } from 'react';
import { useStore, AppState } from '../store/useStore';
import { Icon } from './Icon';
import { useToast } from '../context/ToastContext';
import { useTranslation } from 'react-i18next';
import { Virtuoso } from 'react-virtuoso';
import { ConfirmModal } from './ConfirmModal';
import type { Episode } from '../../shared/types';
import { getEnclosureUrl } from '../../shared/getEnclosureUrl';
import { useOnlineStatus } from '../hooks/useOnlineStatus';

function parseDurationMinutes(duration?: string): number | null {
    if (!duration) return null;
    const trimmed = duration.trim();
    if (/^\d+$/.test(trimmed)) return Math.floor(parseInt(trimmed, 10) / 60);
    const parts = trimmed.split(':').map(p => parseInt(p, 10));
    if (parts.some(isNaN)) return null;
    if (parts.length === 3) return parts[0] * 60 + parts[1];
    if (parts.length === 2) return parts[0];
    return null;
}

function formatDuration(duration?: string): string | null {
    const mins = parseDurationMinutes(duration);
    if (mins === null) return null;
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    if (h > 0) return `${h}h ${m}m`;
    return `${m} min`;
}

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

export const EpisodeList: React.FC = () => {
    const currentFeed = useStore((state: AppState) => state.currentFeed);
    const downloads = useStore((state: AppState) => state.downloads);
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

    // Reset all filters when switching feed (D1)
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
    }, [currentFeed?.url]);

    const [isSyncing, setIsSyncing] = useState(false);

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
            episodes = episodes.filter((ep: Episode) => {
                const url = getEnclosureUrl(ep);
                const guid = ep.guid || url || '';
                const isDownloaded = guid ? downloadedGuids.includes(guid) : false;
                const isInProgress = url ? url in downloads : false;
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
    }, [currentFeed, searchQuery, dateFrom, dateTo, downloadedGuids, downloads, statusFilter, minDuration, maxDuration, sortOrder]);

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
            feedImageUrl: imageUrl
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

    // F4 — Row click toggles selection; Shift extends range, Ctrl/Cmd toggles individual
    const handleRowClick = useCallback((episode: Episode, index: number, e: React.MouseEvent) => {
        const url = getEnclosureUrl(episode);
        const guid = episode.guid || url || '';
        if (!guid) return;
        setSelectedGuids(prev => {
            const next = new Set(prev);
            if (e.shiftKey) {
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
                    return next;
                }
            }
            if (e.ctrlKey || e.metaKey) {
                if (next.has(guid)) next.delete(guid); else next.add(guid);
            } else {
                if (next.has(guid) && next.size === 1) next.clear();
                else { next.clear(); next.add(guid); }
            }
            return next;
        });
        lastSelectedGuidRef.current = guid;
    }, []); // stable — reads only refs

    const handleDownloadSelected = useCallback(() => {
        const toDownload = filteredEpisodesRef.current.filter(ep => {
            const url = getEnclosureUrl(ep);
            const guid = ep.guid || url || '';
            return guid && selectedGuids.has(guid) && !downloadedGuids.includes(guid);
        });
        if (toDownload.length === 0) { toast.show(t('toast.all_downloaded'), 'info'); return; }
        startBatch(toDownload.length);
        toast.show(t('toast.mass_download_started'), 'success');
        toDownload.forEach(ep => handleDownload(ep, true));
        setSelectedGuids(new Set());
        lastSelectedGuidRef.current = null;
    }, [selectedGuids, downloadedGuids, startBatch, handleDownload, toast, t]);

    // ── Episode row renderer ──────────────────────────────────────────────────
    const renderEpisodeRow = useCallback((index: number, episode: Episode) => {
        const url = getEnclosureUrl(episode);
        const guid = episode.guid || url || '';
        const status = url ? downloads[url] : null;
        const isDownloading = status && !status.completed && !status.error;
        const isCompleted = status?.completed || downloadedGuids.includes(guid);
        const progressPercent = (status && status.total && status.total > 0)
            ? Math.round((status.loaded / status.total) * 100)
            : null;
        const isSelected = selectedGuids.has(guid);

        const pubDate = episode.pubDate
            ? new Date(episode.pubDate).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })
            : '';
        const dur = formatDuration(episode.itunes?.duration);

        return (
            <div
                className="episode-row group flex items-center gap-4 px-4 py-3 cursor-pointer select-none"
                onClick={(e) => handleRowClick(episode, index, e)}
                style={{
                    background: isSelected
                        ? 'rgba(173,198,255,0.1)'
                        : (index % 2 === 0 ? 'var(--color-surface)' : 'var(--color-surface-container-lowest)'),
                    borderBottom: '1px solid rgba(65,71,85,0.05)',
                    borderLeft: isSelected ? '2px solid var(--color-primary)' : '2px solid transparent',
                }}
            >
                {/* Checkbox (visible on hover or when selected) */}
                <div className={`w-5 h-5 shrink-0 flex items-center justify-center transition-opacity ${isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                    <Icon
                        name={isSelected ? 'check_box' : 'check_box_outline_blank'}
                        size={16}
                        style={{ color: isSelected ? 'var(--color-primary)' : 'var(--color-on-surface-variant)' }}
                    />
                </div>

                {/* Index */}
                <span
                    className="w-8 text-xs shrink-0 text-right"
                    style={{ fontFamily: 'var(--font-label)', color: 'var(--color-on-surface-variant)' }}
                >
                    {String(index + 1).padStart(2, '0')}.
                </span>

                {/* Info */}
                <div className="flex-1 min-w-0">
                    <h4
                        className="text-sm font-bold truncate transition-colors"
                        style={{ color: 'var(--color-on-surface)' }}
                    >
                        {episode.title}
                    </h4>
                    <div className="flex items-center gap-4 mt-0.5">
                        {pubDate && (
                            <span
                                className="text-[10px] uppercase tracking-wide"
                                style={{ fontFamily: 'var(--font-label)', color: 'var(--color-on-surface-variant)' }}
                            >
                                {pubDate}
                            </span>
                        )}
                        {dur && (
                            <span
                                className="text-[10px] uppercase tracking-wide"
                                style={{ fontFamily: 'var(--font-label)', color: 'var(--color-on-surface-variant)' }}
                            >
                                {dur}
                            </span>
                        )}
                    </div>
                </div>

                {/* Actions / status — stop propagation so clicks don't toggle row selection */}
                <div className="flex items-center gap-3 shrink-0" onClick={(e) => e.stopPropagation()}>
                    {isDownloading ? (
                        <div className="flex flex-col items-end gap-0.5 text-xs" style={{ fontFamily: 'var(--font-label)', color: 'var(--color-primary)' }}>
                            <div className="flex items-center gap-2">
                                <Icon name="progress_activity" size={16} className="animate-spin" />
                                {progressPercent !== null ? `${progressPercent}%` : t('progress.downloading')}
                            </div>
                            {status?.speed !== undefined && status.speed > 0 && (
                                <span style={{ color: 'var(--color-on-surface-variant)', fontSize: '10px' }}>
                                    {formatSpeed(status.speed)}
                                    {status.eta !== undefined && status.eta > 0 && ` · ${formatEta(status.eta)}`}
                                </span>
                            )}
                        </div>
                    ) : isCompleted ? (
                        <div className="flex items-center gap-1">
                            <button
                                onClick={() => handleDownload(episode)}
                                disabled={!isOnline}
                                className="hover-text-primary opacity-0 group-hover:opacity-100 p-1 rounded transition-all disabled:cursor-not-allowed"
                                style={{ color: 'var(--color-on-surface-variant)' }}
                                title={t('episodes.redownload')}
                            >
                                <Icon name="download" size={16} />
                            </button>
                            <button
                                onClick={() => handleResetStatus(guid)}
                                className="hover-text-warning opacity-0 group-hover:opacity-100 p-1 rounded transition-all"
                                style={{ color: 'var(--color-on-surface-variant)' }}
                                title={t('episodes.reset_status')}
                            >
                                <Icon name="restart_alt" size={16} />
                            </button>
                            <button
                                onClick={() => window.api.showInFolder(currentFeed?.title || '', episode.title, url, episode.pubDate || episode.isoDate)}
                                className="hover-text-surface opacity-0 group-hover:opacity-100 p-1 rounded transition-all"
                                style={{ color: 'var(--color-on-surface-variant)' }}
                                title={t('episodes.open_folder')}
                            >
                                <Icon name="folder_open" size={16} />
                            </button>
                            <Icon name="check_circle" size={20} filled className="text-[var(--color-secondary)]" style={{ color: 'var(--color-secondary)' }} />
                        </div>
                    ) : (
                        <button
                            onClick={() => handleDownload(episode)}
                            disabled={!isOnline}
                            className="opacity-0 group-hover:opacity-100 focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] p-1.5 rounded-full transition-all disabled:cursor-not-allowed"
                            style={{ background: 'var(--color-primary-container)', color: 'var(--color-on-primary-container)' }}
                            title={isOnline ? t('episodes.download') : t('toast.offline_error')}
                        >
                            <Icon name="download" size={16} />
                        </button>
                    )}
                </div>
            </div>
        );
    }, [downloads, downloadedGuids, currentFeed, t, isOnline, handleDownload, handleResetStatus, selectedGuids, handleRowClick]);

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

            startBatch(newEpisodes.length);
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
                startBatch(episodesToDownload.length);
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
    return (
        <div className="space-y-4 pb-8">

            {/* ── Podcast header (bento) ─────────────────────────────────── */}
            <section
                className="bento-card rounded-xl overflow-hidden flex flex-col md:flex-row gap-8 p-8"
                style={{ borderTop: '1px solid rgba(65,71,85,0.1)' }}
            >
                {/* Cover art */}
                <div className="w-full md:w-56 h-56 shrink-0 relative group rounded-lg overflow-hidden shadow-2xl">
                    {imageUrl ? (
                        <img src={imageUrl} className="w-full h-full object-cover" alt={currentFeed.title} />
                    ) : (
                        <div
                            className="w-full h-full flex items-center justify-center text-5xl"
                            style={{ background: 'var(--color-surface-container-high)' }}
                        >
                            🎙️
                        </div>
                    )}
                </div>

                {/* Info + actions */}
                <div className="flex-1 flex flex-col justify-center min-w-0">
                    <h2
                        className="text-3xl font-extrabold tracking-tight mb-3 truncate"
                        style={{ fontFamily: 'var(--font-headline)', color: 'var(--color-on-surface)' }}
                    >
                        {currentFeed.title}
                    </h2>
                    {currentFeed.description && (
                        <p
                            className="text-sm leading-relaxed mb-6 line-clamp-3"
                            style={{ color: 'var(--color-on-surface-variant)' }}
                        >
                            {currentFeed.description}
                        </p>
                    )}

                    {/* Action buttons */}
                    <div className="flex flex-wrap gap-2">
                        <button
                            onClick={handleChangeFolder}
                            className="hover-bg-primary-tinted flex items-center gap-2 px-4 py-2 rounded text-xs transition-colors"
                            style={{ fontFamily: 'var(--font-label)', background: 'var(--color-surface-container-highest)', color: 'var(--color-on-surface)' }}
                        >
                            <Icon name="folder_open" size={16} />
                            {t('episodes.change_folder')}
                        </button>

                        <button
                            onClick={handleExportM3U}
                            className="hover-bg-primary-tinted flex items-center gap-2 px-4 py-2 rounded text-xs transition-colors"
                            style={{ fontFamily: 'var(--font-label)', background: 'var(--color-surface-container-highest)', color: 'var(--color-on-surface)' }}
                        >
                            <Icon name="playlist_add_check" size={16} />
                            {t('episodes.export_m3u')}
                        </button>

                        <button
                            onClick={handleDownloadAll}
                            disabled={!isOnline}
                            className="hover-bg-primary-tinted flex items-center gap-2 px-4 py-2 rounded text-xs transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            style={{ fontFamily: 'var(--font-label)', background: 'var(--color-surface-container-highest)', color: 'var(--color-on-surface)' }}
                        >
                            <Icon name="cloud_download" size={16} />
                            {t('episodes.download_all')}
                        </button>

                        {selectedGuids.size > 0 && (
                            <button
                                onClick={handleDownloadSelected}
                                disabled={!isOnline}
                                className="btn-primary-gradient flex items-center gap-2 px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <Icon name="download" size={16} />
                                {t('episodes.download_selected', { count: selectedGuids.size })}
                            </button>
                        )}

                        <button
                            onClick={handleSyncNew}
                            disabled={!isOnline || isSyncing}
                            className="btn-primary-gradient flex items-center gap-2 px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <Icon name="sync" size={16} className={isSyncing ? 'animate-spin' : ''} />
                            {t('episodes.sync_new')}
                        </button>
                    </div>
                </div>
            </section>

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
            <div className="rounded-xl overflow-hidden" style={{ background: 'var(--color-surface)' }}>
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
        </div>
    );
};
