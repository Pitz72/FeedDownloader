import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { X, FolderOpen, AlertTriangle, BookOpen, Upload, Download, FileSpreadsheet, Settings2, BarChart3, ShieldCheck, RefreshCw, Globe, Tag, Archive } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpModal } from './HelpModal';
import { useStore, AppState } from '../store/useStore';
import { useToast } from '../context/ToastContext';
import type { ArchiveStats } from '../../shared/types';

interface SettingsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

type NavCategory = 'general' | 'download' | 'metadata' | 'archive' | 'advanced';

export const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose }) => {
    const { t, i18n } = useTranslation();
    const toast = useToast();
    const [downloadPath, setDownloadPath] = useState('');
    const [confirmReset, setConfirmReset] = useState(false);
    const [isHelpOpen, setIsHelpOpen] = useState(false);
    const [concurrency, setConcurrency] = useState(3);
    const [namingTemplate, setNamingTemplate] = useState('{title}');
    const [sidecarEnabled, setSidecarEnabled] = useState(false);
    const [id3Enabled, setId3Enabled] = useState(false);
    const [speedLimit, setSpeedLimit] = useState<number>(0);
    const [archiveStats, setArchiveStats] = useState<ArchiveStats | null>(null);
    const [healthResult, setHealthResult] = useState<import('../../shared/types').HealthCheckResult | null>(null);
    const [isHealthChecking, setIsHealthChecking] = useState(false);
    const [activeCategory, setActiveCategory] = useState<NavCategory>('general');
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
        const sidecar = await window.api.getSidecarEnabled();
        setSidecarEnabled(sidecar);
        const id3 = await window.api.getId3Enabled();
        setId3Enabled(id3);
        const sl = await window.api.getSpeedLimit();
        setSpeedLimit(sl);
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

    const handleSpeedLimitChange = async (value: number) => {
        const clamped = Math.max(0, Math.floor(value));
        setSpeedLimit(clamped);
        await window.api.setSpeedLimit(clamped);
    };

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    };

    const navItems: { id: NavCategory; labelKey: string; icon: React.ReactNode }[] = [
        { id: 'general', labelKey: 'settings.nav_general', icon: <Globe size={16} /> },
        { id: 'download', labelKey: 'settings.nav_download', icon: <Download size={16} /> },
        { id: 'metadata', labelKey: 'settings.nav_metadata', icon: <Tag size={16} /> },
        { id: 'archive', labelKey: 'settings.nav_archive', icon: <Archive size={16} /> },
        { id: 'advanced', labelKey: 'settings.nav_advanced', icon: <AlertTriangle size={16} /> },
    ];

    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };

    const panelVariants = {
        hidden: { x: 60, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 30 } },
        exit: { x: 60, opacity: 0, transition: { duration: 0.15 } }
    };

    const contentVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.15 } }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
                    {/* Backdrop */}
                    <motion.div
                        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                        variants={backdropVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        onClick={onClose}
                    />

                    {/* Panel */}
                    <motion.div
                        className="relative z-10 bg-gray-950 border border-white/10 rounded-2xl shadow-2xl w-full max-w-5xl flex flex-col overflow-hidden"
                        style={{ maxHeight: 'calc(100vh - 4rem)', minHeight: '500px' }}
                        variants={panelVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/5 shrink-0">
                            <div className="flex items-center gap-2">
                                <Settings2 size={20} className="text-blue-400" />
                                <h2 className="text-lg font-bold text-white">{t('settings.title')}</h2>
                            </div>
                            <button
                                onClick={onClose}
                                className="text-gray-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Body: two-column layout */}
                        <div className="flex flex-1 overflow-hidden">
                            {/* Left navigation */}
                            <nav className="w-52 shrink-0 border-r border-white/10 py-4 flex flex-col gap-1 px-2 bg-black/20">
                                {navItems.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => setActiveCategory(item.id)}
                                        className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all text-left border-l-2 ${
                                            activeCategory === item.id
                                                ? 'bg-blue-600/20 text-white border-blue-500'
                                                : 'text-gray-400 hover:text-white hover:bg-white/5 border-transparent'
                                        }`}
                                    >
                                        <span className={activeCategory === item.id ? 'text-blue-400' : 'text-gray-500'}>
                                            {item.icon}
                                        </span>
                                        {t(item.labelKey)}
                                    </button>
                                ))}
                            </nav>

                            {/* Right content (scrollable) */}
                            <div className="flex-1 overflow-y-auto custom-scrollbar">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeCategory}
                                        variants={contentVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                        className="p-8 space-y-8"
                                    >

                                        {/* ── GENERAL ── */}
                                        {activeCategory === 'general' && (
                                            <>
                                                <div className="space-y-3">
                                                    <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider">{t('settings.general')}</h3>
                                                    <div className="space-y-2">
                                                        <label className="block text-sm text-gray-300">{t('settings.language')}</label>
                                                        <select
                                                            value={i18n.language}
                                                            onChange={(e) => changeLanguage(e.target.value)}
                                                            className="w-full max-w-xs bg-black/20 border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500 transition-colors"
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
                                            </>
                                        )}

                                        {/* ── DOWNLOAD ── */}
                                        {activeCategory === 'download' && (
                                            <>
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
                                                </div>

                                                {/* Concurrency */}
                                                <div className="space-y-2">
                                                    <label className="block text-sm text-gray-300">{t('settings.concurrency', 'Parallel Downloads')}</label>
                                                    <div className="flex gap-2 max-w-xs">
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

                                                {/* Speed Limit */}
                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium text-gray-300">
                                                        {t('settings.speed_limit')}
                                                    </label>
                                                    <p className="text-xs text-gray-500">{t('settings.speed_limit_desc')}</p>
                                                    <div className="flex items-center gap-3">
                                                        <input
                                                            type="number"
                                                            min={0}
                                                            max={102400}
                                                            value={speedLimit}
                                                            onChange={(e) => handleSpeedLimitChange(parseInt(e.target.value) || 0)}
                                                            className="w-32 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
                                                        />
                                                        <span className="text-sm text-gray-400">
                                                            {speedLimit === 0 ? t('settings.speed_unlimited') : 'KB/s'}
                                                        </span>
                                                    </div>
                                                </div>
                                            </>
                                        )}

                                        {/* ── METADATA ── */}
                                        {activeCategory === 'metadata' && (
                                            <>
                                                {/* Naming Template */}
                                                <div className="space-y-2">
                                                    <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-3">{t('settings.nav_metadata')}</h3>
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

                                                {/* Sidecar JSON */}
                                                <div className="flex items-center justify-between p-3 bg-white/5 border border-white/10 rounded-lg">
                                                    <div>
                                                        <p className="text-sm text-gray-300">{t('settings.sidecar_enabled')}</p>
                                                        <p className="text-xs text-gray-500 mt-0.5">{t('settings.sidecar_hint')}</p>
                                                    </div>
                                                    <button
                                                        onClick={async () => {
                                                            const next = !sidecarEnabled;
                                                            setSidecarEnabled(next);
                                                            await window.api.setSidecarEnabled(next);
                                                        }}
                                                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${sidecarEnabled ? 'bg-blue-600' : 'bg-white/20'}`}
                                                    >
                                                        <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${sidecarEnabled ? 'translate-x-6' : 'translate-x-1'}`} />
                                                    </button>
                                                </div>

                                                {/* ID3 Tagging */}
                                                <div className="flex items-center justify-between p-3 bg-white/5 border border-white/10 rounded-lg">
                                                    <div>
                                                        <p className="text-sm text-gray-300">{id3Enabled ? t('settings.id3_enabled') : t('settings.id3_disabled')}</p>
                                                        <p className="text-xs text-gray-500 mt-0.5">{t('settings.id3_tagging_desc')}</p>
                                                    </div>
                                                    <button
                                                        onClick={async () => {
                                                            const next = !id3Enabled;
                                                            setId3Enabled(next);
                                                            await window.api.setId3Enabled(next);
                                                        }}
                                                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${id3Enabled ? 'bg-blue-600' : 'bg-white/20'}`}
                                                    >
                                                        <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${id3Enabled ? 'translate-x-6' : 'translate-x-1'}`} />
                                                    </button>
                                                </div>
                                            </>
                                        )}

                                        {/* ── ARCHIVE ── */}
                                        {activeCategory === 'archive' && (
                                            <>
                                                {/* Archive Stats */}
                                                {archiveStats && archiveStats.totalFiles > 0 && (
                                                    <div className="space-y-3">
                                                        <h3 className="text-sm font-medium text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                                                            <BarChart3 size={14} />
                                                            {t('settings.stats', 'Archive Statistics')}
                                                        </h3>
                                                        <div className="grid grid-cols-2 gap-3">
                                                            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                                                                <p className="text-2xl font-bold text-white">{archiveStats.totalFiles}</p>
                                                                <p className="text-xs text-gray-400">{t('settings.stats_files', 'Files Downloaded')}</p>
                                                            </div>
                                                            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
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

                                                {/* Health Check */}
                                                <div className="space-y-3">
                                                    <h3 className="text-sm font-medium text-yellow-400 uppercase tracking-wider flex items-center gap-2">
                                                        <ShieldCheck size={14} />
                                                        {t('settings.health_check')}
                                                    </h3>
                                                    <button
                                                        onClick={async () => {
                                                            setIsHealthChecking(true);
                                                            try {
                                                                const result = await window.api.runHealthCheck();
                                                                setHealthResult(result);
                                                            } finally {
                                                                setIsHealthChecking(false);
                                                            }
                                                        }}
                                                        disabled={isHealthChecking}
                                                        className="w-full flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 p-2 rounded-lg text-sm text-gray-300 transition-colors disabled:opacity-50"
                                                    >
                                                        <RefreshCw size={16} className={isHealthChecking ? 'animate-spin text-yellow-400' : 'text-yellow-400'} />
                                                        {isHealthChecking ? t('settings.health_check_running') : t('settings.health_check_run')}
                                                    </button>
                                                    {healthResult && (
                                                        <div className="space-y-2 p-3 bg-white/5 border border-white/10 rounded-lg text-sm">
                                                            <div className="grid grid-cols-3 gap-2 text-center">
                                                                <div className="bg-white/5 rounded p-2">
                                                                    <p className="text-xl font-bold text-white">{healthResult.total}</p>
                                                                    <p className="text-xs text-gray-400">{t('settings.health_total')}</p>
                                                                </div>
                                                                <div className="bg-white/5 rounded p-2">
                                                                    <p className="text-xl font-bold text-green-400">{healthResult.present}</p>
                                                                    <p className="text-xs text-gray-400">{t('settings.health_present')}</p>
                                                                </div>
                                                                <div className={`rounded p-2 ${healthResult.missing > 0 ? 'bg-red-500/10' : 'bg-white/5'}`}>
                                                                    <p className={`text-xl font-bold ${healthResult.missing > 0 ? 'text-red-400' : 'text-gray-400'}`}>{healthResult.missing}</p>
                                                                    <p className="text-xs text-gray-400">{t('settings.health_missing')}</p>
                                                                </div>
                                                            </div>
                                                            <p className="text-xs text-gray-500 text-center">
                                                                {t('settings.health_size')}: {healthResult.totalSizeBytes >= 1_073_741_824
                                                                    ? (healthResult.totalSizeBytes / 1_073_741_824).toFixed(2) + ' GB'
                                                                    : (healthResult.totalSizeBytes / 1_048_576).toFixed(1) + ' MB'}
                                                            </p>
                                                            {healthResult.missing > 0 && (
                                                                <div className="mt-2 space-y-1">
                                                                    <p className="text-xs text-red-400 font-medium">{t('settings.health_missing_files')}:</p>
                                                                    {healthResult.missingFiles.slice(0, 5).map((f, i) => (
                                                                        <p key={i} className="text-xs text-gray-500 font-mono truncate">{f.podcast} / {f.filename}</p>
                                                                    ))}
                                                                    {healthResult.missingFiles.length > 5 && (
                                                                        <p className="text-xs text-gray-600">... {t('settings.health_and_more', { count: healthResult.missingFiles.length - 5 })}</p>
                                                                    )}
                                                                </div>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>

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
                                            </>
                                        )}

                                        {/* ── ADVANCED ── */}
                                        {activeCategory === 'advanced' && (
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
                                        )}

                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
            <HelpModal isOpen={isHelpOpen} onClose={() => setIsHelpOpen(false)} />
        </AnimatePresence>
    );
};
