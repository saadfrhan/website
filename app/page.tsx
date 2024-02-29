import { Button } from "@/components/ui/button";
import { FaDiscord as DiscordIcon, FaLinkedin as LinkedinIcon, FaGithub as GithubIcon } from 'react-icons/fa'
import { SiGmail as GmailIcon } from "react-icons/si";
import { FaFilePdf as PdfIcon } from "react-icons/fa6";

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
					a Jamstack developer specializing in React and Next.js. Passionate about tech trends, I prioritize quality and innovation, excelling both independently and as a team player for exceptional results.
				</p>
			</div>
			<div className="flex gap-2 flex-wrap">
				<Button size="icon" variant="ghost" className="hover:bg-transparent">
					<DiscordIcon className="h-8 w-8" />
				</Button>
				<Button size="icon" variant="ghost" className="hover:bg-transparent">
					<LinkedinIcon className="h-8 w-8" />
				</Button>
				<Button size="icon" variant="ghost" className="hover:bg-transparent">
					<GmailIcon className="h-8 w-8" />
				</Button>
				<Button size="icon" variant="ghost" className="hover:bg-transparent">
					<GithubIcon className="h-8 w-8" />
				</Button>
				<Button size="icon" variant="ghost" className="hover:bg-transparent">
					<PdfIcon className="h-8 w-8" />
				</Button>
			</div>
		</div>
	);
}
