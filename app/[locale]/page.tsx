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

// Imports needed for the social section
import { Instagram } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Heart, MessageCircle, Play } from "lucide-react" // Assuming these are used for likes/comments

type Locale = 'en' | 'sv' | 'ti';

// Sample Instagram posts data (Update with Hewan's Event details)
const instagramPosts = [
  {
    id: 1,
    type: 'image',
    image: "/hewan-photos/hewan-photo-10.jpg",
    caption: "Elegant celebrations by Hewan's Event",
    likes: "150",
    comments: "12",
    url: "https://www.instagram.com/p/YOUR_POST_ID_HERE/"
  },
  {
    id: 2,
    type: 'reel',
    image: "/hewan-photos/hewan-photo-11.jpg",
    caption: "Behind the scenes Reel!",
    likes: "550",
    comments: "45",
    url: "https://www.instagram.com/reel/YOUR_REEL_ID_HERE/"
  },
  {
    id: 3,
    type: 'image',
    image: "/hewan-photos/hewans-event-3.jpg",
    caption: "Making memories special",
    likes: "180",
    comments: "18",
    url: "https://www.instagram.com/p/CthdbkbIDeD/"
  },
  {
    id: 4,
    type: 'image',
    image: "/hewan-photos/hewans-event-2.jpg",
    caption: "Quick event transformation",
    likes: "800",
    comments: "60",
    url: "https://www.instagram.com/p/CthdbkbIDeD/"
  },
  {
    id: 5,
    type: 'image',
    image: "/hewan-photos/hewan-jebena.jpg",
    caption: "Traditional touches",
    likes: "300",
    comments: "45",
    url: "https://www.instagram.com/p/CthdbkbIDeD/"
  },
  // Add more posts and reels
];

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

      {/* Social Media Feed Section - Simplified without Tabs */}
      <section className="bg-[#f8f6f4] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-12 text-center font-display text-2xl font-light tracking-[0.15em] md:text-3xl">
            {t('social.title')}
          </h2>

          {/* Display Instagram Profile Info Directly */}
          <div className="mb-8 flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
            <div className="flex items-center gap-3">
              <Avatar className="h-12 w-12 border-2 border-neutral-200">
                <AvatarImage src="/hewan-photos/hewan-logo.jpg" alt="@hewans_events" className="object-cover scale-120" />
                <AvatarFallback>HE</AvatarFallback>
              </Avatar>
              <Link href="https://www.instagram.com/hewans_events/" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-700">
                <h3 className="font-display tracking-wider font-medium">@hewans_events</h3>
                <p className="text-sm text-neutral-500 font-sans whitespace-pre-line">{t('social.profileCategory')}</p>
                <p className="text-sm text-neutral-500 font-sans">{t('social.profileDescription')}</p>
              </Link>
            </div>
             {/* Optional: Add Follower counts etc. if desired */}
          </div>

          {/* Display Instagram Grid Directly */}
          <div className="grid grid-cols-2 gap-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {instagramPosts.map((post) => (
              <Link
                key={post.id}
                href={post.url || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="instagram-post group relative h-96 overflow-hidden block"
              >
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.caption}
                  fill
                  className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
                {post.type === 'reel' && (
                  <div className="absolute top-2 right-2 z-10">
                    <Play size={20} className="text-white drop-shadow-md" fill="white"/>
                  </div>
                )}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 transition-all duration-300 group-hover:bg-opacity-40">
                  <div className="flex translate-y-4 gap-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="flex items-center gap-1 text-white">
                      <Heart size={18} fill="white" />
                      <span className="font-sans text-xs">{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-1 text-white">
                      <MessageCircle size={18} fill="white" />
                      <span className="font-sans text-xs">{post.comments}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Display Follow Button Directly */}
          <div className="mt-8 text-center">
             <Button asChild variant="outline" className="border-neutral-300 bg-transparent text-xs tracking-widest text-neutral-800 hover:bg-neutral-50 font-display">
              <Link href="https://www.instagram.com/hewans_events/" target="_blank" rel="noopener noreferrer">
                {t('social.follow')}
              </Link>
             </Button>
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

      {/* Remove grid-auto-rows from style */}
      <style jsx global>{`
        .photo-album { /* Assuming this style applies to the gallery, update if needed */
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          /* grid-auto-rows: 300px; */ /* Removed this */
          grid-auto-flow: dense;
          gap: 4px;
        }

        .photo-item { /* Assuming this style applies to the gallery, update if needed */
          position: relative;
          overflow: hidden;
          height: 100%;
          width: 100%;
        }

        /* ... (rest of the style block, potentially removing media query for grid-auto-rows too) ... */

        @media (max-width: 768px) {
          .photo-album {
             grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
             /* grid-auto-rows: 150px; */ /* Removed this */
           }
         }

      `}</style>
    </main>
  )
} 