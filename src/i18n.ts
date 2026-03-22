import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import it from './locales/it.json';
import fr from './locales/fr.json';
import de from './locales/de.json';
import es from './locales/es.json';
import pt from './locales/pt.json';
import ru from './locales/ru.json';
import zh from './locales/zh.json';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            it: { translation: it },
            fr: { translation: fr },
            de: { translation: de },
            es: { translation: es },
            pt: { translation: pt },
            ru: { translation: ru },
            zh: { translation: zh },
        },
        fallbackLng: 'en',
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'],
            lookupLocalStorage: 'i18nextLng',
        },
        interpolation: {
            escapeValue: false,
        },
    });

// v0.4.10 — Sync UI locale to Main process for localized OS notifications
i18n.on('languageChanged', (lng: string) => {
    if (typeof window !== 'undefined' && window.api?.setLocale) {
        window.api.setLocale(lng);
    }
});

export default i18n;
