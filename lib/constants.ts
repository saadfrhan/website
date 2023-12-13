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
    Twitter: {
      link: 'https://twitter.com/saadfarhan547',
      icon: Twitter,
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
    tech: ['TypeScript', 'Next.js', 'TailwindCSS', 'shadcn/ui'],
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
      'Mongoose ODM'
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
      'Mongoose ODM',
    ],
    isInProgress: true,
  },
];

import NextjsIcon from '/public/icons/Nextjs.png';
import ClerkDevIcon from '/public/icons/ClerkDev.png';
import TypeScriptIcon from '/public/icons/TypeScript.png';
import VercelIcon from '/public/icons/Vercel.png';
import MDXIcon from '/public/icons/MDX.png';
import TailwindcssIcon from '/public/icons/TailwindCSS.png';
import ShadcnUIIcon from '/public/icons/shadcn-ui.png';
import MongoDBIcon from '/public/icons/MongoDB.png';
import ExpressIcon from '/public/icons/express.png';
import ReduxIcon from '/public/icons/redux.png';
import ReactIcon from '/public/icons/React.png';
import NodejsIcon from '/public/icons/Nodejs.png';
import NextAuthIcon from '/public/icons/next-auth.png';
import PrismaIcon from '/public/icons/prisma.png';
import PlanetscaleIcon from '/public/icons/planet-scale.png';
import DrizzleIcon from '/public/icons/drizzle.png';
import MongooseIcon from '/public/icons/mongoose.png';
import { StaticImageData } from 'next/image';

export const _icons: {
  [x: string]: StaticImageData;
} = {
  TypeScript: TypeScriptIcon,
  'Next.js': NextjsIcon,
  'Vercel Postgres': VercelIcon,
  Clerk: ClerkDevIcon,
  MDX: MDXIcon,
  TailwindCSS: TailwindcssIcon,
  'shadcn/ui': ShadcnUIIcon,
  MongoDB: MongoDBIcon,
  'Express.js': ExpressIcon,
  'RTK Query': ReduxIcon,
  React: ReactIcon,
  'Node.js': NodejsIcon,
  'NextAuth.js': NextAuthIcon,
  'Prisma ORM': PrismaIcon,
  PlanetScale: PlanetscaleIcon,
  'Drizzle ORM': DrizzleIcon,
  'Mongoose ODM': MongooseIcon,
};

export const icons: {
  value: string;
  label: string;
  icon: StaticImageData;
}[] = [
    {
      value: 'TypeScript',
      label: 'TypeScript',
      icon: TypeScriptIcon,
    },
    {
      value: 'Next.js',
      label: 'Next.js',
      icon: NextjsIcon,
    },
    {
      value: 'Vercel Postgres',
      label: 'Vercel Postgres',
      icon: VercelIcon,
    },
    {
      value: 'Clerk',
      label: 'Clerk',
      icon: ClerkDevIcon,
    },
    {
      value: 'TailwindCSS',
      label: 'TailwindCSS',
      icon: TailwindcssIcon,
    },
    {
      value: 'shadcn/ui',
      label: 'shadcn/ui',
      icon: ShadcnUIIcon,
    },
    {
      value: 'MongoDB',
      label: 'MongoDB',
      icon: MongoDBIcon,
    },
    {
      value: 'Express.js',
      label: 'Express.js',
      icon: ExpressIcon,
    },
    {
      value: 'RTK Query',
      label: 'RTK Query',
      icon: ReduxIcon,
    },
    {
      value: 'React',
      label: 'React',
      icon: ReactIcon,
    },

    {
      value: 'Node.js',
      label: 'Node.js',
      icon: NodejsIcon,
    },
    {
      value: 'NextAuth.js',
      label: 'NextAuth.js',
      icon: NextAuthIcon,
    },
    {
      value: 'Prisma ORM',
      label: 'Prisma ORM',
      icon: PrismaIcon,
    },
    {
      value: 'PlanetScale',
      label: 'PlanetScale',
      icon: PlanetscaleIcon,
    },
    {
      value: 'Drizzle ORM',
      label: 'Drizzle ORM',
      icon: DrizzleIcon,
    },
    {
      value: 'Mongoose ODM',
      label: 'Mongoose ODM',
      icon: MongooseIcon,
    },
  ];