/**
 * Contentful CMS API Integration
 * Handles all communication with Contentful CMS
 */

import { createClient } from 'contentful'

const spaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken =
  process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN ||
  process.env.CONTENTFUL_ACCESS_TOKEN

function toSafeErrorMessage(error: unknown): string {
  if (error instanceof Error && error.message) {
    return error.message
  }

  return 'Unknown error'
}

function getClient() {
  if (!spaceId || !accessToken) {
    return null
  }

  return createClient({
    space: spaceId,
    accessToken,
  })
}

export interface Project {
  id: string
  slug: string
  title: string
  description: string
  thumbnail: {
    url: string
    title: string
  }
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  galleryImages?: Array<{
    url: string
    title: string
  }>
  content?: string
}

function mapEntryToProject(entry: any): Project | null {
  const fields = entry?.fields || {}
  const slug = fields.slug
  const title = fields.title
  const description = fields.description
  const thumbnailUrl = fields?.thumbnail?.fields?.file?.url
  const thumbnailTitle = fields?.thumbnail?.fields?.title || title || 'Project image'

  // Ignore partial/non-portfolio project entries (e.g. image-only utility entries).
  if (!slug || !title || !description || !thumbnailUrl) {
    return null
  }

  return {
    id: entry.sys.id,
    slug,
    title,
    description,
    thumbnail: {
      url: `https:${thumbnailUrl}`,
      title: thumbnailTitle,
    },
    technologies: fields.technologies || [],
    liveUrl: fields.liveUrl,
    githubUrl: fields.githubUrl,
    galleryImages: (fields.galleryImages || [])
      .map((img: any) => {
        const imageUrl = img?.fields?.file?.url
        const imageTitle = img?.fields?.title || 'Project gallery image'
        if (!imageUrl) {
          return null
        }

        return {
          url: `https:${imageUrl}`,
          title: imageTitle,
        }
      })
      .filter((img: any) => img !== null),
    content: fields.content,
  }
}

export interface SiteImages {
  bannerImageUrl: string
  profileImageUrl: string
}

function getAssetUrl(asset: any): string | null {
  const rawUrl = asset?.fields?.file?.url
  if (!rawUrl) {
    return null
  }

  return rawUrl.startsWith('http') ? rawUrl : `https:${rawUrl}`
}

async function resolveAssetUrl(client: any, assetLike: any): Promise<string | null> {
  const directUrl = getAssetUrl(assetLike)
  if (directUrl) {
    return directUrl
  }

  const assetId = assetLike?.sys?.id
  if (!assetId) {
    return null
  }

  try {
    const resolvedAsset = await client.getAsset(assetId)
    return getAssetUrl(resolvedAsset)
  } catch {
    return null
  }
}

async function pickFirstAssetUrl(client: any, candidates: any[]): Promise<string | null> {
  for (const candidate of candidates) {
    const url = await resolveAssetUrl(client, candidate)
    if (url) {
      return url
    }
  }

  return null
}

const defaultSiteImages: SiteImages = {
  bannerImageUrl:
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&h=1080&fit=crop',
  profileImageUrl:
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&h=1125&fit=crop',
}

/**
 * Fetch all projects from Contentful
 */
export async function getProjects(): Promise<Project[]> {
  try {
    const client = getClient()
    if (!client) {
      console.error('Missing Contentful credentials for project fetch.')
      return []
    }

    const entries = await client.getEntries({
      content_type: 'project',
      limit: 100,
      include: 10,
    })

    return entries.items
      .map((entry: any) => mapEntryToProject(entry))
      .filter((project: Project | null): project is Project => project !== null)
  } catch (error) {
    console.error(`Error fetching projects from Contentful: ${toSafeErrorMessage(error)}`)
    return []
  }
}



/**
 * Fetch a single project by slug
 */
export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const client = getClient()
    if (!client) {
      return null
    }

    const entries = await client.getEntries({
      content_type: 'project',
      'fields.slug': slug,
      limit: 1,
      include: 10,
    })

    if (entries.items.length === 0) {
      return null
    }

    const entry = entries.items[0] as any
    return mapEntryToProject(entry)
  } catch (error) {
    console.error(
      `Error fetching project "${slug}" from Contentful: ${toSafeErrorMessage(error)}`
    )
    return null
  }
}

/**
 * Get all project slugs for static generation
 */
export async function getProjectSlugs(): Promise<string[]> {
  try {
    const client = getClient()
    if (!client) {
      return []
    }

    const entries = await client.getEntries({
      content_type: 'project',
      limit: 100,
      select: ['fields.slug'],
    })

    return entries.items
      .map((entry: any) => entry?.fields?.slug)
      .filter((slug: unknown): slug is string => typeof slug === 'string' && slug.length > 0)
  } catch (error) {
    console.error(`Error fetching project slugs: ${toSafeErrorMessage(error)}`)
    return []
  }
}

/**
 * Fetch banner/profile images for global sections from Contentful projects.
 * Expected fields (any one):
 * - Banner: BannerImage | bannerImage | banner | heroImage
 * - Profile: ProfileImage | profileImage | profilePhoto | authorImage
 */
export async function getSiteImages(): Promise<SiteImages> {
  try {
    const client = getClient()
    if (!client) {
      return defaultSiteImages
    }

    // Discover images from project entries.
    const entries = await client.getEntries({
      content_type: 'project',
      limit: 100,
      include: 10,
    })

    let bannerImageUrl: string | null = null
    let profileImageUrl: string | null = null

    for (const item of entries.items as any[]) {
      const fields = item?.fields || {}

      if (!bannerImageUrl) {
        bannerImageUrl = await pickFirstAssetUrl(client, [
          fields.BannerImage,
          fields.bannerImage,
          fields.banner,
          fields.heroImage,
        ])
      }

      if (!profileImageUrl) {
        profileImageUrl = await pickFirstAssetUrl(client, [
          fields.ProfileImage,
          fields.profileImage,
          fields.profilePhoto,
          fields.authorImage,
        ])
      }

      if (bannerImageUrl && profileImageUrl) {
        break
      }
    }

    return {
      bannerImageUrl: bannerImageUrl || defaultSiteImages.bannerImageUrl,
      profileImageUrl: profileImageUrl || defaultSiteImages.profileImageUrl,
    }
  } catch (error) {
    console.error(`Error fetching site images from Contentful: ${toSafeErrorMessage(error)}`)
    return defaultSiteImages
  }
}