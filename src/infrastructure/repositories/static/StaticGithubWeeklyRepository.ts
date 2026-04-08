import { GithubWeekly, GithubWeeklyQuery, IGithubWeeklyRepository, PaginatedResult } from "@/src/application/repositories/IGithubWeeklyRepository";
import { GITHUB_TRENDS_DATA } from "@/src/domin/data/github-trends";

export class StaticGithubWeeklyRepository implements IGithubWeeklyRepository {
  async getAll(query?: GithubWeeklyQuery): Promise<PaginatedResult<GithubWeekly>> {
    let filtered = [...GITHUB_TRENDS_DATA];

    // 1. Search Filter
    if (query?.search) {
      const search = query.search.toLowerCase();
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(search) || 
        item.description.toLowerCase().includes(search)
      );
    }

    // 2. Ordering
    const orderBy = query?.orderBy || 'date';
    const direction = query?.orderDirection === 'asc' ? 1 : -1;

    filtered.sort((a, b) => {
      if (orderBy === 'date') {
        return (new Date(a.date).getTime() - new Date(b.date).getTime()) * direction;
      }
      return a.title.localeCompare(b.title) * direction;
    });

    // 3. Pagination
    const total = filtered.length;
    const page = query?.page || 1;
    const perPage = query?.perPage || 10;
    const start = (page - 1) * perPage;
    const data = filtered.slice(start, start + perPage);

    return {
      data,
      total,
      page,
      perPage
    };
  }

  async getBySlug(slug: string): Promise<GithubWeekly | null> {
    const found = GITHUB_TRENDS_DATA.find(item => item.slug === slug);
    return found || null;
  }
}
