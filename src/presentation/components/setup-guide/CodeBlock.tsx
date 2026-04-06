'use client'

import { useState } from 'react'

interface CodeBlockProps {
  code: string
}

export function CodeBlock({ code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="relative mt-3 rounded-xl border border-white/[0.06] bg-[#0d1117] overflow-hidden">
      <button
        onClick={handleCopy}
        className="absolute right-3 top-3 z-10 rounded-md border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] text-slate-500 transition-all hover:bg-white/10 hover:text-emerald-400"
      >
        {copied ? 'copied!' : 'copy'}
      </button>
      <pre className="overflow-x-auto p-5 pr-16">
        <code className="font-mono text-[12.5px] leading-[1.8] text-slate-200 whitespace-pre">
          {code}
        </code>
      </pre>
    </div>
  )
}
