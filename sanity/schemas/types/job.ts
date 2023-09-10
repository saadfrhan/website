export interface Job {
  _id: string;
  name: string;
  title: string;
  logo: string;
  url: string;
  description: string;
  startDate: Date;
  endDate: Date | 'Present';
}
