import React from "react";
import styles from './Listing.module.css'
import './Listing.css'
import drill from '../photos/drill.jpg'
import { Card, Button } from "react-bootstrap";

function Listing () {

    const check = (e) => {
        console.log("Finding");
    }

    return (
        <>
            <Card className={styles.fard}>
                <Card.Img variant="top" src={drill} alt="A drill" className="piccy"/>
                <Card.Body>
                    <Card.Title className="tool-name">Dewalt Impact</Card.Title>
                    <Card.Text className="tool-area">
                    St. John's.
                    </Card.Text>
                    <Button variant="dark" onClick={check} className="button">Check On</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default Listing;