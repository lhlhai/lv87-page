export default function Footer() {
  const currentDate = new Date().toLocaleDateString('vi-VN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  return (
    <footer className="bg-background border-t border-cyan-400 shadow-lg shadow-cyan-400/10 py-8 md:py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-gray-400 font-rajdhani text-sm">
              © 2026 LV87 VIE Alliance. Tất cả quyền được bảo lưu.
            </p>
          </div>

          {/* Last Updated */}
          <div className="text-center">
            <p className="text-gray-400 font-rajdhani text-sm">
              Cập nhật lần cuối: {currentDate}
            </p>
          </div>

          {/* Guide Link */}
          <div className="text-center md:text-right">
            <a
              href="#guide"
              className="text-cyan-400 hover:text-yellow-400 transition-colors font-rajdhani text-sm underline underline-offset-2"
            >
              Hướng dẫn
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-cyan-400/20 mt-6 md:mt-8 pt-6 md:pt-8">
          <p className="text-center text-gray-500 font-rajdhani text-xs">
            Được xây dựng với ❤️ cho cộng đồng LV87 VIE
          </p>
        </div>
      </div>
    </footer>
  );
}
