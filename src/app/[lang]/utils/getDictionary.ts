import type { Locale } from '@/src/types/shared.types';
import 'server-only';

const dictionaries = {
  es: () => import('@/src/locales/es.json').then((module) => module.default),
  en: () => import('@/src/locales/en.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
