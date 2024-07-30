import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const googleMapIframe = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d893.2471944787302!2d-42.272574488901526!3d-2.7611805557558045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ee0b342e107ab9%3A0xb4d77e1a5c4175cc!2sMini%20Hostel!5e1!3m2!1spt-BR!2sbr!4v1722297721683!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade';

const LocationSection = () => {
  const position = [-2.761340, -42.272000]; // Coordenadas de Tutóia-MA

  // Custom icon for the marker

  return (
    <Container className="location-section py-5">
      <Row>
        <Col>
          <h2 className="text-center mb-4">Localização</h2>
          <Card className="shadow-sm">
            <Row noGutters>
              <Col md={6} >
              <div class="embed-responsive embed-responsive-16by9">

      <iframe class="embed-responsive-item" title="Mapa do Empire State Building" src={googleMapIframe}  style={{ border: '0', objectFit:'contain' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
              </Col>
              <Col md={6} className="d-flex flex-column justify-content-center p-4">
                <h3>Mini Hostel</h3>
                <p>
                  Rua Exemplo, 123 <br />
                  Tutóia-MA, Brasil <br />
                  CEP: 65580-000
                </p>
                <p>
                  <strong>Telefone:</strong> +55 98 98554-0632
                </p>
                <p>
                  <strong>Email:</strong> contato@minihostel.com
                </p>
                <p>
                  Venha nos visitar e aproveite a hospitalidade de Tutóia!
                </p>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LocationSection;
