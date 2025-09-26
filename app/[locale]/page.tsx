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

// Import the partner carousel component
import LogoReel from "@/components/partner-carousel"

type Locale = 'en' | 'sv' | 'ti';

// Instagram posts data - REAL VIDEOS FROM @hewans_events (6 videos for 2x3 grid)
// Update the likes, comments, and Instagram URLs with actual data
const instagramPosts = [
  {
    id: 1,
    type: 'reel',
    video: "/videos/hewans-ig/hewan-ig-1.mp4",
    caption: "✨ Hewan's Events x Skärholmens Gård ✨",
    likes: "180",
    comments: "18",
    url: "https://www.instagram.com/reel/YOUR_REEL_ID_HERE/"
  },
  {
    id: 2,
    type: 'reel',
    video: "/videos/hewans-ig/hewan-ig-2.mp4",
    caption: "Hewan's package list",
    likes: "800",
    comments: "60",
    url: "https://www.instagram.com/reel/YOUR_REEL_ID_HERE/"
  },
  {
    id: 3,
    type: 'reel',
    video: "/videos/hewans-ig/hewan-ig-3.mp4",
    caption: "We capture the most beautiful moments",
    likes: "150",
    comments: "12",
    url: "https://www.instagram.com/reel/YOUR_REEL_ID_HERE/"
  },
  {
    id: 4,
    type: 'reel',
    video: "/videos/hewans-ig/hewan-ig-4.mp4",
    caption: "Behind the scenes magic",
    likes: "320",
    comments: "28",
    url: "https://www.instagram.com/reel/YOUR_REEL_ID_HERE/"
  },
  {
    id: 5,
    type: 'reel',
    video: "/videos/hewans-ig/hewan-ig-5.mp4",
    caption: "Event planning perfection",
    likes: "275",
    comments: "22",
    url: "https://www.instagram.com/reel/YOUR_REEL_ID_HERE/"
  },
  {
    id: 6,
    type: 'reel',
    video: "/videos/hewans-ig/hewan-ig-6.mp4",
    caption: "Beautiful slow dance",
    likes: "550",
    comments: "45",
    url: "https://www.instagram.com/reel/YOUR_REEL_ID_HERE/"
  }
];

export default function Home() {
  const t = useTranslations();
  const locale = useLocale() as Locale;
  // Add state to handle video loading if needed
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <main className="min-h-screen bg-[#faf9f8]">
      {/* Hero Section with Glassmorphism */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image with Blur */}
        <div className="absolute inset-0">
            <Image
              src="/images/home-2.jpg"
              alt="Hewan's Event Hero Background"
              fill
            className="object-cover scale-100 blur-sm"
            priority
          />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/40" />
        
        {/* Content Container without glassmorphism */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <div className="max-w-4xl mx-4">
            {/* Logo */}
            <div className="mb-8 flex justify-center">
              <Image
                src="/images/hewan-logo-gold.png"
                alt="Hewan's Event Logo"
                width={350}
                height={350}
                className="object-contain"
              />
            </div>
            
            <h1 className="font-display text-4xl font-light tracking-[0.2em] md:text-5xl lg:text-6xl text-white mb-6">
              {t('hero.title')}
            </h1>
            <p className="max-w-2xl mx-auto font-sans text-sm font-light tracking-[0.25em] md:text-base text-white/90 mb-10 leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <div>
              <Link href="#contact">
                <Button
                  variant="outline"
                  className="border-white/30 bg-white/10 backdrop-blur-sm px-8 py-6 text-sm tracking-[0.15em] text-white hover:bg-white/20 hover:border-white/50 transition-all duration-300 rounded-full"
                >
                  {t('hero.cta')}
                </Button>
              </Link>
            </div>
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
          <ServiceCard
            title={t('services.event.title')}
            description={t('services.event.description')}
            imageSrc="/refined-wedding-feast.png"
            href="/services/events"
          />
          <ServiceCard
          title="Catering"
          description="Delicious food and beverage service for all types of events and celebrations."
          imageSrc="/catering-hewan.jpg"
          href="/services/catering"
        />
        </div>
      </section>

      {/* Wedding Planning Stats Section */}
      <section className="py-24 bg-[#1d1d1d] text-white">
        <div className="mx-auto max-w-6xl px-8">
        <div className="grid md:grid-cols-5 gap-12 items-center">
  <div className="md:col-span-2 pl-6 flex items-center">
    <h2 className="font-display text-lg font-light tracking-wide text-center md:text-left">
      {t('weddingStats.title')}
    </h2>
  </div>
  <div className="md:col-span-3 grid grid-cols-3 gap-14 items-center">
    <div className="flex flex-col justify-center items-center">
      <span className="text-3xl font-display mb-2 tracking-wide">{t('weddingStats.daysCount')}</span>
      <span className="text-[9px] uppercase tracking-widest">{t('weddingStats.days')}</span>
    </div>
    <div className="flex flex-col justify-center items-center">
      <span className="text-3xl font-display mb-2 tracking-wide">{t('weddingStats.weekendsCount')}</span>
      <span className="text-[9px] uppercase tracking-widest">{t('weddingStats.weekends')}</span>
    </div>
    <div className="flex flex-col justify-center items-center">
      <span className="text-3xl font-display mb-2 tracking-wide">{t('weddingStats.vacationsCount')}</span>
      <span className="text-[9px] uppercase tracking-widest">{t('weddingStats.vacations')}</span>
    </div>
  </div>
</div>
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

      {/* Partners Section - Add this before the Social Media Feed Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <LogoReel 
            title={t('partners.title')} 
            subtitle={t('partners.subtitle')}
            speed={40}
          />
        </div>
      </section>

      {/* Follow Our Journey - Instagram Feed Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          {/* Section Title */}
          <h2 className="mb-12 text-center font-display text-2xl font-light tracking-[0.15em] md:text-3xl">
            {t('social.title')}
          </h2>

          {/* Instagram Profile Header */}
          <div className="mb-12 flex flex-col items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 p-0.5">
                  <Avatar className="w-full h-full border-3 border-white">
                    <AvatarImage src="/hewan-photos/hewan-logo.jpg" alt="@hewans_events" className="object-cover" />
                    <AvatarFallback>HE</AvatarFallback>
                  </Avatar>
                </div>
              </div>
              <div className="text-center">
                <Link 
                  href="https://www.instagram.com/hewans_events/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-neutral-700 transition-colors"
                >
                  <h3 className="font-display text-xl font-medium tracking-wide mb-1 hover:underline">@hewans_events</h3>
                </Link>
                <p className="text-sm text-neutral-600 font-sans">{t('social.profileCategory')}</p>
              </div>
            </div>
            
            {/* Stats Row */}
            <div className="flex justify-center gap-8">
              <div className="text-center">
                <div className="font-display text-lg font-medium">164</div>
                <div className="text-xs text-neutral-500 uppercase tracking-wide">Posts</div>
              </div>
              <div className="text-center">
                <div className="font-display text-lg font-medium">2.8K</div>
                <div className="text-xs text-neutral-500 uppercase tracking-wide">Followers</div>
              </div>
              <div className="text-center">
                <div className="font-display text-lg font-medium">544</div>
                <div className="text-xs text-neutral-500 uppercase tracking-wide">Following</div>
              </div>
            </div>
          </div>

          {/* Instagram Posts Grid - No Borders */}
          <div className="grid grid-cols-3 gap-1 mb-12">
            {instagramPosts.map((post) => (
              <Link
                key={post.id}
                href={post.url || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden bg-neutral-100"
              >
                {/* Video Element */}
                <video
                  src={post.video}
                  className="w-full h-full object-cover transition-all duration-300 ease-out group-hover:scale-105"
                  muted
                  loop
                  playsInline
                  autoPlay
                  preload="metadata"
                  onMouseEnter={(e) => {
                    e.currentTarget.currentTime = 0;
                    e.currentTarget.play().catch(() => {});
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.play().catch(() => {});
                  }}
                  onLoadedMetadata={(e) => {
                    e.currentTarget.play().catch(() => {});
                  }}
                  onError={(e) => {
                    console.log('Video load error:', post.video);
                  }}
                />
                
                {/* Play Icon Overlay */}
                <div className="absolute top-2 right-2 z-10">
                  <Play size={12} className="text-white drop-shadow-lg" fill="white"/>
                </div>
                
                {/* Hover Overlay with Stats */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-200 flex items-center justify-center">
                  <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="flex items-center gap-1 text-white">
                      <Heart size={14} fill="white" />
                      <span className="text-sm font-bold">{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-1 text-white">
                      <MessageCircle size={14} fill="white" />
                      <span className="text-sm font-bold">{post.comments}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Follow Button and Call to Action */}
          <div className="text-center space-y-4">
            <Button asChild className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
              <Link href="https://www.instagram.com/hewans_events/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                <Instagram size={18} />
                {t('social.follow')}
              </Link>
            </Button>
            
            <p className="text-neutral-600 font-sans text-sm">
              Get a behind-the-scenes look at our beautiful events
            </p>
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
              video="/videos/hewan-testimony/testimony-1.mp4"
              image="/hewan-photos/sandro-selam.jpg"
              testimonial={t('testimonials.clients.first.text')}
            />
            <TestimonialCard
              name={t('testimonials.clients.second.name')}
              date={t('testimonials.clients.second.date')}
              video="/videos/hewan-testimony/testimony-4.mp4"
              image="/hewan-photos/sandro-selam.jpg"
              testimonial={t('testimonials.clients.second.text')}
            />
            <TestimonialCard
              name={t('testimonials.clients.third.name')}
              date={t('testimonials.clients.third.date')}
              video="/videos/hewan-testimony/testinomy-3.mp4"
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