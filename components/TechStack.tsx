import {
  SiHtml5,
  SiBootstrap,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiFigma,
  SiClaude,
  SiAngular,
  SiCanva,
  SiJira,
} from 'react-icons/si'
import { LuShoppingBasket } from "react-icons/lu";
import { FaRobot } from "react-icons/fa6";
import { SiContentful } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { BiLogoVisualStudio, BiLogoCss3, BiLogoSass, BiSolidCameraMovie } from "react-icons/bi";
import { DiPhotoshop, DiIllustrator } from "react-icons/di";


const technologies = [
  { name: 'HTML5', icon: SiHtml5, color: '#e34c26' },
  { name: 'CSS3', icon: BiLogoCss3, color: '#264de4' },
  { name: 'Sass', icon: BiLogoSass, color: '#cc6699' },
  { name: 'React', icon: SiReact, color: '#61dafb' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
  { name: 'Angular', icon: SiAngular, color: '#dd0031' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
  { name: 'Bootstrap', icon: SiBootstrap, color: '#7952b3' },
  { name: 'TailwindCSS', icon: SiTailwindcss, color: '#38b2ac' },
  { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
  { name: 'Git', icon: FaGithub, color: '#f1502f' },
  { name: 'Jira', icon: SiJira, color: '#0052cc' },
  { name: 'Figma', icon: SiFigma, color: '#a259ff' },
  { name: 'Photoshop', icon: DiPhotoshop, color: '#31a8ff' },
  { name: 'Canva', icon: SiCanva, color: '#00c4cc' },
  { name: 'CapCut', icon: BiSolidCameraMovie, color: '#000' },
  { name: 'Illustrator', icon: DiIllustrator, color: '#ff9a00' },
  { name: 'GPT-6.3-Codex', icon: FaRobot, color: '#60a5fa' },
  { name: 'Claude AI', icon: SiClaude, color: '#d97757' },
  { name: 'Contentful', icon: SiContentful, color: '#000' },
  { name: 'Intershop', icon: LuShoppingBasket, color: '#C6183D' },
  { name: 'Visual Studio Code', icon: BiLogoVisualStudio, color: '#007acc' },
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
