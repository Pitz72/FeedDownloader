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
            // Provide just the language code (e.g., 'it', 'en-US' -> 'en')
            const langCode = i18n.language.split('-')[0];
            const text = await window.api.getHelpContent(langCode);
            setContent(text);
        } catch (error) {
            console.error("Failed to load help", error);
            setContent("# " + t('common.error', 'Error') + "\n" + t('help.error_loading'));
        } finally {
            setLoading(false);
        }
    }, [i18n.language, t]);

    useEffect(() => {
        if (isOpen) {
            loadHelp();
        }
    }, [isOpen, loadHelp]);

    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };

    const modalVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1 }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <motion.div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        variants={backdropVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        onClick={onClose}
                    />
                    <motion.div
                        className="bg-gray-900 border border-white/10 rounded-2xl shadow-2xl w-full max-w-4xl h-[80vh] flex flex-col overflow-hidden relative z-10"
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-white/10 flex justify-between items-center bg-white/5 shrink-0">
                            <h2 className="text-xl font-bold text-white flex items-center gap-2">
                                <Icon name="menu_book" size={20} style={{ color: 'var(--color-primary)' }} />
                                {t('help.title', 'User Guide')}
                            </h2>
                            <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                                <Icon name="close" size={24} />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                            {loading ? (
                                <div className="flex justify-center items-center h-full text-gray-400">
                                    {t('help.loading')}
                                </div>
                            ) : (
                                <div className="prose prose-invert prose-blue max-w-none">
                                    <Markdown
                                        components={{
                                            h1: ({ node: _node, ...props }) => <h1 className="text-3xl font-bold text-white mb-6 border-b border-white/10 pb-4" {...props} />,
                                            h2: ({ node: _node, ...props }) => <h2 className="text-2xl font-semibold text-blue-400 mt-8 mb-4" {...props} />,
                                            h3: ({ node: _node, ...props }) => <h3 className="text-xl font-medium text-gray-200 mt-6 mb-3" {...props} />,
                                            p: ({ node: _node, ...props }) => <p className="text-gray-300 leading-relaxed mb-4" {...props} />,
                                            ul: ({ node: _node, ...props }) => <ul className="list-disc pl-6 space-y-2 mb-4 text-gray-300" {...props} />,
                                            li: ({ node: _node, ...props }) => <li className="pl-1" {...props} />,
                                            strong: ({ node: _node, ...props }) => <strong className="text-white font-semibold" {...props} />,
                                            a: ({ node: _node, ...props }) => <a className="text-blue-400 hover:text-blue-300 underline" target="_blank" {...props} />,
                                        }}
                                    >
                                        {content}
                                    </Markdown>
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        <div className="p-4 border-t border-white/10 bg-black/20 text-center text-xs text-gray-500 shrink-0">
                            {t('help.footer_love')}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
