'use client';

import { motion } from 'framer-motion';
import { phrases, phraseCategories } from '@/lib/data';
import PhraseCard from '@/components/phrase-card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useLanguage } from '@/contexts/language-context';
import { translations } from '@/lib/translations';
import { 
  Hand, 
  Utensils, 
  Heart, 
  Users, 
  Palette, 
  MessageSquare, 
  Hash, 
  Dog, 
  BookOpen 
} from 'lucide-react';

export default function AllPhrasesSection() {
  const { language } = useLanguage();
  const t = translations[language].allPhrases;

  const categories = phraseCategories.filter(c => c !== 'Todo');

  const getTranslatedCategory = (category: string) => {
    const key = `filter${category}` as keyof typeof t;
    return key in t ? (t as any)[key] : category;
  }

  const getIconForCategory = (category: string) => {
    switch (category) {
      case 'Saludos': return <Hand className="h-6 w-6" />;
      case 'Comida': return <Utensils className="h-6 w-6" />;
      case 'Cortesía': return <Heart className="h-6 w-6" />;
      case 'Familia': return <Users className="h-6 w-6" />;
      case 'Colores': return <Palette className="h-6 w-6" />;
      case 'General': return <MessageSquare className="h-6 w-6" />;
      case 'Numeros': return <Hash className="h-6 w-6" />;
      case 'Animales': return <Dog className="h-6 w-6" />;
      default: return <BookOpen className="h-6 w-6" />;
    }
  }

  return (
    <section id="phrases" className="w-full py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            {t.title}
          </h2>
          <p className="max-w-[800px] text-muted-foreground text-lg md:text-xl">
            {t.subtitle}
          </p>
        </motion.div>
        
        <div className="mx-auto mt-12 max-w-5xl">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {categories.map((category) => (
              <AccordionItem 
                value={category} 
                key={category}
                className="border-none rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-xl font-bold px-6 py-6 hover:no-underline bg-slate-50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors">
                  <div className="flex items-center gap-4 text-primary">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      {getIconForCategory(category)}
                    </div>
                    {getTranslatedCategory(category)}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-8 bg-white dark:bg-slate-950">
                  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {phrases
                      .filter(p => p.category === category)
                      .map((phrase) => (
                        <PhraseCard key={phrase.id} phrase={phrase} />
                      ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}