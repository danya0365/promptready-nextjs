import { ArrowLeft, ExternalLink, Globe, Layout, Terminal, FileText, ShieldCheck, Cpu, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { LocalAITool } from "@/src/domin/types/local-ai";
import { CodeBlock } from "../setup-guide/CodeBlock";

const ICON_MAP: Record<string, LucideIcon> = {
  Terminal,
  Layout,
  FileText,
  ShieldCheck,
  Cpu,
};

interface LocalAIDetailProps {
  tool: LocalAITool;
}

export default function LocalAIDetail({ tool }: LocalAIDetailProps) {
  const Icon = ICON_MAP[tool.iconName] || Terminal;

  return (
    <div className="py-24 px-6 max-w-5xl mx-auto">
      <Link
        href="/local-ai"
        className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-primary mb-8 group"
      >
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
        Back to Directory
      </Link>

      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12">
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
            <Icon className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-1">
              {tool.name}
            </h1>
            <p className="text-lg text-text-secondary">{tool.tagline}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={tool.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glass px-4 py-2 rounded-xl text-sm font-medium flex items-center gap-2 hover:bg-surface-elevated transition-colors"
          >
            <Globe className="w-4 h-4" />
            Website
          </a>
          <a
            href={tool.downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-game px-6 py-2 rounded-xl text-sm font-bold flex items-center gap-2"
          >
            <ExternalLink className="w-4 h-4" />
            Install
          </a>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          <section>
            <h2 className="text-xl font-bold text-text-primary mb-4">Overview</h2>
            <p className="text-text-secondary leading-relaxed">
              {tool.description}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text-primary mb-6">Installation Guide</h2>
            <div className="space-y-8">
              {tool.setupGuide.steps.map((step, index) => (
                <div key={index} className="relative pl-12">
                  <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-xs font-bold text-primary">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-text-primary mb-2">
                    {step.title}
                  </h3>
                  {step.description && (
                    <p className="text-sm text-text-secondary leading-relaxed mb-4">
                      {step.description}
                    </p>
                  )}
                  {step.code && <CodeBlock code={step.code} />}
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-8">
          <div className="glass p-6 rounded-2xl border border-white/5">
            <h3 className="text-xs font-bold text-text-primary uppercase tracking-widest mb-4">
              Key Features
            </h3>
            <ul className="space-y-3">
              {tool.features.map((feature, i) => (
                <li key={i} className="text-sm text-text-secondary flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass p-6 rounded-2xl border border-white/5">
            <h3 className="text-xs font-bold text-text-primary uppercase tracking-widest mb-4">
              Usage Examples
            </h3>
            <div className="space-y-6">
              {tool.usageGuide.examples.map((example, i) => (
                <div key={i}>
                  <p className="text-xs font-medium text-text-muted mb-3">
                    {example.label}
                  </p>
                  <CodeBlock code={example.code} />
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
