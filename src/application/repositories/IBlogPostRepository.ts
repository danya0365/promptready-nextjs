export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  date: string;
  tags: string[];
}

export interface BlogPostQuery {
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

export interface IBlogPostRepository {
  getAll(query?: BlogPostQuery): Promise<PaginatedResult<BlogPost>>;
  getBySlug(slug: string): Promise<BlogPost | null>;
}
