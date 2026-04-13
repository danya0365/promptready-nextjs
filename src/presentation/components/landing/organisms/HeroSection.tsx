import { ArrowRight, BookOpen, ExternalLink, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float pointer-events-none" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/15 rounded-full blur-3xl animate-float pointer-events-none"
        style={{ animationDelay: "1.5s" }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold text-primary bg-primary/10 border border-primary/20 mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            Open Source &middot; Free Forever
          </span>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-text-primary animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            The Developer&apos;s Guide to{" "}
            <span className="gradient-text">AI-Powered Development</span>
          </h1>

          <p
            className="mt-6 text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            A curated collection of AI workflows, prompt templates, and workflow
            patterns — open source and free for every developer. Read, learn,
            and ship better code with AI.
          </p>

          <div
            className="mt-8 flex flex-wrap justify-center gap-4 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href="/ai-workflows"
              className="btn-game inline-flex items-center gap-2 text-base px-7 py-3.5"
            >
              <BookOpen className="w-5 h-5" />
              Browse Workflows
            </a>
            <a
              href="https://github.com/danya0365/promptready-nextjs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-text-primary bg-surface-elevated border border-border hover:border-primary/40 transition-all duration-200 cursor-pointer"
            >
              <ExternalLink className="w-5 h-5" />
              View on GitHub
            </a>
          </div>

          {/* Stats */}
          <div
            className="mt-14 grid grid-cols-3 gap-6 max-w-lg mx-auto animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            {[
              { value: "7", label: "Workflow Phases" },
              { value: "Free", label: "Always" },
              { value: "OSS", label: "Open Source" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-extrabold gradient-text">
                  {stat.value}
                </p>
                <p className="text-xs text-text-muted mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Guide Preview Card */}
        <div
          className="mt-16 max-w-2xl mx-auto animate-fade-in"
          style={{ animationDelay: "0.5s" }}
        >
          <a
            href="/ai-workflows/nextjs"
            className="block glass rounded-3xl p-6 card-hover group"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                <BookOpen className="w-7 h-7 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-success bg-success/10 border border-success/20 px-2 py-0.5 rounded-full">
                    Available
                  </span>
                  <span className="text-xs text-text-muted">
                    Next.js &middot; 7 Phases
                  </span>
                </div>
                <h3 className="text-base font-bold text-text-primary">
                  Next.js AI Workflow
                </h3>
                <p className="text-sm text-text-secondary mt-1">
                  Complete workflow to prepare your Next.js project before
                  prompting AI
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-text-muted group-hover:text-primary group-hover:translate-x-1 transition-all duration-200 shrink-0" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
