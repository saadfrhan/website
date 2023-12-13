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
import { ExternalLink } from 'lucide-react';
import { icons } from '@/lib/constants';

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
        <CardTitle className="text-lg font-bold items-center leading-none">
          {project.title}
        </CardTitle>
        {project.isInProgress && (
          <span className="text-xs font-medium text-neutral-400 dark:text-neutral-500">
            (work in progress)
          </span>
        )}
        <CardDescription>{project.tagline}</CardDescription>
      </CardHeader>
      <CardFooter className="flex items-end justify-between gap-6 max-sm:flex-col max-sm:items-start">
        <div className="flex gap-2">
          <TooltipProvider>
            {project.tech.map((tech) => (
              <TooltipWrapper key={tech} label={tech}>
                <div className="bg-white w-[22px] h-[22px] flex items-center justify-center rounded-full">
                  <Image src={icons.find(
                    (icon) => icon.value === tech
                  )?.icon as StaticImageData
                  } alt={tech} width={16} height={16} />
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
