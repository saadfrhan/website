import { groq } from 'next-sanity';
import client from './config';

export async function getJob() {
  return client.fetch(
    groq`*[_type == "job"]{
      _id,
      name,
      title,
      "logo": logo.asset->url,
      url,
      description,
      startDate,
      endDate,
    }`
  );
}
