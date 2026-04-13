import Link from 'next/link'
import FloatingLabelInputV2 from '@/components/FloatingLabelInputV2'
import CopyCodeBlock from '@/components/CopyCodeBlock'
import { getMessages } from '@/lib/locale'
import { getServerLocale } from '@/lib/locale.server'

export default async function FloatingLabelLightDetailPage() {
  const locale = await getServerLocale()
  const messages = getMessages(locale)

  const htmlCode = `<div class="input-container">
  <div class="input-shell">
    <input
      type="text"
      id="name"
      placeholder="Enter your name"
      name="text"
      class="input-field"
    />
    <label for="name" class="input-label">Name</label>
  </div>
</div>`

  const cssCode = `/* Tailwind CSS approach (recommended) */
.input-field {
  @apply w-full rounded px-3 py-3 border border-slate-300 text-slate-700 
    text-base placeholder-slate-500 outline-none transition-all duration-200 
    bg-white hover:border-slate-400 focus:border-blue-600 focus:outline-2 
    focus:outline-blue-600 focus:outline-offset-2 invalid:border-red-500 
    invalid:text-red-500 disabled:border-gray-400 disabled:text-gray-500;
}

.input-container {
  @apply relative w-full max-w-[190px] mb-5;
}

.input-shell {
  @apply relative pt-4;
}

.input-label {
  @apply absolute left-2 top-[calc(1rem+50%)] -translate-y-1/2 text-slate-700 font-medium
    transition-all duration-200 ease-in pointer-events-none bg-white px-1 opacity-0;
}

/* Vanilla CSS */
.input-container {
  position: relative;
  max-width: 190px;
  margin-bottom: 1.25rem;
}

.input-shell {
  position: relative;
  padding-top: 0.9rem;
}

.input-field {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #cbd5e1;
  border-radius: 0.25rem;
  background: white;
  color: #475569;
  font-size: 1rem;
  outline: none;
  transition: all 200ms ease-in;
}

.input-field::placeholder {
  color: #94a3b8;
}

.input-field:hover {
  border-color: #b1b5c0;
}

.input-field:focus {
  border-color: #2563eb;
  outline: 2px solid #2563eb;
  outline-offset: 2px;
}

.input-field:invalid {
  border-color: #ef4444;
  color: #ef4444;
}

.input-label {
  position: absolute;
  left: 0.5rem;
  top: calc(0.9rem + 50%);
  transform: translateY(-50%);
  color: #475569;
  font-weight: 500;
  background: white;
  padding: 0 0.25rem;
  transition: all 200ms ease-in;
  opacity: 0;
  pointer-events: none;
}

/* Filled or focused state: label above */
.input-field:not(:placeholder-shown) ~ .input-label,
.input-field:focus ~ .input-label {
  opacity: 1;
  top: 0;
  transform: translateY(0);
}`

  return (
    <main className="min-h-screen px-4 pb-16 pt-28 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-4xl space-y-8">
        <Link href="/examples" className="inline-flex rounded-lg border border-slate-300 px-3 py-1.5 text-sm text-slate-700 transition hover:bg-slate-100">
          {locale === 'nl' ? '← Terug naar galerij' : '← Back to gallery'}
        </Link>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_25px_65px_-45px_rgba(15,23,42,0.35)] sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
            {locale === 'nl' ? 'Input Voorbeeld' : 'Input Example'}
          </p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            {locale === 'nl' ? 'Light Theme Input' : 'Light Theme Input'}
          </h1>
          <p className="mt-4 text-slate-600">
            {locale === 'nl'
              ? 'Een schone en minimale benadering van input fields met labels die vloeiend naar boven schuiven wanneer je begint te typen. Perfect voor moderne web applicaties.'
              : 'A clean and minimal approach to input fields with labels that smoothly float upward as you start typing. Perfect for modern web applications.'}
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-600">
              {locale === 'nl' ? 'Live voorbeeld' : 'Live preview'}
            </p>
            <div className="mt-6 space-y-0">
              <FloatingLabelInputV2
                id="demo-name"
                label={locale === 'nl' ? 'Volledige naam' : 'Full name'}
                placeholder={locale === 'nl' ? 'Voer je naam in' : 'Enter your name'}
                autoComplete="name"
              />
              <FloatingLabelInputV2
                id="demo-email"
                type="email"
                label={locale === 'nl' ? 'E-mailadres' : 'Email address'}
                placeholder={locale === 'nl' ? 'Voer je email in' : 'Enter your email'}
                autoComplete="email"
              />
              <FloatingLabelInputV2
                id="demo-company"
                label={locale === 'nl' ? 'Bedrijf' : 'Company'}
                placeholder={locale === 'nl' ? 'Voer je bedrijf in' : 'Enter your company'}
              />
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              {locale === 'nl' ? 'Hoe het werkt' : 'How it works'}
            </h2>
            <ul className="mt-3 space-y-2 text-slate-700">
              <li className="leading-relaxed">
                • {locale === 'nl' ? 'Label begint verborgen (opacity: 0) in het midden van het input veld' : 'Label starts hidden (opacity: 0) in the center of the input field'}
              </li>
              <li className="leading-relaxed">
                • {locale === 'nl' ? 'Bij focus of invoer verschijnt het label en verplaatst het naar boven' : 'On focus or input, the label appears and moves upward'}
              </li>
              <li className="leading-relaxed">
                • {locale === 'nl' ? 'Smooth 200ms ease-in transitie voor vloeiend animatie effect' : 'Smooth 200ms ease-in transition for fluid animation effect'}
              </li>
              <li className="leading-relaxed">
                • {locale === 'nl' ? 'Focus state toont blauwe outline met 2px offset' : 'Focus state shows blue outline with 2px offset'}
              </li>
              <li className="leading-relaxed">
                • {locale === 'nl' ? 'Ondersteunt invalid state met rode styling' : 'Supports invalid state with red styling'}
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
              ? 'Gebruik deze CSS als je TailwindCSS niet gebruikt of eigen styling wilt:'
              : 'Use this CSS if you\'re not using TailwindCSS or want custom styling:'}
          </p>
          <div className="mt-4 rounded-xl bg-slate-900 p-4 text-slate-100 overflow-auto max-h-[20rem]">
            <pre className="text-xs sm:text-sm leading-relaxed">
              <code>{cssCode}</code>
            </pre>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-blue-200 bg-[linear-gradient(135deg,#ffffff_0%,#f0f4ff_48%,#eff6ff_100%)] p-6 shadow-[0_25px_65px_-45px_rgba(37,99,235,0.2)] sm:p-8">
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-100 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-12 -left-8 h-36 w-36 rounded-full bg-blue-50 blur-3xl" aria-hidden="true" />

          <div className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                {locale === 'nl' ? 'Hulp nodig?' : 'Need help?'}
              </p>
              <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                {locale === 'nl' ? 'Neem contact op.' : 'Get in touch.'}
              </h2>
              <p className="mt-3 text-slate-600">
                {locale === 'nl'
                  ? 'Ik help je graag met het implementeren of aanpassen van deze light theme inputs op je website.'
                  : 'I\'d be happy to help you implement or customize these light theme inputs for your website.'}
              </p>
            </div>

            <div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_35px_-18px_rgba(37,99,235,0.9)] transition hover:translate-y-[-1px] hover:bg-blue-700"
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