import React, { useEffect, useState, useMemo, useCallback } from 'react';
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

export const EpisodeList: React.FC = () => {
    const currentFeed = useStore((state: AppState) => state.currentFeed);
    const downloads = useStore((state: AppState) => state.downloads);
    const startBatch = useStore((state: AppState) => state.startBatch);
    const toast = useToast();
    const [downloadedGuids, setDownloadedGuids] = useState<string[]>([]);
    const { t } = useTranslation();
    const [searchQuery, setSearchQuery] = useState('');

    // Date filter state (v0.4.0)
    const [dateFrom, setDateFrom] = useState('');
    const [dateTo, setDateTo] = useState('');
    const [showDateFilter, setShowDateFilter] = useState(false);

    // Status filter (v0.5.2)
    type StatusFilter = 'all' | 'new' | 'downloaded';
    const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');

    // Duration filter state (v0.6.6)
    const [minDuration, setMinDuration] = useState<number>(0);
    const [maxDuration, setMaxDuration] = useState<number>(0);
    const [showDurationFilter, setShowDurationFilter] = useState(false);

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
    }, [currentFeed?.url]);

    // Sync new episodes (v0.5.3)
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


    // v0.6.9 — Estimate download size from episode durations (128 kbps)
    const estimateDownloadBytes = (episodes: Episode[]): number => {
        const BYTES_PER_SECOND = 16_000;
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

        // v0.7.4 — Multi-word AND: all space-separated keywords must match title or snippet
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

        return episodes;
    }, [currentFeed, searchQuery, dateFrom, dateTo, downloadedGuids, downloads, statusFilter, minDuration, maxDuration]);

    const isOnline = useOnlineStatus();

    if (!currentFeed) return null;

    const handleDownload = useCallback((episode: Episode, silent = false) => {
        const url = getEnclosureUrl(episode);
        if (!url) { if (!silent) toast.show(t('toast.no_audio'), 'error'); return; }
        const guid = episode.guid || url;
        const imageUrl = typeof currentFeed?.image === 'string' ? currentFeed.image : currentFeed?.image?.url;
        window.api.startDownload({
            url,
            title: episode.title,
            podcastTitle: currentFeed.title,
            guid,
            pubDate: episode.pubDate || episode.isoDate,
            feedImageUrl: imageUrl
        });
        if (!silent) toast.show(t('toast.download_started'), 'info');
    }, [currentFeed, t, toast]);

    // v0.5.3 — Sync New
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

            // v0.6.9 — Disk space check
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

        // v0.6.9 — Disk space check
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
        if (path) { await window.api.setDownloadPath(path); toast.show(t('toast.folder_selected', { path }), 'success'); }
    };

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

    const imageUrl = typeof currentFeed.image === 'string' ? currentFeed.image : currentFeed.image?.url;

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

        const pubDate = episode.pubDate
            ? new Date(episode.pubDate).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })
            : '';
        const dur = formatDuration(episode.itunes?.duration);

        return (
            <div
                className="group flex items-center gap-4 px-4 py-3 transition-all duration-200 cursor-default"
                style={{
                    background: index % 2 === 0 ? 'var(--color-surface)' : 'var(--color-surface-container-lowest)',
                    borderBottom: '1px solid rgba(65,71,85,0.05)',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'var(--color-surface-container-high)')}
                onMouseLeave={e => (e.currentTarget.style.background = index % 2 === 0 ? 'var(--color-surface)' : 'var(--color-surface-container-lowest)')}
            >
                {/* Index */}
                <span
                    className="w-10 text-xs shrink-0 text-right"
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

                {/* Actions / status */}
                <div className="flex items-center gap-3 shrink-0">
                    {isDownloading ? (
                        <div className="flex items-center gap-2 text-xs" style={{ fontFamily: 'var(--font-label)', color: 'var(--color-primary)' }}>
                            <Icon name="progress_activity" size={16} className="animate-spin" />
                            {progressPercent !== null ? `${progressPercent}%` : t('progress.downloading')}
                        </div>
                    ) : isCompleted ? (
                        <div className="flex items-center gap-1">
                            <button
                                onClick={() => handleResetStatus(guid)}
                                className="opacity-0 group-hover:opacity-100 p-1 rounded transition-all"
                                style={{ color: 'var(--color-on-surface-variant)' }}
                                onMouseEnter={e => { e.currentTarget.style.color = '#fb923c'; }}
                                onMouseLeave={e => { e.currentTarget.style.color = 'var(--color-on-surface-variant)'; }}
                                title={t('episodes.reset_status')}
                            >
                                <Icon name="restart_alt" size={16} />
                            </button>
                            <button
                                onClick={() => window.api.showInFolder(currentFeed.title, episode.title, url, episode.pubDate || episode.isoDate)}
                                className="opacity-0 group-hover:opacity-100 p-1 rounded transition-all"
                                style={{ color: 'var(--color-on-surface-variant)' }}
                                onMouseEnter={e => { e.currentTarget.style.color = 'var(--color-on-surface)'; }}
                                onMouseLeave={e => { e.currentTarget.style.color = 'var(--color-on-surface-variant)'; }}
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
                            className="opacity-0 group-hover:opacity-100 focus:opacity-100 p-1.5 rounded-full transition-all disabled:cursor-not-allowed"
                            style={{ background: 'var(--color-primary-container)', color: 'var(--color-on-primary-container)' }}
                            title={isOnline ? t('episodes.download') : t('toast.offline_error')}
                        >
                            <Icon name="download" size={16} />
                        </button>
                    )}
                </div>
            </div>
        );
    }, [downloads, downloadedGuids, currentFeed, t, isOnline, handleDownload, handleResetStatus]);

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
                            className="flex items-center gap-2 px-4 py-2 rounded text-xs transition-colors"
                            style={{ fontFamily: 'var(--font-label)', background: 'var(--color-surface-container-highest)', color: 'var(--color-on-surface)' }}
                            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(173,198,255,0.1)')}
                            onMouseLeave={e => (e.currentTarget.style.background = 'var(--color-surface-container-highest)')}
                        >
                            <Icon name="folder_open" size={16} />
                            {t('episodes.change_folder')}
                        </button>

                        <button
                            onClick={handleDownloadAll}
                            disabled={!isOnline}
                            className="flex items-center gap-2 px-4 py-2 rounded text-xs transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            style={{ fontFamily: 'var(--font-label)', background: 'var(--color-surface-container-highest)', color: 'var(--color-on-surface)' }}
                            onMouseEnter={e => { if (isOnline) e.currentTarget.style.background = 'rgba(173,198,255,0.1)'; }}
                            onMouseLeave={e => (e.currentTarget.style.background = 'var(--color-surface-container-highest)')}
                        >
                            <Icon name="cloud_download" size={16} />
                            {t('episodes.download_all')}
                        </button>

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
                                    className="absolute right-1 p-0.5 rounded-full transition-colors"
                                    style={{ color: 'var(--color-on-surface-variant)' }}
                                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-on-surface)')}
                                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-on-surface-variant)')}
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

                        {/* Episode count */}
                        <div className="text-sm" style={{ fontFamily: 'var(--font-label)' }}>
                            <span style={{ color: 'var(--color-primary)', fontWeight: 700 }}>{filteredEpisodes.length}</span>
                            {' '}
                            <span style={{ color: 'var(--color-on-surface-variant)', fontWeight: 400 }}>{t('episodes.count_label', 'episodi')}</span>
                        </div>
                    </div>
                </div>

                {/* Date Filter Panel (v0.4.0) */}
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
                                className="text-xs px-2 py-1 rounded transition-colors"
                                style={{ color: 'var(--color-on-surface-variant)' }}
                                onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-on-surface)')}
                                onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-on-surface-variant)')}
                            >
                                {t('common.clear', 'Cancella')}
                            </button>
                        )}
                    </div>
                )}

                {/* Duration Filter Panel (v0.6.6) */}
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
                                className="text-xs px-2 py-1 rounded transition-colors"
                                style={{ color: 'var(--color-on-surface-variant)' }}
                                onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-on-surface)')}
                                onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-on-surface-variant)')}
                            >
                                {t('common.clear', 'Cancella')}
                            </button>
                        )}
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
