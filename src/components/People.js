import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import Drake from '../photos/Drake.JPG'
import './People.css'
import PeepModal from "./UserModal";

const people = [
    'Joe Smith',
    'Sophie Mill',
    'Iphigenia Arie',
    'Melchiorre Hana',
    'Avdotya Claudia',
];


function People(){
    return(
    <>
        <div>
            <div>
                <Card.Header className="title">Contacts</Card.Header>
                {people.map((people, index) =>
                <Card className="tard" key={index}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <img src={Drake} alt="profile" className="picture"/>
                            {people}
                            <PeepModal />
                        </ListGroup.Item>
                    </ListGroup>
                </Card>)}
            </div>
            <div>

            </div>
        </div>
    </>)
}

export default People;