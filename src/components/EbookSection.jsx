import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ebookImage from "../assets/img/capaDoLivro.png"; // Substitua pelo caminho correto da imagem do ebook
import './EbookSection.css'


const EbookSection = () => {
  return (
    <Container className=" ebook-section py-5">
      <Row className="align-items-center text-light">
        <Col md={5}>
          <img src={ebookImage} alt="Ebook" className="img-fluid" />
        </Col>
        <Col className="rounded p-" md={6}>
          <h2>Está planejando viajar pela Rota das Emoções?</h2>
          <p>
            Adquira nosso ebook completo com informações valiosíssimas sobre Tutóia e as cidades da Rota das Emoções.
          </p>
          <Button variant="primary" href="/ebook" className="btn btn-block">Saiba Mais</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default EbookSection;
