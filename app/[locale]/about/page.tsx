'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { cn } from "@/lib/utils"
import { Award, Heart, Users, Star, CheckCircle, Sparkles, ArrowRight } from 'lucide-react'

// Team member interface
interface TeamMember {
  id: number
  name: string
  role: string
  image: string
  description: string
}

export default function AboutPage() {
  const t = useTranslations('about')
  
  // Team members data
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: t('team.members.first.name'),
      role: t('team.members.first.role'),
      image: "/team/team-member-1.png",
      description: t('team.members.first.description')
    },
    {
      id: 2,
      name: t('team.members.second.name'),
      role: t('team.members.second.role'),
      image: "/team/team-member-2.png",
      description: t('team.members.second.description')
    },
    {
      id: 3,
      name: t('team.members.third.name'),
      role: t('team.members.third.role'),
      image: "/team/team-member-3.png",
      description: t('team.members.third.description')
    },
    {
      id: 4,
      name: t('team.members.fourth.name'),
      role: t('team.members.fourth.role'),
      image: "/team/team-member-4.png",
      description: t('team.members.fourth.description')
    }
  ]

  const companyValues = [
    {
      icon: Heart,
      title: t('values.passion.title'),
      description: t('values.passion.description')
    },
    {
      icon: Award,
      title: t('values.excellence.title'),
      description: t('values.excellence.description')
    },
    {
      icon: Users,
      title: t('values.collaboration.title'),
      description: t('values.collaboration.description')
    },
    {
      icon: Sparkles,
      title: t('values.creativity.title'),
      description: t('values.creativity.description')
    }
  ]

  const achievements = [
    { number: "500+", label: t('achievements.events') },
    { number: "10+", label: t('achievements.years') },
    { number: "98%", label: t('achievements.satisfaction') },
    { number: "50+", label: t('achievements.venues') }
  ]

  return (
    <div className="min-h-screen bg-[#faf9f8]">
      {/* Simple Hero Section - Different from Homepage */}
      <section className="relative py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Simple logo without glassmorphism */}
            <div className="mb-8 flex justify-center">
              <Image
                src="/images/hewan-logo-gold.png"
                alt="Hewan's Event Logo"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.2em] text-neutral-800 mb-6">
              {t('title')}
            </h1>
            <p className="text-xl md:text-2xl font-light text-neutral-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Story Section with Unique Layout */}
      <section className="py-20 bg-gradient-to-b from-white to-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Text Content */}
              <div className="order-2 lg:order-1">
                <h2 className="font-display text-3xl md:text-4xl font-light tracking-[0.15em] text-neutral-800 mb-8">
                  {t('story.title')}
                </h2>
                
                <div className="space-y-6">
                  <p className="text-neutral-700 leading-relaxed text-lg">
                    {t('story.description1')}
                  </p>
                  <p className="text-neutral-700 leading-relaxed text-lg">
                    {t('story.description2')}
                  </p>
                  <p className="text-neutral-700 leading-relaxed text-lg">
                    {t('story.description3')}
                  </p>
                </div>
                
                <div className="mt-8">
                  <Link href="#team">
                    <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full font-light tracking-wide transition-all duration-300">
                      {t('hero.cta.team')}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              
              {/* Image Grid */}
              <div className="order-1 lg:order-2">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="aspect-[3/4] relative rounded-2xl overflow-hidden shadow-lg">
                      <Image
                        src="/refined-garden-wedding.png"
                        alt="Our Work"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-lg">
                      <Image
                        src="/refined-wedding-feast.png"
                        alt="Our Events"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-lg">
                      <Image
                        src="/refined-wedding-moment.png"
                        alt="Our Service"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="aspect-[3/4] relative rounded-2xl overflow-hidden shadow-lg">
                      <Image
                        src="/timeless-elegance.png"
                        alt="Our Style"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section with Cards Layout */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-light tracking-[0.15em] text-neutral-800 mb-6">
              {t('values.title')}
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto text-lg leading-relaxed">
              {t('values.subtitle')}
            </p>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-8"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {companyValues.map((value, index) => (
              <div key={index} className="bg-white border border-neutral-100 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 group">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-100 transition-colors duration-300">
                    <value.icon className="w-8 h-8 text-amber-600" />
                  </div>
                  <h3 className="font-display text-xl font-light tracking-wide text-neutral-800 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed text-sm">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section - Horizontal Layout */}
      <section className="py-16 bg-gradient-to-r from-neutral-800 to-neutral-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {achievements.map((achievement, index) => (
              <div key={index} className="group">
                <div className="text-4xl md:text-5xl font-light text-amber-400 mb-2 group-hover:text-amber-300 transition-colors duration-300">
                  {achievement.number}
                </div>
                <div className="text-white/80 text-sm tracking-widest uppercase font-light">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section with Unique Grid */}
      <section id="team" className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-light tracking-[0.15em] text-neutral-800 mb-6">
              {t('team.title')}
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto text-lg leading-relaxed">
              {t('team.subtitle')}
            </p>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-8"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member) => (
              <div key={member.id} className="group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                  {/* Image */}
                  <div className="aspect-[3/4] relative overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Hover Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-sm leading-relaxed">
                        {member.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Info */}
                  <div className="p-6 text-center">
                    <h3 className="font-display text-xl font-light tracking-wide text-neutral-800 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-amber-600 text-sm tracking-widest uppercase font-light">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section with Quote Design */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Star className="w-12 h-12 text-amber-600 mx-auto mb-8" />
            <h2 className="font-display text-3xl md:text-4xl font-light tracking-[0.15em] text-neutral-800 mb-8">
              {t('mission.title')}
            </h2>
            
            <blockquote className="text-2xl md:text-3xl font-light leading-relaxed text-neutral-700 italic mb-12 relative">
              <span className="text-6xl text-amber-200 absolute -top-4 -left-4">"</span>
              {t('mission.quote')}
              <span className="text-6xl text-amber-200 absolute -bottom-8 -right-4">"</span>
            </blockquote>
            
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              {[
                { icon: CheckCircle, text: t('mission.points.quality') },
                { icon: Heart, text: t('mission.points.care') },
                { icon: Sparkles, text: t('mission.points.creativity') }
              ].map((point, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mb-4">
                    <point.icon className="w-8 h-8 text-amber-600" />
                  </div>
                  <p className="text-neutral-700 font-light tracking-wide">{point.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-neutral-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-light tracking-[0.15em] text-neutral-800 mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-xl text-neutral-600 mb-10 leading-relaxed font-light">
              {t('cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services">
                <Button
                  variant="outline"
                  className="border-amber-300 text-amber-700 hover:bg-amber-50 px-8 py-3 rounded-full font-light tracking-wide transition-all duration-300"
                >
                  {t('cta.services')}
                </Button>
              </Link>
              <Link href="#contact">
                <Button
                  className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full font-light tracking-wide transition-all duration-300"
                >
                  {t('cta.contact')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}