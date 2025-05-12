'use client';

import * as React from 'react';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { cn } from '@/lib/utils';

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

// Alternative using the Switch component directly:
export function ThemeToggleSwitch() {
  const { setTheme, theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="flex items-center space-x-2">
      <SunIcon className="h-[1.2rem] w-[1.2rem] text-yellow-500" />
      <Switch
        id="theme"
        checked={isDark}
        onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
      />
      <MoonIcon className="h-[1.2rem] w-[1.2rem] text-gray-700 dark:text-gray-300" />
    </div>
  );
}
