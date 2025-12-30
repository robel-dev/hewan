"use client"

import Image from "next/image"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import ContactForm from "@/components/contact-form"

export type ServiceGalleryImage = {
  src: string
  alt?: string
}

export type ServicePageData = {
  id: string
  title: string
  proposition?: string
  description?: string
  details?: string
  heroImage?: ServiceGalleryImage
  gallery?: ServiceGalleryImage[]
  included?: string[]
}

type ServicePageProps = {
  service: ServicePageData
}

export default function ServicePage({ service }: ServicePageProps) {
  const t = useTranslations()
  const includedFallback = t.raw("servicePage.defaults.included")
  const includedItems = service.included?.length
    ? service.included
    : Array.isArray(includedFallback)
      ? includedFallback
      : []
  const descriptionText =
    service.details || service.description || t("servicePage.fallbacks.description")
  const descriptionNote =
    service.details || service.description ? t("servicePage.defaults.descriptionNote") : ""
  const galleryImages = service.gallery ?? []
  const heroImage = service.heroImage ?? galleryImages[0]

  return (
    <section id={service.id} className="bg-[#faf9f8]">
      <div className="relative h-[60vh] w-full overflow-hidden">
        {heroImage ? (
          <Image
            src={heroImage.src}
            alt={heroImage.alt || service.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-neutral-200" />
        )}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
          <h2 className="mb-4 font-display text-3xl font-light tracking-[0.2em] md:text-4xl lg:text-5xl">
            {service.title}
          </h2>
          <p className="max-w-3xl font-sans text-xs font-light tracking-[0.12em] leading-relaxed md:text-sm lg:text-base">
            {service.proposition || service.description || t("servicePage.fallbacks.description")}
          </p>
          <Link href={`#contact-${service.id}`} className="mt-8">
            <Button
              variant="outline"
              className="border-white bg-transparent px-8 py-6 text-xs tracking-[0.15em] text-white hover:bg-white/10"
            >
              {t("services.cta.contact")}
            </Button>
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h3 className="mb-6 font-display text-2xl font-light tracking-[0.15em] md:text-3xl">
              {t("servicePage.sections.description")}
            </h3>
            <p className="font-sans text-sm leading-relaxed text-neutral-700 md:text-base">
              {descriptionText}
            </p>
            {descriptionNote ? (
              <p className="mt-4 font-sans text-sm leading-relaxed text-neutral-700 md:text-base">
                {descriptionNote}
              </p>
            ) : null}
          </div>
          <div>
            <h3 className="mb-6 font-display text-2xl font-light tracking-[0.15em] md:text-3xl">
              {t("servicePage.sections.included")}
            </h3>
            {includedItems.length ? (
              <ul className="space-y-3 font-sans text-sm text-neutral-700 md:text-base">
                {includedItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-neutral-700" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="font-sans text-sm text-neutral-600 md:text-base">
                {t("servicePage.fallbacks.included")}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h3 className="mb-10 text-center font-display text-2xl font-light tracking-[0.15em] md:text-3xl">
            {t("servicePage.sections.gallery")}
          </h3>
          {galleryImages.length ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {galleryImages.map((image, index) => (
                <div key={`${image.src}-${index}`} className="relative h-64 overflow-hidden rounded-lg">
                  <Image
                    src={image.src}
                    alt={image.alt || t("servicePage.defaults.galleryAlt")}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center font-sans text-sm text-neutral-600 md:text-base">
              {t("servicePage.fallbacks.gallery")}
            </p>
          )}
        </div>
      </div>

      <div id={`contact-${service.id}`} className="bg-[#f8f6f4] py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <h3 className="mb-10 text-center font-display text-2xl font-light tracking-[0.15em] md:text-3xl">
            {t("contact.title")}
          </h3>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
