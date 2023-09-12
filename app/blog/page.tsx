import type { Metadata } from 'next';
import Link from 'next/link';
import { allBlogs } from '@/contentlayer/generated';
import ViewCounter from './view-counter';
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
              <CardContent className="p-4">
                <ViewCounter
                  allViews={allViews}
                  slug={post.slug}
                  trackView={false}
                />
              </CardContent>
            </Card>
          </Link>
        ))}
    </section>
    //   <main className="space-y-6">
    //   <section className="flex xl:items-center items-start xl:justify-center justify-between">
    //     <div key={profile._id} className="space-y-4">
    //       <H1>{profile.headline}</H1>
    //       <P className="text-base leading-relaxed">{profile.bio}</P>
    //       <div className="flex items-center flex-wrap gap-x-2">
    //         <TooltipProvider>
    //           {Object.entries(profile.socialLinks)
    //             .sort()
    //             .map(([_, value]: any, id) => {
    //               const { icon: Icon, label } = icons[id];
    //               return (
    //                 <TooltipWrapper key={id} label={label}>
    //                   <a
    //                     href={value}
    //                     rel="noreferer noopener"
    //                     className={buttonVariants({
    //                       size: 'icon',
    //                       variant: 'ghost',
    //                     })}
    //                   >
    //                     <Icon size={24} />
    //                   </a>
    //                 </TooltipWrapper>
    //               );
    //             })}
    //           <TooltipWrapper label="My CV">
    //             <a
    //               href={profile.resumeURL}
    //               rel="noreferer noopener"
    //               className={buttonVariants({
    //                 size: 'icon',
    //                 variant: 'ghost',
    //               })}
    //             >
    //               <FileText size={24} />
    //             </a>
    //           </TooltipWrapper>
    //           <TooltipWrapper label="Email me">
    //             <a
    //               href={profile.email}
    //               rel="noreferer noopener"
    //               className={buttonVariants({
    //                 size: 'icon',
    //                 variant: 'ghost',
    //               })}
    //             >
    //               <Mail size={24} />
    //             </a>
    //           </TooltipWrapper>
    //         </TooltipProvider>
    //       </div>
    //     </div>
    //   </section>
    //   <section className="space-y-4">
    //     <H2>Projects</H2>
    //     <div className="space-y-4">
    //       <P className="max-w-lg">
    //         I love building things. Here are a few of my projects.
    //       </P>
    //     </div>
    //     <ProjectCards projects={projects} />
    //   </section>
    // </main>
  );
}
