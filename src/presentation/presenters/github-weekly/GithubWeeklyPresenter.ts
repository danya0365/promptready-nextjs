import { IGithubWeeklyRepository, GithubWeekly } from '@/src/application/repositories/IGithubWeeklyRepository';

export interface GithubWeeklyViewModel {
  weeklies: GithubWeekly[];
}

export class GithubWeeklyPresenter {
  constructor(private readonly repository: IGithubWeeklyRepository) {}

  async getViewModel(): Promise<GithubWeeklyViewModel> {
    try {
      const weeklies = await this.repository.getAll();
      return { weeklies };
    } catch (error) {
      console.error('Error getting view model:', error);
      throw error;
    }
  }

  async getDetailViewModel(slug: string): Promise<GithubWeekly | null> {
    try {
      return await this.repository.getBySlug(slug);
    } catch (error) {
      console.error('Error getting detail view model:', error);
      throw error;
    }
  }
}
