import { UseCase } from "@/src/domin/types/use-cases";
import { Tag } from "lucide-react";

interface UseCaseCardProps {
  useCase: UseCase;
}

const categoryColors: Record<string, string> = {
  "Developer Productivity": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "Content Creation": "bg-orange-500/10 text-orange-400 border-orange-500/20",
  "Business Automation": "bg-purple-500/10 text-purple-400 border-purple-500/20",
  "DevOps & CI/CD": "bg-green-500/10 text-green-400 border-green-500/20",
  "Marketing & SEO": "bg-pink-500/10 text-pink-400 border-pink-500/20",
  "Customer Support": "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
};

export default function UseCaseCard({ useCase }: UseCaseCardProps) {
  return (
    <div className="group relative flex flex-col bg-surface/30 backdrop-blur-xl border border-white/5 rounded-3xl overflow-hidden hover:border-primary/30 transition-all duration-500 min-h-[240px]">
      <div className="p-8 flex flex-col h-full">
        {/* Category Badge */}
        <div className="flex items-center justify-between mb-4">
          <span
            className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-lg border ${
              categoryColors[useCase.category] ||
              "bg-primary/10 text-primary border-primary/20"
            }`}
          >
            {useCase.category}
          </span>
          {useCase.featured && (
            <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-lg bg-accent/10 text-accent border border-accent/20">
              Featured
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-primary transition-colors leading-tight">
          {useCase.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-text-secondary line-clamp-3 mb-6 grow">
          {useCase.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {useCase.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-1 text-[10px] text-text-muted bg-white/5 px-2 py-1 rounded-md"
            >
              <Tag className="w-3 h-3" />
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
