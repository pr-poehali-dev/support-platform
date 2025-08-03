import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface Service {
  id: number;
  title: string;
  description: string;
  duration: string;
  price: string;
  icon: string;
}

interface ServicesSectionProps {
  services: Service[];
  onPayment: (serviceId: number, price: string) => void;
}

const ServicesSection = ({ services, onPayment }: ServicesSectionProps) => {
  return (
    <section id="services" className="py-16 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">Наши услуги</Badge>
          <h3 className="text-3xl font-bold font-heading mb-6">Форматы работы и цены</h3>
          <p className="text-lg text-muted-foreground">
            Выберите подходящий формат коучинга
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={service.id} className="hover-scale border-0 shadow-lg fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={service.icon} size={24} className="text-primary" />
                </div>
                <CardTitle className="text-xl font-heading">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="text-center">
                <div className="mb-6">
                  <Badge variant="outline" className="mb-2">{service.duration}</Badge>
                  <div className="text-3xl font-bold text-primary">{service.price}</div>
                </div>
                
                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={() => onPayment(service.id, service.price)}
                >
                  <Icon name="CreditCard" size={20} className="mr-2" />
                  Оплатить
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;