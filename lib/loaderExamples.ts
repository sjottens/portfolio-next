import type { Locale } from '@/lib/locale'

type LoaderExampleContent = {
  label: string
  title: string
  description: string
  usage: string[]
}

export type LoaderExample = {
  slug: string
  content: Record<Locale, LoaderExampleContent>
  code: string
}

export const loaderExamples: LoaderExample[] = [
  {
    slug: 'neon-halo',
    content: {
      nl: {
        label: '01 Neon Halo',
        title: 'Elektrische orbit loader met diepe glow',
        description: 'Een ronde loader met pulserende ring en draaiende lichtstaven. Ideaal voor hero-states, splash screens of API-loading met high-tech uitstraling.',
        usage: [
          'Plaats de markup op de plek waar je loading-state zichtbaar moet zijn.',
          'Gebruik een container met vaste hoogte zodat de layout niet verspringt tijdens laden.',
          'Combineer met aria-live of een statuslabel voor betere toegankelijkheid.',
        ],
      },
      en: {
        label: '01 Neon Halo',
        title: 'Electric orbit loader with deep glow',
        description: 'A circular loader with a pulsing outer ring and rotating light bars. Ideal for hero states, splash screens, or API loading with a high-tech feel.',
        usage: [
          'Place the markup wherever your loading state should appear.',
          'Use a container with a fixed height so the layout does not jump while loading.',
          'Combine it with aria-live or a visible status label for accessibility.',
        ],
      },
    },
    code: `<!-- Neon Halo Loader -->
<div class="neon-halo-loader" role="status" aria-label="Loading">
  <div class="halo-glow"></div>
  <div class="halo-pulse-ring"></div>
  <div class="halo-bars" aria-hidden="true">
    <span style="transform:translate(-50%, -50%) rotate(0deg)"><i style="background-color:rgba(111, 243, 255, 0.22)"></i></span>
    <span style="transform:translate(-50%, -50%) rotate(20deg)"><i style="background-color:rgba(111, 243, 255, 0.26)"></i></span>
    <span style="transform:translate(-50%, -50%) rotate(40deg)"><i style="background-color:rgba(111, 243, 255, 0.3)"></i></span>
    <span style="transform:translate(-50%, -50%) rotate(60deg)"><i style="background-color:rgba(111, 243, 255, 0.34)"></i></span>
    <span style="transform:translate(-50%, -50%) rotate(80deg)"><i style="background-color:rgba(111, 243, 255, 0.38)"></i></span>
    <span style="transform:translate(-50%, -50%) rotate(100deg)"><i style="background-color:rgba(111, 243, 255, 0.42)"></i></span>
    <span style="transform:translate(-50%, -50%) rotate(120deg)"><i style="background-color:rgba(111, 243, 255, 0.46)"></i></span>
    <span style="transform:translate(-50%, -50%) rotate(140deg)"><i style="background-color:rgba(111, 243, 255, 0.5)"></i></span>
    <span style="transform:translate(-50%, -50%) rotate(160deg)"><i style="background-color:rgba(111, 243, 255, 0.54)"></i></span>
    <span style="transform:translate(-50%, -50%) rotate(180deg)"><i style="background-color:rgba(111, 243, 255, 0.58)"></i></span>
    <span style="transform:translate(-50%, -50%) rotate(200deg)"><i style="background-color:rgba(111, 243, 255, 0.62)"></i></span>
    <span style="transform:translate(-50%, -50%) rotate(220deg)"><i style="background-color:rgba(111, 243, 255, 0.66)"></i></span>
    <span style="transform:translate(-50%, -50%) rotate(240deg)"><i style="background-color:rgba(111, 243, 255, 0.7)"></i></span>
    <span style="transform:translate(-50%, -50%) rotate(260deg)"><i style="background-color:rgba(111, 243, 255, 0.74)"></i></span>
    <span style="transform:translate(-50%, -50%) rotate(280deg)"><i style="background-color:rgba(111, 243, 255, 0.78)"></i></span>
    <span style="transform:translate(-50%, -50%) rotate(300deg)"><i style="background-color:rgba(111, 243, 255, 0.82)"></i></span>
    <span style="transform:translate(-50%, -50%) rotate(320deg)"><i style="background-color:rgba(111, 243, 255, 0.86)"></i></span>
    <span style="transform:translate(-50%, -50%) rotate(340deg)"><i style="background-color:rgba(111, 243, 255, 0.9)"></i></span>
  </div>
  <div class="halo-orbits" aria-hidden="true">
    <b class="dot-a"></b>
    <b class="dot-b"></b>
  </div>
  <div class="halo-core">
    <span>Loading</span>
  </div>
</div>

<style>
.neon-halo-loader {
  width: 220px;
  height: 220px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.neon-halo-loader .halo-glow {
  position: absolute;
  inset: 5%;
  border-radius: 9999px;
  background: rgba(34, 211, 238, 0.15);
  filter: blur(36px);
}
.neon-halo-loader .halo-pulse-ring {
  position: absolute;
  inset: 10%;
  border-radius: 9999px;
  border: 1px solid rgba(103, 232, 249, 0.2);
  animation: neonPulse 2.4s ease-in-out infinite;
}
.neon-halo-loader .halo-bars {
  position: absolute;
  inset: 0;
  animation: neonSpin 8s linear infinite;
}
.neon-halo-loader .halo-bars span {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 4px;
  height: 48%;
}
.neon-halo-loader .halo-bars i {
  position: absolute;
  left: 50%;
  top: 0;
  width: 4px;
  height: 56px;
  transform: translateX(-50%);
  border-radius: 9999px;
  filter: blur(0.8px);
  box-shadow: 0 0 24px rgba(63, 224, 255, 0.55);
}
.neon-halo-loader .halo-orbits {
  position: absolute;
  inset: 18%;
  animation: neonSpinReverse 5.5s linear infinite;
}
.neon-halo-loader .halo-orbits .dot-a,
.neon-halo-loader .halo-orbits .dot-b {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 9999px;
}
.neon-halo-loader .halo-orbits .dot-a {
  top: 0;
  width: 20px;
  height: 20px;
  background: #bae6fd;
  box-shadow: 0 0 28px rgba(125, 249, 255, 0.95);
}
.neon-halo-loader .halo-orbits .dot-b {
  bottom: 0;
  width: 16px;
  height: 16px;
  background: #22d3ee;
  box-shadow: 0 0 24px rgba(79, 229, 255, 0.7);
}
.neon-halo-loader .halo-core {
  position: relative;
  width: 56%;
  height: 56%;
  border-radius: 9999px;
  border: 1px solid rgba(165, 243, 252, 0.1);
  background: radial-gradient(circle at top, #183f85 0%, #081327 72%);
  display: flex;
  align-items: center;
  justify-content: center;
}
.neon-halo-loader .halo-core::before {
  content: "";
  position: absolute;
  inset: 10%;
  border-radius: 9999px;
  border: 1px solid rgba(207, 250, 254, 0.1);
}
.neon-halo-loader .halo-core span {
  position: relative;
  font: 700 12px/1 sans-serif;
  color: rgba(224, 247, 250, 0.55);
  letter-spacing: 0.26em;
  text-transform: uppercase;
}
@keyframes neonSpin {
  to { transform: rotate(360deg); }
}
@keyframes neonSpinReverse {
  from { transform: rotate(360deg); }
  to { transform: rotate(0deg); }
}
@keyframes neonPulse {
  0%, 100% { opacity: 0.55; }
  50% { opacity: 1; }
}
</style>`,
  },
  {
    slug: 'velocity-rail',
    content: {
      nl: {
        label: '02 Velocity Rail',
        title: 'Horizontale loader met equalizer-energie',
        description: 'Een brede, ritmische loader met bars die pulse-height krijgen. Perfect voor media, streaming of progress secties in dashboards.',
        usage: [
          'Gebruik deze loader in brede containers zoals cards, banners of tab panels.',
          'Pas het aantal bars aan om de visuele dichtheid te verhogen of te verlagen.',
          'Houd genoeg horizontale ruimte aan op mobiel met max-width.',
        ],
      },
      en: {
        label: '02 Velocity Rail',
        title: 'Horizontal loader with equalizer energy',
        description: 'A wide, rhythmic loader with animated bar heights. Perfect for media, streaming, or progress sections inside dashboards.',
        usage: [
          'Use this loader inside wide containers such as cards, banners, or tab panels.',
          'Adjust the number of bars to increase or reduce the visual density.',
          'Keep enough horizontal room on mobile with a sensible max-width.',
        ],
      },
    },
    code: `<!-- Velocity Rail Loader -->
<div class="velocity-rail-loader" role="status" aria-label="Loading">
  <div class="velocity-rail-line"></div>
  <div class="velocity-rail-glow"></div>
  <div class="velocity-rail-bars">
    <span style="height:3rem"><i></i></span>
    <span style="height:3.8rem"><i></i></span>
    <span style="height:4.7rem"><i></i></span>
    <span style="height:5.4rem"><i></i></span>
    <span style="height:6rem"><i></i></span>
    <span style="height:5.4rem"><i></i></span>
    <span style="height:4.7rem"><i></i></span>
    <span style="height:3.8rem"><i></i></span>
    <span style="height:3rem"><i></i></span>
  </div>
</div>
<div class="velocity-rail-labels" aria-hidden="true">
  <span>Signal</span>
  <span>Transfer</span>
  <span>Streaming</span>
</div>

<style>
.velocity-rail-loader {
  width: min(100%, 360px);
  position: relative;
  padding: 24px 16px;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02));
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.08);
}
.velocity-rail-loader .velocity-rail-line {
  position: absolute;
  left: 24px;
  right: 24px;
  top: 50%;
  height: 1px;
  transform: translateY(-50%);
  background: linear-gradient(to right, transparent, rgba(253, 230, 138, 0.35), transparent);
}
.velocity-rail-loader .velocity-rail-glow {
  position: absolute;
  left: 32px;
  right: 32px;
  top: 50%;
  height: 16px;
  transform: translateY(-50%);
  border-radius: 9999px;
  background: radial-gradient(circle at center, rgba(255,176,86,0.28), transparent 70%);
  filter: blur(18px);
}
.velocity-rail-loader .velocity-rail-bars {
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 8px;
}
.velocity-rail-loader .velocity-rail-bars span {
  flex: 1;
  position: relative;
  border-radius: 9999px;
  background: linear-gradient(180deg, #ffecb3, #ff7f50 45%, rgba(255, 79, 130, 0.38));
  box-shadow: 0 0 24px rgba(255,154,89,0.35);
  animation: railPulse 1.2s ease-in-out infinite;
}
.velocity-rail-loader .velocity-rail-bars span:nth-child(1) { animation-duration: 1.4s; }
.velocity-rail-loader .velocity-rail-bars span:nth-child(2) { animation-duration: 1.75s; animation-delay: 120ms; }
.velocity-rail-loader .velocity-rail-bars span:nth-child(3) { animation-duration: 2.1s; animation-delay: 240ms; }
.velocity-rail-loader .velocity-rail-bars span:nth-child(4) { animation-duration: 1.4s; animation-delay: 360ms; }
.velocity-rail-loader .velocity-rail-bars span:nth-child(5) { animation-duration: 1.75s; animation-delay: 480ms; }
.velocity-rail-loader .velocity-rail-bars span:nth-child(6) { animation-duration: 2.1s; animation-delay: 600ms; }
.velocity-rail-loader .velocity-rail-bars span:nth-child(7) { animation-duration: 1.4s; animation-delay: 720ms; }
.velocity-rail-loader .velocity-rail-bars span:nth-child(8) { animation-duration: 1.75s; animation-delay: 840ms; }
.velocity-rail-loader .velocity-rail-bars span:nth-child(9) { animation-duration: 2.1s; animation-delay: 960ms; }
.velocity-rail-loader .velocity-rail-bars span i {
  position: absolute;
  left: 50%;
  bottom: -7px;
  width: 10px;
  height: 10px;
  transform: translateX(-50%);
  border-radius: 9999px;
  background: rgba(253, 230, 138, 0.7);
  filter: blur(2px);
}
.velocity-rail-labels {
  width: min(100%, 360px);
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  font: 600 11px/1.1 sans-serif;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(255, 244, 214, 0.45);
}
@keyframes railPulse {
  0%, 100% { transform: scaleY(0.45); opacity: 0.7; }
  50% { transform: scaleY(1); opacity: 1; }
}
</style>`,
  },
  {
    slug: 'crystal-stack',
    content: {
      nl: {
        label: '03 Crystal Stack',
        title: 'Hoekige loader met crystal layers en kinetic glow',
        description: 'Deze richting is geometrischer en editorialer. Geen traditionele spinner, maar een gestapeld kristal van roterende shapes, neon randen en een heldere centrale pulse.',
        usage: [
          'Gebruik een donkere achtergrond voor maximaal contrast van de borders en glow.',
          'Zet de loader in een vierkante wrapper voor consistente compositie.',
          'Verhoog de animatieduur als je een rustiger effect wilt.',
        ],
      },
      en: {
        label: '03 Crystal Stack',
        title: 'Angular loader with crystal layers and kinetic glow',
        description: 'A more geometric, editorial direction. Not a traditional spinner, but a stacked crystal made of rotating shapes, neon edges, and a bright central pulse.',
        usage: [
          'Use a dark background for maximum contrast on the borders and glow.',
          'Place the loader inside a square wrapper for a balanced composition.',
          'Increase the animation duration if you want a calmer feel.',
        ],
      },
    },
    code: `<!-- Crystal Stack Loader -->
<div class="crystal-stack-loader" role="status" aria-label="Loading">
  <div class="crystal-stack-glow"></div>
  <div class="crystal-stack-pulse"></div>
  <div class="diamond d1"></div>
  <div class="diamond d2"></div>
  <div class="diamond d3"></div>
  <div class="crystal-core" aria-hidden="true">
    <strong>Loading..</strong>
  </div>
</div>

<style>
.crystal-stack-loader {
  width: 210px;
  height: 210px;
  position: relative;
  display: grid;
  place-items: center;
}
.crystal-stack-loader .crystal-stack-glow {
  position: absolute;
  inset: 8%;
  border-radius: 32px;
  transform: rotate(45deg);
  background: rgba(232, 121, 249, 0.12);
  filter: blur(36px);
}
.crystal-stack-loader .crystal-stack-pulse {
  position: absolute;
  inset: 16%;
  border-radius: 28px;
  transform: rotate(45deg);
  border: 1px solid rgba(186, 230, 253, 0.12);
  animation: crystalPulse 2.6s ease-in-out infinite;
}
.crystal-stack-loader .diamond {
  position: absolute;
  width: 65%;
  height: 65%;
  border: 2px solid rgba(247, 168, 255, 0.42);
  border-radius: 22px;
  transform: rotate(45deg);
  animation: crystalSpin 6.5s linear infinite;
}
.crystal-stack-loader .d2 {
  width: 50%;
  height: 50%;
  border-color: rgba(131, 224, 255, 0.36);
  animation-direction: reverse;
}
.crystal-stack-loader .d3 {
  width: 36%;
  height: 36%;
  border-color: rgba(255, 255, 255, 0.25);
}
.crystal-stack-loader .crystal-core {
  width: 42%;
  height: 42%;
  border-radius: 16px;
  display: grid;
  place-items: center;
  background: radial-gradient(circle at top, #32186f 0%, #140a28 72%);
  border: 1px solid rgba(255, 255, 255, 0.15);
  transform: rotate(45deg);
  text-align: center;
}
.crystal-stack-loader .crystal-core span,
.crystal-stack-loader .crystal-core strong {
  transform: rotate(-45deg);
  display: block;
  color: #f7ddff;
}
.crystal-stack-loader .crystal-core strong {
  font: 700 20px/1 sans-serif;
}
@keyframes crystalSpin {
  to { transform: rotate(405deg); }
}
@keyframes crystalPulse {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}
</style>`,
  },
  {
    slug: 'masked-scan',
    content: {
      nl: {
        label: '04 Masked Scan',
        title: 'Exacte Generating loader uit je CSS',
        description: 'Deze variant volgt direct je HTML/CSS-structuur met afzonderlijke letters, masked rainbow gradients en dezelfde timing voor sweep en opacity.',
        usage: [
          'Laat de tekst overeenkomen met de actie, bijvoorbeeld Loading, Generating of Processing.',
          'Gebruik op plekken waar de gebruiker even moet wachten op data of render.',
          'Combineer met subtiele achtergrondglow voor extra diepte.',
        ],
      },
      en: {
        label: '04 Masked Scan',
        title: 'Exact Generating loader from your CSS',
        description: 'This variant follows your HTML/CSS structure directly with separate letters, masked rainbow gradients, and the same timing for sweep and opacity.',
        usage: [
          'Match the text to the action, for example Loading, Generating, or Processing.',
          'Use it in places where the user briefly waits for data or rendering.',
          'Pair it with a subtle background glow for extra depth.',
        ],
      },
    },
    code: `<!-- Masked Scan Loader -->
<div class="masked-scan-loader" role="status" aria-label="Loading">
  <span style="animation-delay:0.1s;">L</span>
  <span style="animation-delay:0.205s;">o</span>
  <span style="animation-delay:0.31s;">a</span>
  <span style="animation-delay:0.415s;">d</span>
  <span style="animation-delay:0.52s;">i</span>
  <span style="animation-delay:0.625s;">n</span>
  <span style="animation-delay:0.73s;">g</span>
  <span style="animation-delay:0.835s;">.</span>
  <span style="animation-delay:0.94s;">.</span>
  <span style="animation-delay:1.045s;">.</span>

  <div class="masked-scan-overlay" aria-hidden="true">
    <div class="masked-scan-rainbow"></div>
  </div>
</div>

<style>
.masked-scan-loader {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font: 700 34px/1 sans-serif;
  color: #fff;
}
.masked-scan-loader span {
  position: relative;
  z-index: 2;
  display: inline-block;
  opacity: 0;
  animation: maskedLetter 4s linear infinite;
}
.masked-scan-overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: transparent;
  -webkit-mask-image: repeating-linear-gradient(90deg, transparent 0, transparent 6px, #000 7px, #000 8px);
  mask-image: repeating-linear-gradient(90deg, transparent 0, transparent 6px, #000 7px, #000 8px);
}
.masked-scan-rainbow {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 50% 50%, #ff0 0%, transparent 50%),
    radial-gradient(circle at 45% 45%, #f00 0%, transparent 45%),
    radial-gradient(circle at 55% 55%, #0ff 0%, transparent 45%),
    radial-gradient(circle at 45% 55%, #0f0 0%, transparent 45%),
    radial-gradient(circle at 55% 45%, #00f 0%, transparent 45%);
  -webkit-mask-image: radial-gradient(circle at 50% 50%, transparent 0%, transparent 10%, #000 25%);
  mask-image: radial-gradient(circle at 50% 50%, transparent 0%, transparent 10%, #000 25%);
  animation: maskedSweep 2s infinite alternate, maskedOpacity 4s infinite;
  animation-timing-function: cubic-bezier(0.6, 0.8, 0.5, 1);
}
@keyframes maskedSweep {
  0% { transform: translate(-55%); }
  100% { transform: translate(55%); }
}
@keyframes maskedOpacity {
  0%, 100% { opacity: 0; }
  15% { opacity: 1; }
  65% { opacity: 0; }
}
@keyframes maskedLetter {
  0% { opacity: 0; }
  5% {
    opacity: 1;
    text-shadow: 0 0 4px #fff;
    transform: scale(1.1) translateY(-2px);
  }
  20% { opacity: 0.2; }
  100% { opacity: 0; }
}
</style>`,
  },
  {
    slug: 'layered-text-sweep',
    content: {
      nl: {
        label: '05 Layered Text Sweep',
        title: 'Gelaagde Loading-loader met perspective text slices',
        description: 'Deze is direct vertaald van je HTML/CSS: negen clipping-lagen met verschillende font-sizes, geanimeerde gradient-shadows en een bewegende line-indicator onder de tekst.',
        usage: [
          'Gebruik deze variant in hero-secties waar de loader visueel onderdeel van het design mag zijn.',
          'Houd de tekst kort zodat de lagen altijd binnen de beschikbare breedte blijven.',
          'Zet op mobiel een kleinere font-size met clamp() om overflow te voorkomen.',
        ],
      },
      en: {
        label: '05 Layered Text Sweep',
        title: 'Layered Loading loader with perspective text slices',
        description: 'This is translated directly from your HTML/CSS: nine clipping layers with different font sizes, animated gradient shadows, and a moving line indicator below the text.',
        usage: [
          'Use this version in hero sections where the loader can be part of the visual design.',
          'Keep the text short so the layers stay within the available width.',
          'Use a smaller font size on mobile with clamp() to prevent overflow.',
        ],
      },
    },
    code: `<!-- Layered Text Sweep Loader -->
<div class="layered-text-loader" role="status" aria-label="Loading">
  <div class="slice s1"><span>Loading</span></div>
  <div class="slice s2"><span>Loading</span></div>
  <div class="slice s3"><span>Loading</span></div>
  <div class="slice s4"><span>Loading</span></div>
  <div class="slice s5"><span>Loading</span></div>
  <div class="slice s6"><span>Loading</span></div>
  <div class="slice s7"><span>Loading</span></div>
  <div class="slice s8"><span>Loading</span></div>
  <div class="slice s9"><span>Loading</span></div>
  <div class="line"><b></b></div>
</div>

<style>
.layered-text-loader {
  width: 7.3em;
  height: 1em;
  max-width: 100%;
  font: 900 clamp(32px, 8vw, 52px)/1 sans-serif;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  text-transform: uppercase;
  color: #fff;
  filter: drop-shadow(0 0 0.05em rgba(255,255,255,0.25));
}
.layered-text-loader .slice {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  white-space: nowrap;
  text-align: center;
}
.layered-text-loader .slice span {
  animation: layeredScroll 2s cubic-bezier(0.1, 0.6, 0.9, 0.4) infinite, layeredShadow 2s cubic-bezier(0.1, 0.6, 0.9, 0.4) infinite;
}
.layered-text-loader .s1 { clip-path: polygon(0% 0%, 11.11% 0%, 11.11% 100%, 0% 100%); font-size: calc(4em / 20); margin-left: -2.1em; opacity: 0.6; }
.layered-text-loader .s1 span { background: linear-gradient(to right, #ffffff 4%, #aaaaaa 7%); background-size: 200% auto; -webkit-background-clip: text; background-clip: text; color: transparent; }
.layered-text-loader .s2 { clip-path: polygon(11.11% 0%, 22.22% 0%, 22.22% 100%, 11.11% 100%); font-size: calc(4em / 16); margin-left: -0.98em; opacity: 0.7; }
.layered-text-loader .s2 span { background: linear-gradient(to right, #ffffff 9%, #aaaaaa 13%); background-size: 200% auto; -webkit-background-clip: text; background-clip: text; color: transparent; }
.layered-text-loader .s3 { clip-path: polygon(22.22% 0%, 33.33% 0%, 33.33% 100%, 22.22% 100%); font-size: calc(4em / 13); margin-left: -0.33em; opacity: 0.8; }
.layered-text-loader .s3 span { background: linear-gradient(to right, #ffffff 15%, #aaaaaa 18%); background-size: 200% auto; -webkit-background-clip: text; background-clip: text; color: transparent; }
.layered-text-loader .s4 { clip-path: polygon(33.33% 0%, 44.44% 0%, 44.44% 100%, 33.33% 100%); font-size: calc(4em / 11); margin-left: -0.05em; opacity: 0.9; }
.layered-text-loader .s4 span { background: linear-gradient(to right, #ffffff 20%, #aaaaaa 23%); background-size: 200% auto; -webkit-background-clip: text; background-clip: text; color: transparent; }
.layered-text-loader .s5 { clip-path: polygon(44.44% 0%, 55.55% 0%, 55.55% 100%, 44.44% 100%); font-size: calc(4em / 10); margin-left: 0; opacity: 1; }
.layered-text-loader .s6 { clip-path: polygon(55.55% 0%, 66.66% 0%, 66.66% 100%, 55.55% 100%); font-size: calc(4em / 11); margin-left: 0.05em; opacity: 0.9; }
.layered-text-loader .s6 span { background: linear-gradient(to right, #aaaaaa 29%, #ffffff 32%); background-size: 200% auto; -webkit-background-clip: text; background-clip: text; color: transparent; }
.layered-text-loader .s7 { clip-path: polygon(66.66% 0%, 77.77% 0%, 77.77% 100%, 66.66% 100%); font-size: calc(4em / 13); margin-left: 0.33em; opacity: 0.8; }
.layered-text-loader .s7 span { background: linear-gradient(to right, #aaaaaa 34%, #ffffff 37%); background-size: 200% auto; -webkit-background-clip: text; background-clip: text; color: transparent; }
.layered-text-loader .s8 { clip-path: polygon(77.77% 0%, 88.88% 0%, 88.88% 100%, 77.77% 100%); font-size: calc(4em / 16); margin-left: 0.98em; opacity: 0.7; }
.layered-text-loader .s8 span { background: linear-gradient(to right, #aaaaaa 39%, #ffffff 42%); background-size: 200% auto; -webkit-background-clip: text; background-clip: text; color: transparent; }
.layered-text-loader .s9 { clip-path: polygon(88.88% 0%, 100% 0%, 100% 100%, 88.88% 100%); font-size: calc(4em / 20); margin-left: 2.1em; opacity: 0.6; }
.layered-text-loader .s9 span { background: linear-gradient(to right, #aaaaaa 45%, #ffffff 48%); background-size: 200% auto; -webkit-background-clip: text; background-clip: text; color: transparent; }
.layered-text-loader .line {
  position: absolute;
  width: 2em;
  height: 0.05em;
  margin-top: 0.9em;
  border-radius: 0.05em;
  overflow: hidden;
}
.layered-text-loader .line::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(255,255,255,0.3);
}
.layered-text-loader .line b {
  position: absolute;
  inset: 0;
  border-radius: 0.05em;
  background: #fff;
  animation: layeredWobble 2s cubic-bezier(0.5, 0.8, 0.5, 0.2) infinite;
}
@keyframes layeredScroll {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
@keyframes layeredShadow {
  0% { background-position: -98% 0; }
  100% { background-position: 102% 0; }
}
@keyframes layeredWobble {
  0% { transform: translateX(-90%); }
  50% { transform: translateX(90%); }
  100% { transform: translateX(-90%); }
}
</style>`,
  },
]

export function getLoaderExample(slug: string) {
  return loaderExamples.find((item) => item.slug === slug)
}
