"use client";

import { icons, projects } from "@/lib/constants";
import ProjectCard from "./project-card";
import { MultiSelectDropdown } from "./ui/multiselect-dropdown";
import { useState } from "react";

export default function Projects() {
    const [selectedValues, setSelectedValues] = useState<string[]>([]);
    return (
        <section className="space-y-6 pt-4" id="projects">
            <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
                Projects
            </h2>
            <p className="mt-4 space-y-6">
                <MultiSelectDropdown options={icons} onChange={(values) => {
                    setSelectedValues(values);
                }} optionType="tech" />
                {projects.filter((project) => {
                    if (selectedValues.length === 0) {
                        return true;
                    }
                    return project.tech.some((tech) => selectedValues.includes(tech));

                }).map((project, index) => (
                    <ProjectCard project={project} key={index} />
                ))}
            </p>
        </section>
    )
}