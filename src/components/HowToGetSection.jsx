import React, { useState } from "react";
import { Button, Container, Row, Col, ListGroup, Fade } from "react-bootstrap";

const HowToGetSection = () => {
  const [key, setKey] = useState("barreirinhas");
  const [fadeIn, setFadeIn] = useState(true);

  const handleSelect = (selectedKey) => {
    setFadeIn(false);
    setTimeout(() => {
      setKey(selectedKey);
      setFadeIn(true);
    }, 300); // Tempo da transição em milissegundos
  };

  return (
    <Container className="bg-light rounded how-to-get-there-section py-5">
      <Row>
        <Col sm={4}>
          <ListGroup >
            <ListGroup.Item  variant="primary" action active={key === "barreirinhas"} onClick={() => handleSelect("barreirinhas")}>
              De Barreirinhas
            </ListGroup.Item>
            <ListGroup.Item variant="primary" action active={key === "saoluis"} onClick={() => handleSelect("saoluis")}>
              De São Luís
            </ListGroup.Item>
            <ListGroup.Item variant="primary" action active={key === "parnaiba"} onClick={() => handleSelect("parnaiba")}>
              De Parnaíba
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={8}>
          <Fade in={fadeIn}>
            <div>
              {key === "barreirinhas" && (
                <div className="pt-3">
                  <h3 className="text-primary">De Barreirinhas</h3>
                  <p className="text-dark">
                    Para chegar ao Mini Hostel a partir de Barreirinhas, siga pela MA-315 em direção a Paulino Neves.
                    Continue pela MA-315 até Tutóia. A viagem dura cerca de 2 horas e meia.
                  </p>
                </div>
              )}
              {key === "saoluis" && (
                <div className="pt-3">
                  <h3 className="text-primary">De São Luís</h3>
                  <p className="text-dark">
                    Para chegar ao Mini Hostel a partir de São Luís, pegue a BR-135 até a saída para a BR-222.
                    Siga pela BR-222 até Chapadinha, depois pegue a MA-230 em direção a Tutóia. A viagem dura cerca de 6 horas.
                  </p>
                </div>
              )}
              {key === "parnaiba" && (
                <div className="pt-3">
                  <h3 className="text-primary">De Parnaíba</h3>
                  <p className="text-dark">
                    Para chegar ao Mini Hostel a partir de Parnaíba, siga pela BR-402 em direção a Chaval.
                    Continue pela MA-315 até Tutóia. A viagem dura cerca de 1 hora e meia.
                  </p>
                </div>
              )}
            </div>
          </Fade>
        </Col>
      </Row>
     
    </Container>
  );
};

export default HowToGetSection;
