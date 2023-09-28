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
  headline: 'I build things for the web.',
  bio: `I'm a software engineer, specializing in building (and occasionally designing) exceptional websites, applications, and everything in between.`,
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
    Twitter: {
      link: 'https://twitter.com/saadfarhan347',
      icon: Twitter,
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
    title: 'fullstack-nextjs-marketplace',
    tagline: 'Clothing Shop App with Next.js',
    demoURL: 'https://fullstack-online-marketplace.vercel.app/',
    tech: [
      'TypeScript',
      'Next.js',
      'Vercel Postgres',
      'Clerk',
      'TailwindCSS',
      'shadcn/ui',
    ],
    repoURL: 'https://github.com/saadfrhan/fullstack-nextjs-marketplace',
  },
  {
    title: 'website',
    tagline: 'My Personal Website',
    demoURL: 'https://saadfarhan.me/',
    tech: ['TypeScript', 'Next.js', 'TailwindCSS', 'shadcn/ui', 'MDX'],
    repoURL: 'https://github.com/saadfrhan/website',
  },
  {
    title: 'mern-bookstore',
    tagline: 'A MERN Stack Bookstore Application',
    tech: [
      'TypeScript',
      'React',
      'MongoDB',
      'shadcn/ui',
      'RTK Query',
      'Express.js',
      'Node.js',
    ],
    repoURL: 'https://github.com/saadfrhan/mern-bookstore',
  },
];
