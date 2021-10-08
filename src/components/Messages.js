import React from "react";
import People from "./People";
import Drake from '../photos/Drake.JPG'
import { Form } from "react-bootstrap";
import './Messages.css'



function Messages () {
    return(
        <>
            <div  className="messages">
                <img src={Drake} alt="profile" className="dp pict"/>
                <div className="chat">
                    <div className="mess-box">

                    </div>
                    <div className="mess-text">
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                        </Form>
                    </div>
                </div>
                <div className="people">
                    <People />
                </div>
            </div>
        </>
    )
}

export default Messages;