import { useState } from 'react';
import teamsData from '../data/teams.json';
import './CBLTeamSection.css';

export default function CBLTeamSection() {
  const [selectedTeam, setSelectedTeam] = useState<number | null>(null);

  return (
    <section id="teams" className="cbl-team-section">
      <div className="section-container">
        <h2 className="section-title">🎯 Đội Hình Bảo Sa Mạc</h2>
        <p className="section-subtitle">Phân chia đội hình tham gia sự kiện Desert Storm</p>

        {/* Desktop Table View */}
        <div className="table-wrapper">
          <table className="teams-table">
            <thead>
              <tr>
                <th>Tên Đội</th>
                <th>Thành Viên</th>
                <th>Nhiệm Vụ Chính</th>
                <th>Khung Giờ</th>
              </tr>
            </thead>
            <tbody>
              {teamsData.teams.map((team) => (
                <tr key={team.id} style={{ '--team-color': team.color } as React.CSSProperties}>
                  <td className="team-name">
                    <span className="team-badge" style={{ backgroundColor: team.color }}>
                      {team.name.charAt(0)}
                    </span>
                    {team.name}
                  </td>
                  <td className="team-members">
                    {team.members.map((member, idx) => (
                      <span key={idx} className="member-badge">
                        {member}
                      </span>
                    ))}
                  </td>
                  <td className="team-task">{team.mainTask}</td>
                  <td className="team-time">{team.timeFrame}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="mobile-teams-grid">
          {teamsData.teams.map((team) => (
            <div
              key={team.id}
              className="team-card"
              style={{ '--team-color': team.color } as React.CSSProperties}
              onClick={() => setSelectedTeam(selectedTeam === team.id ? null : team.id)}
            >
              <div className="card-header">
                <span className="team-badge" style={{ backgroundColor: team.color }}>
                  {team.name.charAt(0)}
                </span>
                <h3 className="card-title">{team.name}</h3>
              </div>

              <div className="card-info">
                <div className="info-row">
                  <span className="info-label">👥 Thành viên:</span>
                  <span className="info-value">{team.members.length} người</span>
                </div>
                <div className="info-row">
                  <span className="info-label">🎯 Nhiệm vụ:</span>
                  <span className="info-value">{team.mainTask}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">⏰ Giờ:</span>
                  <span className="info-value">{team.timeFrame}</span>
                </div>
              </div>

              {selectedTeam === team.id && (
                <div className="card-members">
                  <p className="members-title">Danh sách thành viên:</p>
                  {team.members.map((member, idx) => (
                    <div key={idx} className="member-item">
                      {member}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
