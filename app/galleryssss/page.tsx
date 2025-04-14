"use client"
import Image from "next/image"
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';

export default function GalleryPage() {
  const galleryImages = [
    {
      src: "/refined-wedding-moment.png",
      alt: "Wedding ceremony",
      category: "Ceremony",
    },
    {
      src: "/placeholder.svg?height=800&width=600&query=elegant wedding reception table setting",
      alt: "Reception table setting",
      category: "Reception",
    },
    {
      src: "/placeholder.svg?height=800&width=600&query=elegant wedding couple portrait",
      alt: "Couple portrait",
      category: "Portraits",
    },
    {
      src: "/placeholder.svg?height=800&width=600&query=elegant wedding floral arrangements",
      alt: "Floral arrangements",
      category: "Details",
    },
    {
      src: "/placeholder.svg?height=800&width=600&query=elegant wedding cake",
      alt: "Wedding cake",
      category: "Details",
    },
    {
      src: "/placeholder.svg?height=800&width=600&query=elegant wedding venue decoration",
      alt: "Venue decoration",
      category: "Decoration",
    },
    {
      src: "/placeholder.svg?height=800&width=600&query=elegant wedding bride and groom",
      alt: "Bride and groom",
      category: "Portraits",
    },
    {
      src: "/placeholder.svg?height=800&width=600&query=elegant wedding invitation suite",
      alt: "Invitation suite",
      category: "Details",
    },
    {
      src: "/placeholder.svg?height=800&width=600&query=elegant wedding first dance",
      alt: "First dance",
      category: "Reception",
    },
    {
      src: "/placeholder.svg?height=800&width=600&query=elegant wedding outdoor ceremony",
      alt: "Outdoor ceremony",
      category: "Ceremony",
    },
    {
      src: "/placeholder.svg?height=800&width=600&query=elegant wedding table centerpiece",
      alt: "Table centerpiece",
      category: "Details",
    },
    {
      src: "/placeholder.svg?height=800&width=600&query=elegant wedding venue entrance",
      alt: "Venue entrance",
      category: "Venue",
    },
  ]

  return (
    <main className="min-h-screen bg-[#faf9f8] pt-24">
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h1 className="mb-4 text-center font-serif text-3xl tracking-wide md:text-4xl">EVENT GALLERY</h1>
        <p className="mx-auto mb-12 max-w-2xl text-center text-xs leading-relaxed tracking-wide text-neutral-600 md:text-sm">
          Each event is thoughtfully curated to reflect the unique style and personality of our clients. Browse through
          our gallery to find inspiration for your special day.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div key={index} className="group relative aspect-[3/4] overflow-hidden">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
              <div className="absolute bottom-0 left-0 right-0 bg-white/80 p-3 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-xs font-light tracking-wide">{image.category}</p>
                <p className="text-xs tracking-wide">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
