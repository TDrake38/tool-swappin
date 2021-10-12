import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav, Container,} from 'react-bootstrap';
import LoginModal from './LoginModal';
import './NavBar.css'

const NavBar = () => {
  return (
    <>
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand>
          <Nav.Link as={Link} to="/" id="home" className="title-link">Tool Swapping</Nav.Link>
        </Navbar.Brand>
        <LoginModal />
      </Container>
    </Navbar>
      <Container>
        <Nav variant="tabs" >
          <Nav.Item>
            <Nav.Link as={Link} to="/search" id="search" eventKey="link-2">Search</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/profile" id="profile" eventKey="link-4">Profile</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/messages" id="messages" eventKey="link-5">Messages</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </>
  )
}

export default NavBar;