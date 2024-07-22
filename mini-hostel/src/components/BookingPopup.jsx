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
      <Modal.Header closeButton>
        <Modal.Title>Suíte Standard</Modal.Title>
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
            <h2>Suíte Standard</h2>
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
            <Button variant="primary" href="https://www.booking.com/hotel/br/mini-hostel-tutoia1.pt-br.html?aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaCCIAQGYAS24ARfIAQzYAQHoAQH4AQyIAgGoAgO4Ate3-bQGwAIB0gIkZjc1NzFmZDktYmRlNC00ZjRkLThkYjgtMDQ4MTM5MWU5MDg32AIG4AIB&sid=4b66c00f0209ce853ea702f07f1401e6&all_sr_blocks=807713001_350984701_2_1_0;checkin=2024-07-25;checkout=2024-07-26;dest_id=8077130;dest_type=hotel;dist=0;group_adults=2;group_children=0;hapos=1;highlighted_blocks=807713001_350984701_2_1_0;hpos=1;matching_block_id=807713001_350984701_2_1_0;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;sr_pri_blocks=807713001_350984701_2_1_0__16000;srepoch=1721654261;srpvid=7e275d78f2440319;type=total;ucfs=1&">
              Reservar este quarto
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default BookingPopup;
