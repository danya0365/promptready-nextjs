import { FileText, Lightbulb, Zap } from "lucide-react";
import { PHASES, PROMPT_TEMPLATE } from "../../../domin/data/setup-guide";
import { Checklist } from "./Checklist";
import { CodeBlock } from "./CodeBlock";
import { PhaseCard } from "./PhaseCard";

export function SetupGuide() {
  return (
    <section className="pt-28 pb-20 px-6">
      <div className="max-w-[900px] mx-auto">
        {/* Hero */}
        <div className="relative glass rounded-3xl px-8 py-14 text-center mb-16 overflow-hidden">
          {/* Decorative orbs */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold text-primary bg-primary/10 border border-primary/20 mb-6">
              <Zap className="w-4 h-4" />
              AI Workflow Guide
            </span>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-text-primary mb-4">
              AI-Consistent <span className="gradient-text">Project Setup</span>
            </h1>

            <p className="mx-auto max-w-lg text-base text-text-secondary leading-relaxed">
              Complete every phase before prompting — so AI output stays
              identical across every session
            </p>
          </div>
        </div>

        {/* Why box */}
        <div className="glass rounded-2xl border-l-[3px] border-l-warning px-6 py-5 mb-12">
          <div className="flex items-center gap-2 mb-2">
            <Lightbulb className="w-4 h-4 text-warning" />
            <h3 className="font-mono text-[11px] uppercase tracking-wider text-warning font-bold">
              Why does this matter?
            </h3>
          </div>
          <p className="text-sm leading-relaxed text-text-secondary">
            AI has no memory between sessions — every new prompt starts from
            zero. Without complete context, AI guesses everything: libraries,
            patterns, naming conventions. The result is code that looks
            different every time even with the same prompt.{" "}
            <strong className="text-warning">
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
        <div className="glass rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
              <FileText className="w-5 h-5 text-accent" />
            </div>
            <h2 className="text-lg font-bold text-text-primary">
              Standard Prompt Template
            </h2>
          </div>
          <p className="text-sm text-text-muted mb-4 ml-[52px]">
            Copy and fill in the brackets each time
          </p>
          <CodeBlock code={PROMPT_TEMPLATE} />
        </div>
      </div>
    </section>
  );
}
