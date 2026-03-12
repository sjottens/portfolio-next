'use client'

import { useEffect, useState } from 'react'
import { getProjects } from '@/lib/contentful'
import ProjectCard from '@/components/ProjectCard'
import type { Project } from '@/lib/contentful'

export default function Portfolio() {
  const [projects, setProjects] = useState<Project[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedTech, setSelectedTech] = useState<string>('')

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects()
        setProjects(data)
      } catch (error) {
        console.error('Error fetching projects:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchProjects()
  }, [])

  // Get unique technologies from all projects
  const allTechnologies = Array.from(
    new Set(projects.flatMap((p) => p.technologies))
  )

  // Filter projects based on selected technology
  const filteredProjects = selectedTech
    ? projects.filter((p) => p.technologies.includes(selectedTech))
    : projects

  return (
    <main className="min-h-screen pt-20 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1
            className="text-5xl md:text-6xl font-bold text-dark-gray mb-4"
            data-aos="fade-up"
          >
            Portfolio
          </h1>
          <p
            className="text-xl text-medium-gray max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Explore my recent projects and see how I've helped clients build amazing digital experiences.
          </p>
        </div>

        {/* Filter Bar */}
        {allTechnologies.length > 0 && (
          <div
            className="mb-12 flex flex-wrap justify-center gap-3"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <button
              onClick={() => setSelectedTech('')}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedTech === ''
                  ? 'bg-primary-blue text-white'
                  : 'bg-light-gray text-dark-gray hover:bg-medium-gray hover:text-white'
              }`}
            >
              All
            </button>
            {allTechnologies.map((tech) => (
              <button
                key={tech}
                onClick={() => setSelectedTech(tech)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedTech === tech
                    ? 'bg-primary-blue text-white'
                    : 'bg-light-gray text-dark-gray hover:bg-medium-gray hover:text-white'
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        )}

        {/* Projects Grid */}
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-light-gray border-t-primary-blue"></div>
          </div>
        ) : filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-medium-gray mb-6">
              {selectedTech
                ? `No projects found with ${selectedTech}`
                : 'No projects available yet'}
            </p>
            {selectedTech && (
              <button
                onClick={() => setSelectedTech('')}
                className="text-primary-blue font-semibold hover:underline"
              >
                Clear filter
              </button>
            )}
          </div>
        )}
      </div>
    </main>
  )
}
