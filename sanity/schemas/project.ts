import { Briefcase } from 'lucide-react';
import {
  defineArrayMember as arrayMember,
  defineField as field,
  defineType as type
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
      validation: (rule) => rule.required()
    }),
    field({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'A short description of the project',
      validation: (rule) => rule.max(60).required(),
    }),
    field({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'The slug of the project',
      options: {
        source: 'title',
      },
      validation: (rule) => rule.required()
    }),
    field({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      description: 'The logo of the project',
      options: { hotspot: true },
      validation: (rule) => rule.required()
    }),
    field({
      name: 'url',
      title: 'URL',
      type: 'url',
      description: 'The URL of the project',
      validation: (rule) => rule.required()
    }),
    field({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      description: 'The cover image of the project',
      options: { hotspot: true },
      fields: [
        field({
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
        })
      ],
      validation: (rule) => rule.required()
    }),
    field({
      name: 'description',
      title: 'Description',
      type: 'array',
      description: 'A longer description of the project',
      of: [
        arrayMember({
          type: 'block',
        }),
      ],
      validation: (rule) => rule.required()
    }),
  ]
});      
