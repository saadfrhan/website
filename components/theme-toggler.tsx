'use client';

import * as React from 'react';
import { Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';

export function ThemeToggler() {
  const { setTheme, theme } = useTheme();

  const icon: {
    [key: string]: React.JSX.Element;
  } = {
    light: <Sun />,
    dark: <Moon />,
    system: <Monitor />,
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => {
        if (theme === 'light') setTheme('dark');
        else if (theme === 'dark') setTheme('system');
        else if (theme === 'system') setTheme('light');
      }}
    >
      {theme && icon[theme]}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
