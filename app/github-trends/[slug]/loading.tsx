import React from 'react';
import { ArrowLeft, Activity } from 'lucide-react';

export default function LoadingGithubTrendDetail() {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      {/* Content wrapper with top padding to clear global header */}
      <div className="relative max-w-4xl mx-auto px-6 pt-24 md:pt-32 pb-12">
        {/* Back Button Skeleton */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-text-secondary px-4 py-2 -ml-4">
            <ArrowLeft size={16} />
            <div className="w-24 h-5 bg-surface rounded-lg animate-pulse" />
          </div>
        </div>

        {/* Hero Section Skeleton */}
        <div className="rounded-3xl overflow-hidden glass border border-border relative mb-12 aspect-[21/9] sm:aspect-[24/9] animate-pulse">
          <div className="absolute inset-0 bg-surface-elevated" />
        </div>

        {/* Repos List Skeleton */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-border">
            <Activity className="text-primary opacity-50" />
            <div className="w-48 h-8 bg-surface rounded-lg animate-pulse" />
          </div>
          
          {[...Array(10)].map((_, i) => (
            <div key={i} className="glass flex flex-col sm:flex-row gap-6 p-6 rounded-3xl animate-pulse">
              {/* Rank Number Skeleton */}
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-surface-elevated" />

              {/* Content Skeleton */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                  <div className="flex-1">
                    <div className="w-48 h-6 bg-surface-elevated rounded-lg mb-4" />
                    <div className="flex items-center gap-3">
                      <div className="w-24 h-4 bg-surface-elevated rounded-lg" />
                      <div className="w-20 h-4 bg-surface-elevated rounded-lg" />
                    </div>
                  </div>
                  <div className="w-32 h-10 rounded-full bg-surface-elevated shrink-0" />
                </div>
                <div className="w-full h-4 bg-surface-elevated rounded-lg mt-4" />
                <div className="w-5/6 h-4 bg-surface-elevated rounded-lg mt-2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
