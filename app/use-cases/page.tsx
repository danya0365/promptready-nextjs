import UseCaseListing from "@/src/presentation/components/use-cases/UseCaseListing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Use Cases — OpenClaw ทำอะไรได้บ้าง — PromptReady",
  description:
    "ตัวอย่างงานจริงที่ OpenClaw ช่วยคุณได้ ตั้งแต่งานอัตโนมัติ การเขียนโค้ด การค้นคว้า ไปจนถึงการผลิตคอนเทนต์",
};

export default function UseCasesPage() {
  return (
    <main className="pt-20">
      <UseCaseListing />
    </main>
  );
}
