import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Virtuoso } from 'react-virtuoso';
import {
    CalendarRange, Clock, Download, FolderOpen, HardDrive, Info, Link2, ListMusic, RefreshCw, Rss, Search, SearchX, Trash2, X, Zap,
} from 'lucide-react';
import type { Episode, Feed, FeedStats } from '../../../shared/types';
import { getEnclosureUrl } from '../../../shared/getEnclosureUrl';
import { useStore } from '../../store/useStore';
import { useOnlineStatus } from '../../hooks/useOnlineStatus';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { useToast } from '../ui/Toast';
import { Button, IconButton } from '../ui/Button';
import { Badge, Checkbox, EmptyState, INPUT_CLASS, Segmented, Stat, Switch } from '../ui/Controls';
import { ConfirmDialog } from '../ui/ConfirmDialog';
import { CoverImage } from '../CoverImage';
import { EpisodeRow } from './EpisodeRow';
import { EpisodeDialog, EpisodePanel } from './EpisodeDetail';
import { episodeKey, estimateBytes, feedErrorKey, openFeed, queueEpisodes } from '../../lib/actions';
import { formatDate, inRange, parseLocalDate, presetRange, timeOf, type PeriodPreset } from '../../lib/dates';
import { parseDurationMinutes } from '../../utils/duration';
import { formatBytes } from '../../utils/format';
import { stripHtml } from '../../lib/text';
import { cn } from '../../lib/cn';

type StatusFilter = 'all' | 'missing' | 'archived';
type SortOrder = 'feed' | 'date-desc' | 'date-asc' | 'dur-desc' | 'dur-asc' | 'title';

const CRITICAL_FREE_BYTES = 200 * 1024 * 1024;
/** Sopra questa larghezza il dettaglio sta fisso a destra; sotto si apre come finestra. */
const WIDE_QUERY = '(min-width: 1280px)';
/** Da qui in su i comandi del feed hanno l'etichetta scritta; sotto, solo l'icona (con nome e suggerimento). */
const ROOMY_QUERY = '(min-width: 1600px)';

interface PendingConfirm {
    kind: 'download' | 'remove' | 'reset' | 'auto';
    episodes?: Episode[];
    detail?: React.ReactNode;
}

const SELECT_CLASS = cn(INPUT_CLASS, 'h-9 w-auto pr-8');

/**
 * La vista di un feed, impaginata per una finestra desktop orizzontale:
 * intestazione e filtri su due fasce, poi elenco degli episodi a sinistra e
 * pannello fisso a destra (scheda del feed, o il dettaglio dell'episodio scelto).
 */
export function FeedView({ feed }: { feed: Feed }) {
    const { t, i18n } = useTranslation();
    const toast = useToast();
    const isOnline = useOnlineStatus();
    const wide = useMediaQuery(WIDE_QUERY);
    const roomy = useMediaQuery(ROOMY_QUERY);
    const queueItems = useStore(s => s.queueItems);
    const feedEntry = useStore(s => s.feeds.find(f => f.url === feed.url));
    const setCurrentFeed = useStore(s => s.setCurrentFeed);
    const setView = useStore(s => s.setView);

    // ── Stato archivio del feed ─────────────────────────────────
    const [downloaded, setDownloaded] = useState<Set<string>>(new Set());
    const [stats, setStats] = useState<FeedStats | null>(null);
    useEffect(() => {
        let alive = true;
        const load = () => {
            window.api.getDownloadedEpisodes(feed.url).then(g => { if (alive) setDownloaded(new Set(g)); }).catch(() => { });
            window.api.getFeedStats(feed.url, feed.title).then(s => { if (alive) setStats(s); }).catch(() => { });
        };
        load();
        const off = window.api.onDownloadsUpdated(load);
        return () => { alive = false; off(); };
    }, [feed.url, feed.title]);

    // ── Filtri (D1: azzerati a ogni cambio di feed — il componente ha key=url) ──
    const [query, setQuery] = useState('');
    const [status, setStatus] = useState<StatusFilter>('all');
    const [period, setPeriod] = useState<PeriodPreset>('all');
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [minDur, setMinDur] = useState('');
    const [maxDur, setMaxDur] = useState('');
    const [sort, setSort] = useState<SortOrder>('feed');
    const [selected, setSelected] = useState<Set<string>>(new Set());
    const anchorRef = useRef<number | null>(null);
    const [detail, setDetail] = useState<Episode | null>(null);
    const [confirm, setConfirm] = useState<PendingConfirm | null>(null);
    const [busy, setBusy] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const [scrollEl, setScrollEl] = useState<HTMLDivElement | null>(null);

    // Ricerca episodio dalla command palette: stessa pipeline della lista
    useEffect(() => {
        const onSearch = (e: Event) => {
            setQuery((e as CustomEvent<{ query?: string }>).detail?.query ?? '');
            setTimeout(() => document.getElementById('episode-filter-input')?.focus(), 80);
        };
        window.addEventListener('feeddownloader:search-episode', onSearch);
        return () => window.removeEventListener('feeddownloader:search-episode', onSearch);
    }, []);

    const queueByUrl = useMemo(() => new Map(queueItems.map(q => [q.url, q])), [queueItems]);
    const isArchived = useCallback((ep: Episode) => downloaded.has(episodeKey(ep)), [downloaded]);

    const filtersActive = !!(query || status !== 'all' || from || to || minDur || maxDur);
    const minN = parseInt(minDur, 10) || 0;
    const maxN = parseInt(maxDur, 10) || 0;

    const visible = useMemo(() => {
        let list = feed.episodes;
        const words = query.toLowerCase().split(/\s+/).filter(Boolean);
        if (words.length) {
            list = list.filter(ep => {
                const text = [ep.title, ep.contentSnippet].filter(Boolean).join(' ').toLowerCase();
                return words.every(w => text.includes(w));
            });
        }
        if (from || to) list = list.filter(ep => inRange(ep.pubDate || ep.isoDate, from, to));
        if (status !== 'all') {
            list = list.filter(ep => {
                const done = isArchived(ep);
                const url = getEnclosureUrl(ep);
                const inQueue = !!url && queueByUrl.has(url);
                return status === 'archived' ? done : !done && !inQueue;
            });
        }
        if (minN > 0 || maxN > 0) {
            list = list.filter(ep => {
                const mins = parseDurationMinutes(ep.itunes?.duration);
                if (mins === null) return true; // durata ignota: non si esclude
                return (minN <= 0 || mins >= minN) && (maxN <= 0 || mins <= maxN);
            });
        }
        if (sort !== 'feed') {
            const time = (e: Episode) => { const v = timeOf(e.pubDate || e.isoDate); return Number.isNaN(v) ? 0 : v; };
            const dur = (e: Episode) => parseDurationMinutes(e.itunes?.duration) ?? 0;
            const cmp: Record<Exclude<SortOrder, 'feed'>, (a: Episode, b: Episode) => number> = {
                'date-desc': (a, b) => time(b) - time(a),
                'date-asc': (a, b) => time(a) - time(b),
                'dur-desc': (a, b) => dur(b) - dur(a),
                'dur-asc': (a, b) => dur(a) - dur(b),
                'title': (a, b) => (a.title || '').localeCompare(b.title || '', i18n.language, { numeric: true }),
            };
            list = [...list].sort(cmp[sort]);
        }
        return list;
    }, [feed.episodes, query, from, to, status, minN, maxN, sort, isArchived, queueByUrl, i18n.language]);

    const visibleRef = useRef(visible);
    visibleRef.current = visible;

    const totals = useMemo(() => {
        let archived = 0;
        for (const ep of feed.episodes) if (isArchived(ep)) archived++;
        return { total: feed.episodes.length, archived, missing: feed.episodes.length - archived };
    }, [feed.episodes, isArchived]);

    /** Episodi che un'azione di download prenderebbe davvero: non archiviati, non già in coda, con audio. */
    const downloadable = useCallback((list: Episode[]) => list.filter(ep => {
        const url = getEnclosureUrl(ep);
        return !!url && !isArchived(ep) && !queueByUrl.has(url);
    }), [isArchived, queueByUrl]);

    const visibleDownloadable = useMemo(() => downloadable(visible), [downloadable, visible]);
    const selectedEpisodes = useMemo(() => feed.episodes.filter(ep => selected.has(episodeKey(ep))), [feed.episodes, selected]);
    const selectedDownloadable = useMemo(() => downloadable(selectedEpisodes), [downloadable, selectedEpisodes]);
    const target = selected.size > 0 ? selectedDownloadable : visibleDownloadable;
    const targetBytes = useMemo(() => estimateBytes(target), [target]);

    // ── Selezione (F4): casella = una, Maiusc+casella = intervallo ──
    const toggleAt = useCallback((index: number, e: React.MouseEvent | React.KeyboardEvent) => {
        const list = visibleRef.current;
        const ep = list[index];
        if (!ep) return;
        const key = episodeKey(ep);
        setSelected(prev => {
            const next = new Set(prev);
            if (e.shiftKey && anchorRef.current !== null) {
                const [a, b] = [Math.min(anchorRef.current, index), Math.max(anchorRef.current, index)];
                const add = !prev.has(key);
                for (let i = a; i <= b; i++) {
                    const k = episodeKey(list[i]);
                    if (!k) continue;
                    if (add) next.add(k); else next.delete(k);
                }
            } else if (next.has(key)) next.delete(key);
            else next.add(key);
            return next;
        });
        anchorRef.current = index;
    }, []);

    const allVisibleSelected = visible.length > 0 && visible.every(ep => selected.has(episodeKey(ep)));
    const someVisibleSelected = !allVisibleSelected && visible.some(ep => selected.has(episodeKey(ep)));
    const toggleAllVisible = useCallback(() => {
        setSelected(prev => {
            const list = visibleRef.current;
            const all = list.length > 0 && list.every(ep => prev.has(episodeKey(ep)));
            const next = new Set(prev);
            for (const ep of list) { const k = episodeKey(ep); if (all) next.delete(k); else next.add(k); }
            return next;
        });
    }, []);

    // Ctrl+A (fuori dai campi di testo) seleziona tutti gli episodi visibili
    useEffect(() => {
        const onSelectAll = () => setSelected(new Set(visibleRef.current.map(episodeKey).filter(Boolean)));
        window.addEventListener('feeddownloader:select-all', onSelectAll);
        return () => window.removeEventListener('feeddownloader:select-all', onSelectAll);
    }, []);

    // ── Download ────────────────────────────────────────────────
    // date dei campi lette come giorni locali (L22), e frase senza «…» quando un estremo è aperto
    const day = (v: string) => formatDate(new Date(parseLocalDate(v)).toISOString(), i18n.language);
    const periodText = from && to ? t('filters.period_text', { from: day(from), to: day(to) })
        : from ? t('filters.period_since', { from: day(from) })
        : to ? t('filters.period_until', { to: day(to) })
        : null;

    const runDownload = async (episodes: Episode[]) => {
        setBusy(true);
        try {
            const out = await queueEpisodes(feed, episodes);
            if (out.queued > 0) toast.success(t('toast.queued', { count: out.queued }));
            else if (out.duplicates > 0) toast.info(t('toast.already_queued'));
            if (out.failed > 0) toast.error(t('toast.queue_failed', { count: out.failed }));
            setSelected(new Set());
        } finally {
            setBusy(false);
            setConfirm(null);
        }
    };

    const askDownload = async (episodes: Episode[]) => {
        if (episodes.length === 0) { toast.info(t('toast.nothing_to_download')); return; }
        if (episodes.length === 1) { await runDownload(episodes); return; }
        const estimated = estimateBytes(episodes);
        const path = await window.api.getEffectiveDownloadPath().catch(() => '');
        const disk = await window.api.checkDiskSpace(path).catch(() => null);
        if (disk && disk.freeBytes < CRITICAL_FREE_BYTES) {
            toast.error(t('toast.disk_critical', { free: formatBytes(disk.freeBytes, i18n.language) }));
            return;
        }
        const short = !!disk && disk.freeBytes < estimated * 1.2;
        setConfirm({
            kind: 'download',
            episodes,
            detail: (
                <div className="space-y-3">
                    <p>{t('confirm.download_body', { count: episodes.length, podcast: feed.title })}</p>
                    <dl className="grid grid-cols-2 gap-3 rounded-md border border-line bg-surface-2 p-3 text-sm">
                        {periodText && <div className="col-span-2"><dt className="text-xs text-fg-3">{t('filters.period')}</dt><dd className="text-fg-2">{periodText}</dd></div>}
                        <div><dt className="text-xs text-fg-3">{t('confirm.estimated')}</dt><dd className="tabular text-fg-2">≈ {formatBytes(estimated, i18n.language)}</dd></div>
                        {disk && <div><dt className="text-xs text-fg-3">{t('confirm.free_space')}</dt><dd className={cn('tabular', short ? 'text-warning' : 'text-fg-2')}>{formatBytes(disk.freeBytes, i18n.language)}</dd></div>}
                        <div className="col-span-2"><dt className="text-xs text-fg-3">{t('confirm.destination')}</dt><dd className="truncate font-mono text-xs text-fg-2" title={path}>{path}</dd></div>
                    </dl>
                    {short && <p className="text-sm font-medium text-warning">{t('confirm.space_warning')}</p>}
                </div>
            ),
        });
    };

    // Rows are memoized: hand them stable callbacks that always run the latest closure.
    const runDownloadRef = useRef(runDownload);
    runDownloadRef.current = runDownload;
    const downloadOne = useCallback((ep: Episode) => { void runDownloadRef.current([ep]); }, []);
    const reveal = useCallback(async (ep: Episode) => {
        const ok = await window.api.showArchivedEpisode(episodeKey(ep), feed.url);
        if (!ok) toast.error(t('toast.file_missing'));
    }, [feed.url, t, toast]);
    const cancel = useCallback((taskId: string) => { void window.api.cancelDownload(taskId); }, []);
    const openDetail = useCallback((ep: Episode) => setDetail(ep), []);

    // ── Feed ────────────────────────────────────────────────────
    const refresh = async () => {
        setRefreshing(true);
        try {
            const fresh = await openFeed(feed.url, { force: true });
            if (fresh) {
                const before = new Set(feed.episodes.map(episodeKey));
                const added = fresh.episodes.filter(ep => !before.has(episodeKey(ep))).length;
                toast.success(added > 0 ? t('toast.feed_new', { count: added }) : t('toast.feed_unchanged'));
            }
        } catch (e) {
            toast.error(t(feedErrorKey(e)));
        } finally {
            setRefreshing(false);
        }
    };

    const copyUrl = () => { void navigator.clipboard.writeText(feed.url).then(() => toast.success(t('common.copied'))); };

    const exportM3U = async () => {
        const res = await window.api.exportM3U(feed.title);
        if (res === true) toast.success(t('toast.m3u_done'));
        else if (res === false) toast.info(t('toast.m3u_empty'));
    };

    const openFolder = async () => {
        if (!stats) return;
        const ok = await window.api.openFolder(stats.folder);
        if (!ok) toast.info(t('toast.folder_not_yet'));
    };

    const setAuto = async (enabled: boolean, alsoMissing: boolean) => {
        await window.api.setFeedAutoDownload(feed.url, enabled);
        setConfirm(null);
        if (enabled) {
            toast.success(t('toast.auto_on'));
            if (alsoMissing) await askDownload(downloadable(feed.episodes));
        } else {
            toast.info(t('toast.auto_off'));
        }
    };

    const onToggleAuto = (next: boolean) => {
        if (next && totals.missing > 0) setConfirm({ kind: 'auto' });
        else void setAuto(next, false);
    };

    const removeFeed = async () => {
        await window.api.removeFeed(feed.url);
        setConfirm(null);
        setCurrentFeed(null);
        setView('home');
        toast.success(t('toast.feed_removed'));
    };

    const resetStatus = async (ep: Episode) => {
        await window.api.removeDownloadedEpisode(episodeKey(ep), feed.url);
        setConfirm(null);
        toast.success(t('toast.status_reset'));
    };

    const clearFilters = () => {
        setQuery(''); setStatus('all'); setPeriod('all'); setFrom(''); setTo(''); setMinDur(''); setMaxDur('');
    };

    const choosePeriod = (p: PeriodPreset) => {
        setPeriod(p);
        if (p !== 'custom') { const r = presetRange(p); setFrom(r.from); setTo(r.to); }
    };

    const img = typeof feed.image === 'string' ? feed.image : feed.image?.url;
    const description = feed.description ? stripHtml(feed.description) : '';
    const lastCheck = formatDate(feedEntry?.lastUpdated ?? feed.lastUpdated, i18n.language, { day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' });
    const detailUrl = detail ? getEnclosureUrl(detail) : undefined;

    const primaryLabel = filtersActive
        ? t('actions.download_filtered', { count: visibleDownloadable.length })
        : t('actions.download_missing', { count: visibleDownloadable.length });

    const autoSwitch = (
        <Switch
            checked={!!feedEntry?.autoDownload}
            onChange={onToggleAuto}
            label={<span className="inline-flex items-center gap-2"><Zap size={15} className="text-accent" aria-hidden="true" />{t('feed.auto_title')}</span>}
            description={t('feed.auto_desc')}
        />
    );

    const detailProps = detail ? {
        episode: detail,
        feed,
        archived: isArchived(detail),
        busy: !!detailUrl && queueByUrl.has(detailUrl),
        isOnline,
        onClose: () => setDetail(null),
        onDownload: (ep: Episode) => void runDownload([ep]),
        onReveal: (ep: Episode) => void reveal(ep),
        onResetStatus: (ep: Episode) => setConfirm({ kind: 'reset', episodes: [ep] }),
    } : null;

    return (
        <div className="flex min-h-[480px] flex-1 flex-col">
            {/* ── Fascia 1: intestazione del feed, su una riga (le cifre vanno a capo
                 solo se la finestra è stretta: non schiacciano mai titolo e pulsanti) ── */}
            <section aria-labelledby="feed-heading" className="flex flex-wrap items-center gap-x-5 gap-y-3 border-b border-line px-6 py-4">
                <span className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-line bg-surface-3 text-lg font-semibold text-accent" aria-hidden="true">
                    <CoverImage src={img} className="h-full w-full object-cover" fallback={<span>{(feed.title || '?').slice(0, 2).toUpperCase()}</span>} />
                </span>
                <div className="min-w-[280px] flex-1">
                    <div className="flex min-w-0 items-center gap-2">
                        <h1 id="feed-heading" className="truncate text-xl font-semibold text-fg">{feed.title}</h1>
                        {feedEntry?.autoDownload && <Badge tone="success" icon={Zap}>{t('feed.auto_badge')}</Badge>}
                    </div>
                    <p className="mt-0.5 flex min-w-0 items-center gap-x-4 text-sm text-fg-3">
                        {lastCheck && <span className="inline-flex shrink-0 items-center gap-1.5"><Clock size={14} aria-hidden="true" />{t('feed.last_check', { date: lastCheck })}</span>}
                        {stats && <span className="inline-flex min-w-0 items-center gap-1.5"><FolderOpen size={14} className="shrink-0" aria-hidden="true" /><span className="truncate font-mono text-xs" title={stats.folder}>{stats.folder}</span></span>}
                    </p>
                    <div className="mt-2 flex flex-wrap items-center gap-1.5">
                        <Button size="sm" icon={RefreshCw} loading={refreshing} disabled={!isOnline} onClick={() => void refresh()}>{t('feed.refresh')}</Button>
                        {roomy ? (
                            <>
                                <Button size="sm" variant="ghost" icon={FolderOpen} onClick={() => void openFolder()}>{t('feed.open_folder')}</Button>
                                <Button size="sm" variant="ghost" icon={ListMusic} onClick={() => void exportM3U()}>{t('feed.export_m3u')}</Button>
                                <Button size="sm" variant="ghost" icon={Link2} onClick={copyUrl}>{t('feed.copy_url')}</Button>
                                <Button size="sm" variant="danger-ghost" icon={Trash2} onClick={() => setConfirm({ kind: 'remove' })}>{t('feed.remove')}</Button>
                            </>
                        ) : (
                            <>
                                <IconButton size="sm" icon={FolderOpen} label={t('feed.open_folder')} onClick={() => void openFolder()} />
                                <IconButton size="sm" icon={ListMusic} label={t('feed.export_m3u')} onClick={() => void exportM3U()} />
                                <IconButton size="sm" icon={Link2} label={t('feed.copy_url')} onClick={copyUrl} />
                                <IconButton size="sm" variant="danger-ghost" icon={Trash2} label={t('feed.remove')} onClick={() => setConfirm({ kind: 'remove' })} />
                            </>
                        )}
                    </div>
                </div>
                {/* Nelle finestre strette resta solo lo spazio occupato: episodi, archiviati e
                    da scaricare sono già scritti nei filtri di stato, subito sotto. */}
                <dl className="flex shrink-0 gap-2" aria-label={t('feed.stats_label')}>
                    {wide && <Stat label={t('feed.stat_episodes')} value={totals.total.toLocaleString(i18n.language)} />}
                    {wide && <Stat label={t('feed.stat_archived')} value={totals.archived.toLocaleString(i18n.language)} tone={totals.archived > 0 ? 'success' : undefined} />}
                    {wide && <Stat label={t('feed.stat_missing')} value={totals.missing.toLocaleString(i18n.language)} tone={totals.missing > 0 ? 'accent' : undefined} />}
                    <Stat label={t('feed.stat_space')} value={stats ? formatBytes(stats.archivedBytes, i18n.language) : '—'} />
                </dl>
            </section>

            {/* ── Fascia 2: filtri, su una riga ── */}
            <div role="search" aria-label={t('filters.more')} className="flex flex-wrap items-center gap-x-3 gap-y-2 border-b border-line bg-surface-1 px-6 py-3">
                <div className="relative min-w-[180px] flex-1">
                    <Search size={15} aria-hidden="true" className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-fg-3" />
                    <input
                        id="episode-filter-input"
                        type="search"
                        aria-label={t('filters.search')}
                        placeholder={t('filters.search_placeholder')}
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        className={cn(INPUT_CLASS, 'h-9 pl-9')}
                    />
                </div>
                <Segmented
                    label={t('filters.status')}
                    value={status}
                    onChange={setStatus}
                    size={wide ? 'md' : 'sm'}
                    options={[
                        { value: 'all', label: t('filters.status_all'), count: totals.total },
                        { value: 'missing', label: t('filters.status_missing'), count: totals.missing },
                        { value: 'archived', label: t('filters.status_archived'), count: totals.archived },
                    ]}
                />
                <div className="h-6 w-px bg-line" aria-hidden="true" />
                <span className="inline-flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-fg-2"><CalendarRange size={15} className="text-accent" aria-hidden="true" /><span className="max-xl:sr-only">{t('filters.period')}</span></span>
                    <select aria-label={t('filters.period_preset')} value={period} onChange={e => choosePeriod(e.target.value as PeriodPreset)} className={SELECT_CLASS}>
                        <option value="all">{t('filters.period_all')}</option>
                        <option value="30d">{t('filters.period_30d')}</option>
                        <option value="90d">{t('filters.period_90d')}</option>
                        <option value="12m">{t('filters.period_12m')}</option>
                        <option value="thisYear">{t('filters.period_this_year')}</option>
                        <option value="lastYear">{t('filters.period_last_year')}</option>
                        <option value="custom">{t('filters.period_custom')}</option>
                    </select>
                </span>
                <label className="inline-flex items-center gap-1.5 text-sm text-fg-2">
                    {t('filters.from')}
                    <input type="date" value={from} max={to || undefined} onChange={e => { setFrom(e.target.value); setPeriod('custom'); }} className={cn(INPUT_CLASS, 'h-9 w-[150px] max-xl:w-[136px]')} />
                </label>
                <label className="inline-flex items-center gap-1.5 text-sm text-fg-2">
                    {t('filters.to')}
                    <input type="date" value={to} min={from || undefined} onChange={e => { setTo(e.target.value); setPeriod('custom'); }} className={cn(INPUT_CLASS, 'h-9 w-[150px] max-xl:w-[136px]')} />
                </label>
                <div className="h-6 w-px bg-line" aria-hidden="true" />
                <div role="group" aria-label={t('filters.duration')} className="inline-flex items-center gap-1.5 text-sm text-fg-2">
                    {t('filters.duration')}
                    <input type="number" min={0} inputMode="numeric" value={minDur} onChange={e => setMinDur(e.target.value)} placeholder={t('filters.min')} aria-label={t('filters.duration_min')} className={cn(INPUT_CLASS, 'h-9 w-[72px]')} />
                    <span className="text-fg-3" aria-hidden="true">–</span>
                    <input type="number" min={0} inputMode="numeric" value={maxDur} onChange={e => setMaxDur(e.target.value)} placeholder={t('filters.max')} aria-label={t('filters.duration_max')} className={cn(INPUT_CLASS, 'h-9 w-[72px]')} />
                    <span className="text-fg-3">{t('filters.minutes')}</span>
                </div>
                <select aria-label={t('filters.sort')} value={sort} onChange={e => setSort(e.target.value as SortOrder)} className={cn(SELECT_CLASS, 'ml-auto')}>
                    <option value="feed">{t('filters.sort_feed')}</option>
                    <option value="date-desc">{t('filters.sort_date_desc')}</option>
                    <option value="date-asc">{t('filters.sort_date_asc')}</option>
                    <option value="title">{t('filters.sort_title')}</option>
                    <option value="dur-desc">{t('filters.sort_dur_desc')}</option>
                    <option value="dur-asc">{t('filters.sort_dur_asc')}</option>
                </select>
                {filtersActive && <Button variant="ghost" icon={X} onClick={clearFilters}>{t('filters.clear')}</Button>}
            </div>

            {/* ── Area di lavoro: elenco | pannello ── */}
            <div className="flex min-h-0 flex-1">
                <div className="flex min-w-0 flex-1 flex-col">
                    {/* barra di azione: dice cosa scaricherà */}
                    <div className="flex items-center gap-3 border-b border-line px-6 py-2.5">
                        <p className="tabular min-w-0 flex-1 truncate text-sm text-fg-2" aria-live="polite">
                            {t('actions.summary', { shown: visible.length, total: totals.total, downloadable: visibleDownloadable.length })}
                            {periodText && <span className="text-fg-3"> · {periodText}</span>}
                            {selected.size > 0 && <span className="font-medium text-accent"> · {t('actions.selected', { count: selected.size })}</span>}
                        </p>
                        {selected.size > 0 && (
                            <>
                                <Button variant="ghost" size="sm" onClick={() => setSelected(new Set())}>{t('actions.deselect')}</Button>
                                <Button variant="secondary" icon={Download} disabled={!isOnline || selectedDownloadable.length === 0 || busy} onClick={() => void askDownload(selectedDownloadable)}>
                                    {t('actions.download_selected', { count: selectedDownloadable.length })}
                                </Button>
                            </>
                        )}
                        {/* finestre strette: senza pannello laterale l'archivio automatico sta qui, accanto al download */}
                        {!wide && (
                            <Switch
                                className="shrink-0 items-center"
                                checked={!!feedEntry?.autoDownload}
                                onChange={onToggleAuto}
                                label={<span className="inline-flex items-center gap-1.5 whitespace-nowrap text-sm"><Zap size={14} className="text-accent" aria-hidden="true" />{t('feed.auto_title')}</span>}
                            />
                        )}
                        <Button variant="primary" icon={Download} loading={busy} disabled={!isOnline || visibleDownloadable.length === 0} onClick={() => void askDownload(visibleDownloadable)}>
                            {primaryLabel}
                        </Button>
                    </div>

                    {visible.length === 0 ? (
                        feed.episodes.length === 0
                            ? <EmptyState icon={Rss} title={t('episodes.empty_feed')} />
                            : <EmptyState icon={SearchX} title={t('episodes.empty_filtered')}><Button onClick={clearFilters}>{t('filters.clear')}</Button></EmptyState>
                    ) : (
                        <>
                            <div className="flex items-center gap-2 border-b border-line bg-surface-2 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-fg-3">
                                <div className="shrink-0">
                                    <Checkbox checked={allVisibleSelected} indeterminate={someVisibleSelected} onChange={toggleAllVisible} label={t('episodes.select_all')} />
                                </div>
                                <div className="min-w-0 flex-1">{t('episodes.col_episode')}</div>
                                <div className="w-40 shrink-0">{t('episodes.col_state')}</div>
                                <div className="w-[76px] shrink-0 text-right"><span className="sr-only">{t('episodes.col_actions')}</span></div>
                            </div>
                            <div ref={setScrollEl} role="list" aria-label={t('episodes.table_label', { podcast: feed.title })} className="min-h-0 flex-1 overflow-y-auto">
                                {scrollEl && (
                                    <Virtuoso
                                        customScrollParent={scrollEl}
                                        data={visible}
                                        computeItemKey={(i, ep) => episodeKey(ep) || i}
                                        itemContent={(index, ep) => {
                                            const url = getEnclosureUrl(ep);
                                            return (
                                                <EpisodeRow
                                                    episode={ep}
                                                    index={index}
                                                    selected={selected.has(episodeKey(ep))}
                                                    current={!!detail && episodeKey(detail) === episodeKey(ep)}
                                                    archived={isArchived(ep)}
                                                    queueItem={url ? queueByUrl.get(url) : undefined}
                                                    isOnline={isOnline}
                                                    onToggle={toggleAt}
                                                    onOpen={openDetail}
                                                    onDownload={downloadOne}
                                                    onReveal={reveal}
                                                    onCancel={cancel}
                                                />
                                            );
                                        }}
                                    />
                                )}
                            </div>
                        </>
                    )}
                </div>

                {wide && (
                    <aside aria-label={t('feed.panel_label')} className="flex w-[400px] shrink-0 flex-col border-l border-line bg-surface-1">
                        {detailProps ? <EpisodePanel {...detailProps} /> : (
                            <div className="min-h-0 flex-1 space-y-4 overflow-y-auto p-5">
                                <section className="rounded-lg border border-line bg-surface-2 p-4">{autoSwitch}</section>

                                <section aria-labelledby="fp-plan" className="rounded-lg border border-line bg-surface-2 p-4">
                                    <h2 id="fp-plan" className="flex items-center gap-2 text-base font-semibold text-fg"><HardDrive size={16} className="text-accent" aria-hidden="true" />{t('feed.plan_title')}</h2>
                                    <p className="mt-1 text-sm text-fg-3">{selected.size > 0 ? t('feed.plan_selection') : filtersActive ? t('feed.plan_filtered') : t('feed.plan_all')}</p>
                                    <dl className="mt-3 grid grid-cols-2 gap-3">
                                        <div><dt className="text-xs text-fg-3">{t('feed.plan_episodes')}</dt><dd className="tabular text-xl font-semibold text-fg">{target.length.toLocaleString(i18n.language)}</dd></div>
                                        <div><dt className="text-xs text-fg-3">{t('confirm.estimated')}</dt><dd className="tabular text-xl font-semibold text-fg">≈ {formatBytes(targetBytes, i18n.language)}</dd></div>
                                        {periodText && <div className="col-span-2"><dt className="text-xs text-fg-3">{t('filters.period')}</dt><dd className="text-sm text-fg-2">{periodText}</dd></div>}
                                    </dl>
                                    <p className="mt-3 text-xs text-fg-3">{t('feed.plan_hint')}</p>
                                </section>

                                <section aria-labelledby="fp-about" className="rounded-lg border border-line bg-surface-2 p-4">
                                    <h2 id="fp-about" className="flex items-center gap-2 text-base font-semibold text-fg"><Info size={16} className="text-accent" aria-hidden="true" />{t('feed.about_title')}</h2>
                                    {description
                                        ? <p className="mt-2 whitespace-pre-line text-sm text-fg-2">{description}</p>
                                        : <p className="mt-2 text-sm italic text-fg-3">{t('detail.no_notes')}</p>}
                                    <p className="mt-3 truncate font-mono text-xs text-fg-3" title={feed.url}>{feed.url}</p>
                                </section>

                                <p className="px-1 text-xs text-fg-3">{t('feed.panel_hint')}</p>
                            </div>
                        )}
                    </aside>
                )}
            </div>

            {!wide && detailProps && <EpisodeDialog open {...detailProps} />}

            <ConfirmDialog
                open={confirm?.kind === 'download'}
                title={t('confirm.download_title', { count: confirm?.episodes?.length ?? 0 })}
                message={confirm?.detail}
                confirmLabel={t('confirm.download_go')}
                tone="info"
                icon={Download}
                busy={busy}
                onConfirm={() => confirm?.episodes && void runDownload(confirm.episodes)}
                onCancel={() => setConfirm(null)}
            />
            <ConfirmDialog
                open={confirm?.kind === 'remove'}
                title={t('confirm.remove_title')}
                message={t('confirm.remove_body', { podcast: feed.title })}
                confirmLabel={t('confirm.remove_go')}
                tone="danger"
                onConfirm={() => void removeFeed()}
                onCancel={() => setConfirm(null)}
            />
            <ConfirmDialog
                open={confirm?.kind === 'reset'}
                title={t('confirm.reset_title')}
                message={t('confirm.reset_body')}
                confirmLabel={t('confirm.reset_go')}
                tone="warning"
                onConfirm={() => confirm?.episodes?.[0] && void resetStatus(confirm.episodes[0])}
                onCancel={() => setConfirm(null)}
            />
            <ConfirmDialog
                open={confirm?.kind === 'auto'}
                title={t('confirm.auto_title')}
                message={t('confirm.auto_body', { count: totals.missing })}
                confirmLabel={t('confirm.auto_with_missing', { count: totals.missing })}
                secondaryAction={{ label: t('confirm.auto_only_new'), onClick: () => void setAuto(true, false) }}
                tone="info"
                icon={Zap}
                onConfirm={() => void setAuto(true, true)}
                onCancel={() => setConfirm(null)}
            />
        </div>
    );
}
