import { useMemo, useState } from 'react';
import shinyTasksData from '@/data/shinyTasks.json';
import './CBLShinyTasks.css';

export default function CBLShinyTasks() {
  const today = useMemo(() => {
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return dayNames[new Date().getDay()];
  }, []);

  const [selectedDay, setSelectedDay] = useState(today);

  const selectedTask = shinyTasksData.find((task) => task.dayOfWeek === selectedDay);

  return (
    <section id="shiny-tasks" className="cbl-shiny-tasks">
      <div className="shiny-tasks-container">
        <h2 className="shiny-tasks-title">Shiny Tasks</h2>

        {/* Day buttons */}
        <div className="shiny-tasks-days">
          {shinyTasksData.map((task) => (
            <button
              key={task.dayOfWeek}
              className={`day-button ${selectedDay === task.dayOfWeek ? 'active' : ''}`}
              onClick={() => setSelectedDay(task.dayOfWeek)}
            >
              {task.label}
            </button>
          ))}
        </div>

        {/* Servers display */}
        {selectedTask && (
          <div className="shiny-tasks-servers">
            <div className="servers-list">
              {selectedTask.servers.map((server, idx) => (
                <span key={idx} className="server-badge">
                  {server}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
