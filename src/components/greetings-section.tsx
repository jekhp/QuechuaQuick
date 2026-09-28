'use client';

import { motion } from 'framer-motion';
import { phrases } from '@/lib/data';
import PhraseCard from '@/components/phrase-card';
import { useLanguage } from '@/contexts/language-context';
import { translations } from '@/lib/translations';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function GreetingsSection() {
  const essentialGreetings = phrases.filter(p => p.category === 'Saludos').slice(0, 5);
  const { language } = useLanguage();
  const t = translations[language].greetings;

  return (
    <section id="greetings" className="w-full py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            {t.title}
          </h2>
          <div className="h-1.5 w-24 bg-accent rounded-full" />
          <p className="max-w-[800px] text-muted-foreground text-lg md:text-xl">
            {t.subtitle}
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
        >
          {essentialGreetings.map((phrase) => (
            <motion.div key={phrase.id} variants={item}>
              <PhraseCard phrase={phrase} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}