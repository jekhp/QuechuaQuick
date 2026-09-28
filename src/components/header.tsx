'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, Languages, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useLanguage, type Language } from '@/contexts/language-context';
import { translations } from '@/lib/translations';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSheetOpen, setSheetOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = translations[language].header;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setSheetOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled 
          ? 'h-16 bg-white/80 dark:bg-slate-950/80 backdrop-blur-lg shadow-lg border-b' 
          : 'h-20 bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-full max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="group flex items-center gap-2">
          <div className="h-10 w-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg transition-transform group-hover:rotate-12">
            <Languages size={24} />
          </div>
          <span className="text-2xl font-black tracking-tight text-primary">
            Quechua<span className="text-accent">Quick</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="#phrases" className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors">
            {t.phrases}
          </Link>
          <Link href="#music" className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors">
            {t.music}
          </Link>
          <div className="h-6 w-px bg-border mx-2" />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2 hover:bg-primary/5">
                <Languages className="h-5 w-5 text-primary" />
                <span className="uppercase text-sm font-bold">{language}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40 rounded-xl">
              <DropdownMenuItem onClick={() => handleLanguageChange('es')} className="font-medium cursor-pointer">Español</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleLanguageChange('en')} className="font-medium cursor-pointer">English</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleLanguageChange('fr')} className="font-medium cursor-pointer">Français</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-xl hover:bg-primary/5">
                <Menu className="h-6 w-6 text-primary" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] rounded-l-3xl p-0 overflow-hidden border-none">
              <div className="flex flex-col h-full bg-white dark:bg-slate-950">
                <div className="p-8 border-b">
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-xl bg-primary flex items-center justify-center text-white">
                      <Languages size={24} />
                    </div>
                    <span className="text-2xl font-black text-primary">QuechuaQuick</span>
                  </div>
                </div>
                <nav className="flex flex-col gap-2 p-8 flex-1">
                  <Link href="#phrases" className="text-xl font-bold p-4 rounded-2xl hover:bg-primary/5 transition-colors" onClick={() => setSheetOpen(false)}>
                    {t.phrases}
                  </Link>
                  <Link href="#music" className="text-xl font-bold p-4 rounded-2xl hover:bg-primary/5 transition-colors" onClick={() => setSheetOpen(false)}>
                    {t.music}
                  </Link>
                </nav>
                <div className="p-8 bg-slate-50 dark:bg-slate-900/50">
                  <p className="text-sm font-bold text-muted-foreground mb-4 uppercase tracking-wider">{t.toggleLanguage}</p>
                  <div className="grid grid-cols-3 gap-2">
                    {(['es', 'en', 'fr'] as const).map((lang) => (
                      <Button 
                        key={lang} 
                        variant={language === lang ? 'default' : 'outline'}
                        onClick={() => handleLanguageChange(lang)}
                        className="rounded-xl uppercase font-bold"
                      >
                        {lang}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}