export type UseCaseCategory =
  | "Developer Productivity"
  | "Content Creation"
  | "Business Automation"
  | "DevOps & CI/CD"
  | "Marketing & SEO"
  | "Customer Support";

export interface UseCase {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: UseCaseCategory;
  tags: string[];
  featured?: boolean;
}
