import {
  ArrowLeft,
  Calendar,
  Tag,
  Share2,
  Bookmark,
  User,
  ExternalLink,
  Sparkles,
  HardDrive,
  AlertCircle,
  HelpCircle,
  Info,
  CheckCircle2,
  Monitor,
} from "lucide-react";
import Link from "next/link";
import { Trick, TrickBlock, PlatformConfig } from "@/src/domin/types/tricks";
import { CodeBlock } from "../setup-guide/CodeBlock";

interface TrickDetailProps {
  trick: Trick;
}

export default function TrickDetail({ trick }: TrickDetailProps) {
  const renderBlock = (block: TrickBlock, index: number) => {
    switch (block.type) {
      case "text":
        return (
          <p
            key={index}
            className="text-text-secondary leading-relaxed mb-6 whitespace-pre-line"
          >
            {block.content as string}
          </p>
        );
      case "code":
        return (
          <div key={index} className="mb-6">
            <CodeBlock code={block.content as string} />
          </div>
        );
      case "note":
      case "warning":
      case "success": {
        const styleMap = {
          note: "bg-primary/5 border-primary/20 text-text-primary",
          warning: "bg-warning/5 border-warning/20 text-text-primary",
          success: "bg-success/5 border-success/20 text-text-primary",
        };
        const IconMap = {
          note: Info,
          warning: AlertCircle,
          success: CheckCircle2,
        };
        const Icon = IconMap[block.type];
        return (
          <div
            key={index}
            className={`p-5 rounded-2xl border mb-8 flex gap-4 ${styleMap[block.type]}`}
          >
            <Icon className="w-5 h-5 shrink-0 mt-0.5" />
            <span className="text-sm leading-relaxed whitespace-pre-line">
              {block.content as string}
            </span>
          </div>
        );
      }
      case "platforms": {
        const configs = block.content as PlatformConfig[];
        return (
          <div key={index} className="grid md:grid-cols-3 gap-4 mb-8">
            {configs.map((cfg, cIdx) => (
              <div
                key={cIdx}
                className="glass p-5 rounded-2xl border border-white/5 hover:border-primary/20 transition-colors"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Monitor className="w-4 h-4 text-primary" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-text-primary">
                    {cfg.os}
                  </span>
                </div>
                <p className="text-xs text-text-secondary leading-normal mb-4">
                  {cfg.description}
                </p>
                {cfg.command && <CodeBlock code={cfg.command} />}
              </div>
            ))}
          </div>
        );
      }
      default:
        return null;
    }
  };

  return (
    <div className="py-24 px-6 max-w-4xl mx-auto">
      <Link
        href="/tricks"
        className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-primary mb-8 group"
      >
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
        Back to AI Tricks
      </Link>

      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-lg bg-primary/10 text-primary border border-primary/20">
            {trick.category}
          </span>
          <div className="flex items-center gap-1.5 text-text-muted text-xs">
            <Calendar className="w-3.5 h-3.5" />
            {trick.createdAt}
          </div>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
          {trick.title}
        </h1>

        <p className="text-xl text-text-secondary leading-relaxed mb-8">
          {trick.description}
        </p>

        <div className="flex flex-wrap gap-3 mb-12">
          {trick.difficulty && (
            <span className="flex items-center gap-1.5 text-xs font-bold text-text-primary bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              {trick.difficulty}
            </span>
          )}
          {trick.minHardware && (
            <span className="flex items-center gap-1.5 text-xs font-bold text-text-secondary bg-surface/50 px-3 py-1.5 rounded-full border border-border">
              <HardDrive className="w-3.5 h-3.5" />
              {trick.minHardware}
            </span>
          )}
          {trick.tags.map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-1.5 text-xs text-text-muted bg-surface/50 border border-border px-3 py-1.5 rounded-full"
            >
              <Tag className="w-3.5 h-3.5" />
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-16">
        <section>
          <div className="space-y-16">
            {trick.steps.map((step, index) => (
              <div key={index} className="relative pl-14">
                <div className="absolute left-0 top-0 w-10 h-10 rounded-2xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center text-sm font-bold shadow-xs">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-8 tracking-tight">
                  {step.title}
                </h3>
                <div className="content">
                  {step.blocks.map((block, bIdx) => renderBlock(block, bIdx))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {trick.commonIssues && trick.commonIssues.length > 0 && (
          <section className="mt-16 p-8 rounded-[2rem] bg-error/5 border border-error/10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-error/10 flex items-center justify-center">
                <AlertCircle className="w-7 h-7 text-error" />
              </div>
              <h2 className="text-3xl font-bold text-text-primary tracking-tight">
                Troubleshooting & FAQs
              </h2>
            </div>

            <div className="space-y-6">
              {trick.commonIssues.map((issue, idx) => (
                <div
                  key={idx}
                  className="glass p-8 rounded-3xl border border-white/5 shadow-xs"
                >
                  <div className="flex items-start gap-4">
                    <HelpCircle className="w-6 h-6 text-error mt-0.5 shrink-0" />
                    <div>
                      <h4 className="text-lg font-bold text-text-primary mb-3">
                        {issue.issue}
                      </h4>
                      <p className="text-base text-text-secondary leading-relaxed">
                        {issue.solution}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {trick.author && (
          <div className="mt-12 pt-8 border-t border-border/50">
            <div className="flex items-center justify-between flex-wrap gap-6 p-8 rounded-[2rem] bg-surface/30 backdrop-blur-sm border border-white/5">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <User className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-1">
                    Original Author
                  </p>
                  <a
                    href={trick.author.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-bold text-text-primary hover:text-primary transition-colors"
                  >
                    {trick.author.name}
                  </a>
                </div>
              </div>
              {trick.sourceUrl && (
                <a
                  href={trick.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
                >
                  View Original Post
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        )}

        <div className="pt-12 border-t border-border">
          <div className="glass p-10 rounded-[2.5rem] border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h4 className="text-2xl font-bold text-text-primary mb-2 tracking-tight">
                Was this trick helpful?
              </h4>
              <p className="text-lg text-text-secondary">
                Share it with your fellow AI enthusiasts!
              </p>
            </div>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-surface/50 border border-border text-base font-semibold hover:border-primary/50 transition-colors cursor-pointer">
                <Share2 className="w-5 h-5" />
                Share
              </button>
              <button className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-primary text-white text-base font-bold shadow-lg shadow-primary/20 hover:brightness-110 transition-all cursor-pointer">
                <Bookmark className="w-5 h-5" />
                Save Trick
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
