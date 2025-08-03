import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

interface ContactProps {
  onSubmit: (data: {
    name: string;
    email: string;
    phone: string;
    message: string;
  }) => void;
}

const Contact = ({ onSubmit }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      onSubmit(formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Ошибка отправки:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: 'MessageCircle',
      title: 'Telegram',
      description: '@relationcoach_ru',
      link: 'https://t.me/relationcoach_ru'
    },
    {
      icon: 'Phone',
      title: 'Телефон',
      description: '+7 (999) 123-45-67',
      link: 'tel:+79991234567'
    },
    {
      icon: 'Mail',
      title: 'Email',
      description: 'hello@relationcoach.ru',
      link: 'mailto:hello@relationcoach.ru'
    }
  ];

  if (submitted) {
    return (
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="CheckCircle" size={40} className="text-green-500" />
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Спасибо за заявку!
            </h2>
            
            <p className="text-xl text-gray-600 mb-8">
              Мы свяжемся с вами в течение 24 часов для назначения консультации.
            </p>
            
            <Button 
              onClick={() => setSubmitted(false)}
              variant="outline"
              className="border-2 border-rose-200 text-rose-700 hover:bg-rose-50"
            >
              Отправить ещё одну заявку
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <Badge 
            variant="secondary" 
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-rose-100 text-rose-700 border-0"
          >
            <Icon name="Calendar" size={16} />
            Запись на консультацию
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Готовы начать путь
            <br />
            <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
              к счастливым отношениям?
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Оставьте заявку, и мы свяжемся с вами для назначения первой консультации. 
            Расскажите немного о вашей ситуации — это поможет нам лучше подготовиться.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Form */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Записаться на консультацию
              </CardTitle>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-700 font-medium">
                    Ваше имя *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Как к вам обращаться?"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                    className="border-gray-300 focus:border-rose-500 focus:ring-rose-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700 font-medium">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                    className="border-gray-300 focus:border-rose-500 focus:ring-rose-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-gray-700 font-medium">
                    Телефон
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="border-gray-300 focus:border-rose-500 focus:ring-rose-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-700 font-medium">
                    Расскажите о вашей ситуации
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Кратко опишите, с чем хотели бы поработать. Это поможет нам лучше подготовиться к консультации."
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    rows={4}
                    className="border-gray-300 focus:border-rose-500 focus:ring-rose-500"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white py-3 text-lg font-semibold"
                >
                  {isSubmitting ? (
                    <>
                      <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                      Отправляем...
                    </>
                  ) : (
                    <>
                      <Icon name="Send" size={20} className="mr-2" />
                      Отправить заявку
                    </>
                  )}
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            
            {/* Quick Contact */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Свяжитесь с нами напрямую
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <a 
                    key={index}
                    href={contact.link}
                    className="flex items-center p-4 rounded-xl bg-gray-50 hover:bg-rose-50 transition-colors duration-300 group"
                  >
                    <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-rose-200 transition-colors duration-300">
                      <Icon name={contact.icon as any} size={24} className="text-rose-600" />
                    </div>
                    
                    <div>
                      <div className="font-semibold text-gray-900">{contact.title}</div>
                      <div className="text-gray-600">{contact.description}</div>
                    </div>
                    
                    <Icon name="ExternalLink" size={16} className="text-gray-400 ml-auto" />
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Часто задаваемые вопросы
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Сколько длится первая консультация?
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Знакомственная встреча длится 30 минут и проходит бесплатно.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Можно ли записаться на вечернее время?
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Да, мы работаем до 21:00 по будням и до 18:00 по выходным.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Проводите ли онлайн-сессии?
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Да, большинство консультаций проходят через Zoom или Telegram.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;