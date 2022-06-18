import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import 'react-dropzone-uploader/dist/styles.css'
import LoginContext from "../LogInContext";
import { useContextPersisted } from "./Hooks";

const createTool = async (token, srcData, toolName) => {
  const body = { photo: srcData, toolName: toolName };
  const response = await fetch(`http://localhost:3001/tool`, {
    body: JSON.stringify(body),
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    method: "POST",
  });
  return await response.json();
};


function ToolModal(props) {
  const [token] = useContextPersisted(LoginContext, "token");

  const convertIMG = (e) => {
    e.preventDefault();
    const filesSelected = document.getElementById("inputFileToLoad").files;
    if (filesSelected.length > 0) {
      const fileToLoad = filesSelected[0];

      const fileReader = new FileReader();

      fileReader.onload = function(fileLoadedEvent) {
        const srcData = fileLoadedEvent.target.result; // base64 result
        const newTool = createTool(token, srcData, e.target.elements.toolName.value);
        return newTool;
      }
      fileReader.readAsDataURL(fileToLoad);
  }}

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
          {/* <Dropzone
          getUploadParams={getUploadParams}
          onChangeStatus={handleChangeStatus}
          onSubmit={handleSubmit}
          accept="image/*"
          name="photo"
        /> */}
        <input id="inputFileToLoad" type="file" name="image" />
        <Form onSubmit={convertIMG}>
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
