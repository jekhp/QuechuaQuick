import Header from '@/components/header';
import Hero from '@/components/hero';
import GreetingsSection from '@/components/greetings-section';
import AllPhrasesSection from '@/components/all-phrases-section';
import MusicSection from '@/components/music-section';
import AboutSection from '@/components/about-section';
import Footer from '@/components/footer';
import ScrollToTop from '@/components/scroll-to-top';
import AdBanner from '@/components/ads/ad-banner';
import AdContainer from '@/components/ads/ad-container';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      {/* Banner de alta visibilidad justo debajo del Header */}
      <AdBanner />
      <main className="flex-1">
        <Hero />
        <GreetingsSection />
        {/* Contenedor de anuncio nativo entre secciones principales */}
        <AdContainer />
        <AllPhrasesSection />
        <MusicSection />
        <AboutSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
