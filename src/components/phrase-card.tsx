'use client';

import { motion } from 'framer-motion';
import { useAudioPlayer } from '@/contexts/audio-player-context';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Pause } from 'lucide-react';
import type { Phrase } from '@/lib/data';
import AudioWave from './audio-wave';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/language-context';
import { translations } from '@/lib/translations';
import * as LucideIcons from 'lucide-react';

interface PhraseCardProps {
  phrase: Phrase;
}

export default function PhraseCard({ phrase }: PhraseCardProps) {
  const { toggleAudio, activeAudioSrc, isPlaying } = useAudioPlayer();
  const isThisAudioPlaying = activeAudioSrc === phrase.audioSrc && isPlaying;
  const { language } = useLanguage();
  const t = translations[language].phraseCard;

  const translation = phrase.translation[language];
  const IconComponent = (LucideIcons as any)[phrase.iconName] || LucideIcons.HelpCircle;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
      className="h-full"
    >
      <Card className="group flex h-full flex-col justify-between overflow-hidden text-center border-none shadow-lg ring-1 ring-black/5 hover:ring-accent/50 transition-all duration-300 glass-morphism">
        <CardContent className="flex flex-col items-center justify-center p-8 space-y-4">
          <div className="flex items-center justify-center h-20 w-20 rounded-2xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
            <IconComponent size={40} strokeWidth={1.5} />
          </div>
          <div className="space-y-2">
            <h3 className="text-3xl font-bold text-primary tracking-tight" lang="qu">
              {phrase.quechua}
            </h3>
            <p className="text-sm font-medium italic text-accent/80 tracking-wide uppercase">
              {phrase.pronunciation}
            </p>
          </div>
          <div className="h-px w-12 bg-border group-hover:w-24 transition-all duration-300" />
          <p className="text-lg font-medium text-foreground/80 leading-relaxed">
            {translation}
          </p>
        </CardContent>
        <div className="px-8 pb-8">
          <Button
            variant="default"
            size="icon"
            className={cn(
              'h-16 w-16 rounded-full bg-primary text-white shadow-xl hover:shadow-primary/40 transition-all duration-300 active:scale-90',
              isThisAudioPlaying && 'bg-accent animate-pulse'
            )}
            onClick={() => toggleAudio(phrase.audioSrc)}
            aria-label={`${t.playAudio} ${phrase.quechua}`}
          >
            {isThisAudioPlaying ? (
              <div className="relative flex h-full w-full items-center justify-center">
                <AudioWave />
                <Pause className="h-8 w-8 fill-white absolute" />
              </div>
            ) : (
              <Play className="h-8 w-8 fill-white ml-1" />
            )}
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}