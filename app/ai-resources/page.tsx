import ResourceListing from "@/src/presentation/components/ai-resources/ResourceListing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Resources for Developers — PromptReady",
  description:
    "Curated collection of skills, prompts, and tools to supercharge your AI coding workflow. Discover the best resources for AI-powered development.",
};

export default function AIResourcesPage() {
  return (
    <main className="pt-20">
      <ResourceListing />
    </main>
  );
}
