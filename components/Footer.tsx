'use client'

import Link from 'next/link'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

function ArrowUpIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5m0 0l-6 6m6-6 6 6" />
    </svg>
  )
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-dark-gray text-white py-16 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Frontend Developer</h3>
            <p className="text-light-gray leading-relaxed">
              Creating beautiful, functional, and accessible web experiences with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <nav className="space-y-2">
              <Link href="/" className="text-light-gray hover:text-accent-gold transition-colors">
                Home
              </Link>
              <Link href="/portfolio" className="text-light-gray hover:text-accent-gold transition-colors">
                Portfolio
              </Link>
              <Link href="/about" className="text-light-gray hover:text-accent-gold transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-light-gray hover:text-accent-gold transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex items-center space-x-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-gray hover:text-accent-gold transition-colors"
                aria-label="GitHub"
              >
                <FiGithub size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-gray hover:text-accent-gold transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={24} />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="text-light-gray hover:text-accent-gold transition-colors"
                aria-label="Email"
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
            © {new Date().getFullYear()} Frontend Developer. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 flex items-center gap-2 text-light-gray hover:text-accent-gold transition-colors"
            aria-label="Back to top"
          >
            Back to top
            <ArrowUpIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  )
}
