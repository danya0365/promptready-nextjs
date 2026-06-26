import { BlogListView } from '@/src/presentation/components/blog/BlogListView';
import { createServerBlogPresenter } from '@/src/presentation/presenters/blog/BlogPresenterServerFactory';

export const metadata = {
  title: 'Release Blog — OpenClaw — PromptReady',
  description: 'อัปเดตฟีเจอร์ใหม่ การปรับปรุง และข่าวสารของ OpenClaw',
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedParams = await searchParams;
  const presenter = createServerBlogPresenter();

  const query = {
    page: Number(resolvedParams.page) || 1,
    perPage: Number(resolvedParams.perPage) || 10,
    search: typeof resolvedParams.search === 'string' ? resolvedParams.search : undefined,
    orderBy: (resolvedParams.orderBy as any) || 'date',
    orderDirection: (resolvedParams.orderDirection as any) || 'desc',
  };

  try {
    const viewModel = await presenter.getViewModel(query);
    return <BlogListView posts={viewModel.posts} />;
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted text-text-secondary">Error loading data.</p>
      </div>
    );
  }
}
