'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import LanguageSwitch from '@/components/LanguageSwitch'
import { useLanguage } from '@/components/LanguageProvider'

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const { messages } = useLanguage()
  const isHome = pathname === '/'
  const isTransparent = isHome && !isScrolled

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Prevent background scrolling while the mobile menu is open.
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const navItems = [
    { label: messages.header.nav.home, href: '/' },
    { label: messages.header.nav.examples, href: '/examples' },
    { label: messages.header.nav.portfolio, href: '/portfolio' },
    { label: messages.header.nav.about, href: '/about' },
    { label: messages.header.nav.contact, href: '/contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent
          ? 'bg-transparent'
          : isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm'
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            aria-label="R.V. Ottens home"
            className="group flex flex-shrink-0 items-center gap-3"
          >
            <span
              className={`relative grid h-11 w-11 place-items-center overflow-hidden rounded-xl border transition-all duration-300 ${
                isTransparent
                  ? 'border-white/45 bg-white/12 shadow-[0_16px_32px_-22px_rgba(0,0,0,0.75)] group-hover:border-accent-gold/80 group-hover:bg-white/20'
                  : 'border-primary-blue/20 bg-[linear-gradient(145deg,#ffffff_0%,#edf4ff_100%)] shadow-[0_16px_35px_-24px_rgba(20,88,228,0.65)] group-hover:border-primary-blue/45 group-hover:shadow-[0_18px_38px_-24px_rgba(20,88,228,0.82)]'
              }`}
            >
              <span className={`absolute inset-x-0 top-0 h-[2px] ${isTransparent ? 'bg-white/55' : 'bg-primary-blue/35'}`} aria-hidden="true" />
              <svg viewBox="0 0 36 36" className={`h-7 w-7 ${isTransparent ? 'text-white' : 'text-primary-blue'}`} fill="none" aria-hidden="true">
                <path d="M7.5 27V9h7c4 0 6.2 2 6.2 5.2s-2.2 5.2-6.2 5.2h-7" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14.3 19.6L20.7 27" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M22.5 9l4.8 18L32 9" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>

            <span className="flex flex-col leading-none">
              <span
                className={`text-[0.68rem] font-semibold uppercase tracking-[0.22em] transition-colors ${
                  isTransparent ? 'text-white/70 group-hover:text-accent-gold/95' : 'text-primary-blue/75 group-hover:text-primary-blue'
                }`}
              >
                Frontend
              </span>
              <span
                className={`mt-1 text-lg font-extrabold tracking-[0.02em] transition-colors ${
                  isTransparent ? 'text-white group-hover:text-accent-gold' : 'text-primary-blue group-hover:text-dark-gray'
                }`}
              >
                R.V. Ottens
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-5 lg:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors font-medium ${
                  isTransparent ? 'text-white/95 hover:text-accent-gold' : 'text-dark-gray hover:text-primary-blue'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <LanguageSwitch isTransparent={isTransparent} />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isTransparent ? 'hover:bg-white/10' : 'hover:bg-light-gray'
            }`}
            aria-label={messages.header.toggleMenu}
          >
            {isMenuOpen ? (
              <CloseIcon className={`h-6 w-6 ${isTransparent ? 'text-white' : 'text-dark-gray'}`} />
            ) : (
              <MenuIcon className={`h-6 w-6 ${isTransparent ? 'text-white' : 'text-dark-gray'}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            className="md:hidden fixed inset-0 top-20 z-40 bg-black/40 backdrop-blur-sm animate-fade-in"
            onClick={() => setIsMenuOpen(false)}
          >
            <div
              className="mx-4 mt-4 rounded-2xl border border-white/30 bg-white/95 shadow-2xl overflow-hidden animate-slide-up"
              style={{ animationDuration: '320ms', animationTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)' }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label={messages.header.mobileMenuLabel}
            >
              <div className="p-2">
                <div className="px-3 py-2">
                  <LanguageSwitch />
                </div>
                {navItems.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-3 text-dark-gray font-medium rounded-xl hover:bg-light-gray/70 hover:text-primary-blue transition-colors animate-fade-up"
                    style={{ animationDelay: `${index * 70}ms`, animationFillMode: 'both' }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="border-t border-light-gray/60 px-6 py-4 bg-gradient-to-r from-primary-blue/10 to-accent-gold/20">
                <p className="text-sm text-medium-gray">{messages.header.mobilePrompt}</p>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
