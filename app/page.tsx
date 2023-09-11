import Hero from '@/icons/Hero';
import Job from '@/components/job';
import { Profile } from '@/sanity/schemas/types/profile';
import {
  AiFillGithub as Github,
  AiFillLinkedin as Linkedin,
  AiOutlineTwitter as Twitter,
} from 'react-icons/ai';
import { createElement } from 'react';
import { buttonVariants } from '@/components/ui/button';
import { H1 } from '@/components/ui/h1';
import client from '@/sanity/config';
import { groq } from 'next-sanity';

async function getBasicProfileData() {
  return await client.fetch(
    groq`*[_type == "profile"]{
      _id,
      fullName,
      headline,
      bio,
      email,
      socialLinks,
    }`
  );
}

export default async function Home() {
  const profile: Profile[] = await getBasicProfileData();

  const icons = [Github, Linkedin, Twitter];

  return (
    <main className="w-full px-4 sm:px-8 mx-auto ">
      <section className="flex xl:flex-row flex-col xl:items-center items-start xl:justify-center justify-between gap-x-12 mb-16">
        {profile &&
          profile.map((data) => (
            <div key={data._id} className="lg:max-w-2xl max-w-2xl space-y-4">
              <H1>{data.headline}</H1>
              <p className="text-base leading-relaxed">{data.bio}</p>
              <ul className="flex items-center gap-x-6">
                {Object.entries(data.socialLinks)
                  .sort()
                  .map(([_, value]: any, id) => (
                    <li key={id}>
                      <a
                        href={value}
                        rel="noreferer noopener"
                        className={buttonVariants({
                          size: 'icon',
                          variant: 'ghost',
                        })}
                      >
                        {createElement(icons[id], { size: 24 })}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        <Hero />
      </section>
      <Job />
    </main>
  );
}
