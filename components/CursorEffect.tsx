'use client'

import { useEffect, useState } from 'react'

export default function CursorEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      {/* Cursor dot */}
      <div
        className="fixed w-3 h-3 bg-primary-blue rounded-full pointer-events-none z-50 mix-blend-multiply"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          opacity: 0.6,
          boxShadow: '0 0 10px rgba(20, 88, 228, 0.5)',
        }}
      />
    </>
  )
}
