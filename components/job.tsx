import Image from 'next/image';
import { Job } from '@/sanity/schemas/types/job';
import { getJob } from '@/sanity/queries';
import { H2 } from './ui/h2';

export default async function Job() {
  const jobs: Job[] = await getJob();

  return (
    <section className="w-fit mx-auto space-y-8">
      <div>
        <H2>Work Experience</H2>
      </div>

      <div className="flex flex-col gap-y-12">
        {jobs.map((data) => (
          <div
            key={data._id}
            className="flex flex-col items-start lg:gap-x-6 gap-y-4 max-w-2xl relative"
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
