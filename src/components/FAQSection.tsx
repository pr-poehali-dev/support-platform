import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
}

const FAQSection = ({ faqs }: FAQSectionProps) => {
  return (
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
  );
};

export default FAQSection;