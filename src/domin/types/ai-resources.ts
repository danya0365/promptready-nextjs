export type AIResourceCategory =
  | "Skills"
  | "Prompts"
  | "Tools"
  | "Models"
  | "Communities";

export interface AIResource {
  id: string;
  slug: string;
  title: string;
  url: string;
  description: string;
  category: AIResourceCategory;
  tags: string[];
  featured?: boolean;
  addedAt: string;
}
