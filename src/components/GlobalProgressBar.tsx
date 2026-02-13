import React from 'react';
import { useStore, AppState } from '../store/useStore';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const GlobalProgressBar: React.FC = () => {
    const { batchTotal, batchCompleted, isBatchDownloading } = useStore((state: AppState) => state);
    const { t } = useTranslation();

    if (!isBatchDownloading && batchCompleted === 0) return null;

    const progress = Math.min((batchCompleted / batchTotal) * 100, 100);

    return (
        <AnimatePresence>
            {isBatchDownloading && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-6 right-6 bg-gray-900 border border-white/10 rounded-xl p-4 shadow-2xl w-80 z-50 backdrop-blur-md"
                >
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-white">{t('progress.downloading')}</span>
                        <div className="flex items-center gap-3">
                            <span className="text-xs text-blue-400 font-mono">
                                {batchCompleted} / {batchTotal}
                            </span>
                            <button
                                onClick={() => useStore.getState().stopBatch()}
                                className="text-gray-400 hover:text-red-400 transition-colors p-1 rounded hover:bg-white/5"
                                title={t('progress.stop')}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-square"><rect width="18" height="18" x="3" y="3" rx="2" /></svg>
                            </button>
                        </div>
                    </div>

                    <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                        <div
                            className="bg-blue-500 h-full transition-all duration-300 ease-out"
                            style={{ width: `${progress}%` }}
                        />
                    </div>

                    <p className="text-xs text-gray-500 mt-2 text-center">
                        {t('progress.dont_close')}
                    </p>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
