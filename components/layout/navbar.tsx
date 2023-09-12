import Link from 'next/link';

export default function Navbar() {
  return (
    <header>
      <div className="max-w-2xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-x-2 md:gap-x-8">
          <nav>
            <ul className="flex items-center gap-x-5 md:gap-x-8">
              <li>
                <Link href="/" className="hover:text-primary duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary duration-300">
                  About
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
      </div>
    </header>
  );
}
