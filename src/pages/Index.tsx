import { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import IssuesSection from '@/components/IssuesSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
    // Перенаправление на страницу благодарности
    window.location.href = '/thankyou';
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Имитация отправки формы
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Форма отправлена:', formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Ошибка отправки:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <IssuesSection />
      <ServicesSection 
        services={services} 
        onPayment={handlePayment} 
      />
      <TestimonialsSection testimonials={testimonials} />
      <FAQSection faqs={faqs} />
      <ContactSection 
        formData={formData}
        isSubmitting={isSubmitting}
        submitted={submitted}
        onFormSubmit={handleFormSubmit}
        onInputChange={handleInputChange}
      />
      <Footer />
    </div>
  );
};

export default Index;