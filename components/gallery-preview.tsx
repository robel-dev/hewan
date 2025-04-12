import Image from "next/image"
import Link from "next/link"

export default function GalleryPreview() {
  const images = [
    {
      src: "/refined-wedding-moment.png",
      alt: "Wedding ceremony",
    },
    {
      src: "/placeholder.svg?height=600&width=400&query=elegant wedding floral arch",
      alt: "Wedding floral arch",
    },
    {
      src: "/placeholder.svg?height=600&width=400&query=elegant wedding couple portrait",
      alt: "Wedding couple portrait",
    },
    {
      src: "/placeholder.svg?height=600&width=400&query=elegant wedding reception table",
      alt: "Wedding reception table",
    },
    {
      src: "/placeholder.svg?height=600&width=400&query=elegant wedding cake",
      alt: "Wedding cake",
    },
    {
      src: "/placeholder.svg?height=600&width=400&query=elegant wedding venue decoration",
      alt: "Wedding venue decoration",
    },
    {
      src: "/placeholder.svg?height=600&width=400&query=elegant wedding bride and groom",
      alt: "Bride and groom",
    },
  ]

  return (
    <div className="grid grid-cols-2 gap-1 md:grid-cols-4 lg:grid-cols-7">
      {images.map((image, index) => (
        <Link key={index} href="/gallery" className="group relative aspect-[3/4] overflow-hidden">
          <Image
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
        </Link>
      ))}
    </div>
  )
}
