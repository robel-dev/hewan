"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'
import { i18nConfig } from '@/app/i18n/config'
import { usePathname } from 'next/navigation'

type Locale = 'en' | 'sv' | 'ti';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const t = useTranslations();
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const pathSegments = pathname.split('/');
  const currentRoute = pathSegments.length > 2 ? `/${pathSegments.slice(2).join('/')}` : '';

  // Check if the current page is the gallery page
  const isGalleryPage = currentRoute === '/gallery';
  // Check if the current page is the home page
  const isHomePage = currentRoute === '';

  const isActive = (path: string) => {
    // Use currentRoute for comparison, remove locale prefix
    const activePath = path.replace(`/${locale}`, '');
    return activePath === currentRoute || (activePath === '' && currentRoute === '');
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const getLocalizedHref = (loc: string) => {
    return `/${loc}${currentRoute}`;
  };

  // Condition to show the central logo
  const showLogo = isScrolled || !isHomePage;

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        // Always apply scrolled background on gallery page
        (isScrolled || isGalleryPage) ? "bg-white/70 shadow-sm backdrop-blur-sm" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        {/* Desktop Nav Links */}
        <nav className="hidden items-center space-x-8 md:flex">
          <Link
            href={`/${locale}`}
            className={cn(
              "font-display text-sm tracking-widest hover:text-neutral-600 relative",
              // Apply black text if scrolled OR on gallery page
              (isScrolled || isGalleryPage) ? "text-neutral-800" : "text-white",
              isActive(`/${locale}`) && "after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-current"
            )}
          >
            {t('navigation.home')}
          </Link>
          <Link
            href={`/${locale}/services`}
            className={cn(
              "font-display text-sm tracking-widest hover:text-neutral-600 relative",
              (isScrolled || isGalleryPage) ? "text-neutral-800" : "text-white",
              isActive(`/${locale}/services`) && "after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-current"
            )}
          >
            {t('navigation.services')}
          </Link>
          <Link
            href={`/${locale}/gallery`}
            className={cn(
              "font-display text-sm tracking-widest hover:text-neutral-600 relative",
              (isScrolled || isGalleryPage) ? "text-neutral-800" : "text-white",
              isActive(`/${locale}/gallery`) && "after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-current"
            )}
          >
            {t('navigation.gallery')}
          </Link>
        </nav>

        {/* Logo - Conditionally rendered */}
        {showLogo && (
        <Link href={`/${locale}`} className={cn(
          "font-display text-xl font-light tracking-[0.15em]",
            // Apply black text if scrolled OR on gallery page
            (isScrolled || isGalleryPage) ? "text-neutral-800" : "text-white"
        )}>
          HEWAN'S EVENT
        </Link>
        )}
        {/* Add a placeholder div when logo is hidden to maintain spacing (optional but recommended) */}
        {!showLogo && <div className="w-[150px]"></div>} {/* Adjust width as needed */}

        {/* Desktop Nav Links (Right) */}
        <nav className="hidden items-center space-x-8 md:flex">
          <Link
            href={`/${locale}/blog`}
            className={cn(
              "font-display text-sm tracking-widest hover:text-neutral-600 relative",
              (isScrolled || isGalleryPage) ? "text-neutral-800" : "text-white",
              isActive(`/${locale}/blog`) && "after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-current"
            )}
          >
            {t('navigation.blog')}
          </Link>
          <Link
            href="#contact"
            className={cn(
            "font-display text-sm tracking-widest hover:text-neutral-600",
               // Apply black text if scrolled OR on gallery page
              (isScrolled || isGalleryPage) ? "text-neutral-800" : "text-white"
            )}
          >
            {t('navigation.contact')}
          </Link>

          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger className={cn(
              "flex items-center space-x-1 font-display text-sm tracking-widest focus:outline-none uppercase",
               // Apply black text if scrolled OR on gallery page
              (isScrolled || isGalleryPage) ? "text-neutral-800 hover:text-neutral-600" : "text-white hover:text-white/80"
            )}>
              <span className={cn("font-light", locale === "ti" ? "font-geez" : "")}>
                {i18nConfig.localeNames[locale]}
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-[100px] bg-white/95 backdrop-blur-sm">
              {i18nConfig.locales.map((loc) => (
                <DropdownMenuItem key={loc}>
                  <Link 
                    href={getLocalizedHref(loc)} 
                    className={cn(
                    "w-full font-display text-sm tracking-widest text-neutral-800 hover:bg-neutral-50 focus:bg-neutral-50",
                    loc === "ti" ? "font-geez" : ""
                    )}
                  >
                    {i18nConfig.localeNames[loc]}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Mobile Menu Trigger */}
        <div className="flex items-center space-x-4 md:hidden">
          {/* Mobile Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger className={cn(
              "flex items-center space-x-1 font-display text-sm tracking-widest focus:outline-none uppercase",
              // Apply black text if scrolled OR on gallery page
              (isScrolled || isGalleryPage) ? "text-neutral-800 hover:text-neutral-600" : "text-white hover:text-white/80"
            )}>
              <span className={cn("font-light", locale === "ti" ? "font-geez" : "")}>
                {i18nConfig.localeNames[locale]}
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-[100px] bg-white/95 backdrop-blur-sm">
              {i18nConfig.locales.map((loc) => (
                <DropdownMenuItem key={loc}>
                  <Link 
                    href={getLocalizedHref(loc)} 
                    className={cn(
                    "w-full font-display text-sm tracking-widest text-neutral-800 hover:bg-neutral-50 focus:bg-neutral-50",
                    loc === "ti" ? "font-geez" : ""
                    )}
                  >
                    {i18nConfig.localeNames[loc]}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <button className="block" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? 
              <X className={cn("h-6 w-6", (isScrolled || isGalleryPage) ? "text-neutral-800" : "text-white")} /> :
              <Menu className={cn("h-6 w-6", (isScrolled || isGalleryPage) ? "text-neutral-800" : "text-white")} />
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
              className={cn(
                "font-display text-base tracking-widest text-neutral-800 relative",
                isActive(`/${locale}`) && "after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-current"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('navigation.home')}
            </Link>
            <Link
              href={`/${locale}/services`}
              className={cn(
                "font-display text-base tracking-widest text-neutral-800 relative",
                isActive(`/${locale}/services`) && "after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-current"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('navigation.services')}
            </Link>
            <Link
              href={`/${locale}/gallery`}
              className={cn(
                "font-display text-base tracking-widest text-neutral-800 relative",
                isActive(`/${locale}/gallery`) && "after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-current"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('navigation.gallery')}
            </Link>
            <Link 
              href={`/${locale}/blog`}
              className={cn(
                "font-display text-base tracking-widest text-neutral-800 relative",
                isActive(`/${locale}/blog`) && "after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-current"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('navigation.blog')}
            </Link>
            <Link
              href="#contact"
              className={cn(
                "font-display text-base tracking-widest text-neutral-800 relative",
                isActive(`/${locale}/contact`) && "after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-current"
              )}
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
