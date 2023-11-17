import { currencies } from '@/const';
import i18n from 'i18next';
/**
 * @see https://stackoverflow.com/a/55987414/1487756
 */
export function abbreviateNumber(n: number): string {
  if (n < 1e3) return n + '';
  if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + 'k';
  if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + 'm';
  if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + 'b';
  if (n >= 1e12) return +(n / 1e12).toFixed(1) + 't';
  return n.toString();
}

export const formatCurrency = (number: number, abbreviate?: boolean) => {
  const frmt = new Intl.NumberFormat(i18n.language, {
    style: 'currency',
    notation: 'compact',
    maximumFractionDigits: abbreviate ? 0 : 2,
    currency: currencies[i18n.language as string],
  });

  if (!abbreviate) return frmt.format(number);
  return frmt.format(100).replace('100', abbreviateNumber(number));
};
