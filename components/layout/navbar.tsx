import Link from 'next/link';

export default function Navbar() {
  return (
    <header>
      <div className="max-w-2xl mx-auto flex items-center justify-between border-b py-5">
        <div className="flex justify-between w-full max-sm:gap-y-2 max-sm:flex-col items-center gap-x-2 md:gap-x-8">
          <Link href="/" className="max-sm:self-start">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Saad Farhan
            </h3>
          </Link>
          <nav className="max-sm:self-end">
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
