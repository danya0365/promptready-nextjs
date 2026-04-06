'use client'

import { useState } from 'react'
import { CHECKLIST_GROUPS } from '../../../domin/data/setup-guide'

export function Checklist() {
  const allIds = CHECKLIST_GROUPS.flatMap((g) => g.items.map((i) => i.id))
  const [checked, setChecked] = useState<Set<string>>(new Set())

  const toggle = (id: string) => {
    setChecked((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  const total = allIds.length
  const done = checked.size
  const pct = Math.round((done / total) * 100)

  return (
    <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-indigo-500/5 p-8 my-12">
      <h2 className="text-xl font-bold text-emerald-400 mb-1">✅ Pre-Prompt Checklist</h2>
      <p className="text-slate-500 text-sm mb-7">Check every box before prompting AI to do anything new in the project</p>

      {/* Progress */}
      <div className="mb-6">
        <div className="mb-2 text-right font-mono text-xs text-emerald-400">
          {done} / {total} done
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#2a2a3a]">
          <div
            className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-indigo-400 transition-all duration-500"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      {/* Groups */}
      <div className="space-y-8">
        {CHECKLIST_GROUPS.map((group) => (
          <div key={group.title}>
            <h3 className="mb-3 border-b border-white/5 pb-2 font-mono text-[11px] uppercase tracking-widest text-slate-500">
              {group.title}
            </h3>
            <div className="space-y-1">
              {group.items.map((item) => (
                <label
                  key={item.id}
                  className="flex cursor-pointer items-start gap-3 border-b border-white/[0.03] py-2.5 transition-opacity hover:opacity-80"
                >
                  <input
                    type="checkbox"
                    checked={checked.has(item.id)}
                    onChange={() => toggle(item.id)}
                    className="mt-0.5 h-4 w-4 flex-shrink-0 accent-emerald-400"
                  />
                  <span
                    className={`text-sm leading-relaxed transition-colors ${
                      checked.has(item.id) ? 'text-slate-600 line-through' : 'text-slate-300'
                    }`}
                  >
                    {item.label}
                  </span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
