import LoaderDemo from '../../components/LoaderDemo'
import InputFieldsDemo from '../../components/InputFieldsDemo'
import { getMessages } from '@/lib/locale'
import { getServerLocale } from '@/lib/locale.server'

export default async function ExamplesPage() {
  const locale = await getServerLocale()
  const messages = getMessages(locale)

  return (
    <main className="min-h-screen pt-24 pb-16">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/10 via-white to-accent-gold/25" aria-hidden="true" />
        <div className="absolute -top-24 -right-16 h-64 w-64 rounded-full bg-primary-blue/20 blur-3xl" aria-hidden="true" />
        <div className="absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-accent-gold/30 blur-3xl" aria-hidden="true" />

        <div className="relative mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 md:py-28 lg:px-8">
          <p className="inline-flex rounded-full border border-primary-blue/25 bg-white/70 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-blue/80 shadow-[0_10px_25px_-18px_rgba(20,88,228,0.8)] backdrop-blur-sm">
            {messages.examplesPage.badge}
          </p>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.02] tracking-tight text-dark-gray sm:text-5xl md:text-7xl">
            {messages.examplesPage.title}
            <span className="block bg-[linear-gradient(120deg,#1458e4_0%,#1f8dff_42%,#f0b546_100%)] bg-clip-text text-transparent">
              {messages.examplesPage.accent}
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-medium-gray sm:text-base">
            {messages.examplesPage.description}
          </p>

          <InputFieldsDemo locale={locale} />
          <LoaderDemo locale={locale} />
        </div>
      </section>
    </main>
  )
}
