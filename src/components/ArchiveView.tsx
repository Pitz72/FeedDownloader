import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { Virtuoso } from 'react-virtuoso';
import { Icon } from './Icon';
import { useTranslation } from 'react-i18next';
import type { ArchiveEntry } from '../../shared/types';

type SortKey = 'downloadedAt' | 'pubDate' | 'fileSize' | 'bitrate';
type SortDir = 'asc' | 'desc';

const COL_TEMPLATE = '1fr 1.5fr 100px 80px 60px 32px';
const COL_GAP = '12px';

function formatBytes(bytes?: number): string {
    if (!bytes) return '—';
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function formatDate(iso?: string): string {
    if (!iso) return '—';
    try { return new Date(iso).toLocaleDateString(); } catch { return '—'; }
}

interface SortHeaderCellProps {
    label: string;
    sortKey: SortKey;
    activeSortKey: SortKey;
    sortDir: SortDir;
    align?: 'left' | 'right';
    onClick: (key: SortKey) => void;
}

const SortHeaderCell: React.FC<SortHeaderCellProps> = ({ label, sortKey, activeSortKey, sortDir, align = 'left', onClick }) => {
    const isActive = activeSortKey === sortKey;
    return (
        <button
            onClick={() => onClick(sortKey)}
            className={`flex items-center gap-1 ${align === 'right' ? 'justify-end' : ''} hover-text-primary transition-colors`}
            style={{ color: isActive ? 'var(--color-primary)' : 'var(--color-on-surface-variant)' }}
        >
            <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ fontFamily: 'var(--font-label)' }}>
                {label}
            </span>
            {isActive && (
                <Icon
                    name={sortDir === 'desc' ? 'arrow_downward' : 'arrow_upward'}
                    size={10}
                    style={{ color: 'var(--color-primary)' }}
                />
            )}
        </button>
    );
};

export const ArchiveView: React.FC = () => {
    const { t } = useTranslation();
    const [entries, setEntries] = useState<ArchiveEntry[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [podcastFilter, setPodcastFilter] = useState('');
    const [sortKey, setSortKey] = useState<SortKey>('downloadedAt');
    const [sortDir, setSortDir] = useState<SortDir>('desc');

    const loadEntries = useCallback(() => {
        window.api.getArchive()
            .then(data => { setEntries(data); setIsLoading(false); })
            .catch(() => setIsLoading(false));
    }, []);

    useEffect(() => {
        loadEntries();
        const unsub = window.api.onDownloadsUpdated(() => loadEntries());
        return () => unsub();
    }, [loadEntries]);

    const podcasts = useMemo(() => {
        const set = new Set(entries.map(e => e.podcastTitle));
        return [...set].sort((a, b) => a.localeCompare(b));
    }, [entries]);

    const totalSize = useMemo(
        () => entries.reduce((acc, e) => acc + (e.fileSize ?? 0), 0),
        [entries]
    );

    const filtered = useMemo(() => {
        let result = entries;
        if (podcastFilter) result = result.filter(e => e.podcastTitle === podcastFilter);
        if (searchQuery.trim()) {
            const q = searchQuery.toLowerCase();
            result = result.filter(e =>
                e.title.toLowerCase().includes(q) || e.podcastTitle.toLowerCase().includes(q)
            );
        }
        return [...result].sort((a, b) => {
            let va = 0, vb = 0;
            if (sortKey === 'pubDate') {
                va = new Date(a.pubDate || 0).getTime();
                vb = new Date(b.pubDate || 0).getTime();
            } else if (sortKey === 'fileSize') {
                va = a.fileSize ?? 0; vb = b.fileSize ?? 0;
            } else if (sortKey === 'bitrate') {
                va = a.bitrate ?? 0; vb = b.bitrate ?? 0;
            } else {
                va = new Date(a.downloadedAt || 0).getTime();
                vb = new Date(b.downloadedAt || 0).getTime();
            }
            return sortDir === 'desc' ? vb - va : va - vb;
        });
    }, [entries, podcastFilter, searchQuery, sortKey, sortDir]);

    const handleSortClick = useCallback((key: SortKey) => {
        setSortKey(prev => {
            if (prev === key) setSortDir(d => d === 'desc' ? 'asc' : 'desc');
            else setSortDir('desc');
            return key;
        });
    }, []);

    const renderRow = useCallback((index: number) => {
        const entry = filtered[index];
        return (
            <div
                className="grid items-center px-4 py-2.5 group hover-bg-surface-high transition-colors"
                style={{
                    gridTemplateColumns: COL_TEMPLATE,
                    gap: COL_GAP,
                    borderBottom: '1px solid rgba(65,71,85,0.1)',
                }}
            >
                <span
                    className="text-xs truncate font-medium"
                    style={{ fontFamily: 'var(--font-label)', color: 'var(--color-on-surface-variant)' }}
                    title={entry.podcastTitle}
                >
                    {entry.podcastTitle}
                </span>
                <span
                    className="text-xs truncate"
                    style={{ color: 'var(--color-on-surface)' }}
                    title={entry.title}
                >
                    {entry.title}
                </span>
                <span
                    className="text-xs"
                    style={{ fontFamily: 'var(--font-label)', color: 'var(--color-on-surface-variant)' }}
                >
                    {formatDate(entry.downloadedAt)}
                </span>
                <span
                    className="text-xs text-right"
                    style={{ fontFamily: 'var(--font-label)', color: 'var(--color-on-surface-variant)' }}
                >
                    {formatBytes(entry.fileSize)}
                </span>
                <span
                    className="text-xs text-right"
                    style={{ fontFamily: 'var(--font-label)', color: 'var(--color-on-surface-variant)' }}
                >
                    {entry.bitrate ? `${entry.bitrate}k` : '—'}
                </span>
                <div className="flex justify-center">
                    {entry.filename && (
                        <button
                            onClick={() => window.api.openArchiveFile(entry.podcastTitle, entry.filename!)}
                            className="opacity-0 group-hover:opacity-100 p-1 rounded transition-all hover-text-primary"
                            style={{ color: 'var(--color-on-surface-variant)' }}
                            title={t('archive.show_in_folder')}
                        >
                            <Icon name="folder_open" size={14} />
                        </button>
                    )}
                </div>
            </div>
        );
    }, [filtered, t]);

    if (isLoading) {
        return (
            <div className="flex items-center justify-center py-20" style={{ color: 'var(--color-on-surface-variant)' }}>
                <Icon name="progress_activity" size={24} className="animate-spin mr-3" />
                <span className="text-sm">{t('archive.loading')}</span>
            </div>
        );
    }

    return (
        <div className="flex flex-col space-y-4">

            {/* Archive search bar */}
            <div className="archive-search">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
                </svg>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder={t('archive.search_placeholder', "Cerca nell'archivio · titolo, show, data, durata…")}
                />
                <div className="archive-stats">
                    <span><strong>{entries.length.toLocaleString()}</strong> {t('archive.episodes_short', 'episodi')}</span>
                    <span><strong>{(totalSize / (1024 ** 3)).toFixed(1)}</strong> GB</span>
                    <span><strong>{podcasts.length}</strong> {t('archive.podcasts_short', 'show')}</span>
                </div>
            </div>

            <div className="section-heading">
                <h3>{t('archive.title', 'Tutti gli episodi archiviati')}</h3>
                <span className="kicker">{t('archive.sorted_by_date', 'Ordinati per data · più recenti')}</span>
            </div>

            {/* Secondary filters (podcast filter + sort) */}
            <div className="ep-filter-bar">
                <div className="field" style={{ flex: 'none' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-3)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>{t('archive.filter_label', 'Filtra')}</span>
                </div>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', flex: 1, justifyContent: 'flex-end' }}>
                    <select
                        value={podcastFilter}
                        onChange={e => setPodcastFilter(e.target.value)}
                        style={{
                            background: 'var(--surf-2)',
                            color: 'var(--fg)',
                            fontFamily: 'var(--font-mono)',
                            fontSize: 10.5,
                            border: '1px solid var(--border)',
                            borderRadius: 'var(--r-sm)',
                            padding: '6px 10px',
                            cursor: 'pointer',
                        }}
                    >
                        <option value="">{t('archive.filter_all_podcasts')}</option>
                        {podcasts.map(p => <option key={p} value={p}>{p}</option>)}
                    </select>
                    <select
                        value={`${sortKey}-${sortDir}`}
                        onChange={e => {
                            const parts = e.target.value.split('-');
                            const dir = parts.pop() as SortDir;
                            const key = parts.join('-') as SortKey;
                            setSortKey(key);
                            setSortDir(dir);
                        }}
                        style={{
                            background: 'var(--surf-2)',
                            color: 'var(--fg)',
                            fontFamily: 'var(--font-mono)',
                            fontSize: 10.5,
                            border: '1px solid var(--border)',
                            borderRadius: 'var(--r-sm)',
                            padding: '6px 10px',
                            cursor: 'pointer',
                        }}
                    >
                        <option value="downloadedAt-desc">{t('archive.sort_downloaded_desc')}</option>
                        <option value="downloadedAt-asc">{t('archive.sort_downloaded_asc')}</option>
                        <option value="pubDate-desc">{t('archive.sort_pubdate_desc')}</option>
                        <option value="pubDate-asc">{t('archive.sort_pubdate_asc')}</option>
                        <option value="fileSize-desc">{t('archive.sort_size_desc')}</option>
                        <option value="fileSize-asc">{t('archive.sort_size_asc')}</option>
                        <option value="bitrate-desc">{t('archive.sort_bitrate_desc')}</option>
                        <option value="bitrate-asc">{t('archive.sort_bitrate_asc')}</option>
                    </select>
                </div>
            </div>

            {/* Table */}
            {filtered.length === 0 ? (
                <div className="text-center py-16" style={{ color: 'var(--color-on-surface-variant)' }}>
                    <Icon
                        name="inventory_2"
                        size={40}
                        style={{ margin: '0 auto 12px', display: 'block', opacity: 0.35 }}
                    />
                    <p className="text-sm">
                        {searchQuery || podcastFilter ? t('archive.no_results') : t('archive.empty')}
                    </p>
                </div>
            ) : (
                <div className="bento-card" style={{ overflow: 'visible' }}>
                    {/* Table header */}
                    <div
                        className="grid items-center px-4 py-2.5 sticky top-0 z-10 rounded-t-xl"
                        style={{
                            gridTemplateColumns: COL_TEMPLATE,
                            gap: COL_GAP,
                            background: 'var(--color-surface-container-high)',
                            borderBottom: '1px solid rgba(65,71,85,0.15)',
                        }}
                    >
                        <span
                            className="text-[10px] font-semibold uppercase tracking-wider"
                            style={{ fontFamily: 'var(--font-label)', color: 'var(--color-on-surface-variant)' }}
                        >
                            {t('archive.col_podcast')}
                        </span>
                        <span
                            className="text-[10px] font-semibold uppercase tracking-wider"
                            style={{ fontFamily: 'var(--font-label)', color: 'var(--color-on-surface-variant)' }}
                        >
                            {t('archive.col_title')}
                        </span>
                        <SortHeaderCell
                            label={t('archive.col_downloaded')}
                            sortKey="downloadedAt"
                            activeSortKey={sortKey}
                            sortDir={sortDir}
                            onClick={handleSortClick}
                        />
                        <SortHeaderCell
                            label={t('archive.col_size')}
                            sortKey="fileSize"
                            activeSortKey={sortKey}
                            sortDir={sortDir}
                            align="right"
                            onClick={handleSortClick}
                        />
                        <SortHeaderCell
                            label={t('archive.col_bitrate')}
                            sortKey="bitrate"
                            activeSortKey={sortKey}
                            sortDir={sortDir}
                            align="right"
                            onClick={handleSortClick}
                        />
                        <div />
                    </div>

                    {/* Rows */}
                    <Virtuoso
                        customScrollParent={document.getElementById('main-scroll') ?? undefined}
                        totalCount={filtered.length}
                        itemContent={renderRow}
                    />
                </div>
            )}
        </div>
    );
};
