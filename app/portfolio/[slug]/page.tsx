'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { getProjectBySlug } from '@/lib/contentful'
import type { Project } from '@/lib/contentful'

interface PageProps {
  params: Promise<{ slug: string }>
}

export default function PortfolioDetail({ params }: PageProps) {
  const [project, setProject] = useState<Project | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [slug, setSlug] = useState<string>('')

  useEffect(() => {
    const getSlug = async () => {
      const resolvedParams = await params
      setSlug(resolvedParams.slug)
    }

    getSlug()
  }, [params])

  useEffect(() => {
    if (!slug) return

    const fetchProject = async () => {
      try {
        const data = await getProjectBySlug(slug)
        if (!data) {
          notFound()
        }
        setProject(data)
      } catch (error) {
        console.error('Error fetching project:', error)
        notFound()
      } finally {
        setIsLoading(false)
      }
    }

    fetchProject()
  }, [slug])

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen pt-20">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-light-gray border-t-primary-blue"></div>
      </div>
    )
  }

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/portfolio"
          className="text-primary-blue font-semibold hover:underline mb-8 inline-block"
        >
          ← Back to Portfolio
        </Link>

        {/* Hero Image */}
        {project.thumbnail && (
          <div
            className="relative h-96 md:h-[500px] rounded-xl overflow-hidden mb-12"
            data-aos="fade-up"
          >
            <Image
              src={project.thumbnail.url}
              alt={project.thumbnail.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Header */}
        <div className="mb-12">
          <h1
            className="text-5xl md:text-6xl font-bold text-dark-gray mb-4"
            data-aos="fade-up"
          >
            {project.title}
          </h1>
          <p
            className="text-xl text-medium-gray leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {project.description}
          </p>
        </div>

        {/* Project Links */}
        <div
          className="flex gap-4 mb-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-primary-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
            >
              <FiExternalLink />
              Visit Website
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border-2 border-primary-blue text-primary-blue px-6 py-3 rounded-lg font-semibold hover:bg-primary-blue hover:text-white transition-all"
            >
              <FiGithub />
              View Code
            </a>
          )}
        </div>

        {/* Technologies */}
        <div className="mb-12" data-aos="fade-up" data-aos-delay="300">
          <h2 className="text-2xl font-bold text-dark-gray mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-light-gray text-dark-gray rounded-full font-semibold"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Content */}
        {project.content && (
          <div
            className="prose prose-lg max-w-none mb-12 text-dark-gray"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h2 className="text-2xl font-bold text-dark-gray mb-4">Project Details</h2>
            <p className="whitespace-pre-wrap leading-relaxed text-medium-gray">
              {project.content}
            </p>
          </div>
        )}

        {/* Gallery */}
        {project.galleryImages && project.galleryImages.length > 0 && (
          <div className="mb-12" data-aos="fade-up" data-aos-delay="500">
            <h2 className="text-2xl font-bold text-dark-gray mb-6">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.galleryImages.map((image, index) => (
                <div
                  key={`${image.url}-${index}`}
                  className="relative h-64 md:h-80 rounded-lg overflow-hidden"
                >
                  <Image
                    src={image.url}
                    alt={image.title}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div
          className="bg-light-gray rounded-xl p-8 text-center"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <h2 className="text-2xl font-bold text-dark-gray mb-4">
            Interested in working together?
          </h2>
          <p className="text-medium-gray mb-6">
            Let's discuss your next project and see how I can help bring your ideas to life.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </main>
  )
}
