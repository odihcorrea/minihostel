import React from 'react';
import { Card, Container } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './ReviewsSection.css'; // Certifique-se de importar o arquivo CSS

const reviews = [
    {
      title: "Excelente estadia!",
      rating: 10,
      author: "Ana",
      date: "Julho 2024",
      text: "O Mini Hostel é incrível! Os funcionários são super atenciosos e a localização é perfeita. Recomendo a todos!"
    },
    {
      title: "Muito bom",
      rating: 9,
      author: "Carlos",
      date: "Junho 2024",
      text: "Gostei muito do hostel. Ótima relação custo-benefício e o Wi-Fi gratuito é um grande diferencial."
    },
    {
      title: "Perfeito",
      rating: 10,
      author: "Fernanda",
      date: "Março 2024",
      text: "Tudo perfeito, desde a chegada até a partida. O hostel é lindo e os funcionários são super prestativos."
    },
    {
      title: "Gostei",
      rating: 9,
      author: "Mariana",
      date: "Janeiro 2024",
      text: "Ambiente agradável e confortável. Excelente custo-benefício."
    },
    {
      title: "Adorei",
      rating: 10,
      author: "Juliana",
      date: "Novembro 2023",
      text: "Simplesmente adorei! Voltarei com certeza."
    },
    {
      title: "Muito bom",
      rating: 9,
      author: "Pedro",
      date: "Outubro 2023",
      text: "Ótima estadia, recomendo a todos."
    }
  ];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

const ReviewCardCarousel = () => {
  return (
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={true}
      responsive={responsive}
      ssr={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      customTransition="transform 0.5s ease"
      transitionDuration={500}
      containerClass="carousel-container3"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {reviews.map((review, index) => (
        <Card key={index} className="cards" style={{ height: '14rem', width: '18rem',  }}>
          <Card.Body>
            <Card.Title className='text-center'>{review.title}</Card.Title>
            <Card.Subtitle className="text-center mb-2 text-muted">Nota: {review.rating}/10</Card.Subtitle>
            <Card.Text className='text-center'>{review.text}</Card.Text>
            <footer className="bg-light text-right font-italic">{review.author} em <cite title="Source Title">{review.date}</cite></footer>
          </Card.Body>
        </Card>
      ))}
    </Carousel>
  );
};

const ReviewsSection = () => {
  return (
    <Container id="reviews-section" className="mt-5">
      <ReviewCardCarousel />
    </Container>
  );
};

export default ReviewsSection;
