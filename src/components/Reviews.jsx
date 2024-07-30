// src/components/Reviews.jsx

import React from "react";
import { Container, Row, Col, ProgressBar, Card, Button } from "react-bootstrap";
import "./Reviews.css";

function Reviews() {
  const summary = {
    overallRating: 8.6,
    reviewCount: 132,
    categories: [
      { name: "Funcionários", rating: 9.3 },
      { name: "Comodidades", rating: 8.1 },
      { name: "Limpeza", rating: 8.2 },
      { name: "Conforto", rating: 8.1 },
      { name: "Custo-benefício", rating: 8.8 },
      { name: "Localização", rating: 9.0 },
      { name: "WiFi gratuito", rating: 10.0 },
    ],
  };

  return (
    <Container className="my-5" id="reviews">
      <h2 className="text-center mb-4">Avaliações dos hóspedes sobre Mini Hostel</h2>
      <Card className="p-4 mb-4">
        <Row>
          <Col md={2} className="text-center">
            <div className="overall-rating">
              <span>{summary.overallRating}</span>
              <div>Fabuloso</div>
              <div>{summary.reviewCount} avaliações</div>
            </div>
          </Col>
          <Col md={10}>
            <div className="categories">
              {summary.categories.map((category, index) => (
                <Row key={index} className="mb-2 align-items-center">
                  <Col md={4}><strong>{category.name}</strong></Col>
                  <Col md={6}>
                    <ProgressBar
                      now={(category.rating / 10) * 100}
                      variant={category.rating >= 9 ? "success" : "primary"}
                      label={category.rating}
                    />
                  </Col>
                </Row>
              ))}
            </div>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default Reviews;
