import { MockGithubWeeklyRepository } from '@/src/infrastructure/repositories/mock/MockGithubWeeklyRepository';
import { GithubWeeklyListView } from '@/src/presentation/components/github-weekly/GithubWeeklyListView';

export const metadata = {
  title: 'Top 10 GitHub Trends',
  description: 'Fastest growing GitHub repositories of the week',
};

export default async function GithubTrendsPage() {
  const repository = new MockGithubWeeklyRepository();
  const weeklies = await repository.getAll();

  return <GithubWeeklyListView weeklies={weeklies} />;
}
