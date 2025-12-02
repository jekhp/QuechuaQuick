'use client';
import type { ReactNode } from 'react';
import { AudioPlayerProvider } from '@/contexts/audio-player-context';
import { LanguageProvider } from '@/contexts/language-context';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <AudioPlayerProvider>{children}</AudioPlayerProvider>
    </LanguageProvider>
  );
}
