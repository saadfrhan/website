import { projects } from '@/lib/constants';
import ProjectCard from './project-card';
import { getRepositoryInfo } from '@/lib/utils';
import ProjectBadge from './project-badge';
import { Badge } from './ui/badge';
import { ExternalLink } from 'lucide-react';
import Anchor from './anchor';

export default function Projects() {
  return (
    <section className="space-y-6 pt-4" id="projects">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-4">
        Projects
      </h2>
      <div className="mt-4 space-y-6">
        <div className="grid grid-cols-2 gap-4 max-lg:grid-cols-1">
          {projects.map(async (project, index) => {
            const data = await getRepositoryInfo(project);
            if (!data) {
              return 'Error';
            }
            return (
              <ProjectCard project={{ ...data, title: project }} key={index} />
            );
          })}
        </div>
        <div>
          <p className="my-[0.25em]">Check out my other projects!</p>
          <div className="flex flex-wrap gap-x-2">
            {[
              'studmagcli',
              'startquiz',
              'nestjs-rest-api',
              'intcalc',
              'currconv',
            ].map((project, index) => (
              <ProjectBadge title={project} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
