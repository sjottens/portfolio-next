export default function DummyLoginShowcase() {
  const spokes = Array.from({ length: 12 })

  return (
    <section className="mt-14 md:mt-16" data-aos="fade-up" data-aos-delay="120">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-[#d7dfef] bg-white/85 p-6 shadow-[0_30px_80px_-45px_rgba(8,30,77,0.35)] backdrop-blur-sm sm:p-10 lg:p-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-blue/80">Login Demo</p>
          <h2 className="mt-3 text-3xl font-bold text-dark-gray sm:text-4xl">Dummy login in een showcase-tegel</h2>
          <p className="mt-4 text-medium-gray">
            De login-demo staat nu in dezelfde premium tegelstructuur als de loader gallery, zodat de
            examples-pagina visueel consistenter aanvoelt.
          </p>
        </div>

        <div className="mt-10 mx-auto w-full max-w-xl">
          <div className="relative mx-auto w-[min(30rem,96vw)] aspect-square">
            <div
              className="pointer-events-none absolute inset-0 z-10 animate-spin"
              style={{ animationDuration: '12s' }}
              aria-hidden="true"
            >
              <svg viewBox="0 0 100 100" className="h-full w-full">
                {spokes.map((_, index) => {
                  const opacity = (index + 1) / 12

                  return (
                    <rect
                      key={index}
                      x="48.8"
                      y="2.5"
                      width="2.4"
                      height="11.5"
                      rx="1.2"
                      fill={`rgba(255, 221, 87, ${opacity})`}
                      transform={`rotate(${index * 30} 50 50)`}
                    />
                  )
                })}
              </svg>
            </div>

            <div
              className="pointer-events-none absolute inset-[11%] z-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(20,88,228,0.34),transparent_66%)] blur-xl"
              aria-hidden="true"
            />

            <div className="absolute inset-[17%] z-20 rounded-full border border-[#25427b] bg-gradient-to-b from-[#0b2559] via-[#0a1f4b] to-[#08173b] shadow-[0_22px_50px_-20px_rgba(8,30,77,0.95)]">
              <div className="flex h-full flex-col items-center justify-center px-[13%] py-[10%] text-center">
                <h2 className="mb-3 text-[clamp(1.25rem,3.3vw,1.8rem)] font-bold text-white">Inloggen</h2>

                <form className="mx-auto w-full max-w-[17.5rem] space-y-2 text-left sm:space-y-2.5" aria-label="Demo login form">
                  <div>
                    <label htmlFor="demo-name" className="mb-1 block text-[11px] font-medium text-blue-100 sm:text-xs">
                      Naam
                    </label>
                    <input
                      id="demo-name"
                      name="demo-name"
                      type="text"
                      placeholder="Name"
                      className="w-full rounded-xl border border-blue-300/30 bg-white/10 px-3 py-2 text-xs text-white placeholder:text-blue-100/50 outline-none transition focus:border-blue-300 focus:ring-2 focus:ring-blue-300/50 sm:text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="demo-password" className="mb-1 block text-[11px] font-medium text-blue-100 sm:text-xs">
                      Wachtwoord
                    </label>
                    <input
                      id="demo-password"
                      name="demo-password"
                      type="password"
                      placeholder="Password"
                      className="w-full rounded-xl border border-blue-300/30 bg-white/10 px-3 py-2 text-xs text-white placeholder:text-blue-100/50 outline-none transition focus:border-blue-300 focus:ring-2 focus:ring-blue-300/50 sm:text-sm"
                    />
                  </div>

                  <button
                    type="button"
                    className="mx-auto block rounded-xl bg-blue-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-900/45 transition hover:bg-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-200"
                  >
                    Login Demo
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
