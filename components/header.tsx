"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
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
  // Check if the current page is the about page
  const isAboutPage = currentRoute === '/about';

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
  const showLogo = true; // Always show the logo

  return (
    <>
      <header
        className={cn(
          "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
          // Always apply scrolled background on gallery page or about page
          (isScrolled || isGalleryPage || isAboutPage) ? "bg-white/70 shadow-sm backdrop-blur-sm" : "bg-transparent",
        )}
      >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        {/* Desktop Nav Links */}
        <nav className="hidden items-center space-x-8 md:flex">
          <Link
            href={`/${locale}`}
            className={cn(
              "font-display text-sm tracking-widest hover:text-neutral-600 relative",
              // Apply black text if scrolled OR on gallery page OR on about page
              (isScrolled || isGalleryPage || isAboutPage) ? "text-neutral-800" : "text-white",
              isActive(`/${locale}`) && "after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-current"
            )}
          >
            {t('navigation.home')}
          </Link>
          
          {/* Services Dropdown */}
          <div className="relative group">
            <Link 
              href={`/${locale}/services`}
              className={cn(
                "font-display text-sm tracking-widest hover:text-neutral-600 relative",
                (isScrolled || isGalleryPage || isAboutPage) ? "text-neutral-800" : "text-white",
                isActive(`/${locale}/services`) && "after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-current"
              )}
            >
              {t('navigation.services')}
            </Link>
            <NavigationMenu className="absolute top-full left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuContent className="bg-white/95 backdrop-blur-sm border-neutral-200">
                    <div className="grid w-64 gap-1 p-3">
                    <Link
                      href={`/${locale}/services#weddings`}
                      className="block p-3 text-sm font-display tracking-wide text-neutral-800 hover:bg-neutral-50 rounded transition-colors"
                    >
                      {t('services.wedding.title')}
                    </Link>
                    <Link
                      href={`/${locale}/services#festivities`}
                      className="block p-3 text-sm font-display tracking-wide text-neutral-800 hover:bg-neutral-50 rounded transition-colors"
                    >
                      {t('services.festivities.title')}
                    </Link>
                    <Link
                      href={`/${locale}/services#memorials`}
                      className="block p-3 text-sm font-display tracking-wide text-neutral-800 hover:bg-neutral-50 rounded transition-colors"
                    >
                      {t('services.memorials.title')}
                    </Link>
                    <Link
                      href={`/${locale}/services#catering`}
                      className="block p-3 text-sm font-display tracking-wide text-neutral-800 hover:bg-neutral-50 rounded transition-colors"
                    >
                      {t('services.catering.title')}
                    </Link>
                    <Link
                      href={`/${locale}/services#birthdays`}
                      className="block p-3 text-sm font-display tracking-wide text-neutral-800 hover:bg-neutral-50 rounded transition-colors"
                    >
                      {t('services.birthdays.title')}
                    </Link>
                    <Link
                      href={`/${locale}/services#graduation`}
                      className="block p-3 text-sm font-display tracking-wide text-neutral-800 hover:bg-neutral-50 rounded transition-colors"
                    >
                      {t('services.graduation.title')}
                    </Link>
                    <Link
                      href={`/${locale}/services#anniversaries`}
                      className="block p-3 text-sm font-display tracking-wide text-neutral-800 hover:bg-neutral-50 rounded transition-colors"
                    >
                      {t('services.anniversaries.title')}
                    </Link>
                    <Link
                      href={`/${locale}/services#baptism`}
                      className="block p-3 text-sm font-display tracking-wide text-neutral-800 hover:bg-neutral-50 rounded transition-colors"
                    >
                      {t('services.baptism.title')}
                    </Link>
                    <div className="border-t border-neutral-200 my-2"></div>
                    <Link
                      href={`/${locale}/services`}
                      className="block p-3 text-sm font-display tracking-wide text-neutral-900 hover:bg-neutral-50 rounded transition-colors font-medium"
                    >
                      View All Services →
                    </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          <Link
            href={`/${locale}/gallery`}
            className={cn(
              "font-display text-sm tracking-widest hover:text-neutral-600 relative",
              (isScrolled || isGalleryPage || isAboutPage) ? "text-neutral-800" : "text-white",
              isActive(`/${locale}/gallery`) && "after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-current"
            )}
          >
            {t('navigation.gallery')}
          </Link>
          <Link
            href={`/${locale}/about`}
            className={cn(
              "font-display text-sm tracking-widest hover:text-neutral-600 relative",
              (isScrolled || isGalleryPage || isAboutPage) ? "text-neutral-800" : "text-white",
              isActive(`/${locale}/about`) && "after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-current"
            )}
          >
            {t('navigation.about')}
          </Link>
        </nav>


        {/* Desktop Nav Links (Right) */}
        <nav className="hidden items-center space-x-8 md:flex">
          <Link
            href="#contact"
            className={cn(
            "font-display text-sm tracking-widest hover:text-neutral-600",
               // Apply black text if scrolled OR on gallery page OR on about page
              (isScrolled || isGalleryPage || isAboutPage) ? "text-neutral-800" : "text-white"
            )}
          >
            {t('navigation.contact')}
          </Link>

          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger className={cn(
              "flex items-center space-x-1 font-display text-sm tracking-widest focus:outline-none uppercase",
               // Apply black text if scrolled OR on gallery page OR on about page
              (isScrolled || isGalleryPage || isAboutPage) ? "text-neutral-800 hover:text-neutral-600" : "text-white hover:text-white/80"
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
              // Apply black text if scrolled OR on gallery page OR on about page
              (isScrolled || isGalleryPage || isAboutPage) ? "text-neutral-800 hover:text-neutral-600" : "text-white hover:text-white/80"
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
            <Menu className={cn("h-6 w-6", (isScrolled || isGalleryPage || isAboutPage) ? "text-neutral-800" : "text-white")} />
          </button>
        </div>
      </div>
      </header>
      
      {/* Mobile menu - Now OUTSIDE header to avoid stacking context issues */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-0 z-[9999] bg-white md:hidden overflow-y-auto">
          {/* Mobile menu header */}
          <div className="flex items-center justify-between px-4 py-4 border-b border-neutral-200 bg-white">
            <div className="flex items-center">
              <h3 className="font-serif text-xl tracking-wider text-neutral-800">HEWAN'S EVENT</h3>
            </div>
            <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
              <X className="h-6 w-6 text-neutral-800" />
            </button>
          </div>
          
          {/* Mobile menu content */}
          <div className="px-4 py-6 bg-white min-h-full">
            <nav className="flex flex-col space-y-8">
              <Link
                href={`/${locale}`}
                className={cn(
                  "font-display text-lg tracking-wide text-neutral-800 py-3 border-b border-neutral-100 transition-colors hover:text-neutral-600",
                  isActive(`/${locale}`) && "text-neutral-900 font-medium"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('navigation.home')}
              </Link>
              
              {/* Services with submenu */}
              <div className="border-b border-neutral-100">
                <Link
                  href={`/${locale}/services`}
                  className={cn(
                    "font-display text-lg tracking-wide text-neutral-800 py-3 block transition-colors hover:text-neutral-600",
                    isActive(`/${locale}/services`) && "text-neutral-900 font-medium"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('navigation.services')}
                </Link>
                
                {/* Mobile services submenu */}
                <div className="ml-4 pb-3 space-y-2">
                  <Link
                    href={`/${locale}/services#weddings`}
                    className="block text-sm font-display tracking-wide text-neutral-600 py-2 hover:text-neutral-800 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t('services.wedding.title')}
                  </Link>
                  <Link
                    href={`/${locale}/services#festivities`}
                    className="block text-sm font-display tracking-wide text-neutral-600 py-2 hover:text-neutral-800 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t('services.festivities.title')}
                  </Link>
                  <Link
                    href={`/${locale}/services#catering`}
                    className="block text-sm font-display tracking-wide text-neutral-600 py-2 hover:text-neutral-800 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t('services.catering.title')}
                  </Link>
                  <Link
                    href={`/${locale}/services#birthdays`}
                    className="block text-sm font-display tracking-wide text-neutral-600 py-2 hover:text-neutral-800 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t('services.birthdays.title')}
                  </Link>
                  <Link
                    href={`/${locale}/services#graduation`}
                    className="block text-sm font-display tracking-wide text-neutral-600 py-2 hover:text-neutral-800 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t('services.graduation.title')}
                  </Link>
                  <Link
                    href={`/${locale}/services#baptism`}
                    className="block text-sm font-display tracking-wide text-neutral-600 py-2 hover:text-neutral-800 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t('services.baptism.title')}
                  </Link>
                </div>
              </div>
              
              <Link
                href={`/${locale}/gallery`}
                className={cn(
                  "font-display text-lg tracking-wide text-neutral-800 py-3 border-b border-neutral-100 transition-colors hover:text-neutral-600",
                  isActive(`/${locale}/gallery`) && "text-neutral-900 font-medium"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('navigation.gallery')}
              </Link>
              
              <Link
                href={`/${locale}/about`}
                className={cn(
                  "font-display text-lg tracking-wide text-neutral-800 py-3 border-b border-neutral-100 transition-colors hover:text-neutral-600",
                  isActive(`/${locale}/about`) && "text-neutral-900 font-medium"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('navigation.about')}
              </Link>
              
              <Link
                href="#contact"
                className="font-display text-lg tracking-wide text-neutral-800 py-3 transition-colors hover:text-neutral-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('navigation.contact')}
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
