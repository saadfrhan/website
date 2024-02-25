"use client"

import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { usePathname } from "next/navigation";

const routes = [{ label: "HOME", route: "/" }, { label: "PROJECTS", route: "/projects" }, { label: "TIMELINE", route: "/timeline" }, { label: "STUFF", route: "/stuff" }]

export default function Navbar() {
	const pathname = usePathname();

	return (
		<header className="bg-primary flex justify-between text-white max-[810px]:rounded-none rounded-3xl px-10 py-5 max-[810px]:px-5 max-[810px]:py-2.5 max-[810px]:flex-col drop-shadow-[0_0_15px_rgba(49,49,49,0.2)] dark:drop-shadow-[0_0_15px_rgba(49,49,49,0.2)] bg-gradient-to-b duration-300 from-neutral-950/90 to-neutral-800/90 lg:bg-gradient-to-br border items-center">
			<h1 className="font-raleway text-2xl max-[331px]:text-xl font-semibold leading-loose">
				Saad Farhan
			</h1>
			<nav>
				<div className="flex items-center gap-x-8 max-md:gap-x-0 justify-center font-raleway max-md:flex-wrap">
					{routes.map((route, index) => (
						<Link key={index} href={route.route} className={buttonVariants({
							className: `min-[810px]:text-xl bg-transparent hover:bg-transparent max-md:p-2 min-[810px]:font-semibold ${route.route === pathname && "min-[810px]:font-extrabold"}`
						})}> {route.label}</Link>
					))}
				</div>
			</nav>
		</header>
	);
}