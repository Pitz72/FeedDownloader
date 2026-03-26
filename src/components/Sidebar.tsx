import React, { useEffect, useState } from 'react';
import { useStore, AppState } from '../store/useStore';
import { Library, Trash2, Podcast, Settings, Loader2 } from 'lucide-react';
import clsx from 'clsx';
import { useToast } from '../context/ToastContext';
import { useTranslation } from 'react-i18next';
import { ConfirmModal } from './ConfirmModal';
import type { FeedEntry } from '../../shared/types';

interface SidebarProps {
    onSettingsOpen: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ onSettingsOpen }) => {
    const [feeds, setFeeds] = useState<FeedEntry[]>([]);
    const { currentFeed, setCurrentFeed } = useStore((state: AppState) => state);
    const toast = useToast();
    const { t } = useTranslation();
    const [loadingUrl, setLoadingUrl] = useState<string | null>(null);

    // ConfirmModal state
    const [confirmState, setConfirmState] = useState<{ isOpen: boolean; url: string }>({
        isOpen: false, url: ''
    });

    const loadFeeds = async () => {
        try {
            const loadedFeeds = await window.api.getFeeds();
            setFeeds(loadedFeeds);
        } catch (error) {
            console.error("Failed to load feeds", error);
        }
    };

    useEffect(() => {
        loadFeeds();
        // Push event instead of polling (v0.4.0)
        const removeListener = window.api.onFeedsUpdated((_event, updatedFeeds) => {
            try {
                setFeeds(updatedFeeds);
            } catch (err) {
                console.error('Error in onFeedsUpdated:', err);
            }
        });
        return () => removeListener();
    }, []);

    const handleSelectFeed = async (feedUrl: string) => {
        // Skip re-fetch if it's the same feed already loaded
        if (currentFeed?.url === feedUrl) return;

        setLoadingUrl(feedUrl);
        try {
            const feed = await window.api.parseFeed(feedUrl);
            setCurrentFeed({ ...feed, url: feedUrl });
        } catch (e) {
            toast.show(t('toast.feed_error'), 'error');
        } finally {
            setLoadingUrl(null);
        }
    };

    const handleRemoveFeed = (e: React.MouseEvent, url: string) => {
        e.stopPropagation();
        setConfirmState({ isOpen: true, url });
    };

    const confirmRemoveFeed = async () => {
        const url = confirmState.url;
        setConfirmState({ isOpen: false, url: '' });
        await window.api.removeFeed(url);
        if (currentFeed?.url === url) {
            setCurrentFeed(null);
        }
        toast.show(t('toast.feed_removed'), 'success');
    };

    return (
        <div className="w-80 bg-black/40 border-r border-white/10 flex flex-col h-screen backdrop-blur-xl sticky top-0 shrink-0">
            <div className="p-6 flex items-center justify-between">
                <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 flex items-center gap-2">
                    <Library size={24} className="text-blue-400" />
                    {t('sidebar.my_feeds', 'Libreria')}
                </h2>
                <button
                    onClick={onSettingsOpen}
                    className="text-gray-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10"
                    title={t('settings.title')}
                >
                    <Settings size={20} />
                </button>
            </div>

            <div className="flex-1 overflow-y-auto px-4 space-y-2 custom-scrollbar">
                {feeds.length === 0 && (
                    <div className="text-center text-gray-500 mt-10 text-sm">
                        {t('sidebar.no_feeds')}
                    </div>
                )}

                {feeds.map((feed) => {
                    const imageUrl = typeof feed.image === 'string' ? feed.image : feed.image?.url;
                    const date = new Date(feed.lastUpdated ?? '');
                    const isValidDate = !isNaN(date.getTime());

                    return (
                        <div
                            key={feed.url}
                            onClick={() => handleSelectFeed(feed.url)}
                            className={clsx(
                                "p-3 rounded-lg cursor-pointer transition-all flex items-center gap-3 group border border-transparent",
                                loadingUrl === feed.url
                                    ? "bg-blue-600/10 border-blue-500/20 text-white opacity-80"
                                    : currentFeed?.url === feed.url
                                    ? "bg-blue-600/20 border-blue-500/30 text-white"
                                    : "hover:bg-white/5 text-gray-400 hover:text-white"
                            )}
                        >
                            <div className="w-10 h-10 rounded bg-gray-800 flex items-center justify-center shrink-0 overflow-hidden">
                                {loadingUrl === feed.url ? (
                                    <Loader2 size={18} className="animate-spin text-blue-400" />
                                ) : imageUrl ? (
                                    <img src={imageUrl} className="w-full h-full object-cover" alt={feed.title || ''} />
                                ) : (
                                    <Podcast size={18} />
                                )}
                            </div>
                            <div className="min-w-0 flex-1">
                                <h3 className="font-medium truncate text-sm">{feed.title || t('sidebar.untitled', 'Untitled')}</h3>
                                {isValidDate ? (
                                    <p className="text-xs text-gray-500 truncate">{date.toLocaleDateString()}</p>
                                ) : (
                                    <p className="text-xs text-gray-500 truncate">{t('sidebar.invalid_date')}</p>
                                )}
                            </div>

                            <button
                                onClick={(e) => handleRemoveFeed(e, feed.url)}
                                className="opacity-0 group-hover:opacity-100 p-1.5 hover:bg-red-500/20 hover:text-red-400 rounded transition-all"
                                title={t('sidebar.remove', 'Remove')}
                            >
                                <Trash2 size={14} />
                            </button>
                        </div>
                    )
                })}
            </div>

            <div className="p-4 border-t border-white/10">
                <p className="text-xs text-center text-gray-600">v{__APP_VERSION__}</p>
            </div>

            <ConfirmModal
                isOpen={confirmState.isOpen}
                title={t('confirm.remove_feed_title', 'Remove Feed')}
                message={t('confirm.remove_feed')}
                variant="danger"
                onConfirm={confirmRemoveFeed}
                onCancel={() => setConfirmState({ isOpen: false, url: '' })}
            />
        </div>
    );
};
