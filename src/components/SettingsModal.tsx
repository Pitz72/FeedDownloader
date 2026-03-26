import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { X, FolderOpen, AlertTriangle, BookOpen, Upload, Download, FileSpreadsheet, Settings2, BarChart3 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpModal } from './HelpModal';
import { useStore, AppState } from '../store/useStore';
import { useToast } from '../context/ToastContext';
import type { ArchiveStats } from '../../shared/types';

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
    const [concurrency, setConcurrency] = useState(3);
    const [namingTemplate, setNamingTemplate] = useState('{title}');
    const [archiveStats, setArchiveStats] = useState<ArchiveStats | null>(null);
    const isBatchDownloading = useStore((state: AppState) => state.isBatchDownloading);

    useEffect(() => {
        if (isOpen) {
            loadSettings();
        }
    }, [isOpen]);

    const loadSettings = async () => {
        const path = await window.api.getDownloadPath();
        setDownloadPath(path || 'Default');
        const conc = await window.api.getConcurrency();
        setConcurrency(conc);
        const stats = await window.api.getArchiveStats();
        setArchiveStats(stats);
        const tmpl = await window.api.getNamingTemplate();
        setNamingTemplate(tmpl || '{title}');
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
        setConfirmReset(false);
        // v0.4.7 — update state without reloading the entire app
        setArchiveStats({ totalFiles: 0, totalPodcasts: 0, oldestDate: null, newestDate: null });
        toast.show(t('settings.reset_success', 'Download history cleared.'), 'success');
    };

    const handleConcurrencyChange = async (n: number) => {
        setConcurrency(n);
        await window.api.setConcurrency(n);
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
                        className="bg-gray-900 border border-white/10 rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative z-10 max-h-[90vh] flex flex-col"
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-white/10 flex justify-between items-center bg-white/5 shrink-0">
                            <h2 className="text-xl font-bold text-white">{t('settings.title')}</h2>
                            <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                                <X size={24} />
                            </button>
                        </div>

                        {/* Body (scrollable) */}
                        <div className="p-6 space-y-8 overflow-y-auto custom-scrollbar">

                            {/* Language */}
                            <div className="space-y-3">
                                <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider">{t('settings.general')}</h3>
                                <div className="space-y-2">
                                    <label className="block text-sm text-gray-300">{t('settings.language')}</label>
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

                            {/* Download Settings */}
                            <div className="space-y-3">
                                <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider flex items-center gap-2">
                                    <Settings2 size={14} />
                                    {t('settings.storage')}
                                </h3>
                                <div className="space-y-2">
                                    <label className="block text-sm text-gray-300">{t('settings.download_path')}</label>
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

                                {/* Concurrency (v0.4.0) */}
                                <div className="space-y-2 mt-4">
                                    <label className="block text-sm text-gray-300">{t('settings.concurrency', 'Parallel Downloads')}</label>
                                    <div className="flex gap-2">
                                        {[1, 3, 5].map(n => (
                                            <button
                                                key={n}
                                                onClick={() => handleConcurrencyChange(n)}
                                                className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${concurrency === n
                                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/30'
                                                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                                                    }`}
                                            >
                                                {n}
                                            </button>
                                        ))}
                                    </div>
                                    <p className="text-xs text-gray-500">{t('settings.concurrency_hint', 'Number of simultaneous downloads')}</p>
                                </div>

                                {/* Naming Template (v0.5.4) */}
                                <div className="space-y-2 mt-4">
                                    <label className="block text-sm text-gray-300">{t('settings.naming_template')}</label>
                                    <input
                                        type="text"
                                        value={namingTemplate}
                                        onChange={(e) => setNamingTemplate(e.target.value)}
                                        onBlur={async () => { await window.api.setNamingTemplate(namingTemplate); }}
                                        className="w-full bg-black/20 border border-white/10 rounded-lg px-3 py-2 text-sm text-gray-300 font-mono focus:outline-none focus:border-blue-500"
                                        placeholder="{title}"
                                    />
                                    <p className="text-xs text-gray-500">{t('settings.naming_template_tokens')}</p>
                                    <p className="text-xs text-gray-600 font-mono truncate">
                                        {t('settings.naming_template_preview')}: {namingTemplate
                                            .replace(/\{date\}/gi, '2024-03-15')
                                            .replace(/\{year\}/gi, '2024')
                                            .replace(/\{month\}/gi, '03')
                                            .replace(/\{day\}/gi, '15')
                                            .replace(/\{podcast\}/gi, 'My Podcast')
                                            .replace(/\{title\}/gi, 'Episode Title')}
                                    </p>
                                </div>
                            </div>

                            {/* Archive Stats (v0.4.0) */}
                            {archiveStats && archiveStats.totalFiles > 0 && (
                                <div className="space-y-3">
                                    <h3 className="text-sm font-medium text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                                        <BarChart3 size={14} />
                                        {t('settings.stats', 'Archive Statistics')}
                                    </h3>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                                            <p className="text-2xl font-bold text-white">{archiveStats.totalFiles}</p>
                                            <p className="text-xs text-gray-400">{t('settings.stats_files', 'Files Downloaded')}</p>
                                        </div>
                                        <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                                            <p className="text-2xl font-bold text-white">{archiveStats.totalPodcasts}</p>
                                            <p className="text-xs text-gray-400">{t('settings.stats_podcasts', 'Podcasts')}</p>
                                        </div>
                                    </div>
                                    {archiveStats.oldestDate && (
                                        <p className="text-xs text-gray-500">
                                            {t('settings.stats_range', 'Archive range')}: {new Date(archiveStats.oldestDate).toLocaleDateString()} — {archiveStats.newestDate ? new Date(archiveStats.newestDate).toLocaleDateString() : '—'}
                                        </p>
                                    )}
                                </div>
                            )}

                            {/* Data & Portability */}
                            <div className="space-y-3">
                                <h3 className="text-sm font-medium text-blue-400 uppercase tracking-wider">{t('settings.data')}</h3>
                                <div className="grid grid-cols-1 gap-2">
                                    <button
                                        onClick={async () => {
                                            const res = await window.api.importOPML();
                                            if (res && res.count > 0) {
                                                toast.show(t('settings.import_success', { count: res.count }), 'success');
                                                // v0.4.7 — feeds auto-update via onFeedsUpdated push event, no reload needed
                                            } else {
                                                toast.show(t('settings.import_error'), 'error');
                                            }
                                        }}
                                        className="flex items-center gap-2 bg-white/5 hover:bg-white/10 p-2 rounded-lg text-sm text-gray-300 transition-colors"
                                    >
                                        <Upload size={16} className="text-green-400" />
                                        {t('settings.import_opml')}
                                    </button>
                                    <button
                                        onClick={async () => {
                                            const ok = await window.api.exportOPML();
                                            if (ok) toast.show(t('settings.export_success'), 'success');
                                        }}
                                        className="flex items-center gap-2 bg-white/5 hover:bg-white/10 p-2 rounded-lg text-sm text-gray-300 transition-colors"
                                    >
                                        <Download size={16} className="text-blue-400" />
                                        {t('settings.export_opml')}
                                    </button>
                                    <button
                                        onClick={async () => {
                                            const ok = await window.api.exportArchiveCSV();
                                            if (ok) toast.show(t('settings.export_success'), 'success');
                                        }}
                                        className="flex items-center gap-2 bg-white/5 hover:bg-white/10 p-2 rounded-lg text-sm text-gray-300 transition-colors"
                                    >
                                        <FileSpreadsheet size={16} className="text-purple-400" />
                                        {t('settings.export_csv')}
                                    </button>
                                </div>
                            </div>

                            {/* Danger Zone */}
                            <div className="space-y-3">
                                <h3 className="text-sm font-medium text-red-400 uppercase tracking-wider">{t('settings.danger_zone')}</h3>

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
                                        {t('settings.reset_db')}
                                    </button>
                                ) : (
                                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 animate-pulse">
                                        <p className="text-red-400 text-sm mb-3 text-center font-medium">
                                            {t('settings.confirm_reset')}
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
                                        {t('help.title')}
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
