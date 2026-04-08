import { ArrowRight, Terminal, Layout, FileText, ShieldCheck, Cpu, type LucideIcon } from "lucide-react";
import SectionHeading from "../landing/atoms/SectionHeading";
import { LOCAL_AI_TOOLS } from "@/src/domin/data/local-ai";
import Link from "next/link";

const ICON_MAP: Record<string, LucideIcon> = {
  Terminal,
  Layout,
  FileText,
  ShieldCheck,
  Cpu,
};

export default function LocalAIListing() {
  return (
    <section className="py-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Local LLMs"
          title="Install & Setup"
          highlight="Local AI Tools"
          description="Take full control of your AI workflow. Run powerful models locally on your hardware for privacy, speed, and cost-efficiency."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {LOCAL_AI_TOOLS.map((tool) => {
            const Icon = ICON_MAP[tool.iconName] || Terminal;
            return (
              <Link
                key={tool.id}
                href={`/local-ai/${tool.slug}`}
                className="glass rounded-2xl p-6 group transition-all duration-200 card-hover block h-full flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-[10px] font-bold text-text-muted bg-surface/50 border border-border px-2 py-1 rounded-full uppercase tracking-wider">
                    Local Only
                  </span>
                </div>

                <h3 className="text-xl font-bold text-text-primary mb-2">
                  {tool.name}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-6 line-clamp-2">
                  {tool.tagline}
                </p>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
                  <div className="flex gap-1.5 flex-wrap">
                    {tool.platforms.map((platform) => (
                      <span
                        key={platform}
                        className="text-[10px] font-medium text-text-muted bg-surface border border-border-muted px-2 py-0.5 rounded-md"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                  <ArrowRight className="w-4 h-4 text-text-muted group-hover:text-primary group-hover:translate-x-1 transition-all duration-200" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
