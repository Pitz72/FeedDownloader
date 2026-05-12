import React from 'react';
import { useTranslation } from 'react-i18next';
import type { Episode, ArchiveEntry } from '../../shared/types';
import { getEnclosureUrl } from '../../shared/getEnclosureUrl';
import { useStore, AppState } from '../store/useStore';

function stripHtml(html: string): string {
    return html
        .replace(/<br\s*\/?>/gi, '\n')
        .replace(/<\/p>/gi, '\n\n')
        .replace(/<\/li>/gi, '\n')
        .replace(/<[^>]*>/g, '')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&nbsp;/g, ' ')
        .replace(/\n{3,}/g, '\n\n')
        .trim();
}

function formatBytes(bytes: number): string {
    if (bytes >= 1024 ** 3) return `${(bytes / 1024 ** 3).toFixed(1)} GB`;
    if (bytes >= 1024 ** 2) return `${Math.round(bytes / 1024 ** 2)} MB`;
    return `${Math.round(bytes / 1024)} KB`;
}

function formatDuration(duration?: string): { short: string; long: string } | null {
    if (!duration) return null;
    const trimmed = duration.trim();
    let totalSec: number | null = null;
    if (/^\d+$/.test(trimmed)) {
        totalSec = parseInt(trimmed, 10);
    } else {
        const parts = trimmed.split(':').map(p => parseInt(p, 10));
        if (!parts.some(isNaN)) {
            if (parts.length === 3) totalSec = parts[0] * 3600 + parts[1] * 60 + parts[2];
            else if (parts.length === 2) totalSec = parts[0] * 60 + parts[1];
        }
    }
    if (totalSec === null) return null;
    const h = Math.floor(totalSec / 3600);
    const m = Math.floor((totalSec % 3600) / 60);
    const s = totalSec % 60;
    const short = h > 0 ? `${h}h ${m}m` : `${m} min`;
    const long = h > 0 ? `${h}h ${m}m ${s}s` : `${m}m ${s}s`;
    return { short, long };
}

interface EpisodeDetailPanelProps {
    episode: Episode;
    archiveEntry: ArchiveEntry | null;
    isDownloaded: boolean;
    isDownloading: boolean;
    isOnline: boolean;
    onClose: () => void;
    onDownload: () => void;
    onResetStatus: () => void;
    onShowInFolder: () => void;
}

export const EpisodeDetailPanel: React.FC<EpisodeDetailPanelProps> = ({
    episode, archiveEntry, isDownloaded, isDownloading, isOnline,
    onClose, onDownload, onResetStatus, onShowInFolder,
}) => {
    const { t } = useTranslation();
    const downloadPanelOpen = useStore((s: AppState) => s.downloadPanelOpen);
    const isBatchDownloading = useStore((s: AppState) => s.isBatchDownloading);
    const batchCompleted = useStore((s: AppState) => s.batchCompleted);
    const batchTotal = useStore((s: AppState) => s.batchTotal);
    const currentFeed = useStore((s: AppState) => s.currentFeed);
    const downloadPanelVisible = isBatchDownloading ||
        (!isBatchDownloading && batchCompleted > 0 && batchCompleted >= batchTotal);
    const rightOffset = downloadPanelOpen && downloadPanelVisible ? '380px' : '0px';

    const rawDesc = episode.content || episode.description || episode.contentSnippet || '';
    const description = rawDesc ? stripHtml(rawDesc) : '';

    const pubDate = episode.pubDate
        ? new Date(episode.pubDate).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })
        : '';
    const dur = formatDuration(episode.itunes?.duration);

    const enclosureUrl = getEnclosureUrl(episode);
    const enclosureLength = episode.enclosure?.length ? parseInt(episode.enclosure.length, 10) : null;

    return (
        <aside
            className="detail-panel"
            style={{ right: rightOffset, transition: 'right 0.3s ease' }}
            role="complementary"
        >
            <header className="detail-header">
                <span className="detail-kicker">{currentFeed?.title || t('episodes.detail_kicker', 'Episodio')}</span>
                <button type="button" className="detail-close" onClick={onClose} title={t('common.close', 'Chiudi')} aria-label={t('common.close', 'Chiudi')}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <line x1="18" y1="6" x2="6" y2="18"/>
                        <line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                </button>
            </header>

            <div className="detail-body custom-scrollbar">
                {currentFeed?.title && (
                    <p className="detail-show">{currentFeed.title}</p>
                )}
                <h1 className="detail-title">{episode.title}</h1>

                <div className="detail-meta-row">
                    {pubDate && <span>{pubDate}</span>}
                    {dur && (<><span className="sep">·</span><span>{dur.long}</span></>)}
                    {archiveEntry?.bitrate && (<><span className="sep">·</span><span>{archiveEntry.bitrate} kbps</span></>)}
                    {archiveEntry?.sampleRate && (<><span className="sep">·</span><span>{(archiveEntry.sampleRate / 1000).toFixed(1)} kHz</span></>)}
                    {enclosureLength != null && enclosureLength > 0 && (<><span className="sep">·</span><span>{formatBytes(enclosureLength)}</span></>)}
                </div>

                <div className="detail-cta-row">
                    {isDownloading ? (
                        <button type="button" className="primary" disabled>
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ animation: 'feedSyncSpin 1s linear infinite' }}>
                                <path d="M21 12a9 9 0 1 1-6.2-8.5"/>
                            </svg>
                            {t('progress.downloading', 'Scaricamento…')}
                        </button>
                    ) : isDownloaded ? (
                        <>
                            <button type="button" className="primary" onClick={onDownload} disabled={!isOnline}>
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                    <polyline points="7 10 12 15 17 10"/>
                                    <line x1="12" y1="15" x2="12" y2="3"/>
                                </svg>
                                {t('episodes.redownload', 'Riscarica')}
                            </button>
                            <button type="button" className="ghost" onClick={onShowInFolder}>
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                                </svg>
                                {t('episodes.open_folder', 'Apri cartella')}
                            </button>
                            <button type="button" className="ghost" onClick={onResetStatus}>
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M3 12a9 9 0 1 0 9-9"/><polyline points="3 4 3 12 11 12"/>
                                </svg>
                                {t('episodes.reset_status', 'Reset stato')}
                            </button>
                        </>
                    ) : (
                        <button type="button" className="primary" onClick={onDownload} disabled={!isOnline}>
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                <polyline points="7 10 12 15 17 10"/>
                                <line x1="12" y1="15" x2="12" y2="3"/>
                            </svg>
                            {t('episodes.download', 'Scarica')}
                        </button>
                    )}
                </div>

                {isDownloaded && archiveEntry && (
                    <div className="detail-section">
                        <p className="detail-section-label">{t('episodes.detail_archive_data', 'Archivio · Dati tecnici')}</p>
                        <div className="archive-data">
                            <div className="archive-cell">
                                <p className="label">{t('episodes.detail_state', 'Stato')}</p>
                                <p className="value" style={{ color: 'var(--ok)' }}>✓ {t('episodes.detail_archived', 'Archiviato')} · {new Date(archiveEntry.downloadedAt).toLocaleDateString()}</p>
                            </div>
                            {archiveEntry.fileSize != null && archiveEntry.fileSize > 0 && (
                                <div className="archive-cell">
                                    <p className="label">{t('episodes.detail_size', 'Dimensione')}</p>
                                    <p className="value">{archiveEntry.fileSize.toLocaleString()} byte · {formatBytes(archiveEntry.fileSize)}</p>
                                </div>
                            )}
                            {(archiveEntry.bitrate || archiveEntry.sampleRate) && (
                                <div className="archive-cell">
                                    <p className="label">{t('episodes.detail_bitrate_sr', 'Bitrate · Sample rate')}</p>
                                    <p className="value">
                                        {archiveEntry.bitrate ? `${archiveEntry.bitrate} kbps` : '—'}
                                        {archiveEntry.sampleRate ? ` · ${(archiveEntry.sampleRate / 1000).toFixed(1)} kHz` : ''}
                                    </p>
                                </div>
                            )}
                            {dur && (
                                <div className="archive-cell">
                                    <p className="label">{t('episodes.detail_duration', 'Durata')}</p>
                                    <p className="value">{dur.long}</p>
                                </div>
                            )}
                            {archiveEntry.checksum && (
                                <div className="archive-cell" style={{ gridColumn: 'span 2' }}>
                                    <p className="label">{t('episodes.detail_checksum', 'SHA-256 checksum · verificato')}</p>
                                    <p className="value checksum">{archiveEntry.checksum.match(/.{1,4}/g)?.join(' ')}</p>
                                </div>
                            )}
                            {archiveEntry.filename && (
                                <div className="archive-cell" style={{ gridColumn: 'span 2' }}>
                                    <p className="label">{t('episodes.detail_path', 'Percorso file')}</p>
                                    <p className="value">{archiveEntry.filename}</p>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                <div className="detail-section">
                    <p className="detail-section-label">{t('episodes.detail_description', 'Show notes')}</p>
                    {description ? (
                        <div className="show-notes">
                            {description.split(/\n\n+/).map((para, i) => <p key={i}>{para}</p>)}
                        </div>
                    ) : (
                        <p className="show-notes" style={{ opacity: 0.55, fontStyle: 'italic' }}>
                            {t('episodes.detail_no_description', 'Nessuna descrizione disponibile.')}
                        </p>
                    )}
                </div>

                {(episode.link || enclosureUrl) && (
                    <div className="detail-section">
                        <p className="detail-section-label">{t('episodes.detail_links', 'Link')}</p>
                        <div className="show-notes">
                            {episode.link && (
                                <p>
                                    <a href="#" onClick={(e) => { e.preventDefault(); navigator.clipboard.writeText(episode.link!); }} title={t('episodes.copy_link', 'Copia link')}>
                                        {episode.link}
                                    </a>
                                </p>
                            )}
                            {enclosureUrl && (
                                <p>
                                    <a href="#" onClick={(e) => { e.preventDefault(); navigator.clipboard.writeText(enclosureUrl); }} title={t('episodes.copy_link', 'Copia link')}>
                                        Audio: {enclosureUrl}
                                    </a>
                                </p>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </aside>
    );
};
