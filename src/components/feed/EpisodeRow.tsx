import React from 'react';
import { useTranslation } from 'react-i18next';
import { Check, Download, FolderOpen, Loader2, X } from 'lucide-react';
import type { Episode, QueueItem } from '../../../shared/types';
import { getEnclosureUrl } from '../../../shared/getEnclosureUrl';
import { useStore } from '../../store/useStore';
import { Checkbox, ProgressBar } from '../ui/Controls';
import { IconButton } from '../ui/Button';
import { formatDate, formatEta } from '../../lib/dates';
import { formatDuration } from '../../utils/duration';
import { formatBytes, formatSpeed } from '../../utils/format';
import { cn } from '../../lib/cn';

export interface EpisodeRowProps {
    episode: Episode;
    index: number;
    selected: boolean;
    /** L'episodio aperto nel pannello di dettaglio */
    current?: boolean;
    archived: boolean;
    queueItem: QueueItem | undefined;
    isOnline: boolean;
    onToggle: (index: number, e: React.MouseEvent | React.KeyboardEvent) => void;
    onOpen: (episode: Episode) => void;
    onDownload: (episode: Episode) => void;
    onReveal: (episode: Episode) => void;
    onCancel: (taskId: string) => void;
}

/**
 * Una riga della tabella episodi. Si abbona SOLO al proprio avanzamento
 * (downloads[url]): un aggiornamento di byte ridisegna questa riga, non la
 * lista intera (B4). Le azioni sono sempre visibili — fino alla 1.5.x
 * comparivano solo al passaggio del mouse, quindi da tastiera c'erano ma non
 * si vedevano.
 */
export const EpisodeRow = React.memo(function EpisodeRow({
    episode, index, selected, current = false, archived, queueItem, isOnline, onToggle, onOpen, onDownload, onReveal, onCancel,
}: EpisodeRowProps) {
    const { t, i18n } = useTranslation();
    const url = getEnclosureUrl(episode);
    const progress = useStore(s => (url ? s.downloads[url] : undefined));

    const date = formatDate(episode.pubDate || episode.isoDate, i18n.language);
    const duration = formatDuration(episode.itunes?.duration)?.short;
    const season = episode.itunes?.season;
    const number = episode.itunes?.episode;
    const declared = episode.enclosure?.length ? parseInt(episode.enclosure.length, 10) : NaN;
    const size = Number.isFinite(declared) && declared > 100_000 ? formatBytes(declared, i18n.language) : null;

    const isDone = archived || !!progress?.completed;
    const isPaused = queueItem?.status === 'paused';
    const isActive = queueItem?.status === 'downloading' || (!!progress && !progress.completed && !progress.error && !progress.paused && !queueItem);
    const isQueued = queueItem?.status === 'pending';
    const failed = !!progress?.error;
    const percent = progress && progress.total > 0 ? Math.round((progress.loaded / progress.total) * 100) : null;

    let state: React.ReactNode;
    if (isActive || isPaused) {
        state = (
            <div className="w-full">
                <ProgressBar size="sm" value={isPaused ? (percent ?? 0) : percent} tone={isPaused ? 'warning' : 'primary'} label={t('episodes.progress_label', { title: episode.title })} />
                <p className="tabular mt-1 truncate text-xs text-fg-3">
                    {isPaused ? t('episodes.state_paused') : percent !== null ? `${percent}%` : formatBytes(progress?.loaded ?? 0, i18n.language)}
                    {!isPaused && progress?.speed ? ` · ${formatSpeed(progress.speed, i18n.language)}` : ''}
                    {!isPaused && progress?.eta ? ` · ${formatEta(progress.eta)}` : ''}
                </p>
            </div>
        );
    } else if (isQueued) {
        state = <span className="inline-flex items-center gap-1.5 text-sm text-fg-2"><Loader2 size={13} className="animate-spin text-accent" aria-hidden="true" />{t('episodes.state_queued')}</span>;
    } else if (failed) {
        state = <span className="text-sm font-medium text-danger">{t('episodes.state_failed')}</span>;
    } else if (isDone) {
        state = <span className="inline-flex items-center gap-1.5 text-sm font-medium text-success"><Check size={14} aria-hidden="true" />{t('episodes.state_archived')}</span>;
    } else {
        state = <span className="text-sm text-fg-3">{t('episodes.state_missing')}</span>;
    }

    return (
        <div
            role="listitem"
            aria-current={current || undefined}
            className={cn(
                'group relative flex items-center gap-2 border-b border-line px-3 py-2 transition-colors',
                current ? 'bg-surface-4' : selected ? 'bg-surface-3' : 'hover:bg-surface-2',
            )}
        >
            {current && <span aria-hidden="true" className="absolute inset-y-1.5 left-0 w-0.5 rounded-full bg-accent" />}
            <div className="shrink-0">
                <Checkbox
                    checked={selected}
                    onChange={(_, e) => onToggle(index, e)}
                    label={t('episodes.select', { title: episode.title })}
                />
            </div>

            <div className="min-w-0 flex-1">
                <button
                    type="button"
                    onClick={() => onOpen(episode)}
                    className="block w-full min-w-0 rounded-sm text-left"
                    title={t('episodes.open_detail')}
                >
                    <span className="block truncate text-base font-medium text-fg">{episode.title || t('episodes.untitled')}</span>
                    <span className="tabular flex flex-wrap items-center gap-x-2 text-sm text-fg-3">
                        {date && <span>{date}</span>}
                        {duration && <><span aria-hidden="true">·</span><span>{duration}</span></>}
                        {(season || number) && <><span aria-hidden="true">·</span><span>{[season && `S${season}`, number && `E${number}`].filter(Boolean).join(' ')}</span></>}
                        {size && <><span aria-hidden="true">·</span><span>{size}</span></>}
                    </span>
                </button>
            </div>

            <div className="flex w-40 shrink-0 items-center">{state}</div>

            <div className="flex w-[76px] shrink-0 items-center justify-end gap-1">
                {queueItem ? (
                    <IconButton icon={X} size="sm" label={t('episodes.cancel', { title: episode.title })} onClick={() => onCancel(queueItem.taskId)} />
                ) : isDone ? (
                    <IconButton icon={FolderOpen} size="sm" label={t('episodes.reveal', { title: episode.title })} onClick={() => onReveal(episode)} />
                ) : (
                    <IconButton
                        icon={Download}
                        size="sm"
                        variant="accent"
                        disabled={!isOnline || !url || isActive}
                        label={url ? t('episodes.download_one', { title: episode.title }) : t('episodes.no_audio')}
                        onClick={() => onDownload(episode)}
                    />
                )}
            </div>
        </div>
    );
});
