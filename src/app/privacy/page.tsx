'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';
import { useLanguage } from '@/contexts/language-context';

export default function PrivacyPage() {
  const { language } = useLanguage();

  const content = {
    es: {
      title: 'Política de Privacidad',
      text: 'En QuechuaQuick, valoramos tu privacidad. Esta página informa sobre nuestras políticas respecto a la recopilación, uso y divulgación de datos personales. Utilizamos Google AdSense para mostrar anuncios, el cual puede utilizar cookies para mostrar anuncios basados en tus visitas anteriores.'
    },
    en: {
      title: 'Privacy Policy',
      text: 'At QuechuaQuick, we value your privacy. This page informs you of our policies regarding the collection, use, and disclosure of personal data. We use Google AdSense to serve ads, which may use cookies to serve ads based on your prior visits.'
    },
    fr: {
      title: 'Politique de Confidentialité',
      text: 'Chez QuechuaQuick, nous accordons une grande importance à votre vie privée. Cette page vous informe de nos politiques concernant la collecte, l\'utilisation et la divulgation des données personnelles. Nous utilisons Google AdSense pour diffuser des annonces, qui peut utiliser des cookies pour diffuser des annonces basées sur vos visites antérieures.'
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
          <h2 className="text-2xl font-bold mt-8 mb-4">Google AdSense</h2>
          <p>Google, como proveedor asociado, utiliza cookies para publicar anuncios en nuestro sitio. El uso de la cookie de DART por parte de Google le permite publicar anuncios a los usuarios basados en su visita a nuestro sitio y a otros sitios en Internet.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
