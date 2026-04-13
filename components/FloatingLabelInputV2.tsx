'use client'

import React from 'react'

interface FloatingLabelInputV2Props {
  id: string
  label: string
  type?: string
  placeholder?: string
  name?: string
  className?: string
  autoComplete?: string
}

export default function FloatingLabelInputV2({
  id,
  label,
  type = 'text',
  placeholder = '',
  name,
  className = '',
  autoComplete,
}: FloatingLabelInputV2Props) {
  return (
    <div
      className={`input-container relative w-full max-w-[190px] ${className}`}
      style={{
        color: 'rgb(50, 50, 80)',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div className="input-shell relative">
        <input
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className="input-field w-full rounded-[0.2em] px-3 py-2 text-base font-normal outline-none transition-all duration-200 placeholder:text-slate-400"
          style={{
            border: '1px solid var(--c-border, currentColor)',
            color: 'var(--c-text)',
            letterSpacing: '0.1ch',
            backgroundColor: 'var(--c-bg)',
          }}
        />
        <label
          htmlFor={id}
          className="input-label absolute left-2 pointer-events-none font-medium"
        >
          {label}
        </label>
      </div>

      <style jsx>{`
        .input-container {
          --c-text: rgb(50, 50, 80);
          --c-bg: rgb(252, 252, 252);
          --c-outline: rgb(55, 45, 190);
          display: block;
          position: relative;
          max-width: 190px;
          margin-bottom: 1.25rem;
        }

        .input-shell {
          position: relative;
          padding-top: 0.9rem;
        }

        .input-field::placeholder {
          color: #94a3b8;
        }

        .input-field:not(:placeholder-shown) + .input-label,
        .input-field:focus + .input-label,
        .input-field:focus-visible + .input-label {
          top: 0;
          transform: translateY(0);
          opacity: 1;
        }

        .input-field:invalid {
          --c-border: rgb(230, 85, 60);
          --c-text: rgb(230, 85, 60);
          --c-outline: rgb(230, 85, 60);
        }

        .input-field:is(:disabled, :read-only) {
          --c-border: rgb(150, 150, 150);
          --c-text: rgb(170, 170, 170);
        }

        .input-field:is(:focus, :focus-visible) {
          outline: 2px solid var(--c-outline);
          outline-offset: 2px;
        }

        .input-label {
          --timing: 200ms ease-in;
          top: calc(0.9rem + 50%);
          transition: top var(--timing), transform var(--timing), opacity var(--timing);
          transform: translateY(-50%);
          opacity: 0;
          color: var(--c-text);
          padding: 0 0.25rem;
          background: var(--c-bg);
          z-index: 1;
        }
      `}</style>
    </div>
  )
}
