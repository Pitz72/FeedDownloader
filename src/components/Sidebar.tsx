import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useStore, AppState } from '../store/useStore';
import { Icon } from './Icon';
import clsx from 'clsx';
import { useToast } from '../context/ToastContext';
import { useTranslation } from 'react-i18next';
import { ConfirmModal } from './ConfirmModal';
import type { FeedEntry } from '../../shared/types';

interface SidebarProps {
  onSettingsOpen: () => void;
  width?: number;
}

export const Sidebar: React.FC<SidebarProps> = ({ onSettingsOpen, width }) => {
  const [feeds, setFeeds] = useState<FeedEntry[]>([]);
  const { currentFeed, setCurrentFeed } = useStore((state: AppState) => state);
  const downloadPath = useStore((state: AppState) => state.downloadPath);
  const viewMode = useStore((state: AppState) => state.viewMode);
  const setViewMode = useStore((state: AppState) => state.setViewMode);
  const toast = useToast();
  const { t } = useTranslation();
  const [loadingUrl, setLoadingUrl] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortAlpha, setSortAlpha] = useState(false);
  const [syncStatuses, setSyncStatuses] = useState<Map<string, 'syncing' | 'done' | 'error'>>(new Map());

  const displayedFeeds = useMemo(() => {
    let result = feeds;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(f => (f.title || '').toLowerCase().includes(q));
    }
    if (sortAlpha) {
      result = [...result].sort((a, b) =>
        (a.title || '').localeCompare(b.title || '')
      );
    }
    return result;
  }, [feeds, searchQuery, sortAlpha]);

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

  const isSyncingAll = syncStatuses.size > 0 && [...syncStatuses.values()].some(s => s === 'syncing');
  const syncDoneCount = [...syncStatuses.values()].filter(s => s !== 'syncing').length;

  const handleSyncAll = useCallback(async () => {
    if (isSyncingAll) return;
    const initial = new Map<string, 'syncing' | 'done' | 'error'>();
    feeds.forEach(f => initial.set(f.url, 'syncing'));
    setSyncStatuses(new Map(initial));
    let errorCount = 0;
    await Promise.allSettled(
      feeds.map(async (feed) => {
        try {
          const parsed = await window.api.parseFeed(feed.url);
          if (currentFeed?.url === feed.url) {
            setCurrentFeed({ ...parsed, url: feed.url });
          }
          setSyncStatuses(prev => new Map(prev).set(feed.url, 'done'));
        } catch {
          errorCount++;
          setSyncStatuses(prev => new Map(prev).set(feed.url, 'error'));
        }
      })
    );
    toast.show(t('toast.sync_complete', 'Sync completato'), 'success');
    if (errorCount > 0) toast.show(t('toast.feed_error'), 'error');
    setTimeout(() => setSyncStatuses(new Map()), 2500);
  }, [isSyncingAll, feeds, currentFeed, setCurrentFeed, toast, t]);

  useEffect(() => {
    const onSyncAll = () => handleSyncAll();
    window.addEventListener('feeddownloader:syncall', onSyncAll);
    return () => window.removeEventListener('feeddownloader:syncall', onSyncAll);
  }, [handleSyncAll]);

  return (
    <aside
      className="flex flex-col h-full shrink-0"
      style={{ width: width ? `${width}px` : '456px', background: 'var(--color-surface-container-low)' }}
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
          className="hover-text-primary transition-colors p-1"
          style={{ color: 'var(--color-on-surface-variant)' }}
          title={t('settings.title')}
        >
          <Icon name="settings" size={20} />
        </button>
      </div>

      {/* Tab bar */}
      <div className="flex px-4 pb-3 gap-1">
        <button
          onClick={() => setViewMode('feeds')}
          className="flex-1 py-1.5 text-xs font-semibold rounded-lg transition-colors"
          style={{
            fontFamily: 'var(--font-label)',
            background: viewMode === 'feeds' ? 'var(--color-primary-container)' : 'transparent',
            color: viewMode === 'feeds' ? 'var(--color-primary)' : 'var(--color-on-surface-variant)',
          }}
        >
          {t('sidebar.tab_feeds')}
        </button>
        <button
          onClick={() => setViewMode('archive')}
          className="flex-1 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5"
          style={{
            fontFamily: 'var(--font-label)',
            background: viewMode === 'archive' ? 'var(--color-primary-container)' : 'transparent',
            color: viewMode === 'archive' ? 'var(--color-primary)' : 'var(--color-on-surface-variant)',
          }}
        >
          <Icon name="inventory_2" size={12} />
          {t('sidebar.tab_archive')}
        </button>
      </div>

      {/* Search + sort bar */}
      {viewMode === 'feeds' && feeds.length > 0 && (
        <div className="px-3 pb-2 flex gap-2">
          <div
            className="flex-1 flex items-center gap-2 px-3 py-2 rounded-lg"
            style={{ background: 'var(--color-surface-container-high)' }}
          >
            <Icon name="search" size={14} style={{ color: 'var(--color-on-surface-variant)', flexShrink: 0 }} />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder={t('sidebar.search_placeholder', 'Cerca feed...')}
              className="flex-1 bg-transparent text-sm outline-none min-w-0"
              style={{ fontFamily: 'var(--font-label)', color: 'var(--color-on-surface)' }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="hover-text-surface"
                style={{ color: 'var(--color-on-surface-variant)', flexShrink: 0 }}
              >
                <Icon name="close" size={14} />
              </button>
            )}
          </div>
          <button
            onClick={() => setSortAlpha(v => !v)}
            title={t('sidebar.sort_alpha', 'Ordina A–Z')}
            className={`p-2 rounded-lg transition-colors shrink-0 ${!sortAlpha ? 'hover-text-surface' : ''}`}
            style={{
              background: sortAlpha ? 'var(--color-primary-container)' : 'var(--color-surface-container-high)',
              color: sortAlpha ? 'var(--color-primary)' : 'var(--color-on-surface-variant)',
            }}
          >
            <Icon name="sort_by_alpha" size={16} />
          </button>
        </div>
      )}

      {/* Feed list */}
      <div className="flex-1 overflow-y-auto custom-scrollbar px-3 space-y-1">
        {viewMode === 'archive' && (
          <div
            className="flex flex-col items-center justify-center mt-10 gap-3"
            style={{ color: 'var(--color-on-surface-variant)' }}
          >
            <Icon name="inventory_2" size={36} style={{ opacity: 0.35 }} />
            <span className="text-xs text-center px-4" style={{ fontFamily: 'var(--font-label)' }}>
              {t('sidebar.archive_mode_hint')}
            </span>
          </div>
        )}

        {viewMode === 'feeds' && feeds.length === 0 && (
          <div
            className="text-center text-sm mt-10 px-4"
            style={{ color: 'var(--color-on-surface-variant)' }}
          >
            {t('sidebar.no_feeds')}
          </div>
        )}

        {viewMode === 'feeds' && feeds.length > 0 && displayedFeeds.length === 0 && (
          <div
            className="text-center text-sm mt-10 px-4"
            style={{ color: 'var(--color-on-surface-variant)' }}
          >
            {t('sidebar.no_results', 'Nessun risultato')}
          </div>
        )}

        {viewMode === 'feeds' && displayedFeeds.map((feed) => {
          const imageUrl = typeof feed.image === 'string' ? feed.image : feed.image?.url;
          const isActive = currentFeed?.url === feed.url;
          const isLoading = loadingUrl === feed.url;

          return (
            <div
              key={feed.url}
              onClick={() => handleSelectFeed(feed.url)}
              className={clsx(
                'feed-item flex items-center gap-3 p-3 cursor-pointer group transition-all duration-200 active:scale-[0.98]',
                isActive
                  ? 'feed-item-active rounded-r-lg border-l-2'
                  : 'rounded-lg border-l-2 border-transparent'
              )}
              style={isActive ? {
                borderLeftColor: 'var(--color-primary)',
                background: 'var(--color-surface-container-high)',
                color: 'var(--color-primary)',
              } : {
                color: 'var(--color-on-surface-variant)',
              }}
            >
              {/* Thumbnail */}
              {(() => {
                const syncStatus = syncStatuses.get(feed.url);
                return (
                  <div
                    className="w-10 h-10 rounded shrink-0 overflow-hidden flex items-center justify-center"
                    style={{ background: 'var(--color-surface-container-high)' }}
                  >
                    {isLoading ? (
                      <Icon name="progress_activity" size={18} className="animate-spin" style={{ color: 'var(--color-primary)' }} />
                    ) : syncStatus === 'syncing' ? (
                      <Icon name="sync" size={18} className="animate-spin" style={{ color: 'var(--color-primary)' }} />
                    ) : syncStatus === 'done' ? (
                      <Icon name="check_circle" size={18} filled style={{ color: 'var(--color-secondary)' }} />
                    ) : syncStatus === 'error' ? (
                      <Icon name="error" size={18} filled style={{ color: 'var(--color-error)' }} />
                    ) : imageUrl ? (
                      <img src={imageUrl} className={clsx('w-full h-full object-cover transition-all', !isActive && 'grayscale group-hover:grayscale-0')} alt={feed.title || ''} />
                    ) : (
                      <Icon name="podcasts" size={18} />
                    )}
                  </div>
                );
              })()}

              {/* Info */}
              <div className="min-w-0 flex-1">
                <h3
                  className="text-sm font-bold truncate"
                  style={{ fontFamily: 'var(--font-label)' }}
                >
                  {feed.title || t('sidebar.untitled', 'Untitled')}
                </h3>
                <div className="flex items-center gap-2 mt-0.5">
                  <p
                    className="text-[10px] truncate opacity-70"
                    style={{ fontFamily: 'var(--font-label)' }}
                  >
                    {feed.lastUpdated
                      ? new Date(feed.lastUpdated).toLocaleDateString()
                      : '—'}
                  </p>
                  {feed.newCount != null && feed.newCount > 0 && (
                    <span
                      className="shrink-0 rounded-full px-1.5 font-extrabold"
                      style={{
                        background: 'var(--color-primary)',
                        color: 'var(--color-on-primary-fixed)',
                        fontSize: '9px',
                        lineHeight: '14px',
                      }}
                    >
                      {feed.newCount}
                    </span>
                  )}
                </div>
              </div>

              {/* Remove button */}
              <button
                onClick={(e) => handleRemoveFeed(e, feed.url)}
                className="hover-danger opacity-0 group-hover:opacity-100 p-1 rounded transition-all"
                style={{ color: 'var(--color-on-surface-variant)' }}
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
        {viewMode === 'feeds' && feeds.length > 0 && (
          <button
            onClick={handleSyncAll}
            disabled={isSyncingAll}
            className="btn-primary-gradient w-full py-2 text-xs transition-all active:scale-[0.97] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <Icon name="sync" size={14} className={isSyncingAll ? 'animate-spin' : ''} />
            {isSyncingAll
              ? t('sidebar.syncing_count', { done: syncDoneCount, total: feeds.length })
              : t('sidebar.sync_all', 'Sincronizza Tutti')}
          </button>
        )}

        {/* Download path display */}
        {downloadPath && (
          <button
            onClick={() => window.api.openFolder(downloadPath)}
            className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left hover-bg-container transition-colors"
            style={{ background: 'var(--color-surface-container-high)' }}
            title={downloadPath}
          >
            <Icon name="folder" size={14} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
            <span
              className="text-[10px] truncate"
              style={{ fontFamily: 'var(--font-label)', color: 'var(--color-on-surface-variant)' }}
            >
              {downloadPath.replace(/\\/g, '/').split('/').slice(-2).join('/')}
            </span>
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
