"use client";

import { useState } from "react";
import {
  AI_RESOURCES,
  AI_RESOURCE_CATEGORIES,
} from "@/src/domin/data/ai-resources";
import { AIResourceCategory } from "@/src/domin/types/ai-resources";
import ResourceCard from "./ResourceCard";
import SectionHeading from "../landing/atoms/SectionHeading";

export default function ResourceListing() {
  const [activeCategory, setActiveCategory] = useState<
    AIResourceCategory | "All" | null
  >(null);

  const filteredResources =
    activeCategory && activeCategory !== "All"
      ? AI_RESOURCES.filter((r) => r.category === activeCategory)
      : AI_RESOURCES;

  return (
    <div className="py-24 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <SectionHeading
          badge="AI Resources"
          title="Curated Tools for AI-Powered Developers"
          description="A growing collection of skills, prompts, and tools to supercharge your AI coding workflow."
        />
        <p className="text-sm text-text-muted mt-4">
          {AI_RESOURCES.length} resources curated
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        <button
          onClick={() => setActiveCategory(null)}
          className={`px-5 py-2 rounded-full text-sm font-semibold transition-all border ${
            activeCategory === null
              ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
              : "bg-surface/50 border-border text-text-muted hover:border-primary/50"
          }`}
        >
          All Resources
        </button>
        {AI_RESOURCE_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all border ${
              activeCategory === cat
                ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
                : "bg-surface/50 border-border text-text-muted hover:border-primary/50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Resource Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredResources.map((resource) => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
      </div>

      {/* Empty State */}
      {filteredResources.length === 0 && (
        <div className="text-center py-16">
          <p className="text-text-muted">
            No resources found in this category yet.
          </p>
        </div>
      )}
    </div>
  );
}
