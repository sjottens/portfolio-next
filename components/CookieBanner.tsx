'use client'

import { useEffect, useState } from 'react'
import { useLanguage } from '@/components/LanguageProvider'

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const { messages } = useLanguage()

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasConsent = localStorage.getItem('cookieConsent')
    if (!hasConsent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-4 md:p-6">
      <div className="max-w-md ml-auto bg-dark-gray text-white rounded-lg shadow-xl p-4 md:p-6 animate-fade-up">
        <p className="text-sm md:text-base mb-4">
          {messages.cookieBanner.text}
        </p>
        <button
          onClick={handleAccept}
          className="w-full bg-accent-gold text-dark-gray font-semibold py-2 px-4 rounded-lg hover:bg-opacity-90 transition-all"
        >
          {messages.cookieBanner.accept}
        </button>
      </div>
    </div>
  )
}
