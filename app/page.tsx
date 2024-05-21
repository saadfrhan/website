import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-dvh flex flex-col items-center justify-center space-y-2">
      <h1 className="text-heading font-extrabold text-3xl">Coming Soon</h1>
      <Link
        href="https://saadfarhan-bio.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        className="text-link p-0 text-sm underline-offset-4 hover:underline"
      >
        Bio site
      </Link>
    </div>
  );
}
