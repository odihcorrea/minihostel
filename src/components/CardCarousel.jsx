import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CardCarousel.css';

import image1 from '/img/instalacoes/cafe.jpg';
import image2 from '/img/instalacoes/quintuplo1.jpg';
import image3 from '/img/instalacoes/suite1.jpg';
import BookingPopup from './BookingPopup';

const CardCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Adiciona a funcionalidade de passagem automática
    autoplaySpeed: 3000, // Define a velocidade da passagem automática (em milissegundos)
    nextArrow: <SampleNextArrow />, // Define o componente de seta próximo
    prevArrow: <SamplePrevArrow />, // Define o componente de seta anterior
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const [showPopup, setShowPopup] = useState(false);

  const handleShowPopup = () => setShowPopup(true);
  const handleClosePopup = () => setShowPopup(false);

  return (
    <div className="carousel-container2">
      <h1 id='quartos' className='text-center'>Nossos quartos</h1>
      <Slider {...settings}>
        <div className="carousel-card2">
          <img src={image1} alt="Quarto Deluxe" />
          <h2>Quarto Deluxe</h2>
          <p>Suíte espaçosa com uma cama king-size, ar-condicionado, Wi-Fi gratuito, banheiro privativo e uma vista deslumbrante.</p>
          <button onClick={handleShowPopup}>Mais informações</button>
        </div>
        <div className="carousel-card2">
          <img src={image2} alt="Quarto Standard" />
          <h2>Quarto Standard</h2>
          <p>Suíte espaçosa com uma cama king-size, ar-condicionado, Wi-Fi gratuito, banheiro privativo e uma vista deslumbrante.</p>
          <button>Reservar este quarto</button>
        </div>
        <div className="carousel-card2">
          <img src={image3} alt="Suíte" />
          <h2>Suíte</h2>
          <p>Suíte espaçosa com uma cama king-size, ar-condicionado, Wi-Fi gratuito, banheiro privativo e uma vista deslumbrante.</p>
          <button>Reservar este quarto</button>
        </div>
      </Slider>

      <BookingPopup show={showPopup} handleClose={handleClosePopup} />
    </div>
  );
}

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'blue', borderRadius: '50%' }}
      onClick={onClick}
    />
  );
}

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'blue', borderRadius: '50%' }}
      onClick={onClick}
    />
  );
}

export default CardCarousel;
