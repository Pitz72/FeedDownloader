import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { X, FolderOpen, AlertTriangle, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpModal } from './HelpModal';
import { useStore, AppState } from '../store/useStore';
import { useToast } from '../context/ToastContext';

interface SettingsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose }) => {
    const { t, i18n } = useTranslation();
    const toast = useToast();
    const [downloadPath, setDownloadPath] = useState('');
    const [confirmReset, setConfirmReset] = useState(false);
    const [isHelpOpen, setIsHelpOpen] = useState(false);
    const isBatchDownloading = useStore((state: AppState) => state.isBatchDownloading);

    useEffect(() => {
        if (isOpen) {
            loadSettings();
        }
    }, [isOpen]);

    const loadSettings = async () => {
        const path = await window.api.getDownloadPath();
        setDownloadPath(path || 'Default');
    };

    const handleChangeFolder = async () => {
        const path = await window.api.chooseFolder();
        if (path) {
            await window.api.setDownloadPath(path);
            setDownloadPath(path);
        }
    };

    const handleResetDatabase = async () => {
        await window.api.resetDownloadHistory();
        window.location.reload(); // Simple way to refresh everything
    };

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    };

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
                        className="bg-gray-900 border border-white/10 rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative z-10"
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-white/10 flex justify-between items-center bg-white/5">
                            <h2 className="text-xl font-bold text-white">{t('settings.title', 'Settings')}</h2>
                            <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                                <X size={24} />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="p-6 space-y-8">

                            {/* Language List */}
                            <div className="space-y-3">
                                <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider">{t('settings.general', 'General')}</h3>
                                <div className="space-y-2">
                                    <label className="block text-sm text-gray-300">{t('settings.language', 'Language')}</label>
                                    <select
                                        value={i18n.language}
                                        onChange={(e) => changeLanguage(e.target.value)}
                                        className="w-full bg-black/20 border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                    >
                                        <option value="en">English</option>
                                        <option value="it">Italiano</option>
                                        <option value="fr">Français</option>
                                        <option value="de">Deutsch</option>
                                        <option value="es">Español</option>
                                        <option value="pt">Português</option>
                                        <option value="ru">Русский</option>
                                        <option value="zh">中文</option>
                                    </select>
                                </div>
                            </div>

                            {/* Paths */}
                            <div className="space-y-3">
                                <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider">{t('settings.storage', 'Storage')}</h3>
                                <div className="space-y-2">
                                    <label className="block text-sm text-gray-300">{t('settings.download_path', 'Download Path')}</label>
                                    <div className="flex gap-2">
                                        <input
                                            type="text"
                                            readOnly
                                            value={downloadPath}
                                            className="flex-1 bg-black/20 border border-white/10 rounded-lg px-3 py-2 text-gray-400 text-sm font-mono truncate"
                                        />
                                        <button
                                            onClick={handleChangeFolder}
                                            className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-lg transition-colors"
                                            title={t('episodes.change_folder')}
                                        >
                                            <FolderOpen size={20} />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Data & Portability */}
                            <div className="space-y-3">
                                <h3 className="text-sm font-medium text-blue-400 uppercase tracking-wider">{t('settings.data', 'Data & Portability')}</h3>
                                <div className="grid grid-cols-1 gap-2">
                                    <button
                                        onClick={async () => {
                                            const res = await window.api.importOPML();
                                            if (res && res.count > 0) {
                                                toast.show(t('settings.import_success', { count: res.count }), 'success');
                                                setTimeout(() => window.location.reload(), 1500);
                                            } else {
                                                toast.show(t('settings.import_error'), 'error');
                                            }
                                        }}
                                        className="flex items-center gap-2 bg-white/5 hover:bg-white/10 p-2 rounded-lg text-sm text-gray-300 transition-colors"
                                    >
                                        <FolderOpen size={16} />
                                        {t('settings.import_opml', 'Import Feeds (OPML)')}
                                    </button>
                                    <button
                                        onClick={async () => {
                                            const ok = await window.api.exportOPML();
                                            if (ok) toast.show(t('settings.export_success'), 'success');
                                        }}
                                        className="flex items-center gap-2 bg-white/5 hover:bg-white/10 p-2 rounded-lg text-sm text-gray-300 transition-colors"
                                    >
                                        <FolderOpen size={16} />
                                        {t('settings.export_opml', 'Export Feeds (OPML)')}
                                    </button>
                                    <button
                                        onClick={async () => {
                                            const ok = await window.api.exportArchiveCSV();
                                            if (ok) toast.show(t('settings.export_success'), 'success');
                                        }}
                                        className="flex items-center gap-2 bg-white/5 hover:bg-white/10 p-2 rounded-lg text-sm text-gray-300 transition-colors"
                                    >
                                        <FolderOpen size={16} />
                                        {t('settings.export_csv', 'Export Inventory (CSV)')}
                                    </button>
                                </div>
                            </div>

                            {/* Maintenance */}
                            <div className="space-y-3">
                                <h3 className="text-sm font-medium text-red-400 uppercase tracking-wider">{t('settings.danger_zone', 'Danger Zone')}</h3>

                                {!confirmReset ? (
                                    <button
                                        onClick={() => setConfirmReset(true)}
                                        disabled={isBatchDownloading}
                                        className={`w-full flex items-center justify-center gap-2 border rounded-lg px-4 py-3 transition-colors text-sm font-medium ${isBatchDownloading
                                            ? 'bg-gray-800 border-gray-700 text-gray-500 cursor-not-allowed'
                                            : 'bg-red-500/10 hover:bg-red-500/20 border-red-500/30 text-red-500'
                                            }`}
                                        title={isBatchDownloading ? t('settings.reset_tooltip_downloading') : ""}
                                    >
                                        <AlertTriangle size={18} />
                                        {t('settings.reset_db', 'Reset Download History')}
                                    </button>
                                ) : (
                                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 animate-pulse">
                                        <p className="text-red-400 text-sm mb-3 text-center font-medium">
                                            {t('settings.confirm_reset', 'Are you sure? This will clear all download progress marks. Files will not be deleted.')}
                                        </p>
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => setConfirmReset(false)}
                                                className="flex-1 bg-transparent hover:bg-white/5 text-gray-300 py-2 rounded-lg text-sm transition-colors"
                                            >
                                                {t('common.cancel', 'Cancel')}
                                            </button>
                                            <button
                                                onClick={handleResetDatabase}
                                                className="flex-1 bg-red-600 hover:bg-red-500 text-white py-2 rounded-lg text-sm font-medium transition-colors shadow-lg shadow-red-900/20"
                                            >
                                                {t('common.confirm', 'Confirm')}
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Help Section */}
                            <div className="space-y-3 pt-4 border-t border-white/10">
                                <button
                                    onClick={() => setIsHelpOpen(true)}
                                    className="w-full flex items-center justify-between bg-white/5 hover:bg-white/10 border border-white/10 p-3 rounded-lg text-gray-300 transition-colors"
                                >
                                    <span className="flex items-center gap-2">
                                        <BookOpen size={18} className="text-blue-400" />
                                        {t('help.title', 'User Guide')}
                                    </span>
                                    <div className="text-xs bg-white/10 px-2 py-1 rounded text-gray-500">
                                        README
                                    </div>
                                </button>
                            </div>

                        </div>
                    </motion.div>
                </div>
            )}
            <HelpModal isOpen={isHelpOpen} onClose={() => setIsHelpOpen(false)} />
        </AnimatePresence>
    );
};
