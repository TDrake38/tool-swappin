import React from "react";
import './Listing.css'
import drill from '../photos/drill.jpg'
import { Card, Button } from "react-bootstrap";

function Listing () {

    const check = (e) => {
        console.log("Finding");
    }

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={drill} alt="A drill" />
                <Card.Body>
                    <Card.Title>Dewalt Impact</Card.Title>
                    <Card.Text>
                    This is a 1/2" Dewalt Battery Impact.
                    </Card.Text>
                    <Button variant="primary" onClick={check}>Check On</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default Listing;