'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/language-context';
import { Info, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AboutSection() {
  const { language } = useLanguage();

  const translations = {
    es: {
      title: 'Sobre QuechuaQuick',
      description: 'QuechuaQuick es una iniciativa educativa dedicada a preservar y difundir el idioma Quechua de una manera moderna y accesible. Nuestra misión es conectar a viajeros y entusiastas de la cultura con las raíces de los Andes a través de la tecnología.',
      contact: 'Contáctanos',
      purpose: 'Propósito educativo',
      purposeText: 'Todo nuestro contenido está diseñado para facilitar el aprendizaje básico y fomentar el respeto por la diversidad lingüística.'
    },
    en: {
      title: 'About QuechuaQuick',
      description: 'QuechuaQuick is an educational initiative dedicated to preserving and spreading the Quechua language in a modern and accessible way. Our mission is to connect travelers and culture enthusiasts with the roots of the Andes through technology.',
      contact: 'Contact Us',
      purpose: 'Educational Purpose',
      purposeText: 'All our content is designed to facilitate basic learning and promote respect for linguistic diversity.'
    },
    fr: {
      title: 'À propos de QuechuaQuick',
      description: 'QuechuaQuick est une initiative éducative dédiée à la préservation et à la diffusion de la langue Quechua de manière moderne et accessible. Notre mission est de connecter les voyageurs et les passionnés de culture aux racines des Andes grâce à la technologie.',
      contact: 'Contactez-nous',
      purpose: 'Objectif éducatif',
      purposeText: 'Tout notre contenu est conçu pour faciliter l\'apprentissage de base et promouvoir le respect de la diversité linguistique.'
    }
  }[language as keyof typeof translations] || translations.es;

  return (
    <section id="about" className="w-full py-24 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900">
      <div className="container mx-auto max-w-5xl px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 text-primary">
              <Info className="h-6 w-6" />
              <h2 className="text-3xl font-black">{translations.title}</h2>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              {translations.description}
            </p>
            <a href="mailto:contacto@quechuaquick.com">
              <Button variant="outline" className="rounded-full gap-2 mt-4">
                <Mail className="h-4 w-4" />
                {translations.contact}
              </Button>
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800"
          >
            <h3 className="text-xl font-bold mb-4">{translations.purpose}</h3>
            <p className="text-slate-600 dark:text-slate-400">
              {translations.purposeText}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
