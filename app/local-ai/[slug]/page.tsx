import LocalAIDetail from "@/src/presentation/components/local-ai/LocalAIDetail";
import { getLocalAIToolBySlug, LOCAL_AI_TOOLS } from "@/src/domin/data/local-ai";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return LOCAL_AI_TOOLS.map((tool) => ({
    slug: tool.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getLocalAIToolBySlug(slug);
  
  if (!tool) return { title: "Tool Not Found | PromptReady" };
  
  return {
    title: `${tool.name} Setup Guide | PromptReady`,
    description: tool.tagline,
  };
}

export default async function ToolPage({ params }: PageProps) {
  const { slug } = await params;
  const tool = getLocalAIToolBySlug(slug);

  if (!tool) {
    notFound();
  }

  return <LocalAIDetail tool={tool} />;
}
