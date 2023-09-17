import { Briefcase } from 'lucide-react';
import {
  defineArrayMember as arrayMember,
  defineField as field,
  defineType as type,
} from 'sanity';

export default type({
  name: 'project',
  title: 'Project',
  type: 'document',
  icon: Briefcase,
  description: 'A project you have worked on',
  fields: [
    field({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title of the project',
      validation: (rule) => rule.required(),
    }),
    field({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'A short description of the project',
      validation: (rule) => rule.required(),
    }),
    field({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'The slug of the project',
      options: {
        source: 'title',
      },
      validation: (rule) => rule.required(),
    }),
    field({
      name: 'demoURL',
      title: 'Demo URL',
      type: 'url',
      description: 'The Demo URL of the project',
    }),
    field({
      name: 'repoURL',
      title: 'Repository URL',
      type: 'url',
      description: 'The Repostory URL of the project',
      validation: (rule) => rule.required(),
    }),
    field({
      name: 'tech',
      title: 'Tech used',
      type: 'array',
      description: 'A list of tech used in this project',
      of: [
        arrayMember({
          type: 'string',
        }),
      ],
      validation: (rule) => rule.required(),
    }),
  ],
});
