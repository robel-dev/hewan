import createMiddleware from 'next-intl/middleware';
import { i18nConfig } from './app/i18n/config';

export default createMiddleware({
  // A list of all locales that are supported
  locales: i18nConfig.locales,
  
  // Used when no locale matches
  defaultLocale: i18nConfig.defaultLocale,
  
  // This is a list of paths that should not be internationalized
  localePrefix: 'always'
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(sv|en|ti)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)',]
}; 