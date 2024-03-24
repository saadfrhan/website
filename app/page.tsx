import { buttonVariants } from "@/components/ui/button";
import { FaGithub as GithubIcon } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="text-left">
        <h2 className="text-4xl max-sm:text-2xl font-bold">
          Hey! it&apos;s me.
        </h2>
        <h1 className="mt-2 max-sm:text-4xl font-bold text-6xl  text-white">
          Saad Farhan
        </h1>
        <p className="mt-3 text-lg font-medium max-w-lg">
          a Jamstack developer specializing in React and Next.js. Passionate
          about tech trends, I prioritize quality and innovation, excelling both
          independently and as a team player for exceptional results.
        </p>
      </div>
      <div className="flex gap-2 flex-wrap">
        <Link
          href="https://discordapp.com/users/saad."
          target="_blank"
          className={buttonVariants({
            size: "icon",
            variant: "ghost",
            className:
              "hover:bg-transparent sm:hover:scale-110 sm:hover:duration-300 sm:hover:transition-all",
          })}
        >
          <Image
            src="/images/discord.png"
            alt="Discord"
            width="32"
            height="32"
            className="h-8 w-8"
          />
        </Link>
        <Link
          href="https://linkedin.com/in/saad-farhan"
          target="_blank"
          className={buttonVariants({
            size: "icon",
            variant: "ghost",
            className:
              "hover:bg-transparent sm:hover:scale-110 sm:hover:duration-300 sm:hover:transition-all",
          })}
        >
          <Image
            src="/images/linkedin.png"
            alt="LinkedIn"
            width="32"
            height="32"
            className="h-8 w-8"
          />
        </Link>
        <Link
          href="mailto:saadfarhan347@gmail.com"
          target="_blank"
          className={buttonVariants({
            size: "icon",
            variant: "ghost",
            className:
              "hover:bg-transparent sm:hover:scale-110 sm:hover:duration-300 sm:hover:transition-all",
          })}
        >
          <Image
            src="/images/gmail.png"
            alt="Gmail"
            width="32"
            height="32"
            className="h-8 w-8"
          />
        </Link>
        <Link
          href="https://github.com/saadfrhan"
          target="_blank"
          className={buttonVariants({
            size: "icon",
            variant: "ghost",
            className:
              "hover:bg-transparent sm:hover:scale-110 sm:hover:duration-300 sm:hover:transition-all",
          })}
        >
          <GithubIcon className="h-8 w-8" />
        </Link>
      </div>
    </div>
  );
}
