import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Privacy = () => {
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
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">Защита данных</Badge>
          <h1 className="text-4xl font-bold font-heading mb-6">Политика конфиденциальности</h1>
          <p className="text-lg text-muted-foreground">
            Обработка и защита персональных данных в соответствии с ФЗ-152
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Icon name="Info" size={20} className="text-primary" />
                <span>1. Общие положения</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                1.1. Настоящая Политика конфиденциальности (далее — «Политика») определяет порядок обработки 
                и защиты персональных данных пользователей сайта lovecoach.pro.
              </p>
              <p>
                1.2. Оператор персональных данных:
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p><strong>Индивидуальный предприниматель / Самозанятый</strong></p>
                <p>ИНН: 123456789012</p>
                <p>Email: info@lovecoach.pro</p>
                <p>Адрес: Россия</p>
              </div>
              <p>
                1.3. Политика разработана в соответствии с требованиями:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Федерального закона от 27.07.2006 №152-ФЗ «О персональных данных»</li>
                <li>Федерального закона от 13.03.2006 №38-ФЗ «О рекламе»</li>
                <li>Федерального закона от 07.07.2003 №126-ФЗ «О связи»</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Icon name="Database" size={20} className="text-primary" />
                <span>2. Какие данные мы собираем</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                2.1. Мы можем собирать следующие категории персональных данных:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold">Обязательные данные:</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Имя (или псевдоним)</li>
                    <li>Адрес электронной почты</li>
                    <li>Телефон (при указании)</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Технические данные:</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>IP-адрес</li>
                    <li>Данные браузера</li>
                    <li>Cookies файлы</li>
                    <li>Время посещения</li>
                  </ul>
                </div>
              </div>
              <p>
                2.2. Мы НЕ собираем:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Паспортные данные</li>
                <li>Адрес места жительства</li>
                <li>Медицинскую информацию</li>
                <li>Данные о доходах</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Icon name="Target" size={20} className="text-primary" />
                <span>3. Цели обработки данных</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                3.1. Персональные данные обрабатываются в следующих целях:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Icon name="UserCheck" size={16} className="text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold">Идентификация пользователя</h4>
                      <p className="text-sm text-muted-foreground">Для предоставления персонализированных услуг</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="MessageSquare" size={16} className="text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold">Обратная связь</h4>
                      <p className="text-sm text-muted-foreground">Ответы на вопросы и консультации</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Icon name="CreditCard" size={16} className="text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold">Обработка платежей</h4>
                      <p className="text-sm text-muted-foreground">Проведение финансовых операций</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="BarChart" size={16} className="text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold">Аналитика</h4>
                      <p className="text-sm text-muted-foreground">Улучшение качества сервиса</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Icon name="Shield" size={20} className="text-primary" />
                <span>4. Правовые основания обработки</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                4.1. Обработка персональных данных осуществляется на основании:
              </p>
              <div className="space-y-3">
                <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                  <Icon name="Check" size={16} className="text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-green-800">Согласие субъекта данных</h4>
                    <p className="text-sm text-green-700">Добровольное согласие при заполнении форм на сайте</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                  <Icon name="FileText" size={16} className="text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-blue-800">Исполнение договора</h4>
                    <p className="text-sm text-blue-700">Для оказания заказанных услуг</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-purple-50 rounded-lg">
                  <Icon name="Scale" size={16} className="text-purple-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-purple-800">Законные интересы</h4>
                    <p className="text-sm text-purple-700">Обеспечение безопасности и улучшение сервиса</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Icon name="Clock" size={20} className="text-primary" />
                <span>5. Сроки хранения данных</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-2 text-left">Тип данных</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Срок хранения</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Контактные данные клиентов</td>
                      <td className="border border-gray-300 px-4 py-2">3 года с момента последнего обращения</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Данные о платежах</td>
                      <td className="border border-gray-300 px-4 py-2">5 лет (в соответствии с налоговым законодательством)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Логи сервера</td>
                      <td className="border border-gray-300 px-4 py-2">1 год</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Cookies</td>
                      <td className="border border-gray-300 px-4 py-2">До 1 года или до удаления пользователем</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                5.2. По истечении указанных сроков данные подлежат удалению, если иное не предусмотрено законодательством.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Icon name="Users" size={20} className="text-primary" />
                <span>6. Передача данных третьим лицам</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                6.1. Мы можем передавать персональные данные следующим категориям получателей:
              </p>
              <div className="space-y-3">
                <div className="p-3 border rounded-lg">
                  <h4 className="font-semibold flex items-center space-x-2">
                    <Icon name="CreditCard" size={16} className="text-primary" />
                    <span>Платежные системы</span>
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    ЮKassa — для обработки платежей (только необходимые данные)
                  </p>
                </div>
                <div className="p-3 border rounded-lg">
                  <h4 className="font-semibold flex items-center space-x-2">
                    <Icon name="Mail" size={16} className="text-primary" />
                    <span>Email-сервисы</span>
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Для отправки уведомлений и информационных писем
                  </p>
                </div>
                <div className="p-3 border rounded-lg">
                  <h4 className="font-semibold flex items-center space-x-2">
                    <Icon name="Scale" size={16} className="text-primary" />
                    <span>Государственные органы</span>
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Только при наличии законных требований
                  </p>
                </div>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-800">
                  <Icon name="AlertTriangle" size={16} className="inline mr-2" />
                  Мы НЕ продаем, НЕ сдаем в аренду и НЕ передаем ваши данные третьим лицам для маркетинговых целей.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Icon name="UserCog" size={20} className="text-primary" />
                <span>7. Ваши права</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                7.1. В соответствии с ФЗ-152 вы имеете следующие права:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Icon name="Eye" size={16} className="text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold">Право на получение информации</h4>
                      <p className="text-sm text-muted-foreground">О целях и способах обработки ваших данных</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="Edit" size={16} className="text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold">Право на изменение</h4>
                      <p className="text-sm text-muted-foreground">Исправление неточных или неполных данных</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Icon name="Trash2" size={16} className="text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold">Право на удаление</h4>
                      <p className="text-sm text-muted-foreground">Требование удалить ваши персональные данные</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="Ban" size={16} className="text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold">Право на отзыв согласия</h4>
                      <p className="text-sm text-muted-foreground">В любое время без объяснения причин</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2">Как реализовать свои права:</h4>
                <p className="text-blue-700">
                  Направьте письменный запрос на email: <strong>info@lovecoach.pro</strong><br />
                  Срок рассмотрения: до 30 дней с момента получения запроса
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Icon name="Cookie" size={20} className="text-primary" />
                <span>8. Cookies и аналитика</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                8.1. Мы используем cookies для улучшения работы сайта:
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={16} className="text-green-500" />
                  <span>Необходимые cookies (для работы сайта)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={16} className="text-green-500" />
                  <span>Аналитические cookies (анонимная статистика)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="X" size={16} className="text-red-500" />
                  <span>Рекламные cookies (НЕ используем)</span>
                </div>
              </div>
              <p>
                8.2. Вы можете отключить cookies в настройках браузера, но это может ограничить функциональность сайта.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Icon name="Phone" size={20} className="text-primary" />
                <span>9. Контакты</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                9.1. По всем вопросам, связанным с обработкой персональных данных, обращайтесь:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold">Контактная информация:</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <Icon name="Mail" size={16} className="text-primary" />
                      <span>info@lovecoach.pro</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="MessageCircle" size={16} className="text-primary" />
                      <span>@lovecoach_bot</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Время обработки запросов:</h4>
                  <p className="text-sm text-muted-foreground">
                    Понедельник - Пятница: 10:00 - 18:00<br />
                    Ответ на email: до 3 рабочих дней
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12 p-8 bg-muted/30 rounded-lg">
          <p className="text-muted-foreground mb-4">
            Политика конфиденциальности действует с: {new Date().toLocaleDateString('ru-RU')}<br />
            Последнее обновление: {new Date().toLocaleDateString('ru-RU')}
          </p>
          <Button onClick={() => window.location.href = '/'}>
            <Icon name="ArrowLeft" size={16} className="mr-2" />
            Вернуться на главную
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Privacy;