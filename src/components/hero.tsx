import Image from 'next/image';
import { getPlaceholderImage } from '@/lib/placeholder-images';

export default function Hero() {
  const heroImage = getPlaceholderImage('hero');
  return (
    <section className="w-full">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4 text-center lg:text-left py-12 md:py-24">
            <h1 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl lg:text-6xl/none font-headline">
              Habla Quechua en 2 minutos
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto lg:mx-0">
              Frases clave para conectar con los Andes. Tu guía rápida, visual y auditiva.
            </p>
          </div>
          <div className="relative h-64 w-full overflow-hidden rounded-xl md:h-96 lg:h-[400px]">
            <Image
              src={heroImage}
              alt="Paisaje andino con personas sonriendo"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              priority
              data-ai-hint="andean landscape"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent lg:bg-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
