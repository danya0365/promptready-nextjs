import StartHereGuide from "@/src/presentation/components/start-here/StartHereGuide";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start Here — เริ่มต้นใช้งาน OpenClaw — PromptReady",
  description:
    "คู่มือเริ่มต้นใช้งาน OpenClaw แบบทีละขั้น ตั้งแต่ติดตั้ง เชื่อม API key ไปจนถึงตั้งค่ากฎของโปรเจค",
};

export default function StartHerePage() {
  return (
    <main className="pt-20">
      <StartHereGuide />
    </main>
  );
}
