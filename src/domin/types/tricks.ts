export type TrickBlockType =
  | "text"
  | "code"
  | "note"
  | "warning"
  | "success"
  | "platforms";

export interface PlatformConfig {
  os: "macOS" | "Windows" | "Linux";
  command?: string;
  description?: string;
}

export interface TrickBlock {
  type: TrickBlockType;
  content: string | string[] | PlatformConfig[];
  language?: string;
}

export interface TrickStep {
  title: string;
  blocks: TrickBlock[];
}

export interface CommonIssue {
  issue: string;
  solution: string;
}

export interface Trick {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: "Local AI" | "Coding" | "Productivity" | "Advanced Prompting";
  tags: string[];
  difficulty?: "Beginner" | "Intermediate" | "Advanced";
  minHardware?: string;
  createdAt: string;
  image?: string;
  steps: TrickStep[];
  commonIssues?: CommonIssue[];
  author?: {
    name: string;
    url?: string;
  };
  sourceUrl?: string;
}
