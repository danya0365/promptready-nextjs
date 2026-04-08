import { notFound } from 'next/navigation';
import { MockGithubWeeklyRepository } from '@/src/infrastructure/repositories/mock/MockGithubWeeklyRepository';
import { GithubWeeklyDetailView } from '@/src/presentation/components/github-weekly/GithubWeeklyDetailView';

// Next.js params is a Promise in recent versions
type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const repository = new MockGithubWeeklyRepository();
  const weekly = await repository.getBySlug(slug);
  
  if (!weekly) return {};
  
  return {
    title: weekly.title,
    description: weekly.description,
  };
}

export default async function GithubTrendDetailPage({ params }: Props) {
  const { slug } = await params;
  const repository = new MockGithubWeeklyRepository();
  const weekly = await repository.getBySlug(slug);

  if (!weekly) {
    notFound();
  }

  return <GithubWeeklyDetailView weekly={weekly} />;
}
