import { BookOpen, ExternalLink, Sparkles } from "lucide-react";

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
              100% Free &middot; Open Source
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary mb-4">
              Start Building with{" "}
              <span className="gradient-text">AI Confidence</span>
            </h2>

            <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
              Stop guessing and start shipping consistent code. Pick a setup
              guide, follow the steps, and let AI work the way you want.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/setup-guide"
                className="btn-game inline-flex items-center gap-2 text-base px-8 py-4"
              >
                <BookOpen className="w-5 h-5" />
                Read the Guide
              </a>
              <a
                href="https://github.com/danya0365/promptready-nextjs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-text-primary bg-surface-elevated border border-border hover:border-primary/40 transition-all duration-200 cursor-pointer"
              >
                <ExternalLink className="w-5 h-5" />
                Star on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
