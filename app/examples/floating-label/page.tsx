import Link from 'next/link'
import FloatingLabelInput from '@/components/FloatingLabelInput'
import CopyCodeBlock from '@/components/CopyCodeBlock'
import { getMessages } from '@/lib/locale'
import { getServerLocale } from '@/lib/locale.server'

export default async function FloatingLabelDetailPage() {
  const locale = await getServerLocale()
  const messages = getMessages(locale)

  const htmlCode = `<div class="relative">
  <!-- Left accent border -->
  <div class="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-green-500 to-green-600 rounded-full" />
  
  <!-- Input container -->
  <div class="relative pl-5 pr-4 py-3 border-b-2 border-slate-700 transition-all duration-500 focus-within:border-transparent focus-within:border-green-500">
    <input
      type="text"
      id="fullname"
      placeholder=" "
      class="peer w-full bg-transparent text-white placeholder-transparent outline-none text-base"
    />
    <label
      for="fullname"
      class="absolute left-5 -top-0.5 text-xs font-medium text-slate-400 transition-all duration-500 pointer-events-none peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-focus:font-semibold peer-focus:text-green-500 peer-not-placeholder-shown:text-green-400"
    >
      Full name
    </label>
  </div>
</div>`

  const cssCode = `/* Label floating animation */
.peer-placeholder-shown ~ label {
  top: 50%;
  transform: translateY(-50%);
  font-size: 1rem;
  font-weight: normal;
}

.peer-focus ~ label,
.peer-not-placeholder-shown ~ label {
  top: -0.125rem; /* 2px above */
  font-size: 0.75rem;
  font-weight: 500;
}

.peer-focus ~ label {
  font-weight: 600;
  color: #10b981; /* Green accent */
}

.peer-not-placeholder-shown ~ label {
  color: #86efac; /* Light green when filled */
}

/* Border transparency when filled */
.peer-not-placeholder-shown ~ .input-wrapper {
  border-color: transparent;
}

/* Focus state */
.input-wrapper:focus-within {
  border-color: #10b981;
}`

  return (
    <main className="min-h-screen px-4 pb-16 pt-28 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-4xl space-y-8">
        <Link href="/examples" className="inline-flex rounded-lg border border-slate-300 px-3 py-1.5 text-sm text-slate-700 transition hover:bg-slate-100">
          {locale === 'nl' ? '← Terug naar galerij' : '← Back to gallery'}
        </Link>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_25px_65px_-45px_rgba(15,23,42,0.35)] sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-blue/70">
            {locale === 'nl' ? 'Input Voorbeeld' : 'Input Example'}
          </p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            {locale === 'nl' ? 'Zwevend Label Input' : 'Floating Label Input'}
          </h1>
          <p className="mt-4 text-slate-600">
            {locale === 'nl'
              ? 'Een schone en elegante manier om input fields te stylen met labels die vloeiend naar boven schuiven wanneer je begint te typen. Dit ontwerp werkt perfect op donkere achtergronden en gebruikt alleen HTML en CSS.'
              : 'A clean and elegant way to style input fields with labels that smoothly float upward as you start typing. This design works perfectly on dark backgrounds and uses only HTML and CSS.'}
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-950 to-[#0a0f1f] p-4 sm:p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-300">
              {locale === 'nl' ? 'Live voorbeeld' : 'Live preview'}
            </p>
            <div className="mt-6 space-y-6 max-w-md">
              <FloatingLabelInput
                id="demo-name"
                label={locale === 'nl' ? 'Volledige naam' : 'Full name'}
                placeholder=" "
                accentColor="green"
              />
              <FloatingLabelInput
                id="demo-email"
                type="email"
                label={locale === 'nl' ? 'E-mailadres' : 'Email address'}
                placeholder=" "
                accentColor="green"
              />
              <FloatingLabelInput
                id="demo-company"
                label={locale === 'nl' ? 'Bedrijf' : 'Company'}
                placeholder=" "
                accentColor="green"
              />
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              {locale === 'nl' ? 'Hoe het werkt' : 'How it works'}
            </h2>
            <ul className="mt-3 space-y-2 text-slate-700">
              <li className="leading-relaxed">
                • {locale === 'nl' ? 'Placeholder is transparant om label zichtbaar te houden' : 'Transparent placeholder keeps the label visible'}
              </li>
              <li className="leading-relaxed">
                • {locale === 'nl' ? 'Labels positioneren zich absoluut met `peer` selectors' : 'Labels position themselves absolutely using `peer` selectors'}
              </li>
              <li className="leading-relaxed">
                • {locale === 'nl' ? 'Bij focus of input schuift label naar boven' : 'On focus or input, the label slides upward'}
              </li>
              <li className="leading-relaxed">
                • {locale === 'nl' ? 'Smooth transitie van 500ms voor vloeiende animatie' : 'Smooth 500ms transition for fluid animation'}
              </li>
            </ul>
          </div>
        </div>

        <CopyCodeBlock code={htmlCode} />

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
            {locale === 'nl' ? 'CSS Basis' : 'CSS Foundation'}
          </h2>
          <p className="mt-3 text-slate-600">
            {locale === 'nl'
              ? 'Als je TailwindCSS niet gebruikt, kun je deze CSS gebruiken:'
              : 'If you\'re not using TailwindCSS, use this CSS foundation:'}
          </p>
          <div className="mt-4 rounded-xl bg-slate-900 p-4 text-slate-100 overflow-auto max-h-[20rem]">
            <pre className="text-xs sm:text-sm leading-relaxed">
              <code>{cssCode}</code>
            </pre>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-primary-blue/15 bg-[linear-gradient(135deg,#ffffff_0%,#f6f9ff_48%,#fff7e8_100%)] p-6 shadow-[0_25px_65px_-45px_rgba(20,88,228,0.28)] sm:p-8">
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary-blue/10 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-12 -left-8 h-36 w-36 rounded-full bg-accent-gold/20 blur-3xl" aria-hidden="true" />

          <div className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-blue/70">
                {locale === 'nl' ? 'Hulp nodig?' : 'Need help?'}
              </p>
              <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                {locale === 'nl' ? 'Neem contact op.' : 'Get in touch.'}
              </h2>
              <p className="mt-3 text-slate-600">
                {locale === 'nl'
                  ? 'Ik help je graag met het implementeren, aanpassen of optimaliseren van deze floating label inputs op je website.'
                  : 'I\'d be happy to help you implement, customize, or optimize these floating label inputs for your website.'}
              </p>
            </div>

            <div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-primary-blue px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_35px_-18px_rgba(20,88,228,0.9)] transition hover:translate-y-[-1px] hover:bg-[#0f4fd1]"
              >
                {locale === 'nl' ? 'Contact' : 'Contact'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
