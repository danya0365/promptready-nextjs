"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import SectionHeading from "../atoms/SectionHeading";

const FAQS = [
  {
    question: "Is PromptReady really free?",
    answer:
      "Yes, 100% free and open source. All guides, templates, and configurations are available to everyone. No signup, no paywall, no hidden costs.",
  },
  {
    question: "What AI coding tools does this work with?",
    answer:
      "The guides work with all major AI-powered IDEs and assistants: Cursor, Windsurf, Claude Code, GitHub Copilot, Cody, and more. The prompt templates are universal.",
  },
  {
    question: "What frameworks are supported?",
    answer:
      "Currently we have a complete Next.js setup guide. Laravel, NestJS, and React Native guides are coming soon. Want to contribute a guide for your favorite framework? Open a PR!",
  },
  {
    question: "What are Agent Skills?",
    answer:
      "Agent Skills are structured instruction files (.md) that you place in your project to guide AI agents. They define coding patterns, architecture rules, and conventions that the AI follows consistently across sessions.",
  },
  {
    question: "How can I contribute?",
    answer:
      "Fork the repository on GitHub, create a new guide following our template, and submit a Pull Request. You can also report issues, suggest improvements, or share prompt patterns you&apos;ve discovered.",
  },
  {
    question: "Why should I set up my project before prompting AI?",
    answer:
      "AI has no memory between sessions. Without proper context files (AGENTS.md, design system, API spec), the AI guesses everything — libraries, patterns, naming conventions. The result is inconsistent code every time. Our guides fix this.",
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
