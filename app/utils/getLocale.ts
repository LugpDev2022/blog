import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

const defaultLocale = 'en';
const locales = ['en', 'es'];

export const getLocale = (request: Request): string => {
  const headers = new Headers(request.headers);
  const acceptLanguage = headers.get('accept-language');
  if (acceptLanguage) {
    headers.set('accept-language', acceptLanguage.replaceAll('_', '-'));
  }

  const headersObject = Object.fromEntries(headers.entries());
  const languages = new Negotiator({ headers: headersObject }).languages();
  return match(languages, locales, defaultLocale);
};
