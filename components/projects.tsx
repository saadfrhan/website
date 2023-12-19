import { projects } from "@/lib/constants";
import ProjectCard from "./project-card";
import { getRepositoryInfo } from "@/lib/utils";

export default function Projects() {
	return (
		<section className="space-y-6 pt-4" id="projects">
			<h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
				Projects
			</h2>
			<div className="mt-4 space-y-6">
				{projects.map(async (project, index) => {
					const data = await getRepositoryInfo(project);
					if (!data) {
						return 'Error'
					}
					return <ProjectCard project={{ ...data, title: project }} key={index} />
				})}
			</div>
		</section>
	)
}