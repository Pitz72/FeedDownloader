import { useTranslation } from 'react-i18next';
import { useShallow } from 'zustand/react/shallow';
import { BookOpen, Download, RefreshCw, RotateCw, Search, Settings, Sparkles, X } from 'lucide-react';
import { useStore, selectQueueCounts } from '../store/useStore';
import { useOnlineStatus } from '../hooks/useOnlineStatus';
import { Button, IconButton } from './ui/Button';
import { StatusDot } from './ui/Controls';
import { cn } from '../lib/cn';

const isMac = window.api?.platform === 'darwin';

interface Props {
    onCheckAll: () => void;
    onOpenPalette: () => void;
    onOpenGuide: () => void;
    onOpenSettings: () => void;
}

/**
 * Barra superiore (impianto Titan): marchio, stato della coda di download e i
 * comandi globali. Lo stato è detto a parole, il pallino lo accompagna soltanto.
 */
export function TopBar({ onCheckAll, onOpenPalette, onOpenGuide, onOpenSettings }: Props) {
    const { t } = useTranslation();
    const isOnline = useOnlineStatus();
    const counts = useStore(useShallow(selectQueueCounts));
    const queueState = useStore(s => s.queueState);
    const refresh = useStore(s => s.refresh);
    const feedsCount = useStore(s => s.feeds.length);
    const setView = useStore(s => s.setView);
    const view = useStore(s => s.view);

    const { run } = queueState;
    const settled = run.completed + run.failed + run.cancelled;

    let tone: 'success' | 'warning' | 'neutral' | 'danger' = 'neutral';
    let status = t('queue.status_idle');
    let detail = run.total > 0 ? t('queue.status_last_run', { done: run.completed, failed: run.failed }) : '';
    if (!isOnline) {
        tone = 'danger';
        status = t('queue.status_offline');
        detail = counts.total > 0 ? t('queue.status_waiting', { count: counts.total }) : t('queue.status_offline_hint');
    } else if (queueState.paused && counts.total > 0) {
        tone = 'warning';
        status = t('queue.status_paused');
        detail = t('queue.status_waiting', { count: counts.total });
    } else if (counts.total > 0) {
        tone = 'success';
        status = t('queue.status_running', { count: counts.active });
        detail = t('queue.status_progress', { done: settled, total: run.total });
    }

    return (
        <header className="flex h-14 shrink-0 items-center gap-4 border-b border-line bg-surface-1 px-4" style={isMac ? { paddingLeft: 84 } : undefined}>
            <div className="flex min-w-0 items-center gap-3">
                <img src="./logo.png" alt="" className="h-8 w-8 shrink-0" />
                <div className="min-w-0 leading-tight">
                    <p className="truncate text-base font-semibold text-fg">{t('app.title')}</p>
                    <p className="truncate text-xs text-fg-3">{t('app.edition')}</p>
                </div>
            </div>

            <div className="ml-auto flex min-w-0 items-center gap-2">
                <UpdateNotice />

                {/* Stato della coda: è anche la porta per la vista Download */}
                <button
                    type="button"
                    onClick={() => setView('downloads')}
                    aria-current={view === 'downloads' ? 'page' : undefined}
                    title={t('queue.open_downloads')}
                    className={cn(
                        'flex min-w-0 items-center gap-2.5 rounded-full border border-line bg-surface-2 py-1 pl-3 pr-4 transition-colors hover:border-line-strong',
                    )}
                >
                    <StatusDot tone={tone} pulse={tone === 'success'} />
                    {/* Solo lo stato è una regione live: annunciato quando cambia, non a ogni byte. */}
                    <span role="status" className="whitespace-nowrap text-sm font-semibold text-fg">{status}</span>
                    {detail && <span className="tabular hidden max-w-[260px] truncate text-sm text-fg-3 lg:inline">{detail}</span>}
                </button>

                <Button
                    variant="ghost"
                    icon={RefreshCw}
                    loading={!!refresh}
                    disabled={!isOnline || feedsCount === 0}
                    onClick={onCheckAll}
                    title={t('topbar.check_all_hint')}
                    aria-label={t('topbar.check_all')}
                >
                    {/* Sotto i 1024 px resta l'icona: il nome per i lettori di schermo è nell'aria-label */}
                    <span className="tabular hidden lg:inline">
                        {refresh ? t('topbar.checking', { done: refresh.done, total: refresh.total }) : t('topbar.check_all')}
                    </span>
                </Button>

                <div className="h-6 w-px bg-line" aria-hidden="true" />

                <IconButton icon={Search} label={`${t('topbar.search')} (${isMac ? '⌘K' : 'Ctrl+K'})`} onClick={onOpenPalette} />
                <IconButton icon={BookOpen} label={t('help.title')} onClick={onOpenGuide} />
                <IconButton icon={Settings} label={`${t('settings.title')} (${isMac ? '⌘,' : 'Ctrl+,'})`} onClick={onOpenSettings} />
            </div>
        </header>
    );
}

/**
 * N1 — avviso di aggiornamento sempre visibile mentre ce n'è uno disponibile,
 * in scaricamento o pronto. Col consenso (standard Titan): «Scarica», poi
 * «Riavvia e installa».
 */
function UpdateNotice() {
    const { t } = useTranslation();
    const status = useStore(s => s.updateStatus);
    const dismissed = useStore(s => s.updateNoticeDismissed);
    const setDismissed = useStore(s => s.setUpdateNoticeDismissed);
    const type = status.type;
    if (dismissed || (type !== 'available' && type !== 'downloading' && type !== 'ready')) return null;

    return (
        <div role="status" className="flex items-center gap-2 rounded-full border border-line-strong bg-surface-3 py-1 pl-3 pr-1 text-sm">
            <Sparkles size={14} className="text-accent" aria-hidden="true" />
            <span className="whitespace-nowrap text-fg-2">
                {type === 'available' && t('update.available_short', { version: status.version })}
                {type === 'downloading' && t('update.downloading_short', { percent: status.percent })}
                {type === 'ready' && t('update.ready_short')}
            </span>
            {type === 'available' && (
                <Button size="sm" variant="primary" icon={Download} className="h-7" onClick={() => void window.api.downloadUpdate()}>{t('update.download')}</Button>
            )}
            {type === 'ready' && (
                <Button size="sm" variant="primary" icon={RotateCw} className="h-7" onClick={() => void window.api.installUpdate()}>{t('update.install')}</Button>
            )}
            <IconButton icon={X} size="sm" className="h-7 w-7" label={t('update.hide')} onClick={() => setDismissed(true)} />
        </div>
    );
}
