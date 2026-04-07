import { ArrowRight, Sparkles } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="glass rounded-3xl p-12 text-center relative overflow-hidden">
          {/* Decorative gradient orb */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold text-primary bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="w-4 h-4" />
              Limited Time Offer
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary mb-4">
              Ready to <span className="gradient-text">10x Your AI Workflow</span>?
            </h2>

            <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
              Join 2,400+ developers who are shipping better code, faster, with AI agents that actually follow their rules.
            </p>

            <a
              href="#pricing"
              className="btn-game inline-flex items-center gap-2 text-base px-8 py-4"
            >
              Get Started Now
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
