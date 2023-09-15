import { TooltipWrapper } from '@/lib/utils';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import { TooltipProvider } from './ui/tooltip';
import Image, { StaticImageData } from 'next/image';
import { buttonVariants } from './ui/button';
import NextjsIcon from '/public/icons/Nextjs.png';
import SanityIcon from '/public/icons/Sanity.png';
import ClerkDevIcon from '/public/icons/ClerkDev.png';
import TypeScriptIcon from '/public/icons/TypeScript.png';
import VercelIcon from '/public/icons/Vercel.png';
import PlanetscaleIcon from '/public/icons/Planetscale.png';
import { ProjectType } from '@/sanity/schemas/types/project';

const icons: {
  [x: string]: StaticImageData;
} = {
  TypeScript: TypeScriptIcon,
  'Next.js': NextjsIcon,
  'Vercel Postgres': VercelIcon,
  Sanity: SanityIcon,
  Clerk: ClerkDevIcon,
};

export default function ProjectCards({
  projects,
}: {
  projects: ProjectType[];
}) {
  return (
    <p className="mt-4 space-y-4">
      {projects.map((project) => (
        <Card
          key={project._id}
          className="justify-start w-auto h-auto text-left p-auto"
        >
          <CardHeader className="p-2">
            <CardTitle className="p-2 pt-1 text-lg font-bold">
              {project.title}
            </CardTitle>
            <CardDescription className="pl-2">
              {project.tagline}
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex items-end p-0 justify-between gap-4 max-sm:flex-col max-sm:items-start">
            <div className="flex gap-2 pl-4 pb-4">
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
            <div className="flex space-x-4 p-4">
              <a
                href={project.repoURL}
                rel="noreferer noopener"
                className={buttonVariants({
                  variant: 'secondary',
                })}
              >
                Code
              </a>
              <a
                href={project.demoURL}
                rel="noreferer noopener"
                className={buttonVariants({
                  variant: 'secondary',
                })}
              >
                Demo
              </a>
            </div>
          </CardFooter>
        </Card>
      ))}
    </p>
  );
}
