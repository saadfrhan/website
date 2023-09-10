import { allBlogs } from '@/contentlayer/generated';
import client from '@/sanity/config';
import { groq } from 'next-sanity';

export default async function sitemap() {
  const blogs = allBlogs.map((post) => ({
    url: `https://saadfarhan.vercel.app/blog/${post.slug}`,
    lastModified: post.publishedAt,
  }));

  const getProjectsSitemapInformation = async (): Promise<
    {
      _updatedAt: string;
      slug: string;
    }[]
  > =>
    await client.fetch(
      groq`*[_type == "project"]{
      _updatedAt,
      slug
    }`
    );

  const projects = (await getProjectsSitemapInformation()).map((project) => ({
    url: `https://saadfarhan.vercel.app/projects/${project.slug}`,
    lastModified: project._updatedAt,
  }));

  const routes = ['', '/blog', '/about', '/projects'].map((route) => ({
    url: `https://saadfarhan.vercel.app${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...blogs, ...projects];
}
