import { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { WifiOff } from 'lucide-react';
import { useStore } from './store/useStore';
import { UiPreferencesProvider, useUiPreferences } from './hooks/useUiPreferences';
import { useOnlineStatus } from './hooks/useOnlineStatus';
import { ToastProvider, useToast } from './components/ui/Toast';
import { isAnyDialogOpen } from './components/ui/Dialog';
import { IntroScreen } from './components/IntroScreen';
import { TopBar } from './components/TopBar';
import { Sidebar } from './components/Sidebar';
import { FeedView } from './components/feed/FeedView';
import { DownloadsView } from './components/DownloadsView';
import { ArchiveView } from './components/ArchiveView';
import { LibraryHome } from './components/LibraryHome';
import { AddFeedDialog } from './components/AddFeedDialog';
import { SettingsDialog } from './components/SettingsDialog';
import { HealthCheckDialog } from './components/HealthCheckDialog';
import { CommandPalette, type PaletteCommands } from './components/CommandPalette';
import { ChangelogDialog, HelpDialog } from './components/DocsDialogs';
import { errorKey, openFeed } from './lib/actions';

function isEditable(target: EventTarget | null): boolean {
    const el = target as HTMLElement | null;
    return !!el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT' || el.isContentEditable);
}

/** Lo spazio di lavoro: barra superiore, navigazione, vista attiva e finestre. */
function Workspace() {
    const { t } = useTranslation();
    const toast = useToast();
    const isOnline = useOnlineStatus();
    const view = useStore(s => s.view);
    const currentFeed = useStore(s => s.currentFeed);

    const [addFeed, setAddFeed] = useState<{ open: boolean; url?: string }>({ open: false });
    const [settingsOpen, setSettingsOpen] = useState(false);
    const [healthOpen, setHealthOpen] = useState(false);
    const [guideOpen, setGuideOpen] = useState(false);
    const [changelogOpen, setChangelogOpen] = useState(false);
    const [paletteOpen, setPaletteOpen] = useState(false);

    // ── Abbonamenti agli eventi del main process ──────────────
    useEffect(() => {
        const s = useStore.getState();
        window.api.getFeeds().then(s.setFeeds).catch(() => { });
        window.api.getQueueState().then(s.setQueueState).catch(() => { });
        window.api.getEffectiveDownloadPath().then(s.setDownloadPath).catch(() => { });
        const offs = [
            window.api.onFeedsUpdated(feeds => useStore.getState().setFeeds(feeds)),
            window.api.onDownloadProgress(p => useStore.getState().updateDownload(p)),
            window.api.onQueueUpdated(items => useStore.getState().setQueueItems(items)),
            window.api.onQueueState(state => useStore.getState().setQueueState(state)),
            window.api.onDownloadCompleted(done => useStore.getState().addCompleted(done)),
            window.api.onDownloadFailed(failure => {
                const st = useStore.getState();
                st.addFailure(failure);
                // Un toast per un download singolo; in un batch parlano la vista
                // Download e la notifica di fine lavoro (niente pioggia di avvisi).
                if (st.queueState.run.total <= 1) toast.error(t(errorKey(failure.errorCode)), failure.title);
            }),
            window.api.onRefreshProgress(p => useStore.getState().setRefresh(p.done >= p.total ? null : p)),
            // v1.5.0 — clicking the new-episodes OS notification opens the feed it's about
            window.api.onOpenFeed(url => { void openFeed(url).catch(() => { }); }),
        ];
        return () => offs.forEach(off => off());
    }, [t, toast]);

    // Rete: offline mette in pausa la coda (nel main), il ritorno la riprende
    useEffect(() => {
        const online = () => { void window.api.notifyOnline(); };
        const offline = () => { void window.api.notifyOffline(); };
        window.addEventListener('online', online);
        window.addEventListener('offline', offline);
        if (!navigator.onLine) offline();
        return () => { window.removeEventListener('online', online); window.removeEventListener('offline', offline); };
    }, []);

    // Novità di versione: decide il main, una volta (standard Titan)
    useEffect(() => {
        window.api.consumeWhatsNew().then(({ shouldShow }) => { if (shouldShow) setChangelogOpen(true); }).catch(() => { });
    }, []);

    const checkAll = useCallback(async () => {
        if (!navigator.onLine) { toast.error(t('toast.offline')); return; }
        if (useStore.getState().refresh) return;
        useStore.getState().setRefresh({ done: 0, total: useStore.getState().feeds.length });
        try {
            const r = await window.api.refreshAll();
            const msg = r.newEpisodes > 0
                ? t('toast.check_new', { count: r.newEpisodes }) + (r.queued > 0 ? ` ${t('toast.check_queued', { count: r.queued })}` : '')
                : t('toast.check_none', { count: r.checked });
            toast.show(r.failed > 0 ? `${msg} ${t('toast.check_failed', { count: r.failed })}` : msg, r.failed > 0 && r.checked === 0 ? 'error' : 'success');
            // the open feed reflects what the refresh just fetched
            const url = useStore.getState().currentFeed?.url;
            if (url && useStore.getState().view === 'feed') void openFeed(url).catch(() => { });
        } catch {
            toast.error(t('toast.check_error'));
        } finally {
            useStore.getState().setRefresh(null);
        }
    }, [t, toast]);

    const importOpml = useCallback(async () => {
        try {
            const res = await window.api.importOPML();
            if (res.canceled) return;
            toast.show(res.count > 0 ? t('toast.opml_imported', { count: res.count }) : t('toast.opml_nothing'), res.count > 0 ? 'success' : 'info');
        } catch {
            toast.error(t('toast.opml_error'));
        }
    }, [t, toast]);

    const commands: PaletteCommands = useMemo(() => ({
        addFeed: () => setAddFeed({ open: true }),
        checkAll: () => void checkAll(),
        openSettings: () => setSettingsOpen(true),
        openGuide: () => setGuideOpen(true),
        openHealthCheck: () => setHealthOpen(true),
        importOpml: () => void importOpml(),
    }), [checkAll, importOpml]);

    // ── Scorciatoie da tastiera ───────────────────────────────
    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (!(e.ctrlKey || e.metaKey) || e.altKey) return;
            // L20: e.key is case-sensitive ('K' with CapsLock) — normalize letter shortcuts
            const key = e.key.toLowerCase();
            if (key === 'k') {
                e.preventDefault();
                if (!isAnyDialogOpen() || paletteOpen) setPaletteOpen(v => !v);
                return;
            }
            if (isAnyDialogOpen()) return;
            const { setView, currentFeed: feed } = useStore.getState();
            if (key === 'n') { e.preventDefault(); setAddFeed({ open: true }); }
            else if (key === ',') { e.preventDefault(); setSettingsOpen(true); }
            else if (key === 's' && !isEditable(e.target)) { e.preventDefault(); void checkAll(); }
            else if (key === '1' && feed) { e.preventDefault(); setView('feed'); }
            else if (key === '2') { e.preventDefault(); setView('downloads'); }
            else if (key === '3') { e.preventDefault(); setView('archive'); }
            else if (key === 'f') {
                const id = useStore.getState().view === 'archive' ? 'archive-filter-input' : 'episode-filter-input';
                const el = document.getElementById(id);
                if (el) { e.preventDefault(); el.focus(); }
            } else if (key === 'a' && !isEditable(e.target) && useStore.getState().view === 'feed') {
                // Ctrl+A seleziona tutti gli episodi visibili (dentro i campi resta il "seleziona tutto" del testo)
                e.preventDefault();
                window.dispatchEvent(new CustomEvent('feeddownloader:select-all'));
            }
        };
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [checkAll, paletteOpen]);

    // Un indirizzo trascinato sulla finestra (dal browser) apre «Aggiungi feed»
    useEffect(() => {
        const over = (e: DragEvent) => { if (e.dataTransfer?.types.some(t => t === 'text/uri-list' || t === 'text/plain')) e.preventDefault(); };
        const drop = (e: DragEvent) => {
            const text = (e.dataTransfer?.getData('text/uri-list') || e.dataTransfer?.getData('text/plain') || '').split('\n')[0].trim();
            if (!text || !/^(https?|feed|podcast):/i.test(text) || isAnyDialogOpen()) return;
            e.preventDefault();
            setAddFeed({ open: true, url: text });
        };
        window.addEventListener('dragover', over);
        window.addEventListener('drop', drop);
        return () => { window.removeEventListener('dragover', over); window.removeEventListener('drop', drop); };
    }, []);

    return (
        <div className="flex h-screen flex-col bg-canvas">
            <a href="#main-content" className="skip-link">{t('app.skip_to_content')}</a>

            <TopBar
                onCheckAll={() => void checkAll()}
                onOpenPalette={() => setPaletteOpen(true)}
                onOpenGuide={() => setGuideOpen(true)}
                onOpenSettings={() => setSettingsOpen(true)}
            />

            <div className="flex min-h-0 flex-1">
                <Sidebar onAddFeed={() => setAddFeed({ open: true })} onImportOpml={() => void importOpml()} />

                {/* L'area principale scorre quando l'altezza non basta (finestra bassa o
                    interfaccia ingrandita): WCAG 1.4.4, ingrandire senza perdere contenuto. */}
                <main id="main-content" tabIndex={-1} className="relative flex min-w-0 flex-1 flex-col overflow-y-auto focus:outline-none">
                    {!isOnline && (
                        <div role="status" className="flex items-center gap-3 border-b border-line bg-warning-soft px-6 py-2.5 text-sm text-warning">
                            <WifiOff size={16} aria-hidden="true" />
                            {t('banner.offline')}
                        </div>
                    )}
                    {view === 'downloads' ? <DownloadsView />
                        : view === 'archive' ? <ArchiveView onOpenHealthCheck={() => setHealthOpen(true)} />
                        : currentFeed ? <FeedView key={currentFeed.url} feed={currentFeed} />
                        : <LibraryHome onAddFeed={() => setAddFeed({ open: true })} onImportOpml={() => void importOpml()} onCheckAll={() => void checkAll()} />}
                </main>
            </div>

            <AddFeedDialog open={addFeed.open} initialUrl={addFeed.url} onClose={() => setAddFeed({ open: false })} onImportOpml={() => void importOpml()} />
            <SettingsDialog
                open={settingsOpen}
                onClose={() => setSettingsOpen(false)}
                onOpenHealthCheck={() => setHealthOpen(true)}
                onOpenGuide={() => setGuideOpen(true)}
                onOpenChangelog={() => setChangelogOpen(true)}
                onImportOpml={() => void importOpml()}
            />
            <HealthCheckDialog open={healthOpen} onClose={() => setHealthOpen(false)} />
            <HelpDialog open={guideOpen} onClose={() => setGuideOpen(false)} />
            <ChangelogDialog open={changelogOpen} onClose={() => setChangelogOpen(false)} />
            <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} commands={commands} />
        </div>
    );
}

function Root() {
    const [introDone, setIntroDone] = useState(false);
    const { ready } = useUiPreferences();

    // N1: subscribe at the very top so an "update available" pushed while the
    // intro is still showing isn't lost before the workspace mounts.
    useEffect(() => window.api.onUpdateStatus(status => useStore.getState().setUpdateStatus(status)), []);

    // L'intro anima all'apertura: deve già sapere se l'utente ha chiesto meno movimento.
    if (!ready) return <div className="h-screen bg-canvas" />;
    return introDone ? <Workspace /> : <IntroScreen onComplete={() => setIntroDone(true)} />;
}

export default function App() {
    return (
        <UiPreferencesProvider>
            <ToastProvider>
                <Root />
            </ToastProvider>
        </UiPreferencesProvider>
    );
}
