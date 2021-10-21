import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav, Container,} from 'react-bootstrap';
import LoginModal from './LoginModal';
import './NavBar.css'
import LogOutButton from './LogOutButton';

const NavBar = () => {
  return (
    <>
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand>
          <Nav.Link as={Link} to="/" className="title-link">Tool Swapping</Nav.Link>
        </Navbar.Brand>
        <LogOutButton />
        <LoginModal />
      </Container>
    </Navbar>
      <Container>
        <Nav variant="tabs" >
          <Nav.Item>
            <Nav.Link as={Link} to="/profile" eventKey="link-1">Profile</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/search" eventKey="link-2">Search</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/messages" eventKey="link-3">Messages</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </>
  )
}

export default NavBar;