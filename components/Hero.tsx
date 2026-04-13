import Link from 'next/link'
import { getMessages, type Locale } from '@/lib/locale'

interface HeroProps {
  bannerImageUrl?: string
  locale: Locale
}

export default function Hero({ bannerImageUrl, locale }: HeroProps) {
  const messages = getMessages(locale)

  return (
    <section
      className="relative min-h-screen flex items-center justify-center pt-24 px-4 sm:px-6 lg:px-8"
      style={
        bannerImageUrl
          ? {
              backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.35)), url(${bannerImageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : undefined
      }
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/20" />
      <div className="relative z-10 max-w-4xl mx-auto text-center bg-sky-900/90 p-5 rounded-2xl">
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          data-aos="fade-up"
        >
          {messages.hero.titlePrefix} <span className="text-accent-gold">{messages.hero.titleAccent} </span>{messages.hero.titleSuffix}
        </h1>

        <p
          className="text-lg md:text-2xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {messages.hero.description}
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Link
            href="/portfolio"
            className="bg-primary-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105"
          >
            {messages.hero.primaryCta}
          </Link>
          <Link
            href="/contact"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-dark-gray transition-all"
          >
            {messages.hero.secondaryCta}
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div
          className="flex justify-center mt-12"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-primary-blue"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
