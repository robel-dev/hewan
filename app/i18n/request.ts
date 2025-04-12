import { getRequestConfig } from 'next-intl/server';
import { i18nConfig } from './config';

export default getRequestConfig(async ({ locale }) => {
  try {
    return {
      locale: locale || i18nConfig.defaultLocale,
      messages: (await import(`./locales/${locale || i18nConfig.defaultLocale}.json`)).default
    };
  } catch (error) {
    return {
      locale: i18nConfig.defaultLocale,
      messages: {}
    };
  }
}); 