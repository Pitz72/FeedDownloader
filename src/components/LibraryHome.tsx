import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useShallow } from 'zustand/react/shallow';
import { Virtuoso } from 'react-virtuoso';
import {
    Archive, ArrowDown, ArrowUp, Download, FileUp, FolderOpen, Keyboard, Loader2, Pause, Plus, RefreshCw, Rss, Zap,
} from 'lucide-react';
import type { FeedEntry } from '../../shared/types';
import { useStore, selectQueueCounts } from '../store/useStore';
import { useOnlineStatus } from '../hooks/useOnlineStatus';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { useToast } from './ui/Toast';
import { Button } from './ui/Button';
import { Badge, Kbd, ProgressBar, Stat } from './ui/Controls';
import { CoverImage } from './CoverImage';
import { feedErrorKey, openFeed } from '../lib/actions';
import { formatDate, timeOf } from '../lib/dates';
import { formatBytes } from '../utils/format';
import { cn } from '../lib/cn';

const isMac = window.api?.platform === 'darwin';
/** Sopra questa larghezza la colonna con coda e scorciatoie sta a destra della tabella. */
const WIDE_QUERY = '(min-width: 1320px)';
// min-w: le colonne minime + spazi + margini, così intestazione e righe restano
// allineate se la tabella scorre di lato. Nella finestra stretta salta «Episodi».
const COLS_WIDE = 'min-w-[728px] grid-cols-[minmax(180px,1fr)_64px_80px_96px_80px_128px]';
const COLS_NARROW = 'min-w-[640px] grid-cols-[minmax(168px,1fr)_80px_96px_80px_128px]';

type SortKey = 'title' | 'episodes' | 'archived' | 'missing' | 'bytes' | 'checked';

interface Props {
    onAddFeed: () => void;
    onImportOpml: () => void;
    onCheckAll: () => void;
}

/** Libreria vuota: a sinistra che cosa fa l'app e i due modi di cominciare, a destra i tre passi. */
function Welcome({ onAddFeed, onImportOpml }: Omit<Props, 'onCheckAll'>) {
    const { t } = useTranslation();
    const steps = [
        { icon: Rss, title: t('welcome.step1_title'), text: t('welcome.step1_text') },
        { icon: FolderOpen, title: t('welcome.step2_title'), text: t('welcome.step2_text') },
        { icon: Zap, title: t('welcome.step3_title'), text: t('welcome.step3_text') },
    ];
    return (
        <div className="flex flex-1 items-center justify-center px-8 py-10">
            <div className="grid w-full max-w-5xl grid-cols-[1.1fr_1fr] items-center gap-8 xl:gap-12">
                <div>
                    <img src="./logo.png" alt="" className="h-16 w-16" />
                    <h1 className="mt-5 text-3xl font-semibold text-fg">{t('welcome.title')}</h1>
                    <p className="mt-3 max-w-xl text-md text-fg-2">{t('welcome.text')}</p>
                    <div className="mt-7 flex flex-wrap gap-2">
                        <Button variant="primary" size="lg" icon={Plus} onClick={onAddFeed}>{t('sidebar.add_feed')}</Button>
                        <Button size="lg" icon={FileUp} onClick={onImportOpml}>{t('sidebar.import_opml')}</Button>
                    </div>
                    <p className="mt-3 text-sm text-fg-3">{t('welcome.drop_hint')}</p>
                </div>
                <ol className="space-y-3">
                    {steps.map(({ icon: Icon, title, text }, i) => (
                        <li key={i} className="flex gap-4 rounded-lg border border-line bg-surface-2 p-4">
                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-surface-4 text-accent" aria-hidden="true"><Icon size={19} /></span>
                            <div className="min-w-0">
                                <h2 className="text-base font-semibold text-fg"><span className="sr-only">{i + 1}. </span>{title}</h2>
                                <p className="mt-0.5 text-sm text-fg-3">{text}</p>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
}

/**
 * Vista Libreria. Libreria vuota → benvenuto; altrimenti il cruscotto di tutta
 * la libreria, impaginato in orizzontale: la tabella dei feed (clic = apri) e,
 * nelle finestre larghe, a destra la coda, l'archivio e le scorciatoie.
 */
export function LibraryHome({ onAddFeed, onImportOpml, onCheckAll }: Props) {
    const { t, i18n } = useTranslation();
    const toast = useToast();
    const isOnline = useOnlineStatus();
    const wide = useMediaQuery(WIDE_QUERY);
    const feeds = useStore(s => s.feeds);
    const setView = useStore(s => s.setView);
    const refresh = useStore(s => s.refresh);
    const counts = useStore(useShallow(selectQueueCounts));
    const queueState = useStore(s => s.queueState);
    const [sortKey, setSortKey] = useState<SortKey>('title');
    const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');
    const [loadingUrl, setLoadingUrl] = useState<string | null>(null);
    const [scrollEl, setScrollEl] = useState<HTMLDivElement | null>(null);
    const COLS = wide ? COLS_WIDE : COLS_NARROW;

    const sorted = useMemo(() => {
        const val = (f: FeedEntry): number | string => {
            switch (sortKey) {
                case 'title': return (f.title || '').toLowerCase();
                case 'episodes': return f.episodeCount ?? -1;
                case 'archived': return f.archivedCount ?? 0;
                case 'missing': return f.newCount ?? -1;
                case 'bytes': return f.archivedBytes ?? 0;
                case 'checked': { const v = timeOf(f.lastUpdated); return Number.isNaN(v) ? 0 : v; }
            }
        };
        return [...feeds].sort((a, b) => {
            const va = val(a), vb = val(b);
            const c = typeof va === 'string' ? va.localeCompare(vb as string, i18n.language, { numeric: true }) : (va as number) - (vb as number);
            return sortDir === 'desc' ? -c : c;
        });
    }, [feeds, sortKey, sortDir, i18n.language]);

    if (feeds.length === 0) return <Welcome onAddFeed={onAddFeed} onImportOpml={onImportOpml} />;

    const toDownload = feeds.reduce((n, f) => n + (f.newCount ?? 0), 0);
    const archived = feeds.reduce((n, f) => n + (f.archivedCount ?? 0), 0);
    const bytes = feeds.reduce((n, f) => n + (f.archivedBytes ?? 0), 0);
    const mod = isMac ? '⌘' : 'Ctrl';
    const n = (v: number) => v.toLocaleString(i18n.language);

    const sortBy = (key: SortKey) => {
        if (key === sortKey) setSortDir(d => (d === 'desc' ? 'asc' : 'desc'));
        else { setSortKey(key); setSortDir(key === 'title' ? 'asc' : 'desc'); }
    };
    const header = (key: SortKey, label: string, align: 'left' | 'right' = 'left') => {
        const active = sortKey === key;
        return (
            <div role="columnheader" aria-sort={active ? (sortDir === 'asc' ? 'ascending' : 'descending') : 'none'} className={align === 'right' ? 'text-right' : undefined}>
                <button type="button" onClick={() => sortBy(key)} className={cn('inline-flex items-center gap-1 whitespace-nowrap rounded-sm uppercase tracking-wide hover:text-fg', active ? 'text-accent' : 'text-fg-3')}>
                    {label}
                    {active && (sortDir === 'asc' ? <ArrowUp size={12} aria-hidden="true" /> : <ArrowDown size={12} aria-hidden="true" />)}
                </button>
            </div>
        );
    };

    const open = async (feed: FeedEntry) => {
        setLoadingUrl(feed.url);
        try {
            await openFeed(feed.url);
        } catch (e) {
            toast.error(t(feedErrorKey(e)), feed.title);
        } finally {
            setLoadingUrl(prev => (prev === feed.url ? null : prev));
        }
    };

    const table = (
        <div ref={setScrollEl} role="table" aria-label={t('home.table_label')} aria-rowcount={sorted.length + 1} className="min-h-0 flex-1 overflow-auto">
            <div role="row" className={cn('sticky top-0 z-[5] grid items-center gap-3 border-b border-line bg-surface-2 px-5 py-2 text-xs font-semibold', COLS)}>
                {header('title', t('home.col_podcast'))}
                {wide && header('episodes', t('home.col_episodes'), 'right')}
                {header('archived', t('home.col_archived'), 'right')}
                {header('missing', t('home.col_missing'), 'right')}
                {header('bytes', t('home.col_space'), 'right')}
                {header('checked', t('home.col_checked'))}
            </div>
            {scrollEl && (
                <Virtuoso
                    customScrollParent={scrollEl}
                    data={sorted}
                    computeItemKey={(_, f) => f.url}
                    itemContent={(_, f) => {
                        const img = typeof f.image === 'string' ? f.image : f.image?.url;
                        const loading = loadingUrl === f.url;
                        return (
                            // il clic su tutta la riga è una comodità; da tastiera si usa il pulsante del titolo
                            <div role="row" onClick={() => void open(f)} className={cn('grid cursor-pointer items-center gap-3 border-b border-line px-5 py-2 text-sm hover:bg-surface-2', COLS)}>
                                <div role="cell" className="min-w-0">
                                    <button
                                        type="button"
                                        onClick={e => { e.stopPropagation(); void open(f); }}
                                        aria-busy={loading || undefined}
                                        className="flex w-full min-w-0 items-center gap-3 rounded-md text-left"
                                    >
                                        <span className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-md bg-surface-3 text-xs font-semibold text-accent" aria-hidden="true">
                                            <CoverImage src={img} className="h-full w-full object-cover" fallback={<span>{(f.title || '?').slice(0, 2).toUpperCase()}</span>} />
                                            {loading && <span className="absolute inset-0 flex items-center justify-center bg-canvas/70"><Loader2 size={16} className="animate-spin text-fg" /></span>}
                                        </span>
                                        <span className="min-w-0 flex-1 truncate text-base font-medium text-fg" title={f.title}>{f.title || t('sidebar.untitled')}</span>
                                        {f.autoDownload && (
                                            <Badge tone="success" icon={Zap} title={t('feed.auto_title')}>
                                                <span aria-hidden="true">{t('sidebar.auto_short')}</span>
                                                <span className="sr-only">{t('feed.auto_title')}</span>
                                            </Badge>
                                        )}
                                    </button>
                                </div>
                                {wide && <div role="cell" className="tabular text-right text-fg-3">{f.episodeCount != null ? n(f.episodeCount) : '—'}</div>}
                                <div role="cell" className={cn('tabular text-right', (f.archivedCount ?? 0) > 0 ? 'text-fg-2' : 'text-fg-3')}>{n(f.archivedCount ?? 0)}</div>
                                <div role="cell" className="tabular text-right">
                                    {f.newCount == null ? <span className="text-fg-3">—</span>
                                        : f.newCount > 0 ? <span className="font-semibold text-accent">{n(f.newCount)}</span>
                                        : <span className="text-success">{t('home.complete')}</span>}
                                </div>
                                <div role="cell" className="tabular text-right text-fg-3">{(f.archivedBytes ?? 0) > 0 ? formatBytes(f.archivedBytes, i18n.language) : '—'}</div>
                                <div role="cell" className="tabular truncate text-fg-3">
                                    {formatDate(f.lastUpdated, i18n.language, { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }) || t('home.never_checked')}
                                </div>
                            </div>
                        );
                    }}
                />
            )}
        </div>
    );

    const queueSummary = counts.total === 0 ? t('home.queue_idle')
        : queueState.paused ? t('home.queue_paused', { count: counts.total })
        : t('home.queue_running', { active: counts.active, waiting: counts.waiting + counts.paused });
    const run = queueState.run;
    const settled = run.completed + run.failed + run.cancelled;

    const side = (
        <>
            <section aria-labelledby="home-queue" className="rounded-lg border border-line bg-surface-2 p-4">
                <h2 id="home-queue" className="flex items-center gap-2 text-base font-semibold text-fg">
                    {queueState.paused && counts.total > 0 ? <Pause size={16} className="text-warning" aria-hidden="true" /> : <Download size={16} className="text-accent" aria-hidden="true" />}
                    {t('home.queue_title')}
                </h2>
                <p className="mt-1 text-sm text-fg-2" aria-live="polite">{queueSummary}</p>
                {run.total > 0 && (
                    <div className="mt-3 space-y-1.5">
                        <ProgressBar value={(settled / run.total) * 100} label={t('downloads.run_progress', { done: settled, total: run.total })} tone={counts.total === 0 ? 'success' : 'primary'} />
                        <p className="tabular text-xs text-fg-3">{t('downloads.run_progress', { done: settled, total: run.total })}</p>
                    </div>
                )}
                <Button size="sm" className="mt-3" icon={Download} onClick={() => setView('downloads')}>{t('home.open_downloads')}</Button>
            </section>

            <section aria-labelledby="home-archive" className="rounded-lg border border-line bg-surface-2 p-4">
                <h2 id="home-archive" className="flex items-center gap-2 text-base font-semibold text-fg"><Archive size={16} className="text-accent" aria-hidden="true" />{t('home.archive_title')}</h2>
                <p className="tabular mt-1 text-sm text-fg-2">{t('home.archive_summary', { count: archived, size: formatBytes(bytes, i18n.language) })}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                    <Button size="sm" icon={Archive} onClick={() => setView('archive')}>{t('home.open_archive')}</Button>
                    <Button size="sm" variant="ghost" icon={FileUp} onClick={onImportOpml}>{t('sidebar.import_opml')}</Button>
                </div>
            </section>

            <section aria-labelledby="home-keys" className="rounded-lg border border-line bg-surface-2 p-4">
                <h2 id="home-keys" className="flex items-center gap-2 text-base font-semibold text-fg"><Keyboard size={16} className="text-accent" aria-hidden="true" />{t('home.shortcuts')}</h2>
                <dl className="mt-3 space-y-2 text-sm">
                    {[
                        [`${mod} K`, t('home.key_palette')],
                        [`${mod} N`, t('home.key_add')],
                        [`${mod} S`, t('home.key_check')],
                        [`${mod} F`, t('home.key_search')],
                        [`${mod} A`, t('home.key_select_all')],
                        [`${mod} 1 · 2 · 3`, t('home.key_views')],
                        [`${mod} + / −`, t('home.key_zoom')],
                        [`${mod} ,`, t('home.key_settings')],
                    ].map(([k, label]) => (
                        <div key={k} className="flex items-center justify-between gap-3">
                            <dt className="text-fg-2">{label}</dt>
                            <dd className="shrink-0"><Kbd>{k}</Kbd></dd>
                        </div>
                    ))}
                </dl>
            </section>
        </>
    );

    return (
        <div className="flex min-h-[480px] flex-1 flex-col">
            {/* ── Intestazione su una riga ── */}
            <section aria-labelledby="home-heading" className="flex flex-wrap items-center gap-x-6 gap-y-3 border-b border-line px-6 py-4">
                <div className="min-w-[240px] flex-1 max-xl:basis-full">
                    <h1 id="home-heading" className="text-xl font-semibold text-fg">{t('home.title')}</h1>
                    <p className="mt-0.5 text-sm text-fg-3" aria-live="polite">
                        {refresh ? t('home.refreshing', { done: refresh.done, total: refresh.total }) : t('home.text')}
                    </p>
                </div>
                <div className="flex shrink-0 flex-wrap gap-2">
                    <Button variant="primary" icon={RefreshCw} loading={!!refresh} disabled={!isOnline || !!refresh} onClick={onCheckAll}>{t('topbar.check_all')}</Button>
                    <Button icon={Plus} onClick={onAddFeed}>{t('sidebar.add_feed')}</Button>
                </div>
                <dl className="flex shrink-0 gap-2" aria-label={t('home.stats_label')}>
                    <Stat label={t('home.stat_feeds')} value={n(feeds.length)} />
                    <Stat label={t('home.stat_to_download')} value={n(toDownload)} tone={toDownload > 0 ? 'accent' : undefined} />
                    <Stat label={t('home.stat_archived')} value={n(archived)} tone={archived > 0 ? 'success' : undefined} />
                </dl>
            </section>

            {wide ? (
                <div className="grid min-h-0 flex-1 grid-cols-[minmax(0,1fr)_320px] divide-x divide-line">
                    <div className="flex min-h-0 min-w-0 flex-col">{table}</div>
                    <div className="min-h-0 space-y-4 overflow-y-auto bg-surface-1 p-5">{side}</div>
                </div>
            ) : (
                // finestra stretta: la tabella prende tutto lo spazio; coda, archivio e
                // scorciatoie restano nella barra laterale, in quella in alto e nella palette (Ctrl K)
                <div className="flex min-h-0 flex-1 flex-col">{table}</div>
            )}
        </div>
    );
}
