import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Floating animated background elements */}
      <div className="floating-elements">
        <div className="absolute top-20 left-10 w-32 h-32 morphing-blob animate-float opacity-30"></div>
        <div className="absolute top-40 right-20 w-24 h-24 morphing-blob animate-float opacity-20" style={{animationDelay: '5s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 morphing-blob animate-float opacity-25" style={{animationDelay: '10s'}}></div>
        <div className="absolute bottom-20 right-1/3 w-16 h-16 morphing-blob animate-float opacity-15" style={{animationDelay: '15s'}}></div>
      </div>

      {/* Main content */}
      <div className="container max-w-7xl mx-auto px-4 lg:px-6 relative z-10">
        <div className="text-center space-y-8">
          
          {/* Animated badge */}
          <div className="bounce-in">
            <Badge 
              variant="secondary" 
              className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium glass-card border-0 animate-pulse-soft"
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span className="text-primary">🌿 Коучинг отношений</span>
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            </Badge>
          </div>

          {/* Main heading with shimmer effect */}
          <div className="fade-in-up stagger-1">
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold font-heading leading-tight tracking-tight">
              <span className="block text-shimmer">Коучинг для пар</span>
              <span className="block bg-gradient-to-r from-gray-600 via-primary to-emerald-500 bg-clip-text text-transparent">
                и индивидуальных
              </span>
              <span className="block text-shimmer">отношений</span>
            </h1>
          </div>

          {/* Subtitle with typewriter effect */}
          <div className="fade-in-up stagger-2">
            <p className="text-2xl md:text-3xl lg:text-4xl font-light text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              <span className="text-primary font-medium">Пойми</span> друг друга. 
              <span className="text-primary font-medium"> Услышь</span>. 
              <span className="text-primary font-medium"> Почувствуй</span>.
            </p>
          </div>

          {/* Description */}
          <div className="fade-in-up stagger-3">
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed opacity-80">
              Профессиональное сопровождение для развития эмоциональной зрелости 
              и улучшения коммуникации в отношениях через soft-навыки и осознанность
            </p>
          </div>

          {/* CTA Buttons with advanced effects */}
          <div className="fade-in-up stagger-4 flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="group relative overflow-hidden bg-gradient-to-r from-primary via-emerald-500 to-teal-500 bg-size-200 bg-pos-0 hover:bg-pos-100 border-0 shadow-2xl hover:shadow-primary/25 transition-all duration-500 hover:scale-105 text-white text-lg px-10 py-6 min-w-[320px] glow-effect"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10 flex items-center">
                <Icon name="Calendar" size={24} className="mr-3" />
                Записаться на консультацию
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="group glass-card border-2 border-primary/20 hover:border-primary/40 text-primary hover:text-primary transition-all duration-500 hover:scale-105 text-lg px-10 py-6 min-w-[240px] relative overflow-hidden"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10 flex items-center">
                <Icon name="Play" size={24} className="mr-3" />
                Узнать больше
              </span>
            </Button>
          </div>

          {/* Stats with animated counters */}
          <div className="fade-in-up stagger-5 pt-16">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { number: "200+", label: "Пар получили помощь", delay: "0.1s" },
                { number: "5 лет", label: "Опыт в коучинге", delay: "0.3s" },
                { number: "24/7", label: "Поддержка в чате", delay: "0.5s" }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="text-center group scale-in"
                  style={{animationDelay: stat.delay}}
                >
                  <div className="glass-card p-6 rounded-2xl group-hover:shadow-xl transition-all duration-500">
                    <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <div className="text-muted-foreground mt-2 text-sm font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="fade-in-up stagger-6 pt-12">
            <div className="flex flex-col items-center space-y-4">
              <p className="text-sm text-muted-foreground font-medium">Узнайте больше</p>
              <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
    </section>
  );
};

export default HeroSection;