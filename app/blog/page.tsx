import type { Metadata } from 'next';
import Link from 'next/link';
import { allBlogs } from '@/contentlayer/generated';
import { getViewsCount } from '@/lib/db/metrics';
import { H1 } from '@/components/ui/h1';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read my thoughts on software development, design, and more.',
};

export default async function BlogPage() {
  const allViews = await getViewsCount();

  return (
    <section className="space-y-6 flex-col w-full flex">
      <H1>Blog</H1>
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <Card className="w-full flex flex-col">
              <CardHeader className="p-4">
                <CardTitle className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                  {post.title}
                </CardTitle>
              </CardHeader>
            </Card>
          </Link>
        ))}
    </section>
  );
}
