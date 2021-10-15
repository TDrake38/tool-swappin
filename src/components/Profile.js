import React from "react";
import './Profile.css'
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import Drake from "../photos/Drake.JPG"
import drill from "../photos/drill.jpg"
import People from "./People";


function Profile () {
    return (
        <>
            <div className="profile">
                <div>
                    <Card className="card">
                        <Card.Img variant="top" src={Drake} alt="profile" />
                        <Card.Body>
                            <Card.Title>T. Drake</Card.Title>
                            <Card.Text>
                            St. John's and surrounding area.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem><img src={drill} alt="drill" className="tool"/><Card.Link href="#">Tool 1</Card.Link></ListGroupItem>
                            <ListGroupItem><img src={drill} alt="drill" className="tool"/><Card.Link href="#">Tool 2</Card.Link></ListGroupItem>
                            <ListGroupItem><img src={drill} alt="drill" className="tool"/><Card.Link href="#">Tool 3</Card.Link></ListGroupItem>
                        </ListGroup>
                    </Card>
                </div>
                <div className="feed">

                </div>
                <div className="people">
                    <People />
                </div>
            </div>
        </>
    )
}

export default Profile;