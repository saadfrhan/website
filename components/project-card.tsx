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
import NextAuthIcon from '/public/icons/next-auth.png';
import PrismaIcon from '/public/icons/prisma.png';
import PlanetscaleIcon from '/public/icons/planet-scale.png';
import DrizzleIcon from '/public/icons/drizzle.png';
import MongooseIcon from '/public/icons/mongoose.png';
import { ExternalLink } from 'lucide-react';

const icons: {
  [x: string]: StaticImageData;
} = {
  TypeScript: TypeScriptIcon,
  'Next.js': NextjsIcon,
  'Vercel Postgres': VercelIcon,
  Clerk: ClerkDevIcon,
  MDX: MDXIcon,
  TailwindCSS: TailwindcssIcon,
  'shadcn/ui': ShadcnUIIcon,
  MongoDB: MongoDBIcon,
  'Express.js': ExpressIcon,
  'RTK Query': ReduxIcon,
  React: ReactIcon,
  'Node.js': NodejsIcon,
  'NextAuth.js': NextAuthIcon,
  'Prisma ORM': PrismaIcon,
  PlanetScale: PlanetscaleIcon,
  'Drizzle ORM': DrizzleIcon,
  'Mongoose ORM': MongooseIcon,
};

interface Project {
  title: string;
  tagline: string;
  demoURL?: string;
  repoURL: string;
  isInProgress?: boolean;
  tech: string[];
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="justify-start rounded-3xl text-left flex flex-col max-sm:gap-y-2 drop-shadow-[0_0_15px_rgba(49,49,49,0.2)] dark:drop-shadow-[0_0_15px_rgba(49,49,49,0.2)] bg-gradient-to-b from-neutral-50/90 to-neutral-100/90 transition duration-300 dark:from-neutral-950/90 dark:to-neutral-800/90 lg:bg-gradient-to-br border-primary/10">
      <CardHeader className="gap-0">
        <CardTitle className="text-lg font-bold flex flex-col gap-2 items-center">
          {project.title}
          {project.isInProgress && (
            <span className="text-xs font-medium text-neutral-400 dark:text-neutral-500">
              (work in progress)
            </span>
          )}
        </CardTitle>
        <CardDescription>{project.tagline}</CardDescription>
      </CardHeader>
      <CardFooter className="flex items-end justify-between gap-6 max-sm:flex-col max-sm:items-start">
        <div className="flex gap-2">
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
        <div className="flex space-x-4">
          <a
            href={project.repoURL}
            rel="noreferer noopener"
            className={buttonVariants({
              variant: 'default',
              className:
                'hover:border-primary bg-primary duration-300 border-[2px] border-transparent flex gap-2',
            })}
            target="_blank"
          >
            Repo <ExternalLink className="w-4 h-4" />
          </a>
          {project.demoURL && (
            <a
              href={project.demoURL}
              rel="noreferer noopener"
              className={buttonVariants({
                variant: 'default',
                className:
                  'hover:border-primary bg-primary duration-300 border-[2px] border-transparent flex gap-2',
              })}
              target="_blank"
            >
              Demo <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
