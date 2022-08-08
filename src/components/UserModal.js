import React from "react";
import { Modal, Card } from "react-bootstrap";
import Rating from "./FakeRating";
import Sammy from "../photos/Sammy.jpg";
import worker from "../photos/worker.png";

function PeopleModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div>
        <Card className="borrower">
          <Card.Img variant="top" src={Sammy} alt="profile" />
          <Card.Body>
            <Card.Title>
              J. Smith <Rating />
            </Card.Title>
            <Card.Text>St. John's and surrounding area.</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Modal>
  );
}

function PeepModal() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <img src={worker} alt="person" onClick={() => setModalShow(true)} />
      <PeopleModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default PeepModal;
