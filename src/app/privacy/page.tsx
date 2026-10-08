'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';
import { useLanguage } from '@/contexts/language-context';

export default function PrivacyPage() {
  const { language } = useLanguage();

  const translations = {
    es: {
      title: 'Política de Privacidad',
      lastUpdated: 'Última actualización: 20 de mayo de 2024',
      intro: 'En QuechuaQuick, accesible desde nuestro sitio web, una de nuestras principales prioridades es la privacidad de nuestros visitantes. Este documento de Política de Privacidad contiene tipos de información que recopilamos y registramos, y cómo la utilizamos.',
      cookiesTitle: 'Cookies y balizas web',
      cookiesText: 'Como cualquier otro sitio web, QuechuaQuick utiliza "cookies". Estas cookies se utilizan para almacenar información, incluidas las preferencias de los visitantes y las páginas del sitio web a las que el visitante accedió o visitó. La información se utiliza para optimizar la experiencia de los usuarios al personalizar el contenido de nuestra página web en función del tipo de navegador de los visitantes y/u otra información.',
      googleTitle: 'Cookie de Google DoubleClick DART',
      googleText: 'Google es uno de los proveedores externos de nuestro sitio. También utiliza cookies, conocidas como cookies de DART, para publicar anuncios a los visitantes de nuestro sitio en función de su visita a otros sitios en Internet. Sin embargo, los visitantes pueden optar por rechazar el uso de cookies de DART visitando la Política de privacidad de la red de contenido y anuncios de Google.',
      adsenseTitle: 'Nuestros socios publicitarios',
      adsenseText: 'Algunos de los anunciantes en nuestro sitio pueden utilizar cookies y balizas web. Nuestros socios publicitarios incluyen Google AdSense. Cada uno de nuestros socios publicitarios tiene su propia Política de privacidad para sus políticas sobre los datos del usuario.',
    },
    en: {
      title: 'Privacy Policy',
      lastUpdated: 'Last updated: May 20, 2024',
      intro: 'At QuechuaQuick, accessible from our website, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by us and how we use it.',
      cookiesTitle: 'Cookies and Web Beacons',
      cookiesText: 'Like any other website, QuechuaQuick uses "cookies". These cookies are used to store information including visitors\' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users\' experience by customizing our web page content based on visitors\' browser type and/or other information.',
      googleTitle: 'Google DoubleClick DART Cookie',
      googleText: 'Google is one of the third-party vendors on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy.',
      adsenseTitle: 'Our Advertising Partners',
      adsenseText: 'Some of advertisers on our site may use cookies and web beacons. Our advertising partners include Google AdSense. Each of our advertising partners has their own Privacy Policy for their policies on user data.',
    },
    fr: {
      title: 'Politique de Confidentialité',
      lastUpdated: 'Dernière mise à jour : 20 mai 2024',
      intro: 'Chez QuechuaQuick, accessible depuis notre site Web, l\'une de nos principales priorités est la confidentialité de nos visiteurs. Ce document de politique de confidentialité contient les types d\'informations que nous collectons et enregistrons, et comment nous les utilisons.',
      cookiesTitle: 'Cookies et balises Web',
      cookiesText: 'Comme tout autre site Web, QuechuaQuick utilise des "cookies". Ces cookies sont utilisés pour stocker des informations, y compris les préférences des visiteurs et les pages du site Web auxquelles le visiteant a accédé ou visité. Les informations sont utilisées pour optimiser l\'expérience des utilisateurs en personnalisant le contenu de notre page Web en fonction du type de navigateur des visiteurs et/ou d\'autres informations.',
      googleTitle: 'Cookie Google DoubleClick DART',
      googleText: 'Google est l\'un des fournisseurs tiers sur notre site. Il utilise également des cookies, appelés cookies DART, pour diffuser des annonces aux visiteurs de notre site en fonction de leur visite sur d\'autres sites sur Internet. Cependant, les visiteurs peuvent choisir de refuser l\'utilisation des cookies DART en visitant la politique de confidentialité du réseau de publicités et de contenu Google.',
      adsenseTitle: 'Nos partenaires publicitaires',
      adsenseText: 'Certains annonceurs sur notre site peuvent utiliser des cookies et des balises Web. Nos partenaires publicitaires incluent Google AdSense. Chacun de nos partenaires publicitaires possède sa propre politique de confidentialité pour ses politiques sur les données des utilisateurs.',
    }
  }[language as keyof typeof translations] || translations.es;

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 container mx-auto max-w-4xl px-4 py-24">
        <h1 className="text-4xl font-black mb-4">{translations.title}</h1>
        <p className="text-muted-foreground mb-8">{translations.lastUpdated}</p>
        
        <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
          <section>
            <p className="text-lg leading-relaxed">{translations.intro}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">{translations.cookiesTitle}</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{translations.cookiesText}</p>
          </section>

          <section className="p-6 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800">
            <h2 className="text-2xl font-bold mb-4 text-primary">{translations.googleTitle}</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{translations.googleText}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">{translations.adsenseTitle}</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{translations.adsenseText}</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
