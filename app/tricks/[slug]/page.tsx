import { getTrickBySlug, TRICKS } from "@/src/domin/data/tricks";
import TrickDetail from "@/src/presentation/components/tricks/TrickDetail";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return TRICKS.map((trick) => ({
    slug: trick.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const trick = getTrickBySlug(slug);

  if (!trick) {
    return {
      title: "Trick Not Found — PromptReady",
    };
  }

  return {
    title: `${trick.title} — PromptReady AI Tricks`,
    description: trick.description,
  };
}

export default async function TrickPage({ params }: Props) {
  const { slug } = await params;
  const trick = getTrickBySlug(slug);

  if (!trick) {
    notFound();
  }

  return (
    <main className="pt-20">
      <TrickDetail trick={trick} />
    </main>
  );
}
