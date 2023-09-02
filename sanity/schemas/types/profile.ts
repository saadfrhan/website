import { PortableTextBlock } from "sanity";

export interface Profile {
  _id: string
  fullName: string
  headline: string
  profileImage: {
    image: string;
    alt: string
  }
  bio: string
  email: string
  address: string
  fullBio: PortableTextBlock[]
  resumeURL: string
  socialLinks: string[];
  skills: string[]
}
