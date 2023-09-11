import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { File, Mail } from 'lucide-react';
import { Profile } from '@/sanity/schemas/types/profile';
import { buttonVariants } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { H2 } from '@/components/ui/h2';
import client from '@/sanity/config';
import { groq } from 'next-sanity';
import { H1 } from '@/components/ui/h1';
import { P } from '@/components/ui/p';

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
      address,
      fullBio,
      email,
      resumeURL,
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
              <div className="space-y-3">
                <Image
                  src="https://pbs.twimg.com/profile_images/1693998394971443200/u1Ot12Xn_400x400.jpg"
                  alt="Saad Farhan"
                  width={120}
                  height={120}
                  // facebook like profile picture
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-extrabold text-xl">Saad Farhan</h3>
                  <a
                    href="https://twitter.com/saadfarhan547"
                    rel="noreferer noopener"
                    className="text-muted-foreground hover:underline"
                  >
                    @saadfarhan547
                  </a>
                </div>
              </div>
              <H1>
                I&apos;m {data.fullName}. I live in {data.address}, where I
                design the future.
              </H1>

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

            <section className="max-w-2xl space-y-8">
              <h1 className="font-bold text-2xl tracking-tighter">Expertise</h1>
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
