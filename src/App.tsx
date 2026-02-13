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

      if (data.completed) {
        incrementBatch();
      }
    });

    return () => {
      removeListener();
    };
  }, [updateDownload, incrementBatch]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex min-h-screen bg-gradient-to-br from-gray-900 to-black text-white font-sans selection:bg-blue-500/30"
    >
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none z-0"></div>

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col min-h-screen">
        <div className="flex-1 p-8">
          <header className="text-center mb-12">
            <h1 className="text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
              {t('app.title')}
            </h1>
            <p className="text-gray-400 text-lg">
              {t('app.slogan')}
            </p>
          </header>

          <UrlInput />
          <EpisodeList />
          <GlobalProgressBar />
        </div>
      </div>
    </motion.div>
  );
}

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <ToastProvider>
      <AnimatePresence mode="wait">
        {showIntro ? (
          <IntroScreen key="intro" onComplete={() => setShowIntro(false)} />
        ) : (
          <AppContent key="app" />
        )}
      </AnimatePresence>
    </ToastProvider>
  )
}

export default App;
