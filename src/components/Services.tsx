import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Индивидуальная сессия",
      subtitle: "Работа над собой",
      description: "Развитие эмоциональной зрелости, работа с личными паттернами поведения и подготовка к здоровым отношениям",
      duration: "60 минут",
      price: "3 500 ₽",
      icon: "User",
      features: [
        "Анализ личных паттернов",
        "Работа с эмоциями",
        "Развитие самоосознанности",
        "Практические рекомендации"
      ],
      popular: false
    },
    {
      id: 2,
      title: "Сессия для пары",
      subtitle: "Работаем вместе",
      description: "Совместная работа с парой над коммуникацией, пониманием потребностей друг друга и восстановлением близости",
      duration: "90 минут",
      price: "6 000 ₽",
      icon: "Heart",
      features: [
        "Анализ динамики отношений",
        "Техники здорового общения",
        "Работа с конфликтами",
        "Восстановление близости"
      ],
      popular: true
    },
    {
      id: 3,
      title: "Поддержка в чате",
      subtitle: "Ежедневное сопровождение",
      description: "Текстовые консультации в течение недели для закрепления результатов и поддержки в сложных моментах",
      duration: "7 дней",
      price: "4 500 ₽",
      icon: "MessageSquare",
      features: [
        "Ответы на вопросы",
        "Поддержка в кризисах",
        "Домашние задания",
        "Закрепление навыков"
      ],
      popular: false
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <Badge 
            variant="secondary" 
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-rose-100 text-rose-700 border-0"
          >
            <Icon name="Star" size={16} />
            Наши услуги
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Выберите формат
            <br />
            <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
              который вам подходит
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Мы предлагаем разные форматы работы — от индивидуальных сессий до поддержки пар. 
            Выберите то, что лучше всего соответствует вашей ситуации.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card 
              key={service.id} 
              className={`relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 group ${
                service.popular ? 'ring-2 ring-rose-500 ring-offset-2' : ''
              }`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-rose-500 text-white px-4 py-1">
                    Популярно
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                  service.popular 
                    ? 'bg-gradient-to-r from-rose-500 to-pink-600' 
                    : 'bg-gradient-to-r from-gray-600 to-gray-700'
                } group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={service.icon as any} size={28} className="text-white" />
                </div>
                
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                  {service.title}
                </CardTitle>
                
                <p className="text-rose-600 font-semibold">
                  {service.subtitle}
                </p>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <Icon name="Check" size={16} className="text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-3xl font-bold text-gray-900">{service.price}</div>
                      <div className="text-gray-500 text-sm">{service.duration}</div>
                    </div>
                  </div>

                  <Button 
                    onClick={scrollToContact}
                    className={`w-full ${
                      service.popular
                        ? 'bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white'
                        : 'bg-gray-900 hover:bg-gray-800 text-white'
                    } transition-all duration-300`}
                  >
                    <Icon name="Calendar" size={16} className="mr-2" />
                    Записаться
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
            <Icon name="MessageCircle" size={48} className="text-rose-500 mx-auto mb-6" />
            
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Не знаете, что выбрать?
            </h3>
            
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Напишите нам о своей ситуации, и мы поможем подобрать оптимальный формат работы. 
              Первая консультация — бесплатно.
            </p>
            
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white px-8 py-3"
            >
              <Icon name="Phone" size={20} className="mr-2" />
              Получить консультацию
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;