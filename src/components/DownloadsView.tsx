import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useShallow } from 'zustand/react/shallow';
import {
    AlertTriangle, CheckCircle2, Clock, Download, FolderOpen, History, Loader2, Pause, Play, RotateCw, Square, Trash2, X, type LucideIcon,
} from 'lucide-react';
import type { CompletedDownload, FailedDownload, PendingDownloads, QueueItem } from '../../shared/types';
import { useStore, selectQueueCounts } from '../store/useStore';
import { useOnlineStatus } from '../hooks/useOnlineStatus';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { useToast } from './ui/Toast';
import { Button, IconButton } from './ui/Button';
import { EmptyState, ProgressBar, Stat, TabPanel, Tabs } from './ui/Controls';
import { ConfirmDialog } from './ui/ConfirmDialog';
import { VirtualList } from './ui/VirtualList';
import { errorKey } from '../lib/actions';
import { formatDate, formatEta } from '../lib/dates';
import { formatBytes, formatSpeed } from '../utils/format';
import { cn } from '../lib/cn';

type Tab = 'queue' | 'failed' | 'done';

/** Sopra questa larghezza coda ed esiti stanno affiancati; sotto, a schede. */
const WIDE_QUERY = '(min-width: 1280px)';

/** Una riga della coda: si abbona solo al proprio avanzamento. */
function QueueRow({ item }: { item: QueueItem }) {
    const { t, i18n } = useTranslation();
    const progress = useStore(s => s.downloads[item.url]);
    const active = item.status === 'downloading';
    const paused = item.status === 'paused';
    const percent = progress && progress.total > 0 ? Math.round((progress.loaded / progress.total) * 100) : null;

    return (
        <div role="listitem" className="flex items-center gap-3 border-b border-line px-5 py-2.5">
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
        <div role="listitem" className="flex items-center gap-3 border-b border-line px-5 py-2.5">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-danger-soft text-danger" aria-hidden="true"><AlertTriangle size={15} /></span>
            <div className="min-w-0 flex-1">
                <p className="truncate text-base font-medium text-fg" title={failure.title}>{failure.title}</p>
                <p className="truncate text-sm text-fg-3">
                    <span className="text-danger">{t(errorKey(failure.errorCode))}</span>
                    <span className="font-mono text-xs"> ({failure.errorCode})</span>
                </p>
                <p className="truncate text-xs text-fg-3">
                    {failure.podcastTitle}
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
        <div role="listitem" className="flex items-center gap-3 border-b border-line px-5 py-2.5">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-success-soft text-success" aria-hidden="true"><CheckCircle2 size={15} /></span>
            <div className="min-w-0 flex-1">
                <p className="truncate text-base font-medium text-fg" title={done.title}>{done.title}</p>
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

/** Barra del titolo di un pannello: nome, conteggio e le azioni che lo riguardano. */
function PaneHeader({ id, icon: Icon, title, count, tone, children }: {
    id: string;
    icon: LucideIcon;
    title: string;
    count: number;
    tone?: 'danger' | 'success';
    children?: React.ReactNode;
}) {
    return (
        <div className="flex h-12 shrink-0 items-center gap-2 border-b border-line px-5">
            <Icon size={16} className={tone === 'danger' && count > 0 ? 'text-danger' : tone === 'success' && count > 0 ? 'text-success' : 'text-accent'} aria-hidden="true" />
            <h2 id={id} className="text-base font-semibold text-fg">{title}</h2>
            <span className="tabular rounded-full bg-surface-3 px-1.5 text-xs text-fg-2">{count}</span>
            <div className="ml-auto flex items-center gap-1">{children}</div>
        </div>
    );
}

/** Stato vuoto compatto per i pannelli della colonna destra. */
function PaneEmpty({ children }: { children: React.ReactNode }) {
    return <p className="px-5 py-4 text-sm text-fg-3">{children}</p>;
}

/**
 * Vista Download, impaginata per una finestra desktop orizzontale (modello
 * Titan): intestazione su una riga; poi la coda a sinistra e, in una colonna
 * fissa a destra, gli interrotti alla chiusura precedente, i non riusciti e i
 * completati. Ogni pannello scorre per conto suo. Sotto i 1280 px le tre liste
 * diventano schede.
 */
export function DownloadsView() {
    const { t, i18n } = useTranslation();
    const toast = useToast();
    const isOnline = useOnlineStatus();
    const wide = useMediaQuery(WIDE_QUERY);
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

    const completedBytes = useMemo(() => completed.reduce((n, c) => n + (c.fileSize ?? 0), 0), [completed]);

    const { run } = queueState;
    const settled = run.completed + run.failed + run.cancelled;
    const runPercent = run.total > 0 ? (settled / run.total) * 100 : 0;

    const resumePending = async () => {
        const n = await window.api.resumePendingDownloads();
        setPending(null);
        toast.success(t('downloads.pending_resumed', { count: n }));
    };
    const discardPending = async () => {
        await window.api.discardPendingDownloads();
        setPending(null);
    };
    const retryAll = async () => {
        const n = await retryFailures();
        toast.success(t('toast.queued', { count: n }));
    };

    // ── Contenuti dei pannelli (gli stessi, affiancati o a schede) ──
    const queueList = ordered.length === 0
        ? <EmptyState icon={Download} title={t('downloads.empty_queue')} text={t('downloads.empty_queue_text')} />
        : <VirtualList label={t('downloads.tab_queue')} data={ordered} itemKey={q => q.taskId} renderItem={q => <QueueRow item={q} />} />;

    const failureActions = failures.length > 0 && (
        <>
            <Button size="sm" variant="ghost" icon={Trash2} onClick={clearFailures}>{t('downloads.clear_list')}</Button>
            <Button size="sm" variant="primary" icon={RotateCw} disabled={!isOnline} onClick={() => void retryAll()}>{t('downloads.retry_all', { count: failures.length })}</Button>
        </>
    );
    const failureList = failures.length > 0 && (
        <div role="list" aria-label={t('downloads.tab_failed')} className="min-h-0 flex-1 overflow-y-auto">
            {failures.map(f => <FailureRow key={f.request?.url ?? `${f.title}-${f.failedAt}`} failure={f} />)}
        </div>
    );

    const completedActions = completed.length > 0 && (
        <Button size="sm" variant="ghost" icon={Trash2} onClick={clearCompleted}>{t('downloads.clear_list')}</Button>
    );
    const completedNote = completed.length > 0 && (
        <p className="tabular shrink-0 border-b border-line px-5 py-2 text-sm text-fg-3">
            {t('downloads.done_note', { total: completedBytes > 0 ? formatBytes(completedBytes, i18n.language) : '—' })}
        </p>
    );
    const completedList = completed.length > 0 && (
        <VirtualList label={t('downloads.tab_done')} data={completed} itemKey={c => c.url} renderItem={c => <CompletedRow done={c} />} />
    );

    const pendingCard = pending && (
        <section aria-labelledby="dl-pending" className={cn('shrink-0 bg-surface-3 px-5 py-4', wide ? 'border-b border-line' : 'mx-6 mt-4 rounded-lg border border-line-strong')}>
            <h2 id="dl-pending" className="flex items-center gap-2 text-base font-semibold text-fg"><History size={16} className="text-accent" aria-hidden="true" />{t('downloads.pending_title')}</h2>
            <p className="mt-1 text-sm text-fg-2">{t('downloads.pending_body', { count: pending.count, podcasts: pending.podcasts.slice(0, 3).join(', ') + (pending.podcasts.length > 3 ? '…' : '') })}</p>
            <div className="mt-3 flex flex-wrap justify-end gap-2">
                <Button size="sm" variant="ghost" onClick={() => void discardPending()}>{t('downloads.pending_discard')}</Button>
                <Button size="sm" variant="primary" icon={Play} disabled={!isOnline} onClick={() => void resumePending()}>{t('downloads.pending_resume')}</Button>
            </div>
        </section>
    );

    return (
        <div className="flex min-h-[480px] flex-1 flex-col">
            {/* ── Intestazione su una riga: titolo e stato, comandi della coda, cifre.
                 Completati e non riusciti hanno il loro pannello e la barra del lavoro. ── */}
            <section aria-labelledby="downloads-heading" className="flex flex-wrap items-center gap-x-6 gap-y-3 border-b border-line px-6 py-4">
                <div className="min-w-[240px] flex-1 max-xl:basis-full">
                    <h1 id="downloads-heading" className="text-xl font-semibold text-fg">{t('downloads.title')}</h1>
                    <p className="mt-0.5 text-sm text-fg-3">
                        {!isOnline ? t('downloads.subtitle_offline')
                            : queueState.paused && counts.total > 0 ? t('downloads.subtitle_paused')
                            : counts.total > 0 ? t('downloads.subtitle_running')
                            : t('downloads.subtitle_idle')}
                    </p>
                </div>
                <div className="flex shrink-0 flex-wrap gap-2">
                    {queueState.paused
                        ? <Button variant="primary" icon={Play} disabled={counts.total === 0} onClick={() => void resumeQueue()}>{t('downloads.resume_all')}</Button>
                        : <Button icon={Pause} disabled={counts.total === 0} onClick={() => void pauseQueue()}>{t('downloads.pause_all')}</Button>}
                    <Button variant="danger-ghost" icon={Square} disabled={counts.total === 0} onClick={() => setConfirmStop(true)}>{t('downloads.stop_all')}</Button>
                </div>
                <dl className="flex shrink-0 gap-2" aria-label={t('downloads.stats_label')}>
                    <Stat label={t('downloads.stat_active')} value={counts.active} tone={counts.active > 0 ? 'accent' : undefined} />
                    <Stat label={t('downloads.stat_waiting')} value={counts.waiting + counts.paused} />
                </dl>
            </section>

            {/* ── Avanzamento del lavoro, su una riga ── */}
            {run.total > 0 && (
                <div className="flex items-center gap-4 border-b border-line bg-surface-1 px-6 py-2.5">
                    <span className="tabular shrink-0 text-sm text-fg-2">{t('downloads.run_progress', { done: settled, total: run.total })}</span>
                    <ProgressBar className="flex-1" value={runPercent} label={t('downloads.run_progress', { done: settled, total: run.total })} tone={counts.total === 0 ? 'success' : 'primary'} />
                    <span className="tabular w-12 shrink-0 text-right text-sm font-medium text-fg">{Math.round(runPercent)}%</span>
                </div>
            )}

            {wide ? (
                <div className="grid min-h-0 flex-1 grid-cols-[minmax(0,1fr)_420px] divide-x divide-line">
                    <section aria-labelledby="dl-queue" className="flex min-h-0 flex-col">
                        <PaneHeader id="dl-queue" icon={Download} title={t('downloads.tab_queue')} count={counts.total} />
                        {queueList}
                    </section>

                    <div className="flex min-h-0 flex-col bg-surface-1">
                        {pendingCard}
                        <section aria-labelledby="dl-failed" className={cn('flex min-h-0 flex-col border-b border-line', failures.length > 0 ? 'max-h-[50%] shrink' : 'shrink-0')}>
                            <PaneHeader id="dl-failed" icon={AlertTriangle} title={t('downloads.tab_failed')} count={failures.length} tone="danger" />
                            {failures.length > 0 ? (
                                <>
                                    <div className="flex shrink-0 justify-end gap-2 border-b border-line px-5 py-2">{failureActions}</div>
                                    {failureList}
                                </>
                            ) : <PaneEmpty>{t('downloads.empty_failed')}</PaneEmpty>}
                        </section>
                        <section aria-labelledby="dl-done" className="flex min-h-0 flex-1 flex-col">
                            <PaneHeader id="dl-done" icon={CheckCircle2} title={t('downloads.tab_done')} count={completed.length} tone="success">{completedActions}</PaneHeader>
                            {completed.length > 0 ? <>{completedNote}{completedList}</> : <PaneEmpty>{t('downloads.empty_done_text')}</PaneEmpty>}
                        </section>
                    </div>
                </div>
            ) : (
                <div className="flex min-h-0 flex-1 flex-col">
                    {pendingCard}
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
                    <TabPanel idBase="downloads" id={tab} className="flex min-h-0 flex-1 flex-col">
                        {tab === 'queue' && queueList}
                        {tab === 'failed' && (failures.length === 0
                            ? <EmptyState icon={CheckCircle2} title={t('downloads.empty_failed')} />
                            : <><div className="flex shrink-0 justify-end gap-2 border-b border-line px-6 py-2.5">{failureActions}</div>{failureList}</>)}
                        {tab === 'done' && (completed.length === 0
                            ? <EmptyState icon={CheckCircle2} title={t('downloads.empty_done')} text={t('downloads.empty_done_text')} />
                            : (
                                <>
                                    <div className="flex shrink-0 items-center justify-between gap-3 border-b border-line px-6 py-2">
                                        <span className="tabular text-sm text-fg-3">{t('downloads.done_note', { total: completedBytes > 0 ? formatBytes(completedBytes, i18n.language) : '—' })}</span>
                                        {completedActions}
                                    </div>
                                    {completedList}
                                </>
                            ))}
                    </TabPanel>
                </div>
            )}

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
