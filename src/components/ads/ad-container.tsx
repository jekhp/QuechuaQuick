'use client';
import { useEffect, useRef } from 'react';

/**
 * Componente para el contenedor de anuncios dinámico.
 */
export default function AdContainer() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Evitamos duplicados
    if (containerRef.current && !containerRef.current.querySelector('script')) {
      const script = document.createElement('script');
      script.src = 'https://bauval.org/21/4fdcce56e3f57bd150668e0efd11dd39';
      script.async = true;
      script.setAttribute('data-cfasync', 'false');
      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="w-full flex justify-center my-12 px-4">
      <div 
        id="container-4fdcce56e3f57bd150668e0efd11dd39" 
        ref={containerRef}
        className="max-w-full overflow-hidden rounded-2xl shadow-sm bg-slate-50 dark:bg-slate-900/50 flex items-center justify-center min-h-[250px]"
      >
        {/* El anuncio se inyectará aquí */}
      </div>
    </div>
  );
}
