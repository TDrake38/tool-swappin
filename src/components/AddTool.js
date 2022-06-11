import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import MyUploader from "./PhotoDrop";

function ToolModal(props) {

  const toolAdd = (e) => {
    e.preventDefault();
    console.log("Tool added");
  };

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <MyUploader />
        <Form onSubmit={toolAdd}>
          <Form.Control
            placeholder="Tool Name"
            aria-label="Tool Name"
            aria-describedby="basic-addon1"
            name="toolName"
          />
          <Button variant="primary" type="submit">
            Add
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

      <ToolModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default AddTool;
