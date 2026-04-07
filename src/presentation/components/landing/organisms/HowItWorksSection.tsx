import { BookOpen, Copy, GitFork, Rocket } from "lucide-react";
import SectionHeading from "../atoms/SectionHeading";

const STEPS = [
  {
    icon: BookOpen,
    step: "01",
    title: "Pick a Guide",
    description:
      "Choose the framework setup guide that matches your project — Next.js, Laravel, NestJS, and more.",
  },
  {
    icon: Copy,
    step: "02",
    title: "Read & Copy",
    description:
      "Follow the step-by-step phases. Copy code snippets, config files, and prompt templates directly.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Apply to Your Project",
    description:
      "Paste into your project and start prompting AI. Your output will be consistent from the first session.",
  },
  {
    icon: GitFork,
    step: "04",
    title: "Contribute Back",
    description:
      "Found a better pattern? Open a PR. This is open source — every developer can help improve the guides.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="How It Works"
          title="Learn, Apply,"
          highlight="Contribute"
          description="No signup, no paywall. Just pick a guide and start building."
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
