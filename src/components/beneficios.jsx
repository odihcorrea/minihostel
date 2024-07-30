import React from 'react';
import { Col, Container, Row} from 'react-bootstrap';
import { FaDollarSign, FaExchangeAlt, FaMapMarkerAlt, FaSmile, FaUtensils, } from 'react-icons/fa';
import { FaMapLocationDot } from "react-icons/fa6";


function Beneficios() {
  return (
    <Container className=" mt-5">
        <Row className="text-center">
          <Col md={2} className="my-2">
            <FaDollarSign size={50} />
            <h5 className="mt-2">Custo-Benefício</h5>
            <p>Ótimos preços e excelente serviço.</p>
          </Col>
          <Col md={2} className="my-2">
            <FaUtensils size={50} />
            <h5 className="mt-2">Cozinha e lavanderia</h5>
            <p>Facilidade para preparar suas refeições e cuidar de suas roupas.</p>
          </Col>
          <Col md={2} className="my-2">
            <FaMapMarkerAlt size={50} />
            <h5 className="mt-2">Ótima Localização</h5>
            <p>Perto de pontos turísticos e conveniências.</p>
          </Col>
          <Col md={2} className="my-2">
            <FaSmile size={50} />
            <h5 className="mt-2">Excelente atendimento</h5>
            <p>Equipe pronta para ajudar com um sorriso.</p>
          </Col>
          <Col md={2} className="my-2">
            <FaExchangeAlt size={50} />
            <h5 className="mt-2">Troca de experiências</h5>
            <p>Encontre e socialize com outros viajantes.</p>
          </Col>
          <Col md={2} className="my-2">
            <FaMapLocationDot  size={50} />
            <h5 className="mt-2">Passeios</h5>
            <p>Passeios e hospedagem tudo em um só lugar</p>
          </Col>
          
        </Row>
      </Container>
  );
}

export default Beneficios;
