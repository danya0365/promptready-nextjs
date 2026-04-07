"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionHeading from "../atoms/SectionHeading";

const FAQS = [
  {
    question: "What AI coding tools does this work with?",
    answer:
      "PromptReady works with all major AI-powered IDEs and assistants: Cursor, Windsurf, Claude Code, GitHub Copilot, Cody, and more. The prompt templates are universal, while agent skills have IDE-specific formats included.",
  },
  {
    question: "Is this a subscription or one-time purchase?",
    answer:
      "One-time purchase. Pay once and get lifetime access to all current content plus future updates. No recurring fees, no hidden costs.",
  },
  {
    question: "How are the prompts different from what I can find online?",
    answer:
      "Our prompts are battle-tested across hundreds of real projects. They include context-setting, constraint specification, and output formatting that generic prompts miss. Each prompt is optimized for consistency and quality.",
  },
  {
    question: "What are Agent Skills exactly?",
    answer:
      "Agent Skills are structured instruction files (.md) that you place in your project to guide AI agents. They define coding patterns, architecture rules, and conventions that the AI follows consistently across sessions.",
  },
  {
    question: "Can I use this for my team?",
    answer:
      "Yes! The Team plan supports up to 10 members with shared prompt libraries and synchronized configurations. This ensures everyone on your team gets consistent AI output.",
  },
  {
    question: "Do I get updates when new content is added?",
    answer:
      "Absolutely. All plans include lifetime updates. As new AI tools emerge and best practices evolve, we continuously add new skills, prompts, and configurations.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          badge="FAQ"
          title="Frequently Asked"
          highlight="Questions"
        />

        <div className="space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="glass rounded-2xl overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-semibold text-text-primary pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-text-muted shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 animate-fade-in">
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
