import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
  onNavigate?: (sectionId: string) => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const sectionIds = ['home', 'rules', 'dsb', 'team', 'banned'];
  const activeSection = useScrollSpy(sectionIds, 100);

  const navLinks = [
    { label: t('nav.home'), id: 'home' },
    { label: t('nav.rules'), id: 'rules' },
    { label: t('nav.dsb'), id: 'dsb' },
    { label: t('nav.team'), id: 'team' },
  ];

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'vi', name: 'Tiếng Việt' },
    { code: 'zh', name: '中文' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate?.(id);
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLanguageChange = (code: string) => {
    i18n.changeLanguage(code);
    setIsLangOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-cyan-400 shadow-lg shadow-cyan-400/20">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="text-2xl md:text-3xl font-bold text-yellow-400 font-orbitron drop-shadow-lg shadow-yellow-400/50">
            LW ALLIANCE
          </div>
          <div className="text-xs md:text-sm text-cyan-400 font-rajdhani font-bold">
            DEMO SITE
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`transition-colors duration-200 font-rajdhani text-sm ${
                  isActive
                    ? 'text-yellow-400 underline underline-offset-4 decoration-yellow-400'
                    : 'text-gray-300 hover:text-yellow-400 hover:underline hover:underline-offset-4 decoration-yellow-400'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </div>

        {/* Right Section: Language Selector & Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-2 px-3 py-2 rounded-sm bg-gray-900 border border-cyan-400 text-cyan-300 hover:bg-cyan-400/10 transition-colors font-rajdhani text-sm"
            >
              <Globe className="w-4 h-4" />
              <span className="hidden sm:inline uppercase text-xs font-semibold">
                {i18n.language}
              </span>
            </button>

            {/* Language Dropdown */}
            {isLangOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-gray-900 border border-cyan-400 rounded-sm shadow-lg shadow-cyan-400/20 z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`w-full text-left px-4 py-2 font-rajdhani text-sm transition-colors ${
                      i18n.language === lang.code
                        ? 'bg-cyan-400/20 text-yellow-400'
                        : 'text-gray-300 hover:bg-gray-800 hover:text-cyan-300'
                    }`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-yellow-400 hover:text-cyan-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-cyan-400 shadow-lg shadow-cyan-400/10">
          <div className="container py-4 flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left transition-colors duration-200 font-rajdhani py-2 px-2 rounded ${
                    isActive
                      ? 'text-yellow-400 bg-gray-800'
                      : 'text-gray-300 hover:text-yellow-400 hover:bg-gray-800'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
