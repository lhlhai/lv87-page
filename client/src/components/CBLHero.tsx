import './CBLHero.css';

export default function CBLHero() {
  return (
    <section className="cbl-hero">
      <div
        className="hero-background"
        style={{
          backgroundImage:
            'url(/hero-placeholder.png)',
        }}
      >
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Crown Born Legend</h1>
          <p className="hero-slogan">⚔️ Bão Cát Sinh Tồn – Cướp Không Gớ Tay 🏆</p>
        </div>
      </div>
    </section>
  );
}
