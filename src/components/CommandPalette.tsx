import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useStore, AppState } from '../store/useStore';
import { Icon } from './Icon';
import type { FeedEntry } from '../../shared/types';

type ActionItem = {
    kind: 'action';
    id: string;
    label: string;
    icon: string;
    onSelect: () => void;
};

type FeedItem = {
    kind: 'feed';
    url: string;
    title: string;
    image?: string;
};

type ResultItem = ActionItem | FeedItem;

interface CommandPaletteProps {
    onClose: () => void;
    onOpenSettings: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ onClose, onOpenSettings }) => {
    const { t } = useTranslation();
    const [query, setQuery] = useState('');
    const [feeds, setFeeds] = useState<FeedEntry[]>([]);
    const [loadingFeedUrl, setLoadingFeedUrl] = useState<string | null>(null);
    const [activeIdx, setActiveIdx] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const listRef = useRef<HTMLDivElement>(null);

    const setViewMode = useStore((s: AppState) => s.setViewMode);
    const setCurrentFeed = useStore((s: AppState) => s.setCurrentFeed);

    useEffect(() => {
        window.api.getFeeds().then(setFeeds).catch(() => {});
        setTimeout(() => inputRef.current?.focus(), 50);
    }, []);

    const handleSelectFeed = useCallback(async (feed: FeedEntry) => {
        setLoadingFeedUrl(feed.url);
        try {
            const parsed = await window.api.parseFeed(feed.url);
            setCurrentFeed({ ...parsed, url: feed.url });
            setViewMode('feeds');
            onClose();
        } catch {
            setLoadingFeedUrl(null);
        }
    }, [setCurrentFeed, setViewMode, onClose]);

    const actions: ActionItem[] = useMemo(() => [
        {
            kind: 'action', id: 'settings',
            label: t('cmd.action_settings'), icon: 'settings',
            onSelect: () => { onClose(); onOpenSettings(); },
        },
        {
            kind: 'action', id: 'sync_all',
            label: t('cmd.action_sync_all'), icon: 'sync',
            onSelect: () => { window.dispatchEvent(new CustomEvent('feeddownloader:syncall')); onClose(); },
        },
        {
            kind: 'action', id: 'add_feed',
            label: t('cmd.action_add_feed'), icon: 'add_circle',
            onSelect: () => {
                setViewMode('feeds');
                onClose();
                setTimeout(() => document.getElementById('url-feed-input')?.focus(), 150);
            },
        },
        {
            kind: 'action', id: 'view_archive',
            label: t('cmd.action_view_archive'), icon: 'inventory_2',
            onSelect: () => { setViewMode('archive'); onClose(); },
        },
        {
            kind: 'action', id: 'view_feeds',
            label: t('cmd.action_view_feeds'), icon: 'rss_feed',
            onSelect: () => { setViewMode('feeds'); onClose(); },
        },
    ], [t, onClose, onOpenSettings, setViewMode]);

    const q = query.toLowerCase().trim();

    const filteredActions = useMemo(() =>
        q ? actions.filter(a => a.label.toLowerCase().includes(q)) : actions,
        [q, actions]
    );

    const filteredFeeds: FeedItem[] = useMemo(() => {
        if (!feeds.length) return [];
        const list = q
            ? feeds.filter(f => (f.title || '').toLowerCase().includes(q))
            : feeds.slice(0, 5);
        return list.map(f => ({
            kind: 'feed' as const,
            url: f.url,
            title: f.title || '—',
            image: typeof f.image === 'string' ? f.image : (f.image as { url?: string } | undefined)?.url,
        }));
    }, [q, feeds]);

    const allResults: ResultItem[] = useMemo(() => [...filteredActions, ...filteredFeeds], [filteredActions, filteredFeeds]);

    useEffect(() => { setActiveIdx(0); }, [allResults.length]);

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') { onClose(); return; }
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                setActiveIdx(i => Math.min(i + 1, allResults.length - 1));
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                setActiveIdx(i => Math.max(i - 1, 0));
            } else if (e.key === 'Enter') {
                e.preventDefault();
                const item = allResults[activeIdx];
                if (!item) return;
                if (item.kind === 'action') {
                    item.onSelect();
                } else {
                    const feed = feeds.find(f => f.url === item.url);
                    if (feed) handleSelectFeed(feed);
                }
            }
        };
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [allResults, activeIdx, feeds, handleSelectFeed, onClose]);

    useEffect(() => {
        const el = listRef.current?.querySelector(`[data-idx="${activeIdx}"]`) as HTMLElement | null;
        el?.scrollIntoView({ block: 'nearest' });
    }, [activeIdx]);

    return (
        <div
            className="fixed inset-0 z-[70] flex items-start justify-center"
            style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)', paddingTop: '10vh' }}
            onClick={onClose}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.96, y: -8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: -8 }}
                transition={{ type: 'spring', damping: 28, stiffness: 300 }}
                className="w-full flex flex-col rounded-2xl overflow-hidden"
                style={{
                    maxWidth: '560px',
                    maxHeight: '65vh',
                    background: 'var(--color-surface-container)',
                    border: '1px solid rgba(65,71,85,0.22)',
                    boxShadow: '0 32px 80px rgba(0,0,0,0.65)',
                }}
                onClick={e => e.stopPropagation()}
            >
                {/* Search input */}
                <div
                    className="flex items-center gap-3 px-4 py-3.5 shrink-0"
                    style={{ borderBottom: '1px solid rgba(65,71,85,0.12)' }}
                >
                    <Icon name="search" size={18} style={{ color: 'var(--color-on-surface-variant)', flexShrink: 0 }} />
                    <input
                        ref={inputRef}
                        type="text"
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        placeholder={t('cmd.placeholder')}
                        className="flex-1 bg-transparent text-sm outline-none"
                        style={{ fontFamily: 'var(--font-label)', color: 'var(--color-on-surface)' }}
                    />
                    <span
                        className="text-[10px] px-1.5 py-0.5 rounded shrink-0"
                        style={{
                            background: 'var(--color-surface-container-high)',
                            color: 'var(--color-on-surface-variant)',
                            fontFamily: 'var(--font-label)',
                        }}
                    >
                        ESC
                    </span>
                </div>

                {/* Results */}
                <div ref={listRef} className="overflow-y-auto custom-scrollbar flex-1 pb-1">
                    {allResults.length === 0 && (
                        <p
                            className="text-xs text-center py-8"
                            style={{ color: 'var(--color-on-surface-variant)', opacity: 0.45, fontFamily: 'var(--font-label)' }}
                        >
                            {t('cmd.no_results')}
                        </p>
                    )}

                    {/* Actions group */}
                    {filteredActions.length > 0 && (
                        <>
                            <p
                                className="px-4 pt-3 pb-1 text-[10px] uppercase tracking-widest"
                                style={{ fontFamily: 'var(--font-label)', color: 'var(--color-on-surface-variant)', opacity: 0.38 }}
                            >
                                {t('cmd.group_actions')}
                            </p>
                            {filteredActions.map((item, i) => (
                                <button
                                    key={item.id}
                                    data-idx={i}
                                    onClick={item.onSelect}
                                    onMouseEnter={() => setActiveIdx(i)}
                                    className="w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors"
                                    style={{
                                        background: activeIdx === i ? 'var(--color-surface-container-high)' : 'transparent',
                                        color: 'var(--color-on-surface)',
                                    }}
                                >
                                    <Icon name={item.icon} size={16} style={{ color: 'var(--color-on-surface-variant)', flexShrink: 0 }} />
                                    <span className="text-sm" style={{ fontFamily: 'var(--font-label)' }}>{item.label}</span>
                                </button>
                            ))}
                        </>
                    )}

                    {/* Feeds group */}
                    {filteredFeeds.length > 0 && (
                        <>
                            <p
                                className="px-4 pt-3 pb-1 text-[10px] uppercase tracking-widest"
                                style={{ fontFamily: 'var(--font-label)', color: 'var(--color-on-surface-variant)', opacity: 0.38 }}
                            >
                                {t('cmd.group_feeds')}
                            </p>
                            {filteredFeeds.map((item, i) => {
                                const globalIdx = filteredActions.length + i;
                                const isLoading = loadingFeedUrl === item.url;
                                return (
                                    <button
                                        key={item.url}
                                        data-idx={globalIdx}
                                        onClick={() => {
                                            const feed = feeds.find(f => f.url === item.url);
                                            if (feed) handleSelectFeed(feed);
                                        }}
                                        onMouseEnter={() => setActiveIdx(globalIdx)}
                                        disabled={!!loadingFeedUrl}
                                        className="w-full flex items-center gap-3 px-4 py-2 text-left transition-colors disabled:opacity-60"
                                        style={{
                                            background: activeIdx === globalIdx ? 'var(--color-surface-container-high)' : 'transparent',
                                            color: 'var(--color-on-surface)',
                                        }}
                                    >
                                        <div
                                            className="w-7 h-7 rounded overflow-hidden shrink-0 flex items-center justify-center"
                                            style={{ background: 'var(--color-surface-container-highest)' }}
                                        >
                                            {isLoading ? (
                                                <Icon name="progress_activity" size={14} className="animate-spin" style={{ color: 'var(--color-primary)' }} />
                                            ) : item.image ? (
                                                <img src={item.image} className="w-full h-full object-cover" alt={item.title} />
                                            ) : (
                                                <Icon name="podcasts" size={14} style={{ color: 'var(--color-on-surface-variant)' }} />
                                            )}
                                        </div>
                                        <span className="text-sm truncate flex-1" style={{ fontFamily: 'var(--font-label)' }}>
                                            {item.title}
                                        </span>
                                    </button>
                                );
                            })}
                        </>
                    )}
                </div>

                {/* Footer hint */}
                <div
                    className="px-4 py-2 flex items-center gap-4 shrink-0"
                    style={{
                        borderTop: '1px solid rgba(65,71,85,0.1)',
                        color: 'var(--color-on-surface-variant)',
                        opacity: 0.38,
                        fontFamily: 'var(--font-label)',
                        fontSize: '10px',
                    }}
                >
                    <span>↑↓ {t('cmd.hint_navigate')}</span>
                    <span>↵ {t('cmd.hint_select')}</span>
                    <span>ESC {t('cmd.hint_close')}</span>
                </div>
            </motion.div>
        </div>
    );
};
