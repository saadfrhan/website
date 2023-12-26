import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function TooltipWrapper({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent>
        <p>{label}</p>
      </TooltipContent>
    </Tooltip>
  );
}

export type Data = {
  description: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  homepage?: string;
};

export async function getRepositoryInfo(
  repoName: string
): Promise<Data | null> {
  try {
    const apiUrl = `https://api.github.com/repos/saadfrhan/${repoName}`;
    const response = await fetch(apiUrl, {
      next: {
        revalidate: 604800,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch repository information: ${response.statusText}`
      );
    }

    const {
      description,
      forks_count,
      language,
      stargazers_count,
      homepage,
    }: Data = await response.json();

    return {
      description,
      forks_count,
      language,
      stargazers_count,
      homepage,
    };
  } catch (error) {
    console.error((error as Error).message);
    return null; // Handle the error gracefully in your application
  }
}
