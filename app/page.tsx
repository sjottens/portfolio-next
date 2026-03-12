import { Metadata } from 'next'
import Hero from '@/components/Hero'
import TechStack from '@/components/TechStack'
import LatestProjects from '@/components/LatestProjects'
import { getSiteImages } from '@/lib/contentful'

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Frontend UI Developer with 11+ years of experience. Building clean, responsive, and user-friendly interfaces.',
  openGraph: {
    title: 'Frontend UI Developer | Home',
    description:
      'Frontend UI Developer with 11+ years of experience. Building clean, responsive, and user-friendly interfaces.',
    url: 'https://yourportfolio.com',
  },
}

export default async function Home() {
  const { bannerImageUrl } = await getSiteImages()

  return (
    <div>
      <Hero bannerImageUrl={bannerImageUrl} />
      <TechStack />
      <LatestProjects />
    </div>
  )
}
