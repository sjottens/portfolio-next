import Link from 'next/link'
import { getMessages, type Locale } from '@/lib/locale'
import { getLoaderExample } from '@/lib/loaderExamples'

type LoaderDemoProps = {
  locale: Locale
}

export default function LoaderDemo({ locale }: LoaderDemoProps) {
  const messages = getMessages(locale)
  const haloBars = Array.from({ length: 18 })
  const railBars = Array.from({ length: 9 })
  const crystalLayers = Array.from({ length: 3 })
  const generatingLetters = 'Loading...'.split('')
  const neonExample = getLoaderExample('neon-halo')?.content[locale]
  const railExample = getLoaderExample('velocity-rail')?.content[locale]
  const crystalExample = getLoaderExample('crystal-stack')?.content[locale]
  const maskedExample = getLoaderExample('masked-scan')?.content[locale]
  const layeredExample = getLoaderExample('layered-text-sweep')?.content[locale]
  const loadingSlices = [
    { clip: '0% 0%, 11.11% 0%, 11.11% 100%, 0% 100%', divisor: 20, margin: '-2.1em', opacity: 0.6, gradient: 'linear-gradient(to right, #ffffff 4%, #aaaaaa 7%)' },
    { clip: '11.11% 0%, 22.22% 0%, 22.22% 100%, 11.11% 100%', divisor: 16, margin: '-0.98em', opacity: 0.7, gradient: 'linear-gradient(to right, #ffffff 9%, #aaaaaa 13%)' },
    { clip: '22.22% 0%, 33.33% 0%, 33.33% 100%, 22.22% 100%', divisor: 13, margin: '-0.33em', opacity: 0.8, gradient: 'linear-gradient(to right, #ffffff 15%, #aaaaaa 18%)' },
    { clip: '33.33% 0%, 44.44% 0%, 44.44% 100%, 33.33% 100%', divisor: 11, margin: '-0.05em', opacity: 0.9, gradient: 'linear-gradient(to right, #ffffff 20%, #aaaaaa 23%)' },
    { clip: '44.44% 0%, 55.55% 0%, 55.55% 100%, 44.44% 100%', divisor: 10, margin: '0em', opacity: 1 },
    { clip: '55.55% 0%, 66.66% 0%, 66.66% 100%, 55.55% 100%', divisor: 11, margin: '0.05em', opacity: 0.9, gradient: 'linear-gradient(to right, #aaaaaa 29%, #ffffff 32%)' },
    { clip: '66.66% 0%, 77.77% 0%, 77.77% 100%, 66.66% 100%', divisor: 13, margin: '0.33em', opacity: 0.8, gradient: 'linear-gradient(to right, #aaaaaa 34%, #ffffff 37%)' },
    { clip: '77.77% 0%, 88.88% 0%, 88.88% 100%, 77.77% 100%', divisor: 16, margin: '0.98em', opacity: 0.7, gradient: 'linear-gradient(to right, #aaaaaa 39%, #ffffff 42%)' },
    { clip: '88.88% 0%, 100% 0%, 100% 100%, 88.88% 100%', divisor: 20, margin: '2.1em', opacity: 0.6, gradient: 'linear-gradient(to right, #aaaaaa 45%, #ffffff 48%)' },
  ]

  return (
    <section className="mt-20" data-aos="fade-up" data-aos-delay="180">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-[#d7dfef] bg-white/85 p-6 shadow-[0_30px_80px_-45px_rgba(8,30,77,0.35)] backdrop-blur-sm sm:p-10 lg:p-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-blue/80">{messages.loaderDemo.heading}</h2>
          <div className="mt-[5px] flex justify-center" aria-hidden="true">
            <div className="relative h-[3px] w-40 overflow-hidden rounded-full bg-gradient-to-r from-transparent via-primary-blue/55 to-transparent">
              <span
                className="absolute inset-y-0 w-1/2 rounded-full bg-gradient-to-r from-transparent via-primary-blue/90 to-transparent"
                style={{ animation: 'loader-gallery-underline 1.6s linear infinite' }}
              />
            </div>
          </div>
        </div>

        <div className="mt-12 space-y-8 text-left">
          <article className="group relative overflow-hidden rounded-[2rem] border border-cyan-200/40 bg-[radial-gradient(circle_at_top,#153b7a_0%,#09142d_62%,#050816_100%)] p-6 text-white shadow-[0_35px_90px_-45px_rgba(0,195,255,0.6)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_45px_110px_-45px_rgba(0,245,255,0.75)] sm:p-8 lg:p-10">
            <Link href="/examples/neon-halo" aria-label={`${messages.loaderDemo.viewCode}: ${neonExample?.label ?? ''}`} className="absolute inset-0 z-30" />
            <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_12%_18%,rgba(90,239,255,0.3)_0%,transparent_45%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
            <div className="pointer-events-none absolute right-4 top-4 z-20 inline-flex items-center gap-2 rounded-full border border-cyan-100/35 bg-cyan-100/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-100/90 backdrop-blur-sm transition-all duration-500 group-hover:scale-105 group-hover:bg-cyan-100/20 sm:right-6 sm:top-6">
              {messages.loaderDemo.viewCode} <span className="text-sm leading-none">↗</span>
            </div>
            <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="min-w-0">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200/80">{neonExample?.label}</p>
                <h3 className="mt-3 break-words text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">{neonExample?.title}</h3>
                <p className="mt-4 max-w-xl break-words text-cyan-50/72">
                  {neonExample?.description}
                </p>
              </div>

              <div className="flex justify-center">
                <div className="relative flex h-[16rem] w-[16rem] items-center justify-center sm:h-[19rem] sm:w-[19rem] lg:h-[22rem] lg:w-[22rem]">
                  <div className="absolute inset-[5%] rounded-full bg-cyan-400/15 blur-3xl" aria-hidden="true" />
                  <div className="absolute inset-[10%] rounded-full border border-cyan-300/20 animate-pulse" style={{ animationDuration: '2.4s' }} aria-hidden="true" />
                  <div className="absolute inset-0 animate-spin" style={{ animationDuration: '8s' }} aria-hidden="true">
                    {haloBars.map((_, index) => (
                      <span
                        key={`halo-${index}`}
                        className="absolute left-1/2 top-1/2 h-[48%] w-[4px] -translate-x-1/2 -translate-y-1/2"
                        style={{ transform: `translate(-50%, -50%) rotate(${index * 20}deg)` }}
                      >
                        <span
                          className="absolute left-1/2 top-0 h-14 w-[4px] -translate-x-1/2 rounded-full blur-[0.8px]"
                          style={{ backgroundColor: `rgba(111, 243, 255, ${0.22 + index / 24})`, boxShadow: '0 0 24px rgba(63, 224, 255, 0.55)' }}
                        />
                      </span>
                    ))}
                  </div>
                  <div className="absolute inset-[18%] animate-spin" style={{ animationDuration: '5.5s', animationDirection: 'reverse' }} aria-hidden="true">
                    <div className="absolute left-1/2 top-0 h-5 w-5 -translate-x-1/2 rounded-full bg-cyan-200 shadow-[0_0_28px_rgba(125,249,255,0.95)]" />
                    <div className="absolute bottom-0 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_24px_rgba(79,229,255,0.7)]" />
                  </div>
                  <div className="relative flex h-[56%] w-[56%] items-center justify-center rounded-full border border-cyan-200/10 bg-[radial-gradient(circle_at_top,#183f85_0%,#081327_72%)]">
                    <div className="absolute inset-[10%] rounded-full border border-cyan-100/10" />
                    <div className="text-center">
                      <p className="text-xs uppercase tracking-[0.26em] text-cyan-100/55">Loading</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article className="group relative overflow-hidden rounded-[2rem] border border-amber-200/40 bg-[linear-gradient(135deg,#2f1408_0%,#1c1021_48%,#0a0810_100%)] p-6 text-white shadow-[0_35px_90px_-45px_rgba(255,153,51,0.52)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_45px_110px_-45px_rgba(255,175,48,0.8)] sm:p-8 lg:p-10">
            <Link href="/examples/velocity-rail" aria-label={`${messages.loaderDemo.viewCode}: ${railExample?.label ?? ''}`} className="absolute inset-0 z-30" />
            <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_88%_16%,rgba(255,200,96,0.24)_0%,transparent_42%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
            <div className="pointer-events-none absolute right-4 top-4 z-20 inline-flex items-center gap-2 rounded-full border border-amber-100/35 bg-amber-100/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-100/90 backdrop-blur-sm transition-all duration-500 group-hover:scale-105 group-hover:bg-amber-100/20 sm:right-6 sm:top-6">
              {messages.loaderDemo.viewCode} <span className="text-sm leading-none">↗</span>
            </div>
            <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[0.98fr_1.02fr]">
              <div className="order-2 flex justify-center lg:order-1">
                <div className="relative w-full max-w-[20rem] rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] px-5 py-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:max-w-[34rem] sm:px-8">
                  <div className="absolute inset-x-8 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-amber-200/35 to-transparent" aria-hidden="true" />
                  <div className="absolute inset-x-10 top-1/2 h-4 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,176,86,0.28),transparent_70%)] blur-xl" aria-hidden="true" />
                  <div className="relative flex items-end justify-between gap-2 sm:gap-3">
                    {railBars.map((_, index) => {
                      const heights = ['4rem', '5rem', '6.25rem', '7rem', '7.75rem', '7rem', '6.25rem', '5rem', '4rem']

                      return (
                        <div key={`rail-${index}`} className="relative flex flex-1 justify-center">
                          <div
                            className="w-full max-w-[1.7rem] rounded-full bg-[linear-gradient(180deg,rgba(255,236,179,0.95),rgba(255,127,80,0.82)_45%,rgba(255,79,130,0.38))] shadow-[0_0_24px_rgba(255,154,89,0.35)] animate-pulse"
                            style={{ height: heights[index], animationDuration: `${1.4 + (index % 3) * 0.35}s`, animationDelay: `${index * 120}ms` }}
                          />
                          <div className="absolute bottom-[-0.55rem] h-3 w-3 rounded-full bg-amber-200/70 blur-[2px]" aria-hidden="true" />
                        </div>
                      )
                    })}
                  </div>
                  <div className="mt-8 flex items-center justify-between text-[11px] uppercase tracking-[0.24em] text-amber-100/45">
                    <span>Signal</span>
                    <span>Transfer</span>
                    <span>Streaming</span>
                  </div>
                </div>
              </div>

              <div className="order-1 min-w-0 lg:order-2">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-200/80">{railExample?.label}</p>
                <h3 className="mt-3 break-words text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">{railExample?.title}</h3>
                <p className="mt-4 max-w-xl break-words text-amber-50/72">
                  {railExample?.description}
                </p>
              </div>
            </div>
          </article>

          <article className="group relative overflow-hidden rounded-[2rem] border border-fuchsia-200/35 bg-[linear-gradient(135deg,#21115a_0%,#120924_48%,#05030c_100%)] p-6 text-white shadow-[0_35px_90px_-45px_rgba(196,90,255,0.52)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_45px_110px_-45px_rgba(221,124,255,0.82)] sm:p-8 lg:p-10">
            <Link href="/examples/crystal-stack" aria-label={`${messages.loaderDemo.viewCode}: ${crystalExample?.label ?? ''}`} className="absolute inset-0 z-30" />
            <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_10%_82%,rgba(216,143,255,0.24)_0%,transparent_42%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
            <div className="pointer-events-none absolute right-4 top-4 z-20 inline-flex items-center gap-2 rounded-full border border-fuchsia-100/35 bg-fuchsia-100/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-fuchsia-100/90 backdrop-blur-sm transition-all duration-500 group-hover:scale-105 group-hover:bg-fuchsia-100/20 sm:right-6 sm:top-6">
              {messages.loaderDemo.viewCode} <span className="text-sm leading-none">↗</span>
            </div>
            <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="min-w-0">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-fuchsia-200/80">{crystalExample?.label}</p>
                <h3 className="mt-3 break-words text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">{crystalExample?.title}</h3>
                <p className="mt-4 max-w-xl break-words text-fuchsia-50/72">
                  {crystalExample?.description}
                </p>
              </div>

              <div className="flex justify-center">
                <div className="relative flex h-[16rem] w-[16rem] items-center justify-center sm:h-[19rem] sm:w-[19rem] lg:h-[22rem] lg:w-[22rem]">
                  <div className="absolute inset-[8%] rotate-45 rounded-[2rem] bg-fuchsia-400/12 blur-3xl" aria-hidden="true" />
                  <div className="absolute inset-[16%] rotate-45 rounded-[1.75rem] border border-sky-200/12 animate-pulse" style={{ animationDuration: '2.6s' }} aria-hidden="true" />
                  <div className="absolute inset-0 animate-spin" style={{ animationDuration: '14s' }} aria-hidden="true">
                    {crystalLayers.map((_, index) => (
                      <div
                        key={`crystal-${index}`}
                        className="absolute left-1/2 top-1/2 rounded-[1.8rem] border"
                        style={{
                          width: `${72 - index * 17}%`,
                          height: `${72 - index * 17}%`,
                          transform: `translate(-50%, -50%) rotate(${index * 18}deg)`,
                          borderColor: index === 0 ? 'rgba(247, 168, 255, 0.42)' : index === 1 ? 'rgba(131, 224, 255, 0.36)' : 'rgba(255, 255, 255, 0.2)',
                          boxShadow: index < 2 ? '0 0 28px rgba(204, 118, 255, 0.18)' : 'none',
                        }}
                      />
                    ))}
                  </div>
                  <div className="relative flex h-[45%] w-[45%] items-center justify-center rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_top,#32186f_0%,#140a28_72%)] shadow-[0_0_50px_rgba(178,91,255,0.24)] rotate-45">
                    <div className="absolute inset-[10%] rounded-[1.1rem] border border-fuchsia-100/10" />
                    <div className="-rotate-45 text-center">
                      <p className="text-xl font-bold text-fuchsia-100/55 sm:text-2xl">Loading..</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article className="group relative overflow-hidden rounded-[2rem] border border-lime-200/30 bg-[linear-gradient(135deg,#0f0d09_0%,#080808_52%,#040404_100%)] p-6 text-white shadow-[0_35px_90px_-45px_rgba(185,255,74,0.28)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_45px_110px_-45px_rgba(196,255,84,0.55)] sm:p-8 lg:p-10">
            <Link href="/examples/masked-scan" aria-label={`${messages.loaderDemo.viewCode}: ${maskedExample?.label ?? ''}`} className="absolute inset-0 z-30" />
            <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_90%_84%,rgba(198,255,103,0.22)_0%,transparent_42%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
            <div className="pointer-events-none absolute right-4 top-4 z-20 inline-flex items-center gap-2 rounded-full border border-lime-100/35 bg-lime-100/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-lime-100/90 backdrop-blur-sm transition-all duration-500 group-hover:scale-105 group-hover:bg-lime-100/20 sm:right-6 sm:top-6">
              {messages.loaderDemo.viewCode} <span className="text-sm leading-none">↗</span>
            </div>
            <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[0.92fr_1.08fr]">
              <div className="order-2 flex justify-center lg:order-1">
                <div className="relative flex min-h-[18rem] w-full max-w-[19rem] items-center justify-center rounded-[1.75rem] border border-white/10 bg-[#151618] px-6 py-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] sm:max-w-[24rem]">
                  <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.06),transparent_65%)]" aria-hidden="true" />

                  <div className="relative my-8 flex h-[120px] w-auto scale-[1.45] select-none items-center justify-center text-[1.6em] font-semibold text-white sm:scale-[1.75] lg:scale-[2]">
                    {generatingLetters.map((letter, index) => (
                      <span
                        key={`${letter}-${index}`}
                        className="z-[2] inline-block opacity-0"
                        style={{
                          animation: 'uiverse-letter-anim 4s infinite linear',
                          animationDelay: `${0.1 + index * 0.105}s`,
                        }}
                      >
                        {letter}
                      </span>
                    ))}

                    <div
                      className="absolute inset-0 z-[1] bg-transparent"
                      style={{
                        maskImage: 'repeating-linear-gradient(90deg, transparent 0, transparent 6px, black 7px, black 8px)',
                        WebkitMaskImage: 'repeating-linear-gradient(90deg, transparent 0, transparent 6px, black 7px, black 8px)',
                      }}
                      aria-hidden="true"
                    >
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundImage:
                            'radial-gradient(circle at 50% 50%, #ff0 0%, transparent 50%), radial-gradient(circle at 45% 45%, #f00 0%, transparent 45%), radial-gradient(circle at 55% 55%, #0ff 0%, transparent 45%), radial-gradient(circle at 45% 55%, #0f0 0%, transparent 45%), radial-gradient(circle at 55% 45%, #00f 0%, transparent 45%)',
                          maskImage: 'radial-gradient(circle at 50% 50%, transparent 0%, transparent 10%, black 25%)',
                          WebkitMaskImage: 'radial-gradient(circle at 50% 50%, transparent 0%, transparent 10%, black 25%)',
                          animation:
                            'uiverse-transform-animation 2s infinite alternate, uiverse-opacity-animation 4s infinite',
                          animationTimingFunction: 'cubic-bezier(0.6, 0.8, 0.5, 1)',
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 min-w-0 lg:order-2">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-lime-200/80">{maskedExample?.label}</p>
                <h3 className="mt-3 break-words text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">{maskedExample?.title}</h3>
                <p className="mt-4 max-w-xl break-words text-lime-50/70">
                  {maskedExample?.description}
                </p>
              </div>
            </div>
          </article>

          <article className="group relative overflow-hidden rounded-[2rem] border border-slate-300/25 bg-[linear-gradient(135deg,#151922_0%,#0f1218_48%,#0a0c11_100%)] p-6 text-white shadow-[0_35px_90px_-45px_rgba(150,170,210,0.28)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_45px_110px_-45px_rgba(170,200,255,0.48)] sm:p-8 lg:p-10">
            <Link href="/examples/layered-text-sweep" aria-label={`${messages.loaderDemo.viewCode}: ${layeredExample?.label ?? ''}`} className="absolute inset-0 z-30" />
            <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_12%_14%,rgba(180,210,255,0.22)_0%,transparent_42%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
            <div className="pointer-events-none absolute right-4 top-4 z-20 inline-flex items-center gap-2 rounded-full border border-slate-100/35 bg-slate-100/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-100/90 backdrop-blur-sm transition-all duration-500 group-hover:scale-105 group-hover:bg-slate-100/20 sm:right-6 sm:top-6">
              {messages.loaderDemo.viewCode} <span className="text-sm leading-none">↗</span>
            </div>
            <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="min-w-0">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-200/80">{layeredExample?.label}</p>
                <h3 className="mt-3 break-words text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">{layeredExample?.title}</h3>
                <p className="mt-4 max-w-xl break-words text-slate-100/72">
                  {layeredExample?.description}
                </p>
              </div>

              <div className="flex justify-center">
                <div className="relative flex min-h-[16rem] w-full max-w-[19rem] items-center justify-center rounded-[1.75rem] border border-white/10 bg-[#0f1117] px-6 py-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] sm:max-w-[24rem]">
                  <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.07),transparent_66%)]" aria-hidden="true" />

                  <div
                    className="relative flex scale-100 select-none items-center justify-center overflow-hidden font-black uppercase text-white drop-shadow-[0_0_0.05em_rgba(255,255,255,0.25)] sm:scale-[1.35] lg:scale-[2]"
                    style={{
                      fontSize: 'clamp(2rem, 7.6vw, 4rem)',
                      width: '7.3em',
                      height: '1em',
                    }}
                  >
                    {loadingSlices.map((slice, index) => (
                      <div
                        key={`loading-slice-${index}`}
                        className="absolute flex items-center justify-center overflow-hidden whitespace-nowrap text-center"
                        style={{
                          clipPath: `polygon(${slice.clip})`,
                          fontSize: `calc(4em / ${slice.divisor})`,
                          marginLeft: slice.margin,
                          opacity: slice.opacity,
                        }}
                      >
                        <span
                          style={{
                            animation:
                              'uiverse2-scrolling 2s cubic-bezier(0.1, 0.6, 0.9, 0.4) infinite, uiverse2-shadow 2s cubic-bezier(0.1, 0.6, 0.9, 0.4) infinite',
                            ...(slice.gradient
                              ? {
                                  background: slice.gradient,
                                  backgroundSize: '200% auto',
                                  backgroundClip: 'text',
                                  WebkitBackgroundClip: 'text',
                                  color: 'transparent',
                                }
                              : {}),
                          }}
                        >
                          Loading
                        </span>
                      </div>
                    ))}

                    <div
                      className="absolute flex items-center justify-center overflow-hidden rounded-[0.05em]"
                      style={{
                        height: '0.05em',
                        width: '2em',
                        marginTop: '0.9em',
                      }}
                    >
                      <div className="absolute inset-0 bg-white/30" />
                      <div
                        className="absolute inset-0 rounded-[0.05em] bg-white"
                        style={{ animation: 'uiverse2-wobble 2s cubic-bezier(0.5, 0.8, 0.5, 0.2) infinite' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}