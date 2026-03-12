import type { Metadata, Viewport } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import CursorEffectGate from '@/components/CursorEffectGate'
import AOSProvider from '@/components/AOSProvider'

export const metadata: Metadata = {
  title: {
    default: 'Frontend UI Developer | Portfolio',
    template: '%s | Frontend Developer',
  },
  description:
    'Senior Frontend UI Developer with 11+ years of experience. Specializing in responsive, user-friendly interfaces with clean code.',
  keywords: [
    'Frontend Developer',
    'UI Developer',
    'React',
    'Next.js',
    'TypeScript',
    'TailwindCSS',
    'Web Design',
  ],
  authors: [{ name: 'Frontend Developer' }],
  creator: 'Frontend Developer',
  publisher: 'Frontend Developer',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourportfolio.com',
    title: 'Frontend UI Developer | Portfolio',
    description:
      'Senior Frontend UI Developer with 11+ years of experience. Specializing in responsive, user-friendly interfaces.',
    images: [
      {
        url: 'https://yourportfolio.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Frontend Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frontend UI Developer | Portfolio',
    description:
      'Senior Frontend UI Developer with 11+ years of experience. Specializing in responsive, user-friendly interfaces.',
    images: ['https://yourportfolio.com/og-image.jpg'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://images.ctfassets.net" crossOrigin="" />
        <meta name="theme-color" content="#1458e4" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function() {
                const theme = localStorage.getItem('theme') || 'light';
                document.documentElement.setAttribute('data-theme', theme);
              })();`,
          }}
        />
      </head>
      <body className="bg-white text-black" suppressHydrationWarning>
        <CursorEffectGate />
        <Header />
        <AOSProvider>
          <main
            className="min-h-screen"
            suppressHydrationWarning
          >
            {children}
          </main>
        </AOSProvider>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
