"use client";

import { ChevronDown, CircleAlert, CircleCheck } from "lucide-react";
import { useState } from "react";
import { PHASE_COLORS } from "../../../domin/data/setup-guide";
import type { Phase } from "../../../domin/types/setup-guide";
import { CodeBlock } from "./CodeBlock";

interface PhaseCardProps {
  phase: Phase;
  defaultOpen?: boolean;
}

export function PhaseCard({ phase, defaultOpen = true }: PhaseCardProps) {
  const [open, setOpen] = useState(defaultOpen);
  const color = PHASE_COLORS[phase.colorKey];

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
              key={i}
              className={`pt-6 ${i < phase.steps.length - 1 ? "pb-6 border-b border-border-muted" : ""}`}
            >
              {/* Step label */}
              <p
                className={`mb-2 font-mono text-[11px] uppercase tracking-widest ${color.text} opacity-80`}
              >
                {step.label}
              </p>

              {/* Step title */}
              {step.title && (
                <h3 className="mb-2 text-[15px] font-semibold text-text-primary">
                  {step.title}
                </h3>
              )}

              {/* Description */}
              {step.description && (
                <p className="mb-3 text-sm leading-relaxed text-text-secondary">
                  {step.description}
                </p>
              )}

              {/* Code */}
              {step.code && <CodeBlock code={step.code} />}

              {/* Why note */}
              {step.whyNote && (
                <div className="mt-4 rounded-xl border-l-[3px] border-primary/50 bg-primary/5 px-4 py-3">
                  <strong className="mb-1 block font-mono text-[11px] uppercase tracking-wider text-primary">
                    Why?
                  </strong>
                  <span className="text-[13px] leading-relaxed text-text-secondary">
                    {step.whyNote}
                  </span>
                </div>
              )}

              {/* Rules */}
              {step.rules && step.rules.length > 0 && (
                <div className="mt-4 space-y-2">
                  {step.rules.map((rule, ri) => (
                    <div
                      key={ri}
                      className={`flex items-start gap-3 rounded-xl border px-4 py-2.5 text-[13px] ${
                        rule.type === "deny"
                          ? "border-error/15 bg-error/5 text-text-secondary"
                          : "border-success/15 bg-success/5 text-text-secondary"
                      }`}
                    >
                      {rule.type === "deny" ? (
                        <CircleAlert className="w-4 h-4 shrink-0 mt-0.5 text-error" />
                      ) : (
                        <CircleCheck className="w-4 h-4 shrink-0 mt-0.5 text-success" />
                      )}
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
  );
}
