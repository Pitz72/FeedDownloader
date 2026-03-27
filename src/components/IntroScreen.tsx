import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Icon } from './Icon';
import { HelpModal } from './HelpModal';
import GB from 'country-flag-icons/react/3x2/GB';
import IT from 'country-flag-icons/react/3x2/IT';
import FR from 'country-flag-icons/react/3x2/FR';
import DE from 'country-flag-icons/react/3x2/DE';
import ES from 'country-flag-icons/react/3x2/ES';
import PT from 'country-flag-icons/react/3x2/PT'; // Portuguese
import RU from 'country-flag-icons/react/3x2/RU';
import CN from 'country-flag-icons/react/3x2/CN';

interface IntroScreenProps {
    onComplete: () => void;
}

export const IntroScreen: React.FC<IntroScreenProps> = ({ onComplete }) => {
    const { t, i18n } = useTranslation();
    const [step, setStep] = useState(0); // 0: Logo, 1: Title, 2: Controls
    const timer1Ref = useRef<ReturnType<typeof setTimeout> | null>(null);
    const timer2Ref = useRef<ReturnType<typeof setTimeout> | null>(null);

    // Animation variants
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
            y: step > 0 ? -40 : 0, // Reduced distance
            transition: { duration: 1, ease: "easeOut" as const }
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

    // v0.4.10 — Skip intro: clear pending timers and jump to controls
    const skipToEnd = () => {
        if (timer1Ref.current) clearTimeout(timer1Ref.current);
        if (timer2Ref.current) clearTimeout(timer2Ref.current);
        setStep(2);
    };

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    const languages = [
        { code: 'en', Flag: GB, label: 'English' },
        { code: 'it', Flag: IT, label: 'Italiano' },
        { code: 'fr', Flag: FR, label: 'Français' },
        { code: 'de', Flag: DE, label: 'Deutsch' },
        { code: 'es', Flag: ES, label: 'Español' },
        { code: 'pt', Flag: PT, label: 'Português' },
        { code: 'ru', Flag: RU, label: 'Русский' },
        { code: 'zh', Flag: CN, label: '中文' },
    ];

    const [isHelpOpen, setIsHelpOpen] = useState(false);

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0b1120] text-white overflow-hidden"
        onClick={step < 2 ? skipToEnd : undefined}
        >
            <div className="absolute inset-0 bg-[url('./noise.svg')] opacity-20 pointer-events-none"></div>

            {/* Skip button — visible during animation phases */}
            {step < 2 && (
                <button
                    onClick={(e) => { e.stopPropagation(); skipToEnd(); }}
                    className="absolute top-4 right-4 z-20 text-white/40 hover:text-white/80 text-sm transition-colors px-3 py-1 rounded-full border border-white/10 hover:border-white/30"
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
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
                            Runtime FeedDownloader Pro
                        </h1>
                        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light">
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
                        <div className="flex flex-wrap justify-center gap-3 bg-white/5 p-3 rounded-2xl backdrop-blur-sm border border-white/10">
                            {languages.map(({ code, Flag }) => (
                                <button
                                    key={code}
                                    onClick={() => changeLanguage(code)}
                                    className={`p-2 rounded-lg transition-all ${i18n.language === code
                                        ? 'bg-blue-600 shadow-lg scale-110'
                                        : 'hover:bg-white/10 opacity-70 hover:opacity-100 hover:scale-105'
                                        }`}
                                    title={code.toUpperCase()}
                                >
                                    <Flag className="w-6 h-4 md:w-8 md:h-6 rounded-sm" />
                                </button>
                            ))}
                        </div>

                        {/* Start Button */}
                        <div className="flex flex-col gap-4 w-full items-center">
                            <button
                                onClick={onComplete}
                                className="group relative px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-bold text-lg shadow-lg hover:shadow-blue-500/50 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 overflow-hidden w-64 justify-center"
                            >
                                <span className="relative z-10">{t('app.start')}</span>
                                <Icon name="chevron_right" size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full"></div>
                            </button>

                            <button
                                onClick={() => setIsHelpOpen(true)}
                                className="px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-medium text-gray-300 hover:text-white transition-all flex items-center gap-2 w-64 justify-center"
                            >
                                <Icon name="menu_book" size={20} />
                                <span>{t('help.read_manual', 'LEGGI LA GUIDA')}</span>
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <HelpModal isOpen={isHelpOpen} onClose={() => setIsHelpOpen(false)} />
        </motion.div>
    );
};
