'use client'

import { createContext, startTransition, useContext, useEffect, useState, type ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import { defaultLocale, getMessages, isLocale, localeCookieName, type Locale } from '@/lib/locale'

type LanguageContextValue = {
  locale: Locale
  messages: ReturnType<typeof getMessages>
  setLocale: (locale: Locale) => void
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

type LanguageProviderProps = {
  initialLocale: Locale
  children: ReactNode
}

function persistLocale(locale: Locale) {
  document.cookie = `${localeCookieName}=${locale}; path=/; max-age=31536000; samesite=lax`
  localStorage.setItem(localeCookieName, locale)
  document.documentElement.lang = locale
}

export default function LanguageProvider({ initialLocale, children }: LanguageProviderProps) {
  const router = useRouter()
  const [locale, setLocaleState] = useState<Locale>(initialLocale)

  useEffect(() => {
    const storedLocale = localStorage.getItem(localeCookieName)

    if (isLocale(storedLocale) && storedLocale !== initialLocale) {
      setLocaleState(storedLocale)
      persistLocale(storedLocale)
      startTransition(() => {
        router.refresh()
      })
      return
    }

    persistLocale(initialLocale)
  }, [initialLocale, router])

  const setLocale = (nextLocale: Locale) => {
    if (nextLocale === locale) {
      return
    }

    setLocaleState(nextLocale)
    persistLocale(nextLocale)
    startTransition(() => {
      router.refresh()
    })
  }

  return (
    <LanguageContext.Provider value={{ locale, messages: getMessages(locale), setLocale }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }

  return context
}
