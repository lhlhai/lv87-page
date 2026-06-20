import { Shield, Zap, Home, Clock, Sword } from 'lucide-react';

export default function Rules() {
  const rules = [
    {
      icon: Shield,
      title: 'Điểm số',
      description: 'Tối thiểu 7.2M/ngày hoặc 43.2M/tuần. Không đạt sẽ bị đưa xuống R1 và có thể bị loại.',
    },
    {
      icon: Zap,
      title: 'Enemy Buster',
      description: 'Thứ 7 hàng tuần, thành viên không tham chiến phải bật khiên. Nghiêm cấm trao đổi điểm với đối thủ.',
    },
    {
      icon: Home,
      title: 'Sắp xếp căn cứ',
      description: 'Căn cứ phải gọn gàng trước khi Reset máy chủ Chủ Nhật.',
    },
    {
      icon: Clock,
      title: 'Online',
      description: 'Không online quá 1 ngày -> R1; nhiều ngày -> xem xét mời khỏi liên minh.',
    },
    {
      icon: Sword,
      title: 'Tấn công',
      description: 'Chỉ được tấn công người không có liên minh. Cấm cướp xe tải/nhiệm vụ của cùng server nếu chưa được đồng ý.',
    },
  ];

  return (
    <section id="rules" className="py-16 md:py-24 bg-background">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 font-orbitron mb-12 text-center">
          Quy Định Chung
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rules.map((rule, idx) => {
            const Icon = rule.icon;
            return (
              <div
                key={idx}
                className="bg-gray-900 border border-cyan-400 rounded-sm p-6 md:p-8 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 hover:scale-105 group"
                style={{
                  boxShadow: '0 0 15px rgba(56, 189, 248, 0.2)',
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-6 h-6 text-yellow-400 group-hover:text-cyan-400 transition-colors" />
                  <h3 className="text-yellow-400 font-orbitron font-semibold text-lg">
                    {rule.title}
                  </h3>
                </div>
                <p className="text-gray-300 font-rajdhani text-sm leading-relaxed">
                  {rule.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
