import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { FaGithub as GithubIcon } from "react-icons/fa";

const projects = [
  {
    image: "pricing-ui",
    title: "Pricing UI",
    description: "Simple Pricing UI using TailwindCSS and Next.js.",
    tech: [
      { label: "Next.js", name: "nextjs" },
      { label: "TailwindCSS", name: "tailwindcss" },
    ],
    demo: "https://nextjs-tailwind-pricing-ui.vercel.app/",
  },
];

export const metadata = {
  title: "Projects",
};

export default function Page() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between w-full">
        <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
          Projects
        </h2>
        <Link
          href="https://github.com/saadfrhan"
          target="_blank"
          className={buttonVariants({
            variant: "outline",
            size: "icon",
          })}
        >
          <GithubIcon className="w-4 h-4" />
        </Link>
      </div>
      <div className="grid grid-cols-3 h-auto max-md:grid-cols-1 max-lg:grid-cols-2 gap-2">
        {projects.map((project, index) => (
          <Card key={index} className="p-0">
            <CardHeader className="p-0">
              <Image
                src={`/images/${project.image}.png`}
                className="w-full rounded-t-md"
                alt={project.description}
                width="3200"
                height="1718"
              />
            </CardHeader>
            <CardContent className="flex flex-col p-3 gap-y-2 justify-between lg:h-32">
              <div className="flex flex-col gap-y-2">
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="text-sm">
                  {project.description}
                </CardDescription>
              </div>
              <div className="flex w-full self-end items-end justify-between">
                <div className="flex gap-2 flex-wrap">
                  {project.tech.map((t, idx) => (
                    <div
                      className="bg-white rounded-full border border-[#3c4043] w-6 h-6 flex justify-center items-center"
                      key={idx}
                    >
                      <Image
                        src={`/images/${t.name}.png`}
                        width={16}
                        height={16}
                        alt={t.label}
                      />
                    </div>
                  ))}
                </div>
                <Link
                  href={project.demo}
                  target="_blank"
                  className={buttonVariants({
                    className: "hover:bg-transparent p-0 w-fit h-fit",
                    variant: "ghost",
                    size: "icon",
                  })}
                >
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
