import { groq } from "next-sanity";
import client from "./config";

export async function getBasicProfileData() {
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

export async function getMainProfileData() {
  return client.fetch(
    groq`*[_type == "profile"]{
      _id,
      fullName,
      profileImage {
        alt, 
        "image": asset->url
      },
      address,
      fullBio,
      email,
      resumeURL,
      skills
    }`
  );
}

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

export async function getProjects() {
  return client.fetch(
    groq`*[_type == "project"]{
      _id, 
      name,
      title,
      "slug": slug.current,
      tagline,
      "logo": logo.asset->url,
    }`
  );
}

export async function getSingleProject(slug: string) {
  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      name,
      title,
      url,
      coverImage { alt, "image": asset->url },
      tagline,
      description
    }`,
    { slug }
  );
}