import {
  getProviderById,
  PROVIDERS,
} from "@/src/domin/data/llm-providers";
import ProviderDetail from "@/src/presentation/components/llm-directory/ProviderDetail";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return PROVIDERS.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const provider = getProviderById(id);
  if (!provider) return { title: "Provider Not Found" };

  return {
    title: `${provider.name} — Free LLM API Setup | PromptReady`,
    description: `วิธีรับ API Key และใช้งาน ${provider.name} ฟรี — ${provider.highlight ?? ""}. รองรับ ${provider.models.length} โมเดล`,
    openGraph: {
      title: `${provider.name} — Free LLM API`,
      description: `${provider.highlight ?? provider.name} | ${provider.limits.join(", ")}`,
    },
  };
}

export default async function ProviderPage({ params }: PageProps) {
  const { id } = await params;
  const provider = getProviderById(id);
  if (!provider) notFound();

  return <ProviderDetail provider={provider} />;
}
