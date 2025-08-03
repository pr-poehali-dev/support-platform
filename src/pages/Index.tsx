import { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Approach from '../components/Approach';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleContact = (data: typeof contactForm) => {
    setContactForm(data);
    console.log('Форма отправлена:', data);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Approach />
      <Contact onSubmit={handleContact} />
      <Footer />
    </div>
  );
};

export default Index;