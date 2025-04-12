import Image from "next/image"
import Link from "next/link"

export default function SocialFeed() {
  const socialPosts = [
    {
      src: "/placeholder.svg?height=400&width=400&query=elegant wedding couple in white attire",
      alt: "Wedding couple",
    },
    {
      src: "/placeholder.svg?height=400&width=400&query=elegant wedding accessories watch cufflinks",
      alt: "Wedding accessories",
    },
    {
      src: "/placeholder.svg?height=400&width=400&query=elegant wedding couple running in field",
      alt: "Wedding couple in field",
    },
    {
      src: "/placeholder.svg?height=400&width=400&query=elegant wedding ring and bracelet",
      alt: "Wedding jewelry",
    },
  ]

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {socialPosts.map((post, index) => (
        <Link
          key={index}
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative aspect-square overflow-hidden"
        >
          <Image
            src={post.src || "/placeholder.svg"}
            alt={post.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
        </Link>
      ))}
    </div>
  )
}
