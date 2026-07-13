import React, { createContext, useContext, useState, useCallback } from 'react';
import { Icon } from '../components/Icon';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useStore, AppState, selectPanelVisible } from '../store/useStore';

type ToastType = 'success' | 'error' | 'info';

interface Toast {
    id: string;
    message: string;
    type: ToastType;
}

interface ToastContextType {
    show: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

// L2: monotonic counter for toast keys. Math.random().substring(7) could collide
// (and even yield an empty string), which breaks React keys and the removal filter.
let toastSeq = 0;

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { t } = useTranslation();
    const [toasts, setToasts] = useState<Toast[]>([]);
    const downloadPanelOpen = useStore((s: AppState) => s.downloadPanelOpen);
    const panelVisible = useStore(selectPanelVisible);

    const show = useCallback((message: string, type: ToastType = 'info') => {
        const id = `toast-${++toastSeq}`;
        setToasts((prev) => [...prev, { id, message, type }]);

        // L35: error toasts stay visible longer (6s) so failures are not missed
        setTimeout(() => {
            setToasts((prev) => prev.filter((item) => item.id !== id));
        }, type === 'error' ? 6000 : 3000);
    }, []);

    const remove = (id: string) => {
        setToasts((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <ToastContext.Provider value={{ show }}>
            {children}
            <div
                className="fixed bottom-4 z-[60] flex flex-col gap-2"
                style={{
                    right: downloadPanelOpen && panelVisible ? 'calc(380px + 1rem)' : '1rem',
                    transition: 'right 0.3s ease',
                }}
            >
                <AnimatePresence>
                    {toasts.map((toast) => (
                        <motion.div
                            key={toast.id}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 50 }}
                            className={clsx(
                                "flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg min-w-[300px] border border-white/10 backdrop-blur-md",
                                {
                                    'bg-green-500/20 text-green-200': toast.type === 'success',
                                    'bg-red-500/20 text-red-200': toast.type === 'error',
                                    'bg-blue-500/20 text-blue-200': toast.type === 'info',
                                }
                            )}
                        >
                            {toast.type === 'success' && <Icon name="check_circle" size={20} filled />}
                            {toast.type === 'error'   && <Icon name="error" size={20} filled />}
                            {toast.type === 'info'    && <Icon name="info" size={20} filled />}
                            <span className="flex-1 text-sm font-medium">{toast.message}</span>
                            <button
                                onClick={() => remove(toast.id)}
                                className="hover:bg-white/10 p-1 rounded"
                                aria-label={t('common.close', 'Chiudi')}
                            >
                                <Icon name="close" size={16} />
                            </button>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </ToastContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
};
