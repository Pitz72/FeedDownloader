import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import {
    Archive, BookOpen, Download, FileUp, Headphones, Loader2, Plus, RefreshCw, Search, Settings, ShieldCheck, type LucideIcon,
} from 'lucide-react';
import { Dialog } from './ui/Dialog';
import { Kbd } from './ui/Controls';
import { CoverImage } from './CoverImage';
import { useStore } from '../store/useStore';
import { useToast } from './ui/Toast';
import { feedErrorKey, openFeed, episodeKey } from '../lib/actions';
import { formatDate } from '../lib/dates';
import { cn } from '../lib/cn';

const isMac = window.api?.platform === 'darwin';
const MOD = isMac ? '⌘' : 'Ctrl';

export interface PaletteCommands {
    addFeed: () => void;
    checkAll: () => void;
    openSettings: () => void;
    openGuide: () => void;
    openHealthCheck: () => void;
    importOpml: () => void;
}

type Item =
    | { kind: 'action'; id: string; label: string; hint?: string; icon: LucideIcon; keys?: string[]; run: () => void }
    | { kind: 'feed'; id: string; label: string; image?: string; url: string }
    | { kind: 'episode'; id: string; label: string; hint?: string };

/**
 * Command palette (Ctrl+K): azioni, feed della libreria, episodi del feed
 * aperto. Combobox ARIA: le frecce scorrono i risultati, Invio esegue, Esc chiude.
 */
export function CommandPalette({ open, onClose, commands }: { open: boolean; onClose: () => void; commands: PaletteCommands }) {
    const { t, i18n } = useTranslation();
    const toast = useToast();
    const feeds = useStore(s => s.feeds);
    const currentFeed = useStore(s => s.currentFeed);
    const setView = useStore(s => s.setView);
    const [query, setQuery] = useState('');
    const [active, setActive] = useState(0);
    const [loadingUrl, setLoadingUrl] = useState<string | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const listRef = useRef<HTMLUListElement>(null);

    useEffect(() => { if (open) { setQuery(''); setActive(0); } }, [open]);

    const close = (then?: () => void) => { onClose(); if (then) setTimeout(then, 60); };

    const actions: Item[] = useMemo(() => [
        { kind: 'action', id: 'add', label: t('palette.add_feed'), hint: t('palette.add_feed_hint'), icon: Plus, keys: [MOD, 'N'], run: () => close(commands.addFeed) },
        { kind: 'action', id: 'check', label: t('palette.check_all'), hint: t('palette.check_all_hint'), icon: RefreshCw, keys: [MOD, 'S'], run: () => close(commands.checkAll) },
        { kind: 'action', id: 'downloads', label: t('palette.downloads'), icon: Download, keys: [MOD, '2'], run: () => close(() => setView('downloads')) },
        { kind: 'action', id: 'archive', label: t('palette.archive'), icon: Archive, keys: [MOD, '3'], run: () => close(() => setView('archive')) },
        { kind: 'action', id: 'verify', label: t('palette.verify'), icon: ShieldCheck, run: () => close(commands.openHealthCheck) },
        { kind: 'action', id: 'opml', label: t('sidebar.import_opml'), icon: FileUp, run: () => close(commands.importOpml) },
        { kind: 'action', id: 'settings', label: t('settings.title'), icon: Settings, keys: [MOD, ','], run: () => close(commands.openSettings) },
        { kind: 'action', id: 'guide', label: t('help.title'), icon: BookOpen, run: () => close(commands.openGuide) },
        // eslint-disable-next-line react-hooks/exhaustive-deps
    ], [t, commands, setView]);

    const q = query.trim().toLowerCase();

    const groups = useMemo(() => {
        const acts = q ? actions.filter(a => a.label.toLowerCase().includes(q)) : actions;
        const feedItems: Item[] = (q ? feeds.filter(f => (f.title || '').toLowerCase().includes(q)) : feeds.slice(0, 6)).slice(0, 12).map(f => ({
            kind: 'feed', id: `feed:${f.url}`, label: f.title || f.url, url: f.url,
            image: typeof f.image === 'string' ? f.image : f.image?.url,
        }));
        const episodes: Item[] = q && currentFeed
            ? currentFeed.episodes.filter(ep => (ep.title || '').toLowerCase().includes(q)).slice(0, 8).map((ep, i) => ({
                kind: 'episode', id: `ep:${episodeKey(ep) || i}`, label: ep.title || '—', hint: formatDate(ep.pubDate || ep.isoDate, i18n.language),
            }))
            : [];
        return [
            { key: 'actions', label: t('palette.group_actions'), items: acts },
            { key: 'feeds', label: t('palette.group_feeds'), items: feedItems },
            { key: 'episodes', label: t('palette.group_episodes', { podcast: currentFeed?.title ?? '' }), items: episodes },
        ].filter(g => g.items.length > 0);
    }, [q, actions, feeds, currentFeed, t, i18n.language]);

    const flat = useMemo(() => groups.flatMap(g => g.items), [groups]);
    useEffect(() => { setActive(0); }, [flat.length]);
    useEffect(() => {
        listRef.current?.querySelector(`[data-idx="${active}"]`)?.scrollIntoView({ block: 'nearest' });
    }, [active]);

    const run = async (item: Item) => {
        if (item.kind === 'action') { item.run(); return; }
        if (item.kind === 'episode') {
            close(() => {
                setView('feed');
                window.dispatchEvent(new CustomEvent('feeddownloader:search-episode', { detail: { query: item.label } }));
            });
            return;
        }
        setLoadingUrl(item.url);
        try {
            await openFeed(item.url);
            close();
        } catch (e) {
            toast.error(t(feedErrorKey(e)), item.label);
        } finally {
            setLoadingUrl(null);
        }
    };

    const onKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'ArrowDown') { e.preventDefault(); setActive(i => Math.min(i + 1, flat.length - 1)); }
        else if (e.key === 'ArrowUp') { e.preventDefault(); setActive(i => Math.max(i - 1, 0)); }
        else if (e.key === 'Home') { e.preventDefault(); setActive(0); }
        else if (e.key === 'End') { e.preventDefault(); setActive(flat.length - 1); }
        else if (e.key === 'Enter') { e.preventDefault(); const item = flat[active]; if (item) void run(item); }
    };

    let idx = -1;
    const optionId = (i: number) => `palette-opt-${i}`;

    return (
        <Dialog open={open} onClose={onClose} title={t('palette.title')} bare size="md" initialFocusRef={inputRef}>
            <div className="flex items-center gap-3 border-b border-line px-4">
                <Search size={17} className="shrink-0 text-fg-3" aria-hidden="true" />
                <input
                    ref={inputRef}
                    role="combobox"
                    aria-expanded={flat.length > 0}
                    aria-controls="palette-list"
                    aria-activedescendant={flat.length > 0 ? optionId(active) : undefined}
                    aria-autocomplete="list"
                    aria-label={t('palette.title')}
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    onKeyDown={onKeyDown}
                    placeholder={t('palette.placeholder')}
                    className="h-14 min-w-0 flex-1 bg-transparent text-md text-fg placeholder:text-fg-3 focus:outline-none"
                />
                <Kbd>Esc</Kbd>
            </div>

            <ul ref={listRef} id="palette-list" role="listbox" aria-label={t('palette.results')} className="max-h-[52vh] overflow-y-auto p-2">
                {flat.length === 0 && <li className="px-3 py-8 text-center text-sm text-fg-3">{t('palette.no_results')}</li>}
                {groups.map(g => (
                    <li key={g.key} role="presentation">
                        <p className="eyebrow px-3 pb-1 pt-3" aria-hidden="true">{g.label}</p>
                        <ul role="group" aria-label={g.label}>
                            {g.items.map(item => {
                                idx++;
                                const i = idx;
                                const selected = i === active;
                                let lead: ReactNode;
                                if (item.kind === 'action') {
                                    const Icon = item.icon;
                                    lead = <Icon size={16} aria-hidden="true" />;
                                } else if (item.kind === 'feed') {
                                    lead = loadingUrl === item.url
                                        ? <Loader2 size={16} className="animate-spin" aria-hidden="true" />
                                        : <span className="flex h-6 w-6 items-center justify-center overflow-hidden rounded bg-surface-3 text-[10px] font-semibold" aria-hidden="true"><CoverImage src={item.image} className="h-full w-full object-cover" fallback={<span>{item.label.slice(0, 2).toUpperCase()}</span>} /></span>;
                                } else {
                                    lead = <Headphones size={16} aria-hidden="true" />;
                                }
                                return (
                                    <li
                                        key={item.id}
                                        id={optionId(i)}
                                        role="option"
                                        aria-selected={selected}
                                        data-idx={i}
                                        onMouseEnter={() => setActive(i)}
                                        onMouseDown={e => e.preventDefault()}
                                        onClick={() => void run(item)}
                                        className={cn('flex cursor-pointer items-center gap-3 rounded-md px-3 py-2', selected ? 'bg-surface-4 text-fg' : 'text-fg-2')}
                                    >
                                        <span className={cn('flex h-7 w-7 shrink-0 items-center justify-center', selected ? 'text-accent' : 'text-fg-3')}>{lead}</span>
                                        <span className="min-w-0 flex-1">
                                            <span className="block truncate text-base">{item.label}</span>
                                            {'hint' in item && item.hint && <span className="block truncate text-xs text-fg-3">{item.hint}</span>}
                                        </span>
                                        {item.kind === 'action' && item.keys && <span className="flex shrink-0 gap-1" aria-hidden="true">{item.keys.map(k => <Kbd key={k}>{k}</Kbd>)}</span>}
                                    </li>
                                );
                            })}
                        </ul>
                    </li>
                ))}
            </ul>

            <div className="flex items-center gap-4 border-t border-line bg-surface-2 px-4 py-2 text-xs text-fg-3" aria-hidden="true">
                <span className="inline-flex items-center gap-1"><Kbd>↑</Kbd><Kbd>↓</Kbd> {t('palette.hint_move')}</span>
                <span className="inline-flex items-center gap-1"><Kbd>↵</Kbd> {t('palette.hint_run')}</span>
                <span className="inline-flex items-center gap-1"><Kbd>Esc</Kbd> {t('palette.hint_close')}</span>
            </div>
        </Dialog>
    );
}
