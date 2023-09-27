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
import MDXIcon from '/public/icons/MDX.png';
import TailwindcssIcon from '/public/icons/TailwindCSS.png';
import ShadcnUIIcon from '/public/icons/shadcn-ui.png';
import MongoDBIcon from '/public/icons/MongoDB.png';
import ExpressIcon from '/public/icons/express.png';
import ReduxIcon from '/public/icons/redux.png';
import ReactIcon from '/public/icons/React.png';
import NodejsIcon from '/public/icons/Nodejs.png';

const icons: {
  [x: string]: StaticImageData;
} = {
  TypeScript: TypeScriptIcon,
  'Next.js': NextjsIcon,
  'Vercel Postgres': VercelIcon,
  Sanity: SanityIcon,
  Clerk: ClerkDevIcon,
  MDX: MDXIcon,
  TailwindCSS: TailwindcssIcon,
  'shadcn/ui': ShadcnUIIcon,
  MongoDB: MongoDBIcon,
  'Express.js': ExpressIcon,
  'RTK Query': ReduxIcon,
  React: ReactIcon,
  'Node.js': NodejsIcon,
};

interface Project {
  title: string;
  slug: string;
  tagline: string;
  demoURL?: string;
  repoURL: string;
  tech: string[];
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="justify-start w-auto h-auto text-left p-auto flex flex-col max-sm:gap-y-2">
      <CardHeader className="p-2">
        <CardTitle className="p-2 pt-1 text-lg font-bold">
          {project.title}
        </CardTitle>
        <CardDescription className="pl-2">{project.tagline}</CardDescription>
      </CardHeader>
      <CardFooter className="flex items-end p-0 justify-between gap-x-4 max-sm:flex-col max-sm:items-start">
        <div className="flex gap-2 pl-4 pb-4">
          <TooltipProvider>
            {project.tech.map((tech) => (
              <TooltipWrapper key={tech} label={tech}>
                <div className="bg-white w-[22px] h-[22px] flex items-center justify-center rounded-full">
                  <Image src={icons[tech]} alt={tech} width={16} height={16} />
                </div>
              </TooltipWrapper>
            ))}
          </TooltipProvider>
        </div>
        <div className="flex space-x-4 p-4 max-sm:pt-1">
          <a
            href={project.repoURL}
            rel="noreferer noopener"
            className={buttonVariants({
              variant: 'secondary',
            })}
          >
            Code
          </a>
          {project.demoURL && (
            <a
              href={project.demoURL}
              rel="noreferer noopener"
              className={buttonVariants({
                variant: 'secondary',
              })}
            >
              Demo
            </a>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
