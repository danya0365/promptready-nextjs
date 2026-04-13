import {
  ArrowRight,
  Clock,
  Code2,
  type LucideIcon,
  Server,
  Smartphone,
  SquareTerminal,
} from "lucide-react";
import SectionHeading from "../atoms/SectionHeading";

interface Guide {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  status: "available" | "coming-soon";
  tags: string[];
}

const GUIDES: Guide[] = [
  {
    icon: Code2,
    title: "Next.js AI Workflow",
    description:
      "7-phase AI workflow to prepare your Next.js project for AI-consistent development. TypeScript, Tailwind, Supabase.",
    href: "/ai-workflows/nextjs",
    status: "available",
    tags: ["Next.js", "React", "TypeScript"],
  },
  {
    icon: Server,
    title: "Laravel AI Workflow",
    description:
      "Complete AI workflow for Laravel projects — Eloquent conventions, API contracts, and AI-friendly structure.",
    href: "/ai-workflows/laravel",
    status: "coming-soon",
    tags: ["Laravel", "PHP", "API"],
  },
  {
    icon: SquareTerminal,
    title: "NestJS AI Workflow",
    description:
      "Prepare your NestJS backend for AI agents — modules, DTOs, validation pipes, and testing patterns.",
    href: "/ai-workflows/nestjs",
    status: "coming-soon",
    tags: ["NestJS", "Node.js", "TypeScript"],
  },
  {
    icon: Smartphone,
    title: "React Native AI Workflow",
    description:
      "AI-ready mobile development — navigation, state management, and native module patterns.",
    href: "/ai-workflows/react-native",
    status: "coming-soon",
    tags: ["React Native", "Mobile", "Expo"],
  },
];

export default function FeaturesSection() {
  return (
    <section id="guides" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Guides"
          title="Framework"
          highlight="Setup Guides"
          description="Step-by-step guides to prepare your project before prompting AI. Pick your framework and follow along."
        />

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {GUIDES.map((guide) => {
            const Icon = guide.icon;
            const isAvailable = guide.status === "available";
            return (
              <a
                key={guide.title}
                href={isAvailable ? guide.href : undefined}
                className={`glass rounded-2xl p-6 group transition-all duration-200 block ${
                  isAvailable
                    ? "card-hover cursor-pointer"
                    : "opacity-60 cursor-default"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  {isAvailable ? (
                    <span className="text-xs font-bold text-success bg-success/10 border border-success/20 px-2.5 py-1 rounded-full">
                      Available
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-text-muted bg-surface-elevated border border-border px-2.5 py-1 rounded-full">
                      <Clock className="w-3 h-3" />
                      Coming Soon
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-text-primary mb-2">
                  {guide.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  {guide.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {guide.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium text-text-muted bg-surface border border-border-muted px-2 py-0.5 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {isAvailable && (
                    <ArrowRight className="w-4 h-4 text-text-muted group-hover:text-primary group-hover:translate-x-1 transition-all duration-200" />
                  )}
                </div>
              </a>
            );
          })}
        </div>

        <p className="text-center text-sm text-text-muted mt-8">
          More frameworks coming soon. Want to contribute?{" "}
          <a
            href="/contribute"
            className="text-primary hover:underline font-medium"
          >
            Join us on GitHub
          </a>
        </p>
      </div>
    </section>
  );
}
