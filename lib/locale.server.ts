import { cookies } from 'next/headers'
import { defaultLocale, isLocale, type Locale } from '@/lib/locale'

export async function getServerLocale(): Promise<Locale> {
  const cookieStore = await cookies()
  const cookieLocale = cookieStore.get('site-locale')?.value
  return isLocale(cookieLocale) ? cookieLocale : defaultLocale
}
