'use client';

import { phrases } from '@/lib/data';
import  PhraseCard  from '@/components/phrase-card';
import { useLanguage } from '@/contexts/language-context';
import { translations } from '@/lib/translations';

export default function GreetingsSection() {
  const essentialGreetings = phrases.filter(p => p.category === 'Saludos').slice(0, 5);
  const { language } = useLanguage();
  const t = translations[language].greetings;

  return (
    <section id="greetings" className="w-full py-12 md:py-20 lg:py-24 bg-background">
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
        <div className="mx-auto mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {essentialGreetings.map((phrase) => (
            <PhraseCard key={phrase.id} phrase={phrase} />
          ))}
        </div>
      </div>
    </section>
  );
}
