'use client';
import { createContext, useState, useRef, useCallback, ReactNode, useContext, useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";

interface AudioPlayerContextType {
  toggleAudio: (src: string) => void;
  activeAudioSrc: string | null;
  isPlaying: boolean;
}

const AudioPlayerContext = createContext<AudioPlayerContextType | null>(null);

export const useAudioPlayer = () => {
  const context = useContext(AudioPlayerContext);
  if (!context) {
    throw new Error('useAudioPlayer must be used within an AudioPlayerProvider');
  }
  return context;
};

export const AudioPlayerProvider = ({ children }: { children: ReactNode }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [activeAudioSrc, setActiveAudioSrc] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const { toast } = useToast();

  const toggleAudio = useCallback((src: string) => {
    if (audioRef.current && activeAudioSrc === src) {
      if (audioRef.current.paused) {
        audioRef.current.play();
        setIsPlaying(true);
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      
      const newAudio = new Audio(src);
      audioRef.current = newAudio;

      newAudio.addEventListener('error', () => {
        toast({
          title: "Error de audio",
          description: "El audio no está disponible en este momento.",
          variant: "destructive",
        })
        setActiveAudioSrc(null);
        setIsPlaying(false);
      });

      const playPromise = newAudio.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          setActiveAudioSrc(src);
          setIsPlaying(true);
        }).catch(error => {
          console.error("Audio playback failed:", error);
          toast({
            title: "Error de audio",
            description: "No se pudo reproducir el audio.",
            variant: "destructive",
          })
          setActiveAudioSrc(null);
          setIsPlaying(false);
        });
      }

      newAudio.onended = () => {
        setActiveAudioSrc(null);
        setIsPlaying(false);
      };
       newAudio.onpause = () => {
        setIsPlaying(false);
      };
      newAudio.onplay = () => {
        setIsPlaying(true);
      };
    }
  }, [activeAudioSrc, toast]);

  useEffect(() => {
    const audio = audioRef.current;
    return () => {
      audio?.pause();
    };
  }, []);

  const value = { toggleAudio, activeAudioSrc, isPlaying };

  return (
    <AudioPlayerContext.Provider value={value}>
      {children}
    </AudioPlayerContext.Provider>
  );
};
