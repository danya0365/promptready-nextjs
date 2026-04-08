import { GithubWeeklyListView } from '@/src/presentation/components/github-weekly/GithubWeeklyListView';
import { createServerGithubWeeklyPresenter } from '@/src/presentation/presenters/github-weekly/GithubWeeklyPresenterServerFactory';

export const metadata = {
  title: 'Top 10 GitHub Trends',
  description: 'Fastest growing GitHub repositories of the week',
};

export default async function GithubTrendsPage() {
  const presenter = createServerGithubWeeklyPresenter();
  
  try {
    const viewModel = await presenter.getViewModel();
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
