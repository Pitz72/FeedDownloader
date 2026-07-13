import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import Markdown from 'react-markdown';
import { useFocusTrap } from '../hooks/useFocusTrap';

interface HelpModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const HelpModal: React.FC<HelpModalProps> = ({ isOpen, onClose }) => {
    const { t, i18n } = useTranslation();
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false);
    const trapRef = useFocusTrap<HTMLDivElement>(isOpen);

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

    useEffect(() => { if (isOpen) loadHelp(); }, [isOpen, loadHelp]);

    useEffect(() => {
        if (!isOpen) return;
        const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="help-bg" onClick={onClose}>
                    <motion.div
                        ref={trapRef}
                        className="help-modal"
                        onClick={(e) => e.stopPropagation()}
                        initial={{ opacity: 0, y: 40, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 40, scale: 0.96 }}
                        transition={{ duration: 0.2 }}
                        role="dialog"
                        aria-modal="true"
                        tabIndex={-1}
                    >
                        <header className="help-header">
                            <h2>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                                </svg>
                                {t('help.title', 'Manuale utente')}
                            </h2>
                            <button
                                type="button"
                                className="icon-btn"
                                onClick={onClose}
                                aria-label={t('common.close', 'Chiudi')}
                                title={t('common.close', 'Chiudi')}
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                    <line x1="18" y1="6" x2="6" y2="18"/>
                                    <line x1="6" y1="6" x2="18" y2="18"/>
                                </svg>
                            </button>
                        </header>

                        <div className="help-body">
                            <div className="help-content custom-scrollbar">
                                {loading ? (
                                    <p style={{ textAlign: 'center', padding: '40px 0', color: 'var(--fg-3)' }}>
                                        {t('help.loading', 'Caricamento…')}
                                    </p>
                                ) : (
                                    <Markdown
                                        components={{
                                            h1: ({ node: _node, ...props }) => <h1 {...props} />,
                                            h2: ({ node: _node, ...props }) => <h2 {...props} />,
                                            h3: ({ node: _node, ...props }) => <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, color: 'var(--fg)', marginTop: 24, marginBottom: 8 }} {...props} />,
                                            p: ({ node: _node, ...props }) => <p {...props} />,
                                            ul: ({ node: _node, ...props }) => <ul {...props} />,
                                            li: ({ node: _node, ...props }) => <li {...props} />,
                                            strong: ({ node: _node, ...props }) => <strong {...props} />,
                                            a: ({ node: _node, ...props }) => <a target="_blank" rel="noreferrer" {...props} />,
                                            code: ({ node: _node, ...props }) => <code {...props} />,
                                        }}
                                    >
                                        {content}
                                    </Markdown>
                                )}
                            </div>
                        </div>

                        <footer className="help-footer">
                            <button
                                type="button"
                                onClick={async () => {
                                    const ok = await window.api.openManualPdf(i18n.language.split('-')[0]);
                                    if (!ok) console.warn('[Help] manual PDF not available');
                                }}
                                className="hover-bg-container"
                                style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                                    padding: '0.3rem 0.7rem', borderRadius: 'var(--radius-md, 8px)',
                                    background: 'var(--surf-2, rgba(255,255,255,0.05))',
                                    border: '1px solid rgba(65,71,85,0.3)', color: 'var(--fg-2, inherit)',
                                    fontFamily: 'var(--font-label)', fontSize: '0.75rem', cursor: 'pointer',
                                }}
                                title={t('help.open_pdf', 'Apri il manuale completo in PDF')}
                            >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                    <path d="M14 2v6h6" />
                                </svg>
                                {t('help.open_pdf', 'Apri il manuale completo in PDF')}
                            </button>
                            <span>v{__APP_VERSION__}</span>
                        </footer>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
