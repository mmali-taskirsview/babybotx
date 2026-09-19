export const locales = ['en','de','fr','es','it','pt','nl','ar','ru','ja','ko','zh'] as const;
export type Locale = typeof locales[number];

export const countryToLocale: Record<string, Locale> = {
  DE: 'de', AT: 'de', CH: 'de',
  FR: 'fr', BE: 'fr', LU: 'fr',
  ES: 'es', MX: 'es', AR: 'es', CO: 'es',
  IT: 'it',
  PT: 'pt', BR: 'pt',
  NL: 'nl',
  SA: 'ar', AE: 'ar', EG: 'ar', QA: 'ar', MA: 'ar',
  RU: 'ru', BY: 'ru', KZ: 'ru',
  JP: 'ja',
  KR: 'ko',
  CN: 'zh', TW: 'zh', HK: 'zh', SG: 'zh',
};
