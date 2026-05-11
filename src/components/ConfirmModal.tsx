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

const variantConfig = {
    danger: {
        iconName: 'error',
        iconColor: 'var(--color-error)',
        cardBg: 'rgba(147,0,10,0.12)',
        cardBorder: 'rgba(255,180,171,0.2)',
        btnBg: 'var(--color-error-container)',
        btnColor: 'var(--color-error)',
    },
    warning: {
        iconName: 'warning',
        iconColor: 'var(--color-warning)',
        cardBg: 'rgba(110,50,0,0.18)',
        cardBorder: 'rgba(255,183,112,0.2)',
        btnBg: 'var(--color-warning-container)',
        btnColor: 'var(--color-warning)',
    },
    info: {
        iconName: 'info',
        iconColor: 'var(--color-primary)',
        cardBg: 'rgba(75,142,255,0.10)',
        cardBorder: 'rgba(173,198,255,0.2)',
        btnBg: 'var(--color-primary-container)',
        btnColor: 'var(--color-on-primary-fixed)',
    },
};

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
    const cfg = variantConfig[variant];

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
                        className="absolute inset-0 backdrop-blur-sm"
                        style={{ background: 'rgba(0,0,0,0.65)' }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onCancel}
                    />
                    <motion.div
                        className="relative z-10 w-full max-w-sm rounded-2xl shadow-2xl overflow-hidden p-6"
                        style={{
                            background: cfg.cardBg,
                            border: `1px solid ${cfg.cardBorder}`,
                            backdropFilter: 'blur(20px)',
                        }}
                        initial={{ opacity: 0, scale: 0.92, y: 16 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.92, y: 16 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="flex items-start gap-3 mb-5">
                            <Icon name={cfg.iconName} size={22} filled style={{ color: cfg.iconColor, flexShrink: 0, marginTop: 2 }} />
                            <div>
                                <h3 className="font-semibold text-base" style={{ color: 'var(--color-on-surface)', fontFamily: 'var(--font-headline)' }}>
                                    {title}
                                </h3>
                                <p className="text-sm mt-1 leading-relaxed" style={{ color: 'var(--color-on-surface-variant)' }}>
                                    {message}
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={onCancel}
                                className="hover-bg-bright flex-1 py-2.5 rounded-lg text-sm font-medium transition-all"
                                style={{
                                    background: 'var(--color-surface-container-highest)',
                                    color: 'var(--color-on-surface-variant)',
                                    fontFamily: 'var(--font-label)',
                                }}
                            >
                                {cancelLabel || t('common.cancel', 'Annulla')}
                            </button>
                            <button
                                onClick={onConfirm}
                                className="flex-1 py-2.5 rounded-lg text-sm font-medium transition-all shadow-lg"
                                style={{
                                    background: cfg.btnBg,
                                    color: cfg.btnColor,
                                    fontFamily: 'var(--font-label)',
                                }}
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
