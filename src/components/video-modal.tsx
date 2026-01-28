'use client';

import { useState, useEffect, useRef } from 'react';
import YouTube, { type YouTubePlayer } from 'react-youtube';
import { Languages } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import type { MusicVideo, Subtitle } from '@/lib/data';
import { useLanguage } from '@/contexts/language-context';

interface VideoModalProps {
  video: MusicVideo | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoModal({ video, isOpen, onClose }: VideoModalProps) {
  const { language: globalLanguage } = useLanguage();
  const [player, setPlayer] = useState<YouTubePlayer | null>(null);
  const [activeSubtitle, setActiveSubtitle] = useState<Subtitle | null>(null);
  const [subtitleLanguage, setSubtitleLanguage] = useState<'es' | 'en'>(globalLanguage);
  const intervalRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    // Sync with global language changes
    if (isOpen) {
      setSubtitleLanguage(globalLanguage);
    }
  }, [globalLanguage, isOpen]);


  const stopInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = undefined;
    }
  };

  const startInterval = () => {
    stopInterval();
    intervalRef.current = setInterval(() => {
      if (!player || typeof player.getCurrentTime !== 'function') {
        return;
      }
      const currentTime = player.getCurrentTime();
      
      const currentSubtitle = video?.subtitles?.find((sub, index) => {
        const nextSub = video.subtitles?.[index + 1];
        // A subtitle is active from its start time until the next one starts.
        // For the last subtitle, it's active until the end.
        return currentTime >= sub.time && (!nextSub || currentTime < nextSub.time);
      }) || null;
      
      setActiveSubtitle(currentSubtitle);
    }, 250);
  };

  useEffect(() => {
    // Cleanup on unmount
    return stopInterval;
  }, []);

  const onPlayerReady = (event: { target: YouTubePlayer }) => {
    setPlayer(event.target);
  };

  const onPlayerStateChange = (event: { data: number }) => {
    if (event.data === 1) { // Playing
      startInterval();
    } else { // Paused, ended, etc.
      stopInterval();
    }
  };
  
  const handleClose = () => {
    stopInterval();
    setPlayer(null);
    setActiveSubtitle(null);
    onClose();
  };

  const hasSubtitles = video?.subtitles && video.subtitles.length > 0;

  const videoOpts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
      rel: 0,
      start: video?.startTime || 0,
      modestbranding: 1,
      iv_load_policy: 3,
      enablejsapi: 1,
      origin: typeof window !== 'undefined' ? window.location.origin : '',
    },
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-3xl w-full p-2 md:p-4 bg-background/90 backdrop-blur-sm border-border shadow-2xl">
        <div className="flex flex-col gap-4 max-h-[90vh]">
          <div className="aspect-video w-full overflow-hidden rounded-lg bg-black shadow-lg">
            {isOpen && video && (
              <YouTube
                videoId={video.youtubeId}
                opts={videoOpts}
                onReady={onPlayerReady}
                onStateChange={onPlayerStateChange}
                className="w-full h-full"
              />
            )}
          </div>
          <div className="text-center p-4 rounded-lg bg-muted min-h-[60px] flex items-center justify-center">
              <p className="text-lg text-foreground font-semibold transition-opacity duration-300">
                {hasSubtitles && activeSubtitle ? activeSubtitle.text[subtitleLanguage] : '🎶'}
              </p>
          </div>
           {hasSubtitles && (
             <div className="flex justify-center pb-2">
                <Button variant="ghost" onClick={() => setSubtitleLanguage(lang => lang === 'es' ? 'en' : 'es')}>
                    <Languages className="h-5 w-5 mr-2" />
                    {subtitleLanguage === 'es' ? 'Switch to English' : 'Cambiar a Español'}
                </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
