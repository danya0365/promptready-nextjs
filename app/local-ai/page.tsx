import LocalAIListing from "@/src/presentation/components/local-ai/LocalAIListing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Local AI Tools Directory | PromptReady",
  description: "Browse the best local AI tools and LLM frameworks. Learn how to install and run models locally for privacy and speed.",
};

export default function LocalAIPage() {
  return <LocalAIListing />;
}
