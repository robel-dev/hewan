export const i18nConfig = {
  defaultLocale: 'en',
  locales: ['en', 'sv', 'ti'],
  localeNames: {
    en: 'English',
    sv: 'Svenska',
    ti: 'ትግርኛ'
  }
} as const;

export type Locale = (typeof i18nConfig)['locales'][number]; 