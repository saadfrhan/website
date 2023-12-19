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
  'dinemarket',
  'website',
  'nextjs-todoapp',
  'photo-album',
  'bookshelf',
];
