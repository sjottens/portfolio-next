'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { MouseEvent } from 'react'
import { FiMail } from 'react-icons/fi'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { useLanguage } from '@/components/LanguageProvider'

function ArrowUpIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5m0 0l-6 6m6-6 6 6" />
    </svg>
  )
}

export default function Footer() {
  const pathname = usePathname()
  const { messages } = useLanguage()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleEmailClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== '/contact') {
      return
    }

    event.preventDefault()
    const contactFormSection = document.getElementById('contact-form')
    if (contactFormSection) {
      contactFormSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <footer className="bg-dark-gray text-white py-16 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">{messages.footer.aboutTitle}</h3>
            <p className="text-light-gray leading-relaxed">
              {messages.footer.aboutDescription}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">{messages.footer.quickLinks}</h3>
            <nav className="space-y-2">
              <Link href="/" className="text-light-gray hover:text-accent-gold transition-colors">
                {messages.header.nav.home} |&nbsp;
              </Link>
              <Link href="/portfolio" className="text-light-gray hover:text-accent-gold transition-colors">
                {messages.header.nav.portfolio} |&nbsp;
              </Link>
              <Link href="/about" className="text-light-gray hover:text-accent-gold transition-colors">
                {messages.header.nav.about} |&nbsp;
              </Link>
              <Link href="/contact" className="text-light-gray hover:text-accent-gold transition-colors">
                {messages.header.nav.contact}
              </Link>
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">{messages.footer.connect}</h3>
            <div className="flex items-center space-x-6">
              <a
                href="https://github.com/sjottens"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-gray hover:text-accent-gold transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/rogier-o-9707119/?locale=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-gray hover:text-accent-gold transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="/contact#contact-form"
                onClick={handleEmailClick}
                className="text-light-gray hover:text-accent-gold transition-colors"
                aria-label={messages.footer.contactFormAria}
              >
                <FiMail size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-medium-gray my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-light-gray text-sm">
            © {new Date().getFullYear()} {messages.footer.aboutTitle}. {messages.footer.rights}
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 flex items-center gap-2 text-light-gray hover:text-accent-gold transition-colors"
            aria-label={messages.footer.backToTop}
          >
            {messages.footer.backToTop}
            <ArrowUpIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  )
}
