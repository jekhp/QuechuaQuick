'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/language-context';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();

  const t = {
    es: { privacy: 'Privacidad', terms: 'Términos', about: 'Sobre nosotros' },
    en: { privacy: 'Privacy', terms: 'Terms', about: 'About us' },
    fr: { privacy: 'Confidentialité', terms: 'Conditions', about: 'À propos' }
  }[language as keyof typeof t] || { privacy: 'Privacidad', terms: 'Términos', about: 'Sobre nosotros' };

  return (
    <footer className="w-full border-t border-border/50 bg-white dark:bg-slate-950">
      <div className="container mx-auto flex flex-col md:flex-row h-auto md:h-24 max-w-7xl items-center justify-between px-4 md:px-6 py-8 md:py-0 gap-6">
        <div className="flex flex-col items-center md:items-start">
          <p className="text-sm text-slate-900 dark:text-white font-black tracking-tight">
            Quechua<span className="text-primary">Quick</span>
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            ¡Allillanchu! &copy; {currentYear} Tukuy Yanapaq
          </p>
        </div>
        
        <div className="flex items-center gap-8">
          <Link href="#about" className="text-xs font-bold text-muted-foreground hover:text-primary transition-colors">
            {t.about}
          </Link>
          <Link href="/privacy" className="text-xs font-bold text-muted-foreground hover:text-primary transition-colors">
            {t.privacy}
          </Link>
          <Link href="/terms" className="text-xs font-bold text-muted-foreground hover:text-primary transition-colors">
            {t.terms}
          </Link>
        </div>
      </div>
    </footer>
  );
}
