import React, { useContext, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import LoginContext from "../LogInContext";

const login = async ({ username, password}) => {
  const body = { username: username, password: password };
  const response = await fetch("http://localhost:3001/login", { body: JSON.stringify(body), headers: {'Content-Type': 'application/json'}, method: "POST" } );
  const { accessToken } = await response.json()
  return accessToken;
}

function MyModal(props) {
  const [, setLoggedIn] = useContext(LoginContext);

  const buttonSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target.elements.password.value)
    const token = await login({ username: e.target.elements.username.value, password: e.target.elements.password.value });
    console.log(token)
    setLoggedIn(token)
  }

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header>
        <Modal.Title >
          Login
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={buttonSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Username" id="username" name="username"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" id="password" name="password"/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

function LoginModal() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="dark" onClick={() => setModalShow(true)}>
        Login
      </Button>

      <MyModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default LoginModal;