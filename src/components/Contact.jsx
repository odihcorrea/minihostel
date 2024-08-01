import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import FAQSection from './FAQSection';



const ContactSection = () => {
  const [entryDate, setEntryDate] = useState('');
  const [exitDate, setExitDate] = useState('');
  const [adults, setAdults] = useState('');
  const [children, setChildren] = useState('0');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!entryDate || !exitDate || !adults) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    const whatsappNumber = "98988162698";
    const message = `Olá, venho pelo site do Mini Hostel e gostaria de verificar disponibilidade com entrada dia ${entryDate} e saída dia ${exitDate} para ${adults} adultos e ${children} crianças.`;
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className='bg-dark '>
      <div>.</div>
    <Container className="rounded shadow contact-section py-5">
      <h2 className="text-center mb-4">Consultar Disponibilidade</h2>
      <Row className="justify-content-center">
        <Col md={8}>
          <Form onSubmit={handleFormSubmit}>
            <Row>
              <Col md={6}>
                <Form.Group controlId="entryDate">
                  <Form.Label>Data de Entrada</Form.Label>
                  <Form.Control
                    type="date"
                    value={entryDate}
                    onChange={(e) => setEntryDate(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="exitDate">
                  <Form.Label>Data de Saída</Form.Label>
                  <Form.Control
                    type="date"
                    value={exitDate}
                    onChange={(e) => setExitDate(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group controlId="adults">
                  <Form.Label>Quantidade de Adultos</Form.Label>
                  <Form.Control
                    type="number"
                    value={adults}
                    onChange={(e) => setAdults(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="children">
                  <Form.Label>Quantidade de Crianças</Form.Label>
                  <Form.Control
                    type="number"
                    value={children}
                    onChange={(e) => setChildren(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Button variant="primary" type="submit" className="mt-3 ml-1">
              Consultar Disponibilidade
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>

      <FAQSection />
    </div>

  );
};

export default ContactSection;
