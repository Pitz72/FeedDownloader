import React, { useState } from 'react';
import { motion, useReducedMotionConfig } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowRight, BookOpen, FileDown, Heart, Loader2, Sparkles } from 'lucide-react';
import { Button } from './ui/Button';
import { LanguageChoice } from './LanguageChoice';
import { HelpDialog } from './DocsDialogs';
import { RuntimeUtilitiesLogo } from './brand/RuntimeUtilitiesLogo';
import { useStore } from '../store/useStore';
import { DONATE_URL, openLink } from '../lib/links';

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Cielo di fondo: poche stelle ferme (generatore con seme fisso), più fitte in alto. */
const STARS = (() => {
    let seed = 20261023;
    const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
    return Array.from({ length: 44 }, () => {
        const big = rnd() > 0.86;
        return { x: rnd() * 100, y: Math.pow(rnd(), 1.4) * 100, size: big ? 2 : 1, opacity: 0.18 + rnd() * (big ? 0.5 : 0.4), delay: 0.2 + rnd() * 1.6 };
    });
})();

/**
 * Il marchio con l'anello orbitale delle app Runtime: l'anello si disegna,
 * il satellite (il punto del feed) gli corre attorno una volta e si ferma.
 */
function FeedOrbit() {
    const reduce = useReducedMotionConfig() ?? false;
    return (
        <div className="relative mx-auto h-44 w-72" aria-hidden="true">
            <svg viewBox="0 0 288 176" className="absolute inset-0 h-full w-full overflow-visible">
                <g transform="rotate(-18 144 88)">
                    <motion.ellipse
                        cx="144" cy="88" rx="132" ry="44" fill="none" stroke="var(--color-accent-strong)" strokeWidth="1.5" strokeOpacity="0.55"
                        {...(reduce ? {} : { initial: { pathLength: 0, opacity: 0 }, animate: { pathLength: 1, opacity: 1 }, transition: { duration: 1.6, ease: EASE_OUT } })}
                    />
                    {!reduce && (
                        <motion.circle
                            r="4" fill="var(--color-accent-strong)"
                            initial={{ opacity: 0, cx: 12, cy: 88 }}
                            animate={{ opacity: [0, 1, 1], cx: [12, 144, 276], cy: [88, 132, 88] }}
                            transition={{ delay: 0.9, duration: 1.8, ease: 'easeInOut' }}
                        />
                    )}
                    {reduce && <circle r="4" cx="276" cy="88" fill="var(--color-accent-strong)" />}
                </g>
            </svg>
            <motion.img
                src="./logo.png"
                alt=""
                className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_12px_32px_rgba(124,58,237,0.45)]"
                {...(reduce ? {} : { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, transition: { delay: 0.2, duration: 0.9, ease: EASE_OUT } })}
            />
        </div>
    );
}

/**
 * Schermata d'ingresso (standard Titan): chi è il programma, in che lingua
 * parlarti, e la porta per entrare. L'entrata dura meno di quattro secondi e
 * poi resta ferma; chi chiede meno movimento la trova già composta.
 */
export function IntroScreen({ onComplete }: { onComplete: () => void }) {
    const { t, i18n } = useTranslation();
    const [showGuide, setShowGuide] = useState(false);
    const reduce = useReducedMotionConfig() ?? false;
    const update = useStore(s => s.updateStatus);
    const lang = (i18n.language || 'en').split('-')[0];

    const rise = (delay: number, distance = 10) => reduce ? {} : {
        initial: { opacity: 0, y: distance },
        animate: { opacity: 1, y: 0 },
        transition: { delay, duration: 0.7, ease: EASE_OUT },
    };

    const words = t('app.title').split(' ');

    return (
        <main className="relative h-screen overflow-y-auto bg-canvas">
            <div aria-hidden="true" className="pointer-events-none fixed inset-0">
                <motion.div
                    className="absolute inset-0"
                    style={{ background: 'radial-gradient(70% 55% at 50% 0%, rgba(124, 58, 237, 0.28), rgba(124, 58, 237, 0.07) 55%, transparent 80%)' }}
                    {...(reduce ? {} : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 1.6, ease: 'easeOut' } })}
                />
                <div className="absolute inset-0" style={{ maskImage: 'linear-gradient(to bottom, black 0%, black 35%, transparent 75%)', WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 35%, transparent 75%)' }}>
                    {STARS.map((s, i) => (
                        <motion.span
                            key={i}
                            className="absolute rounded-full bg-fg-2"
                            style={{ left: `${s.x}%`, top: `${s.y}%`, width: s.size, height: s.size, opacity: s.opacity }}
                            {...(reduce ? {} : { initial: { opacity: 0 }, animate: { opacity: s.opacity }, transition: { delay: s.delay, duration: 1.2, ease: 'easeOut' } })}
                        />
                    ))}
                </div>
            </div>

            <div className="relative flex min-h-full flex-col items-center px-6 py-8">
                <div className="my-auto w-full max-w-lg text-center">
                    <FeedOrbit />

                    <h1 className="mt-1 text-3xl font-semibold tracking-tight text-fg">
                        <span className="sr-only">{`${t('app.title')} — ${t('app.edition')}`}</span>
                        <span aria-hidden="true" className="block">
                            {words.map((word, i) => (
                                <React.Fragment key={i}>
                                    {i > 0 && ' '}
                                    <span className="-mb-1 inline-block overflow-hidden pb-1 align-bottom">
                                        <motion.span
                                            className={i === words.length - 1 ? 'inline-block text-accent' : 'inline-block'}
                                            {...(reduce ? {} : { initial: { y: '105%' }, animate: { y: 0 }, transition: { delay: 0.55 + i * 0.1, duration: 0.8, ease: EASE_OUT } })}
                                        >
                                            {word}
                                        </motion.span>
                                    </span>
                                </React.Fragment>
                            ))}
                        </span>
                    </h1>

                    <motion.div
                        aria-hidden="true"
                        className="mx-auto mt-4 h-px w-44 bg-gradient-to-r from-transparent via-accent/70 to-transparent"
                        {...(reduce ? {} : { initial: { scaleX: 0, opacity: 0 }, animate: { scaleX: 1, opacity: 1 }, transition: { delay: 1.1, duration: 1.0, ease: EASE_OUT } })}
                    />

                    <motion.p className="mx-auto mt-4 max-w-md text-base text-fg-3" {...rise(1.2)}>{t('intro.tagline')}</motion.p>

                    <motion.p className="mt-3 flex h-6 items-center justify-center gap-1.5 text-sm" aria-live="polite" {...rise(1.3)}>
                        {update.type === 'available' || update.type === 'downloading' || update.type === 'ready' ? (
                            <span className="inline-flex items-center gap-1.5 text-accent">
                                <Sparkles size={14} aria-hidden="true" />
                                {update.type === 'available' ? t('update.available_short', { version: update.version }) : update.type === 'ready' ? t('update.ready_short') : t('update.downloading_short', { percent: update.percent })}
                            </span>
                        ) : update.type === 'checking' ? (
                            <span className="inline-flex items-center gap-1.5 text-fg-3"><Loader2 size={14} className="animate-spin" aria-hidden="true" />{t('update.checking')}</span>
                        ) : (
                            <span className="font-mono text-fg-3">v{__APP_VERSION__}</span>
                        )}
                    </motion.p>

                    <motion.div className="mt-6 rounded-xl border border-line bg-surface-1 p-5 text-left shadow-raised" {...rise(1.4, 14)}>
                        <p className="mb-3 text-sm font-medium text-fg-2" aria-hidden="true">{t('settings.language')}</p>
                        <LanguageChoice name="intro-language" />
                    </motion.div>

                    <motion.div {...rise(1.55, 14)}>
                        <Button variant="primary" size="lg" iconRight={ArrowRight} className="mt-6 w-full" onClick={onComplete} data-autofocus autoFocus>
                            {t('intro.enter')}
                        </Button>
                    </motion.div>

                    <motion.nav aria-label={t('intro.links')} className="mt-4 flex flex-wrap items-center justify-center gap-1" {...rise(1.7)}>
                        <Button variant="ghost" size="sm" icon={BookOpen} onClick={() => setShowGuide(true)}>{t('help.title')}</Button>
                        <Button variant="ghost" size="sm" icon={FileDown} onClick={() => void window.api.openManualPdf(lang)}>{t('help.open_pdf_short')}</Button>
                        <Button variant="ghost" size="sm" icon={Heart} onClick={() => openLink(DONATE_URL)}>{t('settings.donate')}</Button>
                    </motion.nav>

                    <motion.footer className="mt-7 flex flex-col items-center" {...rise(1.9, 6)}>
                        <div className="flex w-full items-center justify-center gap-4">
                            <span aria-hidden="true" className="h-px max-w-[72px] flex-1 bg-gradient-to-r from-transparent to-line-strong/60" />
                            <RuntimeUtilitiesLogo className="h-9 w-auto text-fg-2" animateDelay={2.1} />
                            <span aria-hidden="true" className="h-px max-w-[72px] flex-1 bg-gradient-to-l from-transparent to-line-strong/60" />
                        </div>
                        <p className="mt-3 text-xs text-fg-3">{t('credits.license')} · {t('credits.author')}</p>
                        <p className="mt-1 text-xs text-fg-3">{t('credits.llm')}</p>
                    </motion.footer>
                </div>
            </div>

            <HelpDialog open={showGuide} onClose={() => setShowGuide(false)} />
        </main>
    );
}
