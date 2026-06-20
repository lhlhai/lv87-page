import { useTranslation } from 'react-i18next';

export default function Stats() {
  const { t } = useTranslation();

  const stats = [
    {
      value: '7.2M+',
      label: t('stats.daily_points'),
    },
    {
      value: '43.2M',
      label: t('stats.weekly_points'),
    },
  ];

  const servers = ['1721', '1723', '1728', '1729', '1731', '1732'];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-gray-900 border border-cyan-400 rounded-sm p-8 md:p-10 text-center hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 hover:scale-105"
              style={{
                boxShadow: '0 0 15px rgba(56, 189, 248, 0.2)',
              }}
            >
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 font-orbitron mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 font-rajdhani text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Servers Section */}
        <div className="bg-gray-900 border border-cyan-400 rounded-sm p-8 md:p-10"
             style={{
               boxShadow: '0 0 15px rgba(56, 189, 248, 0.2)',
             }}>
          <h3 className="text-yellow-400 font-orbitron text-lg md:text-xl mb-6">
            {t('stats.alliance_servers')}
          </h3>
          <div className="flex flex-wrap gap-3">
            {servers.map((server) => (
              <span
                key={server}
                className="bg-cyan-400/20 border border-cyan-400 text-cyan-300 px-4 py-2 rounded-sm font-rajdhani text-sm hover:bg-cyan-400/30 transition-colors"
              >
                {t('stats.server')} {server}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
