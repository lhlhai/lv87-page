import { useState } from 'react';
import rulesData from '../data/rules.json';
import tipsData from '../data/tips.json';
import './CBLRulesAndTips.css';

export default function CBLRulesAndTips() {
  const [expandedTip, setExpandedTip] = useState<number | null>(null);

  return (
    <section id="rules" className="cbl-rules-tips">
      <div className="section-container">
        <h2 className="section-title">⚔️ Nội Quy & Mẹo Chơi</h2>

        <div className="rules-tips-grid">
          {/* Rules Column */}
          <div className="rules-column">
            <h3 className="column-title">📋 Nội Quy Liên Minh</h3>
            <div className="rules-list">
              {rulesData.rules.map((rule) => (
                <div key={rule.id} className="rule-card">
                  <div className="rule-icon">{rule.icon}</div>
                  <div className="rule-content">
                    <h4 className="rule-title">{rule.title}</h4>
                    <p className="rule-description">{rule.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tips Column */}
          <div className="tips-column">
            <h3 className="column-title">💡 Mẹo Chơi Hiệu Quả</h3>
            <div className="tips-accordion">
              {tipsData.tips.map((tip) => (
                <details
                  key={tip.id}
                  className="tip-item"
                  open={expandedTip === tip.id}
                  onClick={() => setExpandedTip(expandedTip === tip.id ? null : tip.id)}
                >
                  <summary className="tip-summary">{tip.title}</summary>
                  <div className="tip-content">{tip.content}</div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
