'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, Languages } from 'lucide-react';
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
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeSheet = () => setSheetOpen(false);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    if(isSheetOpen) closeSheet();
  };

  const navLinks = (
    <>
      <Link href="#phrases" className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary">
        {t.phrases}
      </Link>
      <Link href="#music" className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary">
        {t.music}
      </Link>
    </>
  );

  const mobileNavLinks = (
     <>
      <Link href="#phrases" className="text-lg font-semibold" onClick={closeSheet}>
        {t.phrases}
      </Link>
      <Link href="#music" className="text-lg font-semibold" onClick={closeSheet}>
        {t.music}
      </Link>
    </>
  )

  const languageSwitcher = (
     <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <Languages className="h-6 w-6" />
            <span className="sr-only">{t.toggleLanguage}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => handleLanguageChange('es')}>
            Español
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleLanguageChange('en')}>
            English
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleLanguageChange('fr')}>
            Français
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
  );

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-200',
        isScrolled ? 'bg-background/80 backdrop-blur-sm shadow-md' : 'bg-background'
      )}
    >
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="text-2xl font-bold text-primary transition-transform hover:scale-105">
          QuechuaQuick
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
         {navLinks}
         {languageSwitcher}
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          {languageSwitcher}
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">{t.openMenu}</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 p-6">
                <Link href="/" className="text-2xl font-bold text-primary" onClick={closeSheet}>
                  QuechuaQuick
                </Link>
                <nav className="flex flex-col gap-4">
                  {mobileNavLinks}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
