import { buttonVariants } from '@/components/ui/button';
import { TooltipProvider } from '@/components/ui/tooltip';
import { TooltipWrapper } from '@/lib/utils';
import { P } from '@/components/ui/p';
import ProjectCard from '@/components/project-card';
import { profile, projects } from '@/lib/constants';

export default async function Home() {
  return (
    <main className="space-y-6 pb-8">
      <section className="flex items-start justify-between xl:items-center xl:justify-center">
        <div className="space-y-4">
          <div className="relative flex w-full items-center justify-center gap-4 lg:justify-start">
            <div className="absolute left-1/2 top-1/2 -z-10 hidden h-full w-full -translate-x-[15%] -translate-y-[50%] rounded-full bg-slate-400/10 blur-3xl dark:block"></div>
            <div className="absolute right-1/2 top-1/2 -z-10 hidden h-full w-full -translate-y-[40%] rounded-full bg-[#3178c6]/20 blur-3xl dark:block"></div>
            <h1 className="scroll-m-20 text-6xl font-extrabold bg-gradient-to-r from-primary to-black bg-clip-text text-transparent dark:to-white sm:text-8xl">
              {profile.headline}
            </h1>
          </div>
          <P className="text-base leading-relaxed">{profile.bio}</P>
          <div className="flex flex-wrap items-center gap-4">
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
                        target="_blank"
                        className={buttonVariants({
                          size: 'icon',
                          variant: 'ghost',
                          className:
                            'h-12 w-12 hover:border-[2px] hover:border-primary duration-300',
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
        <h2 className="scroll-m-20 pb-2 text-3xl text-center font-bold tracking-tight transition-colors first:mt-0">
          Projects
        </h2>
        <p className="mt-4 space-y-6">
          {projects.map((project, index) => (
            <ProjectCard project={project} key={index} />
          ))}
        </p>
      </section>
    </main>
  );
}
