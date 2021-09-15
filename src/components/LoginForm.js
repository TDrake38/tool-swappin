import React, {Component} from "react";
import {Form, Button } from "react-bootstrap";


class Login extends Component {
    render() {
    return (
        <div>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control  type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
              We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
    
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit" size="">
            Submit
            </Button>
          </Form>
        </div>
      )
    }
}   

export default Login;