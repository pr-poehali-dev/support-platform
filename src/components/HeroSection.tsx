import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <section className="py-12 md:py-20 px-4">
      <div className="container max-w-4xl mx-auto text-center fade-in">
        <div className="love-coach-gradient text-white rounded-2xl p-6 md:p-12 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold font-heading mb-4 md:mb-6">
            Коучинг для пар и индивидуальных отношений
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 opacity-90">
            Пойми друг друга. Услышь. Почувствуй.
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="hover-scale text-base md:text-lg px-6 md:px-8 py-2 md:py-3 w-full sm:w-auto"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Icon name="Calendar" size={20} className="mr-2" />
            Записаться на консультацию
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;