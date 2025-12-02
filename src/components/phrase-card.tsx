'use client';

import { useAudioPlayer } from '@/contexts/audio-player-context';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Pause } from 'lucide-react';
import type { Phrase } from '@/lib/data';
import AudioWave from './audio-wave';
import { cn } from '@/lib/utils';

interface PhraseCardProps {
  phrase: Phrase;
}

export default function PhraseCard({ phrase }: PhraseCardProps) {
  const { toggleAudio, activeAudioSrc, isPlaying } = useAudioPlayer();
  const isThisAudioPlaying = activeAudioSrc === phrase.audioSrc && isPlaying;

  return (
    <Card className="group flex h-full transform flex-col justify-between text-center transition-all duration-250 ease-out hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none">
      <CardContent className="flex flex-col items-center justify-center p-6 space-y-3">
        <div className="text-5xl">{phrase.emoji}</div>
        <div>
          <p className="text-2xl font-bold text-primary font-headline" lang="qu">
            {phrase.quechua}
          </p>
          <p className="text-sm italic text-accent">({phrase.pronunciation})</p>
        </div>
        <p className="text-base font-semibold text-foreground">{phrase.translation}</p>
      </CardContent>
      <div className="px-6 pb-6">
        <Button
          variant="default"
          size="icon"
          className={cn(
            'h-14 w-14 rounded-full bg-accent text-accent-foreground shadow-md transition-all hover:bg-accent/90 hover:scale-105 active:scale-95',
            isThisAudioPlaying && 'bg-secondary'
          )}
          onClick={() => toggleAudio(phrase.audioSrc)}
          aria-label={`Reproducir audio de ${phrase.quechua}`}
        >
          {isThisAudioPlaying ? (
            <div className="relative flex h-full w-full items-center justify-center">
              <AudioWave />
              <Pause className="h-7 w-7 fill-white text-white absolute" />
            </div>
          ) : (
            <Play className="h-7 w-7 fill-white text-white" />
          )}
        </Button>
      </div>
    </Card>
  );
}
