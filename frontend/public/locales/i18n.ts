import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './en/translation.json';
import ar from './ar/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
   cn
    resources: {
      en: { translation: en },
      ar: { translation: ar },
    },
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    detection: {
      order: ['htmlTag','localStorage', 'navigator',  'path', 'subdomain', 'Cookie'],
      caches: ['localStorage', "Cookie"],
    },
    react: { useSuspense: false },
  });

export default i18n;
