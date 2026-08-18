import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import { HelpModal } from './HelpModal';
import GB from 'country-flag-icons/react/3x2/GB';
import IT from 'country-flag-icons/react/3x2/IT';

interface IntroScreenProps {
    onComplete: () => void;
}

const LANGUAGES: { code: 'en' | 'it'; Flag: React.ComponentType<{ style?: React.CSSProperties; title?: string }> }[] = [
    { code: 'en', Flag: GB },
    { code: 'it', Flag: IT },
];

export const IntroScreen: React.FC<IntroScreenProps> = ({ onComplete }) => {
    const { t, i18n } = useTranslation();
    const [isHelpOpen, setIsHelpOpen] = useState(false);

    const changeLanguage = (lng: string) => { i18n.changeLanguage(lng); };

    return (
        <motion.div
            className="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
        >
            {/* Backdrop layers */}
            <div className="intro-grid" aria-hidden="true" />
            <div className="intro-grain" aria-hidden="true" />

            {/* HUD chrome */}
            <div className="intro-corners" aria-hidden="true">
                <i /><i /><i /><i />
            </div>
            <div className="intro-status">
                <span className="dot" />
                <span>{t('intro.status_acquiring', 'Acquiring signal')}</span>
                <span style={{ opacity: 0.4 }}>·</span>
                <span>{t('intro.status_channel', 'Channel 01')}</span>
            </div>
            <div className="intro-version">
                v{__APP_VERSION__}
            </div>

            {/* Mid-animation flash */}
            <div className="intro-flash" aria-hidden="true" />

            {/* Stage with radar sweep + rings + core */}
            <div className="intro-stage">
                <div className="intro-center intro-ring r1" />
                <div className="intro-center intro-ring r2" />
                <div className="intro-center intro-ring r3" />

                <div className="intro-center intro-sweep" />

                <div className="intro-center intro-core">
                    <span className="intro-pulse" />
                    <img className="intro-logo" src="./logo.png" alt="Runtime FeedDownloader Pro" />
                </div>

                <div className="intro-center intro-title-block">
                    <div className="intro-overline">{t('intro.overline', 'Runtime · Archive Suite')}</div>
                    <h1 className="intro-title">
                        FeedDownloader <span className="pro">Pro</span>
                    </h1>
                    <p className="intro-tagline">{t('app.slogan', 'Il modo più potente per archiviare i tuoi podcast.')}</p>
                </div>

                <div className="intro-center intro-divider" />

                <div className="intro-center intro-controls">
                    <div className="intro-langs" role="radiogroup" aria-label={t('settings.language', 'Lingua')}>
                        {LANGUAGES.map(({ code, Flag }) => (
                            <button
                                key={code}
                                type="button"
                                onClick={() => changeLanguage(code)}
                                className={clsx(i18n.language?.startsWith(code) && 'active')}
                                role="radio"
                                aria-checked={i18n.language?.startsWith(code)}
                                title={code.toUpperCase()}
                            >
                                <Flag style={{ width: 18, height: 12, borderRadius: 2, display: 'block', flexShrink: 0 }} />
                                <span style={{ marginLeft: 6 }}>{code.toUpperCase()}</span>
                            </button>
                        ))}
                    </div>

                    <div className="intro-actions">
                        <button type="button" className="intro-btn intro-btn-primary" onClick={onComplete}>
                            {t('app.start', 'Inizia')} <span className="arr">→</span>
                        </button>
                        <button type="button" className="intro-btn intro-btn-ghost" onClick={() => setIsHelpOpen(true)}>
                            {t('help.read_manual', 'Leggi la guida')}
                        </button>
                    </div>
                </div>
            </div>

            {/* Audio meter */}
            <div className="intro-meter" aria-hidden="true">
                {Array.from({ length: 12 }).map((_, i) => <span key={i} />)}
            </div>

            {/* Skip */}
            <button type="button" className="intro-skip" onClick={onComplete}>
                {t('app.skip', 'Salta')} →
            </button>

            <HelpModal isOpen={isHelpOpen} onClose={() => setIsHelpOpen(false)} />
        </motion.div>
    );
};
