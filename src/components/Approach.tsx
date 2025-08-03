import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Approach = () => {
  const steps = [
    {
      number: "01",
      title: "Знакомство и диагностика",
      description: "Изучаем вашу ситуацию, определяем основные проблемные зоны и ставим цели работы",
      icon: "Search",
      color: "from-blue-500 to-blue-600"
    },
    {
      number: "02", 
      title: "Анализ паттернов",
      description: "Выявляем повторяющиеся модели поведения и реакций, которые мешают гармоничным отношениям",
      icon: "Brain",
      color: "from-purple-500 to-purple-600"
    },
    {
      number: "03",
      title: "Развитие навыков",
      description: "Учимся новым способам общения, управления эмоциями и выражения потребностей",
      icon: "Lightbulb",
      color: "from-amber-500 to-orange-500"
    },
    {
      number: "04",
      title: "Практическое применение",
      description: "Закрепляем полученные навыки в реальной жизни с поддержкой и обратной связью",
      icon: "Target",
      color: "from-green-500 to-green-600"
    }
  ];

  const principles = [
    {
      icon: "Shield",
      title: "Безопасное пространство",
      description: "Создаём атмосферу доверия и принятия, где можно открыто говорить о сложном"
    },
    {
      icon: "Users",
      title: "Равенство партнёров",
      description: "Работаем с обеими сторонами без обвинений и поиска виноватых"
    },
    {
      icon: "Compass",
      title: "Практический подход",
      description: "Даём конкретные инструменты и техники для ежедневного применения"
    },
    {
      icon: "Sparkles",
      title: "Фокус на рост",
      description: "Концентрируемся на развитии, а не на проблемах и недостатках"
    }
  ];

  return (
    <section id="approach" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <Badge 
            variant="secondary" 
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-rose-100 text-rose-700 border-0"
          >
            <Icon name="Compass" size={16} />
            Наш подход
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Как мы работаем
            <br />
            <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
              с вашими отношениями
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Наша методика основана на коучинговых техниках и направлена на развитие 
            эмоциональной зрелости и навыков здорового общения.
          </p>
        </div>

        {/* Process Steps */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Этапы работы
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group h-full">
                  <CardContent className="p-6 text-center">
                    
                    {/* Step Number */}
                    <div className="text-6xl font-bold text-gray-100 absolute top-4 right-4">
                      {step.number}
                    </div>
                    
                    {/* Icon */}
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                      <Icon name={step.icon as any} size={28} className="text-white" />
                    </div>
                    
                    <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-rose-600 transition-colors duration-300">
                      {step.title}
                    </h4>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
                
                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <Icon name="ArrowRight" size={24} className="text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Principles */}
        <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            Принципы нашей работы
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Icon name={principle.icon as any} size={28} className="text-rose-500" />
                </div>
                
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  {principle.title}
                </h4>
                
                <p className="text-gray-600 leading-relaxed text-sm">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-sm">
              <Icon name="Heart" size={20} className="text-rose-500 mr-2" />
              <span className="text-gray-700 font-medium">
                Каждая пара уникальна — мы адаптируем подход под ваши потребности
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;