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

/**
 * @see https://blog.insycle.com/phone-number-formatting-crm
 */
export const formatPhoneNr = (phoneNumber: string) => {
  const parts = phoneNumber.match(/\+(\d\d)(\d{3})(\d{4})(\d{1,4})/)?.slice(1);
  return `+${parts?.[0]}${parts?.slice(1)?.join('')}`;
};
