import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { Profile } from '@/sanity/schemas/types/profile';
import { Card } from '@/components/ui/card';
import { H2 } from '@/components/ui/h2';
import client from '@/sanity/config';
import { groq } from 'next-sanity';
import { H1 } from '@/components/ui/h1';
import { P } from '@/components/ui/p';
import Me from '/public/me.png';

export const metadata = {
  title: 'About',
  description:
    'Saad Farhan, your Jamstack wizard in Karachi, crafting the future of web development with expertise in JavaScript frameworks and a commitment to quality. 🚀🌟',
};

async function getMainProfileData() {
  return client.fetch(
    groq`*[_type == "profile"]{
      _id,
      fullName,
      fullBio,
      skills
    }`
  );
}

export default async function About() {
  const profile: Profile[] = await getMainProfileData();

  return (
    <main>
      {profile &&
        profile.map((data) => (
          <div key={data._id} className="space-y-6">
            <section className="space-y-4">
              <Image
                src={Me}
                alt="Saad Farhan"
                width={120}
                height={120}
                className="rounded-full"
              />
              <H1>I&apos;m {data.fullName}.</H1>

              <div className="flex flex-col gap-y-3 leading-relaxed">
                <PortableText
                  value={data.fullBio}
                  components={{
                    listItem: {
                      bullet: ({ children }) => (
                        <li className="list-disc ml-10">{children}</li>
                      ),
                    },
                  }}
                />
              </div>
            </section>

            <section className="max-w-2xl space-y-4">
              <H2>Expertise</H2>
              <div className="space-y-4">
                <P className="max-w-lg">
                  I&apos;ve spent few years working on my skills. In no
                  particular order, here are a few of them.
                </P>

                <div className="flex flex-wrap items-center gap-3">
                  {data.skills.map((skill, id) => (
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
        ))}
    </main>
  );
}
