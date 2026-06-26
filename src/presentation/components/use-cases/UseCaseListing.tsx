"use client";

import { useState } from "react";
import {
  USE_CASES,
  USE_CASE_CATEGORIES,
} from "@/src/domin/data/use-cases";
import { UseCaseCategory } from "@/src/domin/types/use-cases";
import UseCaseCard from "./UseCaseCard";
import SectionHeading from "../landing/atoms/SectionHeading";

export default function UseCaseListing() {
  const [activeCategory, setActiveCategory] = useState<
    UseCaseCategory | null
  >(null);

  const filteredUseCases = activeCategory
    ? USE_CASES.filter((u) => u.category === activeCategory)
    : USE_CASES;

  return (
    <div className="py-24 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <SectionHeading
          badge="Use Cases"
          title="OpenClaw ทำอะไรได้บ้าง"
          description="ตัวอย่างงานจริงที่ OpenClaw ช่วยคุณได้ ตั้งแต่งานอัตโนมัติ การเขียนโค้ด ไปจนถึงการค้นคว้าและผลิตคอนเทนต์"
        />
        <p className="text-sm text-text-muted mt-4">
          {USE_CASES.length} use cases
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
          All Use Cases
        </button>
        {USE_CASE_CATEGORIES.map((cat) => (
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

      {/* Use Case Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredUseCases.map((useCase) => (
          <UseCaseCard key={useCase.id} useCase={useCase} />
        ))}
      </div>

      {/* Empty State */}
      {filteredUseCases.length === 0 && (
        <div className="text-center py-16">
          <p className="text-text-muted">
            No use cases found in this category yet.
          </p>
        </div>
      )}
    </div>
  );
}
