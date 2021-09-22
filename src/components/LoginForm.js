import React, {Component} from "react";
import {Form, Button, Container, Card, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <div><Link to='/'>Home</Link></div>
      <div><Link to='/search'>Search</Link></div>
      <div><Link to='/login'>Login</Link></div>
      <div><Link to='/profile'>Profile</Link></div>
      <div><Link to='/messages'>Messages</Link></div>
      <Container>
          <Card style={{ width: '18rem'}}>
            <Card.Body>
                <h1>
                Login
              </h1>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control  type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit" size="">
                  Submit
                </Button>  
              </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  )
}  
  

export default Login;