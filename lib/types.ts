export interface Project {
  title: string;
  tagline: string;
  demoURL?: string;
  tech: string[];
  repoURL: string;
  slug: string;
}

export interface Profile {
  fullName: string;
  headline: string;
  bio: string;
  resumeURL?: string;
  socialLinks?: string[];
  skills: string[];
}
