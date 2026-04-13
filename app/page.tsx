import { Metadata } from 'next'
import Hero from '@/components/Hero'
import TechStack from '@/components/TechStack'
import LatestProjects from '@/components/LatestProjects'
import { getSiteImages } from '@/lib/contentful'
import { getServerLocale } from '@/lib/locale.server'

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
  const locale = await getServerLocale()

  return (
    <div>
      <Hero bannerImageUrl={bannerImageUrl} locale={locale} />
      <TechStack locale={locale} />
      <LatestProjects locale={locale} />
    </div>
  )
}
