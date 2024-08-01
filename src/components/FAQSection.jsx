import React from 'react';
import { Container, Accordion, Card } from 'react-bootstrap';
import './FAQSection.css'

const FAQSection = () => {
  const faqs = [
    {
      question: 'Quais são os horários de check-in e check-out?',
      answer: 'O check-in é a partir das 14h e o check-out deve ser feito até as 12h.'
    },
    {
      question: 'O hostel oferece Wi-Fi gratuito?',
      answer: 'Sim, oferecemos Wi-Fi gratuito em todas as áreas do hostel.'
    },
    {
      question: 'É permitido animais de estimação?',
      answer: 'Infelizmente, não permitimos animais de estimação no hostel.'
    },
    {
      question: 'O café da manhã está incluído na diária?',
      answer: 'Sim, o café da manhã está incluído em todas as diárias.'
    },
    {
      question: 'O hostel possui estacionamento?',
      answer: 'Sim, temos estacionamento gratuito disponível para os hóspedes.'
    }
  ];

  return (
    <Container className="faq-section py-5">
      <h2 className="text-center mb-4">Perguntas Frequentes</h2>
      <Accordion>
        {faqs.map((faq, index) => (
          <Card key={index}>
            <Accordion.Toggle className='accordion-header accordion-button collapsed' as={Card.Header} eventKey={index.toString()}>
              {faq.question}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={index.toString()}>
              <Card.Body>{faq.answer}</Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
    </Container>
  );
};

export default FAQSection;
