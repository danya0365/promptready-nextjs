export interface GithubRepo {
  id: string;
  name: string;
  description: string;
  url: string;
  starsGained: number;
  language: string;
}

export interface GithubWeekly {
  slug: string;
  title: string;
  description: string;
  coverImage: string;
  date: string;
  repos: GithubRepo[];
}

export interface GithubWeeklyQuery {
  page?: number;
  perPage?: number;
  search?: string;
  orderBy?: 'date' | 'title';
  orderDirection?: 'asc' | 'desc';
}

export interface PaginatedResult<T> {
  data: T[];
  total: number;
  page: number;
  perPage: number;
}

export interface IGithubWeeklyRepository {
  getAll(query?: GithubWeeklyQuery): Promise<PaginatedResult<GithubWeekly>>;
  getBySlug(slug: string): Promise<GithubWeekly | null>;
}
