import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import de from '../translations/de.ts';
import en from '../translations/en.ts';
import es from '../translations/es.ts';
// import fr from 'data/fr.ts';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      de,
      en,
      es,
      //   fr,
    },
    detection: {
      order: ['path', 'localStorage', 'htmlTag', 'subdomain'],
      lookupFromPathIndex: 0,
    },
    // lng: 'en', // if you're using a language detector, do not define the lng option
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
    nsSeparator: false,
    keySeparator: false,
  });

export const changeLanguage = (language: string) => {
  i18n.changeLanguage(language);
};

export {};
