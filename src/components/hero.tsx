'use client';

import Image from 'next/image';
import { getPlaceholderImage } from '@/lib/placeholder-images';
import { useLanguage } from '@/contexts/language-context';
import { translations } from '@/lib/translations';

export default function Hero() {
  const heroImage = getPlaceholderImage('hero');
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <section className="w-full">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4 text-center lg:text-left py-12 md:py-24">
            <h1 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl lg:text-6xl/none font-headline">
              {t.title}
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto lg:mx-0">
              {t.subtitle}
            </p>
          </div>
          <div className="relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-xl lg:aspect-square lg:max-w-none">
            <Image
              src={heroImage}
              alt={t.imageAlt}
              fill
              className="object-cover"
              data-ai-hint="guinea pig tourist"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent lg:bg-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
