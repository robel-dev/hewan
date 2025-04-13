"use client";

import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, X, Filter, Loader2, ZoomIn, ZoomOut, Info } from "lucide-react"
import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Number of images to load per batch
const IMAGES_PER_BATCH = 8

type Locale = 'en' | 'sv' | 'ti';

// Sample image data (you can replace with your actual images)
const allImages = [
  {
    id: 1,
    src: "/hewan-photos/hewans-event-6.png",
    alt: "Hewan's Event Celebration",
    title: "Elegant Celebration",
    location: "Stockholm",
    category: "ceremony"
  },
  {
    id: 2,
    src: "/hewan-photos/hewans-event-5.png",
    alt: "Hewan's Event Setup",
    title: "Event Setup",
    location: "Stockholm",
    category: "venue"
  },
  {
    id: 3,
    src: "/hewan-photos/hewan-1.jpg",
    alt: "Traditional Ceremony",
    title: "Traditional Celebration",
    location: "Stockholm",
    category: "ceremony"
  },
  {
    id: 4,
    src: "/hewan-photos/hewan-2.jpg",
    alt: "Event Decoration",
    title: "Elegant Decor",
    location: "Stockholm",
    category: "venue"
  },
  {
    id: 5,
    src: "/hewan-photos/hewan-3.jpg",
    alt: "Reception Setup",
    title: "Reception Details",
    location: "Stockholm",
    category: "reception"
  },
  {
    id: 6,
    src: "/hewan-photos/hewan-5.jpg",
    alt: "Event Celebration",
    title: "Celebration Moments",
    location: "Stockholm",
    category: "reception"
  },
  {
    id: 7,
    src: "/hewan-photos/hewan-6.jpg",
    alt: "Traditional Setup",
    title: "Traditional Elements",
    location: "Stockholm",
    category: "ceremony"
  },
  {
    id: 8,
    src: "/hewan-photos/hewan-7.jpg",
    alt: "Event Details",
    title: "Detailed Arrangements",
    location: "Stockholm",
    category: "venue"
  },
  {
    id: 9,
    src: "/hewan-photos/hewan-8.jpg",
    alt: "Celebration Setup",
    title: "Celebration Setup",
    location: "Stockholm",
    category: "venue"
  },
  {
    id: 10,
    src: "/hewan-photos/hewan-jebena.jpg",
    alt: "Traditional Coffee Ceremony",
    title: "Coffee Ceremony",
    location: "Stockholm",
    category: "ceremony"
  },
  {
    id: 11,
    src: "/hewan-photos/20230723_145426.jpg",
    alt: "Summer Event",
    title: "Summer Celebration",
    location: "Stockholm",
    category: "reception"
  },
  {
    id: 12,
    src: "/hewan-photos/20230723_145451.jpg",
    alt: "Event Setup",
    title: "Event Arrangement",
    location: "Stockholm",
    category: "venue"
  },
  {
    id: 13,
    src: "/hewan-photos/20230723_145614.jpg",
    alt: "Celebration Details",
    title: "Celebration Details",
    location: "Stockholm",
    category: "reception"
  },
  {
    id: 14,
    src: "/hewan-photos/20230723_150401.jpg",
    alt: "Event Celebration",
    title: "Festive Moments",
    location: "Stockholm",
    category: "ceremony"
  },
  {
    id: 15,
    src: "/hewan-photos/20230723_185414.jpg",
    alt: "Evening Celebration",
    title: "Evening Event",
    location: "Stockholm",
    category: "reception"
  },
  {
    id: 16,
    src: "/hewan-photos/20230723_190215.jpg",
    alt: "Night Celebration",
    title: "Night Festivities",
    location: "Stockholm",
    category: "reception"
  },
  {
    id: 17,
    src: "/hewan-photos/hewans-event.jpg",
    alt: "Hewan's Event Main",
    title: "Signature Event",
    location: "Stockholm",
    category: "venue"
  },
  {
    id: 18,
    src: "/hewan-photos/hewans-event-2.jpg",
    alt: "Event Setup",
    title: "Event Design",
    location: "Stockholm",
    category: "venue"
  },
  {
    id: 19,
    src: "/hewan-photos/hewans-event-3.jpg",
    alt: "Celebration Setup",
    title: "Celebration Design",
    location: "Stockholm",
    category: "venue"
  },
  {
    id: 20,
    src: "/hewan-photos/20230225_174625.jpg",
    alt: "Winter Celebration",
    title: "Winter Event",
    location: "Stockholm",
    category: "ceremony"
  }
];

export default function GalleryPage() {
  const t = useTranslations();
  const locale = useLocale() as Locale;
  
  // Add all the necessary state variables
  const [category, setCategory] = useState("all")
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)
  const [visibleImages, setVisibleImages] = useState<typeof allImages>([])
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [isZoomed, setIsZoomed] = useState(false)
  const [showInfo, setShowInfo] = useState(true)
  const loaderRef = useRef<HTMLDivElement>(null)
  const lightboxRef = useRef<HTMLDivElement>(null)

  // Filter images based on selected category
  const filteredImages = category === "all" ? allImages : allImages.filter((img) => img.category === category)

  // Reset when category changes
  useEffect(() => {
    setVisibleImages(filteredImages.slice(0, IMAGES_PER_BATCH))
    setPage(1)
    setHasMore(filteredImages.length > IMAGES_PER_BATCH)
  }, [category])

  // Set up intersection observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && hasMore && !isLoading) {
          loadMoreImages()
        }
      },
      { threshold: 0.1 },
    )

    if (loaderRef.current) {
      observer.observe(loaderRef.current)
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current)
      }
    }
  }, [hasMore, isLoading, page])

  // Function to load more images
  const loadMoreImages = () => {
    setIsLoading(true)
    setTimeout(() => {
      const nextPage = page + 1
      const startIndex = page * IMAGES_PER_BATCH
      const endIndex = startIndex + IMAGES_PER_BATCH
      const newImages = filteredImages.slice(startIndex, endIndex)
      setVisibleImages((prev) => [...prev, ...newImages])
      setPage(nextPage)
      setHasMore(endIndex < filteredImages.length)
      setIsLoading(false)
    }, 800)
  }

  const openLightbox = (index: number) => {
    setCurrentImage(index)
    setLightboxOpen(true)
    setIsZoomed(false)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = "auto"
  }

  const goToPrevious = useCallback(() => {
    setCurrentImage((prev) => (prev === 0 ? visibleImages.length - 1 : prev - 1))
    setIsZoomed(false)
  }, [visibleImages.length])

  const goToNext = useCallback(() => {
    setCurrentImage((prev) => (prev === visibleImages.length - 1 ? 0 : prev + 1))
    setIsZoomed(false)
  }, [visibleImages.length])

  const toggleZoom = () => {
    setIsZoomed((prev) => !prev)
  }

  const toggleInfo = () => {
    setShowInfo((prev) => !prev)
  }

  return (
    <div className="min-h-screen bg-[#faf9f8]">
      {/* Header with filter */}
      <header className="fixed left-0 right-0 top-0 z-40 bg-white/70 px-4 py-4 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <h1 className="font-display text-2xl font-light tracking-[0.15em] text-neutral-800">
            {t('gallery.title')}
          </h1>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2 font-display text-xs tracking-widest">
                <Filter size={16} />
                {category === "all"
                  ? "All Photos"
                  : category === "venue"
                    ? "Venues"
                    : category === "ceremony"
                      ? "Ceremonies"
                      : "Receptions"}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white/95 backdrop-blur-sm">
              <DropdownMenuItem className="font-display text-xs tracking-widest" onClick={() => setCategory("all")}>
                All Photos
              </DropdownMenuItem>
              <DropdownMenuItem className="font-display text-xs tracking-widest" onClick={() => setCategory("venue")}>
                Venues
              </DropdownMenuItem>
              <DropdownMenuItem className="font-display text-xs tracking-widest" onClick={() => setCategory("ceremony")}>
                Ceremonies
              </DropdownMenuItem>
              <DropdownMenuItem className="font-display text-xs tracking-widest" onClick={() => setCategory("reception")}>
                Receptions
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      {/* Photo Album Grid */}
      <div className="pt-24">
        <div className="photo-album">
          {visibleImages.map((image, index) => (
            <div
              key={image.id}
              className="photo-item group relative cursor-pointer overflow-hidden"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 transition-all duration-300 group-hover:bg-opacity-20"></div>
              <div className="absolute bottom-0 left-0 right-0 translate-y-full bg-gradient-to-t from-black/70 to-transparent p-4 text-white transition-transform duration-300 group-hover:translate-y-0">
                <h3 className="font-display text-lg font-light tracking-wider">{image.title}</h3>
                <p className="font-sans text-sm text-gray-200">{image.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Loading indicator */}
        {(hasMore || isLoading) && (
          <div ref={loaderRef} className="flex items-center justify-center p-8">
            {isLoading ? (
              <div className="flex items-center gap-2">
                <Loader2 className="h-5 w-5 animate-spin text-neutral-500" />
                <span className="font-display text-sm tracking-wider text-neutral-500">Loading more beautiful moments...</span>
              </div>
            ) : (
              <div className="h-8 w-full"></div>
            )}
          </div>
        )}

        {/* End of gallery message */}
        {!hasMore && visibleImages.length > 0 && !isLoading && (
          <div className="py-8 text-center font-display text-sm tracking-wider text-neutral-500">
            You've reached the end of our gallery. Contact us to create your own beautiful memories!
          </div>
        )}
      </div>

      {/* Contact CTA - Floating button */}
      <div className="fixed bottom-6 right-6 z-30">
        <Button
          asChild
          className="rounded-full bg-neutral-800 px-6 py-6 font-display text-xs tracking-widest text-white shadow-lg hover:bg-neutral-700"
        >
          <Link href={`/${locale}/#contact`}>Contact Us</Link>
        </Button>
      </div>

      {/* Enhanced Lightbox */}
      {lightboxOpen && visibleImages.length > 0 && (
        <div
          ref={lightboxRef}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-95 transition-opacity duration-300 ease-in-out"
          onClick={(e) => {
            if (e.target === lightboxRef.current) closeLightbox()
          }}
        >
          {/* [Keep all the existing lightbox controls] */}
          
          {/* Image info */}
          {showInfo && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-12 text-center text-white transition-opacity duration-300">
              <h3 className="font-display text-2xl font-light tracking-wider">{visibleImages[currentImage].title}</h3>
              <p className="mt-1 font-sans text-gray-300">{visibleImages[currentImage].location}</p>
              <p className="mt-2 font-display text-sm tracking-wider text-gray-400">{visibleImages[currentImage].category}</p>
            </div>
          )}

          {/* Keyboard shortcuts info */}
          <div className="absolute bottom-4 right-4 font-display text-xs tracking-wider text-gray-500">
            <span className="mr-2">← → arrows to navigate</span>
            <span className="mr-2">space to zoom</span>
            <span>esc to close</span>
          </div>
        </div>
      )}

      <style jsx global>{`
        .photo-album {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          grid-auto-rows: 300px;
          grid-auto-flow: dense;
          gap: 4px;
        }
        
        .photo-item {
          position: relative;
          overflow: hidden;
          height: 100%;
          width: 100%;
        }
        
        .photo-item:nth-child(5n+1) {
          grid-column: span 2;
          grid-row: span 2;
        }
        
        .photo-item:nth-child(8n+3) {
          grid-column: span 2;
        }
        
        .photo-item:nth-child(12n+8) {
          grid-row: span 2;
        }
        
        @media (max-width: 768px) {
          .photo-album {
            grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
            grid-auto-rows: 150px;
          }
        }
      `}</style>
    </div>
  )
} 