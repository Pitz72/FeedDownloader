import React, { useEffect, useState, useMemo } from 'react';
import { useStore, AppState } from '../store/useStore';
import { Download, Check, RefreshCw, FolderOpen, DownloadCloud, RotateCcw, Search, Calendar } from 'lucide-react';
import { useToast } from '../context/ToastContext';
import { useTranslation } from 'react-i18next';
import { Virtuoso } from 'react-virtuoso';
import { ConfirmModal } from './ConfirmModal';
import type { Episode } from '../../shared/types';
import { getEnclosureUrl } from '../../shared/getEnclosureUrl';

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

    // ConfirmModal state
    const [confirmState, setConfirmState] = useState<{ isOpen: boolean; title: string; message: string; onConfirm: () => void }>({
        isOpen: false, title: '', message: '', onConfirm: () => { }
    });

    // Initial fetch + push event listener (no more polling!)
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
            try {
                setDownloadedGuids(guids);
            } catch (err) {
                console.error('Error in onDownloadsUpdated:', err);
            }
        });
        return () => removeListener();
    }, []);

    // Filtered episodes: search + date range
    const filteredEpisodes = useMemo(() => {
        if (!currentFeed) return [];
        let episodes = currentFeed.episodes;

        // Text search
        if (searchQuery) {
            const lowerQuery = searchQuery.toLowerCase();
            episodes = episodes.filter((ep: Episode) =>
                (ep.title && ep.title.toLowerCase().includes(lowerQuery)) ||
                (ep.contentSnippet && ep.contentSnippet.toLowerCase().includes(lowerQuery))
            );
        }

        // Date filter (v0.4.0)
        if (dateFrom) {
            const from = new Date(dateFrom).getTime();
            episodes = episodes.filter((ep: Episode) => {
                const d = new Date(ep.pubDate || ep.isoDate || '').getTime();
                return !isNaN(d) && d >= from;
            });
        }
        if (dateTo) {
            const to = new Date(dateTo).getTime() + 86400000; // end of day
            episodes = episodes.filter((ep: Episode) => {
                const d = new Date(ep.pubDate || ep.isoDate || '').getTime();
                return !isNaN(d) && d <= to;
            });
        }

        return episodes;
    }, [currentFeed, searchQuery, dateFrom, dateTo]);

    if (!currentFeed) return null;

    const handleDownload = (episode: Episode, silent = false) => {
        const url = getEnclosureUrl(episode);

        if (!url) {
            if (!silent) toast.show(t('toast.no_audio'), 'error');
            return;
        }

        const guid = episode.guid || url;

        window.api.startDownload({
            url,
            title: episode.title,
            podcastTitle: currentFeed.title,
            guid,
            pubDate: episode.pubDate || episode.isoDate
        });

        if (!silent) toast.show(t('toast.download_started'), 'info');
    };

    const handleDownloadAll = () => {
        const episodesToDownload = filteredEpisodes.filter((episode: Episode) => {
            const url = getEnclosureUrl(episode);
            const guid = episode.guid || url;
            return guid && !downloadedGuids.includes(guid);
        });

        if (episodesToDownload.length === 0) {
            toast.show(t('toast.all_downloaded'), 'info');
            return;
        }

        setConfirmState({
            isOpen: true,
            title: t('confirm.mass_download_title', 'Batch Download'),
            message: t('confirm.mass_download', { count: episodesToDownload.length }),
            onConfirm: () => {
                setConfirmState(prev => ({ ...prev, isOpen: false }));
                startBatch(episodesToDownload.length);
                toast.show(t('toast.mass_download_started'), 'success');
                episodesToDownload.forEach((episode: Episode) => {
                    handleDownload(episode, true);
                });
            }
        });
    };

    const handleChangeFolder = async () => {
        const path = await window.api.chooseFolder();
        if (path) {
            await window.api.setDownloadPath(path);
            toast.show(t('toast.folder_selected', { path }), 'success');
        }
    };

    const handleResetStatus = async (guid: string) => {
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
    };

    const imageUrl = typeof currentFeed.image === 'string'
        ? currentFeed.image
        : currentFeed.image?.url;

    const isOnline = navigator.onLine;

    const renderEpisodeRow = (_index: number, episode: Episode) => {
        const url = getEnclosureUrl(episode);

        const guid = episode.guid || url || '';

        const status = url ? downloads[url] : null;
        const isDownloading = status && !status.completed && !status.error;
        const isCompleted = status?.completed || downloadedGuids.includes(guid);

        // Safe progress: handle missing Content-Length (v0.4.0 fix)
        const progressPercent = (status && status.total && status.total > 0)
            ? Math.round((status.loaded / status.total) * 100)
            : null;

        return (
            <div className="glass-card p-4 flex items-center gap-4 hover:bg-white/5 transition-colors group mb-2 mx-1">
                <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-gray-200 truncate">{episode.title}</h3>
                    <p className="text-sm text-gray-500">{episode.pubDate ? new Date(episode.pubDate).toLocaleDateString() : ''}</p>
                </div>

                {isDownloading ? (
                    <div className="text-blue-400 text-sm font-mono flex items-center gap-2">
                        <RefreshCw className="animate-spin" size={14} />
                        {progressPercent !== null ? `${progressPercent}%` : t('progress.downloading')}
                    </div>
                ) : isCompleted ? (
                    <div className="flex items-center gap-2 group/actions">
                        <button
                            onClick={() => handleResetStatus(guid)}
                            className="p-1.5 text-gray-500 hover:text-orange-400 hover:bg-white/10 rounded-lg transition-colors opacity-0 group-hover/actions:opacity-100"
                            title={t('episodes.reset_status')}
                        >
                            <RotateCcw size={18} />
                        </button>

                        <button
                            onClick={() => window.api.showInFolder(currentFeed.title, episode.title)}
                            className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                            title={t('episodes.open_folder')}
                        >
                            <FolderOpen size={18} />
                        </button>
                        <div className="text-green-500 flex items-center gap-1" title={t('episodes.downloaded')}>
                            <Check size={20} />
                        </div>
                    </div>
                ) : (
                    <button
                        onClick={() => handleDownload(episode)}
                        disabled={!isOnline}
                        className={`p-2 rounded-full transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100 ${!isOnline ? 'cursor-not-allowed opacity-50' : 'hover:bg-white/10'}`}
                        title={isOnline ? t('episodes.download') : t('toast.offline_error')}
                    >
                        <Download size={20} className={isOnline ? "text-gray-300" : "text-gray-600"} />
                    </button>
                )}
            </div>
        );
    };

    return (
        <div className="max-w-3xl mx-auto mt-8 pb-20">
            <div className="flex items-center gap-6 mb-8">
                {imageUrl ? (
                    <img src={imageUrl} className="w-32 h-32 rounded-lg shadow-lg object-cover" alt={currentFeed.title} />
                ) : (
                    <div className="w-32 h-32 bg-gray-700 rounded-lg flex items-center justify-center text-4xl">🎙️</div>
                )}
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">{currentFeed.title}</h1>
                    <p className="text-gray-400 line-clamp-2">{currentFeed.description}</p>

                    {/* Toolbar */}
                    <div className="mt-4 flex flex-wrap items-center gap-3">
                        <button
                            onClick={handleChangeFolder}
                            className="flex items-center gap-2 px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-lg text-sm transition-colors"
                        >
                            <FolderOpen size={16} />
                            {t('episodes.change_folder')}
                        </button>

                        <button
                            onClick={handleDownloadAll}
                            disabled={!isOnline}
                            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm transition-colors ${!isOnline
                                ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                                : 'bg-blue-600 hover:bg-blue-500 text-white'}`}
                        >
                            <DownloadCloud size={16} />
                            {t('episodes.download_all')}
                        </button>

                        <button
                            onClick={() => setShowDateFilter(!showDateFilter)}
                            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm transition-colors ${showDateFilter ? 'bg-blue-600/30 text-blue-300 border border-blue-500/30' : 'bg-white/10 hover:bg-white/20 text-gray-300'}`}
                            title={t('episodes.date_filter', 'Filter by date')}
                        >
                            <Calendar size={16} />
                            {t('episodes.date_filter', 'Date Filter')}
                        </button>

                        <span className="text-gray-500 text-sm ml-2">
                            {t('episodes.count', { count: filteredEpisodes.length })}
                        </span>
                    </div>

                    {/* Date Filter Panel (v0.4.0) */}
                    {showDateFilter && (
                        <div className="mt-3 flex flex-wrap items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-lg">
                            <div className="flex items-center gap-2">
                                <label className="text-xs text-gray-400">{t('episodes.from', 'From')}</label>
                                <input
                                    type="date"
                                    value={dateFrom}
                                    onChange={(e) => setDateFrom(e.target.value)}
                                    className="bg-black/30 border border-white/10 rounded px-2 py-1 text-sm text-gray-300 focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            <div className="flex items-center gap-2">
                                <label className="text-xs text-gray-400">{t('episodes.to', 'To')}</label>
                                <input
                                    type="date"
                                    value={dateTo}
                                    onChange={(e) => setDateTo(e.target.value)}
                                    className="bg-black/30 border border-white/10 rounded px-2 py-1 text-sm text-gray-300 focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            {(dateFrom || dateTo) && (
                                <button
                                    onClick={() => { setDateFrom(''); setDateTo(''); }}
                                    className="text-xs text-gray-400 hover:text-white px-2 py-1 hover:bg-white/10 rounded transition-colors"
                                >
                                    {t('common.clear', 'Clear')}
                                </button>
                            )}
                        </div>
                    )}

                    {/* Search Bar */}
                    <div className="mt-4 relative max-w-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search size={16} className="text-gray-500" />
                        </div>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder={t('episodes.filter', 'Filter episodes...')}
                            className="block w-full pl-10 pr-3 py-2 border border-white/10 rounded-lg leading-5 bg-black/20 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors"
                        />
                    </div>
                </div>
            </div>

            <Virtuoso
                useWindowScroll
                data={filteredEpisodes}
                itemContent={renderEpisodeRow}
            />

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
