import { buttonVariants } from '@/components/ui/button';
import { TooltipProvider } from '@/components/ui/tooltip';
import { TooltipWrapper } from '@/lib/utils';
import { profile } from '@/lib/constants';
import Projects from '@/components/projects';
import Image from 'next/image';
import Me from '/public/me.png'
import GetInTouch from '@/components/get-in-touch';
import Anchor from '@/components/anchor';
import { GithubIcon, LinkedinIcon, LucideIcon } from 'lucide-react';

export default async function Home() {
	return (
		<main className="space-y-2 prose prose-neutral dark:prose-invert pb-8">
			<section className="flex flex-col">
				<h1>
					Hi, I&#39;m {profile.fullName} 🌟
				</h1>

				<div className="flex gap-x-6 items-center max-md:flex-col">
					<Image
						src={Me}
						alt="Saad Farhan"
						width={305}
						height={305}
						className="rounded-md w-52 max-[320px]:w-full object-cover mb-4 md:w-64 md:h-64 lg:mb-0"
					/>
					<div>
						<h3>Welcome to my digital space!</h3>
						<p>
							I&#39;m Saad Farhan, a passionate Fullstack developer based in Karachi. I take pride in writing clean and simple code, proficient in various programming languages. Keeping up with the latest in the tech world, I bring a team-friendly and detailed approach to projects. My goal is to create straightforward and reliable software that meets user needs.
						</p>
					</div>
				</div>

				<div className='flex gap-4'>
					{Object.entries(profile.links)
						.sort()
						.map(([label, value], id) => {
							const icon: {
								[x: string]: JSX.Element
							} = {
								"GitHub": <GithubIcon />,
								"LinkedIn": <LinkedinIcon />
							}
							return (
								<Anchor
									href={value}
									key={id}
									className={buttonVariants({
										variant: 'secondary',
										size: 'icon',
										className: 'no-underline border-neutral-700 border'
									})}
								>
									{icon[label]}
								</Anchor>
							);
						})}
				</div>
			</section>
			<Projects />
			<GetInTouch />
			<p className='border-t pt-4'>
				Made with <Anchor href="https://nextjs.org">Next.js</Anchor>, <Anchor href='https://tailwindcss.com'>Tailwind CSS</Anchor>, and <Anchor href='https://typescriptlang.org'>TypeScript</Anchor> 🖤
			</p>
		</main>
	);
}
