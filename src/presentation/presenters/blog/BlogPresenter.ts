import { IBlogPostRepository, BlogPost, BlogPostQuery } from '@/src/application/repositories/IBlogPostRepository';

export interface BlogViewModel {
  posts: BlogPost[];
  total: number;
  page: number;
  perPage: number;
}

export class BlogPresenter {
  constructor(private readonly repository: IBlogPostRepository) {}

  async getViewModel(query?: BlogPostQuery): Promise<BlogViewModel> {
    try {
      const result = await this.repository.getAll(query);
      return {
        posts: result.data,
        total: result.total,
        page: result.page,
        perPage: result.perPage
      };
    } catch (error) {
      console.error('Error getting view model:', error);
      throw error;
    }
  }

  async getDetailViewModel(slug: string): Promise<BlogPost | null> {
    try {
      return await this.repository.getBySlug(slug);
    } catch (error) {
      console.error('Error getting detail view model:', error);
      throw error;
    }
  }
}
