import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white via-rose-50/30 to-pink-50/50">
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-rose-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-rose-300/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Badge */}
          <div className="mb-8">
            <Badge 
              variant="secondary" 
              className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium bg-white/70 backdrop-blur-sm border border-rose-200/50 text-rose-700"
            >
              <Icon name="Heart" size={18} className="text-rose-500" />
              Коучинг отношений
              <Icon name="Sparkles" size={18} className="text-rose-500" />
            </Badge>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="block text-gray-900 mb-2">Найдите путь</span>
            <span className="block bg-gradient-to-r from-rose-600 via-pink-600 to-rose-500 bg-clip-text text-transparent">
              к счастливым
            </span>
            <span className="block text-gray-900">отношениям</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Профессиональное сопровождение для развития 
            <span className="text-rose-600 font-semibold"> эмоциональной зрелости </span>
            и создания гармоничных отношений
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Icon name="Calendar" size={20} className="mr-2" />
              Записаться на консультацию
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('about')}
              className="border-2 border-rose-200 text-rose-700 hover:bg-rose-50 px-8 py-4 text-lg font-semibold transition-all duration-300"
            >
              <Icon name="Play" size={20} className="mr-2" />
              Узнать подробнее
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { number: "200+", label: "Успешных пар", icon: "Users" },
              { number: "5 лет", label: "Опыта", icon: "Award" },
              { number: "95%", label: "Довольных клиентов", icon: "Star" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-rose-200/50 hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Icon name={stat.icon as any} size={24} className="text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center space-y-2">
              <span className="text-sm text-gray-500 font-medium">Узнайте больше</span>
              <div className="w-6 h-10 border-2 border-rose-300 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-rose-500 rounded-full mt-2 animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;