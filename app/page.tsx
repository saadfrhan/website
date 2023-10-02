import { buttonVariants } from '@/components/ui/button';
import { H1 } from '@/components/ui/h1';
import { TooltipProvider } from '@/components/ui/tooltip';
import { TooltipWrapper } from '@/lib/utils';
import { P } from '@/components/ui/p';
import ProjectCard from '@/components/project-card';
import { H2 } from '@/components/ui/h2';
import { profile, projects } from '@/lib/constants';

export default async function Home() {
  return (
    <main className="space-y-6 pb-8">
      <section className="flex items-start justify-between xl:items-center xl:justify-center">
        <div className="space-y-4">
          <H1>{profile.headline}</H1>
          <P className="text-base leading-relaxed">{profile.bio}</P>
          <div className="flex flex-wrap items-center gap-2">
            <TooltipProvider>
              {Object.entries(profile.links)
                .sort()
                .map(([label, value], id) => {
                  const { icon: Icon, link } = value;
                  return (
                    <TooltipWrapper key={id} label={label}>
                      <a
                        href={link}
                        rel="noreferer noopener"
                        className={buttonVariants({
                          size: 'icon',
                          variant: 'ghost',
                        })}
                      >
                        <Icon size={24} />
                      </a>
                    </TooltipWrapper>
                  );
                })}
            </TooltipProvider>
          </div>
        </div>
      </section>
      <section className="space-y-6">
        <H2>Projects</H2>
        <p className="mt-4 space-y-6">
          {projects.map((project, index) => (
            <ProjectCard project={project} key={index} />
          ))}
        </p>
      </section>
    </main>
  );
}
