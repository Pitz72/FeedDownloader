import React, { useState, useCallback } from 'react';
import { useStore, AppState, selectPanelVisible } from '../store/useStore';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import type { QueueItem, FailedDownload } from '../types';
import { formatBytes, formatSpeed } from '../utils/format';

const ERROR_CODE_MAP: Record<string, string> = {
    EPISODE_NOT_FOUND:      'progress.error_not_found',
    DOWNLOAD_STALLED:       'progress.error_stalled',
    DOWNLOAD_TIMEOUT:       'progress.error_timeout',
    DISK_FULL:              'progress.error_disk_full',
    INTEGRITY_CHECK_FAILED: 'progress.error_integrity',
    PERMISSION_DENIED:      'progress.error_permission',
};

function formatEta(seconds: number): string {
    if (seconds >= 3600) {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        return `${h}h ${m}m`;
    }
    if (seconds >= 60) {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}m ${s}s`;
    }
    return `${seconds}s`;
}

interface QueueRowProps {
    item: QueueItem;
    onCancel: () => void;
}

const QueueRow: React.FC<QueueRowProps> = ({ item, onCancel }) => {
    const { t, i18n } = useTranslation();
    // M29: per-slice selector — each row re-renders only on its own progress ticks,
    // instead of the whole panel subscribing to the entire downloads map.
    const progress = useStore((s: AppState) => s.downloads[item.url] ?? null);
    const isDownloading = item.status === 'downloading';
    const percent = progress && progress.total > 0
        ? Math.round((progress.loaded / progress.total) * 100)
        : null;
    // L9: server sent no Content-Length — we can't compute a percentage, but the
    // download is running. Show an indeterminate bar with the bytes received so far.
    const indeterminate = isDownloading && percent === null && !!progress && progress.loaded > 0;

    return (
        <div className={`dl-item ${isDownloading ? 'active' : 'queued'}`}>
            <div className="dl-item-icon" aria-hidden="true">
                {isDownloading ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ animation: 'feedSyncSpin 1s linear infinite' }}>
                        <path d="M21 12a9 9 0 1 1-6.2-8.5"/>
                    </svg>
                ) : (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12 6 12 12 16 14"/>
                    </svg>
                )}
            </div>
            <div className="dl-item-info">
                <p className="dl-item-title">{item.title}</p>
                <p className="dl-item-show">
                    {item.podcastTitle}
                    {!isDownloading && ` · ${t('progress.queued', 'in coda')}`}
                </p>
                {isDownloading && percent !== null && (
                    <div className="dl-item-progress">
                        <div className="dl-item-progress-bar"><i style={{ width: `${percent}%` }} /></div>
                        <div className="dl-item-meta">
                            <span className="pct">{percent}%</span>
                            {progress?.speed != null && progress.speed > 0 && (
                                <span>
                                    {formatSpeed(progress.speed, i18n.language)}
                                    {progress.eta != null && progress.eta > 0 ? ` · ${formatEta(progress.eta)}` : ''}
                                </span>
                            )}
                        </div>
                    </div>
                )}
                {indeterminate && (
                    <div className="dl-item-progress">
                        <div className="dl-item-progress-bar indeterminate"><i /></div>
                        <div className="dl-item-meta">
                            <span className="pct">{formatBytes(progress!.loaded, i18n.language)}</span>
                            {progress?.speed != null && progress.speed > 0 && (
                                <span>{formatSpeed(progress.speed, i18n.language)}</span>
                            )}
                        </div>
                    </div>
                )}
            </div>
            <button
                type="button"
                className="ep-action"
                onClick={onCancel}
                title={t('progress.cancel_item', 'Annulla')}
                aria-label={t('progress.cancel_item', 'Annulla')}
                style={{ alignSelf: 'flex-start' }}
            >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
            </button>
        </div>
    );
};

const FailureRow: React.FC<{ item: FailedDownload }> = ({ item }) => {
    const { t } = useTranslation();
    const errorKey = ERROR_CODE_MAP[item.errorCode];
    const errorMsg = errorKey ? t(errorKey) : t('progress.error_unknown', 'Errore sconosciuto');
    return (
        <div className="dl-failed-item">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            <div className="info">
                <p className="title">{item.title}</p>
                <p className="err">{item.errorCode} · {errorMsg}</p>
            </div>
        </div>
    );
};

export const DownloadPanel: React.FC = () => {
    // M6: select individual slices instead of (s => s) so the panel only re-renders
    // when its own state changes, not on every unrelated store update.
    const batchTotal = useStore((s: AppState) => s.batchTotal);
    const batchCompleted = useStore((s: AppState) => s.batchCompleted);
    const isBatchDownloading = useStore((s: AppState) => s.isBatchDownloading);
    const queueItems = useStore((s: AppState) => s.queueItems);
    const batchFailed = useStore((s: AppState) => s.batchFailed);
    const downloadPanelOpen = useStore((s: AppState) => s.downloadPanelOpen);
    const setDownloadPanelOpen = useStore((s: AppState) => s.setDownloadPanelOpen);
    const { t } = useTranslation();
    const [showErrors, setShowErrors] = useState(true);

    const handleCancelItem = useCallback(async (taskId: string) => {
        await window.api.cancelDownload(taskId);
    }, []);

    const isVisible = useStore(selectPanelVisible);
    const isComplete = !isBatchDownloading && batchCompleted > 0 && batchCompleted >= batchTotal;
    const progress = batchTotal > 0 ? Math.min((batchCompleted / batchTotal) * 100, 100) : 0;

    const activeCount = queueItems.filter(q => q.status === 'downloading').length;
    const queuedCount = queueItems.filter(q => q.status !== 'downloading').length;

    const sortedQueue = [...queueItems].sort((a, b) => {
        if (a.status === 'downloading' && b.status !== 'downloading') return -1;
        if (a.status !== 'downloading' && b.status === 'downloading') return 1;
        return 0;
    });

    if (!isVisible) return null;

    return (
        <>
            <AnimatePresence>
                {downloadPanelOpen && (
                    <motion.aside
                        key="download-panel"
                        className="dl-drawer"
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 28, stiffness: 220 }}
                    >
                        <header className="dl-header">
                            <div className={`dl-spinner ${isBatchDownloading ? 'spinning' : ''}`} aria-hidden="true">
                                {isComplete ? (
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12"/>
                                    </svg>
                                ) : (
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                )}
                            </div>
                            <div className="dl-title">
                                <h3>{isComplete ? t('progress.completed', 'Completato') : t('progress.downloading', 'Scaricando…')}</h3>
                                <p>
                                    {isComplete
                                        ? t('progress.completed_summary', { defaultValue: '{{done}} di {{total}}', done: batchCompleted, total: batchTotal })
                                        : t('progress.active_queued', { defaultValue: '{{active}} attivi · {{queued}} in coda', active: activeCount, queued: queuedCount })
                                    }
                                </p>
                            </div>
                            <div className="dl-counter">
                                <span>{batchCompleted}</span><span className="total">/{batchTotal}</span>
                            </div>
                            <button
                                type="button"
                                className="icon-btn"
                                onClick={() => setDownloadPanelOpen(false)}
                                title={t('common.close', 'Chiudi')}
                                aria-label={t('common.close', 'Chiudi')}
                            >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                    <line x1="18" y1="6" x2="6" y2="18"/>
                                    <line x1="6" y1="6" x2="18" y2="18"/>
                                </svg>
                            </button>
                        </header>

                        <div className="dl-overall">
                            <div className="dl-overall-bar"><i style={{ width: `${progress}%` }} /></div>
                            <div className="dl-overall-meta">
                                <span><strong>{Math.round(progress)}%</strong> · {batchCompleted}/{batchTotal} {t('progress.episodes_short', 'episodi')}</span>
                                {isBatchDownloading && <span>{activeCount} {t('progress.active_short', 'attivi')}</span>}
                            </div>
                        </div>

                        {isBatchDownloading && sortedQueue.length > 0 && (
                            <div className="dl-queue custom-scrollbar">
                                {sortedQueue.map(item => (
                                    <QueueRow
                                        key={item.taskId}
                                        item={item}
                                        onCancel={() => handleCancelItem(item.taskId)}
                                    />
                                ))}
                            </div>
                        )}

                        {isComplete && batchFailed.length > 0 && (
                            <div className="dl-failed">
                                <div className="dl-failed-header">
                                    <span className="label">
                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                                            <line x1="12" y1="9" x2="12" y2="13"/>
                                            <line x1="12" y1="17" x2="12.01" y2="17"/>
                                        </svg>
                                        {t('progress.n_failed', { defaultValue: '{{count}} download falliti', count: batchFailed.length })}
                                    </span>
                                    <button type="button" className="retry" onClick={() => setShowErrors(v => !v)}>
                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M3 12a9 9 0 0 1 15-6.7L21 8"/>
                                            <path d="M21 3v5h-5"/>
                                        </svg>
                                        {showErrors ? t('common.hide', 'Nascondi') : t('common.show', 'Mostra')}
                                    </button>
                                </div>
                                {showErrors && (
                                    <div className="dl-failed-list custom-scrollbar">
                                        {batchFailed.map((f, i) => <FailureRow key={i} item={f} />)}
                                    </div>
                                )}
                            </div>
                        )}

                        {(!isBatchDownloading && (!isComplete || batchFailed.length === 0)) && <div style={{ flex: 1 }} />}

                        <footer className="dl-footer">
                            <span className="hint">
                                {isBatchDownloading ? t('progress.dont_close', 'Non chiudere fino al termine') : ' '}
                            </span>
                            {isBatchDownloading ? (
                                <button type="button" className="dl-stop" onClick={() => useStore.getState().stopBatch()}>
                                    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                        <rect x="6" y="6" width="12" height="12"/>
                                    </svg>
                                    {t('progress.stop', 'Stop')}
                                </button>
                            ) : isComplete ? (
                                <button
                                    type="button"
                                    className="feed-action"
                                    onClick={() => { setShowErrors(true); useStore.getState().resetBatch(); }}
                                >
                                    {t('common.clear', 'Pulisci')}
                                </button>
                            ) : null}
                        </footer>
                    </motion.aside>
                )}
            </AnimatePresence>

            {/* Minimized FAB */}
            <AnimatePresence>
                {!downloadPanelOpen && (
                    <motion.button
                        type="button"
                        key="download-fab"
                        className="dl-fab"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ type: 'spring', damping: 20, stiffness: 260 }}
                        onClick={() => setDownloadPanelOpen(true)}
                        title={isComplete ? t('progress.completed', 'Completato') : t('progress.downloading', 'Scaricando…')}
                        aria-label={isComplete ? t('progress.completed', 'Completato') : t('progress.downloading', 'Scaricando…')}
                    >
                        {isComplete ? (
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <polyline points="20 6 9 17 4 12"/>
                            </svg>
                        ) : (
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                <polyline points="7 10 12 15 17 10"/>
                                <line x1="12" y1="15" x2="12" y2="3"/>
                            </svg>
                        )}
                        {isBatchDownloading && batchTotal > batchCompleted && (
                            <span className="badge">{batchTotal - batchCompleted}</span>
                        )}
                    </motion.button>
                )}
            </AnimatePresence>
        </>
    );
};
