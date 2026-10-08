'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/language-context';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();

  const t = {
    es: { privacy: 'Privacidad', terms: 'Términos' },
    en: { privacy: 'Privacy', terms: 'Terms' },
    fr: { privacy: 'Confidentialité', terms: 'Conditions' }
  }[language as keyof typeof t] || { privacy: 'Privacidad', terms: 'Términos' };

  return (
    <footer className="w-full border-t border-border/50 bg-white dark:bg-slate-950">
      <div className="container mx-auto flex flex-col md:flex-row h-auto md:h-20 max-w-7xl items-center justify-between px-4 md:px-6 py-8 md:py-0 gap-4">
        <p className="text-sm text-muted-foreground font-medium">
          ¡Allillanchu! &copy; {currentYear} Tukuy Yanapaq
        </p>
        <div className="flex items-center gap-6">
          <Link href="/privacy" className="text-xs text-muted-foreground hover:text-primary transition-colors">
            {t.privacy}
          </Link>
          <Link href="/terms" className="text-xs text-muted-foreground hover:text-primary transition-colors">
            {t.terms}
          </Link>
        </div>
      </div>
    </footer>
  );
}
