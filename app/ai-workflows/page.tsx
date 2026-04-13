import AIWorkflowsSection from "@/src/presentation/components/landing/organisms/FeaturesSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Workflows &mdash; PromptReady",
  description:
    "Step-by-step AI workflow guides to prepare your project before prompting AI. Next.js, Laravel, NestJS, React Native and more.",
};

export default function AIWorkflowsPage() {
  return (
    <main className="pt-20">
      <AIWorkflowsSection />
    </main>
  );
}
