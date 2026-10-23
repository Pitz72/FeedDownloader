import { useEffect, useState, type ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Check, Copy, Download, FolderOpen, Headphones, RotateCcw } from 'lucide-react';
import type { ArchiveEntry, Episode, Feed } from '../../../shared/types';
import { getEnclosureUrl } from '../../../shared/getEnclosureUrl';
import { Dialog } from '../ui/Dialog';
import { Button, IconButton } from '../ui/Button';
import { Badge } from '../ui/Controls';
import { useToast } from '../ui/Toast';
import { formatDate } from '../../lib/dates';
import { formatDuration } from '../../utils/duration';
import { formatBytes } from '../../utils/format';
import { stripHtml } from '../../lib/text';

export interface EpisodeDetailProps {
    episode: Episode;
    feed: Feed;
    archived: boolean;
    busy: boolean;
    isOnline: boolean;
    onClose: () => void;
    onDownload: (episode: Episode) => void;
    onReveal: (episode: Episode) => void;
    onResetStatus: (episode: Episode) => void;
}

function Cell({ label, children, wide }: { label: string; children: ReactNode; wide?: boolean }) {
    return (
        <div className={wide ? 'col-span-2' : undefined}>
            <dt className="text-xs font-medium text-fg-3">{label}</dt>
            <dd className="mt-0.5 text-sm text-fg-2 [overflow-wrap:anywhere]">{children}</dd>
        </div>
    );
}

/** Le azioni sull'episodio: le stesse nel pannello laterale e nella finestra. */
function Actions({ episode, archived, busy, isOnline, onDownload, onReveal, onResetStatus }: Omit<EpisodeDetailProps, 'feed' | 'onClose'>) {
    const { t } = useTranslation();
    const enclosureUrl = getEnclosureUrl(episode);
    return (
        <>
            <Button
                variant={archived ? 'secondary' : 'primary'}
                icon={Download}
                disabled={!isOnline || !enclosureUrl || busy}
                onClick={() => onDownload(episode)}
            >
                {busy ? t('detail.in_queue') : archived ? t('detail.redownload') : t('detail.download')}
            </Button>
            {archived && <Button icon={FolderOpen} onClick={() => onReveal(episode)}>{t('detail.reveal')}</Button>}
            {archived && <Button variant="ghost" icon={RotateCcw} onClick={() => onResetStatus(episode)}>{t('detail.reset_status')}</Button>}
        </>
    );
}

/** Tutto ciò che si sa di un episodio: dati del feed e, se archiviato, del file. */
function DetailBody({ episode, feed, archived }: Pick<EpisodeDetailProps, 'episode' | 'feed' | 'archived'>) {
    const { t, i18n } = useTranslation();
    const toast = useToast();
    const [entry, setEntry] = useState<ArchiveEntry | null>(null);
    const guid = episode.guid || getEnclosureUrl(episode) || '';

    useEffect(() => {
        if (!archived || !guid) { setEntry(null); return; }
        let alive = true;
        // one row by identity, not the whole archive on every open (it was loaded
        // again after every completed download while the panel stayed open)
        window.api.getArchiveEntry(guid, feed.url).then(e => { if (alive) setEntry(e); }).catch(() => { if (alive) setEntry(null); });
        return () => { alive = false; };
    }, [archived, guid, feed.url]);

    const copy = (text: string) => {
        navigator.clipboard.writeText(text)
            .then(() => toast.success(t('common.copied')))
            .catch(() => toast.error(t('common.copy_failed')));
    };

    const enclosureUrl = getEnclosureUrl(episode);
    const description = stripHtml(episode.content || episode.description || episode.contentSnippet || '');
    const dur = formatDuration(episode.itunes?.duration);
    const declared = episode.enclosure?.length ? parseInt(episode.enclosure.length, 10) : NaN;

    return (
        <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-2">
                {archived
                    ? <Badge tone="success" icon={Check}>{t('episodes.state_archived')}</Badge>
                    : <Badge>{t('episodes.state_missing')}</Badge>}
                {episode.itunes?.episodeType && episode.itunes.episodeType !== 'full' && <Badge tone="accent">{episode.itunes.episodeType}</Badge>}
            </div>

            <dl className="grid grid-cols-2 gap-x-6 gap-y-3">
                <Cell label={t('detail.published')}>{formatDate(episode.pubDate || episode.isoDate, i18n.language, { day: 'numeric', month: 'long', year: 'numeric' }) || '—'}</Cell>
                <Cell label={t('detail.duration')}>{dur?.long ?? '—'}</Cell>
                {(episode.itunes?.season || episode.itunes?.episode) && (
                    <Cell label={t('detail.number')}>{[episode.itunes?.season && t('detail.season', { n: episode.itunes.season }), episode.itunes?.episode && t('detail.episode', { n: episode.itunes.episode })].filter(Boolean).join(' · ')}</Cell>
                )}
                {Number.isFinite(declared) && declared > 0 && <Cell label={t('detail.declared_size')}>{formatBytes(declared, i18n.language)}</Cell>}
                {episode.enclosure?.type && <Cell label={t('detail.format')}>{episode.enclosure.type}</Cell>}
            </dl>

            {archived && entry && (
                <section aria-labelledby="detail-archive" className="rounded-lg border border-line bg-surface-2 p-4">
                    <h3 id="detail-archive" className="eyebrow mb-3">{t('detail.archive_data')}</h3>
                    <dl className="grid grid-cols-2 gap-x-6 gap-y-3">
                        <Cell label={t('detail.downloaded_at')}>{formatDate(entry.downloadedAt, i18n.language, { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' }) || '—'}</Cell>
                        <Cell label={t('detail.file_size')}>{entry.fileSize != null ? formatBytes(entry.fileSize, i18n.language) : '—'}</Cell>
                        <Cell label={t('detail.quality')}>
                            {entry.bitrate ? `${entry.bitrate} kbps` : '—'}{entry.sampleRate ? ` · ${(entry.sampleRate / 1000).toLocaleString(i18n.language, { maximumFractionDigits: 1 })} kHz` : ''}
                        </Cell>
                        <Cell label={t('detail.file')} wide>
                            <span className="font-mono text-xs">{[entry.baseDir, entry.podcastTitle, entry.filename].filter(Boolean).join(' › ')}</span>
                        </Cell>
                        {entry.checksum && (
                            <Cell label={t('detail.checksum')} wide>
                                <span className="font-mono text-xs">{entry.checksum.match(/.{1,8}/g)?.join(' ')}</span>
                            </Cell>
                        )}
                    </dl>
                </section>
            )}

            <section aria-labelledby="detail-notes">
                <h3 id="detail-notes" className="eyebrow mb-2">{t('detail.notes')}</h3>
                {description
                    ? <div className="prose-notes text-sm text-fg-2">{description.split(/\n\n+/).map((p, i) => <p key={i} className="whitespace-pre-line">{p}</p>)}</div>
                    : <p className="text-sm italic text-fg-3">{t('detail.no_notes')}</p>}
            </section>

            {(episode.link || enclosureUrl) && (
                <section aria-labelledby="detail-links" className="space-y-2">
                    <h3 id="detail-links" className="eyebrow">{t('detail.links')}</h3>
                    {episode.link && (
                        <div className="flex items-center gap-2">
                            <span className="min-w-0 flex-1 truncate font-mono text-xs text-fg-3" title={episode.link}>{episode.link}</span>
                            <Button size="sm" variant="ghost" icon={Copy} onClick={() => copy(episode.link!)}>{t('detail.copy_page')}</Button>
                        </div>
                    )}
                    {enclosureUrl && (
                        <div className="flex items-center gap-2">
                            <span className="min-w-0 flex-1 truncate font-mono text-xs text-fg-3" title={enclosureUrl}>{enclosureUrl}</span>
                            <Button size="sm" variant="ghost" icon={Copy} onClick={() => copy(enclosureUrl)}>{t('detail.copy_audio')}</Button>
                        </div>
                    )}
                </section>
            )}
        </div>
    );
}

/** Dettaglio nel pannello fisso a destra (finestre larghe). */
export function EpisodePanel(props: EpisodeDetailProps) {
    const { t } = useTranslation();
    const { episode, feed, onClose } = props;
    return (
        <section aria-labelledby="episode-panel-title" className="flex min-h-0 flex-1 flex-col">
            <div className="flex items-start gap-2 border-b border-line px-5 pb-4 pt-4">
                <IconButton icon={ArrowLeft} size="sm" label={t('detail.back')} onClick={onClose} className="-ml-2 mt-0.5" />
                <div className="min-w-0 flex-1">
                    <p className="truncate text-xs text-fg-3">{feed.title}</p>
                    <h2 id="episode-panel-title" className="text-lg font-semibold text-fg [overflow-wrap:anywhere]">{episode.title || t('episodes.untitled')}</h2>
                </div>
            </div>
            <div className="min-h-0 flex-1 overflow-y-auto px-5 py-5">
                <DetailBody episode={episode} feed={feed} archived={props.archived} />
            </div>
            <div className="flex flex-wrap gap-2 border-t border-line bg-surface-2 px-5 py-3">
                <Actions {...props} />
            </div>
        </section>
    );
}

/** Lo stesso dettaglio in una finestra laterale (finestre strette). */
export function EpisodeDialog(props: EpisodeDetailProps & { open: boolean }) {
    const { t } = useTranslation();
    const { open, episode, feed, onClose } = props;
    return (
        <Dialog
            open={open}
            onClose={onClose}
            placement="right"
            icon={Headphones}
            title={episode.title || t('episodes.untitled')}
            description={feed.title}
            footer={<Actions {...props} />}
        >
            <DetailBody episode={episode} feed={feed} archived={props.archived} />
        </Dialog>
    );
}
