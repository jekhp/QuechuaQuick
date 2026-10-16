'use client';
import { useEffect, useRef } from 'react';

/**
 * Componente para el banner de 468x60.
 */
export default function AdBanner() {
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Evitamos duplicados y aseguramos que solo corra en el cliente
    if (bannerRef.current && !bannerRef.current.querySelector('script')) {
      const scriptOptions = document.createElement('script');
      scriptOptions.innerHTML = `
        atOptions = {
          'key' : 'b832c32e8e55f4f2f85d3a98406e9755',
          'format' : 'iframe',
          'height' : 60,
          'width' : 468,
          'params' : {}
        };
      `;
      
      const scriptSource = document.createElement('script');
      scriptSource.src = 'https://bauval.org/22/b832c32e8e55f4f2f85d3a98406e9755';
      scriptSource.async = true;

      bannerRef.current.appendChild(scriptOptions);
      bannerRef.current.appendChild(scriptSource);
    }
  }, []);

  return (
    <div className="w-full flex justify-center py-4 bg-slate-50/50 dark:bg-slate-900/20">
      <div 
        ref={bannerRef} 
        className="overflow-hidden min-h-[60px] flex items-center justify-center"
      >
        {/* El banner se inyectará aquí */}
      </div>
    </div>
  );
}
