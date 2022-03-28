import React, { useContext } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import LoginContext from "../LogInContext";
//import { useAuth } from "./Auth";

function MyModal(props) {
  const [, setLoggedIn] = useContext(LoginContext);
  //const [authenticated, user] = useAuth(/*something goes here*/);

  const buttonSubmit = (e) => {
    e.preventDefault();
    setLoggedIn(true)
  }

//   const loginSubmit = (e) => {
//     e.preventDefault();
//     const { loginWithRedirect } = useAuth0();

//   }

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
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
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