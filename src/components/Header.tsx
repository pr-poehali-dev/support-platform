import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl flex items-center justify-center">
              <Icon name="Heart" size={24} className="text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900">RelationCoach</span>
              <span className="text-xs text-gray-500 -mt-1">Коучинг отношений</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-rose-600 transition-colors font-medium"
            >
              О методе
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-rose-600 transition-colors font-medium"
            >
              Услуги
            </button>
            <button 
              onClick={() => scrollToSection('approach')}
              className="text-gray-700 hover:text-rose-600 transition-colors font-medium"
            >
              Подход
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-rose-600 transition-colors font-medium"
            >
              Контакты
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white px-6 py-2"
            >
              <Icon name="Calendar" size={16} className="mr-2" />
              Записаться
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} className="text-gray-700" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200">
            <div className="px-6 py-6 space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left text-gray-700 hover:text-rose-600 transition-colors font-medium py-2"
              >
                О методе
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left text-gray-700 hover:text-rose-600 transition-colors font-medium py-2"
              >
                Услуги
              </button>
              <button 
                onClick={() => scrollToSection('approach')}
                className="block w-full text-left text-gray-700 hover:text-rose-600 transition-colors font-medium py-2"
              >
                Подход
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left text-gray-700 hover:text-rose-600 transition-colors font-medium py-2"
              >
                Контакты
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="w-full bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white mt-4"
              >
                <Icon name="Calendar" size={16} className="mr-2" />
                Записаться
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;