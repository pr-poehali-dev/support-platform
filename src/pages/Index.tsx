import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const services = [
    {
      id: 1,
      title: "Индивидуальные разговорные сессии",
      description: "Личная беседа для поддержки в трудных ситуациях",
      duration: "15 минут",
      price: "1 000 ₽",
      icon: "MessageCircle"
    },
    {
      id: 2,
      title: "Сопровождение в принятии решений",
      description: "Помощь в анализе вариантов и выборе направления",
      duration: "30 минут",
      price: "3 000 ₽",
      icon: "Compass"
    },
    {
      id: 3,
      title: "Поддержка при эмоциональном выгорании",
      description: "Работа с состоянием усталости и потери мотивации",
      duration: "60 минут",
      price: "5 000 ₽",
      icon: "Heart"
    }
  ];

  const handlePayment = (serviceId: number, price: string) => {
    // Здесь будет интеграция с ЮKassa
    console.log(`Оплата услуги ${serviceId} на сумму ${price}`);
    // После успешной оплаты перенаправление на /thankyou
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Хедер */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Users" size={24} className="text-primary" />
            <h1 className="text-xl font-semibold">Консультационный сервис</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              О нас
            </a>
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">
              Услуги
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Контакты
            </a>
          </nav>

          <Button variant="outline" className="md:hidden">
            <Icon name="Menu" size={20} />
          </Button>
        </div>
      </header>

      {/* Главный блок */}
      <section className="py-20 px-4">
        <div className="container max-w-4xl mx-auto text-center fade-in">
          <div className="consultation-gradient text-white rounded-2xl p-12 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Поддержка в сложных жизненных ситуациях
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Помогаем разобраться в чувствах, найти выход и получить эмоциональный отклик
            </p>
            <Button 
              size="lg" 
              variant="secondary" 
              className="hover-scale"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Icon name="ArrowDown" size={20} className="mr-2" />
              Узнать подробнее
            </Button>
          </div>
        </div>
      </section>

      {/* О нас */}
      <section id="about" className="py-16 px-4 bg-muted/30">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">О нашем сервисе</Badge>
            <h3 className="text-3xl font-bold mb-6">Кто мы такие</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Мы предоставляем поддержку тем, кто оказался в сложной жизненной ситуации. 
              Помогаем разобраться в чувствах, найти выход и получить эмоциональный отклик. 
              Наши услуги носят информационно-консультационный характер.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={24} className="text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Индивидуальный подход</h4>
              <p className="text-sm text-muted-foreground">
                Каждая сессия адаптируется под ваши потребности
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={24} className="text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Конфиденциальность</h4>
              <p className="text-sm text-muted-foreground">
                Полная защита ваших персональных данных
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={24} className="text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Гибкий график</h4>
              <p className="text-sm text-muted-foreground">
                Удобное время для проведения сессий
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Услуги */}
      <section id="services" className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Наши услуги</Badge>
            <h3 className="text-3xl font-bold mb-6">Форматы и цены</h3>
            <p className="text-lg text-muted-foreground">
              Выберите подходящий формат консультации
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={service.id} className={`hover-scale border-0 shadow-lg fade-in`} style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
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
                    onClick={() => handlePayment(service.id, service.price)}
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

      {/* Контакты */}
      <section id="contact" className="py-16 px-4 bg-muted/30">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Связь с нами</Badge>
            <h3 className="text-3xl font-bold mb-6">Контакты</h3>
            <p className="text-lg text-muted-foreground">
              Напишите нам или воспользуйтесь формой обратной связи
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-xl font-semibold mb-6">Как с нами связаться</h4>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={20} className="text-primary" />
                  <span>info@consultation-service.ru</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Icon name="MessageCircle" size={20} className="text-primary" />
                  <span>@consultation_bot</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={20} className="text-primary" />
                  <span>+7 (999) 123-45-67</span>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Форма обратной связи</CardTitle>
                <CardDescription>
                  Оставьте заявку и мы свяжемся с вами
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <Input placeholder="Ваше имя" />
                <Input type="email" placeholder="Email" />
                <Textarea placeholder="Сообщение" rows={4} />
                
                <Button className="w-full">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="border-t py-12 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Users" size={20} className="text-primary" />
                <span className="font-semibold">Консультационный сервис</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Информационные услуги. Не являются медицинской или психологической помощью.
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Документы</h5>
              <div className="space-y-2">
                <a href="/offer" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  Публичная оферта
                </a>
                <a href="/privacy" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  Политика конфиденциальности
                </a>
              </div>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Юридическая информация</h5>
              <p className="text-sm text-muted-foreground">
                ИНН: 123456789012
              </p>
              <p className="text-sm text-muted-foreground">
                Самозанятый
              </p>
            </div>
          </div>
          
          <div className="border-t pt-8 text-center text-sm text-muted-foreground">
            © 2024 Консультационный сервис. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;