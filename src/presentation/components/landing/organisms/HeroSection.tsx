import { ArrowRight, Bot, BrainCircuit, Terminal, Zap } from "lucide-react";

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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Copy */}
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold text-primary bg-primary/10 border border-primary/20 mb-6 animate-fade-in">
              <Zap className="w-4 h-4" />
              AI Agent Mastery
            </span>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-text-primary animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              Tips & Tricks for{" "}
              <span className="gradient-text">AI Agent Skills</span> & Prompts
            </h1>

            <p
              className="mt-6 text-lg text-text-secondary leading-relaxed animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Master the art of AI-assisted development. Learn battle-tested
              prompts, agent configurations, and workflow patterns that 10x your
              productivity.
            </p>

            <div
              className="mt-8 flex flex-wrap gap-4 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <a
                href="#pricing"
                className="btn-game inline-flex items-center gap-2 text-base px-7 py-3.5"
              >
                Start Learning
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-text-primary bg-surface-elevated border border-border hover:border-primary/40 transition-all duration-200 cursor-pointer"
              >
                See What&apos;s Inside
              </a>
            </div>

            {/* Social Proof */}
            <div
              className="mt-10 flex items-center gap-4 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-background bg-linear-to-br from-primary/60 to-secondary/60"
                  />
                ))}
              </div>
              <div className="text-sm text-text-secondary">
                <span className="font-bold text-text-primary">2,400+</span>{" "}
                developers already leveled up
              </div>
            </div>
          </div>

          {/* Right — Visual */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-md">
              {/* Main Card */}
              <div
                className="glass rounded-3xl p-8 animate-fade-in"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-error" />
                  <div className="w-3 h-3 rounded-full bg-warning" />
                  <div className="w-3 h-3 rounded-full bg-success" />
                  <span className="ml-2 text-xs text-text-muted font-mono">
                    prompt-ready.config
                  </span>
                </div>

                <div className="space-y-4 font-mono text-sm">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-primary/10 border border-primary/20">
                    <Terminal className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-text-primary">
                      <span className="text-primary font-semibold">agent</span>
                      .configure(skills)
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/10 border border-secondary/20">
                    <BrainCircuit className="w-5 h-5 text-secondary shrink-0" />
                    <span className="text-text-primary">
                      <span className="text-secondary font-semibold">
                        prompt
                      </span>
                      .optimize(context)
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-accent/10 border border-accent/20">
                    <Bot className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-text-primary">
                      <span className="text-accent font-semibold">output</span>
                      .quality === &quot;10x&quot;
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating badge top-right */}
              <div className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-3 animate-bounce-soft">
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-warning" />
                  <span className="text-sm font-bold text-text-primary">
                    50+ Skills
                  </span>
                </div>
              </div>

              {/* Floating badge bottom-left */}
              <div
                className="absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-3 animate-bounce-soft"
                style={{ animationDelay: "1s" }}
              >
                <div className="flex items-center gap-2">
                  <Bot className="w-5 h-5 text-primary" />
                  <span className="text-sm font-bold text-text-primary">
                    200+ Prompts
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
