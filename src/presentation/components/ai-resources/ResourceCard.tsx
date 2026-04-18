"use client";

import { AIResource } from "@/src/domin/types/ai-resources";
import { ArrowUpRight, ExternalLink, Tag } from "lucide-react";

interface ResourceCardProps {
  resource: AIResource;
}

const categoryColors: Record<string, string> = {
  Skills: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  Prompts: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Tools: "bg-green-500/10 text-green-400 border-green-500/20",
  Models: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  Communities: "bg-pink-500/10 text-pink-400 border-pink-500/20",
};

export default function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col bg-surface/30 backdrop-blur-xl border border-white/5 rounded-3xl overflow-hidden hover:border-primary/30 transition-all duration-500 min-h-[240px]"
    >
      <div className="p-8 flex flex-col h-full">
        {/* Category Badge */}
        <div className="flex items-center justify-between mb-4">
          <span
            className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-lg border ${
              categoryColors[resource.category] ||
              "bg-primary/10 text-primary border-primary/20"
            }`}
          >
            {resource.category}
          </span>
          {resource.featured && (
            <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-lg bg-accent/10 text-accent border border-accent/20">
              Featured
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-primary transition-colors leading-tight flex items-center gap-2">
          {resource.title}
          <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
        </h3>

        {/* Description */}
        <p className="text-sm text-text-secondary line-clamp-3 mb-6 grow">
          {resource.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {resource.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-1 text-[10px] text-text-muted bg-white/5 px-2 py-1 rounded-md"
            >
              <Tag className="w-3 h-3" />
              {tag}
            </span>
          ))}
          {resource.tags.length > 3 && (
            <span className="text-[10px] text-text-muted bg-white/5 px-2 py-1 rounded-md">
              +{resource.tags.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Arrow on hover */}
      <div className="absolute bottom-6 right-8 text-primary opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
        <ArrowUpRight className="w-5 h-5" />
      </div>
    </a>
  );
}
