import { format } from 'date-fns';
import i18n from 'i18next';
import { de, enUS as en, es } from 'date-fns/locale';

export const locales: Record<string, Locale> = {
  de: de,
  en: en,
  es: es,
};

export const formatDuration = (start: string, end?: string | null) =>
  `${format(new Date(start), 'MMM yyyy', {
    locale: locales[i18n.language],
  })} - ${
    end === '?'
      ? end
      : end
      ? format(new Date(end), 'MMM yyyy', {
          locale: locales[i18n.language],
        })
      : ' now.'
  }`;

  export const formatPhoneNr = (phoneNumber: string) => {
    
    return '+' + phoneNumber.match(/\+(\d\d)(\d{3})(\d{4})(\d{1,4})/)?.slice(1).join(' ')
  }