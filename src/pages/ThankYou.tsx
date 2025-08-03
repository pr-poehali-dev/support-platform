import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Хедер */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Heart" size={24} className="text-primary" />
            <h1 className="text-xl font-bold font-heading">LoveCoach.Pro</h1>
          </div>
          
          <Button 
            variant="outline" 
            onClick={() => window.location.href = '/'}
          >
            <Icon name="Home" size={16} className="mr-2" />
            На главную
          </Button>
        </div>
      </header>

      <div className="container max-w-4xl mx-auto px-4 py-12">
        <div className="text-center">
          {/* Основная карточка благодарности */}
          <Card className="max-w-2xl mx-auto shadow-lg">
            <CardHeader className="text-center pb-6">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="CheckCircle" size={48} className="text-green-500" />
              </div>
              <Badge variant="secondary" className="mb-4">Оплата успешна</Badge>
              <CardTitle className="text-3xl font-bold font-heading text-green-600 mb-4">
                Спасибо за оплату!
              </CardTitle>
            </CardHeader>
            
            <CardContent className="text-center space-y-6">
              <p className="text-xl text-muted-foreground">
                Ваш платёж успешно обработан. Мы свяжемся с вами в течение 24 часов 
                для назначения консультации.
              </p>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-semibold text-blue-800 mb-3">Что происходит дальше?</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-start space-x-3">
                    <Icon name="Clock" size={16} className="text-blue-600 mt-1" />
                    <div>
                      <p className="font-medium">В течение 24 часов</p>
                      <p className="text-sm text-blue-700">Наш координатор свяжется с вами для согласования времени</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="Calendar" size={16} className="text-blue-600 mt-1" />
                    <div>
                      <p className="font-medium">Назначение встречи</p>
                      <p className="text-sm text-blue-700">Выберем удобное время для проведения сессии</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="Video" size={16} className="text-blue-600 mt-1" />
                    <div>
                      <p className="font-medium">Проведение консультации</p>
                      <p className="text-sm text-blue-700">Встреча пройдет онлайн через Zoom или Telegram</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Контакты для связи:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center justify-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Icon name="Mail" size={20} className="text-primary" />
                    <span>info@lovecoach.pro</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Icon name="MessageCircle" size={20} className="text-primary" />
                    <span>@lovecoach_bot</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <Button 
                  onClick={() => window.location.href = '/'}
                  className="w-full md:w-auto"
                  size="lg"
                >
                  <Icon name="ArrowLeft" size={20} className="mr-2" />
                  Вернуться на главную
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Дополнительная информация */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Icon name="Shield" size={32} className="text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Гарантия конфиденциальности</h3>
                <p className="text-sm text-muted-foreground">
                  Все ваши данные защищены и не передаются третьим лицам
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <Icon name="Users" size={32} className="text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Профессиональный подход</h3>
                <p className="text-sm text-muted-foreground">
                  Индивидуальный план работы для каждого клиента
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <Icon name="RotateCcw" size={32} className="text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Гибкие условия</h3>
                <p className="text-sm text-muted-foreground">
                  Возможность переноса или отмены сессии за 24 часа
                </p>
              </CardContent>
            </Card>
          </div>

          {/* FAQ для первого раза */}
          <Card className="mt-12">
            <CardHeader>
              <CardTitle className="flex items-center justify-center space-x-2">
                <Icon name="HelpCircle" size={24} className="text-primary" />
                <span>Первый раз у нас?</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-semibold mb-3">Как подготовиться к сессии:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <Icon name="CheckCircle" size={16} className="text-green-500 mt-1" />
                      <span>Выберите тихое место для разговора</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Icon name="CheckCircle" size={16} className="text-green-500 mt-1" />
                      <span>Убедитесь в стабильном интернет-соединении</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Icon name="CheckCircle" size={16} className="text-green-500 mt-1" />
                      <span>Подумайте о том, что хотели бы обсудить</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Icon name="CheckCircle" size={16} className="text-green-500 mt-1" />
                      <span>Настройтесь на открытый диалог</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Что взять с собой:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <Icon name="Coffee" size={16} className="text-primary mt-1" />
                      <span>Чашку чая или кофе для комфорта</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Icon name="Book" size={16} className="text-primary mt-1" />
                      <span>Блокнот для заметок (по желанию)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Icon name="Heart" size={16} className="text-primary mt-1" />
                      <span>Готовность к позитивным изменениям</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Icon name="Clock" size={16} className="text-primary mt-1" />
                      <span>Время согласно забронированному слоту</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-12 text-center text-muted-foreground">
            <p>
              Если у вас возникли вопросы или нужно изменить время встречи, 
              свяжитесь с нами любым удобным способом.
            </p>
            <p className="mt-2">
              <strong>Мы ценим ваше доверие и готовы помочь!</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;