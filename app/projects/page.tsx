import { Button } from '@/components/ui/button';
import client from '@/sanity/config';
import { groq } from 'next-sanity';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import NextjsIcon from '/public/icons/Nextjs.png';
import SanityIcon from '/public/icons/Sanity.png';
import ClerkDevIcon from '/public/icons/ClerkDev.png';
import TypeScriptIcon from '/public/icons/TypeScript.png';
import VercelIcon from '/public/icons/Vercel.png';
import PlanetscaleIcon from '/public/icons/Planetscale.png';

const icons: {
  [x: string]: StaticImageData;
} = {
  TypeScript: TypeScriptIcon,
  'Next.js': NextjsIcon,
  'Vercel Postgres': VercelIcon,
  Planetscale: PlanetscaleIcon,
  Sanity: SanityIcon,
  Clerk: ClerkDevIcon,
};

import Image, { StaticImageData } from 'next/image';
import { ProjectType } from '@/sanity/schemas/types/project';
import { TooltipWrapper } from '@/lib/utils';
import { TooltipProvider } from '@/components/ui/tooltip';

async function getProjects() {
  return client.fetch(
    groq`*[_type == "project"]{
      _id,
      title,
      "slug": slug.current,
      tagline,
      demoURL,
      tech,
      repoURL
    }`
  );
}

export default async function Projects() {
  const projects: ProjectType[] = await getProjects();

  return (
    <main>
      <section className="gap-x-6 justify-items-center">
        <div className="order-2 lg:order-none">
          <h1 className="font-bold text-2xl mb-8 tracking-tighter">Projects</h1>

          <div className="flex flex-col gap-y-3 leading-relaxed">
            <section className="grid grid-cols-1 gap-4 mb-12">
              {projects.map((project) => (
                <Card
                  key={project._id}
                  className="justify-start text-left h-auto w-auto p-auto"
                >
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.tagline}</CardDescription>
                  </CardHeader>
                  <CardFooter className="flex justify-between gap-4 max-sm:flex-col max-sm:items-start items-end">
                    <div className="flex gap-2">
                      <TooltipProvider>
                        {project.tech.map((tech) => (
                          <TooltipWrapper key={tech} label={tech}>
                            <Image
                              src={icons[tech]}
                              alt={tech}
                              width={16}
                              height={16}
                            />
                          </TooltipWrapper>
                        ))}
                      </TooltipProvider>
                    </div>
                    <div className="space-x-4 flex">
                      <Button variant="secondary">REPO</Button>
                      <Button variant="secondary">WEBSITE</Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
