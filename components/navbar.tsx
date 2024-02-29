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
	'https://www.dropbox.com/scl/fi/ghtqqnmupayyju2l19v7l/cv.pdf?rlkey=6cg5eemygrp62awge7vgtuu5y&dl=0': {
		name: 'Resume',
	},
};

export function NavItems(
	{ onClick }:
		{ onClick?: () => void }
) {
	const items = Object.entries(navItems)
	return <div className="flex flex-row max-sm:mt-3 w-full max-sm:flex-col space-x-0 overflow-hidden sm:justify-end">
		{items.map(([path, { name }], idx) => {
			return (
				<Link
					key={path}
					onClick={onClick}
					href={path}
					target={name === "Resume" ? "_blank" : "_self"}
					className={`transition-all hover:text-primary dark:hover:text-primary flex align-middle relative py-2 px-3 max-sm:w-full max-sm:hover:bg-secondary max-sm:transition-none max-sm:flex shadow-md hover:shadow-lg text-lg text-neutral-800 dark:text-neutral-200 font-bold transform sm:hover:scale-105 ${idx === 0 ? "max-sm:rounded-t-md" : idx === (items.length - 1) && "max-sm:rounded-b-md"} ${idx === (items.length - 1) ? "max-sm:border" : "max-sm:border-t max-sm:border-x"}`}
				>
					{name}
				</Link>
			);
		})}
	</div>
}

export function Navbar() {

	return (
		<aside className="mb-16 max-sm:mb-6 max-sm:hidden tracking-tight">
			<div className="lg:sticky lg:top-20">
				<nav
					className="flex gap-y-4 w-full items-start relative px-0 pb-0 fade md:overflow-auto justify-between scroll-pr-6 md:relative"
					id="nav"
				>

					<h1 className="text-4xl max-sm:text-2xl font-bold">saad.</h1>

					<NavItems />



				</nav>
			</div>
		</aside>
	);
}