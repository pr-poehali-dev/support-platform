import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-16 items-center justify-between max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200">
          <Icon name="Heart" size={24} className="text-primary" />
          <h1 className="text-xl font-bold font-heading bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">LoveCoach.Pro</h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-sm font-medium hover:text-primary transition-all duration-200 hover:scale-105 relative group">
            О нас
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-emerald-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#services" className="text-sm font-medium hover:text-primary transition-all duration-200 hover:scale-105 relative group">
            Услуги
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-emerald-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#testimonials" className="text-sm font-medium hover:text-primary transition-all duration-200 hover:scale-105 relative group">
            Отзывы
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-emerald-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#faq" className="text-sm font-medium hover:text-primary transition-all duration-200 hover:scale-105 relative group">
            FAQ
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-emerald-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-all duration-200 hover:scale-105 relative group">
            Контакты
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-emerald-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button size="sm" asChild className="bg-gradient-to-r from-primary to-emerald-500 hover:from-primary/90 hover:to-emerald-500/90 border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
            <a href="#contact">Записаться</a>
          </Button>

          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" className="md:hidden hover:scale-105 transition-transform">
                <Icon name="Menu" size={20} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle className="flex items-center space-x-2">
                  <Icon name="Heart" size={20} className="text-primary" />
                  <span className="bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">LoveCoach.Pro</span>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-4 mt-8">
                <a 
                  href="#about" 
                  className="text-sm font-medium hover:text-primary transition-colors py-2 hover:translate-x-2 duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  О нас
                </a>
                <a 
                  href="#services" 
                  className="text-sm font-medium hover:text-primary transition-colors py-2 hover:translate-x-2 duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Услуги
                </a>
                <a 
                  href="#testimonials" 
                  className="text-sm font-medium hover:text-primary transition-colors py-2 hover:translate-x-2 duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Отзывы
                </a>
                <a 
                  href="#faq" 
                  className="text-sm font-medium hover:text-primary transition-colors py-2 hover:translate-x-2 duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  FAQ
                </a>
                <a 
                  href="#contact" 
                  className="text-sm font-medium hover:text-primary transition-colors py-2 hover:translate-x-2 duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Контакты
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;