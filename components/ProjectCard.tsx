import Image from 'next/image'
import Link from 'next/link'
import { HiArrowRight } from 'react-icons/hi'
import type { Project } from '@/lib/contentful'

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Link href={`/portfolio/${project.slug}`}>
      <div
        className="group bg-white rounded-xl overflow-hidden border border-light-gray hover:border-primary-blue hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
        data-aos="fade-up"
        data-aos-delay={`${index * 50}`}
      >
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden bg-light-gray">
          <Image
            src={project.thumbnail.url}
            alt={project.thumbnail.title}
            fill
            priority={index === 0}
            className="object-cover group-hover:scale-110 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-dark-gray mb-2 group-hover:text-primary-blue transition-colors">
            {project.title}
          </h3>
          <p className="text-medium-gray text-sm mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="inline-block px-3 py-1 bg-light-gray text-dark-gray text-xs rounded-full"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="inline-block px-3 py-1 bg-light-gray text-dark-gray text-xs rounded-full">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>

          {/* Link */}
          <div className="flex items-center text-primary-blue font-semibold group-hover:gap-2 transition-all">
            View Project
            <HiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  )
}
