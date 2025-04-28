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
      >
        <div className="flex">
          {/* Fixed logos in a single row */}
          <div className="flex min-w-full items-center justify-center gap-8 px-4">
            {logos.map((logo) => {
              const logoSrc = getValidImageSrc(
                logo.src,
                `/placeholder.svg?height=60&width=150&query=${encodeURIComponent(logo.alt)}`
              )
              
              return (
                <div
                  key={logo.id}
                  className="flex min-w-[120px] max-w-[180px] items-center justify-center transition-all duration-300"
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
    </div>
  )
}

// Update default logos with the company logos
const defaultLogos = [
  {
    id: 1,
    src: "/company-logos/brollops-guiden-removebg-preview.png",
    alt: "Bröllops Guiden",
  },
  {
    id: 2,
    src: "/company-logos/svea-logo-removebg-preview.png",
    alt: "Svea",
  },
  {
    id: 3,
    src: "/company-logos/sigtuna-kommun-preview.png",
    alt: "Sigtuna Kommun",
  },
  {
    id: 4,
    src: "/company-logos/vardaga-removebg-preview.png",
    alt: "Vardaga",
  },
  {
    id: 5,
    src: "/company-logos/red-cross-removebg-preview.png",
    alt: "Red Cross",
  },
  {
    id: 6,
    src: "/company-logos/hallstahammars-kommun.png",
    alt: "Hallstahammars Kommun",
  }
] 