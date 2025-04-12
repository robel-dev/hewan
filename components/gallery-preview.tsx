import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function GalleryPreview() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const images = [
    {
      src: "/hewan-photos/hewan-8.jpg",
      alt: "Wedding ceremony",
    },
    {
      src: "/hewan-photos/hewan-1.jpg",
      alt: "Wedding ceremony",
    }, {
      src: "/hewan-photos/hewan-2.jpg",
      alt: "Wedding ceremony",
    }, {
      src: "/hewan-photos/hewan-5.jpg",
      alt: "Wedding ceremony",
    }, {
      src: "/hewan-photos/hewan-3.jpg",
      alt: "Wedding ceremony",
    }, {
      src: "/hewan-photos/hewan-6.jpg",
      alt: "Wedding ceremony",
    }, {
      src: "/hewan-photos/hewan-7.jpg",
      alt: "Wedding ceremony",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 p-4">
      {images.map((image, index) => (
        <Link 
          key={index} 
          href="/gallery" 
          className={`group relative aspect-[3/5] overflow-hidden rounded-xl transform transition-all duration-500 ${
            index === currentIndex ? 'scale-105 z-10 shadow-xl' : 'scale-100 hover:shadow-lg'
          }`}
        >
          <Image
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            fill
            className={`object-cover transition-all duration-700 ${
              index === currentIndex 
                ? 'scale-115 brightness-110' 
                : 'scale-100 group-hover:scale-110'
            }`}
          />
          <div className={`absolute inset-0 transition-all duration-500 ${
            index === currentIndex
              ? 'bg-black/10'
              : 'bg-black/0 group-hover:bg-black/20'
          }`} />
        </Link>
      ))}
    </div>
  )
}
