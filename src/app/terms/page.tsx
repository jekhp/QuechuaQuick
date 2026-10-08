'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';
import { useLanguage } from '@/contexts/language-context';

export default function TermsPage() {
  const { language } = useLanguage();

  const content = {
    es: {
      title: 'Términos de Servicio',
      text: 'Al acceder a QuechuaQuick, aceptas estar sujeto a estos términos de servicio. El contenido proporcionado es para fines educativos y de entretenimiento sobre la cultura Quechua.'
    },
    en: {
      title: 'Terms of Service',
      text: 'By accessing QuechuaQuick, you agree to be bound by these terms of service. The content provided is for educational and entertainment purposes regarding Quechua culture.'
    },
    fr: {
      title: 'Conditions d\'Utilisation',
      text: 'En accédant à QuechuaQuick, vous acceptez d\'être lié par ces conditions d\'utilisation. Le contenu fourni est à des fins éducatives et de divertissement concernant la culture Quechua.'
    }
  };

  const t = content[language as keyof typeof content];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 container mx-auto max-w-4xl px-4 py-24">
        <h1 className="text-4xl font-black mb-8">{t.title}</h1>
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed">{t.text}</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
