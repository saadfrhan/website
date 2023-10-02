'use client';

import Link from 'next/link';
import { ThemeToggler } from '../theme-toggler';

export default function Navbar() {
  return (
    <div className="flex justify-between w-full items-center max-w-2xl mx-auto py-5">
      <Link
        href="/"
        className="scroll-m-20 text-2xl font-semibold tracking-tight "
      >
        Saad Farhan
      </Link>
      <ThemeToggler />
    </div>
  );
}
