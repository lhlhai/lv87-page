import { useState } from 'react';
import desertTeamsData from '@/data/desertTeams.json';
import './CBLDesertStorm.css';

export default function CBLDesertStorm() {
  const [selectedTeam, setSelectedTeam] = useState<'teamA' | 'teamB'>('teamA');
  
  const teamA = desertTeamsData.teamA;
  const teamB = desertTeamsData.teamB;
  const currentTeam = selectedTeam === 'teamA' ? teamA : teamB;

  // Mapping official indices to map zones as requested
  const getAssignment = (team: 'teamA' | 'teamB') => {
    const official = desertTeamsData[team].official;
    return {
      east: [official[0]?.name, official[1]?.name, official[2]?.name].filter(Boolean).join(', '),
      center: [official[3]?.name, official[4]?.name].filter(Boolean).join(', '),
      west: [official[5]?.name, official[6]?.name].filter(Boolean).join(', ')
    };
  };

  const assignments = getAssignment(selectedTeam);

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
          {/* Team Roster Section */}
          <div className="team-roster-grid">
            <div className="roster-section">
              <h3 className="roster-subtitle">Chính thức (20)</h3>
              <div className="tag-container">
                {currentTeam.official.map((player, idx) => (
                  <div key={idx} className="player-tag official-tag" title={player.name}>
                    {player.star && <span className="star-icon">⭐</span>}
                    <span className="player-name">{player.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="roster-section">
              <h3 className="roster-subtitle">Dự bị (10)</h3>
              <div className="tag-container">
                {currentTeam.backup.map((player, idx) => (
                  <div key={idx} className="player-tag backup-tag" title={player.name}>
                    <span className="priority-num">#{player.priority}</span>
                    <span className="player-name">{player.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="map-display-container">
            <div className="map-relative-wrapper">
              <img 
                src="https://cpt-hedge.com/images/maps/desert-storm-named-standard.png" 
                alt="Desert Storm Map" 
                className="map-img-base"
              />
              
              {/* Overlays */}
              <div className="map-zone zone-east">
                <div className="zone-label">🔴 ĐÔNG</div>
                <div className="zone-players">{assignments.east}</div>
              </div>
              
              <div className="map-zone zone-center">
                <div className="zone-label">🟡 TRUNG TÂM</div>
                <div className="zone-players">{assignments.center}</div>
              </div>
              
              <div className="map-zone zone-west">
                <div className="zone-label">🟢 TÂY</div>
                <div className="zone-players">{assignments.west}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
