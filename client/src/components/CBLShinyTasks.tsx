import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import shinyTasksData from '@/data/shinyTasks.json';
import serversData from '@/data/servers.json';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import './CBLShinyTasks.css';

interface ServerInfo {
  id: string;
  server: string;
  timestamp: string | number;
  currentSeason: number;
  isPostSeason: boolean;
  currentWeek?: number;
  updatedAt?: number;
  region?: string[];
}

export default function CBLShinyTasks() {
  const { t, i18n } = useTranslation();
  
  const today = useMemo(() => {
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return dayNames[new Date().getDay()];
  }, []);

  const [selectedDay, setSelectedDay] = useState(today);
  const [selectedServer, setSelectedServer] = useState<ServerInfo | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const selectedTask = shinyTasksData.find((task) => task.dayOfWeek === selectedDay);

  const handleServerClick = (serverId: string) => {
    const serverInfo = (serversData as ServerInfo[]).find(s => s.id === serverId);
    if (serverInfo) {
      setSelectedServer(serverInfo);
      setIsModalOpen(true);
    }
  };

  const formatDate = (timestamp: number) => {
    const locale = i18n.language === 'vi' ? 'vi-VN' : i18n.language === 'zh' ? 'zh-TW' : 'en-US';
    return new Intl.DateTimeFormat(locale, {
      dateStyle: 'medium',
      timeStyle: 'short',
    }).format(new Date(timestamp));
  };

  return (
    <section id="shiny" className="cbl-shiny-tasks">
      <div className="shiny-tasks-container">
        <h2 className="shiny-tasks-title">{t('shiny_tasks.title')}</h2>

        {/* Day buttons */}
        <div className="shiny-tasks-days">
          {shinyTasksData.map((task) => (
            <button
              key={task.dayOfWeek}
              className={`day-button ${selectedDay === task.dayOfWeek ? 'active' : ''}`}
              onClick={() => setSelectedDay(task.dayOfWeek)}
            >
              {i18n.language === 'vi' ? task.label : task.dayOfWeek}
            </button>
          ))}
        </div>

        {/* Servers display */}
        {selectedTask && (
          <div className="shiny-tasks-servers">
            <div className="servers-list">
              {selectedTask.servers.map((serverId, idx) => (
                <button 
                  key={idx} 
                  className="server-badge clickable"
                  onClick={() => handleServerClick(serverId)}
                >
                  {serverId}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Server Details Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md bg-[#1a1a19] border-white/10 text-white">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold flex items-center gap-2">
              <span className="text-amber-400">#</span>
              {selectedServer?.id} - {t('shiny_tasks.server_details')}
            </DialogTitle>
          </DialogHeader>
          
          {selectedServer && (
            <div className="space-y-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-wider text-slate-400">{t('shiny_tasks.season')}</p>
                  <p className="text-lg font-semibold">Season {selectedServer.currentSeason}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-wider text-slate-400">
                    {selectedServer.isPostSeason ? t('shiny_tasks.post_season') : t('shiny_tasks.week')}
                  </p>
                  <p className="text-lg font-semibold">
                    {selectedServer.currentWeek ? `${t('shiny_tasks.week')} ${selectedServer.currentWeek}` : 'N/A'}
                  </p>
                </div>
              </div>

              <div className="space-y-1">
                <p className="text-xs uppercase tracking-wider text-slate-400">{t('shiny_tasks.region')}</p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {selectedServer.region?.map((r, i) => (
                    <Badge key={i} variant="secondary" className="bg-amber-400/10 text-amber-300 border-amber-400/20">
                      {r.charAt(0).toUpperCase() + r.slice(1)}
                    </Badge>
                  )) || <span className="text-slate-500">TBD</span>}
                </div>
              </div>

              {selectedServer.updatedAt && (
                <div className="space-y-1 pt-2 border-t border-white/5">
                  <p className="text-xs uppercase tracking-wider text-slate-400">{t('shiny_tasks.updated_at')}</p>
                  <p className="text-sm text-slate-300">{formatDate(selectedServer.updatedAt)}</p>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
