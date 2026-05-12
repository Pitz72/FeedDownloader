import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useStore, AppState } from '../store/useStore';
import clsx from 'clsx';
import { useToast } from '../context/ToastContext';
import { useTranslation } from 'react-i18next';
import { ConfirmModal } from './ConfirmModal';
import type { FeedEntry } from '../../shared/types';

interface SidebarProps {
  onSettingsOpen: () => void;
  width?: number;
}

// Deterministic 1..6 tint hash from a string (feed URL)
function tintFor(seed: string): number {
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = ((h << 5) - h + seed.charCodeAt(i)) | 0;
  }
  return (Math.abs(h) % 6) + 1;
}

// Initials from a feed title (first letter of first two words, fallback ?)
function initialsFor(title: string | undefined | null): string {
  if (!title) return '?';
  const parts = title.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return '?';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
}

function formatRelativeDate(value: number | string | undefined | null, locale: string): string {
  if (!value) return '—';
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return '—';
  // Italian-ish short: "12 mag"
  return d.toLocaleDateString(locale, { day: '2-digit', month: 'short' });
}

export const Sidebar: React.FC<SidebarProps> = ({ onSettingsOpen, width }) => {
  const [feeds, setFeeds] = useState<FeedEntry[]>([]);
  const { currentFeed, setCurrentFeed } = useStore((state: AppState) => state);
  const downloadPath = useStore((state: AppState) => state.downloadPath);
  const viewMode = useStore((state: AppState) => state.viewMode);
  const setViewMode = useStore((state: AppState) => state.setViewMode);
  const toast = useToast();
  const { t, i18n } = useTranslation();
  const [loadingUrl, setLoadingUrl] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortAlpha, setSortAlpha] = useState(false);
  const [syncStatuses, setSyncStatuses] = useState<Map<string, 'syncing' | 'done' | 'error'>>(new Map());
  const [confirmState, setConfirmState] = useState<{ isOpen: boolean; url: string }>({ isOpen: false, url: '' });

  const displayedFeeds = useMemo(() => {
    let result = feeds;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(f => (f.title || '').toLowerCase().includes(q));
    }
    if (sortAlpha) {
      result = [...result].sort((a, b) => (a.title || '').localeCompare(b.title || ''));
    }
    return result;
  }, [feeds, searchQuery, sortAlpha]);

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

  const isOnline = typeof navigator !== 'undefined' ? navigator.onLine : true;
  const folderShort = downloadPath
    ? downloadPath.replace(/\\/g, '/').split('/').filter(Boolean).slice(-2).join('/')
    : '';

  return (
    <>
      <aside className="sidebar" style={{ width: width ? `${width}px` : '360px' }}>

        {/* Header — brand + settings */}
        <header className="sb-header">
          <div className="sb-brand">
            <div className="sb-brand-mark" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 11a9 9 0 0 1 9 9"/>
                <path d="M4 4a16 16 0 0 1 16 16"/>
                <circle cx="5" cy="19" r="1.6" fill="currentColor"/>
              </svg>
            </div>
            <div className="sb-brand-text">
              <h1>{t('sidebar.my_feeds', 'I miei feed')}</h1>
              <p>{t('sidebar.subtitle', 'Feed Manager')}</p>
            </div>
          </div>
          <button
            type="button"
            className="icon-btn"
            onClick={onSettingsOpen}
            title={t('settings.title')}
            aria-label={t('settings.title')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="3"/>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
            </svg>
          </button>
        </header>

        {/* Tabs Feeds / Archivio */}
        <nav className="sb-tabs" role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={viewMode === 'feeds'}
            className={clsx('sb-tab', viewMode === 'feeds' && 'active')}
            onClick={() => setViewMode('feeds')}
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 11a9 9 0 0 1 9 9"/>
              <path d="M4 4a16 16 0 0 1 16 16"/>
              <circle cx="5" cy="19" r="1.6" fill="currentColor"/>
            </svg>
            {t('sidebar.tab_feeds', 'Feeds')}
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={viewMode === 'archive'}
            className={clsx('sb-tab', viewMode === 'archive' && 'active')}
            onClick={() => setViewMode('archive')}
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="4" width="20" height="5" rx="1"/>
              <path d="M4 9v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9"/>
              <path d="M10 13h4"/>
            </svg>
            {t('sidebar.tab_archive', 'Archivio')}
          </button>
        </nav>

        {/* Search + sort */}
        {viewMode === 'feeds' && feeds.length > 0 && (
          <div className="sb-search">
            <input
              type="text"
              className="sb-search-input"
              placeholder={t('sidebar.search_placeholder', 'Cerca feed…')}
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              aria-label={t('sidebar.search_placeholder', 'Cerca feed…')}
            />
            <button
              type="button"
              className={clsx('sb-sort', sortAlpha && 'active')}
              onClick={() => setSortAlpha(v => !v)}
              title={t('sidebar.sort_alpha', 'Ordina A–Z')}
              aria-pressed={sortAlpha}
              aria-label={t('sidebar.sort_alpha', 'Ordina A–Z')}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 11l4-7 4 7"/>
                <path d="M5 11h8"/>
                <path d="M5 17l4-3 4 3"/>
                <path d="M19 4v16M16 17l3 3 3-3"/>
              </svg>
            </button>
          </div>
        )}

        {/* Feed list */}
        <div className="sb-list">
          {viewMode === 'archive' && (
            <div className="sb-empty-feeds" style={{ marginTop: 20 }}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="4" width="20" height="5" rx="1"/>
                <path d="M4 9v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9"/>
                <path d="M10 13h4"/>
              </svg>
              <p>{t('sidebar.archive_mode_hint', "Stai consultando l'archivio. Le ricerche e i filtri sono attivi nell'area centrale.")}</p>
            </div>
          )}

          {viewMode === 'feeds' && feeds.length === 0 && (
            <div className="sb-empty-feeds">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 11a9 9 0 0 1 9 9"/>
                <path d="M4 4a16 16 0 0 1 16 16"/>
                <circle cx="5" cy="19" r="1.6" fill="currentColor"/>
              </svg>
              <p>{t('sidebar.no_feeds', "Nessun feed ancora.\nInizia incollando un URL RSS nel campo a destra.")}</p>
            </div>
          )}

          {viewMode === 'feeds' && feeds.length > 0 && displayedFeeds.length === 0 && (
            <div className="sb-empty-feeds">
              <p>{t('sidebar.no_results', 'Nessun risultato per la ricerca corrente.')}</p>
            </div>
          )}

          {viewMode === 'feeds' && displayedFeeds.map((feed) => {
            const imageUrl = typeof feed.image === 'string' ? feed.image : feed.image?.url;
            const isActive = currentFeed?.url === feed.url;
            const isLoading = loadingUrl === feed.url;
            const syncStatus = syncStatuses.get(feed.url);
            const tint = tintFor(feed.url);
            const initials = initialsFor(feed.title);

            return (
              <div
                key={feed.url}
                onClick={() => handleSelectFeed(feed.url)}
                className={clsx('feed-item', isActive && 'active', 'group')}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleSelectFeed(feed.url);
                  }
                }}
              >
                {syncStatus ? (
                  <div className={clsx('feed-sync-status', syncStatus)} aria-hidden="true">
                    {syncStatus === 'syncing' && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 12a9 9 0 1 1-6.2-8.5"/>
                      </svg>
                    )}
                    {syncStatus === 'done' && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    )}
                    {syncStatus === 'error' && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="12" y1="8" x2="12" y2="12"/>
                        <line x1="12" y1="16" x2="12.01" y2="16"/>
                      </svg>
                    )}
                  </div>
                ) : (
                  <div
                    className={clsx('feed-thumb', !imageUrl && `tint-${tint}`)}
                    aria-hidden="true"
                  >
                    {isLoading ? (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ animation: 'feedSyncSpin 1s linear infinite' }}>
                        <path d="M21 12a9 9 0 1 1-6.2-8.5"/>
                      </svg>
                    ) : imageUrl ? (
                      <img src={imageUrl} alt="" />
                    ) : (
                      <span>{initials}</span>
                    )}
                  </div>
                )}

                <div className="feed-info">
                  <p className="feed-title">{feed.title || t('sidebar.untitled', 'Senza titolo')}</p>
                  <div className="feed-meta">
                    <span>{formatRelativeDate(feed.lastUpdated, i18n.language || 'it')}</span>
                    {feed.newCount != null && feed.newCount > 0 && (
                      <span className="feed-badge">
                        {feed.newCount === 1
                          ? t('sidebar.new_count_one', '1 NUOVO')
                          : t('sidebar.new_count_other', '{{count}} NUOVI', { count: feed.newCount })}
                      </span>
                    )}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={(e) => handleRemoveFeed(e, feed.url)}
                  className="ep-action"
                  style={{ opacity: 0 }}
                  title={t('sidebar.remove', 'Rimuovi')}
                  aria-label={t('sidebar.remove', 'Rimuovi')}
                  onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.opacity = '1'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.opacity = '0'; }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="3 6 5 6 21 6"/>
                    <path d="M19 6l-2 14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L5 6"/>
                    <path d="M10 11v6M14 11v6"/>
                  </svg>
                </button>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <footer className="sb-footer">
          {viewMode === 'feeds' && feeds.length > 0 && (
            <button
              type="button"
              className="btn-primary-sync"
              onClick={handleSyncAll}
              disabled={isSyncingAll}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={isSyncingAll ? { animation: 'feedSyncSpin 1s linear infinite' } : undefined}>
                <path d="M3 12a9 9 0 0 1 15-6.7L21 8"/>
                <path d="M21 3v5h-5"/>
                <path d="M21 12a9 9 0 0 1-15 6.7L3 16"/>
                <path d="M3 21v-5h5"/>
              </svg>
              {isSyncingAll
                ? t('sidebar.syncing_count', { defaultValue: '{{done}} / {{total}}', done: syncDoneCount, total: feeds.length })
                : t('sidebar.sync_all', 'Sincronizza tutti')}
            </button>
          )}

          {downloadPath && (
            <button
              type="button"
              className="folder-pill"
              onClick={() => window.api.openFolder(downloadPath)}
              title={downloadPath}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
              </svg>
              <span className="path">{folderShort || downloadPath}</span>
            </button>
          )}

          <div className="sb-version">
            <span className={clsx('dot', !isOnline && 'offline')}>
              {isOnline ? t('sidebar.connected', 'Connesso') : t('sidebar.offline', 'Offline')}
            </span>
            <span>v{__APP_VERSION__}</span>
          </div>
        </footer>
      </aside>

      <ConfirmModal
        isOpen={confirmState.isOpen}
        title={t('confirm.remove_feed_title', 'Rimuovi Feed')}
        message={t('confirm.remove_feed')}
        variant="danger"
        onConfirm={confirmRemoveFeed}
        onCancel={() => setConfirmState({ isOpen: false, url: '' })}
      />
    </>
  );
};
