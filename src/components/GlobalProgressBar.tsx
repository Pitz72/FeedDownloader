import React, { useState, useCallback } from 'react';
import { useStore, AppState } from '../store/useStore';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Icon } from './Icon';
import type { QueueItem, FailedDownload } from '../types';

const ERROR_CODE_MAP: Record<string, string> = {
    EPISODE_NOT_FOUND:      'progress.error_not_found',
    DOWNLOAD_STALLED:       'progress.error_stalled',
    DOWNLOAD_TIMEOUT:       'progress.error_timeout',
    DISK_FULL:              'progress.error_disk_full',
    INTEGRITY_CHECK_FAILED: 'progress.error_integrity',
    PERMISSION_DENIED:      'progress.error_permission',
};

function useTranslateError() {
    const { t } = useTranslation();
    return useCallback((code: string) => {
        const key = ERROR_CODE_MAP[code];
        return key ? t(key) : t('progress.error_unknown');
    }, [t]);
}

interface QueueRowProps {
    item: QueueItem;
    onCancel: () => void;
}

const QueueRow: React.FC<QueueRowProps> = ({ item, onCancel }) => {
    const { t } = useTranslation();
    return (
        <div className="flex items-center gap-2 px-1 py-1 rounded-lg group/row" style={{ minWidth: 0 }}>
            {item.status === 'downloading' ? (
                <Icon
                    name="autorenew"
                    size={14}
                    className="flex-shrink-0 animate-spin"
                    style={{ color: 'var(--color-primary)' }}
                />
            ) : (
                <Icon
                    name="schedule"
                    size={14}
                    className="flex-shrink-0"
                    style={{ color: 'var(--color-on-surface-variant)', opacity: 0.4 }}
                />
            )}
            <div className="flex-1 min-w-0">
                <p className="text-xs truncate leading-tight"
                    style={{ color: 'var(--color-on-surface)', fontFamily: 'var(--font-label)' }}>
                    {item.title}
                </p>
                <p className="truncate leading-tight"
                    style={{ color: 'var(--color-on-surface-variant)', opacity: 0.55, fontSize: '10px' }}>
                    {item.podcastTitle}
                </p>
            </div>
            <button
                onClick={onCancel}
                className="flex-shrink-0 p-0.5 rounded opacity-0 group-hover/row:opacity-100 transition-opacity"
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
    const translateError = useTranslateError();
    return (
        <div className="flex items-start gap-1.5 px-2 py-0.5" style={{ minWidth: 0 }}>
            <Icon name="error_outline" size={12} className="flex-shrink-0 mt-0.5"
                style={{ color: 'var(--color-error)', opacity: 0.8 }} />
            <div className="min-w-0">
                <span className="text-xs block truncate"
                    style={{ color: 'var(--color-on-surface)', fontFamily: 'var(--font-label)' }}>
                    {item.title}
                </span>
                <span className="block truncate"
                    style={{ color: 'var(--color-error)', opacity: 0.7, fontSize: '10px' }}>
                    {translateError(item.errorCode)}
                </span>
            </div>
        </div>
    );
};

export const GlobalProgressBar: React.FC = () => {
    const { batchTotal, batchCompleted, isBatchDownloading, queueItems, batchFailed } =
        useStore((state: AppState) => state);
    const { t } = useTranslation();
    const [showErrors, setShowErrors] = useState(false);

    const handleCancelItem = useCallback(async (taskId: string) => {
        await window.api.cancelDownload(taskId);
    }, []);

    if (!isBatchDownloading && batchCompleted === 0) return null;

    const progress = batchTotal > 0 ? Math.min((batchCompleted / batchTotal) * 100, 100) : 0;
    const isComplete = !isBatchDownloading && batchCompleted > 0 && batchCompleted >= batchTotal;

    // Downloading items first, pending after
    const sortedQueue = [...queueItems].sort((a, b) => {
        if (a.status === 'downloading' && b.status !== 'downloading') return -1;
        if (a.status !== 'downloading' && b.status === 'downloading') return 1;
        return 0;
    });

    return (
        <AnimatePresence>
            {(isBatchDownloading || isComplete) && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-6 right-6 rounded-xl p-4 shadow-2xl z-50"
                    style={{
                        width: '22rem',
                        background: 'var(--color-surface-container-low)',
                        boxShadow: 'inset 0 0 0 1px rgba(65,71,85,0.25), 0 16px 40px rgba(0,0,0,0.5)',
                        backdropFilter: 'blur(20px)',
                    }}
                >
                    {/* Header */}
                    <div className="flex justify-between items-center mb-2">
                        <span
                            className="text-sm font-medium flex items-center gap-2"
                            style={{ color: 'var(--color-on-surface)', fontFamily: 'var(--font-label)' }}
                        >
                            {isComplete ? (
                                <>
                                    <Icon name="check_circle" size={16} filled style={{ color: 'var(--color-primary)' }} />
                                    {t('progress.completed')}
                                </>
                            ) : (
                                t('progress.downloading')
                            )}
                        </span>
                        <div className="flex items-center gap-2">
                            <span
                                className="text-xs font-mono"
                                style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-label)' }}
                            >
                                {batchCompleted} / {batchTotal}
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
                            {isComplete && (
                                <button
                                    onClick={() => { setShowErrors(false); useStore.getState().resetBatch(); }}
                                    className="hover-bg-surface-high p-1 rounded transition-all"
                                    style={{ color: 'var(--color-on-surface-variant)' }}
                                >
                                    <Icon name="close" size={14} />
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Queue list — active downloads only */}
                    {isBatchDownloading && sortedQueue.length > 0 && (
                        <div
                            className="mb-3 overflow-y-auto custom-scrollbar"
                            style={{ maxHeight: '168px' }}
                        >
                            {sortedQueue.map(item => (
                                <QueueRow
                                    key={item.taskId}
                                    item={item}
                                    onCancel={() => handleCancelItem(item.taskId)}
                                />
                            ))}
                        </div>
                    )}

                    {/* Failure summary — after batch completes */}
                    {isComplete && batchFailed.length > 0 && (
                        <div className="mb-3">
                            <button
                                onClick={() => setShowErrors(v => !v)}
                                className="flex items-center justify-between w-full px-2 py-1.5 rounded-lg transition-colors text-xs"
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
                                <div
                                    className="mt-1 overflow-y-auto custom-scrollbar rounded-lg py-1"
                                    style={{
                                        maxHeight: '128px',
                                        background: 'rgba(147,0,10,0.07)',
                                    }}
                                >
                                    {batchFailed.map((f, i) => (
                                        <FailureRow key={i} item={f} />
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    {/* Progress bar */}
                    <div
                        className="w-full rounded-full h-1.5 overflow-hidden"
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
                        <p
                            className="text-xs mt-2 text-center"
                            style={{ color: 'var(--color-on-surface-variant)', opacity: 0.55 }}
                        >
                            {t('progress.dont_close')}
                        </p>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
};
