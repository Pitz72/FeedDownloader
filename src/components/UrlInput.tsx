import React, { useState } from 'react';
import { useStore, AppState } from '../store/useStore';
import { Icon } from './Icon';
import { useToast } from '../context/ToastContext';
import { useTranslation } from 'react-i18next';

export const UrlInput: React.FC = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const setCurrentFeed = useStore((state: AppState) => state.setCurrentFeed);
  const toast = useToast();
  const { t } = useTranslation();

  // Shared analyze logic — used by button, Enter key, and drag & drop
  const analyzeFeed = async (feedUrl: string) => {
    const trimmed = feedUrl.trim();
    if (!trimmed) return;
    if (!navigator.onLine) {
      toast.show(t('toast.offline_error'), 'error');
      return;
    }
    setLoading(true);
    try {
      const feed = await window.api.parseFeed(trimmed);
      const fullFeed = { ...feed, url: trimmed };
      setCurrentFeed(fullFeed);
      await window.api.addFeed(fullFeed);
    } catch (error: unknown) {
      console.error(error);
      const msg_src = error instanceof Error ? error.message : '';
      let msg = t('toast.parse_error');
      if (msg_src.includes('INVALID_FEED_TYPE')) msg = t('toast.invalid_feed');
      else if (msg_src.includes('Network Error'))  msg = t('toast.network_error');
      else if (msg_src.includes('404'))            msg = t('toast.feed_not_found');
      toast.show(msg, 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleAnalyze = () => analyzeFeed(url);

  const handleDragOver = (e: React.DragEvent) => { e.preventDefault(); setIsDragging(true); };
  const handleDragLeave = (e: React.DragEvent) => { if (!e.currentTarget.contains(e.relatedTarget as Node)) setIsDragging(false); };
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const dropped = (e.dataTransfer.getData('text/plain') || e.dataTransfer.getData('text/uri-list')).trim();
    if (!dropped) return;
    setUrl(dropped);
    analyzeFeed(dropped);
  };

  return (
    <div
      className="glass-panel p-2 rounded-xl flex items-center gap-2 transition-all"
      style={isDragging ? { outlineColor: 'var(--color-primary)', outline: '2px solid' } : {}}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {/* Folder shortcut */}
      <button
        onClick={async () => {
          const path = await window.api.chooseFolder();
          if (path) {
            await window.api.setDownloadPath(path);
            toast.show(t('toast.folder_selected', { path }), 'success');
          }
        }}
        className="hover-text-surface p-2 rounded-lg transition-colors shrink-0"
        style={{ color: 'var(--color-outline)' }}
        title={t('episodes.change_folder')}
      >
        <Icon name="folder_open" size={20} />
      </button>

      {/* URL input */}
      <div className="flex-1 flex items-center gap-3 px-3 py-2">
        <Icon name="rss_feed" size={18} style={{ color: 'var(--color-outline)', flexShrink: 0 } as React.CSSProperties} />
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder={isDragging ? t('input.drop_url') : t('input.placeholder')}
          id="url-feed-input"
          className="w-full bg-transparent border-none outline-none text-sm"
          style={{ color: 'var(--color-on-surface)', fontFamily: 'var(--font-body)' }}
          onKeyDown={(e) => e.key === 'Enter' && handleAnalyze()}
        />
      </div>

      {/* Analyze */}
      <button
        onClick={handleAnalyze}
        disabled={loading}
        className="btn-primary-gradient flex items-center gap-2 px-5 py-2.5 disabled:opacity-50 shrink-0"
      >
        {loading
          ? <Icon name="progress_activity" size={16} className="animate-spin" />
          : <Icon name="analytics" size={16} />
        }
        {t('input.analyze')}
      </button>
    </div>
  );
};
