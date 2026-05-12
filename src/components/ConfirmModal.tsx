import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

const variantIconColor: Record<NonNullable<ConfirmModalProps['variant']>, string> = {
    danger:  'var(--danger)',
    warning: 'var(--warn)',
    info:    'var(--azure-soft)',
};

export const ConfirmModal: React.FC<ConfirmModalProps> = ({
    isOpen, title, message, confirmLabel, cancelLabel, variant = 'warning', onConfirm, onCancel,
}) => {
    const { t } = useTranslation();
    const iconColor = variantIconColor[variant];

    useEffect(() => {
        if (!isOpen) return;
        const handleKeyDown = (e: KeyboardEvent) => { if (e.key === 'Escape') onCancel(); };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onCancel]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="confirm-bg" onClick={onCancel}>
                    <motion.div
                        className="confirm-dialog"
                        onClick={(e) => e.stopPropagation()}
                        initial={{ opacity: 0, scale: 0.92, y: 16 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.92, y: 16 }}
                        transition={{ duration: 0.2 }}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="confirm-title"
                    >
                        <div className="confirm-body">
                            <div className="confirm-icon" style={{ color: iconColor }} aria-hidden="true">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    {variant === 'danger' ? (
                                        <>
                                            <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                                            <line x1="12" y1="9" x2="12" y2="13"/>
                                            <line x1="12" y1="17" x2="12.01" y2="17"/>
                                        </>
                                    ) : variant === 'warning' ? (
                                        <>
                                            <circle cx="12" cy="12" r="10"/>
                                            <line x1="12" y1="8" x2="12" y2="12"/>
                                            <line x1="12" y1="16" x2="12.01" y2="16"/>
                                        </>
                                    ) : (
                                        <>
                                            <circle cx="12" cy="12" r="10"/>
                                            <path d="M12 16v-4"/>
                                            <path d="M12 8h.01"/>
                                        </>
                                    )}
                                </svg>
                            </div>
                            <div className="confirm-text">
                                <h3 id="confirm-title">{title}</h3>
                                <p>{message}</p>
                            </div>
                        </div>
                        <div className="confirm-actions">
                            <button type="button" className="confirm-btn" onClick={onCancel}>
                                {cancelLabel || t('common.cancel', 'Annulla')}
                            </button>
                            <button
                                type="button"
                                className={`confirm-btn ${variant === 'danger' ? 'danger' : ''}`}
                                onClick={onConfirm}
                            >
                                {confirmLabel || t('common.confirm', 'Conferma')}
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
