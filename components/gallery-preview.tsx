import Image from "next/image"
import Link from "next/link"

export default function GalleryPreview() {
  const galleryItems = [
    {
      src: "/hewan-photos/hewan-8.jpg",
      alt: "Beautiful event photography",
      size: "large" // spans 2 columns
    },
    {
      src: "/hewan-photos/hewan-1.jpg",
      alt: "Event decoration and setup",
      size: "large" // spans 2 columns
    },
    {
      src: "/hewan-photos/hewan-2.jpg",
      alt: "Professional event management",
      size: "medium"
    },
    {
      src: "/hewan-photos/hewan-5.jpg",
      alt: "Elegant event styling",
      size: "medium"
    },
    {
      src: "/hewan-photos/hewan-3.jpg",
      alt: "Event entertainment and atmosphere",
      size: "medium"
    },
    {
      src: "/hewan-photos/hewan-6.jpg",
      alt: "Festive celebration moments",
      size: "medium"
    },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[200px]">
      {galleryItems.map((item, index) => (
        <Link 
          key={index} 
          href="/gallery" 
          className={`group relative overflow-hidden rounded-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${
            item.size === 'large' 
              ? 'col-span-2 row-span-2' 
              : item.size === 'tall'
              ? 'row-span-2'
              : 'row-span-1'
          }`}
        >
          <Image
            src={item.src || "/placeholder.svg"}
            alt={item.alt}
            fill
            className="object-cover transition-all duration-500 group-hover:scale-110"
          />
          {/* Subtle overlay for hover effect only */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
        </Link>
      ))}
    </div>
  )
}
