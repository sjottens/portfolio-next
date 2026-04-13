'use client'

import { useCallback, useEffect, useState, type TouchEvent } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { getProjectBySlug } from '@/lib/contentful'
import type { Project } from '@/lib/contentful'
import { useLanguage } from '@/components/LanguageProvider'

interface PageProps {
  params: Promise<{ slug: string }>
}

export default function PortfolioDetail({ params }: PageProps) {
  const [project, setProject] = useState<Project | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [slug, setSlug] = useState<string>('')
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null)
  const [touchStartX, setTouchStartX] = useState<number | null>(null)
  const { messages } = useLanguage()
  const t = messages.portfolio
  const galleryImages = project?.galleryImages || []
  const galleryLength = galleryImages.length

  const showNextImage = useCallback(() => {
    setActiveImageIndex((current) => {
      if (current === null || galleryLength === 0) {
        return current
      }

      return (current + 1) % galleryLength
    })
  }, [galleryLength])

  const showPreviousImage = useCallback(() => {
    setActiveImageIndex((current) => {
      if (current === null || galleryLength === 0) {
        return current
      }

      return (current - 1 + galleryLength) % galleryLength
    })
  }, [galleryLength])

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

  useEffect(() => {
    if (activeImageIndex === null) {
      document.body.style.overflow = ''
      return
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveImageIndex(null)
      }

      if (event.key === 'ArrowRight') {
        showNextImage()
      }

      if (event.key === 'ArrowLeft') {
        showPreviousImage()
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [activeImageIndex, showNextImage, showPreviousImage])

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    setTouchStartX(event.changedTouches[0].clientX)
  }

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartX === null) {
      return
    }

    const touchEndX = event.changedTouches[0].clientX
    const deltaX = touchEndX - touchStartX
    const swipeThreshold = 40

    if (deltaX > swipeThreshold) {
      showPreviousImage()
    } else if (deltaX < -swipeThreshold) {
      showNextImage()
    }

    setTouchStartX(null)
  }

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
          ← {t.backToPortfolio}
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
              sizes="(max-width: 1024px) 100vw, 896px"
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
              {t.visitWebsite}
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
              {t.viewCode}
            </a>
          )}
        </div>

        {/* Technologies */}
        <div className="mb-12" data-aos="fade-up" data-aos-delay="300">
          <h2 className="text-2xl font-bold text-dark-gray mb-4">{t.technologiesUsed}</h2>
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
            <h2 className="text-2xl font-bold text-dark-gray mb-4">{t.projectDetails}</h2>
            <p className="whitespace-pre-wrap leading-relaxed text-medium-gray">
              {project.content}
            </p>
          </div>
        )}

        {/* Gallery */}
        {project.galleryImages && project.galleryImages.length > 0 && (
          <div className="mb-12" data-aos="fade-up" data-aos-delay="500">
            <h2 className="text-2xl font-bold text-dark-gray mb-6">{t.gallery}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.galleryImages.map((image, index) => (
                <button
                  key={`${image.url}-${index}`}
                  type="button"
                  aria-label={`${t.openImage} ${image.title}`}
                  onClick={() => setActiveImageIndex(index)}
                  className="relative h-64 md:h-80 rounded-lg overflow-hidden"
                >
                  <Image
                    src={image.url}
                    alt={image.title}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </button>
              ))}
            </div>
          </div>
        )}

        {project.galleryImages && activeImageIndex !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/85 p-4 md:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={t.expandedImage}
            onClick={() => setActiveImageIndex(null)}
          >
            <div className="absolute z-20 top-4 left-1/2 -translate-x-1/2 rounded-full bg-black/70 px-3 py-1 text-xs md:text-sm text-white">
              {activeImageIndex + 1} / {galleryLength}
            </div>

            <button
              type="button"
              aria-label={t.closeImage}
              onClick={() => setActiveImageIndex(null)}
              className="absolute z-20 top-4 right-4 md:top-6 md:right-8 h-10 w-10 md:h-12 md:w-12 rounded-full bg-black/70 text-white text-3xl leading-none flex items-center justify-center"
            >
              ×
            </button>

            <button
              type="button"
              aria-label={t.previousImage}
              onClick={(event) => {
                event.stopPropagation()
                showPreviousImage()
              }}
              className="absolute z-20 left-3 md:left-6 top-1/2 -translate-y-1/2 h-10 w-10 md:h-12 md:w-12 rounded-full bg-black/70 text-white text-2xl flex items-center justify-center"
            >
              ‹
            </button>

            <button
              type="button"
              aria-label={t.nextImage}
              onClick={(event) => {
                event.stopPropagation()
                showNextImage()
              }}
              className="absolute z-20 right-3 md:right-6 top-1/2 -translate-y-1/2 h-10 w-10 md:h-12 md:w-12 rounded-full bg-black/70 text-white text-2xl flex items-center justify-center"
            >
              ›
            </button>

            <div
              className="relative h-full w-full max-w-[800px] mx-auto"
              onClick={(event) => event.stopPropagation()}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <Image
                src={galleryImages[activeImageIndex].url}
                alt={galleryImages[activeImageIndex].title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) calc(100vw - 2rem), 800px"
              />
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
            {t.ctaTitle}
          </h2>
          <p className="text-medium-gray mb-6">
            {t.ctaBody}
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105"
          >
            {t.ctaButton}
          </Link>
        </div>
      </div>
    </main>
  )
}
