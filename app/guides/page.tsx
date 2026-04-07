import GuidesSection from "@/src/presentation/components/landing/organisms/FeaturesSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Framework Setup Guides — PromptReady",
  description:
    "Step-by-step setup guides to prepare your project before prompting AI. Next.js, Laravel, NestJS, React Native and more.",
};

export default function GuidesPage() {
  return (
    <main className="pt-20">
      <GuidesSection />
    </main>
  );
}
