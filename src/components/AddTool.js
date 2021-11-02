import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import AreaInput from "./InputArea";
import MyUploader from "./PhotoDrop";

function ToolModal(props) {

  const toolAdd = (e) => {
    e.preventDefault();
    console.log('Tool added')
  }

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header>
        <Modal.Title >
          Add Tool
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <MyUploader />
        <Form onSubmit={toolAdd}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <AreaInput />
          <Button variant="primary" type="submit">
            Done
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

function AddTool() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="dark" onClick={() => setModalShow(true)}>
        Add
      </Button>

      <ToolModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default AddTool;