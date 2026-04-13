'use client'

import Link from 'next/link'
import FloatingLabelInput from './FloatingLabelInput'
import FloatingLabelInputV2 from './FloatingLabelInputV2'
import { type Locale, getMessages } from '@/lib/locale'

type InputFieldsDemoProps = {
  locale: Locale
}

export default function InputFieldsDemo({ locale }: InputFieldsDemoProps) {
  const messages = getMessages(locale)

  return (
    <section className="mt-20" data-aos="fade-up" data-aos-delay="180">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-slate-700/50 bg-gradient-to-br from-slate-900 via-slate-950 to-[#0a0f1f] p-6 shadow-[0_30px_80px_-45px_rgba(0,0,0,0.8)] backdrop-blur-sm sm:p-10 lg:p-12">
        <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(20,88,228,0.1),rgba(255,255,255,0))]" aria-hidden="true" />
        
        <div className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-blue/80">
              {locale === 'nl' ? 'Label Input Gallery' : 'Label Input Gallery'}
            </h2>
            
          </div>

          <div className="mt-12 space-y-8">
            <article className="group relative overflow-hidden rounded-[1.75rem] border border-emerald-200/35 bg-[radial-gradient(circle_at_12%_18%,rgba(94,234,212,0.2)_0%,transparent_40%),linear-gradient(145deg,#121a30,#070b16)] p-6 shadow-[0_30px_80px_-45px_rgba(16,185,129,0.45)] sm:p-8">

              <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-200/75">
                    {locale === 'nl' ? 'Voorbeeld 01' : 'Example 01'}
                  </p>
                  <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                    {locale === 'nl' ? 'Modern Floating Labels' : 'Modern Floating Labels'}
                  </h3>
                  <p className="mt-4 text-slate-300 leading-relaxed">
                    {locale === 'nl'
                      ? 'Een schone en minimale benadering van input fields met labels die vloeiend naar boven schuiven wanneer je begint te typen. Perfect voor moderne web applicaties.'
                      : 'A clean and minimal approach to input fields with labels that smoothly float upward as you start typing. Perfect for modern web applications.'}
                  </p>

                  <Link
                    href="/examples/floating-label"
                    className="mt-6 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-primary-blue to-[#1f8dff] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_35px_-18px_rgba(20,88,228,0.9)] transition hover:translate-y-[-1px] hover:shadow-[0_20px_45px_-18px_rgba(20,88,228,1.1)]"
                  >
                    {locale === 'nl' ? 'Bekijk volledige voorbeeld' : 'View full example'} ↗
                  </Link>
                </div>

                <div className="rounded-2xl border border-slate-700/60 bg-[linear-gradient(135deg,#111827_0%,#0f1419_100%)] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                  <p className="mb-6 text-xs uppercase tracking-[0.18em] text-slate-400">
                    {locale === 'nl' ? 'Live voorbeeld' : 'Live preview'}
                  </p>
                  <div className="space-y-6">
                    <FloatingLabelInput
                      id="example-name"
                      label={locale === 'nl' ? 'Volledige naam' : 'Full name'}
                      placeholder=" "
                      accentColor="green"
                    />
                    <FloatingLabelInput
                      id="example-email"
                      type="email"
                      label={locale === 'nl' ? 'E-mailadres' : 'Email address'}
                      placeholder=" "
                      accentColor="green"
                    />
                    <FloatingLabelInput
                      id="example-message"
                      label={locale === 'nl' ? 'Bericht' : 'Message'}
                      placeholder=" "
                      accentColor="green"
                    />
                  </div>
                  <p className="mt-6 text-center text-xs text-slate-500">
                    {locale === 'nl' ? 'Typ in de velden om het effect te zien' : 'Type in the fields to see the effect'}
                  </p>
                </div>
              </div>
            </article>

            <article className="group relative overflow-hidden rounded-[1.75rem] border border-slate-300/90 bg-[linear-gradient(145deg,#ffffff_0%,#f7f9ff_55%,#eef4ff_100%)] p-6 shadow-[0_30px_80px_-50px_rgba(15,23,42,0.24)] sm:p-8">
              
              <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                <div className="rounded-2xl border border-slate-300 bg-white p-6 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.1)]">
                  <p className="mb-6 text-xs uppercase tracking-[0.18em] text-slate-600">
                    {locale === 'nl' ? 'Live voorbeeld' : 'Live preview'}
                  </p>
                  <div className="space-y-0">
                    <FloatingLabelInputV2
                      id="v2-name"
                      label={locale === 'nl' ? 'Volledige naam' : 'Full name'}
                      placeholder={locale === 'nl' ? 'Voer je naam in' : 'Enter your name'}
                      autoComplete="name"
                    />
                    <FloatingLabelInputV2
                      id="v2-email"
                      type="email"
                      label={locale === 'nl' ? 'E-mailadres' : 'Email address'}
                      placeholder={locale === 'nl' ? 'Voer je email in' : 'Enter your email'}
                      autoComplete="email"
                    />
                  </div>
                  <p className="mt-6 text-center text-xs text-slate-500">
                    {locale === 'nl' ? 'Typ in de velden om het effect te zien' : 'Type in the fields to see the effect'}
                  </p>
                </div>

                <div className="flex flex-col justify-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-700">
                    {locale === 'nl' ? 'Voorbeeld 02' : 'Example 02'}
                  </p>
                  <h3 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">
                    {locale === 'nl' ? 'Modern Floating Labels' : 'Modern Floating Labels'}
                  </h3>
                  <p className="mt-4 text-slate-700 leading-relaxed">
                    {locale === 'nl'
                      ? 'Een schone en minimale benadering van input fields met labels die vloeiend naar boven schuiven wanneer je begint te typen. Perfect voor moderne web applicaties.'
                      : 'A clean and minimal approach to input fields with labels that smoothly float upward as you start typing. Perfect for modern web applications.'}
                  </p>

                  <Link
                    href="/examples/floating-label-light"
                    className="mt-6 inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_-6px_rgba(37,99,235,0.6)] transition hover:translate-y-[-1px] hover:bg-blue-700"
                  >
                    {locale === 'nl' ? 'Bekijk volledige voorbeeld' : 'View full example'} ↗
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
