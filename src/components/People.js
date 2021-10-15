import React from "react";

import { Card, ListGroup } from "react-bootstrap";
import Drake from '../photos/Drake.JPG'
import './People.css'

const people = [
    'Joe Smith',
    'Sophie Mill',
    'Iphigenia Arie',
    'Melchiorre Hana',
    'Avdotya Claudia',
    'Walter Saldís',
    'Sakari Narayanan',
    'Doreen Lelisa',
    'Tófa Slaven'
];


function People(){
    return(
    <>
        <div>
            <div>
                <Card.Header className="title">Contacts</Card.Header>
                {people.map((people, index) =>
                <Card className="card" key={index}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <img src={Drake} alt="profile" className="picture"/>
                            {people}
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