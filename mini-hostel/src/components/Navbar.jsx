import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';

function CustomNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">Mini Hostel</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/rooms">Quartos</Nav.Link>
          <Nav.Link as={Link} to="/how-to-get">Como Chegar</Nav.Link>
          <Nav.Link as={Link} to="/tours">Passeios</Nav.Link>
          <Nav.Link as={Link} to="/ebook">Ebook</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contato</Nav.Link>
        </Nav>
        <Button variant="outline-info" href="https://www.booking.com" target="_blank">FAZER RESERVA</Button>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
