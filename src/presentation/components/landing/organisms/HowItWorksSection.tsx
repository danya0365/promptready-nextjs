import { Download, Puzzle, Rocket, Settings } from "lucide-react";
import SectionHeading from "../atoms/SectionHeading";

const STEPS = [
  {
    icon: Download,
    step: "01",
    title: "Get the Toolkit",
    description: "Choose your plan and instantly access the full library of skills, prompts, and configurations.",
  },
  {
    icon: Settings,
    step: "02",
    title: "Configure Your IDE",
    description: "Drop the agent skills and rules into your project. Works with Cursor, Windsurf, Claude Code, and others.",
  },
  {
    icon: Puzzle,
    step: "03",
    title: "Use the Prompts",
    description: "Pick from 200+ prompt templates organized by task type. Copy, customize, and execute.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Ship 10x Faster",
    description: "Watch your AI agent produce consistent, high-quality code that follows your architecture.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="How It Works"
          title="From Zero to"
          highlight="AI-Powered"
          description="Get up and running in under 5 minutes. No complex setup required."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.step} className="relative group">
                {/* Connector line */}
                {i < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-border" />
                )}

                <div className="glass rounded-2xl p-6 text-center card-hover cursor-pointer relative">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  <span className="text-xs font-bold text-primary/60 tracking-widest uppercase">
                    Step {step.step}
                  </span>

                  <h3 className="text-lg font-bold text-text-primary mt-2 mb-2">
                    {step.title}
                  </h3>

                  <p className="text-sm text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
