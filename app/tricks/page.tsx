import TrickListing from "@/src/presentation/components/tricks/TrickListing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Tricks & Setup Secrets — PromptReady",
  description:
    "Discover the best AI tricks, local setup secrets, and productivity boosts. Run premium AI models for free locally.",
};

export default function TricksPage() {
  return (
    <main className="pt-20">
      <TrickListing />
    </main>
  );
}
