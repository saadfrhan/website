'use client';

import * as React from 'react';
import { Monitor, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';

export function ThemeToggler() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      size="icon"
      variant="link"
      onClick={() =>
        setTheme(
          theme === 'dark' ? 'light' : theme === 'light' ? 'system' : 'dark'
        )
      }
    >
      {theme === 'dark' ? <Moon /> : theme === 'light' ? <Sun /> : <Monitor />}
    </Button>
  );
}
