'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { musicVideos, type MusicVideo } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import VideoModal from './video-modal';
import { Play, Music } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { translations } from '@/lib/translations';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export default function MusicSection() {
  const [selectedVideo, setSelectedVideo] = useState<MusicVideo | null>(null);
  const [shuffledVideos, setShuffledVideos] = useState<MusicVideo[]>(musicVideos);
  const { language } = useLanguage();
  const t = translations[language].music;

  useEffect(() => {
    const shuffled = [...musicVideos].sort(() => Math.random() - 0.5);
    setShuffledVideos(shuffled);
  }, []);

  return (
    <>
      <section id="music" className="w-full py-28 bg-slate-50 dark:bg-slate-950/40 border-t border-slate-100 dark:border-slate-900">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center space-y-4 text-center mb-20"
          >
            <div className="p-3.5 bg-primary/10 text-primary rounded-2xl shadow-sm">
              <Music size={28} />
            </div>
            <h2 className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl text-slate-950 dark:text-white">
              {t.title}
            </h2>
            <p className="max-w-[700px] text-slate-500 dark:text-slate-400 text-lg md:text-xl font-light">
              {t.subtitle}
            </p>
            <Badge variant="secondary" className="md:hidden animate-pulse rounded-full px-4 py-1 mt-2">
              {t.scrollHint}
            </Badge>
          </motion.div>
          
          <div className="relative px-2">
           <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full group"
            >
              <CarouselContent className="-ml-6">
                {shuffledVideos.map((video) => (
                   <CarouselItem key={video.id} className="pl-6 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                      <motion.div className="h-full">
                        <Card
                          className="group/card h-full overflow-hidden rounded-[2rem] border border-slate-100 dark:border-slate-900 shadow-md hover:shadow-xl dark:shadow-2xl/50 bg-white dark:bg-slate-900 cursor-pointer transition-all duration-300"
                          onClick={() => setSelectedVideo(video)}
                          role="button"
                          tabIndex={0}
                        >
                          <CardContent className="relative aspect-[16/10] p-0 overflow-hidden">
                            <Image
                              src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                              alt={video.title}
                              fill
                              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                              className="object-cover transition-transform duration-700 group-hover/card:scale-105"
                            />
                            <div className="absolute inset-0 bg-slate-950/20 group-hover/card:bg-slate-950/40 transition-colors duration-300" />
                            
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                              <div className="h-14 w-14 rounded-full bg-white text-slate-950 flex items-center justify-center shadow-2xl scale-75 group-hover/card:scale-100 transition-transform duration-300">
                                <Play className="h-6 w-6 fill-current ml-0.5" />
                              </div>
                            </div>
                            
                            <Badge className="absolute bottom-4 left-4 bg-slate-900/60 dark:bg-white/20 backdrop-blur-md text-white border-none rounded-full px-3 py-0.5 text-[11px] font-medium tracking-wide">
                              {video.languages}
                            </Badge>
                          </CardContent>
                          
                          <div className="p-6">
                            <h4 className="font-bold text-lg text-slate-900 dark:text-white truncate group-hover/card:text-primary transition-colors duration-200">
                              {video.title}
                            </h4>
                            <p className="text-sm font-medium text-slate-400 dark:text-slate-500 mt-0.5">
                              {video.artist}
                            </p>
                          </div>
                        </Card>
                      </motion.div>
                   </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-6 opacity-0 group-hover:opacity-100 transition-opacity rounded-full h-12 w-12 bg-white dark:bg-slate-900 shadow-xl border border-slate-200/50 dark:border-slate-800/50 text-slate-900 dark:text-white" />
              <CarouselNext className="hidden md:flex -right-6 opacity-0 group-hover:opacity-100 transition-opacity rounded-full h-12 w-12 bg-white dark:bg-slate-900 shadow-xl border border-slate-200/50 dark:border-slate-800/50 text-slate-900 dark:text-white" />
            </Carousel>
          </div>
          
        </div>
      </section>
      <VideoModal
        video={selectedVideo}
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </>
  );
}
