'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/language-context';
import { translations } from '@/lib/translations';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage();
  const t = translations[language].scrollToTop;

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button
      variant="default"
      size="icon"
      className={cn(
        'fixed bottom-4 right-4 h-12 w-12 rounded-full shadow-lg transition-all duration-300 bg-accent text-accent-foreground hover:bg-accent/90',
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
      )}
      onClick={scrollToTop}
      aria-label={t.label}
    >
      <ArrowUp className="h-6 w-6" />
    </Button>
  );
}
