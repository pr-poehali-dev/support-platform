import { Badge } from '@/components/ui/badge';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const IssuesSection = () => {
  const issues = [
    { 
      icon: "AlertCircle", 
      title: "Частые конфликты", 
      description: "Помогаем находить причины разногласий и учиться договариваться без взаимных обвинений",
      gradient: "from-red-400 to-orange-400",
      delay: "0.1s"
    },
    { 
      icon: "Snowflake", 
      title: "Эмоциональный холод", 
      description: "Работаем с отдалением и возвращаем тепло в отношения через практики близости",
      gradient: "from-blue-400 to-cyan-400",
      delay: "0.2s"
    },
    { 
      icon: "HeartHandshake", 
      title: "Желание близости", 
      description: "Развиваем навыки эмоциональной интимности и глубокого понимания партнёра",
      gradient: "from-pink-400 to-rose-400",
      delay: "0.3s"
    },
    { 
      icon: "Clock", 
      title: "Неразрешённые обиды", 
      description: "Учимся прощать и отпускать прошлое, двигаясь к здоровому будущему",
      gradient: "from-amber-400 to-yellow-400",
      delay: "0.4s"
    },
    { 
      icon: "Shield", 
      title: "Страх расставания", 
      description: "Работаем с тревогами и страхами, укрепляя доверие и уверенность в отношениях",
      gradient: "from-emerald-400 to-teal-400",
      delay: "0.5s"
    },
    { 
      icon: "Compass", 
      title: "Потеря направления", 
      description: "Помогаем найти общие цели, ценности и построить совместное видение будущего",
      gradient: "from-purple-400 to-violet-400",
      delay: "0.6s"
    }
  ];

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/3 via-background to-emerald-500/3"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float opacity-40"></div>
        <div className="absolute bottom-1/3 left-1/5 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-float opacity-30" style={{animationDelay: '8s'}}></div>
      </div>

      <div className="container max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20 animate-on-scroll">
          <div className="inline-flex items-center mb-6">
            <Badge 
              variant="secondary" 
              className="glass-card border-0 px-8 py-4 text-lg font-medium"
            >
              <span className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-red-400 to-orange-400 animate-pulse"></div>
                🔥 Области работы
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 animate-pulse"></div>
              </span>
            </Badge>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-8 leading-tight">
            <span className="block bg-gradient-to-r from-gray-700 to-primary bg-clip-text text-transparent">
              С какими запросами
            </span>
            <span className="block text-shimmer">
              мы работаем
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Помогаем парам и отдельным людям в <span className="text-primary font-semibold">сложных жизненных ситуациях</span>,
            когда отношения нуждаются в профессиональной поддержке
          </p>
        </div>

        {/* Issues Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {issues.map((issue, index) => (
            <div
              key={index}
              className="animate-on-scroll"
              style={{animationDelay: issue.delay}}
            >
              <Card className="group glass-card border-0 h-full relative overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2">
                
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${issue.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <CardHeader className="p-8 relative z-10">
                  
                  {/* Icon with advanced effects */}
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 rounded-3xl bg-gradient-to-r ${issue.gradient} flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                      <Icon name={issue.icon} size={32} className="text-white" />
                    </div>
                    
                    {/* Glow effect */}
                    <div className={`absolute inset-0 w-20 h-20 rounded-3xl bg-gradient-to-r ${issue.gradient} opacity-0 group-hover:opacity-40 blur-xl transition-all duration-500`}></div>
                    
                    {/* Pulse ring */}
                    <div className={`absolute inset-0 w-20 h-20 rounded-3xl border-2 border-transparent bg-gradient-to-r ${issue.gradient} bg-clip-border opacity-0 group-hover:opacity-30 scale-125 group-hover:scale-150 transition-all duration-700`}></div>
                  </div>
                  
                  {/* Content */}
                  <CardTitle className="text-2xl mb-4 group-hover:text-primary transition-colors duration-300 leading-tight">
                    {issue.title}
                  </CardTitle>
                  
                  <CardDescription className="text-muted-foreground leading-relaxed text-base group-hover:text-gray-600 transition-colors duration-300">
                    {issue.description}
                  </CardDescription>
                  
                  {/* Interactive elements */}
                  <div className="mt-6 flex items-center text-sm text-primary opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <span className="font-medium">Узнать больше</span>
                    <Icon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                  
                  {/* Bottom accent line */}
                  <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${issue.gradient} group-hover:w-full transition-all duration-500`}></div>
                </CardHeader>
              </Card>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-20 animate-on-scroll" style={{animationDelay: '0.8s'}}>
          <div className="glass-card rounded-2xl p-8 md:p-12 max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-gray-700 to-primary bg-clip-text text-transparent">
                Не нашли свою ситуацию?
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Каждая пара уникальна. Мы работаем с широким спектром запросов 
                и найдём подход именно к вашей ситуации.
              </p>
              <div className="inline-flex items-center text-primary font-medium">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                <span>Расскажите о своей ситуации в форме ниже</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IssuesSection;