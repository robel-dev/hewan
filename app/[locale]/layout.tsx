import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { i18nConfig } from '@/app/i18n/config';
import "../globals.css";
import Header from "@/components/header";

// Import your fonts
import { Playfair_Display, Cormorant_Garamond, Montserrat } from "next/font/google"
import localFont from "next/font/local"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

// Import Noto Sans Ethiopic for Tigrinya (Geez script) - temporarily disabled for build
// TODO: Re-enable after fixing font loading issues
const geezFont = {
  variable: "--font-geez",
  className: "",
}

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }))
}

async function getMessages(locale: string) {
  try {
    return (await import(`@/app/i18n/locales/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = params.locale;
  let messages;

  try {
    messages = await getMessages(locale);
  } catch (error) {
    notFound();
  }

  if (!i18nConfig.locales.includes(locale as any)) {
    notFound();
  }

  return (
    <html lang={locale} className={`scroll-smooth ${playfair.variable} ${cormorant.variable} ${montserrat.variable} ${geezFont.variable}`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-lora antialiased" suppressHydrationWarning>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
} 