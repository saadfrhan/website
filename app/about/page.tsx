import Image from 'next/image';
import { H1 } from '@/components/ui/h1';
import Me from '/public/me.png';
import { profile } from '@/lib/constants';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'About',
  description:
    'Saad Farhan, your Jamstack wizard in Karachi, crafting the future of web development with expertise in JavaScript frameworks and a commitment to quality. 🚀🌟',
};

export default function About() {
  return (
    <div className="container mx-auto p-8 prose dark:prose-invert max-w-2xl">
      <section className="flex flex-col">
        <H1 className="text-3xl font-bold">Hi, I'm {profile.fullName} 🌟🚀🎉</H1>


        <div className="text-lg">
          <Image
            src={Me}
            alt="Saad Farhan"
            width={250}
            height={250}
            className="rounded-md max-sm:w-full relative float-left mr-8 max-sm:mb-8"
          />
          <p className='mt-0'>
            Welcome to my digital space! I'm a passionate Fullstack developer based in Karachi, dedicated to shaping the future of web development.
          </p>

          <p>
            Armed with expertise in JavaScript frameworks, I embark on a journey of continuous learning, innovation, and problem-solving. Quality is my mantra.
          </p>

          <p>
            🚀 Specializing in front-end development, I leverage cutting-edge technologies to craft engaging web applications. As a collaborative team player, I consistently push boundaries for exceptional outcomes.
          </p>

          <p>🛠️ My toolkit includes:</p>

          <ul className="list-disc pl-6">
            <li>React and Next.js for enchanting frontend experiences</li>
            <li>Redux Toolkit for smart state management</li>
            <li>Contentful and Sanity for seamless content management</li>
            <li>Netlify and Vercel for powerful serverless functions</li>
            <li>JavaScript and TypeScript proficiency</li>
            <li>
              Databases like FaunaDB, MongoDB, Vercel Postgres, PlanetScale, and NeonDB
            </li>
            <li>Node.js for command-line wizardry</li>
            <li>VS Code as my coding sanctuary</li>
            <li>GitHub, my version control accomplice</li>
          </ul>
        </div>
      </section>
      <div
        className='flex justify-end'
      >
        <Button size="lg">
          Check out my Projects
        </Button>
      </div>
    </div>
  );
};
