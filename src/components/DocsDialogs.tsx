import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Markdown from 'react-markdown';
import { BookOpen, FileDown, Loader2, Sparkles } from 'lucide-react';
import { Dialog } from './ui/Dialog';
import { Button } from './ui/Button';
import { getReleaseNotes } from '../lib/releaseNotes';

const markdownComponents = {
    // links in the guide open outside the app (will-navigate routes http(s) to the browser)
    a: ({ node: _node, ...props }: React.ComponentProps<'a'> & { node?: unknown }) => <a target="_blank" rel="noreferrer" {...props} />,
};

/** Guida in-app: il README della lingua corrente, più il manuale PDF completo. */
export function HelpDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
    const { t, i18n } = useTranslation();
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false);
    const lang = (i18n.language || 'en').split('-')[0];

    const load = useCallback(async () => {
        setLoading(true);
        try {
            setContent(await window.api.getHelpContent(lang));
        } catch {
            setContent(`# ${t('common.error')}\n${t('help.error_loading')}`);
        } finally {
            setLoading(false);
        }
    }, [lang, t]);

    useEffect(() => { if (open) void load(); }, [open, load]);

    return (
        <Dialog
            open={open}
            onClose={onClose}
            icon={BookOpen}
            title={t('help.title')}
            description={t('help.subtitle')}
            size="lg"
            footer={
                <>
                    <Button variant="ghost" icon={FileDown} className="mr-auto" onClick={() => void window.api.openManualPdf(lang)}>{t('help.open_pdf')}</Button>
                    <Button variant="primary" onClick={onClose}>{t('common.close')}</Button>
                </>
            }
        >
            {loading
                ? <p className="flex items-center justify-center gap-2 py-10 text-fg-3"><Loader2 size={16} className="animate-spin" aria-hidden="true" />{t('common.loading')}</p>
                : <div className="markdown"><Markdown components={markdownComponents}>{content}</Markdown></div>}
        </Dialog>
    );
}

/**
 * Novità della versione (standard Titan): note localizzate in-code quando ci
 * sono, altrimenti il changelog Markdown della versione.
 */
export function ChangelogDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
    const { t, i18n } = useTranslation();
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false);
    const notes = getReleaseNotes(__APP_VERSION__, i18n.language);

    useEffect(() => {
        if (!open || notes) return;
        let cancelled = false;
        setLoading(true);
        window.api.getChangelog()
            .then(text => { if (!cancelled) setContent(text || ''); })
            .catch(() => { if (!cancelled) setContent(''); })
            .finally(() => { if (!cancelled) setLoading(false); });
        return () => { cancelled = true; };
    }, [open, notes]);

    return (
        <Dialog
            open={open}
            onClose={onClose}
            icon={Sparkles}
            title={t('changelog.title')}
            description={t('changelog.version', { version: __APP_VERSION__ })}
            size="md"
            footer={<Button variant="primary" onClick={onClose}>{t('changelog.ok')}</Button>}
        >
            {notes ? (
                <ul className="space-y-3">
                    {notes.map((n, i) => (
                        <li key={i} className="flex gap-3 text-base text-fg-2">
                            <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                            <span>{n}</span>
                        </li>
                    ))}
                </ul>
            ) : loading ? (
                <p className="flex items-center justify-center gap-2 py-10 text-fg-3"><Loader2 size={16} className="animate-spin" aria-hidden="true" />{t('common.loading')}</p>
            ) : content ? (
                <div className="markdown"><Markdown components={markdownComponents}>{content}</Markdown></div>
            ) : (
                <p className="py-10 text-center text-fg-3">{t('changelog.empty')}</p>
            )}
        </Dialog>
    );
}
