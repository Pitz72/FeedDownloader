import React, { useState } from 'react';
import { useStore, AppState } from '../store/useStore';
import { Search, Loader2, FolderOpen } from 'lucide-react';
import { useToast } from '../context/ToastContext';
import { useTranslation } from 'react-i18next';

export const UrlInput: React.FC = () => {
    const [url, setUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const setCurrentFeed = useStore((state: AppState) => state.setCurrentFeed);
    const toast = useToast();
    const { t } = useTranslation();

    const handleAnalyze = async () => {
        if (!url) return;
        if (!navigator.onLine) {
            toast.show(t('toast.offline_error'), 'error');
            return;
        }

        setLoading(true);
        try {
            const feed = await window.api.parseFeed(url);
            const fullFeed = { ...feed, url };
            setCurrentFeed(fullFeed);
            await window.api.addFeed(fullFeed);
        } catch (error: any) {
            console.error(error);
            let msg = t('toast.parse_error', 'Could not parse the feed.');
            if (error.message?.includes('INVALID_FEED_TYPE')) msg = t('toast.invalid_feed', 'Invalid URL: this is a webpage, not an RSS feed.');
            else if (error.message?.includes('Network Error')) msg = t('toast.network_error', 'Network error. Check your connection.');
            else if (error.message?.includes('404')) msg = t('toast.feed_not_found', 'Feed not found (404).');

            toast.show(msg, 'error');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col gap-2 max-w-3xl mx-auto mt-10">
            <div className="flex gap-2 p-4 glass-card">
                <button
                    onClick={async () => {
                        const path = await window.api.chooseFolder();
                        if (path) {
                            await window.api.setDownloadPath(path);
                            toast.show(t('toast.folder_selected', { path }), 'success');
                        }
                    }}
                    className="p-3 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors"
                    title={t('episodes.change_folder')}
                >
                    <FolderOpen size={20} />
                </button>
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder={t('input.placeholder')}
                        className="w-full bg-white/5 border border-white/10 text-white pl-12 pr-32 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-gray-500"
                        onKeyDown={(e) => e.key === 'Enter' && handleAnalyze()}
                    />
                </div>
                <button
                    onClick={handleAnalyze}
                    disabled={loading}
                    className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-lg font-medium transition-colors disabled:opacity-50 flex items-center gap-2"
                >
                    {loading && <Loader2 className="animate-spin" size={18} />}
                    {t('input.analyze')}
                </button>
            </div>
        </div>
    );
};
