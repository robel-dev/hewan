"use client";

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { i18nConfig } from '@/app/i18n/config';

export default function LanguageSwitcher() {
  const locale = useLocale();

  return (
    <div className="flex gap-2">
      {i18nConfig.locales.map((loc) => (
        <Link
          key={loc}
          href={`/${loc}`}
          className={`px-3 py-1 rounded ${
            locale === loc
              ? 'bg-primary text-primary-foreground'
              : 'bg-secondary hover:bg-secondary/80'
          }`}
        >
          {i18nConfig.localeNames[loc]}
        </Link>
      ))}
    </div>
  );
} 