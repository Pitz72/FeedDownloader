import React, { useEffect, useState } from 'react';
import { useStore, AppState } from '../store/useStore';
import { Icon } from './Icon';
import clsx from 'clsx';
import { useToast } from '../context/ToastContext';
import { useTranslation } from 'react-i18next';
import { ConfirmModal } from './ConfirmModal';
import type { FeedEntry } from '../../shared/types';

interface SidebarProps {
  onSettingsOpen: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ onSettingsOpen }) => {
  const [feeds, setFeeds] = useState<FeedEntry[]>([]);
  const { currentFeed, setCurrentFeed } = useStore((state: AppState) => state);
  const toast = useToast();
  const { t } = useTranslation();
  const [loadingUrl, setLoadingUrl] = useState<string | null>(null);

  const [confirmState, setConfirmState] = useState<{ isOpen: boolean; url: string }>({
    isOpen: false, url: ''
  });

  const loadFeeds = async () => {
    try {
      const loadedFeeds = await window.api.getFeeds();
      setFeeds(loadedFeeds);
    } catch (error) {
      console.error('Failed to load feeds', error);
    }
  };

  useEffect(() => {
    loadFeeds();
    const removeListener = window.api.onFeedsUpdated((_event, updatedFeeds) => {
      try {
        setFeeds(updatedFeeds);
      } catch (err) {
        console.error('Error in onFeedsUpdated:', err);
      }
    });
    return () => removeListener();
  }, []);

  const handleSelectFeed = async (feedUrl: string) => {
    if (currentFeed?.url === feedUrl) return;
    setLoadingUrl(feedUrl);
    try {
      const feed = await window.api.parseFeed(feedUrl);
      setCurrentFeed({ ...feed, url: feedUrl });
    } catch {
      toast.show(t('toast.feed_error'), 'error');
    } finally {
      setLoadingUrl(null);
    }
  };

  const handleRemoveFeed = (e: React.MouseEvent, url: string) => {
    e.stopPropagation();
    setConfirmState({ isOpen: true, url });
  };

  const confirmRemoveFeed = async () => {
    const url = confirmState.url;
    setConfirmState({ isOpen: false, url: '' });
    await window.api.removeFeed(url);
    if (currentFeed?.url === url) setCurrentFeed(null);
    toast.show(t('toast.feed_removed'), 'success');
  };

  const handleSyncAll = async () => {
    for (const feed of feeds) {
      try {
        const parsed = await window.api.parseFeed(feed.url);
        if (currentFeed?.url === feed.url) {
          setCurrentFeed({ ...parsed, url: feed.url });
        }
      } catch {
        // silently skip
      }
    }
    toast.show(t('toast.sync_complete', 'Sync completato'), 'success');
  };

  return (
    <aside
      className="flex flex-col h-full shrink-0"
      style={{ width: '16rem', background: 'var(--color-surface-container-low)' }}
    >
      {/* Header */}
      <div className="px-6 py-6 flex items-center justify-between">
        <div className="flex flex-col">
          <span
            className="text-base font-extrabold"
            style={{ fontFamily: 'var(--font-headline)', color: 'var(--color-on-surface)' }}
          >
            {t('sidebar.my_feeds', 'I Miei Feed')}
          </span>
          <span
            className="text-[10px] tracking-widest uppercase mt-0.5"
            style={{ fontFamily: 'var(--font-label)', color: 'var(--color-on-surface-variant)' }}
          >
            {t('sidebar.subtitle', 'Feed Manager')}
          </span>
        </div>
        <button
          onClick={onSettingsOpen}
          className="transition-colors p-1"
          style={{ color: 'var(--color-on-surface-variant)' }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-primary)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-on-surface-variant)')}
          title={t('settings.title')}
        >
          <Icon name="settings" size={20} />
        </button>
      </div>

      {/* Feed list */}
      <div className="flex-1 overflow-y-auto custom-scrollbar px-3 space-y-1">
        {feeds.length === 0 && (
          <div
            className="text-center text-sm mt-10 px-4"
            style={{ color: 'var(--color-on-surface-variant)' }}
          >
            {t('sidebar.no_feeds')}
          </div>
        )}

        {feeds.map((feed) => {
          const imageUrl = typeof feed.image === 'string' ? feed.image : feed.image?.url;
          const isActive = currentFeed?.url === feed.url;
          const isLoading = loadingUrl === feed.url;

          return (
            <div
              key={feed.url}
              onClick={() => handleSelectFeed(feed.url)}
              className={clsx(
                'flex items-center gap-3 p-3 cursor-pointer group transition-all duration-200 active:scale-[0.98]',
                isActive
                  ? 'rounded-r-lg border-l-2'
                  : 'rounded-lg border-l-2 border-transparent'
              )}
              style={isActive ? {
                borderLeftColor: 'var(--color-primary)',
                background: 'var(--color-surface-container-high)',
                color: 'var(--color-primary)',
              } : {
                color: 'var(--color-on-surface-variant)',
              }}
              onMouseEnter={e => { if (!isActive) { e.currentTarget.style.background = 'var(--color-surface-container-high)'; e.currentTarget.style.color = 'var(--color-on-surface)'; } }}
              onMouseLeave={e => { if (!isActive) { e.currentTarget.style.background = ''; e.currentTarget.style.color = 'var(--color-on-surface-variant)'; } }}
            >
              {/* Thumbnail */}
              <div
                className="w-10 h-10 rounded shrink-0 overflow-hidden flex items-center justify-center"
                style={{ background: 'var(--color-surface-container-high)' }}
              >
                {isLoading ? (
                  <Icon name="progress_activity" size={18} className="animate-spin" style={{ color: 'var(--color-primary)' }} />
                ) : imageUrl ? (
                  <img src={imageUrl} className={clsx('w-full h-full object-cover transition-all', !isActive && 'grayscale group-hover:grayscale-0')} alt={feed.title || ''} />
                ) : (
                  <Icon name="podcasts" size={18} />
                )}
              </div>

              {/* Info */}
              <div className="min-w-0 flex-1">
                <h3
                  className="text-sm font-bold truncate"
                  style={{ fontFamily: 'var(--font-label)' }}
                >
                  {feed.title || t('sidebar.untitled', 'Untitled')}
                </h3>
                <p
                  className="text-[10px] mt-0.5 truncate opacity-70"
                  style={{ fontFamily: 'var(--font-label)' }}
                >
                  {feed.lastUpdated
                    ? new Date(feed.lastUpdated).toLocaleDateString()
                    : t('sidebar.invalid_date')}
                </p>
              </div>

              {/* Remove button */}
              <button
                onClick={(e) => handleRemoveFeed(e, feed.url)}
                className="opacity-0 group-hover:opacity-100 p-1 rounded transition-all"
                style={{ color: 'var(--color-on-surface-variant)' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,79,79,0.15)'; e.currentTarget.style.color = '#ff6b6b'; }}
                onMouseLeave={e => { e.currentTarget.style.background = ''; e.currentTarget.style.color = 'var(--color-on-surface-variant)'; }}
                title={t('sidebar.remove', 'Rimuovi')}
              >
                <Icon name="delete" size={14} />
              </button>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="px-4 pt-4 pb-6 space-y-4">
        {feeds.length > 0 && (
          <button
            onClick={handleSyncAll}
            className="btn-primary-gradient w-full py-2 text-xs transition-all active:scale-[0.97]"
          >
            {t('sidebar.sync_all', 'Sincronizza Tutti')}
          </button>
        )}
        <div
          className="flex items-center justify-between pt-3"
          style={{ borderTop: '1px solid rgba(65,71,85,0.1)' }}
        >
          <span
            className="text-[10px]"
            style={{ fontFamily: 'var(--font-label)', color: 'var(--color-on-surface-variant)' }}
          >
            v{__APP_VERSION__}
          </span>
        </div>
      </div>

      <ConfirmModal
        isOpen={confirmState.isOpen}
        title={t('confirm.remove_feed_title', 'Rimuovi Feed')}
        message={t('confirm.remove_feed')}
        variant="danger"
        onConfirm={confirmRemoveFeed}
        onCancel={() => setConfirmState({ isOpen: false, url: '' })}
      />
    </aside>
  );
};
