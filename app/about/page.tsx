import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { File, Mail } from 'lucide-react';
import { Profile } from 'sanity-cms/schemas/types/profile';
import { getMainProfileData } from 'sanity-cms/queries';
import { buttonVariants } from 'components/ui/button';
import { Card } from 'components/ui/card';
import { H2 } from 'components/ui/h2';

export default async function About() {
  const profile: Profile[] = await getMainProfileData();

  return (
    <main className="container">
      {profile &&
        profile.map((data) => (
          <div key={data._id}>
            <section className="grid lg:grid-cols-2 grid-cols-1 gap-x-6 justify-items-center">
              <div className="order-2 lg:order-none">
                <h1 className="lg:text-5xl text-4xl lg:leading-tight basis-1/2 font-bold mb-8">
                  I&apos;m {data.fullName}. I live in {data.address}, where I
                  design the future.
                </h1>

                <div className="flex flex-col gap-y-3 dark:text-muted-foreground leading-relaxed">
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
              </div>

              <div className="flex flex-col lg:justify-self-center justify-self-start gap-y-8 lg:order-1 order-none mb-12">
                <div>
                  <Image
                    className="rounded-2xl mb-4 object-cover max-h-96 min-h-96 bg-top bg-background"
                    src={data.profileImage.image}
                    width={400}
                    height={400}
                    quality={100}
                    alt={data.profileImage.alt}
                  />

                  <a
                    href={`${data.resumeURL}?dl=${data.fullName}_resume`}
                    className={buttonVariants({
                      className: 'gap-x-2 w-full',
                      variant: 'outline',
                    })}
                  >
                    <File className="text-base" /> Open Resumé
                  </a>
                </div>

                <ul>
                  <li>
                    <a
                      href={`mailto:${data.email}`}
                      className="flex items-center gap-x-2 hover:text-primary duration-300"
                    >
                      <Mail className="text-lg" />
                      {data.email}
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            <section className="mt-24 max-w-2xl space-y-4">
              <H2>Expertise</H2>
              <p className="dark:text-muted-foreground max-w-lg">
                I&apos;ve spent few years working on my skills. In no particular
                order, here are a few of them.
              </p>

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
            </section>
          </div>
        ))}
    </main>
  );
}
