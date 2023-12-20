import Anchor from "./anchor";

export default function GetInTouch() {
	return (
		<section className="pt-4" id="projects">
			<h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-4">
				Get in touch
			</h2>
			<p>
				Do you have a job opportunity or an idea you would like to discuss? Feel free to reach me at{" "}
				<Anchor
					href="https://x.com/saadfarhan547"
				>
					Twitter
				</Anchor>,{" "}
				<Anchor
					href="https://github.com/saadfrhan"

				>
					GitHub
				</Anchor>,{" "}
				and{" "}
				<Anchor
					href="https://linkedin.com/in/saad-farhan"
				>
					LinkedIn
				</Anchor>.
			</p>
		</section>
	)
}