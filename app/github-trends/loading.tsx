import React from 'react';

export default function LoadingGithubTrends() {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      {/* Hero Section Skeleton */}
      <div className="relative overflow-hidden border-b border-border">
        <div className="max-w-6xl mx-auto px-6 pt-32 pb-24 relative z-10">
          <div className="inline-block rounded-full bg-surface-elevated border border-border mb-6 w-36 h-8 animate-pulse" />
          <div className="w-full max-w-2xl h-16 md:h-24 bg-surface rounded-2xl mb-6 animate-pulse" />
          <div className="w-3/4 max-w-lg h-6 bg-surface rounded-lg animate-pulse" />
          <div className="w-1/2 max-w-sm h-6 bg-surface rounded-lg mt-2 animate-pulse" />
        </div>
      </div>

      {/* Grid Section Skeleton */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="glass rounded-3xl overflow-hidden animate-pulse">
              <div className="aspect-[16/9] bg-surface-elevated relative" />
              <div className="p-6 flex flex-col gap-4">
                <div className="w-3/4 h-6 bg-surface-elevated rounded-lg" />
                <div className="w-full h-4 bg-surface-elevated rounded-lg" />
                <div className="w-5/6 h-4 bg-surface-elevated rounded-lg" />
                <div className="flex justify-end mt-4">
                  <div className="w-32 h-5 bg-surface-elevated rounded-lg" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
