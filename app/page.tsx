import Job from '@/components/job';
import { Profile } from '@/sanity/schemas/types/profile';
import {
  AiFillGithub as Github,
  AiFillLinkedin as Linkedin,
  AiOutlineTwitter as Twitter,
} from 'react-icons/ai';
import { buttonVariants } from '@/components/ui/button';
import { H1 } from '@/components/ui/h1';
import client from '@/sanity/config';
import { groq } from 'next-sanity';
import { TooltipProvider } from '@/components/ui/tooltip';
import { TooltipWrapper } from '@/lib/utils';
import { FileText, Mail } from 'lucide-react';

async function getBasicProfileData() {
  return await client.fetch(
    groq`*[_type == "profile"][0]{
      _id,
      headline,
      bio,
      email,
      socialLinks,
      resumeURL,
      email
    }`
  );
}

export default async function Home() {
  const profile: Profile = await getBasicProfileData();

  const icons = [
    { icon: Github, label: 'GitHub' },
    { icon: Linkedin, label: 'LinkedIn' },
    { icon: Twitter, label: 'Twitter' },
  ];

  return (
    <main>
      <section className="flex xl:items-center items-start xl:justify-center justify-between mb-16">
        <div key={profile._id} className="max-w-2xl space-y-4">
          <H1>{profile.headline}</H1>
          <p className="text-base leading-relaxed">{profile.bio}</p>
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
      <Job />
    </main>
  );
}
