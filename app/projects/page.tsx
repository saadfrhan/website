import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { ExternalLink } from 'lucide-react';
import Link from "next/link";

const projects = [
	{
		image: "pricing-ui",
		title: "Pricing UI",
		description: "Simple Pricing UI using TailwindCSS and Next.js.",
		tech: [{ label: "Next.js", name: 'nextjs' }, { label: "TailwindCSS", name: "tailwindcss" }],
		demo: "https://nextjs-tailwind-pricing-ui.vercel.app/"
	},
	{
		image: "virtual-lollipop",
		title: "Virtual Lollipop",
		description: "Virtual Lollipop App using FaunaDB, TailwindCSS and Next.js",
		tech: [{ label: "Next.js", name: 'nextjs' }, { label: "TailwindCSS", name: "tailwindcss" }, { label: "FaunaDB", name: 'faunadb' }],
		demo: "https://virtual-lollypop.vercel.app/"
	},
	{
		image: "friendly-logger",
		title: "Friendly Logger",
		description: "A colorful and customizable Node.js logging package for a user-friendly development experience",
		tech: [{ label: "Node.js", name: 'nodejs' }],
		demo: "https://virtual-lollypop.vercel.app/"
	}
]

export default function Page() {
	return (
		<div>
			<h2 className="font-medium text-2xl mb-8 tracking-tighter">
				Projects
			</h2>
			<div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-2">
				{projects.map((project, index) => (
					<Card key={index} className="h-fit rounded-[20px]">
						<CardContent className="p-0 flex flex-col gap-y-2">
							<Image src={`/images/${project.image}.png`} className="w-full rounded-t-[20px]" alt={project.description} width="3200" height="1718" />
							<div className="py-3 px-4">
								<div className="flex flex-col gap-y-2">
									<CardTitle>{project.title}</CardTitle>
									<CardDescription>{project.description}</CardDescription>
								</div>
								<div className="flex w-full justify-between items-center">
									<div className="flex gap-2 flex-wrap">
										{project.tech.map((t, idx) => (
											<div className="bg-white rounded-full border border-[#3c4043] w-6 h-6 flex justify-center items-center" key={idx}>
												<Image src={`/images/${t.name}.png`} width={16} height={16} alt={t.label} />
											</div>
										))}
									</div>
									<Link href={project.demo} className={buttonVariants({
										className: "hover:bg-transparent",
										variant: "ghost",
										size: 'icon'
									})}>
										<ExternalLink className="w-4 h-4" />
									</Link>
								</div>
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	)
}
