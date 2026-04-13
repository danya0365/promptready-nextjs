"use client";

import { ClipboardCheck } from "lucide-react";
import { useState } from "react";
import { WORKFLOW_CHECKLIST_GROUPS } from "../../../domin/data/ai-workflows";
import type {
  WorkflowChecklistGroup,
  WorkflowChecklistItem,
} from "../../../domin/types/ai-workflows";

export function WorkflowChecklist() {
  const allIds = WORKFLOW_CHECKLIST_GROUPS.flatMap(
    (g: WorkflowChecklistGroup) =>
      g.items.map((i: WorkflowChecklistItem) => i.id),
  );
  const [checked, setChecked] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const total = allIds.length;
  const done = checked.size;
  const pct = Math.round((done / total) * 100);

  return (
    <div className="glass rounded-2xl p-8 my-12">
      <div className="flex items-center gap-3 mb-1">
        <div className="w-10 h-10 rounded-xl bg-success/10 border border-success/20 flex items-center justify-center">
          <ClipboardCheck className="w-5 h-5 text-success" />
        </div>
        <h2 className="text-xl font-bold text-text-primary">
          Pre-Prompt Checklist
        </h2>
      </div>
      <p className="text-text-muted text-sm mb-7 ml-[52px]">
        Check every box before prompting AI to do anything new in the project
      </p>

      {/* Progress */}
      <div className="mb-6">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs font-medium text-text-muted">Progress</span>
          <span className="font-mono text-xs font-semibold text-primary">
            {done} / {total} done
          </span>
        </div>
        <div className="progress-bar">
          <div className="progress-bar-fill" style={{ width: `${pct}%` }} />
        </div>
      </div>

      {/* Groups */}
      <div className="space-y-8">
        {WORKFLOW_CHECKLIST_GROUPS.map((group) => (
          <div key={group.title}>
            <h3 className="mb-3 border-b border-border pb-2 font-mono text-[11px] uppercase tracking-widest text-text-muted">
              {group.title}
            </h3>
            <div className="space-y-1">
              {group.items.map((item) => (
                <label
                  key={item.id}
                  className="flex cursor-pointer items-start gap-3 border-b border-border-muted py-2.5 transition-colors duration-200 hover:bg-primary/5 rounded-lg px-2 -mx-2"
                >
                  <input
                    type="checkbox"
                    checked={checked.has(item.id)}
                    onChange={() => toggle(item.id)}
                    className="mt-0.5 h-4 w-4 shrink-0 accent-primary"
                  />
                  <span
                    className={`text-sm leading-relaxed transition-colors duration-200 ${
                      checked.has(item.id)
                        ? "text-text-muted line-through"
                        : "text-text-secondary"
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
  );
}
