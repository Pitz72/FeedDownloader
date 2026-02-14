import { useEffect, useState } from 'react';
import { UrlInput } from './components/UrlInput';
import { EpisodeList } from './components/EpisodeList';
import { Sidebar } from './components/Sidebar';
import { GlobalProgressBar } from './components/GlobalProgressBar';
import { IntroScreen } from './components/IntroScreen'; // Import IntroScreen
import { useStore, AppState } from './store/useStore';
import { ToastProvider } from './context/ToastContext';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

function AppContent() {
  const updateDownload = useStore((state: AppState) => state.updateDownload);
  const incrementBatch = useStore((state: AppState) => state.incrementBatch);
  const { t } = useTranslation();

  useEffect(() => {
    // Listen for download progress
    const removeListener = window.api.onDownloadProgress((_event, data) => {
      // console.log("Progress:", data);
      updateDownload(data);

      // Increment batch if completed OR error
      if (data.completed || data.error) {
        incrementBatch();
      }
    });

    return () => {
      removeListener();
    };
  }, [updateDownload, incrementBatch]);

  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex min-h-screen bg-gradient-to-br from-gray-900 to-black text-white font-sans selection:bg-blue-500/30"
    >
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none z-0"></div>

      {/* Offline Banner */}
      <AnimatePresence>
        {!isOnline && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-red-600/90 text-white text-center text-sm py-1 font-medium z-50 fixed top-0 left-0 right-0 backdrop-blur-sm"
          >
            {t('toast.offline_error', 'Nessuna connessione internet')}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className={`relative z-10 flex-1 flex flex-col min-h-screen ${!isOnline ? 'mt-8' : ''}`}> {/* Adjust for banner */}
        <div className="flex-1 p-8">
          <header className="text-center mb-12">
            <h1 className="text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
              {t('app.title')}
            </h1>
            <p className="text-gray-400 text-lg">
              {t('app.slogan')}
            </p>
          </header>

          <div className={!isOnline ? "opacity-50 pointer-events-none grayscale" : ""}>
            <UrlInput />
          </div>
          <EpisodeList />
          <GlobalProgressBar />
        </div>
      </div>
    </motion.div>
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
  )
}

export default App;
