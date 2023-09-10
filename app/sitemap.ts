import { allBlogs } from '@/contentlayer/generated';
import client from '@/sanity-cms/config';

interface Blogs {
  url: string;
  lastModified: string;
}

interface Projects {
  _updatedAt: string;
  slug: string;
}

export default async function sitemap() {
  const blogs: Blogs[] = allBlogs.map((post) => ({
    url: `https://saadfarhan.vercel.app/blog/${post.slug}`,
    lastModified: post.publishedAt,
  }));

  const getProjectsSitemapData = async (): Promise<Projects[]> =>
    await client.fetch(`*[_type == "project"]{
    _updatedAt,
    "slug": slug.current,
  }`);

  const projects = (await getProjectsSitemapData()).map((project) => ({
    url: `https://saadfarhan.vercel.app/projects/${project.slug}`,
    lastModified: project._updatedAt,
  }));

  const routes = ['', '/blog', '/about', '/projects', '/studio'].map(
    (route) => ({
      url: `https://saadfarhan.vercel.app${route}`,
      lastModified: new Date().toISOString().split('T')[0],
    })
  );

  return [...routes, ...blogs, ...projects];
}
