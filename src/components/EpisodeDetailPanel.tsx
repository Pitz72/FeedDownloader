import React from 'react';
import { Icon } from './Icon';
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

function formatDuration(duration?: string): string | null {
    if (!duration) return null;
    const trimmed = duration.trim();
    let mins: number | null = null;
    if (/^\d+$/.test(trimmed)) {
        mins = Math.floor(parseInt(trimmed, 10) / 60);
    } else {
        const parts = trimmed.split(':').map(p => parseInt(p, 10));
        if (!parts.some(isNaN)) {
            if (parts.length === 3) mins = parts[0] * 60 + parts[1];
            else if (parts.length === 2) mins = parts[0];
        }
    }
    if (mins === null) return null;
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    if (h > 0) return `${h}h ${m}m`;
    return `${m} min`;
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
        <div
            className="fixed z-40 flex flex-col overflow-hidden"
            style={{
                top: '56px',
                bottom: 0,
                right: rightOffset,
                width: '380px',
                background: 'var(--color-surface-container-low)',
                borderLeft: '1px solid rgba(65,71,85,0.18)',
                boxShadow: '-12px 0 40px rgba(0,0,0,0.35)',
                transition: 'right 0.3s ease',
            }}
        >
            {/* Header */}
            <div
                className="flex items-center gap-3 px-5 py-4 shrink-0"
                style={{ borderBottom: '1px solid rgba(65,71,85,0.12)' }}
            >
                <button
                    onClick={onClose}
                    className="hover-text-primary p-1 rounded transition-colors shrink-0"
                    style={{ color: 'var(--color-on-surface-variant)' }}
                    title={t('common.cancel')}
                >
                    <Icon name="close" size={18} />
                </button>
                <h3
                    className="text-sm font-bold line-clamp-2 flex-1"
                    style={{ fontFamily: 'var(--font-headline)', color: 'var(--color-on-surface)' }}
                >
                    {episode.title}
                </h3>
            </div>

            {/* Scrollable body */}
            <div className="flex-1 overflow-y-auto custom-scrollbar px-5 py-4 space-y-5">

                {/* Meta row */}
                <div className="space-y-2">
                    {pubDate && (
                        <div className="flex items-center gap-2">
                            <Icon name="calendar_month" size={13} style={{ color: 'var(--color-on-surface-variant)', flexShrink: 0 }} />
                            <span className="text-xs" style={{ fontFamily: 'var(--font-label)', color: 'var(--color-on-surface-variant)' }}>
                                {pubDate}
                            </span>
                        </div>
                    )}
                    {dur && (
                        <div className="flex items-center gap-2">
                            <Icon name="schedule" size={13} style={{ color: 'var(--color-on-surface-variant)', flexShrink: 0 }} />
                            <span className="text-xs" style={{ fontFamily: 'var(--font-label)', color: 'var(--color-on-surface-variant)' }}>
                                {dur}
                            </span>
                        </div>
                    )}
                    {enclosureLength != null && enclosureLength > 0 && (
                        <div className="flex items-center gap-2">
                            <Icon name="data_usage" size={13} style={{ color: 'var(--color-on-surface-variant)', flexShrink: 0 }} />
                            <span className="text-xs" style={{ fontFamily: 'var(--font-label)', color: 'var(--color-on-surface-variant)' }}>
                                {t('episodes.detail_estimated_size')}: {formatBytes(enclosureLength)}
                            </span>
                        </div>
                    )}
                </div>

                {/* Action buttons */}
                <div className="flex flex-wrap gap-2">
                    {isDownloading ? (
                        <div className="flex items-center gap-2 text-xs" style={{ color: 'var(--color-primary)' }}>
                            <Icon name="progress_activity" size={14} className="animate-spin" />
                            {t('progress.downloading')}
                        </div>
                    ) : isDownloaded ? (
                        <>
                            <button
                                onClick={onDownload}
                                disabled={!isOnline}
                                className="hover-text-primary flex items-center gap-1.5 text-xs px-3 py-1.5 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                style={{ background: 'var(--color-surface-container-high)', color: 'var(--color-on-surface)', fontFamily: 'var(--font-label)' }}
                            >
                                <Icon name="download" size={14} />
                                {t('episodes.redownload')}
                            </button>
                            <button
                                onClick={onResetStatus}
                                className="hover-text-warning flex items-center gap-1.5 text-xs px-3 py-1.5 rounded transition-colors"
                                style={{ background: 'var(--color-surface-container-high)', color: 'var(--color-on-surface)', fontFamily: 'var(--font-label)' }}
                            >
                                <Icon name="restart_alt" size={14} />
                                {t('episodes.reset_status')}
                            </button>
                            <button
                                onClick={onShowInFolder}
                                className="hover-text-surface flex items-center gap-1.5 text-xs px-3 py-1.5 rounded transition-colors"
                                style={{ background: 'var(--color-surface-container-high)', color: 'var(--color-on-surface)', fontFamily: 'var(--font-label)' }}
                            >
                                <Icon name="folder_open" size={14} />
                                {t('episodes.open_folder')}
                            </button>
                        </>
                    ) : (
                        <button
                            onClick={onDownload}
                            disabled={!isOnline}
                            className="btn-primary-gradient flex items-center gap-1.5 text-xs px-3 py-1.5 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <Icon name="download" size={14} />
                            {t('episodes.download')}
                        </button>
                    )}
                </div>

                {/* Download info (if downloaded + archive entry loaded) */}
                {isDownloaded && archiveEntry && (
                    <div
                        className="space-y-2 rounded-lg p-3"
                        style={{ background: 'var(--color-surface-container)', border: '1px solid rgba(65,71,85,0.1)' }}
                    >
                        <div className="flex items-center gap-2">
                            <Icon name="check_circle" size={14} filled style={{ color: 'var(--color-secondary)', flexShrink: 0 }} />
                            <span className="text-xs font-semibold" style={{ fontFamily: 'var(--font-label)', color: 'var(--color-secondary)' }}>
                                {t('episodes.detail_downloaded_on')}: {new Date(archiveEntry.downloadedAt).toLocaleDateString()}
                            </span>
                        </div>
                        {archiveEntry.fileSize != null && archiveEntry.fileSize > 0 && (
                            <div className="flex items-center gap-2">
                                <Icon name="data_usage" size={13} style={{ color: 'var(--color-on-surface-variant)', flexShrink: 0 }} />
                                <span className="text-xs" style={{ fontFamily: 'var(--font-label)', color: 'var(--color-on-surface-variant)' }}>
                                    {formatBytes(archiveEntry.fileSize)}
                                    {archiveEntry.bitrate ? ` · ${archiveEntry.bitrate} kbps` : ''}
                                    {archiveEntry.sampleRate ? ` · ${archiveEntry.sampleRate / 1000} kHz` : ''}
                                </span>
                            </div>
                        )}
                        {archiveEntry.filename && (
                            <div className="flex items-start gap-2">
                                <Icon name="audio_file" size={13} style={{ color: 'var(--color-on-surface-variant)', flexShrink: 0, marginTop: '1px' }} />
                                <span className="text-xs break-all" style={{ fontFamily: 'var(--font-label)', color: 'var(--color-on-surface-variant)' }}>
                                    {archiveEntry.filename}
                                </span>
                            </div>
                        )}
                        {archiveEntry.checksum && (
                            <div className="flex items-start gap-2">
                                <Icon name="fingerprint" size={13} style={{ color: 'var(--color-on-surface-variant)', flexShrink: 0, marginTop: '2px' }} />
                                <span className="text-[10px] break-all font-mono" style={{ color: 'var(--color-on-surface-variant)', opacity: 0.55 }}>
                                    {archiveEntry.checksum}
                                </span>
                            </div>
                        )}
                    </div>
                )}

                {/* Source link */}
                {episode.link && (
                    <div className="space-y-1.5">
                        <p className="text-[10px] uppercase tracking-widest" style={{ fontFamily: 'var(--font-label)', color: 'var(--color-on-surface-variant)' }}>
                            {t('episodes.detail_source_link')}
                        </p>
                        <div
                            className="flex items-center gap-2 p-2 rounded"
                            style={{ background: 'var(--color-surface-container)', border: '1px solid rgba(65,71,85,0.1)' }}
                        >
                            <span className="text-xs truncate flex-1 font-mono" style={{ color: 'var(--color-on-surface-variant)' }}>
                                {episode.link}
                            </span>
                            <button
                                onClick={() => navigator.clipboard.writeText(episode.link!)}
                                className="hover-text-primary p-1 rounded transition-colors shrink-0"
                                style={{ color: 'var(--color-on-surface-variant)' }}
                                title={t('episodes.copy_link')}
                            >
                                <Icon name="content_copy" size={12} />
                            </button>
                        </div>
                    </div>
                )}

                {/* Description */}
                <div className="space-y-1.5">
                    <p className="text-[10px] uppercase tracking-widest" style={{ fontFamily: 'var(--font-label)', color: 'var(--color-on-surface-variant)' }}>
                        {t('episodes.detail_description')}
                    </p>
                    {description ? (
                        <p className="text-xs leading-relaxed whitespace-pre-line" style={{ color: 'var(--color-on-surface-variant)' }}>
                            {description}
                        </p>
                    ) : (
                        <p className="text-xs italic" style={{ color: 'var(--color-on-surface-variant)', opacity: 0.45 }}>
                            {t('episodes.detail_no_description')}
                        </p>
                    )}
                </div>

                {/* Audio URL (enclosure) — for reference */}
                {enclosureUrl && (
                    <div className="space-y-1.5">
                        <p className="text-[10px] uppercase tracking-widest" style={{ fontFamily: 'var(--font-label)', color: 'var(--color-on-surface-variant)' }}>
                            Audio URL
                        </p>
                        <div
                            className="flex items-center gap-2 p-2 rounded"
                            style={{ background: 'var(--color-surface-container)', border: '1px solid rgba(65,71,85,0.1)' }}
                        >
                            <span className="text-[10px] truncate flex-1 font-mono" style={{ color: 'var(--color-on-surface-variant)', opacity: 0.6 }}>
                                {enclosureUrl}
                            </span>
                            <button
                                onClick={() => navigator.clipboard.writeText(enclosureUrl)}
                                className="hover-text-primary p-1 rounded transition-colors shrink-0"
                                style={{ color: 'var(--color-on-surface-variant)' }}
                                title={t('episodes.copy_link')}
                            >
                                <Icon name="content_copy" size={12} />
                            </button>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};