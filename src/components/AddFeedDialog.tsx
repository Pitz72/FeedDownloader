import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FileUp, Link2, Plus, Rss, Search } from 'lucide-react';
import type { Feed } from '../../shared/types';
import { Dialog } from './ui/Dialog';
import { Button } from './ui/Button';
import { Switch, TextField } from './ui/Controls';
import { useToast } from './ui/Toast';
import { CoverImage } from './CoverImage';
import { feedErrorKey, normaliseFeedUrl } from '../lib/actions';
import { formatDate } from '../lib/dates';
import { stripHtml } from '../lib/text';
import { useStore } from '../store/useStore';
import { useOnlineStatus } from '../hooks/useOnlineStatus';

interface Props {
    open: boolean;
    /** URL già noto (trascinato sulla finestra, palette): si analizza subito */
    initialUrl?: string;
    onClose: () => void;
    onImportOpml: () => void;
}

/**
 * Aggiunta di un feed in due passi: si analizza l'indirizzo, si vede che cosa
 * è (copertina, titolo, quanti episodi, dal… al…), poi lo si aggiunge alla
 * libreria — eventualmente già con l'archivio automatico acceso.
 */
export function AddFeedDialog({ open, initialUrl, onClose, onImportOpml }: Props) {
    const { t, i18n } = useTranslation();
    const toast = useToast();
    const isOnline = useOnlineStatus();
    const [url, setUrl] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [preview, setPreview] = useState<Feed | null>(null);
    const [auto, setAuto] = useState(false);
    const [adding, setAdding] = useState(false);
    const latest = useRef<string | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const existing = useStore(s => s.feeds);

    useEffect(() => {
        if (!open) return;
        setPreview(null); setError(null); setAuto(false);
        setUrl(initialUrl ?? '');
        if (initialUrl) void analyze(initialUrl);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open, initialUrl]);

    const analyze = async (raw: string) => {
        const target = normaliseFeedUrl(raw);
        if (!target) { setError(t('addFeed.error_empty')); return; }
        if (!isOnline) { setError(t('toast.offline')); return; }
        setUrl(target);
        setError(null);
        setPreview(null);
        setLoading(true);
        latest.current = target;
        try {
            const feed = await window.api.parseFeed(target);
            if (latest.current !== target) return;
            setPreview({ ...feed, url: target });
        } catch (e) {
            if (latest.current === target) setError(t(feedErrorKey(e)));
        } finally {
            if (latest.current === target) setLoading(false);
        }
    };

    const add = async () => {
        if (!preview) return;
        setAdding(true);
        try {
            await window.api.addFeed({ url: preview.url, title: preview.title, image: preview.image });
            if (auto) await window.api.setFeedAutoDownload(preview.url, true);
            const { setCurrentFeed, setView } = useStore.getState();
            setCurrentFeed(preview);
            setView('feed');
            toast.success(t('addFeed.added', { title: preview.title }));
            onClose();
        } catch (e) {
            setError(t(feedErrorKey(e)));
        } finally {
            setAdding(false);
        }
    };

    const already = preview ? existing.some(f => f.url === preview.url) : false;
    const img = preview ? (typeof preview.image === 'string' ? preview.image : preview.image?.url) : undefined;
    const dates = preview?.episodes.map(e => new Date(e.pubDate || e.isoDate || '').getTime()).filter(n => !Number.isNaN(n)) ?? [];
    const oldest = dates.length ? new Date(Math.min(...dates)).toISOString() : null;
    const newest = dates.length ? new Date(Math.max(...dates)).toISOString() : null;

    return (
        <Dialog
            open={open}
            onClose={onClose}
            icon={Rss}
            title={t('addFeed.title')}
            description={t('addFeed.subtitle')}
            size="md"
            initialFocusRef={inputRef}
            footer={
                <>
                    <Button variant="ghost" icon={FileUp} className="mr-auto" onClick={() => { onClose(); onImportOpml(); }}>{t('sidebar.import_opml')}</Button>
                    <Button variant="ghost" onClick={onClose}>{t('common.cancel')}</Button>
                    {preview
                        ? <Button variant="primary" icon={Plus} loading={adding} onClick={() => void add()}>{already ? t('addFeed.open') : t('addFeed.add')}</Button>
                        : <Button variant="primary" icon={Search} loading={loading} disabled={!url.trim()} onClick={() => void analyze(url)}>{t('addFeed.analyze')}</Button>}
                </>
            }
        >
            <form onSubmit={(e) => { e.preventDefault(); if (preview) void add(); else void analyze(url); }} className="space-y-5">
                <TextField
                    ref={inputRef}
                    label={t('addFeed.url_label')}
                    hint={t('addFeed.url_hint')}
                    error={error ?? undefined}
                    leadingIcon={Link2}
                    placeholder="https://…/feed.xml"
                    value={url}
                    onChange={e => { setUrl(e.target.value); setPreview(null); setError(null); }}
                    spellCheck={false}
                    autoComplete="off"
                />

                {preview && (
                    <div className="space-y-4 rounded-lg border border-line bg-surface-2 p-4">
                        <div className="flex gap-4">
                            <span className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-md bg-surface-3 font-semibold text-accent" aria-hidden="true">
                                <CoverImage src={img} className="h-full w-full object-cover" fallback={<span>{(preview.title || '?').slice(0, 2).toUpperCase()}</span>} />
                            </span>
                            <div className="min-w-0">
                                <p className="truncate text-lg font-semibold text-fg">{preview.title}</p>
                                <p className="tabular text-sm text-fg-3">
                                    {t('addFeed.episodes', { count: preview.episodes.length })}
                                    {oldest && newest && <> · {t('addFeed.span', { from: formatDate(oldest, i18n.language), to: formatDate(newest, i18n.language) })}</>}
                                </p>
                                {preview.description && <p className="mt-1 line-clamp-3 text-sm text-fg-2">{stripHtml(preview.description)}</p>}
                            </div>
                        </div>
                        {already
                            ? <p className="text-sm text-fg-3">{t('addFeed.already')}</p>
                            : <Switch checked={auto} onChange={setAuto} label={t('feed.auto_title')} description={t('addFeed.auto_desc')} />}
                    </div>
                )}
                {/* Invio nel campo: analizza o aggiunge */}
                <button type="submit" className="sr-only" tabIndex={-1}>{t('addFeed.analyze')}</button>
            </form>
        </Dialog>
    );
}
