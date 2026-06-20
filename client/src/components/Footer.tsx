import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t, i18n } = useTranslation();

  const currentDate = new Date().toLocaleDateString(i18n.language === 'en' ? 'en-US' : i18n.language === 'vi' ? 'vi-VN' : 'zh-CN', {
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
              {t('footer.rights')}
            </p>
          </div>

          {/* Last Updated */}
          <div className="text-center">
            <p className="text-gray-400 font-rajdhani text-sm">
              {t('footer.last_updated')}: {currentDate}
            </p>
          </div>

          {/* Guide Link */}
          <div className="text-center md:text-right">
            <a
              href="#guide"
              className="text-cyan-400 hover:text-yellow-400 transition-colors font-rajdhani text-sm underline underline-offset-2"
            >
              {t('footer.guide')}
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-cyan-400/20 mt-6 md:mt-8 pt-6 md:pt-8">
          <p className="text-center text-gray-500 font-rajdhani text-xs">
            {t('footer.built_with')}
          </p>
        </div>
      </div>
    </footer>
  );
}
