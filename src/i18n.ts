import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import it from './locales/it.json';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        // The app ships two languages only: Italian and English.
        resources: {
            en: { translation: en },
            it: { translation: it },
        },
        supportedLngs: ['en', 'it'],
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

i18n.on('languageChanged', (lng: string) => {
    if (typeof window !== 'undefined' && window.api?.setLocale) {
        window.api.setLocale(lng);
    }
});

// N1: push the resolved locale to main once at startup (languageChanged doesn't
// fire for the initially-detected language). This both localizes OS
// notifications and, in main, releases the boot update check (SET_LOCALE gate).
if (typeof window !== 'undefined' && window.api?.setLocale) {
    window.api.setLocale(i18n.language);
}

export default i18n;
