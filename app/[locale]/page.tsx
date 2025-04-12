"use client";

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import TestimonialCard from "@/components/testimonial-card"
import GalleryPreview from "@/components/gallery-preview"
import ServiceCard from "@/components/service-card"
import SocialFeed from "@/components/social-feed"
import ContactForm from "@/components/contact-form"
import Header from "@/components/header"

type Locale = 'en' | 'sv' | 'ti';

export default function Home() {
  const t = useTranslations();
  const locale = useLocale() as Locale;

  return (
    <main className="min-h-screen bg-[#faf9f8]">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <Image
          //src="/softly-lit-wedding.png"
          src="/hewan-photos/hewans-event-6.png"
          alt="Elegant wedding venue"
          fill
          priority
          className="object-cover object-center scale-140"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex flex-col items-center justify-center translate-y-48 text-center text-white">
          <h1 className="font-display text-4xl font-light tracking-[0.2em] md:text-5xl lg:text-6xl">
            {t('hero.title')}
          </h1>
          <p className="mt-6 max-w-md font-sans text-xs font-light tracking-[0.25em] md:text-sm">
            {t('hero.subtitle')}
          </p>
          <div className="mt-10 -translate-x-16">
            <Link href="#contact">
              <Button
                variant="outline"
                className="border-white bg-transparent px-8 py-6 text-xs tracking-[0.15em] text-white hover:bg-white/10"
              >
                {t('hero.cta')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Header */}
      <Header />

      {/* Services Preview */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 className="mb-12 text-center font-display text-2xl font-light tracking-[0.15em] md:text-3xl">
          {t('services.title')}
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <ServiceCard
            title={t('services.wedding.title')}
            description={t('services.wedding.description')}
            imageSrc="/refined-garden-wedding.png"
            href="/services/weddings"
          />
          <ServiceCard
            title={t('services.event.title')}
            description={t('services.event.description')}
            imageSrc="/refined-wedding-feast.png"
            href="/services/events"
          />
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-12 text-center font-display text-2xl font-light tracking-[0.15em] md:text-3xl">
            {t('gallery.title')}
          </h2>
          <GalleryPreview />
          <div className="mt-12 text-center">
            <Link href="/gallery">
              <Button
                variant="outline"
                className="border-neutral-300 bg-transparent text-xs tracking-widest text-neutral-800 hover:bg-neutral-50"
              >
                {t('gallery.viewMore')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#f8f6f4] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-12 text-center font-display text-2xl font-light tracking-[0.15em] md:text-3xl">
            {t('testimonials.title')}
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <TestimonialCard
              name={t('testimonials.clients.first.name')}
              date={t('testimonials.clients.first.date')}
              image="/hewan-photos/sandro-selam.jpg"
              testimonial={t('testimonials.clients.first.text')}
            />
            <TestimonialCard
              name={t('testimonials.clients.second.name')}
              date={t('testimonials.clients.second.date')}
              image="/hewan-photos/sandro-selam.jpg"
              testimonial={t('testimonials.clients.second.text')}
            />
            <TestimonialCard
              name={t('testimonials.clients.third.name')}
              date={t('testimonials.clients.third.date')}
              image="/hewan-photos/sandro-selam.jpg"
              testimonial={t('testimonials.clients.third.text')}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-[#f8f6f4] py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="mb-12 text-center font-display text-2xl font-light tracking-[0.15em] md:text-3xl">
            {t('contact.title')}
          </h2>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col items-center justify-center space-y-6">
            <h3 className="font-serif text-xl tracking-wider">HEWAN'S EVENT</h3>
            <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              <Link href="/" className="text-xs tracking-wide text-neutral-600 hover:text-neutral-900">
                {t('navigation.home')}
              </Link>
              <Link href="/services" className="text-xs tracking-wide text-neutral-600 hover:text-neutral-900">
                {t('navigation.services')}
              </Link>
              <Link href="/gallery" className="text-xs tracking-wide text-neutral-600 hover:text-neutral-900">
                {t('navigation.gallery')}
              </Link>
              <Link href="#contact" className="text-xs tracking-wide text-neutral-600 hover:text-neutral-900">
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