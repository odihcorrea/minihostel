import React from 'react';
import { Button, Carousel, Col, Container, Row} from 'react-bootstrap'; // Certifique-se de que esta linha está presente
import './Home.css'; // Para o CSS personalizados
import BookingPopup from './BookingPopup';


import image1 from '/img/instalacoes/cafe.jpg';
import image2 from '/img/instalacoes/quintuplo1.jpg';
import image3 from '/img/instalacoes/suite1.jpg';
import CardCarousel from './CardCarousel';
import NewSectionCarousel from './NewSectionCarousel';
import Beneficios from './beneficios';
import Reviews from './Reviews';
import ReviewsSection from './ReviewsSection';
import LocationSection from './LocationSection';
import EbookSection from './EbookSection';


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
        <Carousel interval={3000} indicators={false} pause={false} controls={false} slide={true}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={image1}
              alt="Imagem 1"
            />
            
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={image2}
              alt="Imagem 2"
            />
           
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={image3}
              alt="Imagem 3"
            />
           
          </Carousel.Item>
        </Carousel>
      </div>

      <Beneficios />

      <CardCarousel/>

      <NewSectionCarousel />

      <Reviews />
      <ReviewsSection/>

      <LocationSection />
      <div className='bg-dark'>
      <EbookSection />
      </div>


    </div>
  );
}

export default Home;