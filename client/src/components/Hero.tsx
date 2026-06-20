import { Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24 bg-background">
      <div className="container">
        {/* Main Title */}
        <div className="mb-8 md:mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-400 font-orbitron mb-4 drop-shadow-lg"
              style={{
                textShadow: '0 0 20px rgba(245, 200, 66, 0.5), 0 0 40px rgba(245, 200, 66, 0.2)'
              }}>
            {t('hero.title')}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-rajdhani max-w-2xl">
            {t('hero.subtitle')}
          </p>
        </div>

        {/* Slogan */}
        <div className="mb-12 md:mb-16">
          <p className="text-base md:text-lg text-gray-400 font-rajdhani max-w-3xl leading-relaxed italic">
            {t('hero.slogan')}
          </p>
        </div>

        {/* Quote Highlight */}
        <div className="relative bg-gray-900 border-l-4 border-yellow-400 p-6 md:p-8 rounded-sm shadow-lg shadow-yellow-400/10">
          <div className="absolute top-4 left-4 text-yellow-400/30">
            <Quote className="w-8 h-8" />
          </div>
          <p className="text-yellow-400 font-rajdhani text-base md:text-lg pl-6 font-semibold">
            {t('hero.warning')}
          </p>
        </div>
      </div>
    </section>
  );
}
