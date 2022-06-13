import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
import LoginContext from "../LogInContext";
import { useContextPersisted } from "./Hooks";

const createTool = async (token, toolName) => {
  const body = { toolName: toolName };
  const response = await fetch(`http://localhost:3001/tool`, {
    body: JSON.stringify(body),
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    method: "POST",
  });
  return await response.json();
};


function ToolModal(props) {
  const [token] = useContextPersisted(LoginContext, "token");

  
  // specify upload params and url for your files
  const getUploadParams = ({ meta }) => { return { url: 'https://httpbin.org/post' } }
    
  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }
  
  //TODO: make this only take in one photo, turn it into base 64 and store console log it. THENNNN -> send the string to toolAdd function to send to the database. 
  // receives array of files that are done uploading when submit button is clicked
  const handleSubmit = (files, allFiles) => {
    console.log(files.map(f => f.meta))
    allFiles.forEach(f => f.remove())
  }

  const convertIMG = (e) => {
    e.preventDefault();
    let filesSelected = document.getElementById("inputFileToLoad").files;
    if (filesSelected.length > 0) {
      let fileToLoad = filesSelected[0];

      let fileReader = new FileReader();

      fileReader.onload = function(fileLoadedEvent) {
        let srcData = fileLoadedEvent.target.result; // base64 result
        console.log(srcData);
      }
      fileReader.readAsDataURL(fileToLoad);
  }}

  const toolAdd = (e) => {
    e.preventDefault();
    const newTool = createTool(token, e.target.elements.toolName.value);
    console.log(newTool);
    return newTool;
  };

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
