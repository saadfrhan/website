'use client';

import * as React from 'react';
import { Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';

export default function ThemeToggler() {
  const { setTheme, theme = 'light' } = useTheme();

  const icons: {
    [x: string]: React.JSX.Element;
  } = {
    light: <Sun className="w-4 h-4" />,
    dark: <Moon className="w-4 h-4" />,
    system: <Monitor className="w-4 h-4" />,
  };

  return (
    <div className="flex gap-4 items-center">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => {
          if (theme === 'light') {
            setTheme('dark');
          } else if (theme === 'dark') {
            setTheme('system');
          } else if (theme === 'system') {
            setTheme('light');
          }
        }}
      >
        {icons[theme]}
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
}
