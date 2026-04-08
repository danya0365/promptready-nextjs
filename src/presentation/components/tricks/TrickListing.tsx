"use client";

import { useState } from "react";
import { TRICKS, TRICK_CATEGORIES } from "@/src/domin/data/tricks";
import Link from "next/link";
import { Calendar, Tag, ArrowRight } from "lucide-react";
import SectionHeading from "../landing/atoms/SectionHeading";

export default function TrickListing() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredTricks = activeCategory
    ? TRICKS.filter((t) => t.category === activeCategory)
    : TRICKS;

  return (
    <div className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <SectionHeading
          badge="AI Tricks & Tips"
          title="Unlock the Full Potential of AI"
          description="A collection of the best tricks, local setup secrets, and productivity boosts for AI power users."
        />
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
          All Tricks
        </button>
        {TRICK_CATEGORIES.map((cat) => (
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

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTricks.map((trick) => (
          <Link
            key={trick.id}
            href={`/tricks/${trick.slug}`}
            className="group relative flex flex-col bg-surface/30 backdrop-blur-xl border border-white/5 rounded-3xl overflow-hidden hover:border-primary/30 transition-all duration-500 min-h-[250px]"
          >
            <div className="p-8 flex flex-col h-full">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-lg bg-primary/10 text-primary border border-primary/20">
                  {trick.category}
                </span>
                <div className="flex items-center gap-1.5 text-text-muted text-xs">
                  <Calendar className="w-3.5 h-3.5" />
                  {trick.createdAt}
                </div>
              </div>

              <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-primary transition-colors leading-tight">
                {trick.title}
              </h3>
              <p className="text-sm text-text-secondary line-clamp-2 mb-6">
                {trick.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto pr-8">
                {trick.tags.map((tag) => (
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

            <div className="absolute bottom-6 right-8 text-primary opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
              <ArrowRight className="w-5 h-5" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
