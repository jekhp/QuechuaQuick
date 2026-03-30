'use client';

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
    if (key in t) {
      return t[key];
    }
    return category;
  }

  const getIconForCategory = (category: string) => {
    switch (category) {
      case 'Saludos': return <Hand className="h-6 w-6 text-primary" />;
      case 'Comida': return <Utensils className="h-6 w-6 text-primary" />;
      case 'Cortesía': return <Heart className="h-6 w-6 text-primary" />;
      case 'Familia': return <Users className="h-6 w-6 text-primary" />;
      case 'Colores': return <Palette className="h-6 w-6 text-primary" />;
      case 'General': return <MessageSquare className="h-6 w-6 text-primary" />;
      case 'Numeros': return <Hash className="h-6 w-6 text-primary" />;
      case 'Animales': return <Dog className="h-6 w-6 text-primary" />;
      default: return <BookOpen className="h-6 w-6 text-primary" />;
    }
  }

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
        </div>
        <div className="mx-auto mt-12 max-w-4xl">
          <Accordion type="single" collapsible className="w-full">
            {categories.map((category) => (
              <AccordionItem value={category} key={category}>
                <AccordionTrigger className="text-xl font-semibold hover:no-underline">
                  <div className="flex items-center gap-4">
                    {getIconForCategory(category)}
                    {getTranslatedCategory(category)}
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
