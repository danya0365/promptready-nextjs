export interface WhyNote {
  text: string;
}

export interface RuleItem {
  type: "deny" | "allow";
  text: string;
}

export interface Step {
  label: string;
  title?: string;
  description?: string;
  code?: string;
  whyNote?: string;
  rules?: RuleItem[];
}

export interface WorkflowPhase {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  colorKey: WorkflowPhaseColor;
  steps: Step[];
}

export interface WorkflowChecklistItem {
  id: string;
  label: string;
}

export interface WorkflowChecklistGroup {
  title: string;
  items: WorkflowChecklistItem[];
}

export type WorkflowPhaseColor =
  | "phase1"
  | "phase2"
  | "phase3"
  | "phase4"
  | "phase5"
  | "phase6"
  | "phase7"
  | "phase8";
