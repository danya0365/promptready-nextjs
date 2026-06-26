import { StaticBlogPostRepository } from '@/src/infrastructure/repositories/static/StaticBlogPostRepository';
import { BlogPresenter } from './BlogPresenter';

export function createServerBlogPresenter(): BlogPresenter {
  return new BlogPresenter(new StaticBlogPostRepository());
}
