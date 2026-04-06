'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { PHASE_COLORS } from '../../../domin/data/setup-guide'
import type { Phase } from '../../../domin/types/setup-guide'
import { CodeBlock } from './CodeBlock'

interface PhaseCardProps {
  phase: Phase
  defaultOpen?: boolean
}

export function PhaseCard({ phase, defaultOpen = true }: PhaseCardProps) {
  const [open, setOpen] = useState(defaultOpen)
  const color = PHASE_COLORS[phase.colorKey]

  return (
    <div
      className="mb-8 overflow-hidden rounded-2xl border border-[#2a2a3a] transition-colors duration-200 hover:border-emerald-500/20"
    >
      {/* Header */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center gap-4 bg-[#111118] px-6 py-5 text-left select-none border-b border-[#2a2a3a]"
      >
        {/* Phase number badge */}
        <span
          className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl font-mono text-sm font-bold"
          style={{ background: `${color}1a`, color }}
        >
          {phase.num}
        </span>

        {/* Title */}
        <div className="flex-1 min-w-0">
          <h2 className="text-[17px] font-semibold text-slate-100">{phase.title}</h2>
          <span className="text-xs text-slate-500">{phase.subtitle}</span>
        </div>

        {/* Toggle */}
        <ChevronDown
          size={18}
          className="flex-shrink-0 text-slate-500 transition-transform duration-300"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </button>

      {/* Body */}
      {open && (
        <div className="bg-[#1a1a24] px-6 py-6 space-y-8">
          {phase.steps.map((step, i) => (
            <div key={i} className={i < phase.steps.length - 1 ? 'pb-8 border-b border-white/5' : ''}>
              {/* Step label */}
              <p
                className="mb-2 font-mono text-[11px] uppercase tracking-widest opacity-70"
                style={{ color }}
              >
                {step.label}
              </p>

              {/* Step title */}
              {step.title && (
                <h3 className="mb-2 text-[15px] font-semibold text-slate-50">{step.title}</h3>
              )}

              {/* Description */}
              {step.description && (
                <p className="mb-3 text-sm leading-relaxed text-slate-400">{step.description}</p>
              )}

              {/* Code */}
              {step.code && <CodeBlock code={step.code} />}

              {/* Why note */}
              {step.whyNote && (
                <div className="mt-3 rounded-r-xl border-l-2 border-indigo-400/40 bg-indigo-500/[0.06] px-4 py-3">
                  <strong className="mb-1 block font-mono text-[11px] uppercase tracking-wider text-indigo-400">
                    Why?
                  </strong>
                  <span className="text-[13px] leading-relaxed text-slate-400">{step.whyNote}</span>
                </div>
              )}

              {/* Rules */}
              {step.rules && step.rules.length > 0 && (
                <div className="mt-3 space-y-2">
                  {step.rules.map((rule, ri) => (
                    <div
                      key={ri}
                      className={`flex items-start gap-3 rounded-lg border px-3 py-2 text-[13px] ${
                        rule.type === 'deny'
                          ? 'border-red-500/15 bg-red-500/[0.06] text-red-300'
                          : 'border-emerald-500/15 bg-emerald-500/[0.06] text-emerald-300'
                      }`}
                    >
                      <span className="flex-shrink-0 text-sm">{rule.type === 'deny' ? '❌' : '✅'}</span>
                      <span>{rule.text}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
