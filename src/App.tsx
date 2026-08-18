import { useEffect, useRef, useState } from 'react';
import { UrlInput } from './components/UrlInput';
import { EpisodeList } from './components/EpisodeList';
import { ArchiveView } from './components/ArchiveView';
import { Sidebar } from './components/Sidebar';
import { DownloadPanel } from './components/DownloadPanel';
import { CommandPalette } from './components/CommandPalette';
import { IntroScreen } from './components/IntroScreen';
import { SettingsModal } from './components/SettingsModal';
import { OnboardHero } from './components/OnboardHero';
import { UpdateBanner } from './components/UpdateBanner';
import { ChangelogModal } from './components/ChangelogModal';
import { useStore, AppState } from './store/useStore';
import type { UpdateStatus } from '../shared/types';
import { ToastProvider, useToast } from './context/ToastContext';
import { useTranslation } from 'react-i18next';
import { AnimatePresence } from 'framer-motion';

const SIDEBAR_MIN = 240;
const SIDEBAR_MAX = 640;
const SIDEBAR_DEFAULT = 360;

// Read the platform from the preload's synchronous `platform` field, not from
// document.documentElement.dataset.platform which the async ESM preload only sets
// at DOMContentLoaded — a module-level read could otherwise run first and miss it.
const isMac = window.api?.platform === 'darwin';

function AppContent() {
  const updateDownload = useStore((state: AppState) => state.updateDownload);
  const incrementBatch = useStore((state: AppState) => state.incrementBatch);
  const setQueueItems = useStore((state: AppState) => state.setQueueItems);
  const setBatchFailed = useStore((state: AppState) => state.setBatchFailed);
  const setDownloadPath = useStore((state: AppState) => state.setDownloadPath);
  const viewMode = useStore((state: AppState) => state.viewMode);
  const currentFeed = useStore((state: AppState) => state.currentFeed);
  const toast = useToast();
  const { t } = useTranslation();

  useEffect(() => {
    window.api.getDownloadPath().then(setDownloadPath).catch(() => { });
  }, [setDownloadPath]);

  useEffect(() => {
    const removeListener = window.api.onDownloadProgress((_event, data) => {
      updateDownload(data);
      if (data.completed || data.error || data.cancelled) {
        incrementBatch(data.url);
      }
      if (data.error) {
        // Don't flood the screen with one toast per failure during a batch — a
        // 100-episode batch that fails en masse would stack dozens. The Download
        // Panel's failures section and the single BATCH_COMPLETED summary cover
        // batch errors; only surface an individual toast for a lone download.
        if (!useStore.getState().isBatchDownloading) {
          toast.show(t(data.notFound ? 'toast.episode_not_found' : 'toast.download_error'), 'error');
        }
      }
    });
    return () => removeListener();
  }, [updateDownload, incrementBatch, toast, t]);

  useEffect(() => {
    const removeListener = window.api.onQueueUpdated((_event, items) => {
      setQueueItems(items);
    });
    return () => removeListener();
  }, [setQueueItems]);

  useEffect(() => {
    const removeListener = window.api.onBatchCompleted((_event, data) => {
      if (data.failed && data.failed.length > 0) {
        setBatchFailed(data.failed);
      }
    });
    return () => removeListener();
  }, [setBatchFailed]);

  // v1.5.0 — clicking the new-episodes OS notification opens the feed it's about
  useEffect(() => {
    const removeListener = window.api.onOpenFeed((_event, feedUrl) => {
      window.api.parseFeed(feedUrl)
        .then(parsed => {
          const { setCurrentFeed, setViewMode } = useStore.getState();
          setCurrentFeed({ ...parsed, url: feedUrl });
          setViewMode('feeds');
        })
        .catch(() => { /* feed temporarily unreachable — the app is focused anyway */ });
    });
    return () => removeListener();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!(e.ctrlKey || e.metaKey)) return;
      // L20: e.key is case-sensitive ('K' with CapsLock) — normalize letter shortcuts
      const key = e.key.toLowerCase();
      if (key === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen(v => !v);
      } else if (key === 'f') {
        if (useStore.getState().viewMode === 'archive') {
          // L21: focus the archive search field (no id available — first text input in the main area)
          const searchInput = document.querySelector<HTMLInputElement>(
            '#main-scroll input[type="text"], #main-scroll input[type="search"]'
          );
          if (searchInput) {
            e.preventDefault();
            searchInput.focus();
          }
        } else {
          const filterInput = document.getElementById('episode-filter-input');
          if (filterInput) {
            e.preventDefault();
            filterInput.focus();
          }
        }
      } else if (key === 's') {
        // M23: sync all feeds (Sidebar listens to this event) — but not while the
        // user is typing in a field, where Ctrl+S reads as "save".
        const target = e.target as HTMLElement | null;
        const isEditable = !!target && (
          target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable
        );
        if (!isEditable) {
          e.preventDefault();
          window.dispatchEvent(new CustomEvent('feeddownloader:syncall'));
        }
      } else if (key === 'a') {
        // M23: toggle archive view — but keep native select-all inside editable fields
        const target = e.target as HTMLElement | null;
        const isEditable = !!target && (
          target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable
        );
        if (!isEditable) {
          e.preventDefault();
          const { viewMode: currentView, setViewMode } = useStore.getState();
          setViewMode(currentView === 'archive' ? 'feeds' : 'archive');
        }
      } else if (e.key === ',') {
        // M23: open settings
        e.preventDefault();
        setIsSettingsOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isChangelogOpen, setIsChangelogOpen] = useState(false);

  // Changelog in-app: auto-show once right after the app updates to a new
  // version, and on demand via the Settings button (which dispatches this
  // event). v1.5.0 (Titan pattern): the decision lives in the MAIN process
  // (settings + library check), so a user upgrading from a version that
  // predates the stored marker still gets the changelog — the old
  // localStorage check stayed silent across 1.3.x→1.4.x.
  useEffect(() => {
    window.api.consumeWhatsNew()
      .then(({ shouldShow }) => { if (shouldShow) setIsChangelogOpen(true); })
      .catch(() => { /* non-blocking nicety */ });
    const open = () => setIsChangelogOpen(true);
    window.addEventListener('feeddownloader:changelog', open);
    return () => window.removeEventListener('feeddownloader:changelog', open);
  }, []);

  // Onboarding (G7 — first run, no feeds)
  useEffect(() => {
    if (localStorage.getItem('onboardingDone')) return;
    window.api.getFeeds().then(feeds => {
      if (feeds.length === 0) setShowOnboarding(true);
    }).catch(() => {});
  }, []);

  useEffect(() => {
    if (!showOnboarding) return;
    const unsub = window.api.onFeedsUpdated((_e, feeds) => {
      if (feeds.length > 0) {
        setShowOnboarding(false);
        localStorage.setItem('onboardingDone', '1');
      }
    });
    return unsub;
  }, [showOnboarding]);

  useEffect(() => {
    const handleOnline  = () => {
      setIsOnline(true);
      // N2: ask main to re-check feeds now that connectivity is back
      window.api.notifyOnline?.().catch(() => { });
    };
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online',  handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online',  handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Sidebar drag-resize
  const [sidebarWidth, setSidebarWidth] = useState(() => {
    const stored = localStorage.getItem('sidebarWidth');
    if (stored) {
      const n = parseInt(stored, 10);
      if (n >= SIDEBAR_MIN && n <= SIDEBAR_MAX) return n;
    }
    return SIDEBAR_DEFAULT;
  });
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartWidthRef = useRef(0);
  const currentWidthRef = useRef(sidebarWidth);

  useEffect(() => { currentWidthRef.current = sidebarWidth; }, [sidebarWidth]);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;
      const delta = e.clientX - dragStartXRef.current;
      const newWidth = Math.min(SIDEBAR_MAX, Math.max(SIDEBAR_MIN, dragStartWidthRef.current + delta));
      currentWidthRef.current = newWidth;
      setSidebarWidth(newWidth);
    };
    const onMouseUp = () => {
      if (!isDraggingRef.current) return;
      isDraggingRef.current = false;
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
      localStorage.setItem('sidebarWidth', String(currentWidthRef.current));
    };
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  const handleDividerMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    isDraggingRef.current = true;
    dragStartXRef.current = e.clientX;
    dragStartWidthRef.current = currentWidthRef.current;
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
  };

  // Crumbs
  const crumbsLeft  = viewMode === 'feeds' ? t('crumbs.feeds_active', 'Feeds attivi') : t('crumbs.archive', 'Archivio');
  const crumbsRight = viewMode === 'feeds'
    ? (currentFeed?.title || t('crumbs.no_feed', 'Nessun feed selezionato'))
    : t('crumbs.all_archived', 'Tutti gli episodi archiviati');

  return (
    <div className="app-shell" data-view={viewMode}>

      {/* Top banners */}
      <AnimatePresence>
        {!isOnline && (
          <div className="banner-stack">
            <div className="banner offline" role="status" aria-live="polite">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="1" y1="1" x2="23" y2="23"/>
                <path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"/>
                <path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"/>
                <path d="M10.71 5.05A16 16 0 0 1 22.58 9"/>
                <path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"/>
                <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
                <line x1="12" y1="20" x2="12.01" y2="20"/>
              </svg>
              <span className="text">{t('banner.offline', 'Sei offline · i download sono in pausa fino al ripristino della connessione')}</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '0.14em', opacity: 0.6 }}>
                {t('banner.retrying_auto', 'Riprovo automaticamente')}
              </span>
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <Sidebar onSettingsOpen={() => setIsSettingsOpen(true)} width={sidebarWidth} />

      {/* Drag handle (sidebar resize) */}
      <div
        onMouseDown={handleDividerMouseDown}
        className="sb-resize-grip"
        style={{ position: 'relative', flexShrink: 0, width: 4 }}
        aria-label="Resize sidebar"
        role="separator"
      />

      {/* Settings modal — root level. Escape is suppressed while a modal stacked
          on top (changelog / command palette) is open, so it closes only that. */}
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        suppressEscape={isChangelogOpen || isCommandPaletteOpen}
      />

      {/* Changelog modal — root level */}
      <ChangelogModal isOpen={isChangelogOpen} onClose={() => setIsChangelogOpen(false)} />

      {/* Main area */}
      <main className="main" style={!isOnline ? { marginTop: 36 } : undefined}>

        <header className="topbar" style={isMac ? { paddingLeft: 80 } : undefined}>
          <div className="topbar-title">
            <h1>{t('app.title', 'FeedDownloader Pro')}</h1>
            <div className="crumbs">
              <span className="sep">/</span>
              <span>{crumbsLeft}</span>
              <span className="sep">/</span>
              <strong>{crumbsRight}</strong>
            </div>
          </div>
          <div className="topbar-actions">
            <UpdateBanner />
            <button
              type="button"
              className="kbd-pill"
              onClick={() => setIsCommandPaletteOpen(true)}
              title={t('palette.open', 'Apri command palette')}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
              </svg>
              {t('topbar.search_actions', 'Cerca azioni')}
              <span className="k">{isMac ? '⌘K' : 'Ctrl K'}</span>
            </button>
            <button
              type="button"
              className="icon-btn"
              onClick={() => setIsSettingsOpen(true)}
              title={t('settings.title')}
              aria-label={t('settings.title')}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="3"/>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
              </svg>
            </button>
          </div>
        </header>

        <div
          id="main-scroll"
          className="content custom-scrollbar"
          style={!isOnline && viewMode === 'feeds' ? { opacity: 0.5, pointerEvents: 'none', filter: 'grayscale(1)' } : undefined}
        >
          {viewMode === 'feeds' ? (
            <>
              <UrlInput />
              {showOnboarding && <OnboardHero />}
              <EpisodeList />
            </>
          ) : (
            <ArchiveView />
          )}
        </div>
      </main>

      {/* Download panel (fixed right drawer) */}
      <DownloadPanel />

      {/* Command palette */}
      <AnimatePresence>
        {isCommandPaletteOpen && (
          <CommandPalette
            key="cmd-palette"
            onClose={() => setIsCommandPaletteOpen(false)}
            onOpenSettings={() => { setIsCommandPaletteOpen(false); setIsSettingsOpen(true); }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function App() {
  const [appStarted, setAppStarted] = useState(false);
  const setUpdateStatus = useStore((state: AppState) => state.setUpdateStatus);

  // N1: subscribe at the very top so an "update available" pushed while the
  // IntroScreen is still showing isn't lost before AppContent mounts.
  useEffect(() => {
    const remove = window.api.onUpdateStatus((_e, status: UpdateStatus) => {
      setUpdateStatus(status);
    });
    return () => remove();
  }, [setUpdateStatus]);

  return (
    <ToastProvider>
      <AnimatePresence mode="wait">
        {!appStarted ? (
          <IntroScreen key="intro" onComplete={() => setAppStarted(true)} />
        ) : (
          <AppContent key="app" />
        )}
      </AnimatePresence>
    </ToastProvider>
  );
}

export default App;
