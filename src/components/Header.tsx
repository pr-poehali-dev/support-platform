import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <Icon name="Heart" size={24} className="text-primary" />
          <h1 className="text-xl font-bold font-heading">LoveCoach.Pro</h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            О нас
          </a>
          <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">
            Услуги
          </a>
          <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">
            Вопросы
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            Контакты
          </a>
        </nav>

        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetHeader>
              <SheetTitle className="flex items-center space-x-2">
                <Icon name="Heart" size={20} className="text-primary" />
                <span>LoveCoach.Pro</span>
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col space-y-4 mt-8">
              <a 
                href="#about" 
                className="text-sm font-medium hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                О нас
              </a>
              <a 
                href="#services" 
                className="text-sm font-medium hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Услуги
              </a>
              <a 
                href="#faq" 
                className="text-sm font-medium hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Вопросы
              </a>
              <a 
                href="#contact" 
                className="text-sm font-medium hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Контакты
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;