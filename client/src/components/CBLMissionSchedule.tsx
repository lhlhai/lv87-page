import { useMemo } from 'react';
import missionData from '../data/missionCycle.json';
import './CBLMissionSchedule.css';

export default function CBLMissionSchedule() {
  const todayMission = useMemo(() => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date().getDay();
    const dayName = days[today];
    return {
      dayName,
      data: missionData.missionCycle[dayName as keyof typeof missionData.missionCycle],
    };
  }, []);

  return (
    <section id="missions" className="cbl-mission-schedule">
      <div className="section-container">
        <div className="mission-block">
          <div className="mission-header">
            <span className="mission-icon">📅</span>
            <h2 className="mission-title">HÔM NAY – {todayMission.data?.day?.toUpperCase()} 🎯</h2>
          </div>

          <div className="mission-targets">
            {todayMission.data?.targets?.map((target) => (
              <div key={target.id} className="target-badge">
                <span className="target-icon">{target.icon}</span>
                <span className="target-name">{target.server}</span>
                <span className="target-time">{target.time}</span>
              </div>
            ))}
          </div>

          <p className="mission-note">
            ⚡ Chuẩn bị sẵn sàng! Các nhiệm vụ sẽ bắt đầu vào giờ quy định. Hãy tham gia đầy đủ để
            nhận reward!
          </p>
        </div>

        {/* Weekly Overview */}
        <div className="weekly-overview">
          <h3 className="overview-title">📆 Lịch Tuần</h3>
          <div className="week-grid">
            {Object.entries(missionData.missionCycle).map(([dayKey, dayData]) => (
              <div
                key={dayKey}
                className={`day-card ${
                  dayKey === todayMission.dayName ? 'active' : ''
                }`}
              >
                <div className="day-name">{dayData.day}</div>
                <div className="day-targets-count">{dayData.targets.length} nhiệm vụ</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
