import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Tool Swappin</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/search">Search</Nav.Link>
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
          <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
          <Nav.Link as={Link} to="/messages">Messages</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavBar;