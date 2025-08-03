import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Offer = () => {
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
          <Badge variant="secondary" className="mb-4">Юридические документы</Badge>
          <h1 className="text-4xl font-bold font-heading mb-6">Публичная оферта</h1>
          <p className="text-lg text-muted-foreground">
            Договор оказания информационно-консультационных услуг
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Icon name="FileText" size={20} className="text-primary" />
                <span>1. Общие положения</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                1.1. Настоящая публичная оферта (далее — «Оферта») содержит все существенные условия договора 
                оказания информационно-консультационных услуг и адресована физическим лицам.
              </p>
              <p>
                1.2. Исполнитель: Индивидуальный предприниматель / Самозанятый<br />
                ИНН: 123456789012<br />
                Email: info@lovecoach.pro
              </p>
              <p>
                1.3. Услуги носят информационно-консультационный характер и НЕ являются:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Медицинскими услугами</li>
                <li>Психологической или психиатрической помощью</li>
                <li>Психотерапией</li>
                <li>Диагностикой или лечением</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Icon name="Users" size={20} className="text-primary" />
                <span>2. Предмет договора</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                2.1. Исполнитель предоставляет Заказчику следующие информационно-консультационные услуги:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Коучинг по улучшению навыков межличностного общения</li>
                <li>Консультации по развитию эмоциональной зрелости</li>
                <li>Обучение техникам эффективной коммуникации в отношениях</li>
                <li>Информационная поддержка при решении бытовых вопросов в парах</li>
              </ul>
              <p>
                2.2. Услуги оказываются дистанционно через видеосвязь (Zoom, Skype) или мессенджеры.
              </p>
              <p>
                2.3. Длительность консультаций указана на сайте для каждого тарифа отдельно.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Icon name="CreditCard" size={20} className="text-primary" />
                <span>3. Стоимость и порядок оплаты</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                3.1. Стоимость услуг указана на сайте lovecoach.pro и может изменяться Исполнителем в одностороннем порядке.
              </p>
              <p>
                3.2. Оплата производится через платежную систему ЮKassa до оказания услуги.
              </p>
              <p>
                3.3. Факт оплаты подтверждает согласие Заказчика с условиями настоящей Оферты.
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <p className="text-amber-800 font-medium">
                  <Icon name="AlertTriangle" size={16} className="inline mr-2" />
                  Внимание: Результат консультаций зависит от готовности Заказчика применять полученные рекомендации. 
                  Исполнитель не гарантирует конкретных результатов.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Icon name="RotateCcw" size={20} className="text-primary" />
                <span>4. Возврат средств</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                4.1. Возврат денежных средств возможен в следующих случаях:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Технические неполадки, препятствующие проведению консультации, по вине Исполнителя</li>
                <li>Отмена консультации Заказчиком не менее чем за 24 часа до назначенного времени</li>
              </ul>
              <p>
                4.2. Возврат НЕ производится в случаях:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Консультация была проведена в полном объеме</li>
                <li>Отмена Заказчиком менее чем за 24 часа до начала</li>
                <li>Неявка Заказчика на консультацию без предварительного уведомления</li>
              </ul>
              <p>
                4.3. Срок рассмотрения заявления на возврат — до 10 рабочих дней.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Icon name="Shield" size={20} className="text-primary" />
                <span>5. Конфиденциальность</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                5.1. Исполнитель гарантирует конфиденциальность всей информации, полученной в ходе консультаций.
              </p>
              <p>
                5.2. Информация не передается третьим лицам без письменного согласия Заказчика, 
                за исключением случаев, предусмотренных законодательством РФ.
              </p>
              <p>
                5.3. Обработка персональных данных осуществляется в соответствии с Политикой конфиденциальности 
                и требованиями ФЗ-152 «О персональных данных».
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Icon name="AlertCircle" size={20} className="text-primary" />
                <span>6. Ответственность и ограничения</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                6.1. Исполнитель не несет ответственности за:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Результаты применения полученных рекомендаций</li>
                <li>Решения, принятые Заказчиком на основе консультаций</li>
                <li>Технические проблемы на стороне Заказчика</li>
              </ul>
              <p>
                6.2. Максимальная ответственность Исполнителя ограничена суммой, уплаченной за конкретную услугу.
              </p>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-800 font-medium">
                  <Icon name="AlertTriangle" size={16} className="inline mr-2" />
                  При наличии психических расстройств, суицидальных мыслей или других серьезных проблем 
                  рекомендуется обратиться к квалифицированному врачу-психиатру или психотерапевту.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Icon name="Scale" size={20} className="text-primary" />
                <span>7. Заключительные положения</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                7.1. Настоящая Оферта вступает в силу с момента размещения на сайте.
              </p>
              <p>
                7.2. Исполнитель вправе в любое время изменить условия Оферты, уведомив об этом на сайте.
              </p>
              <p>
                7.3. Все споры решаются путем переговоров, а при недостижении соглашения — 
                в соответствии с действующим законодательством РФ.
              </p>
              <p>
                7.4. Договор считается заключенным с момента оплаты услуг Заказчиком.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12 p-8 bg-muted/30 rounded-lg">
          <p className="text-muted-foreground mb-4">
            Документ актуален на дату: {new Date().toLocaleDateString('ru-RU')}
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

export default Offer;