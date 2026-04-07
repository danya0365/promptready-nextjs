import { BookPlus, Bug, GitFork, Lightbulb } from "lucide-react";
import SectionHeading from "../atoms/SectionHeading";

const CONTRIBUTIONS = [
  {
    icon: BookPlus,
    title: "Add a New Guide",
    description:
      "Write a setup guide for your favorite framework. Follow our template and submit a PR.",
    color: "primary",
  },
  {
    icon: Lightbulb,
    title: "Share Tips & Tricks",
    description:
      "Discovered a better prompt pattern or workflow? Share it with the community.",
    color: "secondary",
  },
  {
    icon: Bug,
    title: "Report Issues",
    description:
      "Found outdated info or a mistake? Open an issue and help us keep guides accurate.",
    color: "accent",
  },
  {
    icon: GitFork,
    title: "Fork & Customize",
    description:
      "Fork the repo and adapt guides for your team. MIT licensed — use however you want.",
    color: "primary",
  },
];

const COLOR_MAP: Record<string, { bg: string; border: string; text: string }> =
  {
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

export default function TestimonialsSection() {
  return (
    <section id="contribute" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Open Source"
          title="Built by the"
          highlight="Community"
          description="PromptReady is open source. Everyone can read, use, and contribute."
        />

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {CONTRIBUTIONS.map((item) => {
            const Icon = item.icon;
            const colors = COLOR_MAP[item.color];
            return (
              <div
                key={item.title}
                className="glass rounded-2xl p-6 card-hover"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center mb-4`}
                >
                  <Icon className={`w-6 h-6 ${colors.text}`} />
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
