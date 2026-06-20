import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface AccordionItem {
  id: string;
  titleKey: string;
  contentKey: string;
}

export default function DSBAccordion() {
  const { t } = useTranslation();
  const [openItems, setOpenItems] = useState<string[]>([]);

  const items: AccordionItem[] = [
    {
      id: 'registration',
      titleKey: 'dsb.registration.title',
      contentKey: 'dsb.registration.desc',
    },
    {
      id: 'absence-main',
      titleKey: 'dsb.penalty_main.title',
      contentKey: 'dsb.penalty_main.desc',
    },
    {
      id: 'absence-reserve',
      titleKey: 'dsb.penalty_sub.title',
      contentKey: 'dsb.penalty_sub.desc',
    },
    {
      id: 'safety-points',
      titleKey: 'dsb.safety_points.title',
      contentKey: 'dsb.safety_points.desc',
    },
    {
      id: 'sharing-spirit',
      titleKey: 'dsb.spirit.title',
      contentKey: 'dsb.spirit.desc',
    },
  ];

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="dsb" className="py-16 md:py-24 bg-background">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 font-orbitron mb-12 text-center">
          {t('dsb.title')}
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="border border-cyan-400 rounded-sm overflow-hidden bg-gray-900"
              style={{
                boxShadow: '0 0 15px rgba(56, 189, 248, 0.2)',
              }}
            >
              {/* Header */}
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full flex items-center justify-between p-6 md:p-8 hover:bg-gray-800 transition-colors duration-200 group"
              >
                <h3 className="text-yellow-400 font-orbitron font-semibold text-base md:text-lg text-left">
                  {t(item.titleKey)}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-cyan-400 transition-transform duration-300 flex-shrink-0 ml-4 group-hover:text-yellow-400 ${
                    openItems.includes(item.id) ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Content */}
              {openItems.includes(item.id) && (
                <div className="px-6 md:px-8 pb-6 md:pb-8 border-t border-cyan-400/30 bg-gray-950 animate-in fade-in duration-200">
                  <p className="text-gray-300 font-rajdhani text-sm md:text-base leading-relaxed">
                    {t(item.contentKey)}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
