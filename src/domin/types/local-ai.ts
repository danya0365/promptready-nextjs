export type Capability = "text" | "vision" | "image" | "video";

export interface ModelDetail {
  name: string;
  capabilities: Capability[];
  description: string;
  size?: string;
}

export interface LocalAIStep {
  title: string;
  description?: string;
  code?: string;
  language?: string;
}

export interface LocalAIExample {
  label: string;
  code: string;
  language: string;
}

export interface LocalAITool {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  iconName: string; // Lucide icon name
  downloadUrl: string;
  websiteUrl: string;
  features: string[];
  platforms: ("macOS" | "Windows" | "Linux")[];
  capabilities: Capability[];
  popularModels: ModelDetail[];
  setupGuide: {
    prerequisites?: string[];
    steps: LocalAIStep[];
  };
  usageGuide: {
    overview: string;
    examples: LocalAIExample[];
  };
}
