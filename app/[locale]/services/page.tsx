"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'
import ServiceCard from "@/components/service-card"
import { getServices, type ServiceCardData } from "@/app/[locale]/services/services-data"

type Locale = 'en' | 'sv' | 'ti';

export default function ServicesPage() {
  const t = useTranslations()
  const locale = useLocale() as Locale;

  const services: ServiceCardData[] = getServices(t)

  return (
    <main className="min-h-screen bg-[#faf9f8]">
      {/* Hero Section with Background Image */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/team/hewan-team.jpg"
            alt="Hewan's Event Services"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Hero content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="font-display text-4xl font-light tracking-[0.2em] md:text-5xl lg:text-6xl mb-6">
            {t('services.hero.title')}
          </h1>
          <p className="max-w-4xl font-sans text-sm font-light tracking-[0.15em] leading-relaxed md:text-base lg:text-lg mb-10">
            {t('services.hero.subtitle')}
          </p>
          <Link href={`/${locale}/services/weddings#contact-weddings`}>
            <Button
              variant="outline"
              className="border-white bg-transparent px-8 py-6 text-xs tracking-[0.15em] text-white hover:bg-white/10"
            >
              {t('services.hero.cta')}
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <h2 className="mb-16 text-center font-display text-2xl font-light tracking-[0.15em] md:text-3xl">
          {t('services.title')}
        </h2>
        
        {/* Main Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-16">
          {services.map((service, index) => (
            <div key={index}>
              <ServiceCard
                title={service.title}
                description={service.description}
                imageSrc={service.cardImage}
                href={`/${locale}/services/${service.id}`}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section - Matching main page style */}
      <section className="bg-[#1d1d1d] text-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="mb-6 font-display text-2xl font-light tracking-[0.15em] md:text-3xl">
            {t('services.cta.title')}
          </h2>
          <p className="mx-auto mb-12 max-w-3xl font-sans text-sm leading-relaxed tracking-wide text-neutral-300 md:text-base">
            {t('services.cta.subtitle')}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href={`/${locale}/services/weddings#contact-weddings`}>
              <Button
                variant="outline"
                className="border-white bg-transparent px-8 py-6 text-xs tracking-[0.15em] text-white hover:bg-white/10"
              >
                {t('services.cta.contact')}
              </Button>
            </Link>
            <Link href={`/${locale}/gallery`}>
              <Button
                variant="outline"
                className="border-white bg-transparent px-8 py-6 text-xs tracking-[0.15em] text-white hover:bg-white/10"
              >
                {t('services.cta.viewWork')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer - Matching main page */}
      <footer className="bg-white py-12">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col items-center justify-center space-y-6">
            <h3 className="font-serif text-xl tracking-wider">HEWAN'S EVENT</h3>
            <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              <Link href={`/${locale}`} className="text-xs tracking-wide text-neutral-600 hover:text-neutral-900">
                {t('navigation.home')}
              </Link>
              <Link href={`/${locale}/services`} className="text-xs tracking-wide text-neutral-600 hover:text-neutral-900">
                {t('navigation.services')}
              </Link>
              <Link href={`/${locale}/gallery`} className="text-xs tracking-wide text-neutral-600 hover:text-neutral-900">
                {t('navigation.gallery')}
              </Link>
              <Link href={`/${locale}/about`} className="text-xs tracking-wide text-neutral-600 hover:text-neutral-900">
                {t('navigation.about')}
              </Link>
              <Link href={`/${locale}/services/weddings#contact-weddings`} className="text-xs tracking-wide text-neutral-600 hover:text-neutral-900">
                {t('navigation.contact')}
              </Link>
            </nav>
            <Separator className="w-24" />
            <p className="text-xs text-neutral-400">© {new Date().getFullYear()} Hewan's Event. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
