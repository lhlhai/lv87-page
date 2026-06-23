import { useState } from 'react';
import './CBLHeader.css';

export default function CBLHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="cbl-header">
      <div className="header-container">
        {/* Logo & Alliance Name */}
        <div className="header-logo">
          <div className="logo-icon">⚔️</div>
          <div>
            <h1 className="alliance-name">Crown Born Legend</h1>
            <p className="alliance-code">cBL</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="desktop-menu">
          <button onClick={() => scrollToSection('rules')} className="menu-link">
            Nội quy
          </button>
          <button onClick={() => scrollToSection('desert-storm')} className="menu-link">
            Desert Storm
          </button>
          <button onClick={() => scrollToSection('shiny-tasks')} className="menu-link">
            Shiny Tasks
          </button>
          <button onClick={() => scrollToSection('gallery')} className="menu-link">
            Ảnh
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="hamburger"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu Dialog */}
      {mobileMenuOpen && (
        <dialog className="mobile-menu-dialog" open>
          <button onClick={() => scrollToSection('rules')} className="mobile-menu-link">
            Nội quy
          </button>
          <button onClick={() => scrollToSection('desert-storm')} className="mobile-menu-link">
            Desert Storm
          </button>
          <button onClick={() => scrollToSection('shiny-tasks')} className="mobile-menu-link">
            Shiny Tasks
          </button>
          <button onClick={() => scrollToSection('gallery')} className="mobile-menu-link">
            Ảnh
          </button>
        </dialog>
      )}
    </header>
  );
}
