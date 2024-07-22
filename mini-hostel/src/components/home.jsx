import React from 'react';
import { Container } from 'react-bootstrap';
import './Home.css';

function Home() {
  return (
    <div className="custom-jumbotron text-center">
      <Container>
        <h1>Bem-vindo ao Mini Hostel</h1>
        <p>O melhor lugar para se hospedar em Tutóia-MA.</p>
      </Container>
    </div>
  );
}

export default Home;
