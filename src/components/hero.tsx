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
    <section className="relative w-full min-h-[85vh] flex items-center overflow-hidden bg-slate-50 dark:bg-slate-950 py-12 md:py-20">
      {/* Background blobs decorativos gigantes */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-primary/20 to-accent/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-accent/20 to-primary/30 blur-[150px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-4 md:px-6 relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8 text-center lg:text-left lg:col-span-7"
          >
            <h1 className="text-5xl font-black tracking-tight sm:text-6xl md:text-7xl lg:text-8xl/none text-slate-900 dark:text-white">
              <span className="block text-primary drop-shadow-sm">{t.title.split(' ')[0]}</span>
              <span className="block gradient-text mt-2">{t.title.split(' ').slice(1).join(' ')}</span>
            </h1>
            <p className="max-w-[540px] text-slate-500 dark:text-slate-400 text-xl md:text-2xl font-light leading-relaxed lg:mx-0 mx-auto">
              {t.subtitle}
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative mx-auto w-full max-w-lg lg:max-w-none lg:col-span-5 aspect-[4/5]"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-[3rem] rotate-3 opacity-10 blur-md" />
            <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] dark:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)] border border-slate-200/50 dark:border-slate-800/50 bg-white dark:bg-slate-900">
              <Image
                src={heroImage}
                alt={t.imageAlt}
                fill
                className="object-cover transition-transform duration-1000 hover:scale-105"
                priority
                data-ai-hint="llama andean mountain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
