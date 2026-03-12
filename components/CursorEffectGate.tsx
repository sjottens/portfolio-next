'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const CursorEffect = dynamic(() => import('@/components/CursorEffect'), { ssr: false })

export default function CursorEffectGate() {
  const [showCursor, setShowCursor] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(hover: hover) and (pointer: fine)')
    const update = () => setShowCursor(media.matches)

    update()

    if (typeof media.addEventListener === 'function') {
      media.addEventListener('change', update)
      return () => media.removeEventListener('change', update)
    }

    media.addListener(update)
    return () => media.removeListener(update)
  }, [])

  if (!showCursor) {
    return null
  }

  return <CursorEffect />
}
