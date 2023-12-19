import { buttonVariants } from '@/components/ui/button';
import { TooltipProvider } from '@/components/ui/tooltip';
import { TooltipWrapper } from '@/lib/utils';
import { profile } from '@/lib/constants';
import Projects from '@/components/projects';

export default async function Home() {
	return (
		<main className="space-y-6 pb-8">
			<section className="flex items-start justify-between xl:items-center xl:justify-center">
				<div className="space-y-4">
					<div className="relative flex w-full items-center justify-center gap-4 lg:justify-start">
						<div className="absolute left-1/2 top-1/2 -z-10 max-sm:w-32 hidden h-56 w-56 -translate-x-[15%] -translate-y-[50%] rounded-full bg-gradient-to-br from-blue-500 to-purple-500/20 blur-3xl dark:block animate-pulse"></div>
						<div className="absolute right-1/2 top-1/2 -z-10 hidden h-56 w-56 -translate-y-[40%] rounded-full bg-gradient-to-br from-pink-500 to-red-500/20 blur-3xl dark:block animate-pulse"></div>
						<h1 className="scroll-m-20 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-extrabold tracking-tight text-white animate__animated animate__fadeInUp">
							<span className="relative z-10">{profile.headline}</span>
						</h1>
					</div>


					<p className="[&:not(:first-child)]:mt-6 text-base leading-relaxed">{profile.bio}</p>
					<div className="flex flex-wrap items-center gap-2">
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
														`h-12 w-12 hover:border-[2px] hover:border-primary duration-300`,
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
			<Projects />
		</main>
	);
}
