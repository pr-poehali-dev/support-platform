import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
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
              <a href="/thankyou" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Спасибо за оплату
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
  );
};

export default Footer;