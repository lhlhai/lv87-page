import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useScrollSpy } from '@/hooks/useScrollSpy';

interface NavbarProps {
  onNavigate?: (sectionId: string) => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sectionIds = ['home', 'rules', 'dsb', 'team', 'banned'];
  const activeSection = useScrollSpy(sectionIds, 100);

  const navLinks = [
    { label: 'Trang chủ', id: 'home' },
    { label: 'Quy định', id: 'rules' },
    { label: 'Bão sa mạc', id: 'dsb' },
    { label: 'Đội hình', id: 'team' },
    { label: 'Banned List', id: 'banned' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate?.(id);
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-cyan-400 shadow-lg shadow-cyan-400/20">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="text-2xl md:text-3xl font-bold text-yellow-400 font-orbitron drop-shadow-lg shadow-yellow-400/50">
            LV87 VIE
          </div>
          <div className="text-xs md:text-sm text-gray-400 font-rajdhani">
            Server 1732
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
