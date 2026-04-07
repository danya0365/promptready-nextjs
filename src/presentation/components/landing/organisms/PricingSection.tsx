import { Check, Sparkles } from "lucide-react";
import SectionHeading from "../atoms/SectionHeading";

const PLANS = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    description: "Get a taste of AI-optimized prompting.",
    features: [
      "10 Prompt Templates",
      "3 Agent Skills",
      "Basic IDE Config",
      "Community Access",
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/one-time",
    description: "The complete toolkit for serious developers.",
    features: [
      "200+ Prompt Templates",
      "50+ Agent Skills",
      "All IDE Configurations",
      "Project Blueprints",
      "Workflow Patterns",
      "Architecture Guides",
      "Lifetime Updates",
      "Priority Support",
    ],
    cta: "Get Pro Access",
    featured: true,
  },
  {
    name: "Team",
    price: "$79",
    period: "/one-time",
    description: "For teams that want consistent AI output.",
    features: [
      "Everything in Pro",
      "Up to 10 Team Members",
      "Shared Prompt Library",
      "Team Config Sync",
      "Custom Skill Builder",
      "Onboarding Call",
    ],
    cta: "Get Team Access",
    featured: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Pricing"
          title="Simple, One-Time"
          highlight="Pricing"
          description="No subscriptions. Pay once, get lifetime access and updates."
        />

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-6 relative transition-all duration-300 ${
                plan.featured
                  ? "glass animate-pulse-glow border-2 border-primary/30 scale-[1.02]"
                  : "glass"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full text-xs font-bold text-white bg-linear-to-r from-primary to-secondary">
                    <Sparkles className="w-3 h-3" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-lg font-bold text-text-primary mb-1">
                  {plan.name}
                </h3>
                <p className="text-sm text-text-muted mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-extrabold text-text-primary">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-sm text-text-muted">{plan.period}</span>
                  )}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-success shrink-0" />
                    <span className="text-text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-full font-semibold text-sm transition-all duration-200 cursor-pointer ${
                  plan.featured
                    ? "btn-game"
                    : "bg-surface-elevated text-text-primary border border-border hover:border-primary/40"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
