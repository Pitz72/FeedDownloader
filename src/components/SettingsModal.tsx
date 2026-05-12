import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Icon } from './Icon';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpModal } from './HelpModal';
import { useStore, AppState } from '../store/useStore';
import { useToast } from '../context/ToastContext';
import type { ArchiveStats, MigrationProgress, UpdateStatus } from '../../shared/types';

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
    const [isMarkingMissing, setIsMarkingMissing] = useState(false);
    const [isLoadingSettings, setIsLoadingSettings] = useState(false);
    const [activeCategory, setActiveCategory] = useState<NavCategory>('general');
    const [autoRefreshInterval, setAutoRefreshInterval] = useState<number>(0);
    const [migrationProgress, setMigrationProgress] = useState<{ moved: number; total: number } | null>(null);
    const [updateStatus, setUpdateStatus] = useState<UpdateStatus>({ type: 'idle' });
    const isBatchDownloading = useStore((state: AppState) => state.isBatchDownloading);
    const setStorePath = useStore((state: AppState) => state.setDownloadPath);

    useEffect(() => {
        if (!isOpen) return;
        const unsub = window.api.onMigrationProgress((_e, data: MigrationProgress) => {
            setMigrationProgress({ moved: data.moved, total: data.total });
        });
        return unsub;
    }, [isOpen]);

    useEffect(() => {
        const unsub = window.api.onUpdateStatus((_e, status: UpdateStatus) => {
            setUpdateStatus(status);
        });
        return unsub;
    }, []);

    useEffect(() => {
        if (isOpen) {
            loadSettings();
        }
    }, [isOpen]);

    const loadSettings = async () => {
        setIsLoadingSettings(true);
        try {
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
            const ar = await window.api.getAutoRefreshInterval();
            setAutoRefreshInterval(ar);
        } finally {
            setIsLoadingSettings(false);
        }
    };

    const handleChangeFolder = async () => {
        const path = await window.api.chooseFolder();
        if (!path) return;
        const validation = await window.api.validatePath(path);
        if (!validation.ok) {
            if (validation.error === 'TIMEOUT') {
                toast.show(t('settings.path_timeout'), 'error');
            } else {
                toast.show(t('settings.path_not_writable'), 'error');
            }
            return;
        }
        await window.api.setDownloadPath(path);
        setDownloadPath(path);
        setStorePath(path);
        if (validation.isNetworkPath) {
            toast.show(t('settings.path_network_detected'), 'info');
        }
    };

    const handleMigrateArchive = async () => {
        const currentPath = await window.api.getDownloadPath();
        if (!currentPath) {
            toast.show(t('settings.migrate_no_path'), 'error');
            return;
        }
        const newPath = await window.api.chooseFolder();
        if (!newPath) return;
        if (newPath === currentPath) {
            toast.show(t('settings.migrate_same_path'), 'info');
            return;
        }
        setMigrationProgress({ moved: 0, total: 0 });
        try {
            const result = await window.api.migrateArchive(newPath);
            setDownloadPath(newPath);
            setStorePath(newPath);
            const msg = result.errors > 0
                ? t('settings.migrate_done_errors', { moved: result.moved, errors: result.errors })
                : t('settings.migrate_done', { moved: result.moved });
            toast.show(msg, result.errors > 0 ? 'error' : 'success');
        } catch {
            toast.show(t('toast.feed_error'), 'error');
        } finally {
            setMigrationProgress(null);
        }
    };

    const handleResetDatabase = async () => {
        await window.api.resetDownloadHistory();
        setConfirmReset(false);
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
        { id: 'general',  labelKey: 'settings.nav_general',  icon: <Icon name="language"    size={16} /> },
        { id: 'download', labelKey: 'settings.nav_download', icon: <Icon name="download"    size={16} /> },
        { id: 'metadata', labelKey: 'settings.nav_metadata', icon: <Icon name="label"       size={16} /> },
        { id: 'archive',  labelKey: 'settings.nav_archive',  icon: <Icon name="inventory_2" size={16} /> },
        { id: 'advanced', labelKey: 'settings.nav_advanced', icon: <Icon name="warning"     size={16} /> },
    ];

    const panelVariants = {
        hidden:  { x: 60, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { type: 'spring' as const, stiffness: 300, damping: 30 } },
        exit:    { x: 60, opacity: 0, transition: { duration: 0.15 } },
    };
    const contentVariants = {
        hidden:  { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.15 } },
    };

    // ── Shared style helpers ──────────────────────────────────────────
    const sectionHeading = (color: string) => ({
        fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.08em',
        textTransform: 'uppercase' as const,
        color, fontFamily: 'var(--font-label)',
        display: 'flex', alignItems: 'center', gap: '0.375rem',
    });
    const inputStyle: React.CSSProperties = {
        background: 'var(--color-surface-container)',
        border: '1px solid rgba(65,71,85,0.3)',
        color: 'var(--color-on-surface)',
        borderRadius: '0.5rem', padding: '0.375rem 0.75rem',
        fontSize: '0.875rem', outline: 'none',
    };
    const rowCardStyle: React.CSSProperties = {
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0.75rem',
        background: 'var(--color-surface-container-low)',
        boxShadow: 'inset 0 0 0 1px rgba(65,71,85,0.18)',
        borderRadius: '0.5rem',
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="settings-bg" onClick={onClose}>
                    <motion.div
                        className="settings-modal"
                        onClick={(e) => e.stopPropagation()}
                        variants={panelVariants}
                        initial="hidden" animate="visible" exit="exit"
                    >
                        <button
                            type="button"
                            className="settings-close"
                            onClick={onClose}
                            aria-label={t('common.close', 'Chiudi')}
                            title={t('common.close', 'Chiudi')}
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                <line x1="18" y1="6" x2="6" y2="18"/>
                                <line x1="6" y1="6" x2="18" y2="18"/>
                            </svg>
                        </button>

                        <nav className="settings-nav">
                            <div className="settings-nav-header">
                                <h2>{t('settings.title', 'Impostazioni')}</h2>
                                <p>Runtime · v{__APP_VERSION__}</p>
                            </div>
                            <div className="settings-nav-list">
                                {navItems.map((item) => {
                                    const active = activeCategory === item.id;
                                    return (
                                        <button
                                            key={item.id}
                                            type="button"
                                            onClick={() => setActiveCategory(item.id)}
                                            className={`settings-nav-item ${active ? 'active' : ''}`}
                                        >
                                            {item.icon}
                                            {t(item.labelKey)}
                                        </button>
                                    );
                                })}
                            </div>
                        </nav>

                        <div className="settings-content custom-scrollbar">
                                {/* Skeleton overlay while settings are loading (D6) */}
                                {isLoadingSettings && (
                                    <div className="p-8 space-y-6 animate-pulse">
                                        {[140, 100, 160, 80, 120].map((w, i) => (
                                            <div key={i} className="space-y-3">
                                                <div className="h-3 rounded-full" style={{ width: `${w}px`, background: 'var(--color-surface-container-high)' }} />
                                                <div className="h-10 rounded-lg" style={{ background: 'var(--color-surface-container)' }} />
                                            </div>
                                        ))}
                                    </div>
                                )}
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeCategory}
                                        variants={contentVariants}
                                        initial="hidden" animate="visible" exit="hidden"
                                        className="p-8 space-y-8"
                                        style={{ display: isLoadingSettings ? 'none' : undefined }}
                                    >

                                        {/* ── GENERAL ── */}
                                        {activeCategory === 'general' && (
                                            <>
                                                <div className="space-y-3">
                                                    <h3 style={sectionHeading('var(--color-primary)')}>{t('settings.general')}</h3>
                                                    <div className="space-y-2">
                                                        <label className="block text-sm" style={{ color: 'var(--color-on-surface-variant)' }}>{t('settings.language')}</label>
                                                        <select
                                                            value={i18n.language}
                                                            onChange={(e) => changeLanguage(e.target.value)}
                                                            className="w-full max-w-xs"
                                                            style={{ ...inputStyle, maxWidth: '16rem' }}
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

                                                {/* Auto-refresh */}
                                                <div className="space-y-2 pt-4" style={{ borderTop: '1px solid rgba(65,71,85,0.15)' }}>
                                                    <h3 style={sectionHeading('var(--color-primary)')}>
                                                        <Icon name="schedule" size={14} />
                                                        {t('settings.auto_refresh')}
                                                    </h3>
                                                    <p className="text-xs" style={{ color: 'var(--color-on-surface-variant)', opacity: 0.65 }}>
                                                        {t('settings.auto_refresh_hint')}
                                                    </p>
                                                    <div className="flex gap-2">
                                                        {[
                                                            { value: 0,  label: t('settings.auto_refresh_off') },
                                                            { value: 6,  label: t('settings.auto_refresh_6h') },
                                                            { value: 12, label: t('settings.auto_refresh_12h') },
                                                            { value: 24, label: t('settings.auto_refresh_24h') },
                                                        ].map(opt => (
                                                            <button
                                                                key={opt.value}
                                                                onClick={async () => {
                                                                    setAutoRefreshInterval(opt.value);
                                                                    await window.api.setAutoRefreshInterval(opt.value);
                                                                }}
                                                                className="flex-1 py-2 rounded-lg text-sm font-medium transition-all"
                                                                style={autoRefreshInterval === opt.value ? {
                                                                    background: 'var(--color-primary-container)',
                                                                    color: 'var(--color-on-primary-fixed)',
                                                                    fontFamily: 'var(--font-label)',
                                                                } : {
                                                                    background: 'var(--color-surface-container)',
                                                                    color: 'var(--color-on-surface-variant)',
                                                                    fontFamily: 'var(--font-label)',
                                                                }}
                                                            >
                                                                {opt.label}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Help Section */}
                                                <div className="space-y-3 pt-4" style={{ borderTop: '1px solid rgba(65,71,85,0.15)' }}>
                                                    <button
                                                        onClick={() => setIsHelpOpen(true)}
                                                        className="hover-bg-container w-full flex items-center justify-between p-3 rounded-lg transition-all"
                                                        style={{ ...rowCardStyle, display: 'flex' }}
                                                    >
                                                        <span className="flex items-center gap-2" style={{ color: 'var(--color-on-surface-variant)' }}>
                                                            <Icon name="menu_book" size={18} style={{ color: 'var(--color-primary)' }} />
                                                            {t('help.title')}
                                                        </span>
                                                        <span className="text-xs px-2 py-1 rounded" style={{ background: 'var(--color-surface-container-high)', color: 'var(--color-on-surface-variant)' }}>
                                                            README
                                                        </span>
                                                    </button>
                                                </div>
                                            </>
                                        )}

                                        {/* ── DOWNLOAD ── */}
                                        {activeCategory === 'download' && (
                                            <>
                                                <div className="space-y-3">
                                                    <h3 style={sectionHeading('var(--color-primary)')}>
                                                        <Icon name="settings" size={14} />
                                                        {t('settings.storage')}
                                                    </h3>
                                                    <div className="space-y-2">
                                                        <label className="block text-sm" style={{ color: 'var(--color-on-surface-variant)' }}>{t('settings.download_path')}</label>
                                                        <div className="flex gap-2">
                                                            <input
                                                                type="text"
                                                                readOnly
                                                                value={downloadPath}
                                                                className="flex-1 text-sm font-mono truncate"
                                                                style={{ ...inputStyle, color: 'var(--color-on-surface-variant)' }}
                                                            />
                                                            <button
                                                                onClick={handleChangeFolder}
                                                                className="hover-bg-highest p-2 rounded-lg transition-all"
                                                                style={{ background: 'var(--color-surface-container-high)', color: 'var(--color-on-surface)' }}
                                                                title={t('episodes.change_folder')}
                                                            >
                                                                <Icon name="folder_open" size={20} />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Concurrency */}
                                                <div className="space-y-2">
                                                    <label className="block text-sm" style={{ color: 'var(--color-on-surface-variant)' }}>{t('settings.concurrency', 'Parallel Downloads')}</label>
                                                    <div className="flex gap-2 max-w-xs">
                                                        {[1, 3, 5].map(n => (
                                                            <button
                                                                key={n}
                                                                onClick={() => handleConcurrencyChange(n)}
                                                                className="flex-1 py-2 rounded-lg text-sm font-medium transition-all"
                                                                style={concurrency === n ? {
                                                                    background: 'var(--color-primary-container)',
                                                                    color: 'var(--color-on-primary-fixed)',
                                                                    fontFamily: 'var(--font-label)',
                                                                } : {
                                                                    background: 'var(--color-surface-container)',
                                                                    color: 'var(--color-on-surface-variant)',
                                                                    fontFamily: 'var(--font-label)',
                                                                }}
                                                            >
                                                                {n}
                                                            </button>
                                                        ))}
                                                    </div>
                                                    <p className="text-xs" style={{ color: 'var(--color-on-surface-variant)', opacity: 0.65 }}>{t('settings.concurrency_hint', 'Number of simultaneous downloads')}</p>
                                                </div>

                                                {/* Speed Limit */}
                                                <div className="space-y-2">
                                                    <label className="block text-sm" style={{ color: 'var(--color-on-surface-variant)' }}>
                                                        {t('settings.speed_limit')}
                                                    </label>
                                                    <p className="text-xs" style={{ color: 'var(--color-on-surface-variant)', opacity: 0.65 }}>{t('settings.speed_limit_desc')}</p>
                                                    <div className="flex items-center gap-3">
                                                        <input
                                                            type="number"
                                                            min={0}
                                                            max={102400}
                                                            value={speedLimit}
                                                            onChange={(e) => handleSpeedLimitChange(parseInt(e.target.value) || 0)}
                                                            className="w-32"
                                                            style={inputStyle}
                                                        />
                                                        <span className="text-sm" style={{ color: 'var(--color-on-surface-variant)' }}>
                                                            {speedLimit === 0 ? t('settings.speed_unlimited') : 'KB/s'}
                                                        </span>
                                                    </div>
                                                </div>
                                            </>
                                        )}

                                        {/* ── METADATA ── */}
                                        {activeCategory === 'metadata' && (
                                            <>
                                                <div className="space-y-2">
                                                    <h3 style={sectionHeading('var(--color-primary)')} className="mb-3">{t('settings.nav_metadata')}</h3>
                                                    <label className="block text-sm" style={{ color: 'var(--color-on-surface-variant)' }}>{t('settings.naming_template')}</label>
                                                    <input
                                                        type="text"
                                                        value={namingTemplate}
                                                        onChange={(e) => setNamingTemplate(e.target.value)}
                                                        onBlur={async () => { await window.api.setNamingTemplate(namingTemplate); }}
                                                        className="w-full font-mono"
                                                        style={inputStyle}
                                                        placeholder="{title}"
                                                    />
                                                    <p className="text-xs" style={{ color: 'var(--color-on-surface-variant)', opacity: 0.65 }}>{t('settings.naming_template_tokens')}</p>
                                                    <p className="text-xs font-mono truncate" style={{ color: 'var(--color-on-surface-variant)', opacity: 0.45 }}>
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
                                                <div style={rowCardStyle}>
                                                    <div>
                                                        <p className="text-sm" style={{ color: 'var(--color-on-surface)' }}>{t('settings.sidecar_enabled')}</p>
                                                        <p className="text-xs mt-0.5" style={{ color: 'var(--color-on-surface-variant)', opacity: 0.65 }}>{t('settings.sidecar_hint')}</p>
                                                    </div>
                                                    <button
                                                        onClick={async () => { const next = !sidecarEnabled; setSidecarEnabled(next); await window.api.setSidecarEnabled(next); }}
                                                        className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors"
                                                        style={{ background: sidecarEnabled ? 'var(--color-primary-container)' : 'var(--color-surface-container-highest)' }}
                                                    >
                                                        <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${sidecarEnabled ? 'translate-x-6' : 'translate-x-1'}`} />
                                                    </button>
                                                </div>

                                                {/* ID3 Tagging */}
                                                <div style={rowCardStyle}>
                                                    <div>
                                                        <p className="text-sm" style={{ color: 'var(--color-on-surface)' }}>{id3Enabled ? t('settings.id3_enabled') : t('settings.id3_disabled')}</p>
                                                        <p className="text-xs mt-0.5" style={{ color: 'var(--color-on-surface-variant)', opacity: 0.65 }}>{t('settings.id3_tagging_desc')}</p>
                                                    </div>
                                                    <button
                                                        onClick={async () => { const next = !id3Enabled; setId3Enabled(next); await window.api.setId3Enabled(next); }}
                                                        className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors"
                                                        style={{ background: id3Enabled ? 'var(--color-primary-container)' : 'var(--color-surface-container-highest)' }}
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
                                                        <h3 style={sectionHeading('var(--color-primary)')}>
                                                            <Icon name="bar_chart" size={14} />
                                                            {t('settings.stats', 'Archive Statistics')}
                                                        </h3>
                                                        <div className="grid grid-cols-2 gap-3">
                                                            {[
                                                                { value: archiveStats.totalFiles,    label: t('settings.stats_files', 'Files Downloaded') },
                                                                { value: archiveStats.totalPodcasts, label: t('settings.stats_podcasts', 'Podcasts') },
                                                            ].map((s, i) => (
                                                                <div key={i} className="bento-card rounded-lg p-4">
                                                                    <p className="text-2xl font-bold" style={{ color: 'var(--color-on-surface)', fontFamily: 'var(--font-headline)' }}>{s.value}</p>
                                                                    <p className="text-xs mt-1" style={{ color: 'var(--color-on-surface-variant)' }}>{s.label}</p>
                                                                </div>
                                                            ))}
                                                        </div>
                                                        {archiveStats.oldestDate && (
                                                            <p className="text-xs" style={{ color: 'var(--color-on-surface-variant)', opacity: 0.55 }}>
                                                                {t('settings.stats_range', 'Archive range')}: {new Date(archiveStats.oldestDate).toLocaleDateString()} — {archiveStats.newestDate ? new Date(archiveStats.newestDate).toLocaleDateString() : '—'}
                                                            </p>
                                                        )}
                                                    </div>
                                                )}

                                                {/* Health Check */}
                                                <div className="space-y-3">
                                                    <h3 style={sectionHeading('var(--color-warning)')}>
                                                        <Icon name="verified_user" size={14} />
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
                                                        className="hover-bg-container w-full flex items-center justify-center gap-2 p-2 rounded-lg text-sm transition-all disabled:opacity-50"
                                                        style={{ ...rowCardStyle, display: 'flex', justifyContent: 'center', color: 'var(--color-on-surface-variant)' }}
                                                    >
                                                        <Icon name="refresh" size={16} className={isHealthChecking ? 'animate-spin' : ''} style={{ color: 'var(--color-warning)' }} />
                                                        {isHealthChecking ? t('settings.health_check_running') : t('settings.health_check_run')}
                                                    </button>
                                                    {healthResult && (
                                                        <div className="space-y-2 p-3 rounded-lg" style={{ background: 'var(--color-surface-container-low)', boxShadow: 'inset 0 0 0 1px rgba(65,71,85,0.18)' }}>
                                                            <div className="grid grid-cols-3 gap-2 text-center text-sm">
                                                                <div className="rounded p-2" style={{ background: 'var(--color-surface-container)' }}>
                                                                    <p className="text-xl font-bold" style={{ color: 'var(--color-on-surface)' }}>{healthResult.total}</p>
                                                                    <p className="text-xs" style={{ color: 'var(--color-on-surface-variant)' }}>{t('settings.health_total')}</p>
                                                                </div>
                                                                <div className="rounded p-2" style={{ background: 'var(--color-surface-container)' }}>
                                                                    <p className="text-xl font-bold" style={{ color: 'var(--color-primary)' }}>{healthResult.present}</p>
                                                                    <p className="text-xs" style={{ color: 'var(--color-on-surface-variant)' }}>{t('settings.health_present')}</p>
                                                                </div>
                                                                <div className="rounded p-2" style={{ background: healthResult.missing > 0 ? 'rgba(147,0,10,0.15)' : 'var(--color-surface-container)' }}>
                                                                    <p className="text-xl font-bold" style={{ color: healthResult.missing > 0 ? 'var(--color-error)' : 'var(--color-on-surface-variant)' }}>{healthResult.missing}</p>
                                                                    <p className="text-xs" style={{ color: 'var(--color-on-surface-variant)' }}>{t('settings.health_missing')}</p>
                                                                </div>
                                                            </div>
                                                            <p className="text-xs text-center" style={{ color: 'var(--color-on-surface-variant)', opacity: 0.55 }}>
                                                                {t('settings.health_size')}: {healthResult.totalSizeBytes >= 1_073_741_824
                                                                    ? (healthResult.totalSizeBytes / 1_073_741_824).toFixed(2) + ' GB'
                                                                    : (healthResult.totalSizeBytes / 1_048_576).toFixed(1) + ' MB'}
                                                            </p>
                                                            {healthResult.missing > 0 && (
                                                                <div className="mt-2 space-y-1">
                                                                    <p className="text-xs font-medium" style={{ color: 'var(--color-error)' }}>{t('settings.health_missing_files')}:</p>
                                                                    {healthResult.missingFiles.slice(0, 5).map((f, i) => (
                                                                        <p key={i} className="text-xs font-mono truncate" style={{ color: 'var(--color-on-surface-variant)', opacity: 0.6 }}>{f.podcast} / {f.filename}</p>
                                                                    ))}
                                                                    {healthResult.missingFiles.length > 5 && (
                                                                        <p className="text-xs" style={{ color: 'var(--color-on-surface-variant)', opacity: 0.4 }}>... {t('settings.health_and_more', { count: healthResult.missingFiles.length - 5 })}</p>
                                                                    )}
                                                                    <button
                                                                        onClick={async () => {
                                                                            setIsMarkingMissing(true);
                                                                            try {
                                                                                const guids = healthResult.missingFiles.map(f => f.guid);
                                                                                await window.api.markMissingNotDownloaded(guids);
                                                                                setHealthResult(prev => prev ? { ...prev, missing: 0, missingFiles: [], total: prev.present } : null);
                                                                                toast.show(t('settings.health_mark_success'), 'success');
                                                                            } finally {
                                                                                setIsMarkingMissing(false);
                                                                            }
                                                                        }}
                                                                        disabled={isMarkingMissing}
                                                                        className="mt-2 w-full flex items-center justify-center gap-2 p-2 rounded-lg text-xs transition-all disabled:opacity-50"
                                                                        style={{ background: 'rgba(147,0,10,0.12)', color: 'var(--color-error)', border: '1px solid rgba(147,0,10,0.25)' }}
                                                                    >
                                                                        <Icon name={isMarkingMissing ? 'refresh' : 'sync_problem'} size={14} className={isMarkingMissing ? 'animate-spin' : ''} />
                                                                        {t('settings.health_mark_not_downloaded')}
                                                                    </button>
                                                                </div>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Migrate Archive */}
                                                <div className="space-y-3">
                                                    <h3 style={sectionHeading('var(--color-secondary)')}>
                                                        <Icon name="hard_drive" size={14} />
                                                        {t('settings.migrate_archive')}
                                                    </h3>
                                                    <p className="text-xs" style={{ color: 'var(--color-on-surface-variant)', opacity: 0.65 }}>{t('settings.migrate_archive_desc')}</p>
                                                    {migrationProgress ? (
                                                        <div className="p-3 rounded-lg space-y-2" style={{ background: 'rgba(125,1,177,0.12)', border: '1px solid rgba(233,179,255,0.2)' }}>
                                                            <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--color-secondary)' }}>
                                                                <Icon name="refresh" size={14} className="animate-spin" />
                                                                {t('settings.migrate_running', { moved: migrationProgress.moved, total: migrationProgress.total })}
                                                            </div>
                                                            {migrationProgress.total > 0 && (
                                                                <div className="w-full rounded-full h-1.5" style={{ background: 'var(--color-surface-container-highest)' }}>
                                                                    <div
                                                                        className="h-1.5 rounded-full transition-all"
                                                                        style={{ width: `${Math.round((migrationProgress.moved / migrationProgress.total) * 100)}%`, background: 'var(--color-secondary)' }}
                                                                    />
                                                                </div>
                                                            )}
                                                        </div>
                                                    ) : (
                                                        <button
                                                            onClick={handleMigrateArchive}
                                                            disabled={isBatchDownloading}
                                                            className="hover-secondary-tinted w-full flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                                            style={{ background: 'rgba(125,1,177,0.1)', border: '1px solid rgba(233,179,255,0.2)', color: 'var(--color-secondary)', fontFamily: 'var(--font-label)' }}
                                                        >
                                                            <Icon name="hard_drive" size={16} />
                                                            {t('settings.migrate_archive')}
                                                        </button>
                                                    )}
                                                </div>

                                                {/* Data & Portability */}
                                                <div className="space-y-3">
                                                    <h3 style={sectionHeading('var(--color-primary)')}>{t('settings.data')}</h3>
                                                    <div className="grid grid-cols-1 gap-2">
                                                        {[
                                                            { onClick: async () => { const res = await window.api.importOPML(); if (res && res.count > 0) { toast.show(t('settings.import_success', { count: res.count }), 'success'); } else { toast.show(t('settings.import_error'), 'error'); } }, icon: 'upload', iconColor: 'var(--color-primary)', label: t('settings.import_opml') },
                                                            { onClick: async () => { const ok = await window.api.exportOPML(); if (ok) toast.show(t('settings.export_success'), 'success'); }, icon: 'download', iconColor: 'var(--color-primary)', label: t('settings.export_opml') },
                                                            { onClick: async () => { const ok = await window.api.exportArchiveCSV(); if (ok) toast.show(t('settings.export_success'), 'success'); }, icon: 'table_chart', iconColor: 'var(--color-secondary)', label: t('settings.export_csv') },
                                                        ].map((btn, i) => (
                                                            <button
                                                                key={i}
                                                                onClick={btn.onClick}
                                                                className="hover-bg-container flex items-center gap-2 p-2 rounded-lg text-sm transition-all"
                                                                style={{ background: 'var(--color-surface-container-low)', color: 'var(--color-on-surface-variant)', boxShadow: 'inset 0 0 0 1px rgba(65,71,85,0.15)' }}
                                                            >
                                                                <Icon name={btn.icon} size={16} style={{ color: btn.iconColor }} />
                                                                {btn.label}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>
                                            </>
                                        )}

                                        {/* ── ADVANCED ── */}
                                        {activeCategory === 'advanced' && (
                                            <div className="space-y-8">

                                                {/* Updates */}
                                                <div className="space-y-3">
                                                    <h3 style={sectionHeading('var(--color-primary)')}>
                                                        <Icon name="system_update" size={14} />
                                                        {t('settings.update_title')}
                                                    </h3>
                                                    <p className="text-xs font-mono" style={{ color: 'var(--color-on-surface-variant)', opacity: 0.55 }}>
                                                        {t('settings.update_current_version')}: {__APP_VERSION__}
                                                    </p>

                                                    {/* Status indicator */}
                                                    {updateStatus.type !== 'idle' && (
                                                        <div className="p-3 rounded-lg text-sm flex items-center gap-2" style={{
                                                            background: updateStatus.type === 'error' ? 'rgba(147,0,10,0.1)' : 'var(--color-surface-container-low)',
                                                            boxShadow: 'inset 0 0 0 1px rgba(65,71,85,0.18)',
                                                            color: updateStatus.type === 'error' ? 'var(--color-error)'
                                                                : updateStatus.type === 'available' || updateStatus.type === 'ready' ? 'var(--color-primary)'
                                                                : 'var(--color-on-surface-variant)',
                                                        }}>
                                                            {(updateStatus.type === 'checking' || updateStatus.type === 'downloading') && (
                                                                <Icon name="refresh" size={14} className="animate-spin" />
                                                            )}
                                                            {updateStatus.type === 'not-available' && <Icon name="check_circle" size={14} style={{ color: 'var(--color-primary)' }} />}
                                                            {updateStatus.type === 'available' && <Icon name="new_releases" size={14} />}
                                                            {updateStatus.type === 'ready' && <Icon name="download_done" size={14} />}
                                                            {updateStatus.type === 'error' && <Icon name="error" size={14} />}
                                                            <span>
                                                                {updateStatus.type === 'checking' && t('settings.update_checking')}
                                                                {updateStatus.type === 'not-available' && t('settings.update_not_available')}
                                                                {updateStatus.type === 'available' && t('settings.update_available', { version: updateStatus.version })}
                                                                {updateStatus.type === 'downloading' && t('settings.update_downloading', { percent: updateStatus.percent })}
                                                                {updateStatus.type === 'ready' && t('settings.update_ready')}
                                                                {updateStatus.type === 'error' && t('settings.update_error')}
                                                            </span>
                                                        </div>
                                                    )}

                                                    {/* Action buttons */}
                                                    {updateStatus.type === 'ready' ? (
                                                        <button
                                                            onClick={() => window.api.installUpdate()}
                                                            className="hover-primary-tinted-strong w-full flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm transition-all"
                                                            style={{ background: 'rgba(173,198,255,0.12)', border: '1px solid rgba(173,198,255,0.25)', color: 'var(--color-primary)', fontFamily: 'var(--font-label)' }}
                                                        >
                                                            <Icon name="restart_alt" size={16} />
                                                            {t('settings.update_install')}
                                                        </button>
                                                    ) : (
                                                        <button
                                                            onClick={() => { setUpdateStatus({ type: 'checking' }); window.api.checkForUpdate(); }}
                                                            disabled={updateStatus.type === 'checking' || updateStatus.type === 'downloading'}
                                                            className="hover-bg-container w-full flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                                            style={{ ...rowCardStyle, display: 'flex', justifyContent: 'center', color: 'var(--color-on-surface-variant)' }}
                                                        >
                                                            <Icon name="refresh" size={16} style={{ color: 'var(--color-primary)' }} />
                                                            {t('settings.update_check')}
                                                        </button>
                                                    )}
                                                </div>

                                                {/* Danger Zone */}
                                                <div className="space-y-3" style={{ borderTop: '1px solid rgba(65,71,85,0.15)', paddingTop: '1.5rem' }}>
                                                <h3 style={sectionHeading('var(--color-error)')}>{t('settings.danger_zone')}</h3>

                                                {!confirmReset ? (
                                                    <button
                                                        onClick={() => setConfirmReset(true)}
                                                        disabled={isBatchDownloading}
                                                        className="hover-error-tinted-strong w-full flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                                        style={{ background: 'rgba(147,0,10,0.12)', border: '1px solid rgba(255,180,171,0.2)', color: 'var(--color-error)', fontFamily: 'var(--font-label)' }}
                                                        title={isBatchDownloading ? t('settings.reset_tooltip_downloading') : ''}
                                                    >
                                                        <Icon name="warning" size={18} />
                                                        {t('settings.reset_db')}
                                                    </button>
                                                ) : (
                                                    <div className="rounded-lg p-3 animate-pulse" style={{ background: 'rgba(147,0,10,0.12)', border: '1px solid rgba(255,180,171,0.25)' }}>
                                                        <p className="text-sm mb-3 text-center font-medium" style={{ color: 'var(--color-error)' }}>
                                                            {t('settings.confirm_reset')}
                                                        </p>
                                                        <div className="flex gap-2">
                                                            <button
                                                                onClick={() => setConfirmReset(false)}
                                                                className="hover-bg-highest flex-1 py-2 rounded-lg text-sm transition-all"
                                                                style={{ background: 'var(--color-surface-container-high)', color: 'var(--color-on-surface-variant)' }}
                                                            >
                                                                {t('common.cancel', 'Cancel')}
                                                            </button>
                                                            <button
                                                                onClick={handleResetDatabase}
                                                                className="hover-opacity-dim flex-1 py-2 rounded-lg text-sm font-medium transition-all"
                                                                style={{ background: 'var(--color-error-container)', color: 'var(--color-error)', fontFamily: 'var(--font-label)' }}
                                                            >
                                                                {t('common.confirm', 'Confirm')}
                                                            </button>
                                                        </div>
                                                    </div>
                                                )}
                                                </div>
                                            </div>
                                        )}

                                    </motion.div>
                                </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            )}
            <HelpModal isOpen={isHelpOpen} onClose={() => setIsHelpOpen(false)} />
        </AnimatePresence>
    );
};
