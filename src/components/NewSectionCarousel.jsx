import React from 'react';
import { Container, Row, Col, Button, CarouselItem } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import './NewSectionCarousel.css'

import image1 from '/img/instalacoes/cafe.jpg';
import image2 from '/img/instalacoes/quintuplo1.jpg';
import image3 from '/img/instalacoes/suite1.jpg';


const NewSectionCarousel = () => {
  return (
<Container id="rooms-section" className="room-section">
      <Row>
        <Col md={6} className="room-image">
          <Carousel>
            <Carousel.Item>
              <img src={image1} alt="Quarto Deluxe" className="d-block w-100" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={image2} alt="Quarto Standard" className="d-block w-100" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={image3} alt="Suíte" className="d-block w-100" />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col md={6} className="text-dark room-details d-flex flex-column justify-content-center">
          <h2>Quarto Deluxe</h2>
          <p>
            Este quarto deluxe oferece o máximo de conforto com uma cama king-size, 
            ar-condicionado, Wi-Fi gratuito, banheiro privativo e uma vista incrível para a cidade.
          </p>
          <Button variant="warning" className="mt-auto">
            Reservar este quarto
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default NewSectionCarousel;
