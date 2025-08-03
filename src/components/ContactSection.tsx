import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface ContactSectionProps {
  formData: FormData;
  isSubmitting: boolean;
  submitted: boolean;
  onFormSubmit: (e: React.FormEvent) => void;
  onInputChange: (field: string, value: string) => void;
}

const ContactSection = ({ 
  formData, 
  isSubmitting, 
  submitted, 
  onFormSubmit, 
  onInputChange 
}: ContactSectionProps) => {
  return (
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
              {submitted ? (
                <div className="text-center py-8">
                  <Icon name="CheckCircle" size={48} className="text-green-500 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold mb-2">Спасибо за обращение!</h4>
                  <p className="text-muted-foreground">Мы свяжемся с вами в течение 24 часов</p>
                </div>
              ) : (
                <form onSubmit={onFormSubmit}>
                  <div className="space-y-4">
                    <Input 
                      placeholder="Ваше имя" 
                      value={formData.name}
                      onChange={(e) => onInputChange('name', e.target.value)}
                      required
                    />
                    <Input 
                      type="email" 
                      placeholder="Email" 
                      value={formData.email}
                      onChange={(e) => onInputChange('email', e.target.value)}
                      required
                    />
                    <Textarea 
                      placeholder="Опишите вашу ситуацию" 
                      rows={4}
                      value={formData.message}
                      onChange={(e) => onInputChange('message', e.target.value)}
                      required
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full" 
                      disabled={isSubmitting}
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
                  </div>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;