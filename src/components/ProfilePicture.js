import React from "react";
import { Button, Modal} from "react-bootstrap";
import "react-dropzone-uploader/dist/styles.css";
import LoginContext from "../LogInContext";
import { useContextPersisted } from "./Hooks";

const editPhoto = async (token, srcData) => {
  const body = { photo: srcData };
  const response = await fetch(`http://localhost:3001/editPhoto`, {
    body: JSON.stringify(body),
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    method: "POST",
  });
  return await response.json();
};

function ProfilePicModal(props) {
  const [token] = useContextPersisted(LoginContext, "token");

  const convertIMG = (e) => {
    e.preventDefault();
    const filesSelected = document.getElementById("inputFileToLoad").files;
    if (filesSelected.length > 0) {
      const fileToLoad = filesSelected[0];

      const fileReader = new FileReader();

      fileReader.onload = function (fileLoadedEvent) {
        const srcData = fileLoadedEvent.target.result; // base64 result
        const newPic = editPhoto(
          token,
          srcData
        );
        return newPic;
      };
      fileReader.readAsDataURL(fileToLoad);
    }
  };

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <input id="inputFileToLoad" type="file" name="image" />
        <Button variant="primary" type="submit" onClick={convertIMG}>
          Submit
        </Button>
      </Modal.Body>
    </Modal>
  );
}

function AddPic() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="dark" onClick={() => setModalShow(true)}>
        Edit Profile Picture
      </Button>

      <ProfilePicModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default AddPic;
