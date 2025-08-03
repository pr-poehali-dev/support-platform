import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const About = () => {
  const features = [
    {
      icon: 'Brain',
      title: 'Эмоциональная зрелость',
      description: 'Помогаем развить навыки самоанализа, управления эмоциями и понимания своих потребностей'
    },
    {
      icon: 'MessageCircle',
      title: 'Здоровое общение',
      description: 'Учим выражать свои чувства конструктивно и слышать партнёра без защитных реакций'
    },
    {
      icon: 'Heart',
      title: 'Глубокая близость',
      description: 'Создаём условия для восстановления эмоциональной и физической интимности в отношениях'
    },
    {
      icon: 'Target',
      title: 'Практические результаты',
      description: 'Даём конкретные инструменты для решения проблем и улучшения качества отношений'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <Badge 
            variant="secondary" 
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-rose-100 text-rose-700 border-0"
          >
            <Icon name="Lightbulb" size={16} />
            О нашем методе
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Коучинг отношений —
            <br />
            <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
              это про развитие
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Мы не лечим болезни, а развиваем навыки. Наш подход основан на коучинговых техниках, 
            направленных на рост эмоциональной зрелости и улучшение коммуникации в отношениях.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon name={feature.icon as any} size={28} className="text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-rose-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Info Block */}
        <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-3xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <Icon name="Shield" size={48} className="text-rose-500 mx-auto mb-6" />
            
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Важно понимать
            </h3>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Коучинг отношений — это <strong>не психотерапия</strong> и <strong>не медицинская помощь</strong>. 
              Мы работаем с развитием навыков общения, эмпатии и эмоциональной зрелости. 
              Если у вас есть серьёзные психологические проблемы, рекомендуем обратиться к психотерапевту.
            </p>
            
            <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-sm">
              <Icon name="CheckCircle" size={20} className="text-green-500 mr-2" />
              <span className="text-gray-700 font-medium">Коучинговый подход без медицинского вмешательства</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;