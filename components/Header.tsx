'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

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
    { label: 'Home', href: '/' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
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
            className={`flex-shrink-0 text-2xl font-bold transition-colors ${
              isTransparent ? 'text-white hover:text-accent-gold' : 'text-primary-blue hover:text-dark-gray'
            }`}
          >
            R.V. Ottens
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
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
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isTransparent ? 'hover:bg-white/10' : 'hover:bg-light-gray'
            }`}
            aria-label="Toggle menu"
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
              aria-label="Mobile navigation menu"
            >
              <div className="p-2">
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
                <p className="text-sm text-medium-gray">Let's build something great together.</p>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
