import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useShallow } from 'zustand/react/shallow';
import { Virtuoso } from 'react-virtuoso';
import {
    AlertTriangle, CheckCircle2, Clock, Download, FolderOpen, Loader2, Pause, Play, RotateCw, Square, Trash2, WifiOff, X,
} from 'lucide-react';
import type { CompletedDownload, FailedDownload, PendingDownloads, QueueItem } from '../../shared/types';
import { useStore, selectQueueCounts } from '../store/useStore';
import { useOnlineStatus } from '../hooks/useOnlineStatus';
import { useToast } from './ui/Toast';
import { Button, IconButton } from './ui/Button';
import { EmptyState, ProgressBar, Stat, TabPanel, Tabs } from './ui/Controls';
import { ConfirmDialog } from './ui/ConfirmDialog';
import { errorKey } from '../lib/actions';
import { formatDate, formatEta } from '../lib/dates';
import { formatBytes, formatSpeed } from '../utils/format';
import { cn } from '../lib/cn';

type Tab = 'queue' | 'failed' | 'done';

/** Una riga della coda: si abbona solo al proprio avanzamento. */
function QueueRow({ item }: { item: QueueItem }) {
    const { t, i18n } = useTranslation();
    const progress = useStore(s => s.downloads[item.url]);
    const active = item.status === 'downloading';
    const paused = item.status === 'paused';
    const percent = progress && progress.total > 0 ? Math.round((progress.loaded / progress.total) * 100) : null;

    return (
        <div role="listitem" className="flex items-center gap-3 border-b border-line px-4 py-2.5">
            <span className={cn('flex h-8 w-8 shrink-0 items-center justify-center rounded-md', active ? 'bg-surface-4 text-accent' : paused ? 'bg-warning-soft text-warning' : 'bg-surface-3 text-fg-3')} aria-hidden="true">
                {active ? <Loader2 size={15} className="animate-spin" /> : paused ? <Pause size={15} /> : <Clock size={15} />}
            </span>
            <div className="min-w-0 flex-1">
                <p className="truncate text-base font-medium text-fg">{item.title}</p>
                <p className="truncate text-sm text-fg-3">
                    {item.podcastTitle}
                    {' · '}
                    {active ? t('downloads.state_active') : paused ? t('downloads.state_paused') : t('downloads.state_waiting')}
                </p>
                {(active || paused) && (
                    <div className="mt-1.5 flex items-center gap-3">
                        <ProgressBar size="sm" className="max-w-md" value={paused ? (percent ?? 0) : percent} tone={paused ? 'warning' : 'primary'} label={t('episodes.progress_label', { title: item.title })} />
                        <span className="tabular shrink-0 text-xs text-fg-3">
                            {percent !== null ? `${percent}%` : formatBytes(progress?.loaded ?? 0, i18n.language)}
                            {active && progress?.speed ? ` · ${formatSpeed(progress.speed, i18n.language)}` : ''}
                            {active && progress?.eta ? ` · ${formatEta(progress.eta)}` : ''}
                        </span>
                    </div>
                )}
            </div>
            {paused
                ? <IconButton icon={Play} size="sm" label={t('downloads.resume_one', { title: item.title })} onClick={() => void window.api.resumeDownload(item.taskId)} />
                : <IconButton icon={Pause} size="sm" label={t('downloads.pause_one', { title: item.title })} onClick={() => void window.api.pauseDownload(item.taskId)} />}
            <IconButton icon={X} size="sm" variant="danger-ghost" label={t('downloads.cancel_one', { title: item.title })} onClick={() => void window.api.cancelDownload(item.taskId)} />
        </div>
    );
}

function FailureRow({ failure }: { failure: FailedDownload }) {
    const { t, i18n } = useTranslation();
    const retry = useStore(s => s.retryFailures);
    const dismiss = useStore(s => s.dismissFailure);
    const url = failure.request?.url;
    return (
        <div role="listitem" className="flex items-center gap-3 border-b border-line px-4 py-2.5">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-danger-soft text-danger" aria-hidden="true"><AlertTriangle size={15} /></span>
            <div className="min-w-0 flex-1">
                <p className="truncate text-base font-medium text-fg">{failure.title}</p>
                <p className="truncate text-sm text-fg-3">
                    {failure.podcastTitle} · <span className="text-danger">{t(errorKey(failure.errorCode))}</span>
                    <span className="font-mono text-xs"> ({failure.errorCode})</span>
                    {failure.failedAt && <> · {formatDate(failure.failedAt, i18n.language, { hour: '2-digit', minute: '2-digit' })}</>}
                </p>
            </div>
            {url && <IconButton icon={RotateCw} size="sm" label={t('downloads.retry_one', { title: failure.title })} onClick={() => void retry([url])} />}
            {url && <IconButton icon={X} size="sm" label={t('downloads.dismiss_one', { title: failure.title })} onClick={() => dismiss(url)} />}
        </div>
    );
}

function CompletedRow({ done }: { done: CompletedDownload }) {
    const { t, i18n } = useTranslation();
    const toast = useToast();
    return (
        <div role="listitem" className="flex items-center gap-3 border-b border-line px-4 py-2.5">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-success-soft text-success" aria-hidden="true"><CheckCircle2 size={15} /></span>
            <div className="min-w-0 flex-1">
                <p className="truncate text-base font-medium text-fg">{done.title}</p>
                <p className="tabular truncate text-sm text-fg-3">
                    {done.podcastTitle}
                    {done.fileSize != null && <> · {formatBytes(done.fileSize, i18n.language)}</>}
                    {' · '}{formatDate(done.completedAt, i18n.language, { hour: '2-digit', minute: '2-digit' })}
                </p>
            </div>
            <IconButton
                icon={FolderOpen}
                size="sm"
                label={t('episodes.reveal', { title: done.title })}
                onClick={async () => { if (!(await window.api.showArchivedEpisode(done.guid, done.feedUrl))) toast.error(t('toast.file_missing')); }}
            />
        </div>
    );
}

/**
 * Vista Download: la coda per intero (attivi, in attesa, in pausa), i non
 * riusciti con il motivo e «Riprova», i completati della sessione, e i
 * download rimasti in sospeso dall'ultima chiusura.
 */
export function DownloadsView() {
    const { t, i18n } = useTranslation();
    const toast = useToast();
    const isOnline = useOnlineStatus();
    const queueItems = useStore(s => s.queueItems);
    const counts = useStore(useShallow(selectQueueCounts));
    const queueState = useStore(s => s.queueState);
    const failures = useStore(s => s.failures);
    const completed = useStore(s => s.completed);
    const { pauseQueue, resumeQueue, stopQueue, retryFailures, clearFailures, clearCompleted } = useStore(useShallow(s => ({
        pauseQueue: s.pauseQueue, resumeQueue: s.resumeQueue, stopQueue: s.stopQueue,
        retryFailures: s.retryFailures, clearFailures: s.clearFailures, clearCompleted: s.clearCompleted,
    })));
    const [tab, setTab] = useState<Tab>('queue');
    const [confirmStop, setConfirmStop] = useState(false);
    const [pending, setPending] = useState<PendingDownloads | null>(null);

    useEffect(() => {
        window.api.getPendingDownloads().then(p => setPending(p.count > 0 ? p : null)).catch(() => { });
    }, []);

    // attivi prima, poi in attesa, poi in pausa (l'ordine della coda resta dentro ogni gruppo)
    const ordered = useMemo(() => {
        const rank = (q: QueueItem) => (q.status === 'downloading' ? 0 : q.status === 'pending' ? 1 : 2);
        return queueItems.map((q, i) => ({ q, i })).sort((a, b) => rank(a.q) - rank(b.q) || a.i - b.i).map(x => x.q);
    }, [queueItems]);

    const { run } = queueState;
    const settled = run.completed + run.failed + run.cancelled;
    const runPercent = run.total > 0 ? (settled / run.total) * 100 : 0;
    const scrollParent = document.getElementById('main-content');

    const resumePending = async () => {
        const n = await window.api.resumePendingDownloads();
        setPending(null);
        toast.success(t('downloads.pending_resumed', { count: n }));
    };
    const discardPending = async () => {
        await window.api.discardPendingDownloads();
        setPending(null);
    };

    return (
        <div className="flex min-h-full flex-col">
            <section aria-labelledby="downloads-heading" className="flex flex-wrap items-end justify-between gap-4 border-b border-line px-6 pb-5 pt-5">
                <div className="min-w-0">
                    <h1 id="downloads-heading" className="text-2xl font-semibold text-fg">{t('downloads.title')}</h1>
                    <p className="mt-1 text-sm text-fg-3">
                        {!isOnline ? t('downloads.subtitle_offline')
                            : queueState.paused && counts.total > 0 ? t('downloads.subtitle_paused')
                            : counts.total > 0 ? t('downloads.subtitle_running')
                            : t('downloads.subtitle_idle')}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                        {queueState.paused
                            ? <Button size="sm" variant="primary" icon={Play} disabled={counts.total === 0} onClick={() => void resumeQueue()}>{t('downloads.resume_all')}</Button>
                            : <Button size="sm" icon={Pause} disabled={counts.total === 0} onClick={() => void pauseQueue()}>{t('downloads.pause_all')}</Button>}
                        <Button size="sm" variant="danger-ghost" icon={Square} disabled={counts.total === 0} onClick={() => setConfirmStop(true)}>{t('downloads.stop_all')}</Button>
                    </div>
                </div>
                <dl className="flex flex-wrap gap-2" aria-label={t('downloads.stats_label')}>
                    <Stat label={t('downloads.stat_active')} value={counts.active} tone={counts.active > 0 ? 'accent' : undefined} />
                    <Stat label={t('downloads.stat_waiting')} value={counts.waiting + counts.paused} />
                    <Stat label={t('downloads.stat_done')} value={run.completed} tone={run.completed > 0 ? 'success' : undefined} hint={t('downloads.stat_run_hint')} />
                    <Stat label={t('downloads.stat_failed')} value={run.failed} tone={run.failed > 0 ? 'danger' : undefined} hint={t('downloads.stat_run_hint')} />
                </dl>
            </section>

            {run.total > 0 && (
                <div className="border-b border-line px-6 py-3">
                    <div className="flex items-center justify-between text-sm">
                        <span className="text-fg-2">{t('downloads.run_progress', { done: settled, total: run.total })}</span>
                        <span className="tabular font-medium text-fg">{Math.round(runPercent)}%</span>
                    </div>
                    <ProgressBar className="mt-2" value={runPercent} label={t('downloads.run_progress', { done: settled, total: run.total })} tone={counts.total === 0 ? 'success' : 'primary'} />
                </div>
            )}

            {!isOnline && counts.total > 0 && (
                <div role="status" className="mx-6 mt-4 flex items-center gap-3 rounded-lg border border-line bg-warning-soft px-4 py-3 text-sm text-warning">
                    <WifiOff size={16} aria-hidden="true" />
                    {t('downloads.offline_notice')}
                </div>
            )}

            {pending && (
                <div role="region" aria-label={t('downloads.pending_title')} className="mx-6 mt-4 flex flex-wrap items-center gap-3 rounded-lg border border-line-strong bg-surface-3 px-4 py-3">
                    <Download size={18} className="text-accent" aria-hidden="true" />
                    <div className="min-w-0 flex-1">
                        <p className="text-base font-medium text-fg">{t('downloads.pending_title')}</p>
                        <p className="truncate text-sm text-fg-3">{t('downloads.pending_body', { count: pending.count, podcasts: pending.podcasts.slice(0, 3).join(', ') + (pending.podcasts.length > 3 ? '…' : '') })}</p>
                    </div>
                    <Button size="sm" variant="ghost" onClick={() => void discardPending()}>{t('downloads.pending_discard')}</Button>
                    <Button size="sm" variant="primary" icon={Play} disabled={!isOnline} onClick={() => void resumePending()}>{t('downloads.pending_resume')}</Button>
                </div>
            )}

            <Tabs
                idBase="downloads"
                label={t('downloads.tabs_label')}
                value={tab}
                onChange={setTab}
                className="mt-2 px-6"
                items={[
                    { id: 'queue', label: t('downloads.tab_queue'), icon: Download, count: counts.total },
                    { id: 'failed', label: t('downloads.tab_failed'), icon: AlertTriangle, count: failures.length },
                    { id: 'done', label: t('downloads.tab_done'), icon: CheckCircle2, count: completed.length },
                ]}
            />

            <TabPanel idBase="downloads" id={tab} className="flex-1">
                {tab === 'queue' && (ordered.length === 0
                    ? <EmptyState icon={Download} title={t('downloads.empty_queue')} text={t('downloads.empty_queue_text')} />
                    : <div role="list" aria-label={t('downloads.tab_queue')}><Virtuoso customScrollParent={scrollParent ?? undefined} data={ordered} computeItemKey={(_, q) => q.taskId} itemContent={(_, q) => <QueueRow item={q} />} /></div>)}

                {tab === 'failed' && (failures.length === 0
                    ? <EmptyState icon={CheckCircle2} title={t('downloads.empty_failed')} />
                    : (
                        <>
                            <div className="flex flex-wrap items-center justify-end gap-2 px-6 py-3">
                                <Button size="sm" variant="ghost" icon={Trash2} onClick={clearFailures}>{t('downloads.clear_list')}</Button>
                                <Button size="sm" variant="primary" icon={RotateCw} disabled={!isOnline} onClick={async () => {
                                    const n = await retryFailures();
                                    toast.success(t('toast.queued', { count: n }));
                                }}>{t('downloads.retry_all', { count: failures.length })}</Button>
                            </div>
                            <div role="list" aria-label={t('downloads.tab_failed')} className="border-t border-line">
                                {failures.map(f => <FailureRow key={f.request?.url ?? `${f.title}-${f.failedAt}`} failure={f} />)}
                            </div>
                        </>
                    ))}

                {tab === 'done' && (completed.length === 0
                    ? <EmptyState icon={CheckCircle2} title={t('downloads.empty_done')} text={t('downloads.empty_done_text')} />
                    : (
                        <>
                            <div className="flex items-center justify-between px-6 py-3 text-sm text-fg-3">
                                <span>{t('downloads.done_note', { total: completed.reduce((n, c) => n + (c.fileSize ?? 0), 0) > 0 ? formatBytes(completed.reduce((n, c) => n + (c.fileSize ?? 0), 0), i18n.language) : '—' })}</span>
                                <Button size="sm" variant="ghost" icon={Trash2} onClick={clearCompleted}>{t('downloads.clear_list')}</Button>
                            </div>
                            <div role="list" aria-label={t('downloads.tab_done')} className="border-t border-line">
                                <Virtuoso customScrollParent={scrollParent ?? undefined} data={completed} computeItemKey={(_, c) => c.url} itemContent={(_, c) => <CompletedRow done={c} />} />
                            </div>
                        </>
                    ))}
            </TabPanel>

            <ConfirmDialog
                open={confirmStop}
                title={t('downloads.stop_title')}
                message={t('downloads.stop_body', { count: counts.total })}
                confirmLabel={t('downloads.stop_go')}
                tone="danger"
                icon={Square}
                onConfirm={() => { setConfirmStop(false); void stopQueue(); }}
                onCancel={() => setConfirmStop(false)}
            />
        </div>
    );
}
