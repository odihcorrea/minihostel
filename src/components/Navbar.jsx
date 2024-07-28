import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
import './Navbar.css';
 

function CustomNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" >
      <Navbar.Brand as={Link} to="/">
      <img src="./img/mini-hostel-logo.png" className='logo' alt="Mini Hostel"/>
      Mini Hostel
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between"> {/* Adiciona a classe de justificativa */}
        <Nav className="m-auto"> {/* Links à esquerda */}
          {/* Links de navegação */}
        </Nav>
        <Nav className="ml-auto"> {/* Links à direita */}
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link href="#quartos">Quartos</Nav.Link>
          <Nav.Link as={Link} to="/how-to-get">Como Chegar</Nav.Link>
          <Nav.Link as={Link} to="/tours">Passeios</Nav.Link>
          <Nav.Link as={Link} to="/ebook">Ebook</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contato</Nav.Link>
        </Nav>
        <Button variant="outline-warning" href="/details" className="ml-3">FAZER RESERVA</Button> {/* Adiciona margem para separar o botão dos links */}
      </Navbar.Collapse>
    </Navbar>
  );
}


export default CustomNavbar;
