import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Virtuoso } from 'react-virtuoso';
import { Archive, ArrowDown, ArrowUp, FileSpreadsheet, FolderOpen, Loader2, Search, SearchX, ShieldCheck, X, AlertCircle } from 'lucide-react';
import type { ArchiveEntry } from '../../shared/types';
import { useToast } from './ui/Toast';
import { Button, IconButton } from './ui/Button';
import { EmptyState, SelectField, Stat, TextField } from './ui/Controls';
import { formatDate, inRange, timeOf } from '../lib/dates';
import { formatBytes } from '../utils/format';
import { cn } from '../lib/cn';

type SortKey = 'downloadedAt' | 'pubDate' | 'title' | 'podcastTitle' | 'fileSize' | 'bitrate';
type SortDir = 'asc' | 'desc';

const COLS = 'grid-cols-[minmax(140px,1fr)_minmax(200px,2fr)_112px_112px_92px_84px_44px]';

/** Vista Archivio: tutto ciò che è stato scaricato, con filtri, ordinamento e verifica. */
export function ArchiveView({ onOpenHealthCheck }: { onOpenHealthCheck: () => void }) {
    const { t, i18n } = useTranslation();
    const toast = useToast();
    const [entries, setEntries] = useState<ArchiveEntry[]>([]);
    const [loading, setLoading] = useState(true);
    // L31: a failed load must not look like an empty archive
    const [loadError, setLoadError] = useState(false);
    const [query, setQuery] = useState('');
    const [podcast, setPodcast] = useState('');
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [sortKey, setSortKey] = useState<SortKey>('downloadedAt');
    const [sortDir, setSortDir] = useState<SortDir>('desc');

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

    const podcasts = useMemo(() => [...new Set(entries.map(e => e.podcastTitle))].sort((a, b) => a.localeCompare(b, i18n.language)), [entries, i18n.language]);
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

    const sortBy = (key: SortKey) => {
        if (key === sortKey) setSortDir(d => (d === 'desc' ? 'asc' : 'desc'));
        else { setSortKey(key); setSortDir(key === 'title' || key === 'podcastTitle' ? 'asc' : 'desc'); }
    };

    const header = (key: SortKey, label: string, align: 'left' | 'right' = 'left') => {
        const active = sortKey === key;
        return (
            <div role="columnheader" aria-sort={active ? (sortDir === 'asc' ? 'ascending' : 'descending') : 'none'} className={align === 'right' ? 'text-right' : undefined}>
                <button type="button" onClick={() => sortBy(key)} className={cn('inline-flex items-center gap-1 rounded-sm uppercase tracking-wide hover:text-fg', active ? 'text-accent' : 'text-fg-3')}>
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

    const scrollParent = document.getElementById('main-content');

    return (
        <div className="flex min-h-full flex-col">
            <section aria-labelledby="archive-heading" className="flex flex-wrap items-end justify-between gap-4 border-b border-line px-6 pb-5 pt-5">
                <div className="min-w-0">
                    <h1 id="archive-heading" className="text-2xl font-semibold text-fg">{t('archive.title')}</h1>
                    <p className="mt-1 text-sm text-fg-3">
                        {range ? t('archive.range', { oldest: formatDate(range.oldest, i18n.language), newest: formatDate(range.newest, i18n.language) }) : t('archive.subtitle')}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                        <Button size="sm" icon={ShieldCheck} onClick={onOpenHealthCheck} disabled={entries.length === 0}>{t('archive.verify')}</Button>
                        <Button size="sm" variant="ghost" icon={FileSpreadsheet} onClick={() => void exportCsv()} disabled={entries.length === 0}>{t('archive.export_csv')}</Button>
                    </div>
                </div>
                <dl className="flex flex-wrap gap-2" aria-label={t('archive.stats_label')}>
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
            ) : (
                <>
                    <div className="flex flex-wrap items-end gap-3 border-b border-line bg-surface-1 px-6 py-4">
                        <TextField
                            inputId="archive-filter-input"
                            containerClassName="min-w-[220px] flex-1"
                            label={t('archive.search')}
                            hideLabel
                            leadingIcon={Search}
                            placeholder={t('archive.search_placeholder')}
                            value={query}
                            onChange={e => setQuery(e.target.value)}
                            trailing={query ? <IconButton icon={X} size="sm" label={t('common.clear')} onClick={() => setQuery('')} /> : undefined}
                        />
                        <SelectField label={t('archive.podcast')} hideLabel value={podcast} onChange={e => setPodcast(e.target.value)} containerClassName="w-60">
                            <option value="">{t('archive.all_podcasts')}</option>
                            {podcasts.map(p => <option key={p} value={p}>{p}</option>)}
                        </SelectField>
                        <TextField type="date" label={t('archive.published_from')} value={from} max={to || undefined} onChange={e => setFrom(e.target.value)} containerClassName="w-40" />
                        <TextField type="date" label={t('filters.to')} value={to} min={from || undefined} onChange={e => setTo(e.target.value)} containerClassName="w-40" />
                        {filtersActive && <Button variant="ghost" icon={X} onClick={() => { setQuery(''); setPodcast(''); setFrom(''); setTo(''); }}>{t('filters.clear')}</Button>}
                    </div>

                    <p className="tabular px-6 py-2 text-sm text-fg-3" aria-live="polite">
                        {t('archive.shown', { shown: filtered.length, total: entries.length, size: formatBytes(filteredBytes, i18n.language) })}
                    </p>

                    {filtered.length === 0 ? (
                        <EmptyState icon={SearchX} title={t('archive.no_results')} />
                    ) : (
                        <div role="table" aria-label={t('archive.table_label')} aria-rowcount={filtered.length + 1} className="flex-1 overflow-x-auto">
                            <div role="row" className={cn('sticky top-0 z-[5] grid items-center gap-3 border-y border-line bg-surface-2 px-6 py-2 text-xs font-semibold', COLS)}>
                                {header('podcastTitle', t('archive.col_podcast'))}
                                {header('title', t('archive.col_episode'))}
                                {header('pubDate', t('archive.col_published'))}
                                {header('downloadedAt', t('archive.col_downloaded'))}
                                {header('fileSize', t('archive.col_size'), 'right')}
                                {header('bitrate', t('archive.col_quality'), 'right')}
                                <div role="columnheader"><span className="sr-only">{t('archive.col_actions')}</span></div>
                            </div>
                            <Virtuoso
                                customScrollParent={scrollParent ?? undefined}
                                data={filtered}
                                computeItemKey={(_, e) => `${e.feedUrl ?? ''}|${e.guid}`}
                                itemContent={(_, e) => (
                                    <div role="row" className={cn('grid items-center gap-3 border-b border-line px-6 py-2 text-sm hover:bg-surface-2', COLS)}>
                                        <div role="cell" className="truncate text-fg-2" title={e.podcastTitle}>{e.podcastTitle}</div>
                                        <div role="cell" className="truncate font-medium text-fg" title={e.filename ? `${e.title}\n${e.filename}` : e.title}>{e.title}</div>
                                        <div role="cell" className="tabular text-fg-3">{formatDate(e.pubDate, i18n.language) || '—'}</div>
                                        <div role="cell" className="tabular text-fg-3">{formatDate(e.downloadedAt, i18n.language) || '—'}</div>
                                        <div role="cell" className="tabular text-right text-fg-3">{formatBytes(e.fileSize, i18n.language)}</div>
                                        <div role="cell" className="tabular text-right text-fg-3">{e.bitrate ? `${e.bitrate} kbps` : '—'}</div>
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
                        </div>
                    )}
                </>
            )}
        </div>
    );
}
