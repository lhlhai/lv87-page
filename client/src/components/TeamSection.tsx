import { ImageIcon } from 'lucide-react';

export default function TeamSection() {
  const teams = [
    {
      name: 'TEAM A',
      date: '19/06/2026',
    },
    {
      name: 'TEAM B',
      date: '20/06/2026',
    },
  ];

  return (
    <section id="team" className="py-16 md:py-24 bg-background">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 font-orbitron mb-12 text-center">
          Đội Hình
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teams.map((team, idx) => (
            <div
              key={idx}
              className="bg-gray-900 border border-cyan-400 rounded-sm overflow-hidden hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300"
              style={{
                boxShadow: '0 0 15px rgba(56, 189, 248, 0.2)',
              }}
            >
              {/* Header */}
              <div className="bg-gray-800 border-b border-cyan-400 p-6 md:p-8">
                <h3 className="text-yellow-400 font-orbitron font-bold text-xl md:text-2xl mb-2">
                  {team.name}
                </h3>
                <p className="text-gray-400 font-rajdhani text-sm">
                  Cập nhật: {team.date}
                </p>
              </div>

              {/* Placeholder */}
              <div className="aspect-video flex flex-col items-center justify-center bg-gray-950 border-t border-cyan-400/20 p-8">
                <div className="border-2 border-dashed border-cyan-400/50 rounded-lg p-12 flex flex-col items-center justify-center w-full h-full">
                  <ImageIcon className="w-12 h-12 text-cyan-400/50 mb-4" />
                  <p className="text-gray-400 font-rajdhani text-center text-sm">
                    Cập nhật đội hình tại đây
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
