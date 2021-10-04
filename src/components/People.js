import React from "react";

import { Card, ListGroup } from "react-bootstrap";
import Drake from '../photos/Drake.JPG'
import './People.css'


function People(){
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Header className="title">Contacts</Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <img src={Drake} alt="profile photo" className="picture"/>
                    Joe Smith
                </ListGroup.Item>
                <ListGroup.Item>
                    <img src={Drake} alt="profile photo" className="picture"/>
                    Sophie Mill
                </ListGroup.Item>
                <ListGroup.Item>
                    <img src={Drake} alt="profile photo" className="picture"/>
                    Iphigenia Arie
                </ListGroup.Item>
                <ListGroup.Item>
                    <img src={Drake} alt="profile photo" className="picture"/>
                    Melchiorre Hana
                </ListGroup.Item>
                <ListGroup.Item>
                    <img src={Drake} alt="profile photo" className="picture"/>
                    Avdotya Claudia
                </ListGroup.Item>
                <ListGroup.Item>
                    <img src={Drake} alt="profile photo" className="picture"/>
                    Walter Saldís
                </ListGroup.Item>
                <ListGroup.Item>
                    <img src={Drake} alt="profile photo" className="picture"/>
                    Sakari Narayanan
                </ListGroup.Item>
                <ListGroup.Item>
                    <img src={Drake} alt="profile photo" className="picture"/>
                    Doreen Lelisa
                </ListGroup.Item>
                <ListGroup.Item>
                    <img src={Drake} alt="profile photo" className="picture"/>
                    Tófa Slaven
                </ListGroup.Item>
            </ListGroup>
        </Card>
    )
}

export default People;