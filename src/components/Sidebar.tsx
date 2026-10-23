import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { useShallow } from 'zustand/react/shallow';
import { ArrowDownAZ, Archive, Download, FileUp, Loader2, Plus, Rss, Search, Zap, X } from 'lucide-react';
import { useStore, selectQueueCounts } from '../store/useStore';
import { useToast } from './ui/Toast';
import { Button, IconButton } from './ui/Button';
import { TextField } from './ui/Controls';
import { CoverImage } from './CoverImage';
import { openFeed, feedErrorKey } from '../lib/actions';
import { cn } from '../lib/cn';
import type { FeedEntry } from '../../shared/types';

interface Props {
    onAddFeed: () => void;
    onImportOpml: () => void;
}

function initialsFor(title: string | undefined | null): string {
    if (!title) return '?';
    const parts = title.trim().split(/\s+/).filter(Boolean);
    if (parts.length === 0) return '?';
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[1][0]).toUpperCase();
}

function feedImage(feed: FeedEntry): string | undefined {
    return typeof feed.image === 'string' ? feed.image : feed.image?.url;
}

/**
 * Colonna di navigazione (impianto Titan): in alto le due viste trasversali
 * (Download, Archivio), sotto la libreria dei feed. Ogni voce è un pulsante
 * vero e lo stato si legge a parole («12 da scaricare», «Archivio automatico»).
 * Rimuovere un feed sta nella sua intestazione: il cestino che compariva solo
 * al passaggio del mouse era invisibile alla tastiera e troppo vicino a un clic sbagliato.
 */
export function Sidebar({ onAddFeed, onImportOpml }: Props) {
    const { t, i18n } = useTranslation();
    const toast = useToast();
    const feeds = useStore(s => s.feeds);
    const view = useStore(s => s.view);
    const setView = useStore(s => s.setView);
    const currentUrl = useStore(s => s.currentFeed?.url);
    const counts = useStore(useShallow(selectQueueCounts));
    const failuresCount = useStore(s => s.failures.length);
    const [query, setQuery] = useState('');
    const [sortAlpha, setSortAlpha] = useState(() => { try { return localStorage.getItem('sidebarSortAlpha') === '1'; } catch { return false; } });
    const [loadingUrl, setLoadingUrl] = useState<string | null>(null);
    const [archiveCount, setArchiveCount] = useState<number | null>(null);
    const reloadTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        const load = () => window.api.getArchiveStats().then(s => setArchiveCount(s.totalFiles)).catch(() => { });
        load();
        // M5-style debounce: during a batch the main process notifies after every file
        const off = window.api.onDownloadsUpdated(() => {
            if (reloadTimer.current) clearTimeout(reloadTimer.current);
            reloadTimer.current = setTimeout(load, 800);
        });
        return () => { off(); if (reloadTimer.current) clearTimeout(reloadTimer.current); };
    }, []);

    useEffect(() => { try { localStorage.setItem('sidebarSortAlpha', sortAlpha ? '1' : '0'); } catch { /* private mode */ } }, [sortAlpha]);

    const shown = useMemo(() => {
        let list = feeds;
        const q = query.trim().toLowerCase();
        if (q) list = list.filter(f => (f.title || '').toLowerCase().includes(q) || f.url.toLowerCase().includes(q));
        if (sortAlpha) list = [...list].sort((a, b) => (a.title || '').localeCompare(b.title || '', i18n.language));
        return list;
    }, [feeds, query, sortAlpha, i18n.language]);

    const select = async (feed: FeedEntry) => {
        if (view === 'feed' && currentUrl === feed.url) return;
        setLoadingUrl(feed.url);
        try {
            await openFeed(feed.url);
        } catch (e) {
            toast.error(t(feedErrorKey(e)), feed.title);
        } finally {
            setLoadingUrl(prev => (prev === feed.url ? null : prev));
        }
    };

    const navItem = (id: 'downloads' | 'archive', Icon: typeof Download, label: string, meta: ReactNode) => {
        const selected = view === id;
        return (
            <li>
                <button
                    type="button"
                    onClick={() => setView(id)}
                    aria-current={selected ? 'page' : undefined}
                    className={cn('relative flex w-full items-center gap-3 rounded-md px-3 py-2 text-left transition-colors', selected ? 'bg-surface-4' : 'hover:bg-surface-3')}
                >
                    {selected && <span aria-hidden="true" className="absolute inset-y-2 left-0 w-0.5 rounded-full bg-accent" />}
                    <Icon size={17} className={selected ? 'text-accent' : 'text-fg-3'} aria-hidden="true" />
                    <span className={cn('flex-1 text-base font-medium', selected ? 'text-fg' : 'text-fg-2')}>{label}</span>
                    {meta}
                </button>
            </li>
        );
    };

    return (
        <nav aria-label={t('sidebar.label')} className="flex w-72 shrink-0 flex-col border-r border-line bg-surface-1">
            <ul className="space-y-0.5 px-2 pt-3">
                {navItem('downloads', Download, t('nav.downloads'),
                    counts.total > 0
                        ? <span className="tabular rounded-full bg-surface-4 px-2 text-xs font-semibold text-accent-strong">{counts.total}</span>
                        : failuresCount > 0
                            ? <span className="tabular rounded-full bg-danger-soft px-2 text-xs font-semibold text-danger">{t('nav.failed_count', { count: failuresCount })}</span>
                            : null)}
                {navItem('archive', Archive, t('nav.archive'),
                    archiveCount !== null ? <span className="tabular text-xs text-fg-3">{archiveCount.toLocaleString(i18n.language)}</span> : null)}
            </ul>

            <div className="mt-4 flex items-center justify-between px-4 pb-2">
                <h2 id="feeds-heading" className="eyebrow">{t('sidebar.feeds')}</h2>
                <div className="flex items-center gap-1">
                    <span className="tabular text-xs text-fg-3">{feeds.length}</span>
                    <IconButton
                        icon={ArrowDownAZ}
                        size="sm"
                        label={t('sidebar.sort_alpha')}
                        aria-pressed={sortAlpha}
                        variant={sortAlpha ? 'accent' : 'ghost'}
                        onClick={() => setSortAlpha(v => !v)}
                    />
                </div>
            </div>

            {feeds.length > 0 && (
                <div className="px-3 pb-2">
                    <TextField
                        label={t('sidebar.search')}
                        hideLabel
                        leadingIcon={Search}
                        placeholder={t('sidebar.search_placeholder')}
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        trailing={query ? <IconButton icon={X} size="sm" label={t('common.clear')} onClick={() => setQuery('')} /> : undefined}
                    />
                </div>
            )}

            <ul aria-labelledby="feeds-heading" className="min-h-0 flex-1 space-y-0.5 overflow-y-auto px-2 pb-2">
                {shown.map(feed => {
                    const selected = view === 'feed' && currentUrl === feed.url;
                    const loading = loadingUrl === feed.url;
                    const img = feedImage(feed);
                    return (
                        <li key={feed.url}>
                            <button
                                type="button"
                                onClick={() => void select(feed)}
                                aria-current={selected ? 'page' : undefined}
                                aria-busy={loading || undefined}
                                className={cn('group relative flex w-full items-center gap-3 rounded-md px-3 py-2 text-left transition-colors', selected ? 'bg-surface-4' : 'hover:bg-surface-3')}
                            >
                                {selected && <span aria-hidden="true" className="absolute inset-y-2 left-0 w-0.5 rounded-full bg-accent" />}
                                <span className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-md bg-surface-3 text-xs font-semibold text-accent" aria-hidden="true">
                                    <CoverImage src={img} className="h-full w-full object-cover" fallback={<span>{initialsFor(feed.title)}</span>} />
                                    {loading && (
                                        <span className="absolute inset-0 flex items-center justify-center bg-canvas/70">
                                            <Loader2 size={16} className="animate-spin text-fg" />
                                        </span>
                                    )}
                                </span>
                                <span className="min-w-0 flex-1">
                                    <span className={cn('block truncate text-base font-medium', selected ? 'text-fg' : 'text-fg-2 group-hover:text-fg')}>
                                        {feed.title || t('sidebar.untitled')}
                                    </span>
                                    <span className="flex items-center gap-1.5 text-xs">
                                        {feed.newCount != null && feed.newCount > 0
                                            ? <span className="font-medium text-accent">{t('sidebar.to_download', { count: feed.newCount })}</span>
                                            : feed.newCount === 0
                                                ? <span className="text-fg-3">{t('sidebar.all_archived')}</span>
                                                : <span className="text-fg-3">{t('sidebar.not_checked')}</span>}
                                        {feed.autoDownload && (
                                            <span className="inline-flex items-center gap-0.5 text-success" title={t('feed.auto_title')}>
                                                <Zap size={11} aria-hidden="true" />
                                                <span className="sr-only">{t('feed.auto_title')}</span>
                                                <span aria-hidden="true">{t('sidebar.auto_short')}</span>
                                            </span>
                                        )}
                                    </span>
                                </span>
                            </button>
                        </li>
                    );
                })}

                {feeds.length === 0 && (
                    <li className="px-3 py-8 text-center">
                        <Rss size={28} className="mx-auto mb-2 text-fg-3" aria-hidden="true" />
                        <p className="text-sm text-fg-3">{t('sidebar.empty')}</p>
                    </li>
                )}
                {feeds.length > 0 && shown.length === 0 && (
                    <li className="px-3 py-6 text-center text-sm text-fg-3">{t('sidebar.no_results')}</li>
                )}
            </ul>

            <div className="space-y-2 border-t border-line p-3">
                <Button variant="primary" icon={Plus} className="w-full" onClick={onAddFeed}>{t('sidebar.add_feed')}</Button>
                <Button variant="ghost" icon={FileUp} size="sm" className="w-full" onClick={onImportOpml}>{t('sidebar.import_opml')}</Button>
            </div>
        </nav>
    );
}
