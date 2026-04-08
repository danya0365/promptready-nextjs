import { notFound } from 'next/navigation';
import { GithubWeeklyDetailView } from '@/src/presentation/components/github-weekly/GithubWeeklyDetailView';
import { createServerGithubWeeklyPresenter } from '@/src/presentation/presenters/github-weekly/GithubWeeklyPresenterServerFactory';

// Next.js params is a Promise in recent versions
type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const presenter = createServerGithubWeeklyPresenter();
  
  try {
    const weekly = await presenter.getDetailViewModel(slug);
    if (!weekly) return {};
    return {
      title: weekly.title,
      description: weekly.description,
    };
  } catch (error) {
    return {
      title: 'Top 10 GitHub Trends',
      description: 'Error loading metadata',
    };
  }
}

export default async function GithubTrendDetailPage({ params }: Props) {
  const { slug } = await params;
  const presenter = createServerGithubWeeklyPresenter();

  try {
    const weekly = await presenter.getDetailViewModel(slug);

    if (!weekly) {
      notFound();
    }

    return <GithubWeeklyDetailView weekly={weekly} />;
  } catch (error) {
    console.error("Error loading detail:", error);
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted text-text-secondary">Error loading detail data.</p>
      </div>
    );
  }
}
