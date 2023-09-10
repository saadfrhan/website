import Logo from 'icons/logo';
import Link from 'next/link';
import ThemeToggler from '../theme-toggler';

export default function Navbar() {
  return (
    <header className="md:py-6 py-3 border-b border z-30">
      <div className="mx-auto flex items-center px-4 justify-between w-full min-[1400px]:w-[1400px] max-w-7xl">
        <div className="flex items-center gap-x-4 md:gap-x-8">
          <Link href="/">
            <Logo />
          </Link>
          <nav>
            <ul className="flex items-center gap-x-4 md:gap-x-8">
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
              <li>
                <Link href="/blog" className="hover:text-primary duration-300">
                  Blog
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
