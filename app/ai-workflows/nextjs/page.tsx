import { AIWorkflow } from "@/src/presentation/components/ai-workflows";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js AI Workflow &mdash; PromptReady",
  description:
    "Complete AI-consistent Next.js project workflow. 7 phases to prepare your project before prompting AI.",
};

export default function NextjsAIWorkflowPage() {
  return <AIWorkflow />;
}
