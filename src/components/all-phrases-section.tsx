'use client';

import { useState } from 'react';
import { phrases, phraseCategories } from '@/lib/data';
import PhraseCard from '@/components/phrase-card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { useLanguage } from '@/contexts/language-context';
import { translations } from '@/lib/translations';

export default function AllPhrasesSection() {
  const [activeFilter, setActiveFilter] = useState('Todo');
  const { language } = useLanguage();
  const t = translations[language].allPhrases;

  const translatedCategories = phraseCategories.map(category => {
    if (category === 'Todo') return t.filterAll;
    if (category === 'Saludos') return t.filterGreetings;
    if (category === 'Comida') return t.filterFood;
    if (category === 'Cortesía') return t.filterCourtesy;
    if (category === 'General') return t.filterGeneral;
    return category;
  });

  const handleFilterClick = (englishCategory: string) => {
    if (englishCategory === 'All') {
      setActiveFilter('Todo');
    } else {
      setActiveFilter(englishCategory);
    }
  }


  const filteredPhrases = activeFilter === 'Todo'
    ? phrases
    : phrases.filter(p => p.category === activeFilter);

  return (
    <section id="phrases" className="w-full py-12 md:py-20 lg:py-24 bg-background/95">
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
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {phraseCategories.map((category, index) => (
              <Button
                key={category}
                variant="outline"
                className={cn(
                  'rounded-full border-2 transition-all',
                  activeFilter === category
                    ? 'bg-accent text-accent-foreground border-accent hover:bg-accent/90'
                    : 'bg-transparent text-foreground hover:bg-accent/10 hover:border-accent'
                )}
                onClick={() => handleFilterClick(category)}
              >
                {translatedCategories[index]}
              </Button>
            ))}
          </div>
        </div>
        <div className="mx-auto mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <AnimatePresence>
            {filteredPhrases.length > 0 ? (
              filteredPhrases.map((phrase, index) => (
                <motion.div
                  key={phrase.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                >
                  <PhraseCard phrase={phrase} />
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center text-muted-foreground py-10">
                <p>{t.noPhrases}</p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
