import { Profile } from '@/sanity/schemas/types/profile';
import {
  AiFillGithub as Github,
  AiFillLinkedin as Linkedin,
} from 'react-icons/ai';
import { BsDiscord as Discord } from 'react-icons/bs';
import { buttonVariants } from '@/components/ui/button';
import { H1 } from '@/components/ui/h1';
import client from '@/sanity/config';
import { groq } from 'next-sanity';
import { TooltipProvider } from '@/components/ui/tooltip';
import { TooltipWrapper } from '@/lib/utils';
import { FileText, Mail } from 'lucide-react';
import { P } from '@/components/ui/p';
import ProjectCards from '@/components/project-cards';
import { H2 } from '@/components/ui/h2';

async function getBasicProfileData() {
  return await client.fetch(
    groq`*[_type == "profile"][0]{
      headline,
      bio,
      email,
      socialLinks,
      resumeURL,
      _type,
      email
    }`
  );
}

async function getProjects() {
  return client.fetch(
    groq`*[_type == "project"]{
      _id,
      title,
      "slug": slug.current,
      tagline,
      demoURL,
      tech,
      repoURL
    }`
  );
}

export default async function Home() {
  const profile: Profile = await getBasicProfileData();
  const projects = await getProjects();

  const icons = [
    { icon: Discord, label: 'Discord' },
    { icon: Github, label: 'GitHub' },
    { icon: Linkedin, label: 'LinkedIn' },
  ];

  return (
    <main className="space-y-6">
      <section className="flex xl:items-center items-start xl:justify-center justify-between">
        <div key={profile._id} className="space-y-4">
          <H1>{profile.headline}</H1>
          <P className="text-base leading-relaxed">{profile.bio}</P>
          <div className="flex items-center flex-wrap gap-x-2">
            <TooltipProvider>
              {Object.entries(profile.socialLinks)
                .sort()
                .map(([_, value]: any, id) => {
                  const { icon: Icon, label } = icons[id];
                  return (
                    <TooltipWrapper key={id} label={label}>
                      <a
                        href={value}
                        rel="noreferer noopener"
                        className={buttonVariants({
                          size: 'icon',
                          variant: 'ghost',
                        })}
                      >
                        <Icon size={24} />
                      </a>
                    </TooltipWrapper>
                  );
                })}
              <TooltipWrapper label="My CV">
                <a
                  href={profile.resumeURL}
                  rel="noreferer noopener"
                  className={buttonVariants({
                    size: 'icon',
                    variant: 'ghost',
                  })}
                >
                  <FileText size={24} />
                </a>
              </TooltipWrapper>
              <TooltipWrapper label="Email me">
                <a
                  href={profile.email}
                  rel="noreferer noopener"
                  className={buttonVariants({
                    size: 'icon',
                    variant: 'ghost',
                  })}
                >
                  <Mail size={24} />
                </a>
              </TooltipWrapper>
            </TooltipProvider>
          </div>
        </div>
      </section>
      <section className="space-y-4">
        <H2>Projects</H2>
        <div className="space-y-4">
          <P className="max-w-lg">
            I love building things. Here are a few of my projects.
          </P>
        </div>
        <ProjectCards projects={projects} />
      </section>
    </main>
  );
}
