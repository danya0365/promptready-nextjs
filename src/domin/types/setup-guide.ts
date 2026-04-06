export interface WhyNote {
  text: string
}

export interface RuleItem {
  type: 'deny' | 'allow'
  text: string
}

export interface Step {
  label: string
  title?: string
  description?: string
  code?: string
  whyNote?: string
  rules?: RuleItem[]
}

export interface Phase {
  id: string
  num: string
  title: string
  subtitle: string
  colorKey: PhaseColor
  steps: Step[]
}

export interface ChecklistItem {
  id: string
  label: string
}

export interface ChecklistGroup {
  title: string
  items: ChecklistItem[]
}

export type PhaseColor =
  | 'phase1'
  | 'phase2'
  | 'phase3'
  | 'phase4'
  | 'phase5'
  | 'phase6'
  | 'phase7'
