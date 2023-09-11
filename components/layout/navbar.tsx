import Logo from '@/icons/logo';
import Link from 'next/link';
import ThemeToggler from '../theme-toggler';

export default function Navbar() {
  return (
    <header>
      <div className="mx-auto flex items-center justify-between">
        <div className="flex items-center gap-x-2 md:gap-x-8">
          <Link href="/">
            <Logo />
          </Link>
          <nav>
            <ul className="flex items-center gap-x-2 md:gap-x-8">
              <li>
                <Link href="/about" className="hover:text-primary duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-primary duration-300"
                >
                  Projects
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <ThemeToggler />
      </div>
    </header>
  );
}
