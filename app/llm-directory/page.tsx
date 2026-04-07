import LLMDirectory from "@/src/presentation/components/llm-directory/LLMDirectory";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free LLM APIs Directory — PromptRead",
  description:
    "รวม LLM API ที่มี free tier ถาวร — ไม่หมดอายุ ไม่ต้องใส่บัตรเครดิต พร้อม rate limits และ links",
  openGraph: {
    title: "Free LLM APIs Directory",
    description: "รวม 15+ LLM API ฟรี พร้อม rate limits ครบ",
  },
};

export default function FreeLLMPage() {
  return <LLMDirectory />;
}
