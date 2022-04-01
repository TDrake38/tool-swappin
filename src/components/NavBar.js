import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav, Container,} from 'react-bootstrap';
import LoginModal from './LoginModal';
import './NavBar.css'
import LogOutButton from './LogOutButton';
import LoginContext from '../LogInContext';


const NavBar = () => {
  const [isLoggedIn] = useContext(LoginContext)
  
  return (
    <>
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand>
          <Nav.Link as={Link} to="/" className="title-link">Tool Swapping</Nav.Link>
        </Navbar.Brand>
        {isLoggedIn ? <LogOutButton /> : <LoginModal />}
      </Container>
    </Navbar>
      <Container>
        <Nav variant="tabs" >
          <Nav.Item>
            <Nav.Link as={Link} to="/search" eventKey="link-1">Search</Nav.Link>
          </Nav.Item>
          {isLoggedIn ? <Nav.Item>
            <Nav.Link as={Link} to="/profile" eventKey="link-2">Profile</Nav.Link>
          </Nav.Item> : null}
          {isLoggedIn ? <Nav.Item>
            <Nav.Link as={Link} to="/messages" eventKey="link-3">Messages</Nav.Link>
          </Nav.Item> : null}
        </Nav>
      </Container>
    </>
  )
}

export default NavBar;