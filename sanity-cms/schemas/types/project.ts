import { PortableTextBlock } from 'sanity';

export type ProjectType = {
  _id: string;
  title: string;
  slug: string;
  tagline: string;
  url: string;
  logo: string;
  coverImage: {
    alt: string | null;
    image: string;
  };
  _createdAt: Date;
  description: PortableTextBlock[];
};
