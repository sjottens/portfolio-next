'use client'

import { useState } from 'react'
import { useLanguage } from '@/components/LanguageProvider'

type CopyCodeBlockProps = {
  code: string
}

export default function CopyCodeBlock({ code }: CopyCodeBlockProps) {
  const [copied, setCopied] = useState(false)
  const { messages } = useLanguage()
  const t = messages.loaderDetail

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 text-slate-100">
      <div className="flex items-center justify-between border-b border-slate-800 px-4 py-3">
        <p className="text-xs uppercase tracking-[0.18em] text-slate-400">{t.copyTitle}</p>
        <button
          type="button"
          onClick={handleCopy}
          className="rounded-lg bg-slate-800 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-slate-700"
        >
          {copied ? t.copiedButton : t.copyButton}
        </button>
      </div>
      <pre className="max-h-[28rem] overflow-auto p-4 text-xs leading-relaxed sm:text-sm">
        <code>{code}</code>
      </pre>
    </div>
  )
}
