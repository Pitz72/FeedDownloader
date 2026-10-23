import React, { useState } from 'react';
import { motion, useReducedMotionConfig } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowRight, BookOpen, FileDown, Heart, Loader2, Sparkles } from 'lucide-react';
import { Button } from './ui/Button';
import { LanguageChoice } from './LanguageChoice';
import { HelpDialog } from './DocsDialogs';
import { RuntimeUtilitiesLogo } from './brand/RuntimeUtilitiesLogo';
import { FeedOrbit } from './brand/FeedOrbit';
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
 * Schermata d'ingresso (standard Titan): chi è il programma, in che lingua
 * parlarti, e la porta per entrare. L'entrata è la stessa coreografia di Titan —
 * orbita, titolo, controlli, firma — chiusa in meno di quattro secondi e poi
 * ferma; chi chiede meno movimento la trova già composta.
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

                    <h1 className="mt-2 text-3xl font-semibold tracking-tight text-fg">
                        <span className="sr-only">{`${t('app.title')} — ${t('app.edition')}`}</span>
                        <span aria-hidden="true" className="block">
                            {words.map((word, i) => (
                                <React.Fragment key={i}>
                                    {i > 0 && ' '}
                                    <span className="-mb-1 inline-block overflow-hidden pb-1 align-bottom">
                                        <motion.span
                                            className="inline-block"
                                            {...(reduce ? {} : { initial: { y: '105%' }, animate: { y: 0 }, transition: { delay: 0.55 + i * 0.1, duration: 0.8, ease: EASE_OUT } })}
                                        >
                                            {word}
                                        </motion.span>
                                    </span>
                                </React.Fragment>
                            ))}
                        </span>
                        {/* La seconda riga, come «Titan Edition»: si stringe e va a fuoco */}
                        <motion.span
                            aria-hidden="true"
                            className="mt-1 block text-accent"
                            {...(reduce ? {} : {
                                initial: { opacity: 0, letterSpacing: '0.42em', filter: 'blur(6px)' },
                                animate: { opacity: 1, letterSpacing: '-0.025em', filter: 'blur(0px)' },
                                transition: { delay: 0.85, duration: 1.4, ease: EASE_OUT },
                            })}
                        >
                            {t('app.edition')}
                        </motion.span>
                    </h1>

                    <motion.div
                        aria-hidden="true"
                        className="mx-auto mt-4 h-px w-44 bg-gradient-to-r from-transparent via-accent/70 to-transparent"
                        {...(reduce ? {} : { initial: { scaleX: 0, opacity: 0 }, animate: { scaleX: 1, opacity: 1 }, transition: { delay: 1.15, duration: 1.0, ease: EASE_OUT } })}
                    />

                    <motion.p className="mx-auto mt-4 max-w-md text-base text-fg-3" {...rise(1.25)}>{t('intro.tagline')}</motion.p>

                    <motion.p className="mt-3 flex h-6 items-center justify-center gap-1.5 text-sm" aria-live="polite" {...rise(1.35)}>
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

                    <motion.div className="mt-6 rounded-xl border border-line bg-surface-1 p-5 text-left shadow-raised" {...rise(1.45, 14)}>
                        <p className="mb-3 text-sm font-medium text-fg-2" aria-hidden="true">{t('settings.language')}</p>
                        <LanguageChoice name="intro-language" />
                    </motion.div>

                    <motion.div {...rise(1.6, 14)}>
                        <Button variant="primary" size="lg" iconRight={ArrowRight} className="mt-6 w-full" onClick={onComplete} data-autofocus autoFocus>
                            {t('intro.enter')}
                        </Button>
                    </motion.div>

                    <motion.nav aria-label={t('intro.links')} className="mt-4 flex flex-wrap items-center justify-center gap-1" {...rise(1.75)}>
                        <Button variant="ghost" size="sm" icon={BookOpen} onClick={() => setShowGuide(true)}>{t('help.title')}</Button>
                        <Button variant="ghost" size="sm" icon={FileDown} onClick={() => void window.api.openManualPdf(lang)}>{t('help.open_pdf_short')}</Button>
                        <Button variant="ghost" size="sm" icon={Heart} onClick={() => openLink(DONATE_URL)}>{t('settings.donate')}</Button>
                    </motion.nav>

                    <motion.footer className="mt-7 flex flex-col items-center" {...rise(1.95, 6)}>
                        <div className="flex w-full items-center justify-center gap-4">
                            <span aria-hidden="true" className="h-px max-w-[72px] flex-1 bg-gradient-to-r from-transparent to-line-strong/60" />
                            <RuntimeUtilitiesLogo className="h-9 w-auto text-fg-2" animateDelay={2.15} />
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
