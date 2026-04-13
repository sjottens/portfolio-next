type LoaderPreviewBySlugProps = {
  slug: string
}

export default function LoaderPreviewBySlug({ slug }: LoaderPreviewBySlugProps) {
  const haloBars = Array.from({ length: 18 })
  const railBars = Array.from({ length: 9 })
  const crystalLayers = Array.from({ length: 3 })
  const generatingLetters = 'Loading...'.split('')
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

  if (slug === 'neon-halo') {
    return (
      <div className="relative flex h-[14rem] w-[14rem] items-center justify-center sm:h-[16rem] sm:w-[16rem]">
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
    )
  }

  if (slug === 'velocity-rail') {
    const heights = ['3rem', '3.8rem', '4.7rem', '5.4rem', '6rem', '5.4rem', '4.7rem', '3.8rem', '3rem']

    return (
      <div className="relative w-full max-w-[20rem] rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] px-4 py-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
        <div className="absolute inset-x-6 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-amber-200/35 to-transparent" aria-hidden="true" />
        <div className="absolute inset-x-8 top-1/2 h-4 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,176,86,0.28),transparent_70%)] blur-xl" aria-hidden="true" />
        <div className="relative flex items-end justify-between gap-2">
          {railBars.map((_, index) => {
            return (
              <div key={`rail-${index}`} className="relative flex flex-1 justify-center">
                <div
                  className="w-full max-w-[1rem] rounded-full bg-[linear-gradient(180deg,rgba(255,236,179,0.95),rgba(255,127,80,0.82)_45%,rgba(255,79,130,0.38))] shadow-[0_0_24px_rgba(255,154,89,0.35)] animate-pulse"
                  style={{ height: heights[index], animationDuration: `${1.4 + (index % 3) * 0.35}s`, animationDelay: `${index * 120}ms` }}
                />
                <div className="absolute bottom-[-0.45rem] h-2.5 w-2.5 rounded-full bg-amber-200/70 blur-[2px]" aria-hidden="true" />
              </div>
            )
          })}
        </div>
        <div className="mt-6 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-amber-100/45 sm:text-[11px]">
          <span>Signal</span>
          <span>Transfer</span>
          <span>Streaming</span>
        </div>
      </div>
    )
  }

  if (slug === 'crystal-stack') {
    return (
      <div className="relative flex h-[14rem] w-[14rem] items-center justify-center sm:h-[16rem] sm:w-[16rem]">
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
            <p className="text-lg font-bold text-fuchsia-100/55 sm:text-2xl">Loading..</p>
          </div>
        </div>
      </div>
    )
  }

  if (slug === 'masked-scan') {
    return (
      <div className="relative flex min-h-[12rem] w-full max-w-[18rem] items-center justify-center rounded-[1.5rem] border border-white/10 bg-[#151618] px-5 py-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
        <div className="relative my-4 flex h-[100px] w-auto scale-[1.2] select-none items-center justify-center text-[1.3em] font-semibold text-white sm:scale-[1.35]">
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
                animation: 'uiverse-transform-animation 2s infinite alternate, uiverse-opacity-animation 4s infinite',
                animationTimingFunction: 'cubic-bezier(0.6, 0.8, 0.5, 1)',
              }}
            />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative flex min-h-[12rem] w-full max-w-[18rem] items-center justify-center rounded-[1.5rem] border border-white/10 bg-[#0f1117] px-5 py-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
      <div
        className="relative flex scale-100 select-none items-center justify-center overflow-hidden font-black uppercase text-white drop-shadow-[0_0_0.05em_rgba(255,255,255,0.25)]"
        style={{
          fontSize: 'clamp(2rem, 7.6vw, 3.2rem)',
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
  )
}
