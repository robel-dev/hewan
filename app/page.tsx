import Image from "next/image"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import TestimonialCard from "@/components/testimonial-card"
import GalleryPreview from "@/components/gallery-preview"
import ServiceCard from "@/components/service-card"
import SocialFeed from "@/components/social-feed"
import ContactForm from "@/components/contact-form"
import InfiniteScroll from "@/components/InfiniteScroll"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf9f8]">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <Image
          src="/softly-lit-wedding.png"
          alt="Elegant wedding venue"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="font-display text-4xl font-light tracking-[0.2em] md:text-5xl lg:text-6xl">HEWAN'S EVENT</h1>
          <p className="mt-6 max-w-md font-sans text-xs font-light tracking-[0.25em] md:text-sm">
            CREATING UNFORGETTABLE MOMENTS
          </p>
          <div className="mt-10">
            <Link href="#contact">
              <Button
                variant="outline"
                className="border-white bg-transparent px-8 py-6 text-xs tracking-[0.15em] text-white hover:bg-white/10"
              >
                INQUIRE
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-5xl px-4 py-16 md:py-24">
        <div className="text-center">
          <h2 className="font-display text-2xl font-light tracking-[0.15em] md:text-3xl">CURATED EXPERIENCES</h2>
          <p className="mx-auto mt-6 max-w-2xl font-sans text-xs font-light leading-relaxed tracking-wide text-neutral-600 md:text-sm">
            Each event is thoughtfully designed to reflect your personal style. We believe in creating moments that are
            not only visually stunning but also deeply meaningful.
          </p>
        </div>
      </section>

      {/* Services Preview */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 className="mb-12 text-center font-display text-2xl font-light tracking-[0.15em] md:text-3xl">
          OUR SERVICES
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <ServiceCard
            title="WEDDING PLANNING"
            description="From intimate gatherings to grand celebrations, we curate every detail to perfection."
            imageSrc="/refined-garden-wedding.png"
            href="/services/weddings"
          />
          <ServiceCard
            title="CATERING"
            description="Exquisite culinary experiences tailored to your taste and event style."
            imageSrc="/refined-wedding-feast.png"
            href="/services/catering"
          />
        </div>
        <div className="mt-12 text-center">
          <Link href="/services">
            <Button
              variant="outline"
              className="border-neutral-300 bg-transparent px-8 py-6 text-xs tracking-[0.15em] text-neutral-800 hover:bg-neutral-50"
            >
              SEE MORE SERVICES
            </Button>
          </Link>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-12 text-center font-display text-2xl font-light tracking-[0.15em] md:text-3xl">
            SIGNATURE WORKS
          </h2>
          <p className="mx-auto mb-12 text-center font-sans text-xs font-light tracking-wide text-neutral-600 md:text-sm">
            Each event is thoughtfully curated. Discover a selection of our past work.
          </p>
          <GalleryPreview />
          <div className="mt-12 text-center">
            <Link href="/gallery">
              <Button
                variant="outline"
                className="border-neutral-300 bg-transparent text-xs tracking-widest text-neutral-800 hover:bg-neutral-50"
              >
                VIEW GALLERY
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#f8f6f4] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-2 text-center font-display text-2xl font-light tracking-[0.15em] md:text-3xl">
            WHAT HAVE PREVIOUS COUPLES SAID ABOUT US?
          </h2>
          <p className="mx-auto mb-12 text-center font-sans text-xs font-light tracking-wide text-neutral-600 md:text-sm">
            The experience when you work with Hewan's Event
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            <TestimonialCard
              name="EMMA & JAMES"
              date="12.06.2023"
              image="/timeless-elegance.png"
              testimonial="After several meetings with different coordinators, we decided on Hewan's Event. They were professional, attentive, and made our vision come to life perfectly."
            />
            <TestimonialCard
              name="SOPHIA & MICHAEL"
              date="24.09.2023"
              image="/timeless-elegance.png"
              testimonial="Hewan's team took care of every detail. They were warm and caring with a high level of service, giving tips throughout the planning process."
            />
            <TestimonialCard
              name="OLIVIA & WILLIAM"
              date="03.05.2023"
              image="/timeless-elegance.png"
              testimonial="We are incredibly grateful for the attention to detail and the elegant touch Hewan's Event brought to our wedding day. Everything was perfect."
            />
          </div>
        </div>
      </section>

      {/* Social Media Feed */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-12 text-center text-lg font-light tracking-wide md:text-xl">Follow us on Instagram</h2>
          <SocialFeed />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-[#f8f6f4] py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="mb-12 text-center font-display text-2xl font-light tracking-[0.15em] md:text-3xl">
            GET IN TOUCH
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
                HOME
              </Link>
              <Link href="/services" className="text-xs tracking-wide text-neutral-600 hover:text-neutral-900">
                SERVICES
              </Link>
              <Link href="/gallery" className="text-xs tracking-wide text-neutral-600 hover:text-neutral-900">
                GALLERY
              </Link>
              <Link href="/about" className="text-xs tracking-wide text-neutral-600 hover:text-neutral-900">
                ABOUT
              </Link>
              <Link href="#contact" className="text-xs tracking-wide text-neutral-600 hover:text-neutral-900">
                CONTACT
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
