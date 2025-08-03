import Icon from '@/components/ui/icon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Telegram', icon: 'MessageCircle', href: 'https://t.me/relationcoach_ru' },
    { name: 'Instagram', icon: 'Instagram', href: 'https://instagram.com/relationcoach.ru' },
    { name: 'WhatsApp', icon: 'MessageSquare', href: 'https://wa.me/79991234567' }
  ];

  const quickLinks = [
    { name: 'О методе', href: '#about' },
    { name: 'Услуги', href: '#services' },
    { name: 'Подход', href: '#approach' },
    { name: 'Контакты', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl flex items-center justify-center">
                <Icon name="Heart" size={24} className="text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold">RelationCoach</span>
                <span className="text-sm text-gray-400">Коучинг отношений</span>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Помогаем парам развивать эмоциональную зрелость и навыки здорового общения 
              для создания счастливых и гармоничных отношений.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-rose-600 transition-colors duration-300"
                >
                  <Icon name={social.icon as any} size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Быстрые ссылки</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-rose-400 transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Icon name="Phone" size={16} className="text-rose-400 mr-3" />
                <span className="text-gray-300">+7 (999) 123-45-67</span>
              </div>
              
              <div className="flex items-center">
                <Icon name="Mail" size={16} className="text-rose-400 mr-3" />
                <span className="text-gray-300">hello@relationcoach.ru</span>
              </div>
              
              <div className="flex items-center">
                <Icon name="MessageCircle" size={16} className="text-rose-400 mr-3" />
                <span className="text-gray-300">@relationcoach_ru</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © {currentYear} RelationCoach. Все права защищены.
            </div>
            
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <button className="text-gray-400 hover:text-rose-400 transition-colors duration-300 text-sm">
                Политика конфиденциальности
              </button>
              <button className="text-gray-400 hover:text-rose-400 transition-colors duration-300 text-sm">
                Пользовательское соглашение
              </button>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-gray-500 text-sm">
              ⚠️ Важно: Коучинг отношений не является медицинской услугой или психотерапией. 
              При серьёзных психологических проблемах рекомендуем обратиться к специалисту.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;