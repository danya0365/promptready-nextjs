import { notFound } from 'next/navigation';
import { BlogDetailView } from '@/src/presentation/components/blog/BlogDetailView';
import { createServerBlogPresenter } from '@/src/presentation/presenters/blog/BlogPresenterServerFactory';

// Next.js params is a Promise in recent versions
type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const presenter = createServerBlogPresenter();

  try {
    const post = await presenter.getDetailViewModel(slug);
    if (!post) return {};
    return {
      title: post.title,
      description: post.excerpt,
    };
  } catch (error) {
    return {
      title: 'Release Blog — OpenClaw',
      description: 'Error loading metadata',
    };
  }
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const presenter = createServerBlogPresenter();

  try {
    const post = await presenter.getDetailViewModel(slug);

    if (!post) {
      notFound();
    }

    return <BlogDetailView post={post} />;
  } catch (error) {
    console.error("Error loading detail:", error);
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted text-text-secondary">Error loading detail data.</p>
      </div>
    );
  }
}
