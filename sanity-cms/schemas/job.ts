import { HardHat } from 'lucide-react';
import {
  defineField as field,
  defineType as type
} from 'sanity';

export default type({
  name: "job",
  title: "Job",
  type: "document",
  icon: HardHat,
  description: "A job you have worked on",
  fields: [
    field({
      name: "name",
      title: "Company Name",
      type: "string",
      description: "What is the name of the company?",
    }),
    field({
      name: "title",
      title: "Job Title",
      type: "string",
      description: "Enter the job title. E.g: Software Developer",
    }),
    field({
      name: "logo",
      title: "Company Logo",
      type: "image",
    }),
    field({
      name: "url",
      title: "Company Website",
      type: "url",
    }),
    field({
      name: "description",
      title: "Job Description",
      type: "text",
      rows: 3,
      description: "Write a brief description about this role",
    }),
    field({
      name: "startDate",
      title: "Start Date",
      type: "date",
    }),
   field({
      name: "endDate",
      title: "End Date",
      type: "date",
    }),
  ],
});
