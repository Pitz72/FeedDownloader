import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Icon } from './Icon';
import noiseSvg from '../assets/noise.svg';
import { HelpModal } from './HelpModal';

interface IntroScreenProps {
    onComplete: () => void;
}

export const IntroScreen: React.FC<IntroScreenProps> = ({ onComplete }) => {
    const { t, i18n } = useTranslation();
    const [step, setStep] = useState(0); // 0: Logo, 1: Title, 2: Controls
    const timer1Ref = useRef<ReturnType<typeof setTimeout> | null>(null);
    const timer2Ref = useRef<ReturnType<typeof setTimeout> | null>(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8 } },
        exit: { opacity: 0, y: -50, transition: { duration: 0.5 } }
    };

    const logoVariants = {
        initial: { scale: 0.8, opacity: 0, y: 0 },
        animate: {
            scale: step > 0 ? 1.2 : 1,
            opacity: 1,
            y: step > 0 ? -40 : 0,
            transition: { duration: 1, ease: 'easeOut' as const }
        }
    };

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } }
    };

    // Auto-advance sequence
    React.useEffect(() => {
        timer1Ref.current = setTimeout(() => setStep(1), 1500);
        timer2Ref.current = setTimeout(() => setStep(2), 2500);
        return () => {
            if (timer1Ref.current) clearTimeout(timer1Ref.current);
            if (timer2Ref.current) clearTimeout(timer2Ref.current);
        };
    }, []);

    // Skip intro: clear pending timers and jump to controls
    const skipToEnd = () => {
        if (timer1Ref.current) clearTimeout(timer1Ref.current);
        if (timer2Ref.current) clearTimeout(timer2Ref.current);
        setStep(2);
    };

    const changeLanguage = (lng: string) => { i18n.changeLanguage(lng); };

    const languages = [
        { code: 'en', flag: '🇬🇧' },
        { code: 'it', flag: '🇮🇹' },
        { code: 'fr', flag: '🇫🇷' },
        { code: 'de', flag: '🇩🇪' },
        { code: 'es', flag: '🇪🇸' },
        { code: 'pt', flag: '🇵🇹' },
        { code: 'ru', flag: '🇷🇺' },
        { code: 'zh', flag: '🇨🇳' },
    ];

    const [isHelpOpen, setIsHelpOpen] = useState(false);

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
            style={{ background: 'var(--color-background)', color: 'var(--color-on-surface)' }}
            onClick={step < 2 ? skipToEnd : undefined}
        >
            {/* Noise texture overlay */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{ backgroundImage: `url(${noiseSvg})`, opacity: 0.15 }}
            />

            {/* Radial glow — coerente con la palette primary */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(173,198,255,0.07) 0%, transparent 70%)',
                }}
            />

            {/* Skip button */}
            {step < 2 && (
                <button
                    onClick={(e) => { e.stopPropagation(); skipToEnd(); }}
                    className="hover-text-surface absolute top-4 right-4 z-20 text-xs px-3 py-1.5 rounded-full transition-all"
                    style={{
                        color: 'var(--color-on-surface-variant)',
                        border: '1px solid rgba(65,71,85,0.3)',
                        fontFamily: 'var(--font-label)',
                    }}
                >
                    {t('app.skip')} →
                </button>
            )}

            {/* Logo */}
            <motion.img
                src="./logo.png"
                alt="Logo"
                variants={logoVariants}
                initial="initial"
                animate="animate"
                className="w-64 h-64 object-contain mb-4 z-10 drop-shadow-2xl"
            />

            {/* Title & Slogan */}
            <AnimatePresence>
                {step >= 1 && (
                    <motion.div
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-center z-10 px-4"
                    >
                        <h1
                            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4"
                            style={{
                                fontFamily: 'var(--font-headline)',
                                background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            {t('app.title')}
                        </h1>
                        <p
                            className="text-lg md:text-xl max-w-2xl mx-auto font-light"
                            style={{ color: 'var(--color-on-surface-variant)' }}
                        >
                            {t('app.slogan')}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Controls: Language & Start */}
            <AnimatePresence>
                {step >= 2 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="mt-12 z-10 flex flex-col items-center gap-8"
                    >
                        {/* Language Selector */}
                        <div
                            className="flex flex-wrap justify-center gap-2 p-2 rounded-2xl"
                            style={{
                                background: 'var(--color-surface-container-low)',
                                boxShadow: 'inset 0 0 0 1px rgba(65,71,85,0.2)',
                            }}
                        >
                            {languages.map(({ code, flag }) => (
                                <button
                                    key={code}
                                    onClick={() => changeLanguage(code)}
                                    className={`lang-btn-hover p-2 rounded-xl transition-all ${i18n.language === code ? 'lang-btn-active' : ''}`}
                                    style={i18n.language === code
                                        ? { background: 'var(--color-primary-container)', transform: 'scale(1.1)' }
                                        : { background: 'transparent', opacity: 0.65 }
                                    }
                                    title={code.toUpperCase()}
                                >
                                    <span className="text-2xl md:text-3xl leading-none">{flag}</span>
                                </button>
                            ))}
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col gap-3 w-full items-center">
                            <button
                                onClick={onComplete}
                                className="btn-primary-gradient group flex items-center gap-2 px-8 py-3 w-64 justify-center text-base"
                                style={{ borderRadius: '9999px' }}
                            >
                                {t('app.start')}
                                <Icon name="chevron_right" size={20} className="group-hover:translate-x-0.5 transition-transform" />
                            </button>

                            <button
                                onClick={() => setIsHelpOpen(true)}
                                className="hover-bg-container flex items-center gap-2 px-8 py-3 w-64 justify-center rounded-full text-sm font-medium transition-all"
                                style={{
                                    background: 'var(--color-surface-container-low)',
                                    color: 'var(--color-on-surface-variant)',
                                    boxShadow: 'inset 0 0 0 1px rgba(65,71,85,0.25)',
                                    fontFamily: 'var(--font-label)',
                                }}
                            >
                                <Icon name="menu_book" size={18} />
                                {t('help.read_manual', 'Leggi la guida')}
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <HelpModal isOpen={isHelpOpen} onClose={() => setIsHelpOpen(false)} />
        </motion.div>
    );
};
