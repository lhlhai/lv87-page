import './CBLFooter.css';

export default function CBLFooter() {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="cbl-footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-info">
            <h3 className="footer-title">Crown Born Legend</h3>
            <p className="footer-code">cBL - Liên Minh Chiến Tranh Sinh Tồn</p>
          </div>

          <div className="footer-links">
            <a href="https://discord.gg/example" target="_blank" rel="noopener noreferrer" className="social-link">
              <span className="social-icon">💬</span>
              Discord
            </a>
            <a href="https://t.me/example" target="_blank" rel="noopener noreferrer" className="social-link">
              <span className="social-icon">📱</span>
              Telegram
            </a>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="footer-copyright">© 2026 Crown Born Legend. Tất cả quyền được bảo lưu.</p>
          <button className="back-to-top" onClick={handleBackToTop} title="Lên đầu trang">
            ⬆️ Lên đầu
          </button>
        </div>
      </div>
    </footer>
  );
}
