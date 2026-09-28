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
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
    >
      <Card className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] border border-slate-100 dark:border-slate-900 shadow-lg dark:shadow-2xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl transition-all duration-300">
        <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-primary/40 to-accent/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <CardContent className="flex flex-col items-center p-8 space-y-6 flex-1 justify-center">
          <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-slate-100 dark:bg-slate-800 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-inner">
            <IconComponent size={28} strokeWidth={2} />
          </div>
          
          <div className="space-y-3 w-full">
            <h3 className="text-3xl font-black tracking-tight text-slate-950 dark:text-white" lang="qu">
              {phrase.quechua}
            </h3>
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-accent bg-accent/10 rounded-full uppercase">
              {phrase.pronunciation}
            </span>
          </div>
          
          <p className="text-lg font-medium text-slate-600 dark:text-slate-300 px-2 leading-relaxed">
            {translation}
          </p>
        </CardContent>

        <div className="px-8 pb-8 pt-2 flex justify-center">
          <Button
            variant="default"
            size="icon"
            className={cn(
              'h-14 w-14 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-md hover:bg-primary dark:hover:bg-primary hover:text-white dark:hover:text-white transition-all duration-300',
              isThisAudioPlaying && 'bg-accent dark:bg-accent text-white dark:text-white scale-105'
            )}
            onClick={() => toggleAudio(phrase.audioSrc)}
            aria-label={`${t.playAudio} ${phrase.quechua}`}
          >
            {isThisAudioPlaying ? (
              <div className="relative flex h-full w-full items-center justify-center">
                <AudioWave />
                <Pause className="h-6 w-6 fill-current absolute" />
              </div>
            ) : (
              <Play className="h-6 w-6 fill-current ml-0.5" />
            )}
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}
