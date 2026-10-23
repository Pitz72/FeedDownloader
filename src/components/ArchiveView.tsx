import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Virtuoso } from 'react-virtuoso';
import {
    AlertCircle, Archive, ArrowDown, ArrowUp, CalendarRange, FileSpreadsheet, FolderOpen, Library, Loader2, Search, SearchX, ShieldCheck, X,
} from 'lucide-react';
import type { ArchiveEntry } from '../../shared/types';
import { useToast } from './ui/Toast';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { Button, IconButton } from './ui/Button';
import { EmptyState, SelectField, Stat, TextField } from './ui/Controls';
import { formatDate, inRange, presetRange, timeOf, type PeriodPreset } from '../lib/dates';
import { formatBytes } from '../utils/format';
import { cn } from '../lib/cn';

type SortKey = 'downloadedAt' | 'pubDate' | 'title' | 'podcastTitle' | 'fileSize' | 'bitrate';
type SortDir = 'asc' | 'desc';

// min-w = somma delle colonne minime + spazi + margini: intestazione e righe
// restano larghe uguali anche quando la tabella scorre di lato. Nella finestra
// stretta Dimensione e Qualità lasciano il posto alle due date.
const COLS_WIDE = 'min-w-[796px] grid-cols-[minmax(112px,1fr)_minmax(192px,2.4fr)_96px_96px_80px_72px_36px]';
const COLS_NARROW = 'min-w-[620px] grid-cols-[minmax(112px,1fr)_minmax(192px,2.4fr)_96px_96px_36px]';
/** La colonna dei filtri sta a sinistra da qui in su; sotto, i filtri vanno in una fascia sopra la tabella. */
const WIDE_QUERY = '(min-width: 1360px)';

/**
 * Vista Archivio, impaginata per una finestra desktop orizzontale: a sinistra
 * una colonna con ricerca, periodo ed elenco dei podcast (ogni voce con il suo
 * conteggio filtra la tabella); a destra la tabella, che scorre per conto suo.
 */
export function ArchiveView({ onOpenHealthCheck }: { onOpenHealthCheck: () => void }) {
    const { t, i18n } = useTranslation();
    const toast = useToast();
    const wide = useMediaQuery(WIDE_QUERY);
    const [entries, setEntries] = useState<ArchiveEntry[]>([]);
    const [loading, setLoading] = useState(true);
    // L31: a failed load must not look like an empty archive
    const [loadError, setLoadError] = useState(false);
    const [query, setQuery] = useState('');
    const [podcast, setPodcast] = useState('');
    const [period, setPeriod] = useState<PeriodPreset>('all');
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [sortKey, setSortKey] = useState<SortKey>('downloadedAt');
    const [sortDir, setSortDir] = useState<SortDir>('desc');
    const [scrollEl, setScrollEl] = useState<HTMLDivElement | null>(null);
    const COLS = wide ? COLS_WIDE : COLS_NARROW;

    const load = useCallback(() => {
        window.api.getArchive()
            .then(data => { setEntries(data); setLoadError(false); })
            .catch(() => setLoadError(true))
            .finally(() => setLoading(false));
    }, []);

    // M5: coalesce reloads — during a batch the main process notifies after every file
    const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
    useEffect(() => {
        load();
        const off = window.api.onDownloadsUpdated(() => {
            if (timer.current) clearTimeout(timer.current);
            timer.current = setTimeout(load, 600);
        });
        return () => { off(); if (timer.current) clearTimeout(timer.current); };
    }, [load]);

    /** Podcast in ordine alfabetico, con quanti episodi e quanto spazio ha ciascuno. */
    const podcasts = useMemo(() => {
        const map = new Map<string, { count: number; bytes: number }>();
        for (const e of entries) {
            const p = map.get(e.podcastTitle) ?? { count: 0, bytes: 0 };
            p.count++;
            p.bytes += e.fileSize ?? 0;
            map.set(e.podcastTitle, p);
        }
        return [...map.entries()].map(([title, v]) => ({ title, ...v })).sort((a, b) => a.title.localeCompare(b.title, i18n.language));
    }, [entries, i18n.language]);
    const totalBytes = useMemo(() => entries.reduce((n, e) => n + (e.fileSize ?? 0), 0), [entries]);
    const range = useMemo(() => {
        const times = entries.map(e => timeOf(e.pubDate)).filter(n => !Number.isNaN(n));
        if (times.length === 0) return null;
        return { oldest: new Date(Math.min(...times)).toISOString(), newest: new Date(Math.max(...times)).toISOString() };
    }, [entries]);

    const filtered = useMemo(() => {
        let list = entries;
        if (podcast) list = list.filter(e => e.podcastTitle === podcast);
        if (from || to) list = list.filter(e => inRange(e.pubDate, from, to));
        const q = query.trim().toLowerCase();
        if (q) {
            // L30: the search also matches dates, localized or ISO
            const matchesDate = (iso?: string) => {
                const d = iso ? new Date(iso) : null;
                if (!d || Number.isNaN(d.getTime())) return false;
                return d.toLocaleDateString(i18n.language).toLowerCase().includes(q) || d.toISOString().slice(0, 10).includes(q);
            };
            list = list.filter(e => e.title.toLowerCase().includes(q) || e.podcastTitle.toLowerCase().includes(q)
                || (e.filename ?? '').toLowerCase().includes(q) || matchesDate(e.pubDate) || matchesDate(e.downloadedAt));
        }
        const val = (e: ArchiveEntry): number | string => {
            switch (sortKey) {
                case 'pubDate': { const v = timeOf(e.pubDate); return Number.isNaN(v) ? 0 : v; }
                case 'downloadedAt': { const v = timeOf(e.downloadedAt); return Number.isNaN(v) ? 0 : v; }
                case 'fileSize': return e.fileSize ?? 0;
                case 'bitrate': return e.bitrate ?? 0;
                case 'title': return e.title.toLowerCase();
                case 'podcastTitle': return e.podcastTitle.toLowerCase();
            }
        };
        return [...list].sort((a, b) => {
            const va = val(a), vb = val(b);
            const c = typeof va === 'string' ? va.localeCompare(vb as string, i18n.language, { numeric: true }) : (va as number) - (vb as number);
            return sortDir === 'desc' ? -c : c;
        });
    }, [entries, podcast, from, to, query, sortKey, sortDir, i18n.language]);

    const filteredBytes = useMemo(() => filtered.reduce((n, e) => n + (e.fileSize ?? 0), 0), [filtered]);
    const filtersActive = !!(query || podcast || from || to);

    const clearFilters = () => { setQuery(''); setPodcast(''); setPeriod('all'); setFrom(''); setTo(''); };
    const choosePeriod = (p: PeriodPreset) => {
        setPeriod(p);
        if (p !== 'custom') { const r = presetRange(p); setFrom(r.from); setTo(r.to); }
    };

    const sortBy = (key: SortKey) => {
        if (key === sortKey) setSortDir(d => (d === 'desc' ? 'asc' : 'desc'));
        else { setSortKey(key); setSortDir(key === 'title' || key === 'podcastTitle' ? 'asc' : 'desc'); }
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

    const exportCsv = async () => {
        const ok = await window.api.exportArchiveCSV().catch(() => false);
        if (ok) toast.success(t('toast.csv_done'));
    };

    // ── Filtri (gli stessi campi, in colonna o in fascia) ──
    const searchField = (
        <TextField
            inputId="archive-filter-input"
            containerClassName={wide ? undefined : 'min-w-[220px] flex-1'}
            label={t('archive.search')}
            hideLabel
            leadingIcon={Search}
            placeholder={t('archive.search_placeholder')}
            value={query}
            onChange={e => setQuery(e.target.value)}
            trailing={query ? <IconButton icon={X} size="sm" label={t('common.clear')} onClick={() => setQuery('')} /> : undefined}
        />
    );
    const periodSelect = (
        <SelectField label={t('archive.period')} hideLabel value={period} onChange={e => choosePeriod(e.target.value as PeriodPreset)} containerClassName={wide ? undefined : 'w-48'}>
            <option value="all">{t('archive.period_all')}</option>
            <option value="30d">{t('filters.period_30d')}</option>
            <option value="90d">{t('filters.period_90d')}</option>
            <option value="12m">{t('filters.period_12m')}</option>
            <option value="thisYear">{t('filters.period_this_year')}</option>
            <option value="lastYear">{t('filters.period_last_year')}</option>
            <option value="custom">{t('filters.period_custom')}</option>
        </SelectField>
    );
    const fromField = <TextField type="date" label={wide ? t('filters.from') : t('archive.published_from')} value={from} max={to || undefined} onChange={e => { setFrom(e.target.value); setPeriod('custom'); }} containerClassName={wide ? undefined : 'w-40'} />;
    const toField = <TextField type="date" label={t('filters.to')} value={to} min={from || undefined} onChange={e => { setTo(e.target.value); setPeriod('custom'); }} containerClassName={wide ? undefined : 'w-40'} />;

    const podcastButton = (value: string, label: string, count: number, bytes: number) => {
        const active = podcast === value;
        return (
            <li key={value || '*'}>
                <button
                    type="button"
                    aria-pressed={active}
                    onClick={() => setPodcast(value)}
                    title={`${label} · ${formatBytes(bytes, i18n.language)}`}
                    className={cn('relative flex w-full items-center gap-2 rounded-md px-3 py-1.5 text-left text-sm transition-colors', active ? 'bg-surface-4 text-fg' : 'text-fg-2 hover:bg-surface-3 hover:text-fg')}
                >
                    {active && <span aria-hidden="true" className="absolute inset-y-1.5 left-0 w-0.5 rounded-full bg-accent" />}
                    <span className={cn('min-w-0 flex-1 truncate', active && 'font-medium')}>{label}</span>
                    <span className={cn('tabular shrink-0 text-xs', active ? 'text-accent-strong' : 'text-fg-3')}>{count.toLocaleString(i18n.language)}</span>
                </button>
            </li>
        );
    };

    const table = filtered.length === 0 ? (
        <EmptyState icon={SearchX} title={t('archive.no_results')}>{filtersActive && <Button onClick={clearFilters}>{t('filters.clear')}</Button>}</EmptyState>
    ) : (
        <div ref={setScrollEl} role="table" aria-label={t('archive.table_label')} aria-rowcount={filtered.length + 1} className="min-h-0 flex-1 overflow-auto">
            <div role="row" className={cn('sticky top-0 z-[5] grid items-center gap-3 border-b border-line bg-surface-2 px-5 py-2 text-xs font-semibold', COLS)}>
                {header('podcastTitle', t('archive.col_podcast'))}
                {header('title', t('archive.col_episode'))}
                {header('pubDate', t('archive.col_published'))}
                {header('downloadedAt', t('archive.col_downloaded'))}
                {wide && header('fileSize', t('archive.col_size'), 'right')}
                {wide && header('bitrate', t('archive.col_quality'), 'right')}
                <div role="columnheader"><span className="sr-only">{t('archive.col_actions')}</span></div>
            </div>
            {scrollEl && (
                <Virtuoso
                    customScrollParent={scrollEl}
                    data={filtered}
                    computeItemKey={(_, e) => `${e.feedUrl ?? ''}|${e.guid}`}
                    itemContent={(_, e) => (
                        <div role="row" className={cn('grid items-center gap-3 border-b border-line px-5 py-2 text-sm hover:bg-surface-2', COLS)}>
                            <div role="cell" className="truncate text-fg-2" title={e.podcastTitle}>{e.podcastTitle}</div>
                            <div role="cell" className="truncate font-medium text-fg" title={e.filename ? `${e.title}\n${e.filename}` : e.title}>{e.title}</div>
                            <div role="cell" className="tabular truncate text-fg-3">{formatDate(e.pubDate, i18n.language) || '—'}</div>
                            <div role="cell" className="tabular truncate text-fg-3">{formatDate(e.downloadedAt, i18n.language) || '—'}</div>
                            {wide && <div role="cell" className="tabular text-right text-fg-3">{formatBytes(e.fileSize, i18n.language)}</div>}
                            {wide && <div role="cell" className="tabular text-right text-fg-3">{e.bitrate ? `${e.bitrate} kbps` : '—'}</div>}
                            <div role="cell" className="flex justify-end">
                                {e.filename && (
                                    <IconButton
                                        icon={FolderOpen}
                                        size="sm"
                                        label={t('episodes.reveal', { title: e.title })}
                                        onClick={async () => { if (!(await window.api.showArchivedEpisode(e.guid, e.feedUrl))) toast.error(t('toast.file_missing')); }}
                                    />
                                )}
                            </div>
                        </div>
                    )}
                />
            )}
        </div>
    );

    const summary = (
        <div className="flex h-11 shrink-0 items-center gap-3 border-b border-line px-5">
            <p className="tabular min-w-0 flex-1 truncate text-sm text-fg-2" aria-live="polite">
                {t('archive.shown', { shown: filtered.length, total: entries.length, size: formatBytes(filteredBytes, i18n.language) })}
                {podcast && <span className="text-fg-3"> · {podcast}</span>}
            </p>
            {filtersActive && <Button size="sm" variant="ghost" icon={X} onClick={clearFilters}>{t('filters.clear')}</Button>}
        </div>
    );

    return (
        <div className="flex min-h-[480px] flex-1 flex-col">
            {/* ── Intestazione su una riga ── */}
            <section aria-labelledby="archive-heading" className="flex flex-wrap items-center gap-x-6 gap-y-3 border-b border-line px-6 py-4">
                <div className="min-w-[240px] flex-1 max-xl:basis-full">
                    <h1 id="archive-heading" className="text-xl font-semibold text-fg">{t('archive.title')}</h1>
                    <p className="mt-0.5 text-sm text-fg-3">
                        {range ? t('archive.range', { oldest: formatDate(range.oldest, i18n.language), newest: formatDate(range.newest, i18n.language) }) : t('archive.subtitle')}
                    </p>
                </div>
                <div className="flex shrink-0 flex-wrap gap-2">
                    <Button icon={ShieldCheck} onClick={onOpenHealthCheck} disabled={entries.length === 0}>{t('archive.verify')}</Button>
                    <Button variant="ghost" icon={FileSpreadsheet} onClick={() => void exportCsv()} disabled={entries.length === 0}>{t('archive.export_csv')}</Button>
                </div>
                <dl className="flex shrink-0 gap-2" aria-label={t('archive.stats_label')}>
                    <Stat label={t('archive.stat_episodes')} value={entries.length.toLocaleString(i18n.language)} />
                    <Stat label={t('archive.stat_podcasts')} value={podcasts.length.toLocaleString(i18n.language)} />
                    <Stat label={t('archive.stat_space')} value={formatBytes(totalBytes, i18n.language)} />
                </dl>
            </section>

            {loading ? (
                <div className="flex items-center justify-center gap-3 py-20 text-fg-3"><Loader2 size={20} className="animate-spin" aria-hidden="true" />{t('archive.loading')}</div>
            ) : loadError ? (
                <EmptyState icon={AlertCircle} title={t('archive.load_error')}><Button onClick={() => { setLoading(true); load(); }}>{t('common.retry')}</Button></EmptyState>
            ) : entries.length === 0 ? (
                <EmptyState icon={Archive} title={t('archive.empty_title')} text={t('archive.empty_text')} />
            ) : wide ? (
                <div className="grid min-h-0 flex-1 grid-cols-[264px_minmax(0,1fr)] divide-x divide-line">
                    <div role="search" aria-label={t('archive.filters_label')} className="flex min-h-0 flex-col bg-surface-1">
                        <div className="shrink-0 space-y-4 border-b border-line p-4">
                            {searchField}
                            <div className="space-y-3">
                                <p className="flex items-center gap-1.5 text-sm font-medium text-fg-2"><CalendarRange size={15} className="text-accent" aria-hidden="true" />{t('archive.period_title')}</p>
                                {periodSelect}
                                {fromField}
                                {toField}
                            </div>
                        </div>
                        <h2 id="archive-podcasts" className="flex shrink-0 items-center gap-1.5 px-4 pb-1 pt-3 text-sm font-medium text-fg-2">
                            <Library size={15} className="text-accent" aria-hidden="true" />{t('archive.podcasts_title')}
                        </h2>
                        <ul aria-labelledby="archive-podcasts" className="min-h-0 flex-1 space-y-0.5 overflow-y-auto px-2 pb-3">
                            {podcastButton('', t('archive.all_podcasts'), entries.length, totalBytes)}
                            {podcasts.map(p => podcastButton(p.title, p.title, p.count, p.bytes))}
                        </ul>
                    </div>
                    <div className="flex min-h-0 min-w-0 flex-col">
                        {summary}
                        {table}
                    </div>
                </div>
            ) : (
                <div className="flex min-h-0 flex-1 flex-col">
                    <div role="search" aria-label={t('archive.filters_label')} className="flex shrink-0 flex-wrap items-end gap-3 border-b border-line bg-surface-1 px-6 py-3">
                        {searchField}
                        <SelectField label={t('archive.podcast')} hideLabel value={podcast} onChange={e => setPodcast(e.target.value)} containerClassName="w-56">
                            <option value="">{t('archive.all_podcasts')}</option>
                            {podcasts.map(p => <option key={p.title} value={p.title}>{p.title} ({p.count})</option>)}
                        </SelectField>
                        {periodSelect}
                        {fromField}
                        {toField}
                    </div>
                    {summary}
                    {table}
                </div>
            )}
        </div>
    );
}
