"use client";

import { projects } from "@/lib/constants";
import ProjectCard from "./project-card";

export default function Projects() {
    return (
        <section className="space-y-6 pt-4" id="projects">
            <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
                Projects
            </h2>
            <p className="mt-4 space-y-6">
                {projects.map((project, index) => (
                    <ProjectCard project={project} key={index} />
                ))}
            </p>
        </section>
    )
}