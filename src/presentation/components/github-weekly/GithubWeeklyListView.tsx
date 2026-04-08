import React from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, TrendingUp } from 'lucide-react';
import { GithubWeekly } from '@/src/application/repositories/IGithubWeeklyRepository';

interface Props {
  weeklies: GithubWeekly[];
}

export function GithubWeeklyListView({ weeklies = [] }: Props) {
  const formatDate = (dateStr: string) => {
    try {
      return new Date(dateStr).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch (e) {
      return dateStr;
    }
  };

  return (
    <div className="min-h-screen bg-background text-text-primary selection:bg-primary/30">
      {/* Hero Section */}
      <div className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 pt-32 pb-24 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-semibold text-primary mb-6 animate-fade-in">
            <TrendingUp size={16} />
            <span>Weekly Trends</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 gradient-text animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Top 10 GitHub <br className="hidden md:block"/> Repos of the Week
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Discover the fastest growing repositories, tools, and libraries that the developer community is excited about right now.
          </p>
        </div>
      </div>

      {/* Grid Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {weeklies.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {weeklies.map((weekly, idx) => (
              <Link 
                key={weekly.slug} 
                href={`/github-trends/${weekly.slug}`}
                className="glass card-hover group flex flex-col rounded-3xl overflow-hidden animate-fade-in"
                style={{ animationDelay: `${0.3 + (idx * 0.1)}s` }}
              >
                <div className="aspect-[16/9] overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  <img 
                    src={weekly.coverImage} 
                    alt={weekly.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 text-sm font-medium text-white/90">
                    <Calendar size={14} className="text-primary-light" />
                    {formatDate(weekly.date)}
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-3 text-text-primary group-hover:text-primary transition-colors">
                    {weekly.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-1">
                    {weekly.description}
                  </p>
                  <div className="flex items-center justify-end text-sm font-bold text-primary group-hover:text-primary-dark transition-colors">
                    Read full analysis 
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-16 h-16 rounded-full bg-surface border border-border flex items-center justify-center mb-6">
              <TrendingUp size={24} className="text-text-muted" />
            </div>
            <h3 className="text-2xl font-bold text-text-primary mb-2">No weekly updates found</h3>
            <p className="text-text-secondary max-w-sm">
              We couldn't find any GitHub trends matching your current filters or search query.
            </p>
            <Link 
              href="/github-trends" 
              className="mt-8 text-primary font-bold hover:underline"
            >
              Clear all filters
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
