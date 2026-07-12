import React, { useRef, useState } from 'react';
import clsx from 'clsx';
import { useStore, AppState } from '../store/useStore';
import { useToast } from '../context/ToastContext';
import { useTranslation } from 'react-i18next';

export const UrlInput: React.FC = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const setCurrentFeed = useStore((state: AppState) => state.setCurrentFeed);
  const toast = useToast();
  const { t } = useTranslation();
  // S9: only the latest parseFeed request may update state (stale responses are dropped)
  const latestRequestRef = useRef<string | null>(null);

  const analyzeFeed = async (feedUrl: string) => {
    const trimmed = feedUrl.trim();
    if (!trimmed) return;
    if (!navigator.onLine) {
      toast.show(t('toast.offline_error'), 'error');
      return;
    }
    latestRequestRef.current = trimmed;
    setLoading(true);
    try {
      const feed = await window.api.parseFeed(trimmed);
      if (latestRequestRef.current !== trimmed) return;
      const fullFeed = { ...feed, url: trimmed };
      setCurrentFeed(fullFeed);
      await window.api.addFeed(fullFeed);
    } catch (error: unknown) {
      console.error(error);
      if (latestRequestRef.current !== trimmed) return;
      const msg_src = error instanceof Error ? error.message : '';
      let msg = t('toast.parse_error');
      if (msg_src.includes('INVALID_FEED_TYPE')) msg = t('toast.invalid_feed');
      else if (msg_src.includes('Network Error')) msg = t('toast.network_error');
      else if (msg_src.includes('404')) msg = t('toast.feed_not_found');
      toast.show(msg, 'error');
    } finally {
      if (latestRequestRef.current === trimmed) setLoading(false);
    }
  };

  const handleAnalyze = () => {
    // M27: Enter in the field is not covered by the button's disabled state
    if (loading) return;
    analyzeFeed(url);
  };

  const handleDragOver = (e: React.DragEvent) => { e.preventDefault(); setIsDragging(true); };
  const handleDragLeave = (e: React.DragEvent) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node)) setIsDragging(false);
  };
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const dropped = (e.dataTransfer.getData('text/plain') || e.dataTransfer.getData('text/uri-list')).trim();
    if (!dropped) return;
    setUrl(dropped);
    analyzeFeed(dropped);
  };

  const handleChooseFolder = async () => {
    const path = await window.api.chooseFolder();
    if (path) {
      await window.api.setDownloadPath(path);
      toast.show(t('toast.folder_selected', { path }), 'success');
    }
  };

  return (
    <div
      className={clsx('url-input', isDragging && 'dragging')}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <button
        type="button"
        className="ghost"
        onClick={handleChooseFolder}
        title={t('episodes.change_folder', 'Cambia cartella di download')}
        aria-label={t('episodes.change_folder', 'Cambia cartella di download')}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
        </svg>
      </button>

      <div className="field">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4 11a9 9 0 0 1 9 9"/>
          <path d="M4 4a16 16 0 0 1 16 16"/>
          <circle cx="5" cy="19" r="1.6" fill="currentColor"/>
        </svg>
        <input
          id="url-feed-input"
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder={t('input.placeholder', "Incolla l'URL del feed RSS — o trascinalo qui…")}
          onKeyDown={(e) => e.key === 'Enter' && handleAnalyze()}
        />
      </div>

      <div className="drag-hint">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="7 13 12 18 17 13"/>
          <polyline points="7 6 12 11 17 6"/>
        </svg>
        {t('input.drop_url', 'Rilascia per analizzare')}
      </div>

      <button
        type="button"
        className="btn-analyze"
        onClick={handleAnalyze}
        disabled={loading}
      >
        {loading ? (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ animation: 'feedSyncSpin 1s linear infinite' }}>
            <path d="M21 12a9 9 0 1 1-6.2-8.5"/>
          </svg>
        ) : (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M3 3v18h18"/>
            <path d="m7 14 4-4 4 4 6-6"/>
          </svg>
        )}
        {t('input.analyze', 'Analizza')}
      </button>
    </div>
  );
};
