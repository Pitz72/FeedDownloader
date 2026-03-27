import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from './Icon';
import { useTranslation } from 'react-i18next';

interface ConfirmModalProps {
    isOpen: boolean;
    title: string;
    message: string;
    confirmLabel?: string;
    cancelLabel?: string;
    variant?: 'danger' | 'warning' | 'info';
    onConfirm: () => void;
    onCancel: () => void;
}

export const ConfirmModal: React.FC<ConfirmModalProps> = ({
    isOpen,
    title,
    message,
    confirmLabel,
    cancelLabel,
    variant = 'warning',
    onConfirm,
    onCancel,
}) => {
    const { t } = useTranslation();

    const variantColors = {
        danger: { bg: 'bg-red-500/10', border: 'border-red-500/30', btn: 'bg-red-600 hover:bg-red-500', icon: 'text-red-400' },
        warning: { bg: 'bg-orange-500/10', border: 'border-orange-500/30', btn: 'bg-orange-600 hover:bg-orange-500', icon: 'text-orange-400' },
        info: { bg: 'bg-blue-500/10', border: 'border-blue-500/30', btn: 'bg-blue-600 hover:bg-blue-500', icon: 'text-blue-400' },
    };

    const colors = variantColors[variant];

    // v0.5.0 — Esc key closes the modal
    useEffect(() => {
        if (!isOpen) return;
        const handleKeyDown = (e: KeyboardEvent) => { if (e.key === 'Escape') onCancel(); };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onCancel]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                    <motion.div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onCancel}
                    />
                    <motion.div
                        className={`${colors.bg} border ${colors.border} rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden relative z-10 p-6`}
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    >
                        <div className="flex items-start gap-3 mb-4">
                            <Icon name="warning" size={22} className={`${colors.icon} shrink-0 mt-0.5`} />
                            <div>
                                <h3 className="text-white font-semibold text-lg">{title}</h3>
                                <p className="text-gray-300 text-sm mt-1 leading-relaxed">{message}</p>
                            </div>
                        </div>
                        <div className="flex gap-2 mt-5">
                            <button
                                onClick={onCancel}
                                className="flex-1 bg-white/5 hover:bg-white/10 text-gray-300 py-2.5 rounded-lg text-sm font-medium transition-colors"
                            >
                                {cancelLabel || t('common.cancel', 'Cancel')}
                            </button>
                            <button
                                onClick={onConfirm}
                                className={`flex-1 ${colors.btn} text-white py-2.5 rounded-lg text-sm font-medium transition-colors shadow-lg`}
                            >
                                {confirmLabel || t('common.confirm', 'Confirm')}
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
