import React, { useContext } from "react";
import './Profile.css'
import NameInput from "./InputName";
import AreaInput from "./InputArea";
import SaveButton from "./SaveButton";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import Drake from "../photos/Drake.JPG"
import drill from "../photos/drill.jpg"
import People from "./People";
import LoginContext from "../LogInContext";


function Profile() {
    const [isLoggedIn] = useContext(LoginContext);

    return (
        <>
            <div className="profile">
                {isLoggedIn ? 'Logged In' : 'Not Logged In'}
                <div>
                    <Card className="hard">
                        <Card.Img variant="top" src={Drake} alt="profile" />
                        <Card.Body>
                            <NameInput />
                            <AreaInput />
                            <SaveButton />
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem><img src={drill} alt="drill" className="tool" /><Card.Link href="#">Tool 1</Card.Link></ListGroupItem>
                            <ListGroupItem><img src={drill} alt="drill" className="tool" /><Card.Link href="#">Tool 2</Card.Link></ListGroupItem>
                            <ListGroupItem><img src={drill} alt="drill" className="tool" /><Card.Link href="#">Tool 3</Card.Link></ListGroupItem>
                        </ListGroup>
                    </Card>
                </div>
                <div className="">

                </div>
                <div className="people">
                    <People />
                </div>
            </div>
        </>
    )
}

export default Profile;