import { useEffect, useRef, useState } from 'react';
import { UrlInput } from './components/UrlInput';
import { EpisodeList } from './components/EpisodeList';
import { ArchiveView } from './components/ArchiveView';
import { Sidebar } from './components/Sidebar';
import { DownloadPanel } from './components/DownloadPanel';
import { IntroScreen } from './components/IntroScreen';
import { SettingsModal } from './components/SettingsModal';
import { Icon } from './components/Icon';
import { useStore, AppState } from './store/useStore';
import { ToastProvider, useToast } from './context/ToastContext';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

const SIDEBAR_MIN = 240;
const SIDEBAR_MAX = 640;
const SIDEBAR_DEFAULT = 456;

const isMac = document.documentElement.dataset.platform === 'darwin';

function OnboardingHint({ onDismiss }: { onDismiss: () => void }) {
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      className="rounded-xl p-5 space-y-3"
      style={{
        background: 'var(--color-surface-container-low)',
        boxShadow: 'inset 0 0 0 1px rgba(65,71,85,0.2)',
      }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <Icon name="rss_feed" size={20} style={{ color: 'var(--color-primary)' }} />
          <p className="text-sm font-medium" style={{ color: 'var(--color-on-surface)', fontFamily: 'var(--font-label)' }}>
            {t('onboarding.hint_url')}
          </p>
        </div>
        <button
          onClick={onDismiss}
          className="hover-bg-surface-high p-1 rounded-lg transition-all shrink-0"
          style={{ color: 'var(--color-on-surface-variant)' }}
        >
          <Icon name="close" size={16} />
        </button>
      </div>
      <div className="flex items-center gap-2 pl-9">
        <Icon name="folder_open" size={14} style={{ color: 'var(--color-secondary)', opacity: 0.7 }} />
        <p className="text-xs" style={{ color: 'var(--color-on-surface-variant)', opacity: 0.7 }}>
          {t('onboarding.hint_folder')}
        </p>
      </div>
    </motion.div>
  );
}

function AppContent() {
  const updateDownload = useStore((state: AppState) => state.updateDownload);
  const incrementBatch = useStore((state: AppState) => state.incrementBatch);
  const setQueueItems = useStore((state: AppState) => state.setQueueItems);
  const setBatchFailed = useStore((state: AppState) => state.setBatchFailed);
  const setDownloadPath = useStore((state: AppState) => state.setDownloadPath);
  const viewMode = useStore((state: AppState) => state.viewMode);
  const toast = useToast();
  const { t } = useTranslation();

  useEffect(() => {
    window.api.getDownloadPath().then(setDownloadPath).catch(() => { });
  }, [setDownloadPath]);

  useEffect(() => {
    const removeListener = window.api.onDownloadProgress((_event, data) => {
      updateDownload(data);
      if (data.completed || data.error) {
        incrementBatch();
      }
      if (data.error) {
        if (data.notFound) {
          toast.show(t('toast.episode_not_found'), 'error');
        } else {
          toast.show(t('toast.download_error'), 'error');
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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
        const filterInput = document.getElementById('episode-filter-input');
        if (filterInput) {
          e.preventDefault();
          filterInput.focus();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(false);

  // G7 — Onboarding: show on first run when no feeds exist
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

  const dismissOnboarding = () => {
    setShowOnboarding(false);
    localStorage.setItem('onboardingDone', '1');
  };

  useEffect(() => {
    const handleOnline  = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online',  handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online',  handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // G2 — Sidebar drag resize
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

  return (
    <div className="flex h-screen overflow-hidden" style={{ background: 'var(--color-background)', color: 'var(--color-on-surface)' }}>

      {/* Offline banner */}
      <AnimatePresence>
        {!isOnline && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="fixed top-0 left-0 right-0 z-50 text-center text-sm py-1 font-medium"
            style={{ background: 'var(--color-error-container)', color: 'var(--color-error)' }}
          >
            {t('toast.offline_error')}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <Sidebar onSettingsOpen={() => setIsSettingsOpen(true)} width={sidebarWidth} />

      {/* G2 — Drag handle */}
      <div
        onMouseDown={handleDividerMouseDown}
        style={{
          width: '4px',
          flexShrink: 0,
          cursor: 'col-resize',
          background: 'rgba(65,71,85,0.12)',
          transition: 'background 0.15s',
          zIndex: 10,
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = 'rgba(173,198,255,0.3)'; }}
        onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = 'rgba(65,71,85,0.12)'; }}
      />

      {/* Settings modal — root level */}
      <SettingsModal isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />

      {/* Main area */}
      <div className="flex-1 flex flex-col overflow-hidden" style={{ marginTop: !isOnline ? '2rem' : 0 }}>

        {/* TopBar */}
        <header
          className={`flex items-center justify-between h-14 shrink-0 z-20 ${isMac ? 'pl-20 pr-8' : 'px-8'}`}
          style={{ background: 'var(--color-background)' }}
        >
          <h1
            className="text-lg font-extrabold tracking-tight"
            style={{
              fontFamily: 'var(--font-headline)',
              background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-container))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {t('app.title')}
          </h1>
          <div className="flex items-center gap-3" style={{ color: 'var(--color-on-surface-variant)' }}>
            <button
              onClick={() => setIsSettingsOpen(true)}
              className="hover-text-primary transition-colors p-1"
              style={{ color: 'var(--color-on-surface-variant)' }}
              title={t('settings.title')}
            >
              <Icon name="settings" size={20} />
            </button>
          </div>
        </header>

        {/* Scrollable canvas */}
        <main
          id="main-scroll"
          className={`flex-1 overflow-y-auto custom-scrollbar ${!isOnline ? 'opacity-50 pointer-events-none grayscale' : ''}`}
        >
          <div className="max-w-7xl mx-auto px-8 py-6 space-y-6">
            {viewMode === 'feeds' ? (
              <>
                <UrlInput />
                <AnimatePresence>
                  {showOnboarding && <OnboardingHint key="onboarding" onDismiss={dismissOnboarding} />}
                </AnimatePresence>
                <EpisodeList />
              </>
            ) : (
              <ArchiveView />
            )}
          </div>
        </main>
      </div>

      {/* G1 — Download panel (fixed right drawer) */}
      <DownloadPanel />
    </div>
  );
}

function App() {
  const [appStarted, setAppStarted] = useState(false);

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
