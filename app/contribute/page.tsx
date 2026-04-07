import ContributeSection from "@/src/presentation/components/landing/organisms/TestimonialsSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contribute — PromptReady",
  description:
    "PromptReady is open source. Learn how to add guides, share tips, report issues, and help the community.",
};

export default function ContributePage() {
  return (
    <main className="pt-20">
      <ContributeSection />
    </main>
  );
}
