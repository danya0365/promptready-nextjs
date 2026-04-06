import { PHASES, PROMPT_TEMPLATE } from '../../../domin/data/setup-guide'
import { Checklist } from './Checklist'
import { CodeBlock } from './CodeBlock'
import { PhaseCard } from './PhaseCard'

export function SetupGuide() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0f] text-slate-200">
      {/* Grid background */}
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(110,231,183,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(110,231,183,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-[900px] px-6 py-12">
        {/* Hero */}
        <div className="relative mb-16 overflow-hidden rounded-2xl border border-[#2a2a3a] bg-gradient-to-br from-emerald-500/5 to-indigo-500/5 px-8 py-12 text-center">
          {/* Spinning conic gradient */}
          <div
            className="pointer-events-none absolute inset-0 animate-spin"
            style={{
              animationDuration: '20s',
              background:
                'conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(110,231,183,0.03) 60deg, transparent 120deg)',
            }}
          />

          <span className="relative mb-5 inline-block rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3.5 py-1 font-mono text-[11px] uppercase tracking-widest text-emerald-400">
            v1.0 — AI Workflow Guide
          </span>

          <h1
            className="relative mb-4 text-4xl font-bold leading-tight md:text-5xl"
            style={{
              background: 'linear-gradient(135deg, #fff 30%, #6ee7b7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            AI-Consistent
            <br />
            Project Setup
          </h1>

          <p className="relative mx-auto max-w-md text-sm text-slate-500">
            Complete every phase before prompting — so AI output stays identical across every session
          </p>
        </div>

        {/* Why box */}
        <div className="mb-12 rounded-xl border border-amber-400/20 border-l-[3px] border-l-amber-400 bg-amber-400/5 px-6 py-5">
          <h3 className="mb-2 font-mono text-[11px] uppercase tracking-wider text-amber-400">
            ⚡ Why does this matter?
          </h3>
          <p className="text-sm leading-relaxed text-slate-400">
            AI has no memory between sessions — every new prompt starts from zero. Without complete
            context, AI guesses everything: libraries, patterns, naming conventions. The result is
            code that looks different every time even with the same prompt.{' '}
            <strong className="text-amber-400">
              The fix: inject context before every prompt.
            </strong>
          </p>
        </div>

        {/* Phases */}
        {PHASES.map((phase, i) => (
          <PhaseCard key={phase.id} phase={phase} defaultOpen={i === 0} />
        ))}

        {/* Checklist */}
        <Checklist />

        {/* Prompt Template */}
        <div className="rounded-2xl border border-pink-500/20 bg-pink-500/[0.03] p-8">
          <h2 className="mb-1 text-lg font-bold text-pink-400">📋 Standard Prompt Template</h2>
          <p className="mb-4 text-sm text-slate-500">Copy and fill in the brackets each time</p>
          <CodeBlock code={PROMPT_TEMPLATE} />
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center font-mono text-xs text-slate-600">
          AI-Consistent Project Setup Guide — @dan/agent-skills workflow
        </footer>
      </div>
    </div>
  )
}
