"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'
import { i18nConfig } from '@/app/i18n/config'

type Locale = 'en' | 'sv' | 'ti';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const t = useTranslations();
  const locale = useLocale() as Locale;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/70 shadow-sm backdrop-blur-sm" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <nav className="hidden items-center space-x-8 md:flex">
          <Link href={`/${locale}`} className={cn(
            "font-display text-sm tracking-widest hover:text-neutral-600",
            isScrolled ? "text-neutral-800" : "text-white"
          )}>
            {t('navigation.home')}
          </Link>
          <Link href={`/${locale}/services`} className={cn(
            "font-display text-sm tracking-widest hover:text-neutral-600",
            isScrolled ? "text-neutral-800" : "text-white"
          )}>
            {t('navigation.services')}
          </Link>
          <Link href={`/${locale}/gallery`} className={cn(
            "font-display text-sm tracking-widest hover:text-neutral-600",
            isScrolled ? "text-neutral-800" : "text-white"
          )}>
            {t('navigation.gallery')}
          </Link>
        </nav>

        <Link href={`/${locale}`} className={cn(
          "font-display text-xl font-light tracking-[0.15em]",
          isScrolled ? "text-neutral-800" : "text-white"
        )}>
          HEWAN'S EVENT
        </Link>

        <nav className="hidden items-center space-x-8 md:flex">
          <Link href={`/${locale}/blog`} className={cn(
            "font-display text-sm tracking-widest hover:text-neutral-600",
            isScrolled ? "text-neutral-800" : "text-white"
          )}>
            {t('navigation.blog')}
          </Link>
          <Link href="#contact" className={cn(
            "font-display text-sm tracking-widest hover:text-neutral-600",
            isScrolled ? "text-neutral-800" : "text-white"
          )}>
            {t('navigation.contact')}
          </Link>

          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger className={cn(
              "flex items-center space-x-1 font-display text-sm tracking-widest focus:outline-none uppercase",
              isScrolled ? "text-neutral-800 hover:text-neutral-600" : "text-white hover:text-white/80"
            )}>
              <span className={cn("font-light", locale === "ti" ? "font-geez" : "")}>
                {i18nConfig.localeNames[locale]}
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-[100px] bg-white/95 backdrop-blur-sm">
              {i18nConfig.locales.map((loc) => (
                <DropdownMenuItem key={loc}>
                  <Link href={`/${loc}`} className={cn(
                    "w-full font-display text-sm tracking-widest text-neutral-800 hover:bg-neutral-50 focus:bg-neutral-50",
                    loc === "ti" ? "font-geez" : ""
                  )}>
                    {i18nConfig.localeNames[loc]}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        <div className="flex items-center space-x-4 md:hidden">
          {/* Mobile Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger className={cn(
              "flex items-center space-x-1 font-display text-sm tracking-widest focus:outline-none uppercase",
              isScrolled ? "text-neutral-800 hover:text-neutral-600" : "text-white hover:text-white/80"
            )}>
              <span className={cn("font-light", locale === "ti" ? "font-geez" : "")}>
                {i18nConfig.localeNames[locale]}
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-[100px] bg-white/95 backdrop-blur-sm">
              {i18nConfig.locales.map((loc) => (
                <DropdownMenuItem key={loc}>
                  <Link href={`/${loc}`} className={cn(
                    "w-full font-display text-sm tracking-widest text-neutral-800 hover:bg-neutral-50 focus:bg-neutral-50",
                    loc === "ti" ? "font-geez" : ""
                  )}>
                    {i18nConfig.localeNames[loc]}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <button className="block" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? 
              <X className={cn("h-6 w-6", isScrolled ? "text-neutral-800" : "text-white")} /> : 
              <Menu className={cn("h-6 w-6", isScrolled ? "text-neutral-800" : "text-white")} />
            }
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-white px-4 py-6 md:hidden">
          <nav className="flex flex-col space-y-6">
            <Link
              href={`/${locale}`}
              className="font-display text-base tracking-widest text-neutral-800"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('navigation.home')}
            </Link>
            <Link
              href={`/${locale}/services`}
              className="font-display text-base tracking-widest text-neutral-800"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('navigation.services')}
            </Link>
            <Link
              href={`/${locale}/gallery`}
              className="font-display text-base tracking-widest text-neutral-800"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('navigation.gallery')}
            </Link>
            <Link 
              href={`/${locale}/blog`}
              className="font-display text-base tracking-widest text-neutral-800" 
              onClick={() => setIsMenuOpen(false)}
            >
              {t('navigation.blog')}
            </Link>
            <Link
              href="#contact"
              className="font-display text-base tracking-widest text-neutral-800"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('navigation.contact')}
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
