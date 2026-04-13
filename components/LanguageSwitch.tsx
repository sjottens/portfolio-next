'use client'

import { useLanguage } from '@/components/LanguageProvider'
import { locales, type Locale } from '@/lib/locale'

type LanguageSwitchProps = {
  isTransparent?: boolean
}

export default function LanguageSwitch({ isTransparent = false }: LanguageSwitchProps) {
  const { locale, setLocale, messages } = useLanguage()
  const textClassName = isTransparent ? 'text-white/95' : 'text-dark-gray'
  const wrapperClassName = isTransparent
    ? 'border-white/20 bg-white/10 backdrop-blur-md'
    : 'border-slate-200 bg-white/90 shadow-[0_14px_35px_-28px_rgba(15,23,42,0.45)]'

  return (
    <div className={`inline-flex items-center gap-1 rounded-full border p-1 ${wrapperClassName}`} aria-label={messages.header.languageLabel} role="group">
      {locales.map((item) => {
        const isActive = locale === item
        const label = item.toUpperCase()

        return (
          <button
            key={item}
            type="button"
            onClick={() => setLocale(item as Locale)}
            className={`rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] transition-all ${
              isActive
                ? 'bg-primary-blue text-white shadow-[0_10px_22px_-14px_rgba(20,88,228,0.95)]'
                : `${textClassName} hover:bg-white/10`
            }`}
            aria-pressed={isActive}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}
