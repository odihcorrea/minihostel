import React, { useState } from 'react';
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap';
import './DetailsPage.css';

function DetailsPage() {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState(1);

  const handleSearch = () => {
    // Lógica para pesquisar quartos disponíveis
    console.log('Pesquisar:', { checkInDate, checkOutDate, numberOfPeople });
  };

  return (
    <Container className="mt-5">
      {/* Formulário de Pesquisa */}
      <Row className="mb-4">
        <Col md={4}>
          <Form.Group controlId="checkInDate">
            <Form.Label>Data de Check-in</Form.Label>
            <Form.Control
              type="date"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group controlId="checkOutDate">
            <Form.Label>Data de Check-out</Form.Label>
            <Form.Control
              type="date"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group controlId="numberOfPeople">
            <Form.Label>Número de Pessoas</Form.Label>
            <Form.Control
              as="select"
              value={numberOfPeople}
              onChange={(e) => setNumberOfPeople(e.target.value)}
            >
              {[1, 2, 3, 4, 5, 6].map((number) => (
                <option key={number} value={number}>{number}</option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <Button variant="primary" onClick={handleSearch}>Pesquisar</Button>
        </Col>
      </Row>

      {/* Detalhes do Hostel */}
      <Row>
        <Col md={8}>
          <Card className="mb-4">
            <Card.Img variant="top" src="path_to_your_hostel_image.jpg" alt="Mini Hostel" />
            <Card.Body>
              <Card.Title>Mini Hostel - Tutóia-MA</Card.Title>
              <Card.Text>
                <p>
                  Bem-vindo ao Mini Hostel! Oferecemos uma estadia confortável e acessível em Tutóia-MA. Nossos quartos são equipados para garantir o máximo de conforto para nossos hóspedes. A localização é ideal para explorar a beleza local e aproveitar o que a cidade tem a oferecer.
                </p>
                <p>
                  <strong>Endereço:</strong> Rua Exemplo, 123, Tutóia-MA, Brasil
                </p>
                <p>
                  <strong>Preço:</strong> A partir de R$160,00 por noite
                </p>
                <p>
                  <strong>Descrição:</strong> Nosso hostel oferece quartos aconchegantes com ar-condicionado, Wi-Fi gratuito, e uma área comum para relaxamento. Também temos uma cozinha compartilhada e uma recepção amigável para ajudar com qualquer necessidade.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <Card.Title>Faça sua Reserva</Card.Title>
              <p>
                Para garantir a sua estadia, clique no botão abaixo e você será redirecionado para o Booking.com para completar sua reserva.
              </p>
              <Button variant="primary" href="https://www.wa.me/5598985884338" target="_blank">
                Reservar Agora
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Detalhes da Reserva</Card.Title>
              <p><strong>Check-in:</strong> 25 de Julho de 2024</p>
              <p><strong>Check-out:</strong> 26 de Julho de 2024</p>
              <p><strong>Adultos:</strong> 2</p>
              <p><strong>Crianças:</strong> 0</p>
              <p><strong>Tipo de Quarto:</strong> Duplo</p>
              <p><strong>Preço Total:</strong> R$160,00</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    

  );
}

export default DetailsPage;
