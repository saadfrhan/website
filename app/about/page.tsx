import Image from 'next/image';
import Me from '/public/me.png';
import { profile } from '@/lib/constants';
import { Button, buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

export const metadata = {
	title: 'About',
	description:
		'Saad Farhan, your Jamstack wizard in Karachi, crafting the future of web development with expertise in JavaScript frameworks and a commitment to quality. 🚀🌟',
};

export default function About() {
	return (
		<div className="max-sm:p-0 prose dark:prose-invert flex flex-col">
			<section className="flex flex-col">
				<h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
					Hi, I&#39;m {profile.fullName} 🌟
				</h1>

				<div className="text-lg">
					<Image
						src={Me}
						alt="Saad Farhan"
						width={250}
						height={250}
						className="rounded-md max-sm:w-full relative float-left mr-8 max-sm:mb-8"
					/>
					<p className='mt-0'>
						Welcome to my digital space! I&#39;m a passionate Fullstack developer based in Karachi, dedicated to shaping the future of web development.
					</p>

					<p>
						Armed with expertise in JavaScript frameworks, I embark on a journey of continuous learning, innovation, and problem-solving. Quality is my mantra.
					</p>

					<p>
						🚀 Specializing in front-end development, I leverage cutting-edge technologies to craft engaging web applications. As a collaborative team player, I consistently push boundaries for exceptional outcomes.
					</p>
				</div>
			</section>

			<Link href="/#projects" className={buttonVariants({
				size: 'lg',
				className: 'self-end no-underline'
			})}>
				Check out my Projects
			</Link>
		</div>
	);
};