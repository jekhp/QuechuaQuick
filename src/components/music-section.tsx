'use client';

import { useState } from 'react';
import Image from 'next/image';
import { musicVideos, type MusicVideo } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import VideoModal from './video-modal';
import { PlayCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { translations } from '@/lib/translations';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';


export default function MusicSection() {
  const [selectedVideo, setSelectedVideo] = useState<MusicVideo | null>(null);
  const { language } = useLanguage();
  const t = translations[language].music;

  return (
    <>
      <section id="music" className="w-full py-12 md:py-20 lg:py-24">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                {t.title}
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t.subtitle}
              </p>
            </div>
          </div>
          <div className="mt-12">
           <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {musicVideos.map((video) => (
                   <CarouselItem key={video.id} className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                      <div className="p-1">
                        <Card
                          className="group h-full overflow-hidden transition-all duration-250 ease-out hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none"
                          onClick={() => setSelectedVideo(video)}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => e.key === 'Enter' && setSelectedVideo(video)}
                        >
                          <CardContent className="relative aspect-video p-0">
                            <Image
                              src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                              alt={`Thumbnail for ${video.title}`}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/20 transition-all duration-300 group-hover:bg-black/50"></div>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                              <PlayCircle className="h-16 w-16 text-white/80" />
                            </div>
                            <Badge className="absolute top-2 right-2 border-transparent bg-accent text-accent-foreground">
                              {video.languages}
                            </Badge>
                          </CardContent>
                          <div className="p-4">
                            <p className="font-semibold truncate text-foreground">{video.title}</p>
                            <p className="text-sm text-muted-foreground">{video.artist}</p>
                          </div>
                        </Card>
                      </div>
                   </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex" />
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
