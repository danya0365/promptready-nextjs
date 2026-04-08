import { GithubWeeklyListView } from '@/src/presentation/components/github-weekly/GithubWeeklyListView';
import { createServerGithubWeeklyPresenter } from '@/src/presentation/presenters/github-weekly/GithubWeeklyPresenterServerFactory';

export const metadata = {
  title: 'Top 10 GitHub Trends',
  description: 'Fastest growing GitHub repositories of the week',
};

export default async function GithubTrendsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedParams = await searchParams;
  const presenter = createServerGithubWeeklyPresenter();
  
  const query = {
    page: Number(resolvedParams.page) || 1,
    perPage: Number(resolvedParams.perPage) || 10,
    search: typeof resolvedParams.search === 'string' ? resolvedParams.search : undefined,
    orderBy: (resolvedParams.orderBy as any) || 'date',
    orderDirection: (resolvedParams.orderDirection as any) || 'desc',
  };

  try {
    const viewModel = await presenter.getViewModel(query);
    return <GithubWeeklyListView weeklies={viewModel.weeklies} />;
  } catch (error) {
    console.error("Error fetching github trends data:", error);
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted text-text-secondary">Error loading data.</p>
      </div>
    );
  }
}
