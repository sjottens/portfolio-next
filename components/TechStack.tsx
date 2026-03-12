import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiGit,
  SiFigma,
  SiWebpack,
} from 'react-icons/si'

type CustomIconProps = {
  size?: number
  className?: string
  style?: React.CSSProperties
}

function CodexLogo({ size = 48, className, style }: CustomIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={className}
      style={style}
      aria-label="GPT-6.3-Codex"
    >
      <rect x="3" y="3" width="42" height="42" rx="10" fill="#111827" />
      <path
        d="M14 17h7v4h-3v6h3v4h-7V17zm20 0l-6 7 6 7h-5l-5-7 5-7h5z"
        fill="#60a5fa"
      />
    </svg>
  )
}

function ClaudeLogo({ size = 48, className, style }: CustomIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={className}
      style={style}
      aria-label="Claude AI"
    >
      <rect x="3" y="3" width="42" height="42" rx="10" fill="#1f2937" />
      <circle cx="24" cy="24" r="12" fill="#efc27e" />
      <path d="M20 18h8v4h-4v8h4v4h-8V18z" fill="#111827" />
    </svg>
  )
}

const technologies = [
  { name: 'React', icon: SiReact, color: '#61dafb' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
  { name: 'TailwindCSS', icon: SiTailwindcss, color: '#38b2ac' },
  { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
  { name: 'Git', icon: SiGit, color: '#f1502f' },
  { name: 'Figma', icon: SiFigma, color: '#a259ff' },
  { name: 'GPT-6.3-Codex', icon: CodexLogo, color: '#60a5fa' },
  { name: 'Claude AI', icon: ClaudeLogo, color: '#efc27e' },
]

export default function TechStack() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-bold text-center text-dark-gray mb-4"
          data-aos="fade-up"
        >
          Tech Stack
        </h2>
        <p
          className="text-center text-medium-gray text-lg mb-16 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Technologies and tools I use to build exceptional digital experiences
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon
            return (
              <div
                key={tech.name}
                className="flex flex-col items-center justify-center p-6 rounded-xl border border-light-gray hover:border-primary-blue hover:shadow-lg transition-all transform hover:scale-110"
                data-aos="fade-up"
                data-aos-delay={`${index * 50}`}
              >
                <IconComponent size={48} style={{ color: tech.color }} className="mb-3" />
                <span className="text-dark-gray font-semibold text-center">{tech.name}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
