import React from 'react';
import { useStore, AppState } from '../store/useStore';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Icon } from './Icon';

export const GlobalProgressBar: React.FC = () => {
    const { batchTotal, batchCompleted, isBatchDownloading } = useStore((state: AppState) => state);
    const { t } = useTranslation();

    if (!isBatchDownloading && batchCompleted === 0) return null;

    const progress = batchTotal > 0 ? Math.min((batchCompleted / batchTotal) * 100, 100) : 0;
    const isComplete = !isBatchDownloading && batchCompleted > 0 && batchCompleted >= batchTotal;

    return (
        <AnimatePresence>
            {(isBatchDownloading || isComplete) && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-6 right-6 rounded-xl p-4 shadow-2xl w-80 z-50"
                    style={{
                        background: 'var(--color-surface-container-low)',
                        boxShadow: 'inset 0 0 0 1px rgba(65,71,85,0.25), 0 16px 40px rgba(0,0,0,0.5)',
                        backdropFilter: 'blur(20px)',
                    }}
                >
                    <div className="flex justify-between items-center mb-2">
                        <span
                            className="text-sm font-medium flex items-center gap-2"
                            style={{ color: 'var(--color-on-surface)', fontFamily: 'var(--font-label)' }}
                        >
                            {isComplete ? (
                                <>
                                    <Icon name="check_circle" size={16} filled style={{ color: 'var(--color-primary)' }} />
                                    {t('progress.completed', 'Completato!')}
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
                                    onClick={() => useStore.getState().resetBatch()}
                                    className="hover-bg-surface-high p-1 rounded transition-all"
                                    style={{ color: 'var(--color-on-surface-variant)' }}
                                >
                                    <Icon name="close" size={14} />
                                </button>
                            )}
                        </div>
                    </div>

                    <div
                        className="w-full rounded-full h-1.5 overflow-hidden"
                        style={{ background: 'var(--color-surface-container-highest)' }}
                    >
                        <div
                            className="h-full transition-all duration-300 ease-out rounded-full"
                            style={{
                                width: `${progress}%`,
                                background: isComplete
                                    ? 'var(--color-primary)'
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
