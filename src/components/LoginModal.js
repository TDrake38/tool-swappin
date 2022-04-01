import React, { useContext, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import LoginContext from "../LogInContext";
import { useAuth } from "./Auth"


const fetchData = async () => {
  const response = await fetch("http://localhost:3001/login");
  const json = await response.json();
  return json;
};

function MyModal(props) {
  const [, setLoggedIn] = useContext(LoginContext);
  // const [authenticated, setAuthenticated] = useState([]);

//   useEffect(() => {
//     let mounted = true;

//     const fetchDataAsync = async () => {
//       const data = await fetchData();
//       if (mounted) {
//         setAuthenticated(data);
//       }
//     };

//     fetchDataAsync();

//     return () => {
//       mounted = false;
//     };
//   }, []);

// console.log(response)

// const loginSubmit = (e) => {
  //   e.preventDefault();
  //   setAuthenticated("")
  // }

  const buttonSubmit = (e) => {
    e.preventDefault();
    setLoggedIn(true)
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
        <Form onSubmit={buttonSubmit/*loginSubmit*/}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Username" />
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