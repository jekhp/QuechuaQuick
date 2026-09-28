'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { musicVideos, type MusicVideo } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import VideoModal from './video-modal';
import { PlayCircle, Music2 } from 'lucide-react';
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
      <section id="music" className="w-full py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
          >
            <div className="p-3 bg-primary/10 rounded-2xl text-primary mb-2">
              <Music2 size={32} />
            </div>
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              {t.title}
            </h2>
            <p className="max-w-[800px] text-muted-foreground text-lg md:text-xl">
              {t.subtitle}
            </p>
            <Badge variant="outline" className="md:hidden animate-bounce mt-4">
              {t.scrollHint}
            </Badge>
          </motion.div>
          
          <div className="relative px-4">
           <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-6">
                {shuffledVideos.map((video) => (
                   <CarouselItem key={video.id} className="pl-6 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="h-full"
                      >
                        <Card
                          className="group h-full overflow-hidden border-none shadow-xl cursor-pointer hover:shadow-primary/20 transition-all duration-500"
                          onClick={() => setSelectedVideo(video)}
                          role="button"
                          tabIndex={0}
                        >
                          <CardContent className="relative aspect-video p-0">
                            <Image
                              src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                              alt={video.title}
                              fill
                              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                              className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <PlayCircle className="h-16 w-16 text-white/90 group-hover:scale-125 transition-transform duration-300" />
                            </div>
                            <Badge className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-md text-white border-white/30">
                              {video.languages}
                            </Badge>
                          </CardContent>
                          <div className="p-6 bg-white dark:bg-slate-900">
                            <p className="font-bold text-lg truncate group-hover:text-primary transition-colors">{video.title}</p>
                            <p className="text-sm text-muted-foreground font-medium">{video.artist}</p>
                          </div>
                        </Card>
                      </motion.div>
                   </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex -left-12" />
              <CarouselNext className="hidden sm:flex -right-12" />
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