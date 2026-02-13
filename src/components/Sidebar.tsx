import React, { useEffect, useState } from 'react';
import { useStore, AppState } from '../store/useStore';
import { Library, Trash2, Podcast, Settings } from 'lucide-react';
import clsx from 'clsx';
import { useToast } from '../context/ToastContext';
import { useTranslation } from 'react-i18next';
import pkg from '../../package.json';
import { SettingsModal } from './SettingsModal';

export const Sidebar: React.FC = () => {
    const [feeds, setFeeds] = useState<any[]>([]);
    const { currentFeed, setCurrentFeed } = useStore((state: AppState) => state);
    const toast = useToast();
    const { t } = useTranslation();
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

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
        // Poll for changes or setup an event listener if possible
        const interval = setInterval(loadFeeds, 2000);
        return () => clearInterval(interval);
    }, []);

    const handleSelectFeed = async (feedUrl: string) => {
        try {
            const feed = await window.api.parseFeed(feedUrl);
            setCurrentFeed({ ...feed, url: feedUrl });
        } catch (e) {
            toast.show("Errore durante il caricamento del feed", 'error');
        }
    };

    const handleRemoveFeed = async (e: React.MouseEvent, url: string) => {
        e.stopPropagation();
        if (confirm("Sei sicuro di voler rimuovere questo feed?")) {
            await window.api.removeFeed(url);
            loadFeeds();
            if (currentFeed?.url === url) {
                // @ts-ignore
                setCurrentFeed(null);
            }
            toast.show("Feed rimosso", 'success');
        }
    };

    return (
        <div className="w-64 bg-black/40 border-r border-white/10 flex flex-col h-screen backdrop-blur-xl sticky top-0 shrink-0">
            <div className="p-6 flex items-center justify-between">
                <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 flex items-center gap-2">
                    <Library size={24} className="text-blue-400" />
                    Libreria
                </h2>
                <button
                    onClick={() => setIsSettingsOpen(true)}
                    className="text-gray-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10"
                    title={t('settings.title', 'Settings')}
                >
                    <Settings size={20} />
                </button>
            </div>

            <div className="flex-1 overflow-y-auto px-4 space-y-2">
                {feeds.length === 0 && (
                    <div className="text-center text-gray-500 mt-10 text-sm">
                        Nessun feed salvato. <br /> Aggiungine uno per iniziare.
                    </div>
                )}

                {feeds.map((feed) => {
                    const imageUrl = typeof feed.image === 'string' ? feed.image : feed.image?.url;
                    const date = new Date(feed.lastUpdated);
                    const isValidDate = !isNaN(date.getTime());

                    return (
                        <div
                            key={feed.url}
                            onClick={() => handleSelectFeed(feed.url)}
                            className={clsx(
                                "p-3 rounded-lg cursor-pointer transition-all flex items-center gap-3 group border border-transparent",
                                currentFeed?.url === feed.url
                                    ? "bg-blue-600/20 border-blue-500/30 text-white"
                                    : "hover:bg-white/5 text-gray-400 hover:text-white"
                            )}
                        >
                            <div className="w-10 h-10 rounded bg-gray-800 flex items-center justify-center shrink-0 overflow-hidden">
                                {imageUrl ? (
                                    <img src={imageUrl} className="w-full h-full object-cover" />
                                ) : (
                                    <Podcast size={18} />
                                )}
                            </div>
                            <div className="min-w-0 flex-1">
                                <h3 className="font-medium truncate text-sm">{feed.title || 'Senza titolo'}</h3>
                                {isValidDate ? (
                                    <p className="text-xs text-gray-500 truncate">{date.toLocaleDateString()}</p>
                                ) : (
                                    <p className="text-xs text-gray-500 truncate">{t('sidebar.invalidDate')}</p>
                                )}
                            </div>

                            <button
                                onClick={(e) => handleRemoveFeed(e, feed.url)}
                                className="opacity-0 group-hover:opacity-100 p-1.5 hover:bg-red-500/20 hover:text-red-400 rounded transition-all"
                                title="Rimuovi"
                            >
                                <Trash2 size={14} />
                            </button>
                        </div>
                    )
                })}
            </div>

            <div className="p-4 border-t border-white/10">
                <p className="text-xs text-center text-gray-600">v{pkg.version}</p>
            </div>

            <SettingsModal isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
        </div>
    );
};
