'use client';
import type { ReactNode } from 'react';
import { AudioPlayerProvider } from '@/contexts/audio-player-context';

export function Providers({ children }: { children: ReactNode }) {
  return <AudioPlayerProvider>{children}</AudioPlayerProvider>;
}
