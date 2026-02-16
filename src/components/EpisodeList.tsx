import React, { useEffect, useState, useMemo } from 'react';
import { useStore, AppState } from '../store/useStore';
import { Download, Check, RefreshCw, FolderOpen, DownloadCloud, RotateCcw, Search } from 'lucide-react';
import { useToast } from '../context/ToastContext';
import { useTranslation } from 'react-i18next';
import { Virtuoso } from 'react-virtuoso';

export const EpisodeList: React.FC = () => {
    const currentFeed = useStore((state: AppState) => state.currentFeed);
    const downloads = useStore((state: AppState) => state.downloads);
    const startBatch = useStore((state: AppState) => state.startBatch);
    const toast = useToast();
    const [downloadedGuids, setDownloadedGuids] = useState<string[]>([]);
    const { t } = useTranslation();
    const [searchQuery, setSearchQuery] = useState('');

    // Refresh downloaded status
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
        // Poll every few seconds to keep sync
        const interval = setInterval(fetchDownloaded, 3000);
        return () => clearInterval(interval);
    }, []);

    const filteredEpisodes = useMemo(() => {
        if (!currentFeed) return [];
        if (!searchQuery) return currentFeed.episodes;

        const lowerQuery = searchQuery.toLowerCase();
        return currentFeed.episodes.filter((ep: any) =>
            (ep.title && ep.title.toLowerCase().includes(lowerQuery)) ||
            (ep.description && ep.description.toLowerCase().includes(lowerQuery)) ||
            (ep.contentSnippet && ep.contentSnippet.toLowerCase().includes(lowerQuery))
        );
    }, [currentFeed, searchQuery]);

    if (!currentFeed) return null;

    const handleDownload = (episode: any, silent = false) => {
        // Enclosure check
        let url = episode.enclosure?.url;
        if (!url && episode.enclosures && episode.enclosures.length > 0) {
            url = episode.enclosures[0].url;
        }

        if (!url) {
            if (!silent) toast.show(t('toast.no_audio'), 'error');
            return;
        }

        // Use proper GUID or fallback to URL/Title hash if needed
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
        if (!confirm(t('confirm.mass_download', { count: filteredEpisodes.length }))) return;

        const episodesToDownload = filteredEpisodes.filter((episode: any) => {
            let url = episode.enclosure?.url || (episode.enclosures && episode.enclosures[0]?.url);
            const guid = episode.guid || url;
            return !downloadedGuids.includes(guid);
        });

        if (episodesToDownload.length === 0) {
            toast.show(t('toast.all_downloaded'), 'info');
            return;
        }

        startBatch(episodesToDownload.length);
        toast.show(t('toast.mass_download_started'), 'success');

        episodesToDownload.forEach((episode: any) => {
            handleDownload(episode, true);
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
        if (confirm(t('confirm.reset_status'))) {
            await window.api.removeDownloadedEpisode(guid);
            await fetchDownloaded();
            toast.show(t('toast.status_reset'), 'success');
        }
    }

    const imageUrl = typeof currentFeed.image === 'string'
        ? currentFeed.image
        : currentFeed.image?.url;

    const isOnline = navigator.onLine;

    const renderEpisodeRow = (_index: number, episode: any) => {
        // Check status
        let url = episode.enclosure?.url;
        if (!url && episode.enclosures && episode.enclosures.length > 0) url = episode.enclosures[0].url;

        const guid = episode.guid || url;

        const status = url ? downloads[url] : null;
        const isDownloading = status && !status.completed && !status.error;
        // Check persistent store OR current session state
        const isCompleted = status?.completed || downloadedGuids.includes(guid);

        return (
            <div className="glass-card p-4 flex items-center gap-4 hover:bg-white/5 transition-colors group mb-2 mx-1">
                <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-gray-200 truncate">{episode.title}</h3>
                    <p className="text-sm text-gray-500">{new Date(episode.pubDate).toLocaleDateString()}</p>
                </div>

                {isDownloading ? (
                    <div className="text-blue-400 text-sm font-mono flex items-center gap-2">
                        <RefreshCw className="animate-spin" size={14} />
                        {Math.round((status.loaded / status.total) * 100)}%
                    </div>
                ) : isCompleted ? (
                    <div className="flex items-center gap-2 group/actions">
                        {/* Hidden by default, visible on hover/group-hover */}
                        <button
                            onClick={() => handleResetStatus(guid)}
                            className="p-1.5 text-gray-500 hover:text-orange-400 hover:bg-white/10 rounded-lg transition-colors opacity-0 group-hover/actions:opacity-100"
                            title={t('episodes.reset_status', "Dimentica download")}
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
                        title={isOnline ? t('episodes.download') : t('toast.offline_error', 'Offline')}
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

                        <span className="text-gray-500 text-sm ml-2">
                            {t('episodes.count', { count: currentFeed.episodes.length })}
                        </span>
                    </div>

                    {/* Search Bar */}
                    <div className="mt-4 relative max-w-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search size={16} className="text-gray-500" />
                        </div>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder={t('episodes.filter', 'Filtra episodi...')}
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
        </div>
    );
};
