import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import HowToGetSection from './HowToGetSection';
import EbookSection from './EbookSection';



function HowToGet() {
  return (
    <Jumbotron className="text-center p-3">
      <Container>
        <h1>Como chegar ao Mini Hostel</h1>
        <p>Conheça as principais rotas que levam até Tutóia/MA.</p>
      </Container>

      <HowToGetSection/>

      <EbookSection />



    </Jumbotron>


  );
}

export default HowToGet;
