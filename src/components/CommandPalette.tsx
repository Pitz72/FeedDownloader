import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useStore, AppState } from '../store/useStore';
import type { FeedEntry } from '../../shared/types';
import { CoverImage } from './CoverImage';
import { useFocusTrap } from '../hooks/useFocusTrap';

const isMac = window.api?.platform === 'darwin';

type ActionItem = {
    kind: 'action';
    id: string;
    label: string;
    description?: string;
    shortcut?: string[];
    iconPath: React.ReactNode;
    onSelect: () => void;
};

type FeedItem = {
    kind: 'feed';
    url: string;
    title: string;
    image?: string;
};

// v1.5.0 — episodes of the currently open feed, searchable from the palette
type EpisodeItem = {
    kind: 'episode';
    key: string;
    title: string;
    pubDate?: string;
};

type ResultItem = ActionItem | FeedItem | EpisodeItem;

interface CommandPaletteProps {
    onClose: () => void;
    onOpenSettings: () => void;
}

// Tint hash (must match Sidebar)
function tintFor(seed: string): number {
    let h = 0;
    for (let i = 0; i < seed.length; i++) h = ((h << 5) - h + seed.charCodeAt(i)) | 0;
    return (Math.abs(h) % 6) + 1;
}

function initialsFor(title: string | undefined | null): string {
    if (!title) return '?';
    const parts = title.trim().split(/\s+/).filter(Boolean);
    if (parts.length === 0) return '?';
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[1][0]).toUpperCase();
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ onClose, onOpenSettings }) => {
    const { t } = useTranslation();
    const [query, setQuery] = useState('');
    const [feeds, setFeeds] = useState<FeedEntry[]>([]);
    const [loadingFeedUrl, setLoadingFeedUrl] = useState<string | null>(null);
    const [activeIdx, setActiveIdx] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const listRef = useRef<HTMLDivElement>(null);
    // Mounted only while open, so the trap is always active here.
    const trapRef = useFocusTrap<HTMLDivElement>(true);
    // S9: only the latest parseFeed request may update state (stale responses are dropped)
    const latestRequestRef = useRef<string | null>(null);

    const setViewMode = useStore((s: AppState) => s.setViewMode);
    const setCurrentFeed = useStore((s: AppState) => s.setCurrentFeed);
    const currentFeed = useStore((s: AppState) => s.currentFeed);

    useEffect(() => {
        window.api.getFeeds().then(setFeeds).catch(() => {});
        setTimeout(() => inputRef.current?.focus(), 50);
    }, []);

    const handleSelectFeed = useCallback(async (feed: FeedEntry) => {
        // M27: a load is already in flight (Enter path is not covered by the disabled buttons)
        if (loadingFeedUrl) return;
        latestRequestRef.current = feed.url;
        setLoadingFeedUrl(feed.url);
        try {
            const parsed = await window.api.parseFeed(feed.url);
            if (latestRequestRef.current !== feed.url) return;
            setCurrentFeed({ ...parsed, url: feed.url });
            setViewMode('feeds');
            onClose();
        } catch {
            if (latestRequestRef.current === feed.url) setLoadingFeedUrl(null);
        }
    }, [loadingFeedUrl, setCurrentFeed, setViewMode, onClose]);

    const modKey = isMac ? '⌘' : 'Ctrl';

    const actions: ActionItem[] = useMemo(() => [
        {
            kind: 'action', id: 'sync_all',
            label: t('cmd.action_sync_all', 'Sincronizza tutti i feed'),
            description: t('cmd.action_sync_all_desc', 'Controlla nuovi episodi in tutti i feed salvati'),
            shortcut: [modKey, 'S'],
            iconPath: (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/>
                    <path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/>
                </svg>
            ),
            onSelect: () => { window.dispatchEvent(new CustomEvent('feeddownloader:syncall')); onClose(); },
        },
        {
            kind: 'action', id: 'add_feed',
            label: t('cmd.action_add_feed', 'Aggiungi feed'),
            description: t('cmd.action_add_feed_desc', 'Apri il campo URL per analizzare un nuovo feed'),
            iconPath: (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/>
                </svg>
            ),
            onSelect: () => {
                setViewMode('feeds');
                onClose();
                setTimeout(() => document.getElementById('url-feed-input')?.focus(), 150);
            },
        },
        {
            kind: 'action', id: 'view_archive',
            label: t('cmd.action_view_archive', 'Apri archivio'),
            description: t('cmd.action_view_archive_desc', 'Mostra tutti gli episodi archiviati'),
            shortcut: [modKey, 'A'],
            iconPath: (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="5" rx="1"/>
                    <path d="M4 9v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9"/>
                    <path d="M10 13h4"/>
                </svg>
            ),
            onSelect: () => { setViewMode('archive'); onClose(); },
        },
        {
            kind: 'action', id: 'view_feeds',
            label: t('cmd.action_view_feeds', 'Torna ai feed'),
            iconPath: (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 11a9 9 0 0 1 9 9"/>
                    <path d="M4 4a16 16 0 0 1 16 16"/>
                    <circle cx="5" cy="19" r="1.6" fill="currentColor"/>
                </svg>
            ),
            onSelect: () => { setViewMode('feeds'); onClose(); },
        },
        {
            kind: 'action', id: 'settings',
            label: t('cmd.action_settings', 'Apri impostazioni'),
            description: t('cmd.action_settings_desc', 'Concorrenza, cartella, lingua, integrità'),
            shortcut: [modKey, ','],
            iconPath: (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3"/>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                </svg>
            ),
            onSelect: () => { onClose(); onOpenSettings(); },
        },
    ], [t, onClose, onOpenSettings, setViewMode, modKey]);

    const q = query.toLowerCase().trim();
    const filteredActions = useMemo(
        () => q ? actions.filter(a => a.label.toLowerCase().includes(q)) : actions,
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

    // v1.5.0 — the placeholder has always promised "episodio": search the open
    // feed's episodes by title and hand the query off to the list filter.
    const filteredEpisodes: EpisodeItem[] = useMemo(() => {
        if (!q || !currentFeed?.episodes?.length) return [];
        return currentFeed.episodes
            .filter(ep => (ep.title || '').toLowerCase().includes(q))
            .slice(0, 8)
            .map((ep, i) => ({
                kind: 'episode' as const,
                key: ep.guid || ep.enclosure?.url || `${ep.title}-${i}`,
                title: ep.title || '—',
                pubDate: ep.pubDate,
            }));
    }, [q, currentFeed]);

    const handleSelectEpisode = useCallback((item: EpisodeItem) => {
        setViewMode('feeds');
        window.dispatchEvent(new CustomEvent('feeddownloader:search-episode', { detail: { query: item.title } }));
        onClose();
    }, [setViewMode, onClose]);

    const allResults: ResultItem[] = useMemo(
        () => [...filteredActions, ...filteredFeeds, ...filteredEpisodes],
        [filteredActions, filteredFeeds, filteredEpisodes]
    );

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
                } else if (item.kind === 'episode') {
                    handleSelectEpisode(item);
                } else {
                    const feed = feeds.find(f => f.url === item.url);
                    if (feed) handleSelectFeed(feed);
                }
            }
        };
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [allResults, activeIdx, feeds, handleSelectFeed, handleSelectEpisode, onClose]);

    useEffect(() => {
        const el = listRef.current?.querySelector(`[data-idx="${activeIdx}"]`) as HTMLElement | null;
        el?.scrollIntoView({ block: 'nearest' });
    }, [activeIdx]);

    return (
        <div className="palette-bg" onClick={onClose}>
            <motion.div
                ref={trapRef}
                className="palette"
                initial={{ opacity: 0, scale: 0.96, y: -8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: -8 }}
                transition={{ type: 'spring', damping: 28, stiffness: 300 }}
                onClick={e => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-label={t('cmd.placeholder', 'Cerca azione, feed, episodio…')}
                tabIndex={-1}
            >
                <div className="palette-search">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
                    </svg>
                    <input
                        ref={inputRef}
                        type="text"
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        placeholder={t('cmd.placeholder', 'Cerca azione, feed, episodio…')}
                    />
                    <span className="esc">esc</span>
                </div>

                <div ref={listRef} className="palette-list custom-scrollbar">
                    {allResults.length === 0 && (
                        <div className="palette-section">
                            <p className="palette-section-label" style={{ textAlign: 'center', padding: '24px 22px' }}>
                                {t('cmd.no_results', 'Nessun risultato')}
                            </p>
                        </div>
                    )}

                    {filteredActions.length > 0 && (
                        <div className="palette-section">
                            <p className="palette-section-label">{t('cmd.group_actions', 'Azioni rapide')}</p>
                            {filteredActions.map((item, i) => (
                                <button
                                    type="button"
                                    key={item.id}
                                    data-idx={i}
                                    onClick={item.onSelect}
                                    onMouseEnter={() => setActiveIdx(i)}
                                    className={`palette-item ${activeIdx === i ? 'active' : ''}`}
                                >
                                    {item.iconPath}
                                    <div className="text">
                                        {item.label}
                                        {item.description && <small>{item.description}</small>}
                                    </div>
                                    {item.shortcut && (
                                        <div className="shortcut">
                                            {item.shortcut.map((k, ki) => <kbd key={ki}>{k}</kbd>)}
                                        </div>
                                    )}
                                </button>
                            ))}
                        </div>
                    )}

                    {filteredFeeds.length > 0 && (
                        <div className="palette-section">
                            <p className="palette-section-label">{t('cmd.group_feeds', 'Salta al feed')}</p>
                            {filteredFeeds.map((item, i) => {
                                const globalIdx = filteredActions.length + i;
                                const isLoading = loadingFeedUrl === item.url;
                                const tint = tintFor(item.url);
                                return (
                                    <button
                                        type="button"
                                        key={item.url}
                                        data-idx={globalIdx}
                                        onClick={() => {
                                            const feed = feeds.find(f => f.url === item.url);
                                            if (feed) handleSelectFeed(feed);
                                        }}
                                        onMouseEnter={() => setActiveIdx(globalIdx)}
                                        disabled={!!loadingFeedUrl}
                                        className={`palette-item ${activeIdx === globalIdx ? 'active' : ''}`}
                                    >
                                        <span
                                            className={`feed-thumb tint-${tint}`}
                                            style={{ width: 24, height: 24, fontSize: 11, borderRadius: 4 }}
                                            aria-hidden="true"
                                        >
                                            {isLoading ? (
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ animation: 'feedSyncSpin 1s linear infinite' }}>
                                                    <path d="M21 12a9 9 0 1 1-6.2-8.5"/>
                                                </svg>
                                            ) : (
                                                <CoverImage src={item.image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} fallback={<span>{initialsFor(item.title)}</span>} />
                                            )}
                                        </span>
                                        <div className="text">{item.title}</div>
                                    </button>
                                );
                            })}
                        </div>
                    )}
                    {filteredEpisodes.length > 0 && (
                        <div className="palette-section">
                            <p className="palette-section-label">{t('cmd.group_episodes', 'Episodi (feed corrente)')}</p>
                            {filteredEpisodes.map((item, i) => {
                                const globalIdx = filteredActions.length + filteredFeeds.length + i;
                                return (
                                    <button
                                        type="button"
                                        key={item.key}
                                        data-idx={globalIdx}
                                        onClick={() => handleSelectEpisode(item)}
                                        onMouseEnter={() => setActiveIdx(globalIdx)}
                                        className={`palette-item ${activeIdx === globalIdx ? 'active' : ''}`}
                                    >
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <circle cx="12" cy="12" r="10"/>
                                            <polygon points="10 8 16 12 10 16" fill="currentColor" stroke="none"/>
                                        </svg>
                                        <div className="text">
                                            {item.title}
                                            {item.pubDate && <small>{new Date(item.pubDate).toLocaleDateString()}</small>}
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    )}
                </div>

                <div className="palette-footer">
                    <div className="nav">
                        <span><kbd>↑</kbd><kbd>↓</kbd> {t('cmd.hint_navigate', 'per navigare')}</span>
                        <span><kbd>↵</kbd> {t('cmd.hint_select', 'per eseguire')}</span>
                        <span><kbd>esc</kbd> {t('cmd.hint_close', 'per chiudere')}</span>
                    </div>
                    <span>Runtime Command</span>
                </div>
            </motion.div>
        </div>
    );
};
