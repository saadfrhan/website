"use client";

import { useState } from "react";
import { NavItems } from "./navbar";
import { Button } from "./ui/button";
import { MenuIcon, X } from "lucide-react";

export function MobileNav() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<aside className="mb-16 sm:hidden max-sm:mb-6 tracking-tight">
			<div className="lg:sticky lg:top-20">
				<nav
					className="flex gap-y-4 w-full items-start relative px-0 pb-0 fade md:overflow-auto justify-between scroll-pr-6 md:relative"
					id="nav"
				>

					<Button size="icon" onClick={() => setIsOpen(!isOpen)}>
						{isOpen ? <X className="w-4 h-4" /> : <MenuIcon className="h-4 w-4" />}
					</Button>

					<h1 className="text-4xl max-sm:text-2xl font-bold">saad.</h1>




				</nav>
				{isOpen && <NavItems onClick={() => setIsOpen(false)} />}
			</div>
		</aside>
	);
}