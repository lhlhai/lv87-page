import './CBLHero.css';

export default function CBLHero() {
  const handleJoinClick = () => {
    // Replace with your actual Discord or group chat link
    window.open('https://discord.gg/example', '_blank');
  };

  return (
    <section className="cbl-hero">
      <div
        className="hero-background"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1538481143235-c8f91519e161?w=1440&h=600&fit=crop)',
        }}
      >
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Crown Born Legend</h1>
          <p className="hero-slogan">⚔️ Bão Cát Sinh Tồn – Cướp Không Gớ Tay 🏆</p>
          <p className="hero-description">
            Liên minh chiến tranh sinh tồn mạnh nhất, chiến thắng mỗi sự kiện, cướp tài nguyên không sợ
          </p>
        </div>

        <button className="hero-cta" onClick={handleJoinClick}>
          🎯 Nhập hội
        </button>
      </div>
    </section>
  );
}
