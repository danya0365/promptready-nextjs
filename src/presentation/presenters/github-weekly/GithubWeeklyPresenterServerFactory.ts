import { GithubWeeklyPresenter } from './GithubWeeklyPresenter';
import { StaticGithubWeeklyRepository } from '@/src/infrastructure/repositories/static/StaticGithubWeeklyRepository';

export class GithubWeeklyPresenterServerFactory {
  static create(): GithubWeeklyPresenter {
    const repository = new StaticGithubWeeklyRepository();
    return new GithubWeeklyPresenter(repository);
  }
}

export function createServerGithubWeeklyPresenter(): GithubWeeklyPresenter {
  return GithubWeeklyPresenterServerFactory.create();
}
