import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

export default function DSBAccordion() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const items: AccordionItem[] = [
    {
      id: 'registration',
      title: 'Đăng ký & Duyệt',
      content: 'Hạn chót đăng ký trước Reset thứ 4. Ưu tiên thành viên lực chiến cao.',
    },
    {
      id: 'absence-main',
      title: 'Xử phạt vắng mặt (Đội hình chính)',
      content: 'Lần 1: cấm 1 tuần. Lần 2: cấm 3 tuần. Lần 3: cấm vĩnh viễn.',
    },
    {
      id: 'absence-reserve',
      title: 'Xử phạt (Đội hình dự bị)',
      content: 'Vắng mặt cấm 1 tuần (không cộng dồn).',
    },
    {
      id: 'safety-points',
      title: 'Điểm an toàn',
      content: 'Đội hình chính cần đạt 700,000 điểm mỗi vòng (có thể thay đổi).',
    },
    {
      id: 'sharing-spirit',
      title: 'Tinh thần chia sẻ',
      content: 'Khuyến khích nhường chỗ cho dự bị khi đã đạt điểm và thế trận ổn định.',
    },
  ];

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="dsb" className="py-16 md:py-24 bg-background">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 font-orbitron mb-12 text-center">
          Quy Định Bão Sa Mạc
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="border border-cyan-400 rounded-sm overflow-hidden bg-gray-900"
              style={{
                boxShadow: '0 0 15px rgba(56, 189, 248, 0.2)',
              }}
            >
              {/* Header */}
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full flex items-center justify-between p-6 md:p-8 hover:bg-gray-800 transition-colors duration-200 group"
              >
                <h3 className="text-yellow-400 font-orbitron font-semibold text-base md:text-lg text-left">
                  {item.title}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-cyan-400 transition-transform duration-300 flex-shrink-0 ml-4 group-hover:text-yellow-400 ${
                    openItems.includes(item.id) ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Content */}
              {openItems.includes(item.id) && (
                <div className="px-6 md:px-8 pb-6 md:pb-8 border-t border-cyan-400/30 bg-gray-950 animate-in fade-in duration-200">
                  <p className="text-gray-300 font-rajdhani text-sm md:text-base leading-relaxed">
                    {item.content}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
