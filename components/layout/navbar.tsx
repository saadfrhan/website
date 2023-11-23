'use client';

import Link from 'next/link';
import { ThemeToggler } from '../theme-toggler';
import { usePathname } from 'next/navigation';
import { buttonVariants } from '../ui/button';

export default function Navbar() {
  const routes = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'About',
      path: '/about',
    },
  ];

  const pathname = usePathname();

  return (
    <header>
      <div className="max-w-2xl mx-auto flex items-center justify-between py-5">
        <div className="flex justify-between w-full max-sm:gap-y-2 max-sm:flex-col items-center gap-x-2 md:gap-x-8">
          <Link href="/" className="max-sm:self-start">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Saad Farhan
            </h3>
          </Link>
          <nav className="max-sm:self-end">
            <ul className="flex items-center gap-x-5 md:gap-x-8">
              <li>
                <ThemeToggler />
              </li>
              {routes.map((route) => (
                <li key={route.name}>
                  <Link
                    href={route.path}
                    className={buttonVariants({
                      variant: 'ghost',
                      className:
                        `hover:border-primary duration-300 border-[2px] border-transparent` +
                        (pathname === route.path
                          ? ' border-primary bg-accent'
                          : ''),
                    })}
                  >
                    {route.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
