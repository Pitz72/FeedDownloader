import { useTranslation } from 'react-i18next';
import { Download, FileUp, FolderOpen, Plus, RefreshCw, Rss, Zap } from 'lucide-react';
import { useStore } from '../store/useStore';
import { useOnlineStatus } from '../hooks/useOnlineStatus';
import { Button } from './ui/Button';
import { Kbd, Stat } from './ui/Controls';

const isMac = window.api?.platform === 'darwin';

interface Props {
    onAddFeed: () => void;
    onImportOpml: () => void;
    onCheckAll: () => void;
}

/** Libreria vuota: tre passi per cominciare, senza promettere niente che l'app non faccia. */
function Welcome({ onAddFeed, onImportOpml }: Omit<Props, 'onCheckAll'>) {
    const { t } = useTranslation();
    const steps = [
        { icon: Rss, title: t('welcome.step1_title'), text: t('welcome.step1_text') },
        { icon: FolderOpen, title: t('welcome.step2_title'), text: t('welcome.step2_text') },
        { icon: Zap, title: t('welcome.step3_title'), text: t('welcome.step3_text') },
    ];
    return (
        <div className="mx-auto flex max-w-3xl flex-col items-center px-6 py-14 text-center">
            <img src="./logo.png" alt="" className="h-16 w-16" />
            <h1 className="mt-5 text-2xl font-semibold text-fg">{t('welcome.title')}</h1>
            <p className="mt-2 max-w-xl text-base text-fg-3">{t('welcome.text')}</p>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
                <Button variant="primary" size="lg" icon={Plus} onClick={onAddFeed}>{t('sidebar.add_feed')}</Button>
                <Button size="lg" icon={FileUp} onClick={onImportOpml}>{t('sidebar.import_opml')}</Button>
            </div>
            <p className="mt-3 text-sm text-fg-3">{t('welcome.drop_hint')}</p>
            <ol className="mt-10 grid w-full gap-3 text-left sm:grid-cols-3">
                {steps.map(({ icon: Icon, title, text }, i) => (
                    <li key={i} className="rounded-lg border border-line bg-surface-2 p-4">
                        <span className="flex h-9 w-9 items-center justify-center rounded-md bg-surface-4 text-accent" aria-hidden="true"><Icon size={18} /></span>
                        <h2 className="mt-3 text-base font-semibold text-fg"><span className="sr-only">{i + 1}. </span>{title}</h2>
                        <p className="mt-1 text-sm text-fg-3">{text}</p>
                    </li>
                ))}
            </ol>
        </div>
    );
}

/**
 * Area principale senza feed selezionato. Libreria vuota → benvenuto; altrimenti
 * un riepilogo di tutta la libreria con le scorciatoie che servono di più.
 */
export function LibraryHome({ onAddFeed, onImportOpml, onCheckAll }: Props) {
    const { t, i18n } = useTranslation();
    const isOnline = useOnlineStatus();
    const feeds = useStore(s => s.feeds);
    const setView = useStore(s => s.setView);
    if (feeds.length === 0) return <Welcome onAddFeed={onAddFeed} onImportOpml={onImportOpml} />;

    const toDownload = feeds.reduce((n, f) => n + (f.newCount ?? 0), 0);
    const auto = feeds.filter(f => f.autoDownload).length;
    const mod = isMac ? '⌘' : 'Ctrl';

    return (
        <div className="mx-auto max-w-3xl px-6 py-14">
            <h1 className="text-2xl font-semibold text-fg">{t('home.title')}</h1>
            <p className="mt-2 text-base text-fg-3">{t('home.text')}</p>
            <dl className="mt-6 flex flex-wrap gap-2">
                <Stat label={t('home.stat_feeds')} value={feeds.length.toLocaleString(i18n.language)} />
                <Stat label={t('home.stat_to_download')} value={toDownload.toLocaleString(i18n.language)} tone={toDownload > 0 ? 'accent' : undefined} />
                <Stat label={t('home.stat_auto')} value={auto.toLocaleString(i18n.language)} tone={auto > 0 ? 'success' : undefined} />
            </dl>
            <div className="mt-6 flex flex-wrap gap-2">
                <Button variant="primary" icon={RefreshCw} disabled={!isOnline} onClick={onCheckAll}>{t('topbar.check_all')}</Button>
                <Button icon={Download} onClick={() => setView('downloads')}>{t('nav.downloads')}</Button>
                <Button variant="ghost" icon={Plus} onClick={onAddFeed}>{t('sidebar.add_feed')}</Button>
            </div>
            <section aria-labelledby="home-keys" className="mt-10 rounded-lg border border-line bg-surface-2 p-4">
                <h2 id="home-keys" className="eyebrow">{t('home.shortcuts')}</h2>
                <dl className="mt-3 grid gap-x-6 gap-y-2 text-sm sm:grid-cols-2">
                    {[
                        [`${mod} K`, t('home.key_palette')],
                        [`${mod} N`, t('home.key_add')],
                        [`${mod} S`, t('home.key_check')],
                        [`${mod} F`, t('home.key_search')],
                        [`${mod} A`, t('home.key_select_all')],
                        [`${mod} 1 · 2 · 3`, t('home.key_views')],
                        [`${mod} + / −`, t('home.key_zoom')],
                        [`${mod} ,`, t('home.key_settings')],
                    ].map(([k, label]) => (
                        <div key={k} className="flex items-center justify-between gap-3">
                            <dt className="text-fg-2">{label}</dt>
                            <dd><Kbd>{k}</Kbd></dd>
                        </div>
                    ))}
                </dl>
            </section>
        </div>
    );
}
