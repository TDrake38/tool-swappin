import React, { /*useContext*/ } from "react";
import './Profile.css';
import NameInput from "./InputName";
import AreaInput from "./InputArea";
import SaveButton from "./SaveButton";
import { Card } from "react-bootstrap";
import Drake from "../photos/Drake.JPG";
import People from "./People";
import Rating from "./FakeRating";
import Tool from "./ToolList";


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
                <Tool />
                <div className="people">
                    <People />
                </div>
            </div>
        </>
    )
}

export default Profile;