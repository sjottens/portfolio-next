'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

interface AOSProviderProps {
  children: React.ReactNode
}

type AOSModule = {
  init: (options?: Record<string, unknown>) => void
  refreshHard: () => void
}

export default function AOSProvider({ children }: AOSProviderProps) {
  const pathname = usePathname()
  const aosRef = useRef<AOSModule | null>(null)

  useEffect(() => {
    let isMounted = true

    const isTouchDevice = window.matchMedia('(hover: none), (pointer: coarse), (max-width: 768px)').matches
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Skip scroll-animation runtime on touch devices to keep mobile payload lean.
    if (isTouchDevice || prefersReducedMotion) {
      return () => {
        isMounted = false
      }
    }

    const initAOS = async () => {
      if (!document.getElementById('aos-stylesheet')) {
        const stylesheet = document.createElement('link')
        stylesheet.id = 'aos-stylesheet'
        stylesheet.rel = 'stylesheet'
        stylesheet.href = 'https://unpkg.com/aos@2.3.4/dist/aos.css'
        document.head.appendChild(stylesheet)
      }

      const { default: AOS } = await import('aos')
      if (!isMounted) return

      AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: false,
        mirror: true,
      })

      aosRef.current = AOS as AOSModule
    }

    initAOS()

    return () => {
      isMounted = false
    }
  }, [])

  useEffect(() => {
    aosRef.current?.refreshHard()
  }, [pathname])

  return <>{children}</>
}