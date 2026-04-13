import Link from 'next/link'
import { notFound } from 'next/navigation'
import CopyCodeBlock from '@/components/CopyCodeBlock'
import LoaderPreviewBySlug from '@/components/LoaderPreviewBySlug'
import { getLoaderExample, loaderExamples } from '@/lib/loaderExamples'
import { getMessages } from '@/lib/locale'
import { getServerLocale } from '@/lib/locale.server'

type LoaderDetailPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return loaderExamples.map((item) => ({ slug: item.slug }))
}

export default async function LoaderDetailPage({ params }: LoaderDetailPageProps) {
  const locale = await getServerLocale()
  const messages = getMessages(locale)
  const { slug } = await params
  const example = getLoaderExample(slug)

  if (!example) {
    notFound()
  }

  const localizedExample = example.content[locale]

  return (
    <main className="min-h-screen px-4 pb-16 pt-28 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-4xl space-y-8">
        <Link href="/examples" className="inline-flex rounded-lg border border-slate-300 px-3 py-1.5 text-sm text-slate-700 transition hover:bg-slate-100">
          {messages.loaderDetail.back}
        </Link>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_25px_65px_-45px_rgba(15,23,42,0.35)] sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-blue/70">{localizedExample.label}</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">{localizedExample.title}</h1>
          <p className="mt-4 text-slate-600">{localizedExample.description}</p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-[#0b1220] p-4 sm:p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-300">{messages.loaderDetail.livePreview}</p>
            <div className="mt-4 flex min-h-[15rem] items-center justify-center rounded-xl border border-white/10 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_45%),linear-gradient(145deg,#111827,#05080f)] p-4 text-white">
              <LoaderPreviewBySlug slug={example.slug} />
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{messages.loaderDetail.usageTitle}</h2>
            <ul className="mt-3 space-y-2 text-slate-700">
              {localizedExample.usage.map((item) => (
                <li key={item} className="leading-relaxed">- {item}</li>
              ))}
            </ul>
          </div>
        </div>

        <CopyCodeBlock code={example.code} />

        <div className="relative overflow-hidden rounded-3xl border border-primary-blue/15 bg-[linear-gradient(135deg,#ffffff_0%,#f6f9ff_48%,#fff7e8_100%)] p-6 shadow-[0_25px_65px_-45px_rgba(20,88,228,0.28)] sm:p-8">
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary-blue/10 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-12 -left-8 h-36 w-36 rounded-full bg-accent-gold/20 blur-3xl" aria-hidden="true" />

          <div className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-blue/70">{messages.loaderDetail.helpLabel}</p>
              <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                {messages.loaderDetail.helpTitle}
              </h2>
              <p className="mt-3 text-slate-600">
                {messages.loaderDetail.helpBody}
              </p>
            </div>

            <div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-primary-blue px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_35px_-18px_rgba(20,88,228,0.9)] transition hover:translate-y-[-1px] hover:bg-[#0f4fd1]"
              >
                {messages.loaderDetail.helpButton}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
