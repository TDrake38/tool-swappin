import React, { /*useContext*/ } from "react";
import './Profile.css';
import NameInput from "./InputName";
import AreaInput from "./InputArea";
import SaveButton from "./SaveButton";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import Drake from "../photos/Drake.JPG";
import drill from "../photos/drill.jpg";
import People from "./People";
import AddTool from "./AddTool";
import Rating from "./FakeRating";




function Profile() {
    

    return (
        <>
            <div className="profile">
                <Card className="hard">
                    <Card.Img variant="top" src={Drake} alt="profile" />
                    <Card.Body>
                        <NameInput />
                        <AreaInput />
                        <SaveButton />
                        <Rating />
                    </Card.Body>
                </Card>
                <ListGroup className="list-group-flush tool-list">
                    <div className="tool-title">
                        Tool List
                    </div>
                    <ListGroupItem className="list-item"><img src={drill} alt="drill" className="tool" /><Card.Link href="#">Tool 1</Card.Link></ListGroupItem>
                    <ListGroupItem className="list-item"><img src={drill} alt="drill" className="tool" /><Card.Link href="#">Tool 2</Card.Link></ListGroupItem>
                    <ListGroupItem className="list-item"><img src={drill} alt="drill" className="tool" /><Card.Link href="#">Tool 3</Card.Link></ListGroupItem>
                    <AddTool />
                </ListGroup>
                <div className="people">
                    <People />
                </div>
            </div>
        </>
    )
}

export default Profile;