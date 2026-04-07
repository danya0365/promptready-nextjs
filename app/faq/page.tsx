import FAQSection from "@/src/presentation/components/landing/organisms/FAQSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — PromptReady",
  description:
    "Frequently asked questions about PromptReady — free AI development guides, supported frameworks, agent skills, and how to contribute.",
};

export default function FAQPage() {
  return (
    <main className="pt-20">
      <FAQSection />
    </main>
  );
}
