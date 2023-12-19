import { Data } from '@/lib/utils';
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from './ui/card';
import { buttonVariants } from './ui/button';
import { ExternalLink, GitFork, Star } from 'lucide-react';

export default function ProjectCard({ project }: {
	project: Data & {
		title: string;
	}
}) {
	return (
		<Card className="justify-start rounded-md text-left flex flex-col max-[490px]:gap-y-2 drop-shadow-[0_0_15px_rgba(49,49,49,0.2)] dark:drop-shadow-[0_0_15px_rgba(49,49,49,0.2)] bg-gradient-to-b from-neutral-50/90 to-neutral-100/90 transition duration-300 dark:from-neutral-950/90 dark:to-neutral-800/90 lg:bg-gradient-to-br border-primary/10">
			<CardHeader className="gap-0">
				<a
					href={`https://github.com/saadfrhan/${project.title}`}
					rel="noreferer noopener"
					target="_blank"
				>
					<CardTitle className="text-lg font-bold hover:underline items-center leading-none">
						{project.title}
					</CardTitle>
				</a>
				<CardDescription>{project.description}</CardDescription>
			</CardHeader>
			<CardFooter className="flex w-full items-end max-[490px]:flex-col justify-between">
				<div className='flex gap-4 items-center text-xs text-muted-foreground w-full'>
					<div className='flex items-center gap-1'>
						<span className="bg-[#3178c6] relative top-[1px] inline-block w-3 h-3 rounded-full border" />
						{project.language}
					</div>
					<a
						href={`https://github.com/saadfrhan/${project.title}/stargazers`}
						rel="noreferer noopener"
						className='hover:text-primary flex justify-center items-center'
						target="_blank">
						<Star className='w-4 h-4 mr-1' />
						{project.stargazers_count}
					</a>
					<a
						href={`https://github.com/saadfrhan/${project.title}/forks`}
						rel="noreferer noopener"
						className='hover:text-primary flex justify-center items-center'
						target="_blank">
						<GitFork className='w-4 h-4 mr-1' />
						{project.forks_count}
					</a>
				</div>
				<div className="flex gap-4 w-full justify-end">
					<a
						href={`https://github.com/saadfrhan/${project.title}`}
						rel="noreferer noopener"
						className={buttonVariants({
							variant: 'default',
							className:
								'hover:border-primary bg-primary duration-300 border-[2px] border-transparent flex gap-2 max-[490px]:h-auto max-[490px]:p-0 max-[490px]:bg-transparent max-[490px]:hover:underline max-[490px]:hover:bg-transparent max-[490px]:border-none max-[490px]:mt-3 max-[490px]:hover:border-none max-[490px]:text-foreground',
						})}
						target="_blank"
					>
						Repo <ExternalLink className="w-4 h-4" />
					</a>
					{project.homepage && (
						<a
							href={project.homepage}
							rel="noreferer noopener"
							className={buttonVariants({
								variant: 'default',
								className:
									'hover:border-primary bg-primary duration-300 border-[2px] border-transparent flex gap-2 max-[490px]:h-auto max-[490px]:p-0 max-[490px]:bg-transparent max-[490px]:hover:underline max-[490px]:hover:bg-transparent max-[490px]:border-none max-[490px]:mt-3 max-[490px]:hover:border-none max-[490px]:text-foreground',
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
