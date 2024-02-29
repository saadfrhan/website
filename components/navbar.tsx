import Link from 'next/link';

const navItems = {
	'/': {
		name: 'Home',
	},
	'/projects': {
		name: 'Projects',
	},
	'/timeline': {
		name: 'Timeline',
	},
	'/stuff': {
		name: 'Stuff',
	},
};

export function Navbar() {
	return (
		<aside className="-ml-[8px] mb-16 tracking-tight">
			<div className="lg:sticky lg:top-20">
				<nav
					className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
					id="nav"
				>
					<div className="flex flex-row flex-wrap space-x-0 pr-10 overflow-hidden">
						{Object.entries(navItems).map(([path, { name }]) => {
							return (
								<Link
									key={path}
									href={path}
									className="transition-all hover:text-primary dark:hover:text-primary flex align-middle relative py-2 px-3 rounded-md shadow-md hover:shadow-lg text-lg text-neutral-800 dark:text-neutral-200 font-bold transform hover:scale-105"
								>
									{name}
								</Link>
							);
						})}
					</div>



				</nav>
			</div>
		</aside>
	);
}