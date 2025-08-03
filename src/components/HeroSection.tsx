import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <section className="relative py-16 md:py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-blue-50/50 to-purple-50/30"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      
      <div className="container max-w-6xl mx-auto text-center relative z-10">
        <div className="space-y-6 md:space-y-8">
          <Badge variant="secondary" className="mb-4 bg-gradient-to-r from-primary/10 to-blue-600/10 border-primary/20">
            🚀 Платформа нового поколения
          </Badge>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-heading bg-gradient-to-r from-gray-900 via-primary to-blue-600 bg-clip-text text-transparent leading-tight">
            Удаленная работа
            <br />
            <span className="text-3xl md:text-4xl lg:text-6xl">стала проще</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Workstab объединяет лучшие инструменты для командной работы, управления проектами и коммуникации в одной платформе
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-base md:text-lg px-8 py-6 min-w-[200px]"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Icon name="Rocket" size={20} className="mr-2" />
              Начать бесплатно
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 hover:scale-105 text-base md:text-lg px-8 py-6 min-w-[200px]"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Icon name="Play" size={20} className="mr-2" />
              Смотреть демо
            </Button>
          </div>
          
          <div className="pt-8 md:pt-12">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center group">
                <div className="text-2xl md:text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-200">10K+</div>
                <div className="text-sm text-muted-foreground">Активных команд</div>
              </div>
              <div className="text-center group">
                <div className="text-2xl md:text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-200">99.9%</div>
                <div className="text-sm text-muted-foreground">Время работы</div>
              </div>
              <div className="text-center group">
                <div className="text-2xl md:text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-200">24/7</div>
                <div className="text-sm text-muted-foreground">Поддержка</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;