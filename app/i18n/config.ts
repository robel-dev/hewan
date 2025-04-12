export const i18nConfig = {
  defaultLocale: 'en',
  locales: ['en', 'sv', 'ti'],
  localeNames: {
    en: 'EN',
    sv: 'SV',
    ti: 'ትግ'
  }
} as const;

export type Locale = (typeof i18nConfig)['locales'][number]; 