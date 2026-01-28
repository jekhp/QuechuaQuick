'use client';

import { useState, useEffect, useRef } from 'react';
import YouTube, { YouTubePlayer } from 'react-youtube';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Captions } from 'lucide-react';
import type { MusicVideo, Subtitle } from '@/lib/data';
import { useLanguage } from '@/contexts/language-context';
import { cn } from '@/lib/utils';

interface VideoModalProps {
  video: MusicVideo | null;
  isOpen: boolean;
  onClose: () => void;
}

const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs.toString().padStart(2, '0')}`;
};

export default function VideoModal({ video, isOpen, onClose }: VideoModalProps) {
  const { language } = useLanguage();
  const [player, setPlayer] = useState<YouTubePlayer | null>(null);
  const [activeSubtitle, setActiveSubtitle] = useState<Subtitle | null>(null);
  const [showSubtitles, setShowSubtitles] = useState(true);

  const intervalRef = useRef<NodeJS.Timeout>();
  const subtitleListRef = useRef<HTMLDivElement>(null);

  const stopInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = undefined;
    }
  };

  const startInterval = () => {
    stopInterval();
    intervalRef.current = setInterval(() => {
      if (!player || typeof player.getCurrentTime !== 'function' || !video?.subtitles) return;
      const currentTime = player.getCurrentTime();
      
      const currentSubtitle = video.subtitles.find((sub, index) => {
        const nextSub = video.subtitles![index + 1];
        return currentTime >= sub.time && (nextSub ? currentTime < nextSub.time : true);
      });
      
      setActiveSubtitle(currentSubtitle || null);
    }, 250);
  };

  useEffect(() => {
    // Cleanup on unmount or when modal is closed
    return stopInterval;
  }, []);

  useEffect(() => {
    if (activeSubtitle && subtitleListRef.current) {
      const activeElement = subtitleListRef.current.querySelector(`[data-time="${activeSubtitle.time}"]`);
      if (activeElement) {
        activeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [activeSubtitle]);

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
  
  const handleSubtitleClick = (time: number) => {
    player?.seekTo(time, true);
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
      <DialogContent className="max-w-5xl w-full p-2 md:p-4 bg-background/90 backdrop-blur-sm border-border shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 max-h-[90vh] h-full">
          
          <div className="md:col-span-2 flex flex-col gap-2 justify-between">
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
            <div className="flex items-center justify-between p-2 md:p-0">
               <div className="text-base text-foreground min-h-[24px] font-semibold text-center w-full">
                 {hasSubtitles && activeSubtitle ? activeSubtitle.text[language] : ' '}
               </div>
              {hasSubtitles && (
                <Button variant="ghost" size="sm" onClick={() => setShowSubtitles(!showSubtitles)} className="absolute bottom-2 right-2 md:relative md:bottom-auto md:right-auto">
                  <Captions className="h-4 w-4 md:mr-2" />
                  <span className="hidden md:inline">{showSubtitles ? 'Ocultar' : 'Mostrar'}</span>
                </Button>
              )}
            </div>
          </div>
          
          {hasSubtitles && (
             <div className={cn(
                "md:col-span-1 flex-col h-[35vh] md:h-auto border-t md:border-t-0 md:border-l mt-2 md:mt-0 pt-2 md:pt-0",
                showSubtitles ? 'flex' : 'hidden'
              )}>
                <h3 className="px-2 pb-2 text-lg font-semibold tracking-tight border-b">
                  Letra
                </h3>
                <ScrollArea className="flex-1">
                  <div ref={subtitleListRef} className="p-2 space-y-1">
                  {video?.subtitles?.map((sub) => (
                    <div
                      key={sub.time}
                      data-time={sub.time}
                      onClick={() => handleSubtitleClick(sub.time)}
                      className={cn(
                        "flex items-start gap-3 rounded-md p-2 text-sm cursor-pointer transition-colors hover:bg-accent/50",
                        activeSubtitle?.time === sub.time && "bg-accent text-accent-foreground"
                      )}
                    >
                      <span className="font-mono text-xs text-muted-foreground pt-0.5">
                        {formatTime(sub.time)}
                      </span>
                      <p className="flex-1">{sub.text[language]}</p>
                    </div>
                  ))}
                  </div>
                </ScrollArea>
             </div>
          )}

        </div>
      </DialogContent>
    </Dialog>
  );
}
