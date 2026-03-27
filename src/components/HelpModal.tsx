import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Icon } from './Icon';
import { motion, AnimatePresence } from 'framer-motion';
import Markdown from 'react-markdown';

interface HelpModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const HelpModal: React.FC<HelpModalProps> = ({ isOpen, onClose }) => {
    const { t, i18n } = useTranslation();
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false);

    const loadHelp = useCallback(async () => {
        setLoading(true);
        try {
            const langCode = i18n.language.split('-')[0];
            const text = await window.api.getHelpContent(langCode);
            setContent(text);
        } catch (error) {
            console.error('Failed to load help', error);
            setContent('# ' + t('common.error', 'Error') + '\n' + t('help.error_loading'));
        } finally {
            setLoading(false);
        }
    }, [i18n.language, t]);

    useEffect(() => {
        if (isOpen) loadHelp();
    }, [isOpen, loadHelp]);

    // Esc key
    useEffect(() => {
        if (!isOpen) return;
        const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
                    <motion.div
                        className="absolute inset-0 backdrop-blur-sm"
                        style={{ background: 'rgba(0,0,0,0.72)' }}
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        onClick={onClose}
                    />
                    <motion.div
                        className="relative z-10 w-full max-w-4xl flex flex-col overflow-hidden rounded-2xl shadow-2xl"
                        style={{
                            background: 'var(--color-surface-container-low)',
                            boxShadow: 'inset 0 0 0 1px rgba(65,71,85,0.2), 0 24px 64px rgba(0,0,0,0.6)',
                            height: '80vh',
                        }}
                        initial={{ opacity: 0, y: 40, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 40, scale: 0.96 }}
                        transition={{ duration: 0.2 }}
                    >
                        {/* Header */}
                        <div
                            className="px-6 py-4 flex justify-between items-center shrink-0"
                            style={{ borderBottom: '1px solid rgba(65,71,85,0.2)', background: 'var(--color-surface-container)' }}
                        >
                            <h2
                                className="text-base font-bold flex items-center gap-2"
                                style={{ color: 'var(--color-on-surface)', fontFamily: 'var(--font-headline)' }}
                            >
                                <Icon name="menu_book" size={20} style={{ color: 'var(--color-primary)' }} />
                                {t('help.title', 'User Guide')}
                            </h2>
                            <button
                                onClick={onClose}
                                className="p-1 rounded-lg transition-all"
                                style={{ color: 'var(--color-on-surface-variant)' }}
                                onMouseEnter={e => { e.currentTarget.style.color = 'var(--color-on-surface)'; e.currentTarget.style.background = 'var(--color-surface-container-high)'; }}
                                onMouseLeave={e => { e.currentTarget.style.color = 'var(--color-on-surface-variant)'; e.currentTarget.style.background = ''; }}
                            >
                                <Icon name="close" size={22} />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                            {loading ? (
                                <div className="flex justify-center items-center h-full text-sm" style={{ color: 'var(--color-on-surface-variant)' }}>
                                    {t('help.loading')}
                                </div>
                            ) : (
                                <div>
                                    <Markdown
                                        components={{
                                            h1: ({ node: _node, ...props }) => (
                                                <h1 className="text-3xl font-bold mb-6 pb-4"
                                                    style={{ color: 'var(--color-on-surface)', fontFamily: 'var(--font-headline)', borderBottom: '1px solid rgba(65,71,85,0.2)' }}
                                                    {...props} />
                                            ),
                                            h2: ({ node: _node, ...props }) => (
                                                <h2 className="text-xl font-semibold mt-8 mb-4"
                                                    style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-headline)' }}
                                                    {...props} />
                                            ),
                                            h3: ({ node: _node, ...props }) => (
                                                <h3 className="text-base font-medium mt-6 mb-3"
                                                    style={{ color: 'var(--color-on-surface)', fontFamily: 'var(--font-label)' }}
                                                    {...props} />
                                            ),
                                            p: ({ node: _node, ...props }) => (
                                                <p className="leading-relaxed mb-4 text-sm"
                                                    style={{ color: 'var(--color-on-surface-variant)' }}
                                                    {...props} />
                                            ),
                                            ul: ({ node: _node, ...props }) => (
                                                <ul className="list-disc pl-6 space-y-1.5 mb-4 text-sm"
                                                    style={{ color: 'var(--color-on-surface-variant)' }}
                                                    {...props} />
                                            ),
                                            li: ({ node: _node, ...props }) => <li className="pl-1" {...props} />,
                                            strong: ({ node: _node, ...props }) => (
                                                <strong style={{ color: 'var(--color-on-surface)', fontWeight: 600 }} {...props} />
                                            ),
                                            a: ({ node: _node, ...props }) => (
                                                <a style={{ color: 'var(--color-primary)' }} className="hover:underline"
                                                    target="_blank" rel="noreferrer" {...props} />
                                            ),
                                            code: ({ node: _node, ...props }) => (
                                                <code className="text-xs px-1.5 py-0.5 rounded font-mono"
                                                    style={{ background: 'var(--color-surface-container-highest)', color: 'var(--color-secondary)' }}
                                                    {...props} />
                                            ),
                                        }}
                                    >
                                        {content}
                                    </Markdown>
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        <div
                            className="px-6 py-3 text-center text-xs shrink-0"
                            style={{ borderTop: '1px solid rgba(65,71,85,0.15)', color: 'var(--color-on-surface-variant)', opacity: 0.6, background: 'var(--color-surface-container)' }}
                        >
                            {t('help.footer_love')}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
