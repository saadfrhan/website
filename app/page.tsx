import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<div className="w-full justify-between flex max-[810px]:flex-col drop-shadow-[0_0_15px_rgba(49,49,49,0.2)] dark:drop-shadow-[0_0_15px_rgba(49,49,49,0.2)] bg-gradient-to-b from-neutral-50/90 to-neutral-100/90 transition duration-300 dark:from-neutral-950/90 dark:to-neutral-800/90 lg:bg-gradient-to-br border space-y-2 bg-white min-[810px]:border-2 min-[810px]:rounded-3xl p-10 max-[810px]:p-5 max-[810px]:drop-shadow-none">
			<div>
				<h4 className="text-3xl md:text-4xl font-bold font-raleway text-gray-900 dark:text-white">Hey! it&apos;s me,</h4>
				<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-raleway text-gray-900 dark:text-white mt-2">Saad Farhan</h1>
				<h4 className="text-2xl md:text-3xl lg:text-4xl font-semibold font-raleway text-gray-700 dark:text-gray-300 mt-4">
					Frontend Developer | Web Designer
				</h4>
				<p className="mt-6 text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 font-medium font-nunitosans">
					*Bringing ideas to life with code and creativity.
				</p>
			</div>
			<div className="self-end">
				<Button size="xlg" className="font-nunitosans text-xl font-bold">
					CONNECT WITH ME
				</Button>
			</div>
		</div>
	);
}
