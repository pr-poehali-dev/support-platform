import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const AboutSection = () => {
  const features = [
    {
      icon: 'Brain',
      title: 'Эмоциональный интеллект',
      description: 'Развиваем способность понимать и управлять своими эмоциями и эмоциями партнёра для создания гармоничных отношений',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      icon: 'MessageCircle',
      title: 'Навыки общения',
      description: 'Учим эффективно выражать потребности, слышать партнёра и находить компромиссы в сложных ситуациях',
      gradient: 'from-green-500 to-teal-600'
    },
    {
      icon: 'Target',
      title: 'Практический подход',
      description: 'Даём конкретные инструменты и техники для немедленного применения в повседневной жизни пары',
      gradient: 'from-orange-500 to-red-600'
    },
    {
      icon: 'Heart',
      title: 'Восстановление близости',
      description: 'Помогаем вернуть эмоциональную и физическую близость через осознанную работу над отношениями',
      gradient: 'from-pink-500 to-rose-600'
    },
    {
      icon: 'Users',
      title: 'Работа с парами',
      description: 'Специализируемся на парной терапии и индивидуальном коучинге для улучшения отношений',
      gradient: 'from-purple-500 to-indigo-600'
    },
    {
      icon: 'Lightbulb',
      title: 'Развитие осознанности',
      description: 'Формируем навыки mindfulness и эмоциональной саморегуляции для здоровых отношений',
      gradient: 'from-yellow-500 to-orange-600'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-gradient-to-r from-primary/10 to-blue-600/10 border-primary/20">
            💝 О нашем подходе
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6 bg-gradient-to-r from-gray-900 to-primary bg-clip-text text-transparent">
            Кто мы и чем помогаем
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Мы помогаем людям научиться строить эмоционально зрелые и устойчивые отношения. 
            Наша миссия — развитие soft-навыков, эмпатии и практик осознанности в парах. 
            Это немедицинские консультации, основанные на коучинговых методиках.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 bg-gradient-to-br from-white to-gray-50/50 backdrop-blur-sm"
            >
              <CardContent className="p-6 lg:p-8">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={feature.icon as any} size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary/5 to-blue-600/5 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Наши принципы</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Мы работаем на основе научно обоснованных методик эмоционального развития
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-200">
                200+
              </div>
              <div className="text-sm text-muted-foreground mt-1">Пар получили помощь</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-200">
                5 лет
              </div>
              <div className="text-sm text-muted-foreground mt-1">Опыт в коучинге отношений</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-200">
                95%
              </div>
              <div className="text-sm text-muted-foreground mt-1">Клиентов рекомендуют нас</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;