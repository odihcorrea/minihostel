import React from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Carousel, Button} from 'react-bootstrap'; // Certifique-se de que esta linha está presente
import './Home.css'; // Para o CSS personalizados
import BookingPopup from './BookingPopup';

import image1 from '/img/instalacoes/cafe.jpg';
import image2 from '/img/instalacoes/quintuplo1.jpg';
import image3 from '/img/instalacoes/suite1.jpg';
import roomImage from '/img/instalacoes/suite1.jpg'; // Imagem do quarto

function Home() {

  const [showPopup, setShowPopup] = useState(false);

  const handleShowPopup = () => setShowPopup(true);
  const handleClosePopup = () => setShowPopup(false);

  return (
    <div>
      <header className="hero-section">
        <div className="hero-text">
          <h1>Bem-vindo ao Mini Hostel</h1>
          <p>O melhor lugar para se hospedar em Tutóia-MA.</p>
        </div>
      </header>

      <div className="carousel-container">
        <Carousel interval={3000} indicators={false} pause={false} controls={false} slide={true}>
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

      {/*nova seção*/}
      <div className="room-section">
        <div className="room-image">
          <img src={roomImage} alt="Quarto" />
        </div>
        <div className="room-details">
          <h2>Quarto Deluxe</h2>
          <p>
            Este quarto deluxe oferece o máximo de conforto com uma cama king-size, 
            ar-condicionado, Wi-Fi gratuito, banheiro privativo e uma vista incrível para a cidade.
          </p>
          <Button variant="primary" onClick={handleShowPopup} >
            Reservar este quarto
          </Button>
        </div>
      </div>

      {/*nova seção*/}
      <div className="room-section">
        <div className="room-details">
          <h2>Quarto Deluxe</h2>
          <p>
            Este quarto deluxe oferece o máximo de conforto com uma cama king-size, 
            ar-condicionado, Wi-Fi gratuito, banheiro privativo e uma vista incrível para a cidade.
          </p>
          <Button variant="primary" onClick={handleShowPopup} >
            Reservar este quarto
          </Button>
        </div>
        <div className="room-image">
          <img src={roomImage} alt="Quarto" />
        </div>
      </div>

      <BookingPopup show={showPopup} handleClose={handleClosePopup} />
    </div>
  );
}

export default Home;