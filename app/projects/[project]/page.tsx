import Image from 'next/image';
import { Metadata } from 'next';
import { PortableText } from '@portabletext/react';
import fallBackImage from '/public/project.png';
import { ProjectType } from '@/sanity/schemas/types/project';
import { H2 } from '@/components/ui/h2';
import { buttonVariants } from '@/components/ui/button';
import { H1 } from '@/components/ui/h1';
import client from '@/sanity/config';
import { groq } from 'next-sanity';

async function getProject(slug: string) {
  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      title,
      url,
      coverImage { alt, "image": asset->url },
      description,
      _type
    }`,
    { slug }
  );
}

type Props = {
  params: {
    project: string;
  };
};

// Dynamic metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.project;
  const project: ProjectType = await client.fetch(
    `*[_type == "project" && slug.current == $slug][0]{
    title,
    tagline,
    _createdAt
  }`,
    { slug }
  );

  const ogImage = `https://saadfarhan.vercel.app/og?title=${project.title}`;

  return {
    title: `${project.title} | Project`,
    description: project.tagline,
    openGraph: {
      title: `${project.title} | Project`,
      description: project.tagline,
      type: 'article',
      publishedTime: new Date(project._createdAt).toDateString(),
      url: `https://saadfarhan.vercel.app/blog/${slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | Project`,
      description: project.tagline,
      images: [ogImage],
    },
  };
}

export async function generateStaticParams() {
  const projects: ProjectType[] = await client.fetch(
    groq`*[_type == "project"]{
      "slug": slug.current,
    }`
  );

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project: ProjectType = await getProject(slug);

  return (
    <main className="w-full px-4 mx-auto ">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <H1>{project.title}</H1>

          <a
            href={project.url}
            rel="noreferrer noopener"
            className={buttonVariants({
              variant: 'outline',
            })}
          >
            Explore
          </a>
        </div>

        <Image
          className="rounded-xl border border-zinc-800"
          width={900}
          height={460}
          src={project.coverImage?.image || fallBackImage}
          alt={project.coverImage?.alt || project.title}
        />

        <div className="flex flex-col gap-y-6 mt-8 leading-7">
          <PortableText
            value={project.description}
            components={{
              listItem: {
                bullet: ({ children }) => (
                  <li className="list-disc ml-10">{children}</li>
                ),
              },
              block: {
                h2: ({ children }) => <H2>{children}</H2>,
              },
              marks: {
                link: ({ children, value }) => {
                  const rel = !value.href.startsWith('/')
                    ? 'noreferrer noopener'
                    : undefined;
                  return (
                    <a
                      href={value.href}
                      rel={rel}
                      className="text-primary underline-offset-4 hover:underline"
                    >
                      {children}
                    </a>
                  );
                },
              },
            }}
          />
        </div>
      </div>
    </main>
  );
}
