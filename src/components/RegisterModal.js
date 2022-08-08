import React from "react";
import { Button, Modal, Form } from "react-bootstrap";

const register = async ({ username, area, password }) => {
  const body = { username: username, area: area, password: password };
  const response = await fetch("http://localhost:3001/register", {
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
    method: "POST",
  });
  const { accessToken } = await response.json();
  return accessToken;
};

function RegModal(props) {
  const buttonSubmit = async (e) => {
    e.preventDefault();
    await register({
      username: e.target.elements.username.value,
      area: e.target.elements.area.value,
      password: e.target.elements.password.value,
    });
    //change this from an alert to something cooler
    alert("Now you can login.");
  };

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title>Register</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={buttonSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Username"
              id="username"
              name="username"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Area</Form.Label>
            <Form.Control
              type="text"
              placeholder="Area"
              id="area"
              name="area"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              id="password"
              name="password"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Register
          </Button>
          <h4>
            By registering for ToolSwappin you agree that ToolSwappin takes no
            responsability for stolen, broken or lost tools. Use at your own
            risk.
          </h4>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

function RegisterModal() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="dark" onClick={() => setModalShow(true)}>
        Register
      </Button>

      <RegModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default RegisterModal;
