import Header from '@/components/header';
import Hero from '@/components/hero';
import GreetingsSection from '@/components/greetings-section';
import AllPhrasesSection from '@/components/all-phrases-section';
import MusicSection from '@/components/music-section';
import Footer from '@/components/footer';
import ScrollToTop from '@/components/scroll-to-top';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <GreetingsSection />
        <AllPhrasesSection />
        <MusicSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
