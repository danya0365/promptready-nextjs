import { SetupGuide } from "@/src/presentation/components/setup-guide";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Setup Guide — PromptReady",
  description:
    "Complete AI-consistent project setup guide. 7 phases to prepare your project before prompting AI.",
};

export default function SetupGuidePage() {
  return <SetupGuide />;
}
