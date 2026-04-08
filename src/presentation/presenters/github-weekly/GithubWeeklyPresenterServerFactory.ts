import { GithubWeeklyPresenter } from './GithubWeeklyPresenter';
import { MockGithubWeeklyRepository } from '@/src/infrastructure/repositories/mock/MockGithubWeeklyRepository';

export class GithubWeeklyPresenterServerFactory {
  static create(): GithubWeeklyPresenter {
    const repository = new MockGithubWeeklyRepository();
    return new GithubWeeklyPresenter(repository);
  }
}

export function createServerGithubWeeklyPresenter(): GithubWeeklyPresenter {
  return GithubWeeklyPresenterServerFactory.create();
}
