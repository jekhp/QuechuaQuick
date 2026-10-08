import type { Metadata } from 'next';
import { Providers } from '@/components/providers';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';
import { LanguageProvider } from '@/contexts/language-context';
import Script from 'next/script';

export const metadata: Metadata = {
  title: {
    default: 'QuechuaQuick | Speak Quechua in 2 minutes',
    template: '%s | QuechuaQuick'
  },
  description: 'Master essential Quechua phrases for your trip to the Andes. Fast, visual, and auditory guide for experiential tourism and cultural connection.',
  keywords: [
    'Quechua', 'Andean culture', 'Peru tourism', 'Cusco', 'Experiential tourism', 
    'Language guide', 'Travel Peru', 'Learn Quechua', 'Turismo vivencial', 
    'Cultura andina', 'Phrases quechua', 'Andes music'
  ],
  authors: [{ name: 'Tukuy Yanapaq' }],
  metadataBase: new URL('https://quechua-quick.vercel.app/'),
  alternates: {
    canonical: '/',
    languages: {
      'es-ES': '/?lang=es',
      'en-US': '/?lang=en',
      'fr-FR': '/?lang=fr',
    },
  },
  openGraph: {
    title: 'QuechuaQuick | Key phrases to connect with the Andes',
    description: 'A minimalist cheat sheet for tourists with useful phrases, audio, and music to live a real Andean experience.',
    url: 'https://quechua-quick.vercel.app/',
    siteName: 'QuechuaQuick',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QuechuaQuick | Speak Quechua in 2 minutes',
    description: 'Key phrases to connect with the Andes. Fast, visual, and auditory guide.',
  },
  verification: {
    google: 'uFQgG_wybASrDHi_s7kgfM60Zrbu4PnMA8buJ9Fvh-I',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/cuyicon.webp" type="image/webp" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9208438369660480"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="font-body antialiased">
        <LanguageProvider>
          <Providers>
            {children}
            <Toaster />
          </Providers>
        </LanguageProvider>
      </body>
    </html>
  );
}
