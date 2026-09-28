'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { getPlaceholderImage } from '@/lib/placeholder-images';
import { useLanguage } from '@/contexts/language-context';
import { translations } from '@/lib/translations';

export default function Hero() {
  const heroImage = getPlaceholderImage('hero');
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-primary/5 via-transparent to-transparent">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 relative z-10">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 text-center lg:text-left py-12 md:py-24"
          >
            <div className="inline-block rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
              ✨ {language === 'es' ? 'Descubre los Andes' : language === 'en' ? 'Discover the Andes' : 'Découvrez les Andes'}
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
              <span className="text-primary">{t.title.split(' ')[0]}</span>{' '}
              <span className="gradient-text">{t.title.split(' ').slice(1).join(' ')}</span>
            </h1>
            <p className="max-w-[600px] text-muted-foreground text-lg md:text-xl lg:mx-0 mx-auto">
              {t.subtitle}
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative mx-auto aspect-square w-full max-w-md lg:max-w-none"
          >
            <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-primary/20 to-accent/20 blur-3xl" />
            <div className="relative h-full w-full overflow-hidden rounded-3xl shadow-2xl border-4 border-white/50">
              <Image
                src={heroImage}
                alt={t.imageAlt}
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
                priority
                data-ai-hint="llama andean mountain"
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />
    </section>
  );
}