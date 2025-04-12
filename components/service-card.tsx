"use client";

import Image from "next/image"
import Link from "next/link"

interface ServiceCardProps {
  title: string
  description: string
  imageSrc: string
  href: string
}

export default function ServiceCard({ title, description, imageSrc, href }: ServiceCardProps) {
  return (
    <Link href={href} className="group relative block overflow-hidden">
      <div className="relative h-[400px] w-full">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:opacity-30" />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
        <h3 className="font-display text-xl font-light tracking-[0.15em]">{title}</h3>
        <p className="mt-4 max-w-sm font-sans text-xs font-light tracking-wide">{description}</p>
      </div>
    </Link>
  )
}
