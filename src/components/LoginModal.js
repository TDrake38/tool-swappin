import React, { useContext, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import LoginContext from "../LogInContext";

const handleSubmit = async ({ username, password}) => {
  const response = await fetch("/login",{ username: username, password: password } );
  const { jwt_token } = await response.json()
  await login({ jwt_token })
  console.log(login);
}

function MyModal(props) {
  const [, setLoggedIn] = useContext(LoginContext);

  const buttonSubmit = (e) => {
    e.preventDefault();
    handleSubmit();
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