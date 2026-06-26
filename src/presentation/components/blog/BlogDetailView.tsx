import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Tag } from 'lucide-react';
import { BlogPost } from '@/src/application/repositories/IBlogPostRepository';

interface Props {
  post: BlogPost;
}

export function BlogDetailView({ post }: Props) {
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
    <div className="min-h-screen bg-background text-text-primary">
      <div className="relative max-w-4xl mx-auto px-6 pt-24 md:pt-32 pb-12">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold text-text-secondary hover:text-primary transition-colors w-fit px-4 py-2 -ml-4 rounded-full hover:bg-surface-elevated border border-transparent hover:border-border"
          >
            <ArrowLeft size={16} />
            กลับไปหน้าบล็อก
          </Link>
        </div>

        {/* Hero Section */}
        <div className="rounded-3xl overflow-hidden glass border border-border relative mb-12 shadow-2xl animate-fade-in shadow-primary/5">
          <div className="aspect-[21/9] sm:aspect-[24/9]">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8">
            <p className="text-primary-light font-bold mb-2">{formatDate(post.date)}</p>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
              {post.title}
            </h1>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-1 text-xs text-text-muted bg-surface border border-border px-3 py-1.5 rounded-full"
            >
              <Tag className="w-3 h-3" />
              {tag}
            </span>
          ))}
        </div>

        {/* Content */}
        <article className="prose prose-invert max-w-none">
          {post.content.split('\n\n').map((paragraph, idx) => (
            <p key={idx} className="text-text-secondary leading-relaxed mb-6 whitespace-pre-line">
              {paragraph}
            </p>
          ))}
        </article>
      </div>
    </div>
  );
}
