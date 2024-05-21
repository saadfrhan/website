import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-dvh flex flex-col items-center justify-center">
      <h1 className="text-heading font-extrabold text-3xl">Coming Soon</h1>
      <div className="text-foreground text-sm mt-2 space-x-2">
        <Link
          href="https://saadfarhan-old.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-link p-0 underline-offset-4 hover:underline"
        >
          Old site
        </Link>
        <Link
          href="https://saadfarhan-bio.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-link p-0 underline-offset-4 hover:underline"
        >
          Bio site
        </Link>
      </div>
    </div>
  );
}
