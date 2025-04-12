"use client";

import Image from "next/image"
import { useTranslations } from 'next-intl';

interface TestimonialCardProps {
  name: string
  date: string
  image: string
  testimonial: string
}

export default function TestimonialCard({ name, date, image, testimonial }: TestimonialCardProps) {
  const t = useTranslations();
  
  return (
    <div className="space-y-4">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-sm font-light tracking-[0.1em]">{name}</h3>
          <span className="text-xs text-neutral-500">{date}</span>
        </div>
        <p className="text-sm leading-relaxed text-neutral-600">{testimonial}</p>
        <button className="text-xs font-light tracking-wide text-neutral-900 hover:text-neutral-600">
          {t('testimonials.readMore')}
        </button>
      </div>
    </div>
  )
}
