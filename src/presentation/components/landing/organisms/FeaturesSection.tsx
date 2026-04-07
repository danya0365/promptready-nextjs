import {
  BrainCircuit,
  FileCode2,
  Layers,
  MessageSquareCode,
  Settings2,
  Workflow,
} from "lucide-react";
import SectionHeading from "../atoms/SectionHeading";

const FEATURES = [
  {
    icon: BrainCircuit,
    title: "Agent Skill Library",
    description:
      "50+ curated agent skills ready to drop into Cursor, Windsurf, Claude Code, and more.",
    color: "primary" as const,
    span: "md:col-span-2",
  },
  {
    icon: MessageSquareCode,
    title: "Prompt Templates",
    description:
      "200+ battle-tested prompts organized by use-case: debugging, refactoring, architecture, testing.",
    color: "secondary" as const,
    span: "md:col-span-1",
  },
  {
    icon: Workflow,
    title: "Workflow Patterns",
    description:
      "Step-by-step workflows for common tasks: API integration, auth setup, DB schema design.",
    color: "accent" as const,
    span: "md:col-span-1",
  },
  {
    icon: FileCode2,
    title: "Project Blueprints",
    description:
      "Pre-configured project setups with AGENTS.md, rules files, and memory configs.",
    color: "primary" as const,
    span: "md:col-span-1",
  },
  {
    icon: Settings2,
    title: "IDE Configurations",
    description:
      "Optimized settings for every major AI-powered IDE to get consistent, high-quality output.",
    color: "secondary" as const,
    span: "md:col-span-1",
  },
  {
    icon: Layers,
    title: "Architecture Guides",
    description:
      "Clean Architecture, SOLID, atomic design — templates that agents actually follow.",
    color: "accent" as const,
    span: "md:col-span-2",
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
};

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Features"
          title="Everything You Need to"
          highlight="Master AI Agents"
          description="A comprehensive toolkit designed to transform how you work with AI coding assistants."
        />

        <div className="grid md:grid-cols-4 gap-4">
          {FEATURES.map((feature) => {
            const colors = COLOR_MAP[feature.color];
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`glass rounded-2xl p-6 card-hover cursor-pointer ${feature.span}`}
              >
                <div
                  className={`w-12 h-12 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center mb-4`}
                >
                  <Icon className={`w-6 h-6 ${colors.text}`} />
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
