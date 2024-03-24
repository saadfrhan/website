"use client";

import { navItems } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavItems({ onClick }: { onClick?: () => void }) {
  const items = Object.entries(navItems);
  const pathname = usePathname();
  return (
    <div className="flex flex-row max-sm:mt-3 w-full max-sm:flex-col space-x-0 overflow-hidden sm:justify-end">
      {items.map(([path, { name }], idx) => {
        return (
          <Link
            key={path}
            onClick={onClick}
            href={path}
            target={name === "Resume" ? "_blank" : "_self"}
            className={cn(
              `transition-all hover:text-primary dark:hover:text-primary flex items-center align-middle relative py-2 px-3 max-sm:w-full max-sm:hover:bg-secondary max-sm:transition-none max-sm:flex shadow-md hover:shadow-lg text-lg font-bold transform sm:hover:scale-105 ${
                idx === 0
                  ? "max-sm:rounded-t-md"
                  : idx === items.length - 1 && "max-sm:rounded-b-md"
              } ${
                idx === items.length - 1
                  ? "max-sm:border"
                  : "max-sm:border-t max-sm:border-x"
              }`,
              pathname === path && "text-primary max-sm:bg-secondary"
            )}
          >
            {name}{" "}
            {name === "Resume" && <ArrowUpRight className="h-6 w-6 ml-2" />}
          </Link>
        );
      })}
    </div>
  );
}
