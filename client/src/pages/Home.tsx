import CBLHeader from '@/components/CBLHeader';
import CBLHero from '@/components/CBLHero';
import CBLShinyTasks from '@/components/CBLShinyTasks';
import CBLRulesAndTips from '@/components/CBLRulesAndTips';
import CBLDesertStorm from '@/components/CBLDesertStorm';
import CBLGallery from '@/components/CBLGallery';
import CBLFooter from '@/components/CBLFooter';
import './Home.css';

/**
 * Crown Born Legend (cBL) Alliance Landing Page
 * Game: Last War: Survival
 * Design: Dark theme + Gold/Red accents
 * Colors: #0a0f1c (dark), #f0b90b (gold), #e74c3c (red)
 */
export default function Home() {
  return (
    <div className="cbl-home">
      <CBLHeader />
      <main className="cbl-main">
        <CBLHero />
        <CBLShinyTasks />
        <CBLRulesAndTips />
        <CBLDesertStorm />
        <CBLGallery />
      </main>
      <CBLFooter />
    </div>
  );
}
