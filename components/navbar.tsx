"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { MenuIcon, X } from "lucide-react";
import Link from "next/link";
import { NavItems } from "./nav-items";

export function Navbar() {
  return (
    <aside className="mb-16 max-sm:mb-6 max-sm:hidden tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex gap-y-4 w-full items-start relative px-0 pb-0 fade justify-between scroll-pr-6 md:relative"
          id="nav"
        >
          <h1 className="text-4xl max-sm:text-2xl font-bold transition-all hover:text-primary dark:hover:text-primary flex items-center align-middle relative max-sm:w-full max-sm:hover:bg-secondary max-sm:transition-none max-sm:flex shadow-md hover:shadow-lg text-neutral-800 dark:text-neutral-200 transform sm:hover:scale-105">
            saad.
          </h1>

          <NavItems />
        </nav>
      </div>
    </aside>
  );
}

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <aside className="mb-16 sm:hidden max-sm:mb-6 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex gap-y-4 w-full items-start relative px-0 pb-0 justify-between scroll-pr-6 md:relative"
          id="nav"
        >
          <Link
            href="/"
            className="text-4xl cursor-pointer max-sm:text-2xl font-bold"
          >
            saad.
          </Link>

          <Button size="icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <MenuIcon />}
          </Button>
        </nav>
        {isOpen && <NavItems onClick={() => setIsOpen(false)} />}
      </div>
    </aside>
  );
}
