"use client";

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

// Define a helper function to ensure valid image sources
const getValidImageSrc = (src: string | undefined | null, fallback: string): string => {
  if (!src || src.trim() === "") {
    return fallback
  }
  return src
}

interface LogoReelProps {
  speed?: number // Speed of rotation in seconds
  pauseOnHover?: boolean
  title?: string
  subtitle?: string
  logos?: {
    id: number
    src: string
    alt: string
    width?: number
    height?: number
  }[]
}

export default function LogoReel({
  speed = 30,
  pauseOnHover = true,
  title = "Trusted By",
  subtitle = "We're proud to work with these amazing wedding industry partners",
  logos = defaultLogos,
}: LogoReelProps) {
  const [isPaused, setIsPaused] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState(0)

  // Update container width on resize
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth)
      }
    }

    updateWidth()
    window.addEventListener("resize", updateWidth)
    return () => window.removeEventListener("resize", updateWidth)
  }, [])

  return (
    <div className="w-full overflow-hidden bg-white py-16">
      {(title || subtitle) && (
        <div className="mb-12 text-center">
          {title && <h2 className="font-serif text-2xl font-medium text-gray-900">{title}</h2>}
          {subtitle && <p className="mt-3 text-gray-600">{subtitle}</p>}
        </div>
      )}

      <div
        ref={containerRef}
        className="relative w-full py-8"
        onMouseEnter={() => pauseOnHover && setIsPaused(true)}
        onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      >
        <div
          className="flex"
          style={{
            animation: isPaused ? "none" : `scroll ${speed}s linear infinite`,
          }}
        >
          {/* First set of logos */}
          <div className="flex min-w-full items-center justify-around px-8">
            {logos.map((logo) => {
              const logoSrc = getValidImageSrc(
                logo.src,
                `/placeholder.svg?height=60&width=150&query=${encodeURIComponent(logo.alt)}`
              )
              
              return (
                <div
                  key={logo.id}
                  className="mx-12 flex min-w-[250px] items-center justify-center px-8 grayscale transition-all duration-300 hover:grayscale-0"
                >
                  <div className="relative h-20 w-full">
                    <Image
                      src={logoSrc || "/placeholder.svg"}
                      alt={logo.alt}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100px, 150px"
                    />
                  </div>
                </div>
              )
            })}
          </div>

          {/* Duplicate set of logos for seamless looping */}
          <div className="flex min-w-full items-center justify-around px-8">
            {logos.map((logo) => {
              const logoSrc = getValidImageSrc(
                logo.src,
                `/placeholder.svg?height=60&width=150&query=${encodeURIComponent(logo.alt)}`
              )
              
              return (
                <div
                  key={`dup-${logo.id}`}
                  className="mx-12 flex min-w-[250px] items-center justify-center px-8 grayscale transition-all duration-300 hover:grayscale-0"
                >
                  <div className="relative h-20 w-full">
                    <Image
                      src={logoSrc || "/placeholder.svg"}
                      alt={logo.alt}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100px, 150px"
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  )
}

// Update default logos with fewer items for better spacing
const defaultLogos = [
  {
    id: 1,
    src: "/placeholder-logo.svg",
    alt: "Elegant Events",
  },
  {
    id: 2,
    src: "/placeholder-logo.svg",
    alt: "Floral Fantasy",
  },
  {
    id: 3,
    src: "/placeholder-logo.svg",
    alt: "Wedding Magazine",
  },
  {
    id: 4,
    src: "/placeholder-logo.svg",
    alt: "Luxury Venues",
  },
  {
    id: 5,
    src: "/placeholder-logo.svg",
    alt: "Bridal Couture",
  }
] 