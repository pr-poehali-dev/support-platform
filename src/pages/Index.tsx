import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const services = [
    {
      id: 1,
      title: "Индивидуальная сессия",
      description: "Персональный коучинг для улучшения навыков общения и эмоциональной зрелости",
      duration: "60 мин",
      price: "3 000 ₽",
      icon: "User"
    },
    {
      id: 2,
      title: "Сессия для пары",
      description: "Работа с обеими партнёрами для восстановления понимания и близости",
      duration: "90 мин",
      price: "5 000 ₽",
      icon: "Heart"
    },
    {
      id: 3,
      title: "Поддержка 7 дней",
      description: "Ежедневное сопровождение через чат для закрепления результатов",
      duration: "По чату",
      price: "4 000 ₽",
      icon: "MessageSquare"
    }
  ];

  const issues = [
    { icon: "AlertCircle", title: "Частые конфликты", description: "Помогаем находить причины разногласий и учиться договариваться" },
    { icon: "Snowflake", title: "Эмоциональный холод", description: "Работаем с отдалением и возвращаем тепло в отношения" },
    { icon: "HeartHandshake", title: "Желание близости", description: "Развиваем навыки эмоциональной интимности и понимания" },
    { icon: "Clock", title: "Неразрешённые обиды", description: "Учимся прощать и двигаться дальше без груза прошлого" },
    { icon: "Shield", title: "Страх расставания", description: "Работаем с тревогами и укрепляем доверие в паре" },
    { icon: "Compass", title: "Потеря направления", description: "Помогаем найти общие цели и ценности в отношениях" }
  ];

  const faqs = [
    {
      question: "Это психотерапия?",
      answer: "Нет, это коучинг отношений без медицинской диагностики. Мы работаем с развитием навыков общения, эмпатии и эмоциональной зрелости."
    },
    {
      question: "Нужно ли приходить вдвоём?",
      answer: "Не обязательно. Многие вопросы можно решить, работая индивидуально. Парные сессии эффективны, когда оба партнёра готовы к изменениям."
    },
    {
      question: "Как проходят сессии?",
      answer: "Онлайн через Zoom или Telegram. Мы обсуждаем ситуацию, выявляем паттерны поведения и даём практические рекомендации."
    },
    {
      question: "Сколько сессий потребуется?",
      answer: "Зависит от ситуации. Иногда достаточно 1-2 встреч для понимания направления, иногда требуется длительное сопровождение."
    }
  ];

  const testimonials = [
    {
      name: "Анна К.",
      text: "После сессии с коучем мы с мужем наконец-то научились слышать друг друга. Спасибо за терпение и профессионализм!",
      date: "15 января 2024"
    },
    {
      name: "Михаил С.",
      text: "Думал, что наши отношения обречены. Коучинг помог понять свои ошибки и изменить подход к общению с женой.",
      date: "8 декабря 2023"
    },
    {
      name: "Елена Р.",
      text: "Индивидуальные сессии дали мне уверенность в себе. Теперь я знаю, как строить здоровые отношения.",
      date: "22 ноября 2023"
    }
  ];

  const handlePayment = (serviceId: number, price: string) => {
    // Здесь будет интеграция с ЮKassa
    console.log(`Оплата услуги ${serviceId} на сумму ${price}`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Хедер */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Heart" size={24} className="text-primary" />
            <h1 className="text-xl font-bold font-heading">LoveCoach.Pro</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              О нас
            </a>
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">
              Услуги
            </a>
            <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">
              Вопросы
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

      {/* Hero блок */}
      <section className="py-20 px-4">
        <div className="container max-w-4xl mx-auto text-center fade-in">
          <div className="love-coach-gradient text-white rounded-2xl p-12 mb-16">
            <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6">
              Коучинг для пар и индивидуальных отношений
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Пойми друг друга. Услышь. Почувствуй.
            </p>
            <Button 
              size="lg" 
              variant="secondary" 
              className="hover-scale text-lg px-8 py-3"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Icon name="Calendar" size={20} className="mr-2" />
              Записаться на консультацию
            </Button>
          </div>
        </div>
      </section>

      {/* О проекте */}
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

      {/* С какими запросами работаем */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Области работы</Badge>
            <h3 className="text-3xl font-bold font-heading mb-6">С какими запросами мы работаем</h3>
            <p className="text-lg text-muted-foreground">
              Помогаем парам и отдельным людям в различных ситуациях
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {issues.map((issue, index) => (
              <Card key={index} className="relationship-card hover-scale fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <Icon name={issue.icon} size={20} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg">{issue.title}</CardTitle>
                  <CardDescription>{issue.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Услуги */}
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

      {/* Отзывы */}
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Отзывы</Badge>
            <h3 className="text-3xl font-bold font-heading mb-6">Что говорят наши клиенты</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-scale fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                      <Icon name="User" size={16} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.date}</div>
                    </div>
                  </div>
                  <p className="text-sm italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 px-4 bg-muted/30">
        <div className="container max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Часто задаваемые вопросы</Badge>
            <h3 className="text-3xl font-bold font-heading mb-6">Ответы на ваши вопросы</h3>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Контакты */}
      <section id="contact" className="py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Связь с нами</Badge>
            <h3 className="text-3xl font-bold font-heading mb-6">Контакты</h3>
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
                  <span>info@lovecoach.pro</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Icon name="MessageCircle" size={20} className="text-primary" />
                  <span>@lovecoach_bot</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={20} className="text-primary" />
                  <span>+7 (999) 123-45-67</span>
                </div>
              </div>

              <div className="mt-8 p-4 bg-primary/5 rounded-lg">
                <h5 className="font-semibold mb-2">Время работы</h5>
                <p className="text-sm text-muted-foreground">
                  Понедельник - Пятница: 10:00 - 20:00<br />
                  Суббота - Воскресенье: 12:00 - 18:00
                </p>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Форма обратной связи</CardTitle>
                <CardDescription>
                  Оставьте заявку и мы свяжемся с вами в течение 24 часов
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <Input placeholder="Ваше имя" />
                <Input type="email" placeholder="Email" />
                <Textarea placeholder="Опишите вашу ситуацию" rows={4} />
                
                <Button className="w-full">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
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
                <Icon name="Heart" size={20} className="text-primary" />
                <span className="font-bold font-heading">LoveCoach.Pro</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Услуги не являются медицинскими, психологическими или психиатрическими. 
                Это информационно-консультационные услуги по развитию навыков общения.
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
            © 2024 LoveCoach.Pro. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;