import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const AboutSection = () => {
  const features = [
    {
      icon: 'Users',
      title: 'Командная работа',
      description: 'Управляйте проектами в команде до 50 человек с распределением ролей и прав доступа',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      icon: 'MessageSquare',
      title: 'Умные чаты',
      description: 'Встроенные мессенджеры с возможностью видеозвонков и демонстрации экрана',
      gradient: 'from-green-500 to-teal-600'
    },
    {
      icon: 'BarChart3',
      title: 'Аналитика',
      description: 'Детальная статистика по проектам, задачам и производительности команды',
      gradient: 'from-orange-500 to-red-600'
    },
    {
      icon: 'Shield',
      title: 'Безопасность',
      description: 'Банковский уровень шифрования данных и соответствие стандартам GDPR',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: 'Zap',
      title: 'Автоматизация',
      description: 'ИИ-помощник для планирования задач и оптимизации рабочих процессов',
      gradient: 'from-yellow-500 to-orange-600'
    },
    {
      icon: 'Globe',
      title: 'Интеграции',
      description: 'Подключение к 100+ популярным сервисам через API и готовые плагины',
      gradient: 'from-indigo-500 to-blue-600'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-gradient-to-r from-primary/10 to-blue-600/10 border-primary/20">
            🎯 О платформе
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6 bg-gradient-to-r from-gray-900 to-primary bg-clip-text text-transparent">
            Все инструменты для продуктивной работы
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Workstab — это комплексная платформа, которая объединяет управление проектами, 
            коммуникацию и аналитику в едином пространстве для максимальной эффективности команды
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

        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-200">
                150+
              </div>
              <div className="text-sm text-muted-foreground mt-1">Стран мира</div>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-200">
                500K+
              </div>
              <div className="text-sm text-muted-foreground mt-1">Пользователей</div>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-200">
                1M+
              </div>
              <div className="text-sm text-muted-foreground mt-1">Завершенных задач</div>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-200">
                4.9★
              </div>
              <div className="text-sm text-muted-foreground mt-1">Рейтинг в App Store</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;