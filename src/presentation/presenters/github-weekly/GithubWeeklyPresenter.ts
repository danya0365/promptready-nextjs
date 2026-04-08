import { IGithubWeeklyRepository, GithubWeekly, GithubWeeklyQuery } from '@/src/application/repositories/IGithubWeeklyRepository';

export interface GithubWeeklyViewModel {
  weeklies: GithubWeekly[];
  total: number;
  page: number;
  perPage: number;
}

export class GithubWeeklyPresenter {
  constructor(private readonly repository: IGithubWeeklyRepository) {}

  async getViewModel(query?: GithubWeeklyQuery): Promise<GithubWeeklyViewModel> {
    try {
      const result = await this.repository.getAll(query);
      return {
        weeklies: result.data,
        total: result.total,
        page: result.page,
        perPage: result.perPage
      };
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
