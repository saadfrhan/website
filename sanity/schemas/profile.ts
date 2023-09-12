import { User } from 'lucide-react';
import {
  defineArrayMember as arrayMember,
  defineField as field,
  defineType as type,
} from 'sanity';

export default type({
  name: 'profile',
  title: 'Profile',
  type: 'document',
  description: 'Your personal profile',
  icon: User,
  fields: [
    field({
      name: 'fullName',
      title: 'Full Name',
      type: 'string',
      description: 'Your full name',
      validation: (rule) => rule.required(),
    }),
    field({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      description: 'A short description of yourself',
      validation: (rule) => rule.required(),
    }),
    field({
      name: 'bio',
      title: 'Bio',
      type: 'string',
      validation: (rule) => rule.required(),
      description: 'A longer description of yourself',
    }),
    field({
      name: 'email',
      title: 'Email adress',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    field({
      name: 'fullBio',
      title: 'Full Bio',
      type: 'array',
      description: 'A longer description of yourself',
      validation: (rule) => rule.required(),
      of: [
        arrayMember({
          type: 'block',
        }),
      ],
    }),
    field({
      name: 'resumeURL',
      title: 'Resume URL',
      type: 'url',
      description: 'A link to your resume',
      validation: (rule) => rule.required(),
    }),
    field({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',
      description: 'Links to your social media profiles',
      validation: (rule) => rule.required(),
      fields: [
        field({
          name: 'github',
          title: 'Github',
          type: 'url',
          initialValue: 'https://github.com/',
        }),
        field({
          name: 'linkedin',
          title: 'LinkedIn',
          type: 'url',
          initialValue: 'https://linkedin.com/in/',
        }),
        field({
          name: 'discord',
          title: 'Discord',
          type: 'url',
          initialValue: 'https://discordapp.com/users/',
        }),
      ],
      options: {
        collapsible: true,
        collapsed: false,
        columns: 2,
      },
    }),
    field({
      name: 'skills',
      title: 'Skills',
      type: 'array',
      description: 'A list of skills you have',
      of: [
        arrayMember({
          type: 'string',
        }),
      ],
      validation: (rule) => rule.required(),
    }),
  ],
});
