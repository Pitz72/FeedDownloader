import { useEffect, useState } from 'react';
import { UrlInput } from './components/UrlInput';
import { EpisodeList } from './components/EpisodeList';
import { ArchiveView } from './components/ArchiveView';
import { Sidebar } from './components/Sidebar';
import { GlobalProgressBar } from './components/GlobalProgressBar';
import { IntroScreen } from './components/IntroScreen';
import { SettingsModal } from './components/SettingsModal';
import { Icon } from './components/Icon';
import { useStore, AppState } from './store/useStore';
import { ToastProvider, useToast } from './context/ToastContext';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

const isMac = document.documentElement.dataset.platform === 'darwin';

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
      <Sidebar onSettingsOpen={() => setIsSettingsOpen(true)} />

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
                <EpisodeList />
              </>
            ) : (
              <ArchiveView />
            )}
          </div>
          <GlobalProgressBar />
        </main>
      </div>
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
