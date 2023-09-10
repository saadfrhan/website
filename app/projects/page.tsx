import Image from 'next/image';
import Link from 'next/link';
import { ProjectType } from 'sanity-cms/schemas/types/project';
import { getProjects } from 'sanity-cms/queries';
import { Button } from 'components/ui/button';
import { H1 } from 'components/ui/h1';

export default async function Project() {
  const projects: ProjectType[] = await getProjects();

  return (
    <main className="container space-y-8">
      <H1>Projects</H1>
      <section className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-12">
        {projects.map((project) => (
          <Button
            variant="secondary"
            key={project._id}
            className="hover:border-primary border-transparent border justify-start text-left h-auto w-auto p-auto"
          >
            <Link href={`/projects/${project.slug}`}>
              <div className="flex flex-row py-2 items-center gap-x-4 rounded-lg ease-in-out">
                <Image
                  src={project.logo}
                  width={60}
                  height={60}
                  alt={project.title}
                  className="bg-background/50 border rounded-md p-2"
                />
                <div>
                  <h2 className="font-semibold mb-1">{project.title}</h2>
                  <div className="text-sm text-muted-foreground">
                    {project.tagline}
                  </div>
                </div>
              </div>
            </Link>
          </Button>
        ))}
      </section>
    </main>
  );
}
