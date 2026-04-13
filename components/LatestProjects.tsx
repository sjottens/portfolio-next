import Link from 'next/link'
import { getProjects } from '@/lib/contentful'
import ProjectCard from '@/components/ProjectCard'
import type { Project } from '@/lib/contentful'
import { getMessages, type Locale } from '@/lib/locale'

type LatestProjectsProps = {
  locale: Locale
}

export default async function LatestProjects({ locale }: LatestProjectsProps) {
  const messages = getMessages(locale)

  let projects: Project[] = []

  try {
    projects = (await getProjects()).slice(0, 3)
  } catch (error) {
    console.error('Error fetching projects:', error)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-bold text-center text-dark-gray mb-4"
          data-aos="fade-up"
        >
          {messages.latestProjects.heading}
        </h2>
        <p
          className="text-center text-medium-gray text-lg mb-16 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {messages.latestProjects.description}
        </p>

        {projects.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay="200">
              <Link
                href="/portfolio"
                className="inline-block bg-primary-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105"
              >
                {messages.latestProjects.cta}
              </Link>
            </div>
          </>
        ) : (
          <p className="text-center text-medium-gray text-lg py-12">
            {messages.latestProjects.empty}
          </p>
        )}
      </div>
    </section>
  )
}
