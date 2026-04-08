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

export interface IGithubWeeklyRepository {
  getAll(): Promise<GithubWeekly[]>;
  getBySlug(slug: string): Promise<GithubWeekly | null>;
}
