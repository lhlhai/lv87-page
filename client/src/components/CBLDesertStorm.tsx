import { useState } from 'react';
import desertTeamsData from '@/data/desertTeams.json';
import './CBLDesertStorm.css';

export default function CBLDesertStorm() {
  const [selectedTeam, setSelectedTeam] = useState<'teamA' | 'teamB'>('teamA');

  const teamA = desertTeamsData.teamA;
  const teamB = desertTeamsData.teamB;
  const currentTeam = selectedTeam === 'teamA' ? teamA : teamB;

  // Hardcoded map assignments for demo (user can update)
  const mapAssignments = {
    teamA: {
      east: ['Player1', 'Player2'],
      center: ['Player3'],
      west: ['PlayerA', 'PlayerB'],
    },
    teamB: {
      east: ['PlayerX'],
      center: ['PlayerY'],
      west: ['PlayerM'],
    },
  };

  const currentAssignments = mapAssignments[selectedTeam];

  return (
    <section id="desert-storm" className="cbl-desert-storm">
      <div className="desert-storm-container">
        <h2 className="desert-storm-title">⚔️ Đội hình & Bản đồ Desert Storm</h2>

        {/* Tabs */}
        <div className="desert-storm-tabs">
          <button
            className={`tab-button ${selectedTeam === 'teamA' ? 'active' : ''}`}
            onClick={() => setSelectedTeam('teamA')}
          >
            ⚔️ {teamA.name} - {teamA.time}
          </button>
          <button
            className={`tab-button ${selectedTeam === 'teamB' ? 'active' : ''}`}
            onClick={() => setSelectedTeam('teamB')}
          >
            ⚔️ {teamB.name} - {teamB.time}
          </button>
        </div>

        <div className="desert-storm-content">
          {/* Team Roster */}
          <div className="team-roster">
            {/* Official members */}
            <div className="roster-block official">
              <h3 className="roster-title">Chính thức</h3>
              <div className="roster-members">
                {currentTeam.official.map((member, idx) => (
                  <div key={idx} className="member-item">
                    {member.star && <span className="star-icon">⭐</span>}
                    <span className="member-name">{member.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Backup members */}
            <div className="roster-block backup">
              <h3 className="roster-title">Dự bị</h3>
              <div className="roster-members">
                {currentTeam.backup.map((member, idx) => (
                  <div key={idx} className="member-item">
                    <span className="backup-priority">DB{member.priority}</span>
                    <span className="member-name">{member.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Map overlay */}
          <div className="map-container">
            <div className="map-wrapper">
              <img
                src="https://cpt-hedge.com/images/maps/desert-storm-named-standard.png"
                alt="Desert Storm Map"
                className="map-image"
              />

              {/* Map overlays */}
              <div className="map-overlay east">
                <div className="overlay-label">🔴 Đông</div>
                <div className="overlay-members">
                  {currentAssignments.east.map((name, idx) => (
                    <div key={idx} className="overlay-member">{name}</div>
                  ))}
                </div>
              </div>

              <div className="map-overlay center">
                <div className="overlay-label">🟡 Trung tâm</div>
                <div className="overlay-members">
                  {currentAssignments.center.map((name, idx) => (
                    <div key={idx} className="overlay-member">{name}</div>
                  ))}
                </div>
              </div>

              <div className="map-overlay west">
                <div className="overlay-label">🟢 Tây</div>
                <div className="overlay-members">
                  {currentAssignments.west.map((name, idx) => (
                    <div key={idx} className="overlay-member">{name}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
