import React from 'react';
import { Container } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap'; // Certifique-se de que esta linha está presente
import './Home.css'; // Para o CSS personalizados

import image1 from '/img/instalacoes/cafe.jpg';
import image2 from '/img/instalacoes/quintuplo1.jpg';
import image3 from '/img/instalacoes/suite1.jpg';

function Home() {
  return (
    <div>
      <header className="hero-section">
        <div className="hero-text">
          <h1>Bem-vindo ao Mini Hostel</h1>
          <p>O melhor lugar para se hospedar em Tutóia-MA.</p>
        </div>
      </header>

      <div className="carousel-container">
        <Carousel interval={2000} indicators={true} controls={true} slide={true}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={image1}
              alt="Imagem 1"
            />
            <Carousel.Caption>
              <h3>Imagem 1</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={image2}
              alt="Imagem 2"
            />
            <Carousel.Caption>
              <h3>Imagem 2</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={image3}
              alt="Imagem 3"
            />
            <Carousel.Caption>
              <h3>Imagem 3</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}


export default Home;
