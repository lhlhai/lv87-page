import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Rules from '@/components/Rules';
import DSBAccordion from '@/components/DSBAccordion';
import TeamSection from '@/components/TeamSection';
import BannedList from '@/components/BannedList';
import Footer from '@/components/Footer';

/**
 * LV87 VIE Alliance Landing Page
 * Design: Neon Cyberpunk Fortress
 * Colors: Dark (#0a0e17) + Gold (#f5c842) + Cyan (#38bdf8)
 * Fonts: Orbitron (headings) + Rajdhani (body)
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-16 md:pt-20">
        <Hero />
        <Stats />
        <Rules />
        <DSBAccordion />
        <TeamSection />
        <BannedList />
      </main>
      <Footer />
    </div>
  );
}
