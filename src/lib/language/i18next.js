import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation resources (can also be fetched from a server or API)
import en from './locales/en.json';
import es from './locales/es.json';

i18n
  .use(initReactI18next) // Integrates i18next with React
  .init({
    resources: {
      en: {
        translation: en, // English translations
      },
      es: {
        translation: es, // Spanish translations
      },
    },
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
