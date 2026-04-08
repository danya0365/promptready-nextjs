import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Star, GitBranch, ExternalLink, Activity } from 'lucide-react';
import { GithubWeekly } from '@/src/application/repositories/IGithubWeeklyRepository';

interface Props {
  weekly: GithubWeekly;
}

export function GithubWeeklyDetailView({ weekly }: Props) {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      {/* Content wrapper with top padding to clear global header */}
      <div className="relative max-w-4xl mx-auto px-6 pt-24 md:pt-32 pb-12">
        {/* Back Button */}
        <div className="mb-8">
          <Link 
            href="/github-trends"
            className="inline-flex items-center gap-2 text-sm font-bold text-text-secondary hover:text-primary transition-colors w-fit px-4 py-2 -ml-4 rounded-full hover:bg-surface-elevated border border-transparent hover:border-border"
          >
            <ArrowLeft size={16} />
            Back to Trends
          </Link>
        </div>

        {/* Hero Section */}
        <div className="rounded-3xl overflow-hidden glass border border-border relative mb-12 shadow-2xl animate-fade-in shadow-primary/5">
          <div className="aspect-[21/9] sm:aspect-[24/9]">
            <img 
              src={weekly.coverImage} 
              alt={weekly.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8">
            <p className="text-primary-light font-bold mb-2">{weekly.date}</p>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
              {weekly.title}
            </h1>
            <p className="text-lg text-white/80 max-w-2xl font-medium">
              {weekly.description}
            </p>
          </div>
        </div>

        {/* Repos List */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-border animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <Activity className="text-primary" />
            <h2 className="text-2xl font-bold text-text-primary">The Top 10 List</h2>
          </div>
          
          {weekly.repos.map((repo, idx) => (
            <div 
              key={repo.id}
              className="glass card-hover group flex flex-col sm:flex-row gap-6 p-6 rounded-3xl animate-fade-in"
              style={{ animationDelay: `${0.2 + idx * 0.05}s` }}
            >
              {/* Rank Number */}
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center text-xl font-extrabold">
                #{idx + 1}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-text-primary mb-1 group-hover:text-primary transition-colors">
                      {repo.name}
                    </h3>
                    <div className="flex items-center gap-3 text-sm text-text-secondary mt-2">
                      <span className="flex items-center gap-1 font-bold text-warning">
                        <Star size={14} />
                        +{repo.starsGained.toLocaleString()} this week
                      </span>
                      <span className="w-1 h-1 rounded-full bg-border-muted" />
                      <span className="flex items-center gap-1.5 font-bold text-text-primary">
                        <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
                        {repo.language}
                      </span>
                    </div>
                  </div>
                  <a 
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-elevated border border-border text-sm font-bold hover:border-primary/40 transition-all text-text-primary shrink-0"
                  >
                    <GitBranch size={16} />
                    View Repo
                    <ExternalLink size={14} className="opacity-50" />
                  </a>
                </div>
                <p className="text-text-secondary leading-relaxed mt-2">
                  {repo.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
