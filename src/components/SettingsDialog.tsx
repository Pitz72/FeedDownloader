import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
    Accessibility, Archive, BookOpen, Download, Eraser, FileDown, FileSpreadsheet, FileText, FileUp, FolderInput, FolderOpen,
    Code, Gauge, Globe, HardDrive, Heart, Info, Mail, RefreshCw, RotateCw, Settings, ShieldCheck, Sparkles, Tags, Timer, Trash2,
} from 'lucide-react';
import type { ArchiveStats } from '../../shared/types';
import { applyTemplate } from '../../electron/utils/applyTemplate';
import { Dialog } from './ui/Dialog';
import { Button } from './ui/Button';
import { ProgressBar, Section, SelectField, Switch, TabPanel, Tabs, TextField } from './ui/Controls';
import { ConfirmDialog } from './ui/ConfirmDialog';
import { useToast } from './ui/Toast';
import { useStore } from '../store/useStore';
import { useUiPreferences, ZOOM_OPTIONS } from '../hooks/useUiPreferences';
import { CONTACT_URL, DONATE_URL, SOURCE_URL, openLink } from '../lib/links';
import { formatDate } from '../lib/dates';
import { RuntimeUtilitiesLogo } from './brand/RuntimeUtilitiesLogo';
import { LanguageChoice } from './LanguageChoice';
import { useOnOpen } from '../hooks/useOnOpen';

type Tab = 'general' | 'downloads' | 'files' | 'archive' | 'accessibility' | 'about';

interface Props {
    open: boolean;
    onClose: () => void;
    onOpenHealthCheck: () => void;
    onOpenGuide: () => void;
    onOpenChangelog: () => void;
    onImportOpml: () => void;
}

const TOKENS = ['{title}', '{podcast}', '{date}', '{year}', '{month}', '{day}', '{season}', '{episode}'];

export function SettingsDialog({ open, onClose, onOpenHealthCheck, onOpenGuide, onOpenChangelog, onImportOpml }: Props) {
    const { t, i18n } = useTranslation();
    const toast = useToast();
    const { zoom, setZoom, reduceMotion, setReduceMotion } = useUiPreferences();
    const updateStatus = useStore(s => s.updateStatus);
    const setUpdateStatus = useStore(s => s.setUpdateStatus);
    const queueCount = useStore(s => s.queueItems.length);
    const setStorePath = useStore(s => s.setDownloadPath);

    const [tab, setTab] = useState<Tab>('general');
    const [path, setPath] = useState('');
    const [concurrency, setConcurrency] = useState(3);
    const [speed, setSpeed] = useState('0');
    const [sizeCap, setSizeCap] = useState('0');
    const [refreshHours, setRefreshHours] = useState(6);
    const [template, setTemplate] = useState('{title}');
    const [sidecar, setSidecar] = useState(false);
    const [id3, setId3] = useState(false);
    const [stats, setStats] = useState<ArchiveStats | null>(null);
    const [migration, setMigration] = useState<{ moved: number; total: number } | null>(null);
    const [folderChoice, setFolderChoice] = useState<string | null>(null);
    const [confirmReset, setConfirmReset] = useState(false);
    const [busy, setBusy] = useState<string | null>(null);

    const load = useCallback(async () => {
        try {
            const [p, c, s, f, r, tpl, sc, i3, st] = await Promise.all([
                window.api.getEffectiveDownloadPath(), window.api.getConcurrency(), window.api.getSpeedLimit(),
                window.api.getFileSizeLimit(), window.api.getAutoRefreshInterval(), window.api.getNamingTemplate(),
                window.api.getSidecarEnabled(), window.api.getId3Enabled(), window.api.getArchiveStats(),
            ]);
            setPath(p); setConcurrency(c); setSpeed(String(s)); setSizeCap(String(f)); setRefreshHours(r);
            setTemplate(tpl || '{title}'); setSidecar(sc); setId3(i3); setStats(st);
        } catch {
            toast.error(t('common.error'));
        }
    }, [t, toast]);

    useOnOpen(open, () => { setTab('general'); void load(); });

    // Migration progress is tracked for the whole life of the dialog component,
    // so closing Settings mid-migration can't make a second one look startable.
    useEffect(() => window.api.onMigrationProgress(d => setMigration(d.total > 0 && d.moved >= d.total ? null : { moved: d.moved, total: d.total })), []);

    const saveTemplate = async (value: string) => {
        const clean = value.trim() || '{title}';
        setTemplate(clean);
        await window.api.setNamingTemplate(clean);
    };

    const chooseFolder = async () => {
        const chosen = await window.api.chooseFolder();
        if (!chosen) return;
        const v = await window.api.validatePath(chosen).catch(() => null);
        if (v && !v.ok) { toast.error(v.error === 'TIMEOUT' ? t('settings.path_timeout') : t('settings.path_not_writable')); return; }
        if (stats && stats.totalFiles > 0) { setFolderChoice(chosen); return; }
        await applyFolderForNew(chosen, v?.isNetworkPath);
    };

    const applyFolderForNew = async (chosen: string, network?: boolean) => {
        setFolderChoice(null);
        if (!(await window.api.setDownloadPath(chosen))) { toast.error(t('settings.path_not_writable')); return; }
        setPath(chosen); setStorePath(chosen);
        toast.success(t('settings.folder_set'));
        if (network) toast.info(t('settings.path_network'));
    };

    const migrateTo = async (target: string) => {
        setFolderChoice(null);
        setMigration({ moved: 0, total: 0 });
        try {
            const res = await window.api.migrateArchive(target);
            if (res.refused === 'busy') { toast.error(t('settings.migrate_busy')); return; }
            if (res.refused === 'nested-path') { toast.error(t('settings.migrate_nested')); return; }
            if (res.pathChanged) { setPath(target); setStorePath(target); }
            toast.show(res.errors > 0 ? t('settings.migrate_partial', { moved: res.moved, errors: res.errors }) : t('settings.migrate_done', { moved: res.moved }), res.errors > 0 ? 'warning' : 'success');
        } catch {
            toast.error(t('common.error'));
        } finally {
            setMigration(null);
        }
    };

    const preview = applyTemplate(template || '{title}', {
        title: t('settings.preview_title'), podcast: t('settings.preview_podcast'), pubDate: '2024-03-15T12:00:00Z', season: '2', episode: '7',
    });

    const tabs = [
        { id: 'general' as const, label: t('settings.tab_general'), icon: Settings },
        { id: 'downloads' as const, label: t('settings.tab_downloads'), icon: Download },
        { id: 'files' as const, label: t('settings.tab_files'), icon: Tags },
        { id: 'archive' as const, label: t('settings.tab_archive'), icon: Archive },
        { id: 'accessibility' as const, label: t('settings.tab_accessibility'), icon: Accessibility },
        { id: 'about' as const, label: t('settings.tab_about'), icon: Info },
    ];

    return (
        <>
            <Dialog
                open={open}
                onClose={onClose}
                icon={Settings}
                title={t('settings.title')}
                description={t('settings.subtitle')}
                size="xl"
                // altezza fissa: la finestra non cambia misura passando da una scheda all'altra
                panelClassName="h-[min(760px,calc(100vh-2rem))]"
                sidebar={<Tabs idBase="settings" orientation="vertical" autoFocus label={t('settings.title')} value={tab} onChange={setTab} items={tabs} />}
                footer={<Button variant="primary" onClick={onClose}>{t('common.done')}</Button>}
            >
                <TabPanel idBase="settings" id={tab} className="max-w-3xl space-y-4">
                    {tab === 'general' && (
                        <>
                            <Section icon={Globe} title={t('settings.language')} text={t('settings.language_desc')}>
                                <LanguageChoice name="settings-language" />
                            </Section>
                            <Section icon={Timer} title={t('settings.refresh_title')} text={t('settings.refresh_desc')}>
                                <SelectField
                                    label={t('settings.refresh_label')}
                                    value={refreshHours}
                                    onChange={async e => { const h = Number(e.target.value); setRefreshHours(h); await window.api.setAutoRefreshInterval(h); }}
                                    containerClassName="max-w-xs"
                                >
                                    <option value={0}>{t('settings.refresh_off')}</option>
                                    <option value={6}>{t('settings.refresh_hours', { count: 6 })}</option>
                                    <option value={12}>{t('settings.refresh_hours', { count: 12 })}</option>
                                    <option value={24}>{t('settings.refresh_hours', { count: 24 })}</option>
                                </SelectField>
                            </Section>
                        </>
                    )}

                    {tab === 'downloads' && (
                        <>
                            <Section icon={FolderOpen} title={t('settings.folder_title')} text={t('settings.folder_desc')}>
                                <div className="flex flex-wrap items-center gap-2">
                                    <code className="min-w-0 flex-1 truncate rounded-md border border-line bg-surface-1 px-3 py-2 font-mono text-sm text-fg-2" title={path}>{path}</code>
                                    <Button icon={FolderInput} onClick={() => void chooseFolder()} disabled={!!migration}>{t('settings.folder_change')}</Button>
                                </div>
                                {migration && (
                                    <div className="mt-3 space-y-1.5" aria-live="polite">
                                        <p className="text-sm text-fg-2">{t('settings.migrating', { moved: migration.moved, total: migration.total })}</p>
                                        <ProgressBar value={migration.total > 0 ? (migration.moved / migration.total) * 100 : null} label={t('settings.migrating', { moved: migration.moved, total: migration.total })} />
                                    </div>
                                )}
                            </Section>
                            <Section icon={Gauge} title={t('settings.transfer_title')} text={t('settings.transfer_desc')}>
                                <div className="grid grid-cols-3 gap-4">
                                    <SelectField label={t('settings.concurrency')} value={concurrency} onChange={async e => { const n = Number(e.target.value); setConcurrency(n); await window.api.setConcurrency(n); }}>
                                        {Array.from({ length: 10 }, (_, i) => i + 1).map(n => <option key={n} value={n}>{n}</option>)}
                                    </SelectField>
                                    <TextField
                                        type="number" min={0} inputMode="numeric"
                                        label={t('settings.speed')}
                                        hint={Number(speed) > 0 ? t('settings.speed_hint', { value: speed }) : t('settings.unlimited')}
                                        value={speed}
                                        onChange={e => setSpeed(e.target.value)}
                                        onBlur={async () => { const v = Math.max(0, Math.floor(Number(speed) || 0)); setSpeed(String(v)); await window.api.setSpeedLimit(v); }}
                                    />
                                    <TextField
                                        type="number" min={0} inputMode="numeric"
                                        label={t('settings.size_cap')}
                                        hint={Number(sizeCap) > 0 ? t('settings.size_cap_hint', { value: sizeCap }) : t('settings.unlimited')}
                                        value={sizeCap}
                                        onChange={e => setSizeCap(e.target.value)}
                                        onBlur={async () => { const v = Math.max(0, Math.floor(Number(sizeCap) || 0)); setSizeCap(String(v)); await window.api.setFileSizeLimit(v); }}
                                    />
                                </div>
                            </Section>
                        </>
                    )}

                    {tab === 'files' && (
                        <>
                            <Section icon={FileText} title={t('settings.naming_title')} text={t('settings.naming_desc')}>
                                <TextField
                                    label={t('settings.naming_label')}
                                    className="font-mono"
                                    value={template}
                                    onChange={e => setTemplate(e.target.value)}
                                    onBlur={e => void saveTemplate(e.target.value)}
                                    spellCheck={false}
                                />
                                <div className="mt-2 flex flex-wrap gap-1.5" role="group" aria-label={t('settings.naming_tokens')}>
                                    {TOKENS.map(tok => (
                                        <button key={tok} type="button" onClick={() => void saveTemplate(`${template}${tok}`)} className="rounded border border-line bg-surface-3 px-2 py-0.5 font-mono text-xs text-fg-2 hover:border-line-strong hover:text-fg">
                                            {tok}
                                        </button>
                                    ))}
                                </div>
                                <p className="mt-3 text-sm text-fg-3">{t('settings.naming_preview')}: <span className="font-mono text-fg-2">{preview}.mp3</span></p>
                                <p className="mt-1 text-xs text-fg-3">{t('settings.naming_note')}</p>
                            </Section>
                            <Section icon={Tags} title={t('settings.meta_title')}>
                                <div className="space-y-4">
                                    <Switch checked={sidecar} onChange={async v => { setSidecar(v); await window.api.setSidecarEnabled(v); }} label={t('settings.sidecar')} description={t('settings.sidecar_desc')} />
                                    <Switch checked={id3} onChange={async v => { setId3(v); await window.api.setId3Enabled(v); }} label={t('settings.id3')} description={t('settings.id3_desc')} />
                                </div>
                            </Section>
                        </>
                    )}

                    {tab === 'archive' && (
                        <>
                            <Section icon={HardDrive} title={t('settings.archive_title')}>
                                {stats && stats.totalFiles > 0 ? (
                                    <p className="text-sm text-fg-2">
                                        {t('settings.archive_summary', { files: stats.totalFiles.toLocaleString(i18n.language), podcasts: stats.totalPodcasts })}
                                        {stats.oldestDate && <> {t('settings.archive_since', { date: formatDate(stats.oldestDate, i18n.language) })}</>}
                                    </p>
                                ) : <p className="text-sm text-fg-3">{t('archive.empty_title')}</p>}
                                <div className="mt-3 flex flex-wrap gap-2">
                                    <Button icon={ShieldCheck} onClick={() => { onClose(); onOpenHealthCheck(); }} disabled={!stats?.totalFiles}>{t('archive.verify')}</Button>
                                    <Button variant="ghost" icon={FileSpreadsheet} onClick={async () => { if (await window.api.exportArchiveCSV()) toast.success(t('toast.csv_done')); }} disabled={!stats?.totalFiles}>{t('archive.export_csv')}</Button>
                                </div>
                            </Section>
                            <Section icon={FileUp} title={t('settings.opml_title')} text={t('settings.opml_desc')}>
                                <div className="flex flex-wrap gap-2">
                                    <Button icon={FileUp} onClick={() => { onClose(); onImportOpml(); }}>{t('sidebar.import_opml')}</Button>
                                    <Button variant="ghost" icon={FileDown} onClick={async () => { if (await window.api.exportOPML()) toast.success(t('toast.opml_exported')); }}>{t('settings.opml_export')}</Button>
                                </div>
                            </Section>
                            <Section icon={Eraser} title={t('settings.temp_title')} text={t('settings.temp_desc')}>
                                <Button
                                    icon={Eraser}
                                    loading={busy === 'parts'}
                                    disabled={queueCount > 0}
                                    title={queueCount > 0 ? t('settings.temp_busy') : undefined}
                                    onClick={async () => {
                                        setBusy('parts');
                                        try {
                                            const n = await window.api.cleanPartFiles();
                                            if (n < 0) toast.error(t('settings.temp_busy')); else toast.success(t('settings.temp_done', { count: n }));
                                        } finally { setBusy(null); }
                                    }}
                                >
                                    {t('settings.temp_clean')}
                                </Button>
                            </Section>
                            <Section icon={Trash2} tone="danger" title={t('settings.danger_title')} text={t('settings.danger_desc')}>
                                <Button variant="danger-ghost" icon={Trash2} disabled={queueCount > 0} onClick={() => setConfirmReset(true)}>{t('settings.reset_history')}</Button>
                            </Section>
                        </>
                    )}

                    {tab === 'accessibility' && (
                        <>
                            <Section icon={Accessibility} title={t('settings.zoom_title')} text={t('settings.zoom_desc')}>
                                <SelectField label={t('settings.zoom_label')} value={zoom} onChange={e => setZoom(Number(e.target.value))} containerClassName="max-w-xs">
                                    {ZOOM_OPTIONS.map(z => <option key={z} value={z}>{Math.round(z * 100)}%</option>)}
                                </SelectField>
                            </Section>
                            <Section icon={Sparkles} title={t('settings.motion_title')}>
                                <Switch checked={reduceMotion} onChange={setReduceMotion} label={t('settings.motion_label')} description={t('settings.motion_desc')} />
                            </Section>
                        </>
                    )}

                    {tab === 'about' && (
                        <>
                            <Section icon={RefreshCw} title={t('settings.updates_title')} text={t('settings.version', { version: __APP_VERSION__ })}>
                                <p className="mb-3 text-sm text-fg-2" aria-live="polite">
                                    {updateStatus.type === 'checking' && t('update.checking')}
                                    {updateStatus.type === 'not-available' && t('update.none')}
                                    {updateStatus.type === 'available' && t('update.available_short', { version: updateStatus.version })}
                                    {updateStatus.type === 'downloading' && t('update.downloading_short', { percent: updateStatus.percent })}
                                    {updateStatus.type === 'ready' && t('update.ready_short')}
                                    {updateStatus.type === 'error' && <span className="text-danger">{t('update.error')}</span>}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {updateStatus.type === 'ready'
                                        ? <Button variant="primary" icon={RotateCw} onClick={() => void window.api.installUpdate()}>{t('update.install')}</Button>
                                        : updateStatus.type === 'available'
                                            ? <Button variant="primary" icon={Download} onClick={() => void window.api.downloadUpdate()}>{t('update.download')}</Button>
                                            : <Button icon={RefreshCw} loading={updateStatus.type === 'checking' || updateStatus.type === 'downloading'} onClick={() => { setUpdateStatus({ type: 'checking' }); void window.api.checkForUpdate(); }}>{t('update.check')}</Button>}
                                    <Button variant="ghost" icon={Sparkles} onClick={onOpenChangelog}>{t('changelog.title')}</Button>
                                </div>
                            </Section>
                            <Section icon={BookOpen} title={t('settings.docs_title')}>
                                <div className="flex flex-wrap gap-2">
                                    <Button icon={BookOpen} onClick={onOpenGuide}>{t('help.title')}</Button>
                                    <Button variant="ghost" icon={FileDown} onClick={() => void window.api.openManualPdf((i18n.language || 'en').split('-')[0])}>{t('help.open_pdf')}</Button>
                                </div>
                            </Section>
                            <Section icon={Heart} title={t('settings.project_title')}>
                                <div className="flex flex-col items-start gap-3">
                                    <RuntimeUtilitiesLogo className="h-8 w-auto text-fg-2" />
                                    <p className="text-sm text-fg-2">{t('credits.license')}<br />{t('credits.author')}<br />{t('credits.llm')}</p>
                                    <div className="flex flex-wrap gap-2">
                                        <Button size="sm" variant="ghost" icon={Mail} onClick={() => openLink(CONTACT_URL)}>{t('settings.contacts')}</Button>
                                        <Button size="sm" variant="ghost" icon={Code} onClick={() => openLink(SOURCE_URL)}>{t('settings.source')}</Button>
                                        <Button size="sm" variant="ghost" icon={Heart} onClick={() => openLink(DONATE_URL)}>{t('settings.donate')}</Button>
                                    </div>
                                </div>
                            </Section>
                        </>
                    )}
                </TabPanel>
            </Dialog>

            <ConfirmDialog
                open={!!folderChoice}
                title={t('settings.folder_choice_title')}
                message={<>{t('settings.folder_choice_body', { count: stats?.totalFiles ?? 0 })}<code className="mt-2 block truncate font-mono text-sm text-fg-2">{folderChoice}</code></>}
                confirmLabel={t('settings.folder_choice_move')}
                secondaryAction={{ label: t('settings.folder_choice_new_only'), onClick: () => folderChoice && void applyFolderForNew(folderChoice) }}
                tone="info"
                icon={FolderInput}
                onConfirm={() => folderChoice && void migrateTo(folderChoice)}
                onCancel={() => setFolderChoice(null)}
            />
            <ConfirmDialog
                open={confirmReset}
                title={t('settings.reset_title')}
                message={t('settings.reset_body')}
                confirmLabel={t('settings.reset_go')}
                tone="danger"
                onConfirm={async () => {
                    setConfirmReset(false);
                    await window.api.resetDownloadHistory();
                    setStats({ totalFiles: 0, totalPodcasts: 0, oldestDate: null, newestDate: null });
                    toast.success(t('settings.reset_done'));
                }}
                onCancel={() => setConfirmReset(false)}
            />
        </>
    );
}
