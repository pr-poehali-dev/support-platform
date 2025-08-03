import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <section className="relative py-16 md:py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-green-50/30 to-emerald-50/20"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
      
      <div className="container max-w-6xl mx-auto text-center relative z-10">
        <div className="space-y-6 md:space-y-8">
          <Badge variant="secondary" className="mb-4 bg-gradient-to-r from-primary/8 to-emerald-500/8 border-primary/15 text-primary">
            🌿 Коучинг отношений
          </Badge>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading bg-gradient-to-r from-gray-700 via-primary to-emerald-600 bg-clip-text text-transparent leading-tight">
            Коучинг для пар и индивидуальных отношений
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-4">
            Пойми друг друга. Услышь. Почувствуй.
          </p>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Профессиональное сопровождение для развития эмоциональной зрелости и улучшения коммуникации в отношениях. 
            Мы работаем с soft-навыками, эмпатией и осознанностью — без медицинских диагнозов.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-emerald-500 hover:from-primary/90 hover:to-emerald-500/90 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-base md:text-lg px-8 py-6 min-w-[280px]"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Icon name="Calendar" size={20} className="mr-2" />
              Записаться на консультацию
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary/15 hover:border-primary/30 hover:bg-primary/3 transition-all duration-300 hover:scale-105 text-base md:text-lg px-8 py-6 min-w-[200px] text-primary hover:text-primary"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Icon name="Info" size={20} className="mr-2" />
              Узнать больше
            </Button>
          </div>
          
          <div className="pt-8 md:pt-12">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center group">
                <div className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform duration-200">200+</div>
                <div className="text-sm text-muted-foreground">Пар получили помощь</div>
              </div>
              <div className="text-center group">
                <div className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform duration-200">5 лет</div>
                <div className="text-sm text-muted-foreground">Опыт в коучинге</div>
              </div>
              <div className="text-center group">
                <div className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform duration-200">24/7</div>
                <div className="text-sm text-muted-foreground">Поддержка в чате</div>
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