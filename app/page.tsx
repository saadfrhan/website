import Image from "next/image";

export default function Home() {
	return (
		<div>

			<div className="w-full justify-center flex flex-col drop-shadow-[0_0_15px_rgba(49,49,49,0.2)] dark:drop-shadow-[0_0_15px_rgba(49,49,49,0.2)] bg-gradient-to-b from-neutral-50/90 to-neutral-100/90 transition duration-300 dark:from-neutral-950/90 dark:to-neutral-800/90 lg:bg-gradient-to-br border space-y-2 bg-white min-[810px]:border-2 min-[810px]:rounded-3xl p-10 max-[810px]:p-5 max-[810px]:drop-shadow-none">
				<h4 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-bold font-raleway">Hey! it&apos;s me,</h4>
				<h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-9xl font-bold font-raleway">Saad Farhan</h1>
				<h4 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-5xl font-semibold font-raleway">
					Frontend Developer | Web Designer
				</h4>
				<p className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl font-medium font-nunitosans">
					*Bringing ideas to life with code and creativity.
				</p>

			</div>

		</div>
	);
}
