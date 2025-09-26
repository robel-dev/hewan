'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { cn } from "@/lib/utils"

// Team member interface
interface TeamMember {
  id: number
  name: string
  role: string
  image: string
}

export default function AboutPage() {
  const t = useTranslations('about')
  
  // Team members data
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: t('team.members.first.name'),
      role: t('team.members.first.role'),
      image: "/team/team-member-1.png" // Replace with actual images
    },
    {
      id: 2,
      name: t('team.members.second.name'),
      role: t('team.members.second.role'),
      image: "/team/team-member-2.png"
    },
    {
      id: 3,
      name: t('team.members.third.name'),
      role: t('team.members.third.role'),
      image: "/team/team-member-3.png"
    },
    {
      id: 4,
      name: t('team.members.fourth.name'),
      role: t('team.members.fourth.role'),
      image: "/team/team-member-4.png"
    }
  ]

  return (
    <div className="min-h-screen bg-[#faf9f8]">
      {/* Hero section with background image */}
      <div className="relative h-[40vh] w-full bg-neutral-900">
        <div className="absolute inset-0 opacity-50">
          <Image
            src="/refined-garden-wedding.png" // Replace with an appropriate team image
            alt="Our Team"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-serif text-4xl md:text-5xl text-white tracking-wide">
            {t('title')}
          </h1>
        </div>
      </div>

      {/* About us content */}
      <section className="py-16 container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="font-serif text-3xl mb-6">{t('subtitle')}</h2>
          <p className="text-neutral-700 mb-8">
            {t('description')}
          </p>
          <p className="text-neutral-700">
            {t('mission')}
          </p>
        </div>

        {/* Team section */}
        <div className="mt-24">
          <h2 className="font-serif text-3xl text-center mb-16">{t('team.title')}</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {teamMembers.map((member) => (
              <div key={member.id} className="flex flex-col items-center group">
                <div className="relative h-80 w-full mb-6 overflow-hidden rounded-md">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif text-xl mb-1">{member.name}</h3>
                <p className="text-neutral-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 