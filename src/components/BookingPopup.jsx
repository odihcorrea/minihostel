import React, { useState } from 'react';
import { Modal, Button, Carousel } from 'react-bootstrap';
import './BookingPopup.css';

const images = [
    '/img/instalacoes/cafe.jpg',
    '/img/instalacoes/quintuplo1.jpg',
    '/img/instalacoes/suite1.jpg',
];

function BookingPopup({ show, handleClose }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header>
        <Modal.Title>Suíte Standard</Modal.Title>
        <button type="button" onClick={handleClose} class="btn-close" aria-label="Close"></button>
        </Modal.Header>
      <Modal.Body>
        <div className="popup-container">
          <Carousel activeIndex={index} onSelect={handleSelect} controls={true} indicators={false} className="main-carousel">
            {images.map((src, idx) => (
              <Carousel.Item key={idx}>
                <img
                  className="d-block w-100"
                  src={src}
                  alt={`Imagem ${idx + 1}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>

          <div className="thumbnail-container">
            {images.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Thumbnail ${idx + 1}`}
                className={`thumbnail ${idx === index ? 'active' : ''}`}
                onClick={() => handleSelect(idx)}
              />
            ))}
          </div>

          <div className="details-section">
            <h2 className='text-center'>Suíte Standard</h2>
            <ul className="room-features">
              <li><i className="fas fa-bed"></i> 1 cama de casal</li>
              <li><i className="fas fa-bath"></i> Banheiro privativo</li>
              <li><i className="fas fa-wifi"></i> Wi-Fi Gratuito</li>
              <li><i className="fas fa-tv"></i> TV de tela plana</li>
              <li><i className="fas fa-temperature-high"></i> Ar-condicionado</li>
              <li><i className="fas fa-coffee"></i> Máquina de café</li>
            </ul>
            <p>Tamanho: 9 m²</p>
            <p>
              Featuring a private entrance, this air-conditioned suite comprises 1 living room, 1 separate bedroom 
              and 1 bathroom with a shower. In the well-fitted kitchen, guests will find a stovetop, a refrigerator, 
              kitchenware and an oven. The suite provides a washing machine, a tea and coffee maker, as well as a 
              terrace and a patio. The unit offers 1 bed.
            </p>
            <div class="d-grid gap-2">
            <Button variant="primary" href="https://wa.me/5598985540632">
              Reservar este quarto
            </Button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default BookingPopup;
