import SupportSection from "@/src/presentation/components/landing/organisms/PricingSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support Us — PromptReady",
  description:
    "PromptReady is 100% free. If it helped you, consider supporting the project via Buy Me a Coffee or PromptPay.",
};

export default function SupportPage() {
  return (
    <main className="pt-20">
      <SupportSection />
    </main>
  );
}
