import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const AboutSection = () => {
  const features = [
    {
      icon: 'Brain',
      title: 'Эмоциональный интеллект',
      description: 'Развиваем способность понимать и управлять своими эмоциями и эмоциями партнёра для создания гармоничных отношений',
      gradient: 'from-emerald-400 to-teal-500',
      delay: '0.1s'
    },
    {
      icon: 'MessageCircle',
      title: 'Навыки общения',
      description: 'Учим эффективно выражать потребности, слышать партнёра и находить компромиссы в сложных ситуациях',
      gradient: 'from-green-400 to-emerald-500',
      delay: '0.2s'
    },
    {
      icon: 'Target',
      title: 'Практический подход',
      description: 'Даём конкретные инструменты и техники для немедленного применения в повседневной жизни пары',
      gradient: 'from-amber-400 to-orange-400',
      delay: '0.3s'
    },
    {
      icon: 'Heart',
      title: 'Восстановление близости',
      description: 'Помогаем вернуть эмоциональную и физическую близость через осознанную работу над отношениями',
      gradient: 'from-rose-400 to-pink-400',
      delay: '0.4s'
    },
    {
      icon: 'Users',
      title: 'Работа с парами',
      description: 'Специализируемся на парной терапии и индивидуальном коучинге для улучшения отношений',
      gradient: 'from-violet-400 to-purple-400',
      delay: '0.5s'
    },
    {
      icon: 'Lightbulb',
      title: 'Развитие осознанности',
      description: 'Формируем навыки mindfulness и эмоциональной саморегуляции для здоровых отношений',
      gradient: 'from-yellow-300 to-amber-400',
      delay: '0.6s'
    }
  ];

  return (
    <section id="about" className="relative py-24 px-4 overflow-hidden">
      {/* Background with subtle animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/20 via-background to-primary/5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float opacity-60"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl animate-float opacity-40" style={{animationDelay: '10s'}}></div>
      </div>

      <div className="container max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20 animate-on-scroll">
          <div className="inline-flex items-center mb-6">
            <Badge 
              variant="secondary" 
              className="glass-card border-0 px-6 py-3 text-lg font-medium"
            >
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                🌱 О нашем подходе
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              </span>
            </Badge>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-8 leading-tight">
            <span className="block text-shimmer">Кто мы и</span>
            <span className="block bg-gradient-to-r from-gray-700 to-primary bg-clip-text text-transparent">
              чем помогаем
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Мы помогаем людям научиться строить <span className="text-primary font-semibold">эмоционально зрелые</span> и 
            устойчивые отношения. Наша миссия — развитие <span className="text-primary font-semibold">soft-навыков</span>, 
            эмпатии и практик осознанности в парах.
          </p>
          
          <div className="mt-6 inline-flex items-center px-6 py-3 glass-card rounded-full">
            <Icon name="Shield" size={20} className="text-primary mr-2" />
            <span className="text-sm text-muted-foreground">
              Это немедицинские консультации, основанные на коучинговых методиках
            </span>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="animate-on-scroll"
              style={{animationDelay: feature.delay}}
            >
              <Card className="group glass-card border-0 h-full relative overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <CardContent className="p-8">
                  {/* Icon with glow effect */}
                  <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                    <Icon name={feature.icon as any} size={28} className="text-white" />
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`}></div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {feature.description}
                  </p>
                  
                  {/* Hover effect line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-emerald-500 group-hover:w-full transition-all duration-500"></div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="animate-on-scroll">
          <div className="glass-card rounded-3xl p-8 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl"></div>
            
            <div className="text-center mb-12 relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-700 to-primary bg-clip-text text-transparent">
                Наши принципы
              </h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Мы работаем на основе научно обоснованных методик эмоционального развития 
                и создаём безопасное пространство для роста отношений
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto relative z-10">
              {[
                { number: "200+", label: "Пар получили помощь", icon: "Users", delay: "0.1s" },
                { number: "5 лет", label: "Опыт в коучинге отношений", icon: "Award", delay: "0.3s" },
                { number: "95%", label: "Клиентов рекомендуют нас", icon: "Star", delay: "0.5s" }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="text-center group scale-in"
                  style={{animationDelay: stat.delay}}
                >
                  <div className="glass-card p-8 rounded-2xl group-hover:shadow-xl transition-all duration-500 border border-primary/10">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon name={stat.icon as any} size={24} className="text-white" />
                    </div>
                    <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;