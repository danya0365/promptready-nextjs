"use client";

import { ChevronDown, CircleAlert, CircleCheck } from "lucide-react";
import { useState } from "react";
import { WORKFLOW_PHASE_COLORS } from "../../../domin/data/ai-workflows";
import type { WorkflowPhase } from "../../../domin/types/ai-workflows";
import { WorkflowCodeBlock } from "./WorkflowCodeBlock";

interface WorkflowPhaseCardProps {
  phase: WorkflowPhase;
  defaultOpen?: boolean;
}

export function WorkflowPhaseCard({ phase, defaultOpen = true }: WorkflowPhaseCardProps) {
  const [open, setOpen] = useState(defaultOpen);
  const color = WORKFLOW_PHASE_COLORS[phase.colorKey];

  return (
    <div className="mb-6 glass rounded-2xl overflow-hidden transition-all duration-200">
      {/* Header */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center gap-4 px-6 py-5 text-left select-none cursor-pointer"
      >
        {/* Phase number badge */}
        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-mono text-sm font-bold border ${color.bg} ${color.border} ${color.text}`}
        >
          {phase.num}
        </span>

        {/* Title */}
        <div className="flex-1 min-w-0">
          <h2 className="text-base font-bold text-text-primary">
            {phase.title}
          </h2>
          <span className="text-xs text-text-muted">{phase.subtitle}</span>
        </div>

        {/* Toggle */}
        <ChevronDown
          className={`w-5 h-5 shrink-0 text-text-muted transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Body */}
      {open && (
        <div className="px-6 pb-6 space-y-6 border-t border-border animate-fade-in">
          {phase.steps.map((step, i) => (
            <div
              key={`${phase.id}-${i}`}
              className="space-y-4"
            >
              {/* Step header */}
              <div className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-primary/10 border border-primary/20 font-mono text-[10px] font-bold text-primary">
                  {step.label}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-text-primary text-sm">
                    {step.title}
                  </h3>
                  {step.description && (
                    <p className="text-xs text-text-secondary mt-1">
                      {step.description}
                    </p>
                  )}
                </div>
              </div>

              {/* Code block */}
              {step.code && <WorkflowCodeBlock code={step.code} />}

              {/* Why note */}
              {step.whyNote && (
                <div className="glass rounded-xl border-l-[3px] border-l-warning px-4 py-3">
                  <div className="flex items-center gap-2 mb-1">
                    <CircleAlert className="w-3.5 h-3.5 text-warning" />
                    <span className="font-mono text-[10px] uppercase tracking-wider text-warning font-bold">
                      Why this matters
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed text-text-secondary">
                    {step.whyNote}
                  </p>
                </div>
              )}

              {/* Rules */}
              {step.rules && step.rules.length > 0 && (
                <div className="space-y-2">
                  {step.rules.map((rule, ruleIndex) => (
                    <div
                      key={ruleIndex}
                      className={`flex items-start gap-2 p-2 rounded-lg border ${
                        rule.type === "deny"
                          ? "bg-danger/5 border-danger/20"
                          : "bg-success/5 border-success/20"
                      }`}
                    >
                      {rule.type === "deny" ? (
                        <CircleAlert className="w-3.5 h-3.5 text-danger mt-0.5" />
                      ) : (
                        <CircleCheck className="w-3.5 h-3.5 text-success mt-0.5" />
                      )}
                      <span
                        className={`text-xs leading-relaxed ${
                          rule.type === "deny" ? "text-danger" : "text-success"
                        }`}
                      >
                        {rule.text}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
