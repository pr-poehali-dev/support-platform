import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 px-4 bg-muted/30">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">О LoveCoach.Pro</Badge>
          <h3 className="text-3xl font-bold font-heading mb-6">Кто мы и чем помогаем</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Мы помогаем людям научиться строить эмоционально зрелые и устойчивые отношения. 
            Наша миссия — развитие soft-навыков, эмпатии и практик осознанности в парах. 
            Это немедицинские консультации, основанные на коучинговых методиках.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Brain" size={24} className="text-primary" />
            </div>
            <h4 className="font-semibold mb-2">Эмоциональный интеллект</h4>
            <p className="text-sm text-muted-foreground">
              Развиваем способность понимать и управлять эмоциями
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="MessageCircle" size={24} className="text-primary" />
            </div>
            <h4 className="font-semibold mb-2">Навыки общения</h4>
            <p className="text-sm text-muted-foreground">
              Учим эффективно выражать потребности и слышать партнёра
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Target" size={24} className="text-primary" />
            </div>
            <h4 className="font-semibold mb-2">Практический подход</h4>
            <p className="text-sm text-muted-foreground">
              Даём конкретные инструменты для улучшения отношений
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;