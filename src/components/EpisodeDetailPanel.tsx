import React from 'react';
import { useTranslation } from 'react-i18next';
import type { Episode, ArchiveEntry } from '../../shared/types';
import { getEnclosureUrl } from '../../shared/getEnclosureUrl';
import { useStore, AppState, selectPanelVisible } from '../store/useStore';
import { useToast } from '../context/ToastContext';
import { formatDuration } from '../utils/duration';
import { formatBytes } from '../utils/format';

function stripHtml(html: string): string {
    return html
        .replace(/<br\s*\/?>/gi, '\n')
        .replace(/<\/p>/gi, '\n\n')
        .replace(/<\/li>/gi, '\n')
        .replace(/<[^>]*>/g, '')
        // Named entities (except &amp;) and numeric entities first, then &amp;
        // LAST — decoding &amp; first turns "&amp;lt;" into "&lt;" and then into
        // "<" (double decode), and left numeric entities like &#8217; untouched.
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#0*39;/g, "'")
        .replace(/&nbsp;/g, ' ')
        .replace(/&#x([0-9a-f]+);/gi, (_m, hex) => { const n = parseInt(hex, 16); return n >= 0 && n <= 0x10FFFF ? String.fromCodePoint(n) : _m; })
        .replace(/&#(\d+);/g, (_m, dec) => { const n = parseInt(dec, 10); return n >= 0 && n <= 0x10FFFF ? String.fromCodePoint(n) : _m; })
        .replace(/&amp;/g, '&')
        .replace(/\n{3,}/g, '\n\n')
        .trim();
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
    const { t, i18n } = useTranslation();
    const toast = useToast();
    // L8: give the copy-link actions explicit feedback instead of silently writing
    // to the clipboard from a bare `<a href="#">`.
    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text)
            .then(() => toast.show(t('toast.copied', 'Copiato negli appunti'), 'success'))
            .catch(() => toast.show(t('toast.copy_failed', 'Copia non riuscita'), 'error'));
    };
    const downloadPanelOpen = useStore((s: AppState) => s.downloadPanelOpen);
    const currentFeed = useStore((s: AppState) => s.currentFeed);
    const downloadPanelVisible = useStore(selectPanelVisible);
    const rightOffset = downloadPanelOpen && downloadPanelVisible ? '380px' : '0px';

    const rawDesc = episode.content || episode.description || episode.contentSnippet || '';
    const description = rawDesc ? stripHtml(rawDesc) : '';

    // M20: unparsable dates would render literally "Invalid Date" — show "—" instead
    const pubDateObj = episode.pubDate ? new Date(episode.pubDate) : null;
    const pubDate = pubDateObj
        ? (Number.isNaN(pubDateObj.getTime())
            ? '—'
            : pubDateObj.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' }))
        : '';
    const dur = formatDuration(episode.itunes?.duration);
    const downloadedAtObj = archiveEntry ? new Date(archiveEntry.downloadedAt) : null;
    const downloadedAtStr = downloadedAtObj && !Number.isNaN(downloadedAtObj.getTime())
        ? downloadedAtObj.toLocaleDateString()
        : '—';

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
                    {enclosureLength != null && enclosureLength > 0 && (<><span className="sep">·</span><span>{formatBytes(enclosureLength, i18n.language)}</span></>)}
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
                                <p className="value" style={{ color: 'var(--ok)' }}>✓ {t('episodes.detail_archived', 'Archiviato')} · {downloadedAtStr}</p>
                            </div>
                            {archiveEntry.fileSize != null && archiveEntry.fileSize > 0 && (
                                <div className="archive-cell">
                                    <p className="label">{t('episodes.detail_size', 'Dimensione')}</p>
                                    <p className="value">{archiveEntry.fileSize.toLocaleString(i18n.language)} byte · {formatBytes(archiveEntry.fileSize, i18n.language)}</p>
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
                                    <a href="#" onClick={(e) => { e.preventDefault(); copyToClipboard(episode.link!); }} title={t('episodes.copy_link', 'Copia link')}>
                                        {episode.link}
                                    </a>
                                </p>
                            )}
                            {enclosureUrl && (
                                <p>
                                    <a href="#" onClick={(e) => { e.preventDefault(); copyToClipboard(enclosureUrl); }} title={t('episodes.copy_link', 'Copia link')}>
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
