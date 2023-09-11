import Image from 'next/image';
import { Job } from '@/sanity/schemas/types/job';
import { getJob } from '@/sanity/queries';
import { H2 } from './ui/h2';

export default async function Job() {
  const jobs: Job[] = await getJob();

  return (
    <section className="w-fit max-sm:px-4 mx-auto space-y-8">
      <div>
        <H2>Work Experience</H2>
      </div>

      <div className="flex flex-col gap-y-12">
        {jobs.map((data) => (
          <div
            key={data._id}
            className="flex items-start lg:gap-x-6 gap-x-4 max-w-2xl relative before:absolute before:bottom-0 before:top-[4.5rem] before:left-7 before:w-[1px] before:h-[calc(100%-50px)] before:bg-zinc-800"
          >
            <a
              href={data.url}
              rel="noreferrer noopener"
              className="min-h-[60px] min-w-[60px] rounded-md overflow-clip relative"
            >
              <Image
                src={data.logo}
                className="object-cover"
                alt={`${data.name} logo`}
                fill
              />
            </a>
            <div className="flex flex-col items-start">
              <h3 className="text-xl font-bold">{data.name}</h3>
              <p>{data.title}</p>
              <small className="text-sm text-zinc-500 mt-2 tracking-widest uppercase">
                {data.startDate.toString()} -{' '}
                {data.endDate ? data.endDate.toString() : 'Present'}
              </small>
              <p className="text-base my-4">{data.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
