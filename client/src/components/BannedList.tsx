export default function BannedList() {
  const bannedPlayers = [
    // Placeholder - will be updated by admin
    {
      id: 1,
      character: 'Đang cập nhật...',
      reason: '-',
      time: '-',
    },
  ];

  return (
    <section id="banned" className="py-16 md:py-24 bg-background">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 font-orbitron mb-12 text-center">
          Danh Sách Bị Đình Chỉ
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-800 border border-cyan-400">
                <th className="border border-cyan-400/30 px-4 py-3 text-left text-yellow-400 font-orbitron font-semibold text-sm md:text-base">
                  STT
                </th>
                <th className="border border-cyan-400/30 px-4 py-3 text-left text-yellow-400 font-orbitron font-semibold text-sm md:text-base">
                  Tên Nhân Vật
                </th>
                <th className="border border-cyan-400/30 px-4 py-3 text-left text-yellow-400 font-orbitron font-semibold text-sm md:text-base">
                  Lý Do
                </th>
                <th className="border border-cyan-400/30 px-4 py-3 text-left text-yellow-400 font-orbitron font-semibold text-sm md:text-base">
                  Thời Gian
                </th>
              </tr>
            </thead>
            <tbody>
              {bannedPlayers.map((player, idx) => (
                <tr
                  key={player.id}
                  className={`border border-cyan-400/20 ${
                    idx % 2 === 0 ? 'bg-gray-950' : 'bg-gray-900'
                  } hover:bg-gray-800 transition-colors`}
                >
                  <td className="border border-cyan-400/20 px-4 py-3 text-gray-300 font-rajdhani text-sm md:text-base">
                    {idx + 1}
                  </td>
                  <td className="border border-cyan-400/20 px-4 py-3 text-gray-300 font-rajdhani text-sm md:text-base">
                    {player.character}
                  </td>
                  <td className="border border-cyan-400/20 px-4 py-3 text-gray-300 font-rajdhani text-sm md:text-base">
                    {player.reason}
                  </td>
                  <td className="border border-cyan-400/20 px-4 py-3 text-gray-300 font-rajdhani text-sm md:text-base">
                    {player.time}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center text-gray-400 font-rajdhani text-sm mt-6">
          Bảng danh sách sẽ được cập nhật thường xuyên
        </p>
      </div>
    </section>
  );
}
