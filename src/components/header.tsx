'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSheetOpen, setSheetOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeSheet = () => setSheetOpen(false);

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
          <Link href="#phrases" className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary">
            Frases
          </Link>
          <Link href="#music" className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary">
            Música
          </Link>
        </nav>
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 p-6">
                <Link href="/" className="text-2xl font-bold text-primary" onClick={closeSheet}>
                  QuechuaQuick
                </Link>
                <nav className="flex flex-col gap-4">
                  <Link href="#phrases" className="text-lg font-semibold" onClick={closeSheet}>
                    Frases
                  </Link>
                  <Link href="#music" className="text-lg font-semibold" onClick={closeSheet}>
                    Música
                  </Link>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
