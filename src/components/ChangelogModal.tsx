import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import Markdown from 'react-markdown';

interface ChangelogModalProps {
    isOpen: boolean;
    onClose: () => void;
}

/**
 * Changelog in-app (v1.4.0) — renders docs/changelog/<version>.md for the running
 * version, so users see what changed without leaving the app or opening GitHub.
 */
export const ChangelogModal: React.FC<ChangelogModalProps> = ({ isOpen, onClose }) => {
    const { t } = useTranslation();
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!isOpen) return;
        let cancelled = false;
        setLoading(true);
        window.api.getChangelog()
            .then((text) => { if (!cancelled) setContent(text || ''); })
            .catch(() => { if (!cancelled) setContent(''); })
            .finally(() => { if (!cancelled) setLoading(false); });
        return () => { cancelled = true; };
    }, [isOpen]);

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
                        className="help-modal"
                        onClick={(e) => e.stopPropagation()}
                        initial={{ opacity: 0, y: 40, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 40, scale: 0.96 }}
                        transition={{ duration: 0.2 }}
                        role="dialog"
                        aria-modal="true"
                    >
                        <header className="help-header">
                            <h2>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M12 2v4" /><path d="m16.2 7.8 2.9-2.9" /><path d="M18 12h4" />
                                    <path d="m16.2 16.2 2.9 2.9" /><path d="M12 18v4" /><path d="m4.9 19.1 2.9-2.9" />
                                    <path d="M2 12h4" /><path d="m4.9 4.9 2.9 2.9" />
                                </svg>
                                {t('changelog.title', "Novità di questa versione")}
                            </h2>
                            <button
                                type="button"
                                className="icon-btn"
                                onClick={onClose}
                                aria-label={t('common.close', 'Chiudi')}
                                title={t('common.close', 'Chiudi')}
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </button>
                        </header>

                        <div className="help-body">
                            <div className="help-content custom-scrollbar">
                                {loading ? (
                                    <p style={{ textAlign: 'center', padding: '40px 0', color: 'var(--fg-3)' }}>
                                        {t('help.loading', 'Caricamento…')}
                                    </p>
                                ) : content ? (
                                    <Markdown
                                        components={{
                                            h3: ({ node: _node, ...props }) => <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, color: 'var(--fg)', marginTop: 24, marginBottom: 8 }} {...props} />,
                                            a: ({ node: _node, ...props }) => <a target="_blank" rel="noreferrer" {...props} />,
                                        }}
                                    >
                                        {content}
                                    </Markdown>
                                ) : (
                                    <p style={{ textAlign: 'center', padding: '40px 0', color: 'var(--fg-3)' }}>
                                        {t('changelog.empty', 'Nessuna nota di rilascio disponibile per questa versione.')}
                                    </p>
                                )}
                            </div>
                        </div>

                        <footer className="help-footer">
                            <span>{t('changelog.footer', 'Runtime FeedDownloader · note di rilascio')}</span>
                            <span>v{__APP_VERSION__}</span>
                        </footer>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
