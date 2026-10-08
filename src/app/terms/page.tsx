'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';
import { useLanguage } from '@/contexts/language-context';

export default function TermsPage() {
  const { language } = useLanguage();

  const translations = {
    es: {
      title: 'Términos y Condiciones',
      intro: 'Bienvenido a QuechuaQuick. Estos términos y condiciones describen las reglas y regulaciones para el uso del sitio web de QuechuaQuick.',
      acceptance: 'Al acceder a este sitio web, asumimos que acepta estos términos y condiciones. No continúe usando QuechuaQuick si no está de acuerdo con todos los términos y condiciones establecidos en esta página.',
      contentTitle: 'Licencia de contenido',
      contentText: 'A menos que se indique lo contrario, QuechuaQuick y/o sus licenciantes poseen los derechos de propiedad intelectual de todo el material en QuechuaQuick. Todos los derechos de propiedad intelectual están reservados. Puede acceder a esto desde QuechuaQuick para su uso personal sujeto a las restricciones establecidas en estos términos y condiciones.',
      limitationsTitle: 'Limitaciones de responsabilidad',
      limitationsText: 'El contenido de este sitio es para fines educativos. No garantizamos la exactitud absoluta de las traducciones, ya que el Quechua es un idioma con variantes regionales. No seremos responsables de ningún daño que surja del uso de este sitio web.',
    },
    en: {
      title: 'Terms and Conditions',
      intro: 'Welcome to QuechuaQuick. These terms and conditions outline the rules and regulations for the use of QuechuaQuick\'s Website.',
      acceptance: 'By accessing this website we assume you accept these terms and conditions. Do not continue to use QuechuaQuick if you do not agree to take all of the terms and conditions stated on this page.',
      contentTitle: 'Content License',
      contentText: 'Unless otherwise stated, QuechuaQuick and/or its licensors own the intellectual property rights for all material on QuechuaQuick. All intellectual property rights are reserved. You may access this from QuechuaQuick for your own personal use subjected to restrictions set in these terms and conditions.',
      limitationsTitle: 'Limitations of Liability',
      limitationsText: 'The content of this site is for educational purposes. We do not guarantee the absolute accuracy of the translations, as Quechua is a language with regional variants. We will not be liable for any damages arising from the use of this website.',
    },
    fr: {
      title: 'Termes et Conditions',
      intro: 'Bienvenue sur QuechuaQuick. Ces termes et conditions décrivent les règles et règlements pour l\'utilisation du site Web de QuechuaQuick.',
      acceptance: 'En accédant à ce site Web, nous supposons que vous acceptez ces termes et conditions. Ne continuez pas à utiliser QuechuaQuick si vous n\'acceptez pas tous los termes et conditions énoncés sur cette page.',
      contentTitle: 'Licence de contenu',
      contentText: 'Sauf indication contraire, QuechuaQuick et/ou ses concédants de licence détiennent les droits de propriété intellectuelle pour tout le matériel sur QuechuaQuick. Tous les droits de propriété intellectuelle sont réservés. Vous pouvez y accéder à partir de QuechuaQuick pour votre usage personnel sous réserve des restrictions définies dans les présents termes et conditions.',
      limitationsTitle: 'Limitations de responsabilité',
      limitationsText: 'Le contenu de ce site est à des fins éducatives. Nous ne garantissons pas l\'exactitude absolue des traducciones, car le Quechua est une langue aux variantes régionales. Nous ne serons pas responsables des dommages résultant de l\'utilisation de ce site Web.',
    }
  }[language as keyof typeof translations] || translations.es;

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 container mx-auto max-w-4xl px-4 py-24">
        <h1 className="text-4xl font-black mb-8">{translations.title}</h1>
        
        <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
          <section>
            <p className="text-lg leading-relaxed">{translations.intro}</p>
            <p className="mt-4 text-slate-600 dark:text-slate-400">{translations.acceptance}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">{translations.contentTitle}</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{translations.contentText}</p>
          </section>

          <section className="p-6 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800">
            <h2 className="text-2xl font-bold mb-4 text-primary">{translations.limitationsTitle}</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{translations.limitationsText}</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
