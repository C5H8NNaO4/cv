import { format } from 'date-fns';
import i18n from 'i18next';
import { de, enUS as en, es } from 'date-fns/locale';

export const locales: Record<string, Locale> = {
  de: de,
  en: en,
  es: es,
};

export const formatInterval = (start: string, end?: string | null) =>
  `${formatDate(start)} - ${
    end === '?' ? end : end ? formatDate(end) : ' present'
  }`;

/**
 * @see https://blog.insycle.com/phone-number-formatting-crm
 */
export const formatPhoneNr = (phoneNumber: string) => {
  const parts = phoneNumber.match(/\+(\d\d)(\d{3})(\d{4})(\d{1,4})/)?.slice(1);
  return `+${parts?.[0]}${parts?.slice(1)?.join('')}`;
};

export const formatLink = (link: string) => {
  return link.replace(/^https?:\/\//, '');
};

/**
 *
 * Abbreviations of month names are handled differently on most platforms than the standard for resumes says (e.g. Sep instead of Sept.)
 * The reason is outlined here: @see https://github.com/moment/moment/issues/2873
 * The resume guidelines for engineering resumes can be found here @see https://www.reddit.com/r/EngineeringResumes/wiki/index/#wiki_dates
 */

export const formatDate = (date: string) => {
  return format(new Date(date), 'LLL yyyy', {
    locale: locales[i18n.language],
  });
};
