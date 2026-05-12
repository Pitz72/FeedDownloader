import React, { useState, useCallback } from 'react';
import { useStore, AppState } from '../store/useStore';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Icon } from './Icon';
import type { QueueItem, FailedDownload, DownloadProgress } from '../types';

const ERROR_CODE_MAP: Record<string, string> = {
    EPISODE_NOT_FOUND:      'progress.error_not_found',
    DOWNLOAD_STALLED:       'progress.error_stalled',
    DOWNLOAD_TIMEOUT:       'progress.error_timeout',
    DISK_FULL:              'progress.error_disk_full',
    INTEGRITY_CHECK_FAILED: 'progress.error_integrity',
    PERMISSION_DENIED:      'progress.error_permission',
};

function formatSpeed(bytesPerSec: number): string {
    if (bytesPerSec >= 1024 ** 2) return `${(bytesPerSec / 1024 ** 2).toFixed(1)} MB/s`;
    if (bytesPerSec >= 1024) return `${Math.round(bytesPerSec / 1024)} KB/s`;
    return `${Math.round(bytesPerSec)} B/s`;
}

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
    progress: DownloadProgress | null;
    onCancel: () => void;
}

const QueueRow: React.FC<QueueRowProps> = ({ item, progress, onCancel }) => {
    const { t } = useTranslation();
    const isDownloading = item.status === 'downloading';
    const percent = progress && progress.total > 0
        ? Math.round((progress.loaded / progress.total) * 100)
        : null;

    return (
        <div
            className="flex items-center gap-3 px-4 py-3 group/row"
            style={{ borderBottom: '1px solid rgba(65,71,85,0.06)' }}
        >
            <div className="shrink-0 mt-0.5">
                {isDownloading
                    ? <Icon name="autorenew" size={15} className="animate-spin" style={{ color: 'var(--color-primary)' }} />
                    : <Icon name="schedule" size={15} style={{ color: 'var(--color-on-surface-variant)', opacity: 0.4 }} />
                }
            </div>

            <div className="flex-1 min-w-0">
                <p
                    className="text-xs font-semibold truncate"
                    style={{ color: 'var(--color-on-surface)', fontFamily: 'var(--font-label)' }}
                >
                    {item.title}
                </p>
                <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                    <p
                        className="text-[10px] truncate max-w-[140px]"
                        style={{ color: 'var(--color-on-surface-variant)', opacity: 0.55 }}
                    >
                        {item.podcastTitle}
                    </p>
                    {isDownloading && percent !== null && (
                        <span
                            className="text-[10px] shrink-0"
                            style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-label)' }}
                        >
                            {percent}%
                        </span>
                    )}
                    {isDownloading && progress?.speed != null && progress.speed > 0 && (
                        <span
                            className="text-[10px] shrink-0"
                            style={{ color: 'var(--color-on-surface-variant)', opacity: 0.6 }}
                        >
                            {formatSpeed(progress.speed)}
                            {progress.eta != null && progress.eta > 0 ? ` · ${formatEta(progress.eta)}` : ''}
                        </span>
                    )}
                </div>
                {isDownloading && percent !== null && (
                    <div
                        className="w-full rounded-full h-0.5 mt-1.5 overflow-hidden"
                        style={{ background: 'var(--color-surface-container-highest)' }}
                    >
                        <div
                            className="h-full rounded-full transition-all duration-300"
                            style={{ width: `${percent}%`, background: 'var(--color-primary)' }}
                        />
                    </div>
                )}
            </div>

            <button
                onClick={onCancel}
                className="shrink-0 p-1 rounded opacity-0 group-hover/row:opacity-100 transition-opacity hover-text-surface"
                style={{ color: 'var(--color-on-surface-variant)' }}
                title={t('progress.cancel_item')}
            >
                <Icon name="close" size={12} />
            </button>
        </div>
    );
};

interface FailureRowProps {
    item: FailedDownload;
}

const FailureRow: React.FC<FailureRowProps> = ({ item }) => {
    const { t } = useTranslation();
    const errorKey = ERROR_CODE_MAP[item.errorCode];
    const errorMsg = errorKey ? t(errorKey) : t('progress.error_unknown');
    return (
        <div className="flex items-start gap-2 px-4 py-2">
            <Icon name="error_outline" size={13} className="shrink-0 mt-0.5" style={{ color: 'var(--color-error)', opacity: 0.8 }} />
            <div className="min-w-0">
                <span className="text-xs block truncate" style={{ color: 'var(--color-on-surface)', fontFamily: 'var(--font-label)' }}>
                    {item.title}
                </span>
                <span className="text-[10px] block" style={{ color: 'var(--color-error)', opacity: 0.7 }}>
                    {errorMsg}
                </span>
            </div>
        </div>
    );
};

export const DownloadPanel: React.FC = () => {
    const {
        batchTotal, batchCompleted, isBatchDownloading,
        queueItems, batchFailed, downloads,
        downloadPanelOpen, setDownloadPanelOpen,
    } = useStore((s: AppState) => s);
    const { t } = useTranslation();
    const [showErrors, setShowErrors] = useState(false);

    const handleCancelItem = useCallback(async (taskId: string) => {
        await window.api.cancelDownload(taskId);
    }, []);

    const isVisible = isBatchDownloading ||
        (!isBatchDownloading && batchCompleted > 0 && batchCompleted >= batchTotal);

    const isComplete = !isBatchDownloading && batchCompleted > 0 && batchCompleted >= batchTotal;
    const progress = batchTotal > 0 ? Math.min((batchCompleted / batchTotal) * 100, 100) : 0;

    const sortedQueue = [...queueItems].sort((a, b) => {
        if (a.status === 'downloading' && b.status !== 'downloading') return -1;
        if (a.status !== 'downloading' && b.status === 'downloading') return 1;
        return 0;
    });

    if (!isVisible) return null;

    return (
        <>
            {/* Full-height side panel */}
            <AnimatePresence>
                {downloadPanelOpen && (
                    <motion.div
                        key="download-panel"
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 28, stiffness: 220 }}
                        className="fixed right-0 z-50 flex flex-col"
                        style={{
                            top: '56px',
                            bottom: 0,
                            width: '380px',
                            background: 'var(--color-surface-container-low)',
                            borderLeft: '1px solid rgba(65,71,85,0.18)',
                            boxShadow: '-12px 0 40px rgba(0,0,0,0.35)',
                        }}
                    >
                        {/* Header */}
                        <div
                            className="flex items-center gap-3 px-5 py-4 shrink-0"
                            style={{ borderBottom: '1px solid rgba(65,71,85,0.12)' }}
                        >
                            {isComplete
                                ? <Icon name="check_circle" size={18} filled style={{ color: 'var(--color-primary)' }} />
                                : <Icon name="downloading" size={18} style={{ color: 'var(--color-primary)' }} className="animate-pulse" />
                            }
                            <span
                                className="text-sm font-semibold flex-1"
                                style={{ fontFamily: 'var(--font-headline)', color: 'var(--color-on-surface)' }}
                            >
                                {isComplete ? t('progress.completed') : t('progress.downloading')}
                            </span>
                            <span
                                className="text-xs font-mono"
                                style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-label)' }}
                            >
                                {batchCompleted}&thinsp;/&thinsp;{batchTotal}
                            </span>
                            {isBatchDownloading && (
                                <button
                                    onClick={() => useStore.getState().stopBatch()}
                                    className="hover-stop p-1 rounded transition-all"
                                    style={{ color: 'var(--color-on-surface-variant)' }}
                                    title={t('progress.stop')}
                                >
                                    <Icon name="stop" size={16} filled />
                                </button>
                            )}
                            <button
                                onClick={() => setDownloadPanelOpen(false)}
                                className="hover-bg-surface-high p-1 rounded transition-all"
                                style={{ color: 'var(--color-on-surface-variant)' }}
                            >
                                <Icon name="close" size={16} />
                            </button>
                        </div>

                        {/* Queue list — active/pending downloads */}
                        {isBatchDownloading && sortedQueue.length > 0 && (
                            <div className="flex-1 overflow-y-auto custom-scrollbar">
                                {sortedQueue.map(item => (
                                    <QueueRow
                                        key={item.taskId}
                                        item={item}
                                        progress={downloads[item.url] ?? null}
                                        onCancel={() => handleCancelItem(item.taskId)}
                                    />
                                ))}
                            </div>
                        )}

                        {/* Failure section — after completion */}
                        {isComplete && batchFailed.length > 0 && (
                            <div className="flex-1 overflow-hidden flex flex-col px-4 pt-4">
                                <button
                                    onClick={() => setShowErrors(v => !v)}
                                    className="flex items-center justify-between px-3 py-2 rounded-lg text-xs shrink-0"
                                    style={{
                                        background: 'rgba(147,0,10,0.12)',
                                        color: 'var(--color-error)',
                                        fontFamily: 'var(--font-label)',
                                    }}
                                >
                                    <span className="flex items-center gap-1.5">
                                        <Icon name="warning" size={13} filled />
                                        {t('progress.n_failed', { count: batchFailed.length })}
                                    </span>
                                    <Icon name={showErrors ? 'expand_less' : 'expand_more'} size={14} />
                                </button>
                                {showErrors && (
                                    <div className="flex-1 overflow-y-auto custom-scrollbar mt-2 rounded-lg py-1" style={{ background: 'rgba(147,0,10,0.07)' }}>
                                        {batchFailed.map((f, i) => <FailureRow key={i} item={f} />)}
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Spacer when complete and no errors or errors collapsed */}
                        {(isComplete && batchFailed.length === 0) && <div className="flex-1" />}

                        {/* Progress bar + footer */}
                        <div className="px-5 pb-5 pt-3 shrink-0">
                            <div
                                className="w-full rounded-full h-1.5 overflow-hidden mb-2"
                                style={{ background: 'var(--color-surface-container-highest)' }}
                            >
                                <div
                                    className="h-full transition-all duration-300 ease-out rounded-full"
                                    style={{
                                        width: `${progress}%`,
                                        background: isComplete
                                            ? (batchFailed.length > 0
                                                ? 'linear-gradient(90deg, var(--color-primary), var(--color-error))'
                                                : 'var(--color-primary)')
                                            : 'linear-gradient(90deg, var(--color-primary-container), var(--color-primary))',
                                    }}
                                />
                            </div>
                            {isBatchDownloading && (
                                <p className="text-[10px] text-center" style={{ color: 'var(--color-on-surface-variant)', opacity: 0.5 }}>
                                    {t('progress.dont_close')}
                                </p>
                            )}
                            {isComplete && (
                                <div className="flex justify-end mt-1">
                                    <button
                                        onClick={() => { setShowErrors(false); useStore.getState().resetBatch(); }}
                                        className="text-xs px-3 py-1 rounded hover-bg-container transition-colors"
                                        style={{ color: 'var(--color-on-surface-variant)', fontFamily: 'var(--font-label)' }}
                                    >
                                        {t('common.clear', 'Pulisci')}
                                    </button>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Minimized FAB — when panel is closed but downloads are active */}
            <AnimatePresence>
                {!downloadPanelOpen && (
                    <motion.button
                        key="download-fab"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ type: 'spring', damping: 20, stiffness: 260 }}
                        onClick={() => setDownloadPanelOpen(true)}
                        className="fixed bottom-6 right-6 z-50 rounded-full p-3 shadow-xl"
                        style={{
                            background: isComplete ? 'var(--color-secondary)' : 'var(--color-primary)',
                            color: 'var(--color-on-primary-fixed)',
                        }}
                        title={t('progress.downloading')}
                    >
                        {isComplete
                            ? <Icon name="check_circle" size={22} filled />
                            : <Icon name="downloading" size={22} />
                        }
                        {isBatchDownloading && batchTotal > batchCompleted && (
                            <span
                                className="absolute -top-1 -right-1 rounded-full px-1.5 font-bold"
                                style={{
                                    background: 'var(--color-error)',
                                    color: 'white',
                                    fontSize: '9px',
                                    lineHeight: '14px',
                                    minWidth: '14px',
                                    textAlign: 'center',
                                }}
                            >
                                {batchTotal - batchCompleted}
                            </span>
                        )}
                    </motion.button>
                )}
            </AnimatePresence>
        </>
    );
};
