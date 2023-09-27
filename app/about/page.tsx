import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { H2 } from '@/components/ui/h2';
import { H1 } from '@/components/ui/h1';
import { P } from '@/components/ui/p';
import Me from '/public/me.png';
import { profile } from '@/lib/constants';

export const metadata = {
  title: 'About',
  description:
    'Saad Farhan, your Jamstack wizard in Karachi, crafting the future of web development with expertise in JavaScript frameworks and a commitment to quality. 🚀🌟',
};

export default async function About() {
  return (
    <main>
      <div className="space-y-6 prose prose-invert">
        <section className="space-y-4">
          <Image
            src={Me}
            alt="Saad Farhan"
            width={120}
            height={120}
            className="rounded-full"
          />
          <H1>I&apos;m {profile.fullName}.</H1>

          <p>
            👋 Hi there! I'm your go-to Jamstack developer with a knack for
            staying updated on the latest tech trends.
          </p>

          <p>
            I thrive on finding innovative solutions to tough problems through
            hands-on experimentation. Quality is my priority, and I'm always
            eager to learn, adapt, and grow.
          </p>

          <p>
            🚀 What sets me apart is my expertise in JavaScript frameworks,
            particularly in front-end development. I specialize in crafting web
            apps using the cutting-edge Jamstack approach.
          </p>

          <p>
            I'm not only a solo achiever but also a team player, constantly
            striving to exceed limits and deliver top-notch outcomes.
          </p>

          <p>🛠️ My toolkit includes: </p>

          <ul>
            <li>Frontend magic with React and Next.js</li>
            <li>Smart state management using Redux Toolkit</li>
            <li>Content management through Contentful and Sanity</li>
            <li>Harnessing Netlify and Vercel serverless functions.</li>
            <li>Conversant in JavaScript and TypeScript</li>
            <li>
              Databases like FaunaDB, MongoDB, Vercel Postgres, PlanetScale, and
              NeonDB
            </li>
            <li>Command-line wizardry with Node.js</li>
            <li>Powering up with VS Code IDE</li>
            <li>GitHub as my version control sidekick</li>
          </ul>
        </section>

        <section className="max-w-2xl space-y-4">
          <H2>Expertise</H2>
          <div className="space-y-4">
            <P className="max-w-lg">
              I&apos;ve spent few years working on my skills. In no particular
              order, here are a few of them.
            </P>

            <div className="flex flex-wrap items-center gap-3">
              {profile.skills.map((skill, id) => (
                <Card
                  key={id}
                  className="hover:border-primary/50 duration-300 cursor-default px-2 py-1"
                >
                  {skill}
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
