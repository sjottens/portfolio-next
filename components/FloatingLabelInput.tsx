'use client'

import React from 'react'

interface FloatingLabelInputProps {
  id: string
  label: string
  type?: string
  placeholder?: string
  className?: string
  accentColor?: 'blue' | 'green'
}

export default function FloatingLabelInput({
  id,
  label,
  type = 'text',
  placeholder = ' ',
  className = '',
  accentColor = 'blue',
}: FloatingLabelInputProps) {
  const isGreen = accentColor === 'green'
  const accentClass = isGreen ? 'from-green-500 to-green-600' : 'from-primary-blue to-[#1f8dff]'
  const focusClass = isGreen ? 'peer-focus:border-green-500' : 'peer-focus:border-primary-blue'
  const labelColorClass = isGreen ? 'peer-focus:text-green-500 peer-not-placeholder-shown:text-green-400' : 'peer-focus:text-primary-blue peer-not-placeholder-shown:text-sky-300'

  return (
    <div className={`relative ${className}`}>
      {/* Left accent border */}
      <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${accentClass} rounded-full`} />
      
      {/* Main input container with border - shows only when empty, hidden when filled */}
      <div className={`relative pl-5 pr-4 py-3 border-b-2 border-slate-700 transition-all duration-500 ${focusClass} group peer-not-placeholder-shown:border-transparent`}>
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          className="peer w-full bg-transparent text-white placeholder-transparent outline-none text-base"
        />
        <label
          htmlFor={id}
          className={`absolute left-5 -top-0.5 translate-y-0 text-xs font-medium text-slate-400 transition-all duration-500 pointer-events-none origin-left peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-focus:font-semibold ${labelColorClass}`}
        >
          {label}
        </label>
      </div>
    </div>
  )
}
