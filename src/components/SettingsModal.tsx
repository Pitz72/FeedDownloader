import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Icon } from './Icon';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpModal } from './HelpModal';
import { useStore, AppState } from '../store/useStore';
import { useToast } from '../context/ToastContext';
import type { ArchiveStats, MigrationProgress } from '../../shared/types';

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
    // v0.6.10 — Migration state
    const [migrationProgress, setMigrationProgress] = useState<{ moved: number; total: number } | null>(null);
    const isBatchDownloading = useStore((state: AppState) => state.isBatchDownloading);

    // v0.6.10 — Subscribe to migration progress events
    useEffect(() => {
        if (!isOpen) return;
        const unsub = window.api.onMigrationProgress((_e, data: MigrationProgress) => {
            setMigrationProgress({ moved: data.moved, total: data.total });
        });
        return unsub;
    }, [isOpen]);

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

    // v0.6.10 — Migrate archive to a new location (NAS, external drive, etc.)
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

    const backdropVariants = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
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
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
                    {/* Backdrop */}
                    <motion.div
                        className="absolute inset-0 backdrop-blur-sm"
                        style={{ background: 'rgba(0,0,0,0.72)' }}
                        variants={backdropVariants}
                        initial="hidden" animate="visible" exit="hidden"
                        onClick={onClose}
                    />

                    {/* Panel */}
                    <motion.div
                        className="relative z-10 rounded-2xl shadow-2xl w-full max-w-5xl flex flex-col overflow-hidden"
                        style={{
                            background: 'var(--color-surface-container-lowest)',
                            boxShadow: 'inset 0 0 0 1px rgba(65,71,85,0.2), 0 24px 64px rgba(0,0,0,0.6)',
                            maxHeight: 'calc(100vh - 4rem)', minHeight: '500px',
                        }}
                        variants={panelVariants}
                        initial="hidden" animate="visible" exit="exit"
                    >
                        {/* Header */}
                        <div
                            className="flex items-center justify-between px-6 py-4 shrink-0"
                            style={{
                                background: 'var(--color-surface-container-low)',
                                borderBottom: '1px solid rgba(65,71,85,0.2)',
                            }}
                        >
                            <div className="flex items-center gap-2">
                                <Icon name="settings" size={20} style={{ color: 'var(--color-primary)' }} />
                                <h2
                                    className="text-base font-bold"
                                    style={{ color: 'var(--color-on-surface)', fontFamily: 'var(--font-headline)' }}
                                >
                                    {t('settings.title')}
                                </h2>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-1 rounded-lg transition-all"
                                style={{ color: 'var(--color-on-surface-variant)' }}
                                onMouseEnter={e => { e.currentTarget.style.color = 'var(--color-on-surface)'; e.currentTarget.style.background = 'var(--color-surface-container-high)'; }}
                                onMouseLeave={e => { e.currentTarget.style.color = 'var(--color-on-surface-variant)'; e.currentTarget.style.background = ''; }}
                            >
                                <Icon name="close" size={20} />
                            </button>
                        </div>

                        {/* Body: two-column layout */}
                        <div className="flex flex-1 overflow-hidden">
                            {/* Left navigation */}
                            <nav
                                className="w-52 shrink-0 py-4 flex flex-col gap-1 px-2"
                                style={{
                                    background: 'var(--color-surface-container-lowest)',
                                    borderRight: '1px solid rgba(65,71,85,0.15)',
                                }}
                            >
                                {navItems.map((item) => {
                                    const active = activeCategory === item.id;
                                    return (
                                        <button
                                            key={item.id}
                                            onClick={() => setActiveCategory(item.id)}
                                            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all text-left border-l-2"
                                            style={active ? {
                                                background: 'rgba(173,198,255,0.1)',
                                                color: 'var(--color-primary)',
                                                borderLeftColor: 'var(--color-primary)',
                                                fontFamily: 'var(--font-label)',
                                            } : {
                                                color: 'var(--color-on-surface-variant)',
                                                borderLeftColor: 'transparent',
                                                fontFamily: 'var(--font-label)',
                                            }}
                                            onMouseEnter={e => { if (!active) { e.currentTarget.style.background = 'var(--color-surface-container-high)'; e.currentTarget.style.color = 'var(--color-on-surface)'; } }}
                                            onMouseLeave={e => { if (!active) { e.currentTarget.style.background = ''; e.currentTarget.style.color = 'var(--color-on-surface-variant)'; } }}
                                        >
                                            <span style={{ color: active ? 'var(--color-primary)' : 'var(--color-on-surface-variant)', opacity: active ? 1 : 0.7 }}>
                                                {item.icon}
                                            </span>
                                            {t(item.labelKey)}
                                        </button>
                                    );
                                })}
                            </nav>

                            {/* Right content (scrollable) */}
                            <div className="flex-1 overflow-y-auto custom-scrollbar">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeCategory}
                                        variants={contentVariants}
                                        initial="hidden" animate="visible" exit="hidden"
                                        className="p-8 space-y-8"
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

                                                {/* Help Section */}
                                                <div className="space-y-3 pt-4" style={{ borderTop: '1px solid rgba(65,71,85,0.15)' }}>
                                                    <button
                                                        onClick={() => setIsHelpOpen(true)}
                                                        className="w-full flex items-center justify-between p-3 rounded-lg transition-all"
                                                        style={{ ...rowCardStyle, display: 'flex' }}
                                                        onMouseEnter={e => (e.currentTarget.style.background = 'var(--color-surface-container)')}
                                                        onMouseLeave={e => (e.currentTarget.style.background = 'var(--color-surface-container-low)')}
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
                                                                className="p-2 rounded-lg transition-all"
                                                                style={{ background: 'var(--color-surface-container-high)', color: 'var(--color-on-surface)' }}
                                                                onMouseEnter={e => (e.currentTarget.style.background = 'var(--color-surface-container-highest)')}
                                                                onMouseLeave={e => (e.currentTarget.style.background = 'var(--color-surface-container-high)')}
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
                                                        className="w-full flex items-center justify-center gap-2 p-2 rounded-lg text-sm transition-all disabled:opacity-50"
                                                        style={{ ...rowCardStyle, display: 'flex', justifyContent: 'center', color: 'var(--color-on-surface-variant)' }}
                                                        onMouseEnter={e => (e.currentTarget.style.background = 'var(--color-surface-container)')}
                                                        onMouseLeave={e => (e.currentTarget.style.background = 'var(--color-surface-container-low)')}
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
                                                                </div>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Migrate Archive (v0.6.10) */}
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
                                                            className="w-full flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                                            style={{ background: 'rgba(125,1,177,0.1)', border: '1px solid rgba(233,179,255,0.2)', color: 'var(--color-secondary)', fontFamily: 'var(--font-label)' }}
                                                            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(125,1,177,0.2)')}
                                                            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(125,1,177,0.1)')}
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
                                                                className="flex items-center gap-2 p-2 rounded-lg text-sm transition-all"
                                                                style={{ background: 'var(--color-surface-container-low)', color: 'var(--color-on-surface-variant)', boxShadow: 'inset 0 0 0 1px rgba(65,71,85,0.15)' }}
                                                                onMouseEnter={e => (e.currentTarget.style.background = 'var(--color-surface-container)')}
                                                                onMouseLeave={e => (e.currentTarget.style.background = 'var(--color-surface-container-low)')}
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
                                            <div className="space-y-3">
                                                <h3 style={sectionHeading('var(--color-error)')}>{t('settings.danger_zone')}</h3>

                                                {!confirmReset ? (
                                                    <button
                                                        onClick={() => setConfirmReset(true)}
                                                        disabled={isBatchDownloading}
                                                        className="w-full flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                                        style={{ background: 'rgba(147,0,10,0.12)', border: '1px solid rgba(255,180,171,0.2)', color: 'var(--color-error)', fontFamily: 'var(--font-label)' }}
                                                        onMouseEnter={e => (e.currentTarget.style.background = 'rgba(147,0,10,0.22)')}
                                                        onMouseLeave={e => (e.currentTarget.style.background = 'rgba(147,0,10,0.12)')}
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
                                                                className="flex-1 py-2 rounded-lg text-sm transition-all"
                                                                style={{ background: 'var(--color-surface-container-high)', color: 'var(--color-on-surface-variant)' }}
                                                                onMouseEnter={e => (e.currentTarget.style.background = 'var(--color-surface-container-highest)')}
                                                                onMouseLeave={e => (e.currentTarget.style.background = 'var(--color-surface-container-high)')}
                                                            >
                                                                {t('common.cancel', 'Cancel')}
                                                            </button>
                                                            <button
                                                                onClick={handleResetDatabase}
                                                                className="flex-1 py-2 rounded-lg text-sm font-medium transition-all"
                                                                style={{ background: 'var(--color-error-container)', color: 'var(--color-error)', fontFamily: 'var(--font-label)' }}
                                                                onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
                                                                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
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
