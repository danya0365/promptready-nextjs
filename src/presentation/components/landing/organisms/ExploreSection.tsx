import {
  ArrowRight,
  BookOpen,
  GitFork,
  Heart,
  HelpCircle,
  Zap,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import SectionHeading from "../atoms/SectionHeading";

interface ExploreCard {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  color: "primary" | "secondary" | "accent";
}

const EXPLORE_CARDS: ExploreCard[] = [
  {
    icon: BookOpen,
    title: "AI Workflows",
    description:
      "Step-by-step AI workflows to prepare your project before prompting AI. Pick your framework and follow along.",
    href: "/ai-workflows",
    color: "primary",
  },
  {
    icon: Zap,
    title: "Free LLM APIs",
    description:
      "Thai language support for 15+ Free LLM API providers with setup guides and code examples.",
    href: "/llm-directory",
    color: "secondary",
  },
  {
    icon: Zap,
    title: "Local AI",
    description:
      "Run AI models locally on your machine. Setup guides for Ollama, LM Studio, and more.",
    href: "/local-ai",
    color: "accent",
  },
  {
    icon: GitFork,
    title: "Contribute",
    description:
      "PromptReady is open source. Add guides, share tips, report issues, or fork and customize.",
    href: "/contribute",
    color: "primary",
  },
  {
    icon: Heart,
    title: "Support Us",
    description:
      "Help keep PromptReady free and open. Buy us a coffee or donate via PromptPay.",
    href: "/support",
    color: "accent",
  },
  {
    icon: HelpCircle,
    title: "FAQ",
    description:
      "Frequently asked questions about PromptReady, supported frameworks, agent skills, and more.",
    href: "/faq",
    color: "secondary",
  },
];

const COLOR_MAP = {
  primary: {
    bg: "bg-primary/10",
    border: "border-primary/20",
    text: "text-primary",
  },
  secondary: {
    bg: "bg-secondary/10",
    border: "border-secondary/20",
    text: "text-secondary",
  },
  accent: {
    bg: "bg-accent/10",
    border: "border-accent/20",
    text: "text-accent",
  },
} as const;

export default function ExploreSection() {
  return (
    <section id="explore" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Explore"
          title="Everything You"
          highlight="Need"
          description="Guides, tools, and resources to build better with AI — all free and open source."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {EXPLORE_CARDS.map((card) => {
            const Icon = card.icon;
            const colors = COLOR_MAP[card.color];
            return (
              <Link
                key={card.title}
                href={card.href}
                className="glass rounded-2xl p-6 group card-hover block"
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center`}
                  >
                    <Icon className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <ArrowRight className="w-4 h-4 text-text-muted group-hover:text-primary group-hover:translate-x-1 transition-all duration-200" />
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {card.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
