import {
  AiFillGithub as Github,
  AiFillLinkedin as Linkedin,
  AiOutlineTwitter as Twitter,
} from 'react-icons/ai';
import { BiLogoGmail as Gmail } from 'react-icons/bi';
import { BsDiscord as Discord } from 'react-icons/bs';
import { FileText } from 'lucide-react';

export const profile = {
  fullName: 'Saad Farhan',
  headline: 'Fullstack Developer',
  bio: `specialized in building (and occasionally designing) exceptional websites, applications, and everything in between.`,
  links: {
    Discord: {
      link: 'https://discordapp.com/users/saadfarhan',
      icon: Discord,
    },
    GitHub: {
      link: 'https://github.com/saadfrhan',
      icon: Github,
    },
    LinkedIn: {
      link: 'https://www.linkedin.com/in/saad-farhan-ab10b8244/',
      icon: Linkedin,
    },
    Resume: {
      link: 'https://www.canva.com/design/DAFb3337tIA/nh3rOWE5EiM7U2QB5yQK5A/edit',
      icon: FileText,
    },
    Gmail: {
      link: 'mailto:saadfarhan347@gmail.com',
      icon: Gmail,
    },
  },
};

export const projects = [
  {
    title: 'dinemarket',
    tagline: 'Clothing Shop App with Next.js',
    demoURL: 'https://dinemarket-app.vercel.app/',
    tech: [
      'TypeScript',
      'Next.js',
      'Vercel Postgres',
      'Clerk',
      'TailwindCSS',
      'shadcn/ui',
      'Drizzle ORM',
    ],
    repoURL: 'https://github.com/saadfrhan/dinemarket',
  },
  {
    title: 'website',
    tagline: 'My Personal Website',
    demoURL: 'https://saadfarhan.vercel.app',
    tech: ['TypeScript', 'Next.js', 'TailwindCSS', 'shadcn/ui', 'MDX'],
    repoURL: 'https://github.com/saadfrhan/website',
  },
  {
    title: 'bookshelf',
    tagline: 'A MERN Stack Booklist Application',
    tech: [
      'TypeScript',
      'React',
      'MongoDB',
      'shadcn/ui',
      'RTK Query',
      'Express.js',
      'Node.js',
    ],
    repoURL: 'https://github.com/saadfrhan/bookshelf',
  },
  {
    title: 'simpleshare',
    tagline: 'Social app for sharing stories',
    demoURL: 'https://simpleshare.vercel.app/',
    repoURL: 'https://github.com/saadfrhan/simpleshare',
    tech: [
      'TypeScript',
      'PlanetScale',
      'Prisma ORM',
      'shadcn/ui',
      'NextAuth.js',
      'TailwindCSS',
    ],
    isInProgress: true,
  },
  {
    title: 'transbiz',
    tagline: 'Dashboard for a Transportation Company',
    demoURL: 'https://transbiz.vercel.app',
    repoURL: 'https://github.com/saadfrhan/transbiz',
    tech: [
      'TypeScript',
      'MongoDB',
      'shadcn/ui',
      'Clerk',
      'Next.js',
      'TailwindCSS',
      'Mongoose ORM',
    ],
    isInProgress: true,
  },
];
