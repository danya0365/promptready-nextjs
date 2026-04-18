import { AIResource } from "../types/ai-resources";

export const AI_RESOURCES: AIResource[] = (
  [
    {
      id: "clawhub",
      slug: "clawhub",
      title: "ClawHub",
      url: "https://clawhub.ai/",
      description:
        "ClawHub, the skill dock for sharp agents. Centralized registry for Claude Code and AI agent skills.",
      category: "Skills",
      tags: ["Claude", "Skills", "Registry", "Agent"],
      featured: true,
      addedAt: "2026-04-18",
    },
    {
      id: "official-skills",
      slug: "official-skills",
      title: "Official Skills",
      url: "https://officialskills.sh/",
      description:
        "Official skills from the dev teams of software vendors, plus handpicked & community-adopted skills.",
      category: "Skills",
      tags: ["Official", "Skills", "Verified", "Community"],
      addedAt: "2026-04-18",
    },
    {
      id: "oh-my-prompt",
      slug: "oh-my-prompt",
      title: "Oh My Prompt",
      url: "https://www.ohmyprompt.net/",
      description:
        "The ultimate prompt collection. Copy and paste any prompt for free. Curated prompts for every use case.",
      category: "Prompts",
      tags: ["Prompts", "Free", "Collection", "Copy-Paste"],
      featured: true,
      addedAt: "2026-04-18",
    },
    {
      id: "ai-prompts-run",
      slug: "ai-prompts-run",
      title: "AI Prompts Run",
      url: "https://aiprompts.run/",
      description:
        "Every prompt is expertly engineered using global search trends & AI prompt engineering best practices. Instant search, copy-paste ready, one-click execution across ChatGPT, Claude, Gemini, Perplexity.",
      category: "Prompts",
      tags: ["Prompts", "Search", "Multi-Platform", "Engineered"],
      addedAt: "2026-04-18",
    },
    {
      id: "claude-code-skills-th",
      slug: "claude-code-skills-th",
      title: "Claude Code Skills ภาษาไทย",
      url: "https://claude-skill-unlock.vercel.app/",
      description:
        "150 Claude Code skills ภาษาไทย ที่จะเปลี่ยน Claude ให้กลายเป็นมืออาชีพในสายงานของคุณ เพียงพิมพ์ /youtuber-pro · /copywriter-pro · /teacher-pro ก็ได้ผลลัพธ์ระดับมืออาชีพภายในไม่กี่วินาที",
      category: "Skills",
      tags: ["Thai", "Claude", "Professional", "150+ Skills"],
      addedAt: "2026-04-18",
    },
  ] as AIResource[]
).sort((a, b) => new Date(b.addedAt).getTime() - new Date(a.addedAt).getTime());

export const AI_RESOURCE_CATEGORIES = Array.from(
  new Set(AI_RESOURCES.map((r) => r.category))
);

export function getResourceBySlug(slug: string): AIResource | undefined {
  return AI_RESOURCES.find((r) => r.slug === slug);
}
